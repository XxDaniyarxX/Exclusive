import './Product.scss'
import { FaRegHeart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import './Product.scss'
import Star from '../../assets/svg/Star.jsx'
import BlackButton from '../../utils/button/BlackButton.jsx'

function Product({product}) {
  return (
    <>
    <div className='product'>
      <div className="product-container">
        <div className="image">
          <img src={product.thumbnail} alt="" />
        </div>
       <BlackButton />
      </div>
      {/*<//div className="discount" style={{*/}
      {/*  //display: `${product.discount? "block" : "none"}`*/}
      {/*  // eslint-disable-next-line react/prop-types*/}
      {/*//}}>-{product.discountedPercentage}%</div>*/}

      <div className="product-box">
        <div>
          <FaRegHeart className='icon' size={15} />
        </div>
        <div>
          <FaRegEye className='icon' size={15} />
        </div>
      </div>
      <h3>{product.title}</h3>
      <p>
        {/*<span className='d-price'>${product.discountedPrice}</span>*/}
        <span className='price'>${product.price}</span>
      </p>
      <div className="rating">
        <div className="stars">
          {
            [1,2,3,4,5].map((x) => (
              <Star key={x} fill={product.rating >= x ? "#ffad33" : "gray"} />
            ))
          }
        </div>
        <span>{product.rating}</span>
      </div>
    </div>
    </>
  )
}

export default Product
