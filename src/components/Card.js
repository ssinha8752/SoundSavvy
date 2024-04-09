import React from 'react'
import "./Card.css"
import { useCart } from '../context/CartContext';

export const Card = ({headphone}) => {

    const { addToCart } = useCart();
    const {name, price, poster} = headphone;

    return (
      <div className="productCard">
        <img src={poster} alt={name} />
        <p className="name">{name}</p>
        <div className="action">
          <p>${price}</p>
          <button onClick={()=>addToCart(headphone)}>Add To Cart</button>
        </div>
      </div>
    )
}
