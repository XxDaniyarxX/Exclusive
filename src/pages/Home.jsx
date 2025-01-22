import './styles/Home.scss'
import Banner from '../components/Home/banner/Banner.jsx'
import Product from '../components/product/Product.jsx'
import { useEffect } from 'react'
import Button from '../utils/button/Button.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { HomeFetch } from '../Redux/HomeProduct/HomeProduct.js'
import { getProductByCategory } from '../Redux/Products/ProductSlice.js'
import Products from '../components/Home/Products/Products.jsx'
export default function Home() {
 

  return (
    <div>

      <Banner />
      <div className='products'>
      <Products />
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
