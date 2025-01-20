import './styles/Wishlist.scss'
import WhishlistCom from '../components/Whislist/CompoWhis'
import laptop from '../assets/img/laptop.png'
import eyeWish from '../assets/svg/eye-wish.svg'
import btn from '../assets/img/hover-btn.png'
import starWish from '../assets/svg/star-wish.svg'
import yt from '../assets/img/yt.png'
import joistic2 from '../assets/img/joistic2.png'
import clavati from '../assets/img/clavati.png'
export default function Wishlist() {
  return (
    <div className="wishlist">
      <div className='wishlist__top'>
        <div className='wishlist__top__title'>
          <h4>Wishlist (4)</h4>
          <button className='wishlist-btn'>Move All To Bag</button>
        </div>
        <div className='wishlist__items-down'>
          <WhishlistCom />
        </div>
      </div>

      <div className='wishlist__bottom'>
        <div className='wishlist__bottom__left'>
          <div className='wishlist__bottom__left__title'>
            <button className='btn-wishlist'></button>
            <h4 className='h4-wishlist'>Just For You</h4>
          </div>

          <div className='btn'>
            <button className='btn-gg'>
              See All
            </button>
          </div>
        </div>

        <div className='whishlist__bottom__right'>

          <div className='wishlist__items-down__item'>
            <div className='wishlist__items-down__item__img'>
              <button className='btn-1-1'>-35%</button>
              <img className='img-1-1' width={190} height={180} src={laptop} alt="" />
              <img className='img-1-2' width={34} height={34} src={eyeWish} alt='corzina' />
              <button className='btn-wishlist'><img width={104} height={24} src={btn} alt="" /></button>
            </div>
            <div className='wishlist__items-down__item__info'>
              <h4>ASUS FHD Gaming Laptop</h4>
              <h5>$960 <span>$1160</span></h5>
              <div className='star-info'>

                <img width={10} height={10} src={starWish} alt="" />
                <img src={starWish} alt="" />
                <img src={starWish} alt="" />
                <img src={starWish} alt="" />
                <img src={starWish} alt="" />
                <h4>(65)</h4>
              </div>
            </div>
          </div>
          <div className='wishlist__items-down__item'>
            <div className='wishlist__items-down__item__img'>
              <img className='img-1-1' width={190} height={180} src={yt} alt="" />
              <img className='img-1-2' width={34} height={34} src={eyeWish} alt='corzina' />
              <button className='btn-wishlist'><img width={104} height={24} src={btn} alt="" /></button>
            </div>
            <div className='wishlist__items-down__item__info'>
              <h4>IPS LCD Gaming Monitor</h4>
              <h5>$1160 </h5>
              <div className='star-info'>

                <img width={10} height={10} src={starWish} alt="" />
                <img src={starWish} alt="" />
                <img src={starWish} alt="" />
                <img src={starWish} alt="" />
                <img src={starWish} alt="" />
                <h4>(65)</h4>
              </div>
            </div>
          </div>

          <div className='wishlist__items-down__item'>
            <div className='wishlist__items-down__item__img'>
              <button className='btn-1-2'>NEW</button>
              <img className='img-1-1' width={190} height={180} src={joistic2} alt="" />
              <img className='img-1-2' width={34} height={34} src={eyeWish} alt='corzina' />
              <button className='btn-wishlist'><img width={104} height={24} src={btn} alt="" /></button>
            </div>
            <div className='wishlist__items-down__item__info'>
              <h4>HAVIT HV-G92 Gamepad</h4>
              <h5>$560 </h5>
              <div className='star-info'>

                <img width={10} height={10} src={starWish} alt="" />
                <img src={starWish} alt="" />
                <img src={starWish} alt="" />
                <img src={starWish} alt="" />
                <img src={starWish} alt="" />
                <h4>(65)</h4>
              </div>
            </div>
          </div>

          <div className='wishlist__items-down__item'>
            <div className='wishlist__items-down__item__img'>
              <img className='img-1-1' width={190} height={180} src={clavati} alt="" />
              <img className='img-1-2' width={34} height={34} src={eyeWish} alt='corzina' />
              <button className='btn-wishlist'><img width={104} height={24} src={btn} alt="" /></button>
            </div>
            <div className='wishlist__items-down__item__info'>
              <h4>AK-900 Wired Keyboard</h4>
              <h5>$200 </h5>
              <div className='star-info'>

                <img width={10} height={10} src={starWish} alt="" />
                <img src={starWish} alt="" />
                <img src={starWish} alt="" />
                <img src={starWish} alt="" />
                <img src={starWish} alt="" />
                <h4>(65)</h4>
              </div>
            </div>
          </div>
        </div>
      </div>




    </div>
  )
}

