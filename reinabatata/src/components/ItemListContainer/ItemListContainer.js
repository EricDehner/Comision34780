import "./ItemListContainer.css"
import Loader from "../Loader/Loader.js"

const  ItemListContainer = ({ greeting }) => {
    return (
        <div>
        <div>
            <Loader />
        </div>
        <div>
        <h1 className="greeting">{greeting} </h1>
        </div>
        </div>
    )
}
export default ItemListContainer