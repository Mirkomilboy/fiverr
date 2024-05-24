'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

const Card = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current == null) return

    if (isVideoPlaying) {
      videoRef.current.currentTime = 0
      videoRef.current.play()
    } else {
      videoRef.current.pause()
    }
  }, [isVideoPlaying])

  return (
    <div className='w-full bg-transparent'>
      <div
        onMouseEnter={() => setIsVideoPlaying(true)}
        onMouseLeave={() => setIsVideoPlaying(false)}
        className='relative w-full h-[190px] rounded-lg overflow-hidden cursor-pointer'
      >
        <video
          ref={videoRef}
          muted
          playsInline
          className='absolute size-full object-cover'
        >
          <source src="./cardVideo-1.mp4" type="video/mp4" />
        </video>
        <label className='absolute z-50 top-4 right-4' htmlFor="#heart">
          <input className='sr-only' type="checkbox" id='heart' />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-8 !fill-black/40 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
        </label>
        <button className='absolute z-50 left-4 bottom-4 flex items-center justify-center w-7 h-7 rounded-full overflow-hidden bg-black/40'>
          {!isVideoPlaying ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-4">
            <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
          </svg> :
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-4">
              <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clipRule="evenodd" />
            </svg>}
        </button>
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