import React from 'react'

interface props {
  title: string,
  name: string,
  sum: string
}

const CostumRadio = ({ name, sum, title }: props) => {
  return (
    <label htmlFor={`${name.split(" ").join('_')}`} className='flex w-full items-center cursor-pointer hover:bg-brand-gray-light h-11 gap-3 p-3 rounded-md'>
      <div className='relative w-6 h-6 rounded-full overflow-hidden border border-brand-black'>
        <input name={title} className='peer [&:checked+div]:opacity-100 sr-only' type="radio" id={name.split(" ").join('_')} />
        <div className='w-3 h-3 opacity-0 rounded-full bg-black absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'></div>
      </div>
      <p className='text-sm font-bold'>{name}</p>
      <p className='text-brand-gray'>{sum}</p>
    </label>
  )
}

export default CostumRadio