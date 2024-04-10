import React from 'react'
import { CartCard } from '../components/CartCard';
import { useTitle } from '../hooks/useTitle';
import { useCart } from '../context/CartContext';

export const Cart = () => {

  const {cartList,total}=useCart();
  useTitle("Cart");

  return (
    <main>
      <section className="cart">
        <h1 className="items">Cart Items: {cartList.length} / ${total}</h1>
        {cartList.map(headphone => (
            <CartCard key={headphone.id} headphone={headphone}/>
        ))}        
      </section>
    </main>
  )
}
