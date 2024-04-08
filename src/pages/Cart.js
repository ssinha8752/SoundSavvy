import React from 'react'
import { CartCard } from '../components/CartCard';
import headphonesData from '../Data.json'
import { useTitle } from '../hooks/useTitle';

export const Cart = () => {

  useTitle("Cart");

  return (
    <main>
      <section className="cart">
        <h1 className="items">Cart Items: {headphonesData.length}</h1>
        {headphonesData.map(headphone => (
            <CartCard key={headphone.id} headphone={headphone}/>
        ))}        
      </section>
    </main>
  )
}
