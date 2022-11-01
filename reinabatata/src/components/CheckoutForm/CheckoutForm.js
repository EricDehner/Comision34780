import "./CheckoutForm.css"
/* import Swal from "sweetalert2"; */
import { db } from '../../service/firebase/index'
import { DotWave } from '@uiball/loaders'
import { CartContext } from "../../context/CartContext"
import { useNavigate } from "react-router-dom"
import { useState, useContext } from "react"
import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'

const CheckoutForm = () => {
    const [loading, setLoading] = useState(false)
    const { cart, total, clearCart } = useContext(CartContext)

    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [mail, setMail] = useState("")
    
   /* const buyConfirm = () => {
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

                Swal.fire(
                    '¡Compra exitosa!',
                    'Nos contactaaremos a la brevedad para realizar el envío.',
                    'success'
                )
            }
        }) 
    }*/

    const createOrder = async () => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name: {name},
                    phone: {phone},
                    mail: {mail}
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

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                clearCart()

                setTimeout(() => {
                    navigate('/')
                }, 3000)

                
                
                console.log(`El id de su orden es: ${orderAdded.id}`)
            } else {
               console.log('hay productos que estan fuera de stock')
            }

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
        
    }

    /* if (loading) {
        return (
            <div className="uiball_loader">
                <DotWave size={110} speed={1} color="rgba(0, 0, 0, 0.733)" />
            </div>
        )
    } */


    return (
        <form className="form_container">
            <h2 className="check_tittle">Datos cliente</h2>
            <div>
                <input className="formImputs" type="text" placeholder="Ingrese su nombre y apellido.." onChange={ev=> setName(ev.target.value)}/>
            </div>
            <div>
                <input className="formImputs" type="numb" placeholder="Ingrese su telefono.." onChange={ev=> setPhone(ev.target.value)}/>
            </div>
            <div>
                <input className="formImputs" type="email" placeholder="Ingrese su e-mail.." onChange={ev=> setMail(ev.target.value)}/>
            </div>
            <div>
                <button className="buy_btn--alt"  onClick={createOrder} >
                    <p className="p">Comprar</p>
                    <i className="fa-regular fa-credit-card"></i>
                </button>
            </div>
        </form>
    )
}
export default CheckoutForm 