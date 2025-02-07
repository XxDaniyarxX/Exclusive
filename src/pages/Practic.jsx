import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { baykotFetch } from "../Redux/Baykot/baykotSlice"
import Loading from "../utils/Loading/Loading"
export default function Practic() {
    const dispath = useDispatch()
    const { loading, products, error } = useSelector((state) => state.baykot)

    useEffect(() => {
        dispath(baykotFetch())
    }, [dispath])

    console.log(products)

    if (loading) return <Loading />
    if (error) return <h1>Error: {error}</h1>
    return (
        <div style={{display: 'flex', width: '1000px', gap: '50px', flexWrap: 'wrap', margin: '50px auto', textAlign: 'center'}}>
            {
                products.map((item) => (
                    <div key={item.uuid}>
                        <p>{item.brand}</p> 
                        <img width={100} height={100} src={item.logo} alt="" />
                    </div>
                ))
            }
        </div>
    )
}


