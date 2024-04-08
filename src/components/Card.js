import React from 'react'
import "./Card.css"

export const Card = ({headphone}) => {
    const {name, price, poster} = headphone;

    return (
      <div className="productCard">
        <img src={poster} alt={name} />
        <p className="name">{name}</p>
        <div className="action">
          <p>${price}</p>
          <button>Add To Cart</button>
        </div>
      </div>
    )
}
