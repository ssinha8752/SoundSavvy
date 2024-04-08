import React from 'react';
import "./CartCard.css"

export const CartCard = ({ headphone }) => {
  const {name, price, poster} = headphone;

  return (
      <div className="cartCard">
        <img src={poster} alt={name} />
        <p className="productName">{name}</p>
        <p className="productPrice">${price}</p>
        <button>Remove</button>
      </div>
  )
};
