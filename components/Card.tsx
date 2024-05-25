'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import VideoComponent from './common/VideoComponent'

const Card = () => {


  return (
    <div className='w-full bg-transparent'>
      <div className='h-[190px] w-full rounded-lg overflow-hidden cursor-pointer'>
        <VideoComponent />
      </div>
      <div className='mt-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <div className='w-6 h-6 rounded-full relative overflow-hidden'>
              <Image fill className='absolute size-full object-cover' src="/user.jpg" alt="" />
            </div>
            <p className='flex items-center gap-1 text-brand-black-100 font-bold text-sm'>
              <span className='text-brand-black-300 font-normal'>Ad by</span>
              Prithviraj P
            </p>
          </div>
        </div>
        <Link href={'#'}>
          <p className='line-clamp-2 text-brand-black'>
            I will edit twitch or kick stream vod for a youtube highlight video
          </p>
        </Link>
        <div className='flex items-center gao-1 mt-3'>
          <span>
            <svg width="15" height="14" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg>
          </span>
          <strong className='text-brand-black-100 font-bold'>4.9</strong>
          <span className='text-brand-gray-dark'>(1k+)</span>
        </div>
        <div className='flex items-center gap-2 text-brand-gray-dark mt-3'>
          <span className='text-brand-black-100 font-semibold'>From US$50</span>
          <span>/</span>
          <span>7 minutes</span>
        </div>
      </div>
    </div>
  )
}

export default Card