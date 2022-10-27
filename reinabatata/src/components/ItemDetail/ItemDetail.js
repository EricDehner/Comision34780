import "./ItemDetail.css"
import Counter from "../Counter/Counter"
import "../AsyncMock/AsyncMock"
import Swal from "sweetalert2"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({ id, img, name, description, price, stock }) => {
    const {addItem} = useContext(CartContext)
    
    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity
        }
        addItem( productToAdd)
        addAlert();

    }

    const addAlert = () => {
        Swal.fire(
            `${name}`,
            `Agregado al carrito`,
            `success`
        );
    }

    return (
        <div key={id} className="detail_container">
            <div className="detail">
                <img className="detail_img" src={img} alt={name} />
                <div className="detail_content">
                    <h1 className="detail_content-name">{name}</h1>
                    <h3 className="detail_content-description">{description} </h3>
                    <p className="detail_content-price">Precio: ${price} </p>
                    <div className="detail_content-counter"><Counter onAdd={handleOnAdd} maxStock={stock} /></div>
                </div>
            </div>
        </div>
    )
}
export default ItemDetail