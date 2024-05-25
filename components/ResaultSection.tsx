import React from 'react'
import Card from './Card'
import { CardsData } from '@/lib/data'

export const Resault = () => {
  return (
    <section className='max-w-8xl mx-auto px-4 lg:px-8 my-4'>
      <div className='grid items-stretch md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
        {CardsData.map((item, idx) => (
          <Card card={item} id={idx} key={idx} />
        ))}
      </div>
    </section>
  )
}