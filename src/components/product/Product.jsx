import './Product.scss';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import Star from '../../assets/svg/Star.jsx';
import BlackButton from '../../utils/button/BlackButton.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { addWish } from '../../Redux/Wish/WishSlice.js';
import { addCart } from '../../Redux/Basket/BasketSlice.js';
export default function Product({ product }) {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);
  const isInWishlist = wishlist.some(item => item.id === product.id);

  const handleAddToWishlist = () => {
    if (!isInWishlist) {
      dispatch(addWish(product));
    }
  };

  const handleAddToCard = () => {
      dispatch(addCart(product));
  }

  return (
    <div className='product'>
      <div className="product-container">
        <div className="image">
          <img src={product.thumbnail} alt="" />
        </div>
        <BlackButton onAddToCart={handleAddToCard} />

      </div>

      <div className="product-box">
        <div>
          {isInWishlist ? (
            <FaHeart className='icon added' size={15} />
          ) : (
            <FaRegHeart onClick={handleAddToWishlist} className='icon' size={15} />
          )}
        </div>
        <div>
          <FaRegEye className='icon' size={15} />
        </div>
      </div>
      <h3>{product.title}</h3>
      <p>
        <span className='price'>${product.price}</span>
      </p>
      <div className="rating">
        <div className="stars">
          {[1, 2, 3, 4, 5].map((x) => (
            <Star key={x} fill={product.rating >= x ? "#ffad33" : "gray"} />
          ))}
        </div>
        <span>{product.rating}</span>
      </div>
    </div>
  );
}