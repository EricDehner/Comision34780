import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    return (
        <div>
            <i className="fa-solid fa-cart-shopping"></i> {totalQuantity}
        </div>
    )
}

export default CartWidget