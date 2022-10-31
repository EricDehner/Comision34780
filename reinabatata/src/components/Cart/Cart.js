import "./Cart.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"

const Cart = () => {

    const { cart, total, totalQuantity, clearCart } = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <div className="cart_center">
                <div className="cart_container--alt">
                    <div className="cart">
                        <h2 className="cart-tittle--alt">Actualmente no posee productos en el carrito</h2>
                        <div className="btn_container">
                            <Link to="/">
                                <button className="cart_btn--alt">Nuestros productos</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="cart_container">
            {cart.map(prod => <CartItem key={prod.id} {...prod} />)}
            <div className="cart_footer">
                <div className="cart_price">
                    <p>Total: </p>
                    <p>${total}</p>
                </div>
                <button className="cart_footer-cleanBtn" onClick={() => clearCart()}>Vaciar carrito</button>
                <Link to="/checkout">
                    <button className="cart_footer-btn">Comprar</button>
                </Link>
            </div>
        </div>
    )
}
export default Cart