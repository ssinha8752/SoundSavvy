import React from 'react'
import { Card } from '../components/Card'
import headphonesData from '../Data.json'
import { useTitle } from '../hooks/useTitle'

export const List = () => {

  useTitle("Home");

  return (
    <main>
       <section className="products">
        {headphonesData.map(headphone => (
            <Card key={headphone.id} headphone={headphone}/>
        ))}
    </section>
    </main>
  ) 
}
