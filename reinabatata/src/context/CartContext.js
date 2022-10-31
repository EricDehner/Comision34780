import { useState, createContext, useEffect } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext({
    cart: [],
    totalQuantity: 0
})

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [totalQuantity, SetTotalQuantity] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const totalQty = getQuantity()
        SetTotalQuantity(totalQty)
    }, [cart])//eslint-disable-line

    useEffect(() => {
        const total = getTotal()
        setTotal(total)
    }, [cart])//eslint-disable-line

    const addItem = (productToAdd, quantity) => {
        if (!isInCart(productToAdd.id)) {
            productToAdd.quantity = quantity
            setCart([...cart, productToAdd])
            addAlert();
        } else {
            const cartUpdated = cart.map(prod => {
                if (prod.id === productToAdd.id) {
                    const productUpdated = {
                        ...prod,
                        quantity: quantity
                    }
                    addChangeAlert();


                    return (
                        productUpdated

                    )
                } else {
                    addAlert();
                    return prod
                }
            })

            setCart(cartUpdated)
        }
    }






    //Swal cartel produucto al carrito
    const addAlert = () => {
        Swal.fire(
            `¡Producto agregado al carrito!`,
            ``,
            `success`
        );
    }

    //Swal cartel error
    const addChangeAlert = () => {
        Swal.fire(
            `¡La cantidad del producto fue modificada!`,
            ``,
            `success`
        );
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const removeItem = (id) => {
        const cartWithoutProduct = cart.filter(prod => prod.id !== id)
        setCart(cartWithoutProduct)
    }

    const getQuantity = () => {
        let accu = 0
        cart.forEach(prod => {
            accu += prod.quantity
        })
        return accu
    }

    const getTotal = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.quantity * prod.price
        })

        return accu
    }

    const clearCart = () => {
        setCart([])
    }

    const getProductQuantity = (id) => {
        const product = cart.find(prod => prod.id === id)

        return product?.quantity
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, totalQuantity, total, clearCart, getProductQuantity }}>
            {children}
        </CartContext.Provider>
    )
}