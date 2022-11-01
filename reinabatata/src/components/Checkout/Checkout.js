import "./Checkout.css"
import Error from "../Error/Error"
import CheckoutCart from "../CheckoutCart/CheckoutCart"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const Checkout = () => {

    const { totalQuantity } = useContext(CartContext)

/*     if (totalQuantity === 0) {
        return (
            <div>
                <Error emptyCartt={"Su carrito ha desaparecido, ¡vea nuestros productos!"} />
            </div>
        )
    } */

    return (

        <div>
            <div className="checkout_container">
                <div>
                    <CheckoutForm />
                </div>
                <span className="stick"></span>
                <div className="form_container-cart">
                    <CheckoutCart />
                </div>
            </div>
        </div>

    )
}

export default Checkout