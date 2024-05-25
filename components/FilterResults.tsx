'use client'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import React from 'react'

const FilterResults = () => {
  return (
    <section className='max-w-8xl mx-auto px-4 lg:px-8'>
      <div className='flex flex-wrap items-center justify-between mt-5'>
        <div className='flex flex-wrap items-center gap-1 text-brand-slate-200'>
          <p>64,000+ Results</p>
          <span className='block mx-1 w-1 h-1 rounded-full bg-brand-slate-200'></span>
          <p>Showing prices for:</p>
          <Menu>
            {({ open }) => (
              <>
                <MenuButton className="flex items-center gap-2 hover:bg-brand-slate-100 text-brand-black-100 font-semibold min-h-10 min-w-14 rounded-lg px-2">
                  <span>1 minute</span>
                  <svg className={open ? 'rotate-180' : ''} width="12" height="12" viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path d="M5.464 6.389.839 1.769a.38.38 0 0 1 0-.535l.619-.623a.373.373 0 0 1 .531 0l3.74 3.73L9.47.61a.373.373 0 0 1 .531 0l.619.623a.38.38 0 0 1 0 .535l-4.624 4.62a.373.373 0 0 1-.531 0Z"></path></svg>
                </MenuButton>
                <Transition
                  enter="transition ease-out duration-75"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <MenuItems className="bg-white shadow-100 border border-brand-gray-dark mt-2 p-4 rounded-lg" anchor="bottom">
                    <MenuItem>
                      <div>salom</div>
                    </MenuItem>
                  </MenuItems>
                </Transition>
              </>
            )}
          </Menu>
        </div>
        <div className='flex items-center gap-1 text-brand-slate-200'>
          <p>Sort by:</p>
          <Menu>
            {({ open }) => (
              <>
                <MenuButton className="flex items-center gap-2 hover:bg-brand-slate-100 text-brand-black-100 font-semibold min-h-10 min-w-14 rounded-lg px-2">
                  <span>Best selling</span>
                  <svg className={open ? 'rotate-180' : ''} width="12" height="12" viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path d="M5.464 6.389.839 1.769a.38.38 0 0 1 0-.535l.619-.623a.373.373 0 0 1 .531 0l3.74 3.73L9.47.61a.373.373 0 0 1 .531 0l.619.623a.38.38 0 0 1 0 .535l-4.624 4.62a.373.373 0 0 1-.531 0Z"></path></svg>
                </MenuButton>
                <Transition
                  enter="transition ease-out duration-75"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <MenuItems className="bg-white shadow-100 border border-brand-gray-dark mt-2 p-4 rounded-lg" anchor="bottom">
                    <MenuItem>
                      <div>salom</div>
                    </MenuItem>
                  </MenuItems>
                </Transition>
              </>
            )}
          </Menu>
        </div>
      </div>
    </section>
  )
}

export default FilterResults