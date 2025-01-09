import './styles/Home.scss'
import Banner from '../components/Home/banner/Banner.jsx'
import FlashSales from '../components/Home/Todays/Flash-sales.jsx'
import BrowseByCategory from '../components/Home/Categories/BrowseByCategory.jsx'
import BestSellingProducts from '../components/Home/ThisMonth/BestSellingProducts.jsx'
import ExploreOurProducts
  from '../components/Home/OurProducts/ExploreOurProducts.jsx'
import NewArrival from '../components/Home/Featured/NewArrival.jsx'

export default function Home() {
  return (
    <>
      <Banner/>
      <FlashSales/>
      <BrowseByCategory/>
      <BestSellingProducts/>
      <ExploreOurProducts />
      <NewArrival />
    </>
  )
}
