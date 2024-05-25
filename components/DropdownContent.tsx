import React from 'react'
import CostumCheckbox from './CostumCheckbox'
import { TypeI } from '@/lib/types'

interface props {
  item: TypeI
}

const DropdownContent = ({ item }: props) => {
  return (
    <div className='pl-2 py-6'>
      <h2 className='text-brand-black-100 font-bold mb-2'>{item.title}</h2>
      <div className='grid md:grid-cols-2'>
        {item.data.map(check => (
          <CostumCheckbox
            name={check.name}
            total={check.total}
            key={check.id}
          />
        ))}
      </div>
    </div>
  )
}

export default DropdownContent