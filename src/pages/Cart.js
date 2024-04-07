import React from 'react'
import { CartCard } from '../components/CartCard';
import headphonesData from '../Data.json'

export const Cart = () => {
  return (
    <div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cart Items:{headphonesData.length}</h5>
        <div className='flex justify-start flex-wrap other'>
        {headphonesData.map(headphone => (
            <CartCard key={headphone.id} headphone={headphone}/>
        ))}
    </div>
    </div>
  )
}
