import './styles/Home.scss'
import Banner from '../components/Home/banner/Banner.jsx'
import Product from '../components/product/Product.jsx'
import {useState, useEffect} from 'react'
import axios from 'axios'
import FlashSales from '../components/Home/Todays/Flash-sales.jsx'
import Button from '../utils/button/Button.jsx'

export default function Home() {
  const [products, setProducts] = useState([])
  async function getProducts() {
    try {
      const response = await axios.get('https://dummyjson.com/products')
      setProducts(response.data.products)
      console.log(response.data.products)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])
  return (
    <div>

      <Banner/>
      <div className='products'>
        {
          products.slice(0, 4).map((product) => (
            <Product key={product.id} product={product}/>
          ))
        }
      </div>
      <Button />  
      {/* <Product /> */}
      {/* <FlashSales/> */}
      {/*<BrowseByCategory/>*/}
      {/*<BestSellingProducts/>*/}
      {/*<ExploreOurProducts />*/}
      {/*<NewArrival />*/}
    </div>
  )
}
