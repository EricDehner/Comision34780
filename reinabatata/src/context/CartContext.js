import { useState, createContext, useEffect } from "react";
/* import Swal from "sweetalert2"; */

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [totalQuantity, SetTotalQuantity] = useState(0)

    useEffect(() => {
        const totalQty = getQuantity()
        SetTotalQuantity(totalQty)
    }, [cart])


    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
        }
        else {
            alert("ya esta en carrito");
        }
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

    /*   const noAddAlert = () => {
        Swal.fire(
          `Error`,
          `Ya tienes agregado este producto al carrito`,
          `error`
        );
      } */

    console.log(cart);

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, totalQuantity }}>
            {children}
        </CartContext.Provider>
    )
}