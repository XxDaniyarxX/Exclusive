import './Banner.scss'
import Carousel from 'react-bootstrap/Carousel';
import banner from '../../../assets/img/img_5.png';
import arrowleft from '../../../assets/svg/arrowleft.svg'


export default function Banner() {
  return (
    <div className='banner container'>
      <div className="banner-left">

        <ul>
          <li>Woman’s Fashion <span style={{paddingLeft: '50px'}}><img
            src={arrowleft} alt=""/></span></li>
          <li>Men’s Fashion <span style={{paddingLeft: '80px'}}><img
            src={arrowleft} alt=""/></span></li>
          <li>Electronics</li>
          <li>Home & Lifestyle</li>
          <li>Medicine</li>
          <li>Sports & Outdoor</li>
          <li>Baby’s & Toys</li>
          <li>Groceries & Pets</li>
          <li>Health & Beauty</li>
        </ul>
        <div style={{
          height: '400px',
          width: '1px',
          backgroundColor: 'black',
          opacity: '30%',
        }}>
        </div>
      </div>


      <div className="banner-carousel">

        <Carousel>
          <Carousel.Item>
            {/* <ExampleCarouselImage text="First slide" /> */}
            <img src={banner}/>
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            {/* <ExampleCarouselImage text="Second slide" /> */}
            <img width={892} height={344} src='https://avatars.mds.yandex.net/i?id=441f970a6d592276e64a5c59bf7a69b8a2870374-3753631-images-thumbs&n=13'/>
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            {/* <ExampleCarouselImage text="Third slide" /> */}
            <img width={892} height={344} src='https://www.ferra.ru/imgs/2024/05/08/05/6460496/c2150453d059e8999c5f0b211ce334f7c869147c.jpg' />
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
}
