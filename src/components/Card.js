
import {useEffect, useState} from 'react'
import "./Card.css"
import { add,remove } from '../store/cartSlice';
import {useDispatch, useSelector} from "react-redux";

export const Card = ({headphone}) => {

    const {id, name, price, poster} = headphone;
    const dispatch=useDispatch();
    const headphones=useSelector(state => state.cartState.cartList);
    const [inCart,setInCart]=useState(false)

    useEffect(()=>{
      const productInCart=headphones.find(item=>item.id===id)
      if(productInCart)
      {
        setInCart(true)
      }
      else
      {
        setInCart(false)
      }
    },[id, headphones])

    return (
      <div className="productCard">
        <img src={poster} alt={name} />
        <p className="name">{name}</p>
        <div className="action">
          <p>${price}</p>
          {inCart?
          <button className="remove" onClick={()=>dispatch(remove(headphone))}>Remove</button>:
          <button onClick={()=>dispatch(add(headphone))}>Add To Cart</button>}
        </div>
      </div>
    )
}
