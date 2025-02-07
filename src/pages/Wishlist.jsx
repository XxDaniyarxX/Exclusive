import { useSelector } from 'react-redux';
import './styles/Wishlist.scss';

export default function Wishlist() {
  const wishlist = useSelector((state) => state.wishlist);

  return (
     <div className='wis'>
          {/* <div className='wish-1'>
            <h4>Wishlist (4)</h4>
            <button>Move All To Blog</button>
         </div> */}
    <div className="wish">
        
      <div className="wishlist-items">
        {wishlist.map((product) => (
          <div key={product.id} className="wishlist-item">
            <div className='wishlist-gg'>
              <img width={180} src={product.thumbnail} alt={product.title} />
            </div>

            <h6>{product.title}</h6>
            <h6></h6>

          </div>
        ))}

      </div>
    </div>

    </div>
  );
}