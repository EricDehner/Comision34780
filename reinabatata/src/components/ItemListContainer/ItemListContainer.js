import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import { useEffect, useState } from "react"
import { getProducts } from "../AsyncMock/AsyncMock"
import ItemLoader from "../ItemLoader/ItemLoader"

const ItemListContainer = ({ tittleItemList }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts().then(response => {
            console.log(response);
            setProducts(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    if (loading) {
        return(
            <div >
            <ItemLoader />
        </div>
            )
    }

    console.log(products);

    return (
        <div>
            <div>
                <h1 className="tittleItemList">{tittleItemList} </h1>
                {/* { products.map(prod => <li>{prod.name}</li>) } */}
                <ItemList products={products} />
            </div>
        </div>
    )
}
export default ItemListContainer