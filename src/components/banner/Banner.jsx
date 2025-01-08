import arrowleft from '../../assets/svg/arrowleft.svg'
import apple from '../../assets/img/img.png'
import iphone from '../../assets/img/img_2.png'
import arrow from '../../assets/svg/arrow.svg'
import Button from 'react-bootstrap/Button';

export default function Banner() {
  return (
    <>
      <div className="banner container">
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
            height: '395px',
            width: '1px',
            backgroundColor: 'black',
            opacity: '30%',
          }}>
          </div>
        </div>

        <div className='banner-right'>
          <div className='bnr'>
            <div>
              <div className='left'>
                <img width={40} height={49} src={apple} alt=""/>
                <h3>iPhone 14 Series</h3>
              </div>

              <h4 className='h4-bnr'>
                Up to 10% <p>off Voucher</p>
              </h4>
               <div style={{display: 'flex', width: '163px', height: '28px', gap: '10px'}}>
                  <h3 style={{textDecoration: 'underline', color: 'white', fontWeight: 'inherit', paddingBottom: '10px'}}>Shop Now</h3>
                 <img src={arrow} alt=""/>
               </div>
            </div>


            <div className='right'>
              <img width={476} height={320} src={iphone} alt=""/>
            </div>
          </div>

          <nav className='nav-bnr'>
            <div></div>
            <div></div>
            <nav>
              <div></div>
            </nav>
            <div></div>
            <div></div>
          </nav>
        </div>


      </div>
    </>
  )
}

