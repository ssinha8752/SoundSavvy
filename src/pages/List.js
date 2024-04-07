import React from 'react'
import { Card } from '../components/Card'
import headphonesData from '../Data.json'

export const List = () => {
  return (
    <main>
       <section className='max-w-7xl mx-auto py-7'>
        <div className='flex justify-start flex-wrap other'>
        {headphonesData.map(headphone => (
            <Card key={headphone.id} headphone={headphone}/>
        ))}
    </div>
    </section>
    </main>
  ) 
}
