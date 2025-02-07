import './Banner.scss'
import Carousel from 'react-bootstrap/Carousel';
import banner from '../../../assets/img/img_5.png';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { category } from '../../../Redux/Category/Category';
import { getProductByCategory } from '../../../Redux/Products/ProductSlice';
export default function Banner() {
  const dispath = useDispatch()

  const { loading, categories, error } = useSelector((state) => state.Categorylist)

  useEffect(() => {
    dispath(category())
  }, [
    dispath
  ])
  console.log(categories);


  return (
    <div className='banner container'>
      <div className="banner-left">
        <ul>
          {
            categories.map((item, id) => (
              <li onClick={() => dispath( getProductByCategory(item) )} key={id}>
                {item}
              </li>
            ))
          }
        </ul>
        <div style={{
          height: '400px',
          width: '1px',
          backgroundColor: 'black',
          opacity: '30%',
        }}>
        </div>
      </div>
      <div className="banner-right">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={banner}
              alt="First slide"
            />
          </Carousel.Item>
          {/* Add more Carousel.Items as needed */}
        </Carousel>
      </div>
    </div>
  )
}