import { useEffect, useState } from "react"
import { getProductById } from "../AsyncMock/AsyncMock"
import "../AsyncMock/AsyncMock"
import "./ItemDetailContainer.css"
import ItemDetail from "../ItemDetail/ItemDetail"
import ItemLoader from "../ItemLoader/ItemLoader"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    
    const {productId} = useParams()
    console.log(productId)

    useEffect(() => {
        setLoading(true)
        getProductById(productId)
            .then(products => {
                setProducts(products)
            }).finally(() => {
                setLoading(false)
            })
    }, [productId])

    if (loading) {
        return (<ItemLoader/>)
    }

console.log(products);

    return (
        <div className="item_detail-container">
            <ItemDetail {...products} />
        </div>
    )
}

export default ItemDetailContainer