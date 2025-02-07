import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchSmartphones } from "../Redux/Smartphones/SmartphoneSlice"

export default function Smartphone() {
  const dispatch = useDispatch()

  const { loading, smartphones, error } = useSelector((state) => state.smartphone)

  useEffect(() => { 
    dispatch(fetchSmartphones()) 
  }, [dispatch])
  console.log(smartphones);

  return (
    <div style={{display: 'flex', gap: '50px', width: '1000px', flexWrap: 'wrap', margin: '0 auto', textAlign: 'center'}}>
        {
          smartphones.map((item) => (
            <div key={item.id}> 
               <p>{item.brand}</p>
               <img width={100} height={100} src={item.thumbnail} alt="" />
            </div>
          ))
        } 
    </div>
  )
}