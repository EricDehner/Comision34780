import "./ItemDetail.css"
import Counter from "../Counter/Counter"

import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({ id, img, name, description, price, stock }) => {
    
    const { addItem, getProductQuantity } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, img, price, description, quantity
        }
        addItem(productToAdd, quantity)
    }

const quantityAdded = getProductQuantity(id)

    return (
        <div key={id} className="detail_container">
            <div className="detail">
                <img className="detail_img" src={img} alt={name} />
                <div className="detail_content">
                    <h1 className="detail_content-name">{name}</h1>
                    <h3 className="detail_content-description">{description} </h3>
                    <p className="detail_content-price">Precio: ${price} </p>
                    <div className="detail_content-counter"><Counter onAdd={handleOnAdd} maxStock={stock} initial={quantityAdded} /></div>
                </div>
            </div>
        </div>
    )
}
export default ItemDetail