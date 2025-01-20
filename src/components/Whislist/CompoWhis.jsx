import corzina from '../../assets/svg/corzina.svg'
import sumochka from '../../assets/img/sumochka.png'
import btn from '../../assets/img/hover-btn.png'
import prog from '../../assets/img/img-prog.png'
import joistic from '../../assets/img/joistic.png'
import spar from '../../assets/img/spar.png'

function whishlistCom() {
    return (
        <>
        <div className='wishlist__items-down__item'>
            <div className='wishlist__items-down__item__img'>
                <button className='btn-1-1'>-35%</button>
                <img className='img-1-1' width={190} height={180} src={sumochka} alt="" />
                <img className='img-1-2' width={34} height={34} src={corzina} alt='corzina' />
                <button className='btn-wishlist'><img width={104} height={24} src={btn} alt="" /></button>
            </div>
            <div className='wishlist__items-down__item__info'>
                <h4>Gucci duffle bag</h4>
                <h5>$960 <span>$1160</span></h5>
            </div>
        </div>
        <div className='wishlist__items-down__item'>
            <div className='wishlist__items-down__item__img'>
                <img style={{marginTop: '30px'}} className='img-1-1' width={190} height={180} src={prog} alt="" />
                <img className='img-1-2' width={34} height={34} src={corzina} alt='corzina' />
                <button className='btn-wishlist'><img width={104} height={24} src={btn} alt="" /></button>
            </div>
            <div className='wishlist__items-down__item__info'>
                <h4>RGB liquid CPU Cooler</h4>
                <h5>$1960</h5>
            </div>
        </div>
        <div className='wishlist__items-down__item'>
            <div className='wishlist__items-down__item__img'>
                <img style={{marginTop: '30px'}} className='img-1-1' width={190} height={180} src={joistic} alt="" />
                <img className='img-1-2' width={34} height={34} src={corzina} alt='corzina' />
                <button className='btn-wishlist'><img width={104} height={24} src={btn} alt="" /></button>
            </div>
            <div className='wishlist__items-down__item__info'>
                <h4>GP11 Shooter USB Gamepad</h4>
                <h5>$550</h5>
            </div>
        </div>
        <div className='wishlist__items-down__item'>
            <div className='wishlist__items-down__item__img'>
                <img style={{marginTop: '30px'}} className='img-1-1' width={190} height={180} src={spar} alt="" />
                <img className='img-1-2' width={34} height={34} src={corzina} alt='corzina' />
                <button className='btn-wishlist'><img width={104} height={24} src={btn} alt="" /></button>
            </div>
            <div className='wishlist__items-down__item__info'>
                <h4>Quilted Satin Jacket</h4>
                <h5>$750</h5>
            </div>
        </div>
        </>
    )
}

export default whishlistCom