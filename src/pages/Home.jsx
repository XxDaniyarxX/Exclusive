import './styles/Home.scss'
import Banner from '../components/Home/banner/Banner.jsx'
import Product from '../components/product/Product.jsx'
import { useEffect } from 'react'
import axios from 'axios'
import FlashSales from '../components/Home/Todays/Flash-sales.jsx'
import Button from '../utils/button/Button.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { HomeFetch } from '../Redux/HomeProduct/HomeProduct.js'
export default function Home() {
  const dispath = useDispatch()

  const { loading, home, error } = useSelector((state) => state.HomeFetch)

  useEffect(() => {
    dispath(HomeFetch())
  }, [
    dispath
  ])
  console.log(home);


  return (
    <div>

      <Banner />
      <div className='products'>
        {
          home.slice(0, 4).map((product) => (
            <Product key={product.id} product={product} />
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
