import React from 'react';
import "./CartCard.css"
import { remove } from '../store/cartSlice';
import {useDispatch} from "react-redux";


export const CartCard = ({ headphone }) => {
  
  const {name, price, poster} = headphone;
  const dispatch=useDispatch();

  return (
      <div className="cartCard">
        <img src={poster} alt={name} />
        <p className="productName">{name}</p>
        <p className="productPrice">${price}</p>
        <button onClick={()=>dispatch(remove(headphone))}>Remove</button>
      </div>
  )
};
