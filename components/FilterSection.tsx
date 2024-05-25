'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Switch } from '@headlessui/react'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import DropdownContent from './DropdownContent'
import { BudgetRadios, IncludeChecks, OfferingChecks, TimeRadios, TypeChecks } from '@/lib/data'
import CostumRadio from './CostumRadio'

export const FilterSection = () => {
  const [enabled, setEnabled] = useState(false)
  const [shadow, setShadow] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let num = headerRef.current?.offsetTop ? headerRef.current?.offsetTop : 0;
    const handleScroll = () => {
      if (document.documentElement.scrollTop > num) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section ref={headerRef} className={`sticky top-0 bg-white w-full z-50 ${shadow ? ' shadow-md' : ''}`}>
      <div className='max-w-8xl mx-auto mt-6 py-3 px-4 lg:px-8'>
        <div className='flex flex-wrap gap-4 items-center justify-between'>
          <div className='flex flex-wrap items-center gap-3'>
            <Menu>
              {({ open }) => (
                <>
                  <MenuButton className="flex items-center gap-3 text-brand-black-100 font-semibold min-h-12 min-w-14 border border-brand-black-200 hover:border-brand-black rounded-lg py-3 px-4">
                    <span>Service options</span>
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
                    <MenuItems anchor="bottom start" className="bg-white z-50 shadow-100 border border-brand-gray-dark mt-2 rounded-lg">
                      <div className='flex flex-col relative'>
                        <div className='max-h-[498px] overflow-scroll p-6 pt-0 pb-20 divide-y-2 divide-brand-gray-light'>
                          <DropdownContent item={TypeChecks} />
                          <DropdownContent item={OfferingChecks} />
                          <DropdownContent item={IncludeChecks} />
                        </div>
                        <div className='flex items-center justify-between absolute bottom-0 bg-white w-full border-t border-brand-gray px-6 py-4'>
                          <button>Clear all</button>
                          <button className='bg-black text-white px-6 rounded-md h-12'>Apply</button>
                        </div>
                      </div>
                    </MenuItems>
                  </Transition>
                </>
              )}
            </Menu>
            <Menu>
              {({ open }) => (
                <>
                  <MenuButton className="flex items-center gap-3 text-brand-black-100 font-semibold min-h-12 min-w-14 border border-brand-black-200 hover:border-brand-black rounded-lg py-3 px-4">
                    <span>Seller details</span>
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
                    <MenuItems className="bg-white z-50 shadow-100 border border-brand-gray-dark mt-2 p-4 rounded-lg" anchor="bottom start">
                      <div className='flex flex-col relative'>
                        <div className='max-h-[498px] overflow-scroll p-6 pt-0 pb-20 divide-y-2 divide-brand-gray-light'>
                          <DropdownContent item={TypeChecks} />
                          <DropdownContent item={OfferingChecks} />
                          <DropdownContent item={IncludeChecks} />
                        </div>
                        <div className='flex items-center justify-between absolute bottom-0 bg-white w-full border-t border-brand-gray px-6 py-4'>
                          <button>Clear all</button>
                          <button className='bg-black text-white px-6 rounded-md h-12'>Apply</button>
                        </div>
                      </div>
                    </MenuItems>
                  </Transition>
                </>
              )}
            </Menu>
            <Menu>
              {({ open }) => (
                <>
                  <MenuButton className="flex items-center gap-3 text-brand-black-100 font-semibold min-h-12 min-w-14 border border-brand-black-200 hover:border-brand-black rounded-lg py-3 px-4">
                    <span>Budget</span>
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
                    <MenuItems className="bg-white w-auto z-50 shadow-100 border border-brand-gray-dark mt-2 rounded-lg" anchor="bottom start">
                      <div className='flex flex-col relative'>
                        <div className='p-6 pb-24 w-full'>
                          {BudgetRadios.data.map(item => (
                            <CostumRadio
                              title={BudgetRadios.title}
                              name={item.name}
                              sum={item.subname}
                              key={item.id}
                            />
                          ))}
                        </div>
                        <div className='flex items-center justify-between absolute bottom-0 bg-white w-full border-t border-brand-gray px-6 py-4'>
                          <button>Clear all</button>
                          <button className='bg-black text-white px-6 rounded-md h-12'>Apply</button>
                        </div>
                      </div>
                    </MenuItems>
                  </Transition>
                </>
              )}
            </Menu>
            <Menu>
              {({ open }) => (
                <>
                  <MenuButton className="flex items-center gap-3 text-brand-black-100 font-semibold min-h-12 min-w-14 border border-brand-black-200 hover:border-brand-black rounded-lg py-3 px-4">
                    <span>Delivery time</span>
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
                    <MenuItems className="bg-white z-50 shadow-100 border border-brand-gray-dark mt-2 rounded-lg" anchor="bottom start">
                      <div className='flex flex-col relative'>
                        <div className='p-6 pb-24 w-full'>
                          {TimeRadios.data.map(item => (
                            <CostumRadio
                              title={TimeRadios.title}
                              name={item.name}
                              sum={item.subname}
                              key={item.id}
                            />
                          ))}
                        </div>
                        <div className='flex items-center justify-between absolute bottom-0 bg-white w-full border-t border-brand-gray px-6 py-4'>
                          <button className='whitespace-nowrap'>Clear all</button>
                          <button className='bg-black text-white px-6 rounded-md h-12'>Apply</button>
                        </div>
                      </div>
                    </MenuItems>
                  </Transition>
                </>
              )}
            </Menu>
          </div>
          <div className='flex items-center gap-2.5'>
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className="group inline-flex h-[18px] w-8 items-center rounded-full bg-gray-200 transition data-[checked]:bg-green-600"
            >
              <span className="size-3.5 translate-x-0.5 rounded-full bg-white transition group-data-[checked]:translate-x-4" />
            </Switch>
            <p className='text-brand-black-300 font-semibold'>
              Pro services
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}