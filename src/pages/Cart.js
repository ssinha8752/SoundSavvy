import React from 'react'
import { CartCard } from '../components/CartCard';
import { useTitle } from '../hooks/useTitle';
import { useSelector } from 'react-redux';

export const Cart = () => {

  useTitle("Cart");

  const headphonesData=useSelector(state => state.cartState.cartList)
  const totalAmount=useSelector(state=> state.cartState.total)

  return (
    <main>
      <section className="cart">
        <h1 className="items">Cart Items: {headphonesData.length}/${totalAmount}</h1>
        {headphonesData.map(headphone => (
            <CartCard key={headphone.id} headphone={headphone}/>
        ))}        
      </section>
    </main>
  )
}
