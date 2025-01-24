import React from 'react';
import { useSelector } from 'react-redux';
import './styles/Wishlist.scss';

export default function Wishlist() {
  const wishlist = useSelector((state) => state.wishlist);

  return (
   
  
    <div className="wish">

      <div className="wishlist-items">
        {wishlist.map((product) => (
          <div key={product.id} className="wishlist-item">
            <img src={product.thumbnail} alt={product.title} />
            <div>{product.title}</div>
          </div>
        ))}
      </div>
    </div>

  );
}