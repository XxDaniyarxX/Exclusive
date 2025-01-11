import './styles/Home.scss'
import Banner from '../components/Home/banner/Banner.jsx'
import Product from '../components/product/Product.jsx'
import {useState, useEffect} from 'react'
import axios from 'axios'

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
          products.map((item) => (
            <Product key={item.id} product={item}/>
          ))
        }
      </div>
      {/*<Product />*/}
      {/*<FlashSales/>*/}
      {/*<BrowseByCategory/>*/}
      {/*<BestSellingProducts/>*/}
      {/*<ExploreOurProducts />*/}
      {/*<NewArrival />*/}
    </div>
  )
}
