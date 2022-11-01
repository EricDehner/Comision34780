import "./CheckoutForm.css"
import Swal from "sweetalert2";
import { db } from '../../service/firebase/index'
import { DotWave } from '@uiball/loaders'
import { CartContext } from "../../context/CartContext"
import { useNavigate } from "react-router-dom"
import { useState, useContext } from "react"
import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'

const CheckoutForm = () => {
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phone, setPhone] = useState("")
    const [mail, setMail] = useState("")
    const [purchase, setPurchase] = useState ("")
    const { cart, total, clearCart } = useContext(CartContext)
    const navigate = useNavigate()

    const buyConfirm = () => {
        Swal.fire({
            title: '¿Desea realizar la compra?',
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Comprar'
        }).then((result) => {
            if (result.isConfirmed) {
                createOrder()
                Swal.fire(
                    '¡Compra exitosa!',
                    `Nos contactaremos a la brevedad para realizar el envío, el numero de su compra es {orderAdded.id}`,
                    'success'
                )
            }
        })
    }

    const createOrder = async () => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name: { name },
                    lastName: { lastName },
                    phone: { phone },
                    mail: { mail }
                },
                items: cart,
                total: total
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, 'products')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })
            
            if (outOfStock.length === 0) {
                await batch.commit()
                
                const orderRef = collection(db, 'orders')
                
                const orderAdded = await addDoc(orderRef, objOrder)
                
                clearCart()
                
                setTimeout(() => {
                    navigate('/')
                }, 3000)
                

                setPurchase = orderAdded.id


                //quiero darle un scope a orderAdded.id para poder cambiar ese alert por un sweet alert. Cree un State purchase para guardar el numero del id pero no estaría siendo "global", en la linea 34, no puedo usarlo
                
                
               /*  alert(`El id de su orden es: ${orderAdded.id}`) */
            } else {
                alert('hay productos que estan fuera de stock')
            }

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

    }

    if (loading) {
        return (
            <div className="uiball_loader">
                <DotWave size={110} speed={1} color="rgba(0, 0, 0, 0.733)" />
            </div>
        )
    }


    return (
        <form className="form_container">
            <h2 className="check_tittle">Datos cliente</h2>
            <div>
                <input className="formImputs" type="text" placeholder="Ingrese su nombre.." onChange={ev => setName(ev.target.value)} required />
            </div>
            <div>
                <input className="formImputs" type="text" placeholder="Ingrese su apellido.." onChange={ev => setLastName(ev.target.value)} required />
            </div>
            <div>
                <input className="formImputs" type="number" placeholder="Ingrese su telefono.." onChange={ev => setPhone(ev.target.value)} />
            </div>
            <div>
                <input className="formImputs" type="email" placeholder="Ingrese su e-mail.." onChange={ev => setMail(ev.target.value)} required />
            </div>
            <div>
                <button className="buy_btn--alt" onClick={buyConfirm} >
                    <p className="p">Comprar</p>
                    <i className="fa-regular fa-credit-card"></i>
                </button>
            </div>
        </form>
    )
}
export default CheckoutForm 