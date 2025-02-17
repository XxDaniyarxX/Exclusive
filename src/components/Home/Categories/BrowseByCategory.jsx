import arrowleft2 from '../../../assets/svg/arrowleft2.svg'
import arrowright2 from '../../../assets/svg/arrowright2.svg'
import './BrowseByCategory.scss'
import iphones from '../../../assets/img/img_10.png'
import computer from '../../../assets/img/img_11.png'
import smartwatch from '../../../assets/img/img_12.png'
import Camera from '../../../assets/img/img_13.png'
import headphones from '../../../assets/img/img_14.png'
import gaming from '../../../assets/img/img_15.png'

export default function BrowseByCategory() {
  return (
    <div>
      <div style={{width: '1170px', height: '313px'}} className='flash'>
        <div className='flash-top'>
          <div className='flash-top1'>
            <div className='flash-top1-1'>
              <div className='btn-top1'>
                <button className='btn'></button>
                <h4>Categories</h4>
              </div>
              <h4>Browse By Category</h4>
            </div>
          </div>
          <div className='flash-top2'>
            <img src={arrowleft2} alt=""/>
            <img src={arrowright2} alt=""/>
          </div>
        </div>
        <nav className='down-223'>
          <div className='div-01'>
            <img src={iphones} alt=""/>
            <h4>Phones</h4>
          </div>

          <div className='div-01'>
            <img src={computer} alt=""/>
            <h4>Computers</h4>
          </div>

          <div className='div-01'>
            <img src={smartwatch} alt=""/>
            <h4>SmartWatch</h4>
          </div>

          <div style={{backgroundColor: '#DB4444', color: 'white'}}
               className='div-01'>
            <img src={Camera} alt=""/>
            <h4>Camera</h4>
          </div>

          <div className='div-01'>
            <img src={headphones} alt=""/>
            <h4>HeadPhones</h4>
          </div>

          <div className='div-01'>
            <img src={gaming} alt=""/>
            <h4>Gaming</h4>
          </div>

        </nav>
      </div>
    </div>
  )
}

