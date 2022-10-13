import { useEffect, useState } from "react"
import { getProductById } from "../AsyncMock/AsyncMock"
import "../AsyncMock/AsyncMock"
import "./ItemDetailContainer.css"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { DotWave } from '@uiball/loaders'


const ItemDetailContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

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

        return (
            <div className="uiball_loader">
                <DotWave size={110} speed={1} color="rgba(0, 0, 0, 0.733)" />
            </div>
        )
    }

    return (
        <div className="item_detail-container">
            <ItemDetail {...products} />
        </div>
    )
}

export default ItemDetailContainer