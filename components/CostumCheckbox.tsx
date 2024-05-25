import React from 'react'

interface props {
  name: string,
  total: number
}

const CostumCheckbox = ({ name, total }: props) => {
  return (
    <label htmlFor={`${name.split(" ").join('_')}`} className='flex items-center cursor-pointer hover:bg-brand-gray-light h-12 w-full gap-3 p-3 -translate-x-3 rounded-md'>
      <div className='relative w-6 h-6 rounded-md overflow-hidden border border-brand-black'>
        <input className='peer [&:checked+svg]:opacity-100 sr-only' type="checkbox" id={name.split(" ").join('_')} />
        <svg className="stroke-black absolute opacity-0 w-4 h-4 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" viewBox="0 0 14 14" fill="none">
          <path d="M3 8L6 11L11 3.5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <p className='text-sm font-bold'>{name}</p>
      <p className='text-brand-gray'>({total})</p>
    </label>
  )
}

export default CostumCheckbox