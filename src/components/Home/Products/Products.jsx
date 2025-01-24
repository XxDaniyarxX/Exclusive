import { useEffect } from "react"
import Loading from '../../../utils/Loading/Loading'
import { getProductByCategory } from "../../../Redux/Products/ProductSlice"
import { useDispatch, useSelector } from "react-redux"
import Product from '../../product/Product'

export default function Products() {
    const dispath = useDispatch()

    const { loading, categories, error } = useSelector((state) => state.products)

    console.log(categories);

    useEffect(() => {
        dispath(getProductByCategory())
    }, [
        dispath
    ])
    console.log(categories);



    return (
        <div style={{ display: 'flex', gap: '20px' }}>
            {
                categories.slice(0, 4).map((product) => (
                    <Product key={product.id} product={product} />
                ))
            }

        </div>
    )
}

