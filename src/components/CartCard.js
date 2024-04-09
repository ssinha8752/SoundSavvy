import React from 'react';
import "./CartCard.css"
import { useCart } from '../context/CartContext';

export const CartCard = ({ headphone }) => {
  
  const {removeFromCart}=useCart();
  const {name, price, poster} = headphone;

  return (
      <div className="cartCard">
        <img src={poster} alt={name} />
        <p className="productName">{name}</p>
        <p className="productPrice">${price}</p>
        <button onClick={()=>removeFromCart(headphone)}>Remove</button>
      </div>
  )
};
