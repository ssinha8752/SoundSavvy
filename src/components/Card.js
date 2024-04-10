import React, { useEffect, useState } from 'react'
import "./Card.css"
import { useCart } from '../context/CartContext';

export const Card = ({headphone}) => {

    const { cartList, addToCart, removeFromCart } = useCart();
    const [inCart, setInCart] = useState(false);

    const {id,name, price, poster} = headphone;

    useEffect(()=>{
      const productIsInCart=cartList.find(item => item.id === id);
      if(productIsInCart){
        setInCart(true);
      }else{
        setInCart(false);
      }
    },[cartList, id])

    return (
      <div className="productCard">
        <img src={poster} alt={name} />
        <p className="name">{name}</p>
        <div className="action">
          <p>${price}</p>
          { inCart? 
          (<button className='remove' onClick={()=>removeFromCart(headphone)}>Remove</button>):
          (<button onClick={()=>addToCart(headphone)}>Add To Cart</button>)}
        </div>
      </div>
    )
}
