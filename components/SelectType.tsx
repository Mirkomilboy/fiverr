'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import Navigation from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import { typesBtn } from '@/lib/data';

export const SelectType = () => {
    return (
        <section className='max-w-8xl mx-auto px-4 lg:px-8'>
            <div className='border-b border-brand-gray-light py-6'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-brand-black text-xl font-bold'>Select video type</h2>
                    <div className='flex items-center gap-2'>
                        <button className='prevEl flex items-center justify-center border border-brand-gray-light bg-white w-8 h-8 rounded-full'>
                            <svg width="12" height="12" viewBox="0 0 8 15" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path d="m7.228.69.619.62a.375.375 0 0 1 0 .53L2.2 7.5l5.647 5.66a.375.375 0 0 1 0 .53l-.62.62a.375.375 0 0 1-.53 0L.154 7.764a.375.375 0 0 1 0-.53L6.698.69a.375.375 0 0 1 .53 0Z"></path></svg>
                        </button>
                        <button className='nextEl flex items-center justify-center border border-brand-gray-light bg-white w-8 h-8 rounded-full'>
                            <svg width="12" height="12" viewBox="0 0 8 16" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path d="m.772 1.19-.619.62a.375.375 0 0 0 0 .53L5.8 8 .153 13.66a.375.375 0 0 0 0 .53l.62.62a.375.375 0 0 0 .53 0l6.544-6.545a.375.375 0 0 0 0-.53L1.302 1.19a.375.375 0 0 0-.53 0Z"></path></svg>
                        </button>
                    </div>
                </div>
                <div className='mt-4'>
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            nextEl: '.nextEl',
                            prevEl: '.prevEl'
                        }}
                        spaceBetween={10}
                        slidesPerView={6}
                    >
                        {typesBtn.map(btn => (
                            <SwiperSlide className='!w-auto' key={btn.id}>
                                <button className='flex items-center border border-brand-gray-light hover:border-brand-gray-dark p-3 rounded-full'>
                                    <div className='flex items-center justify-center w-14 h-14 rounded-full bg-brand-slate-100'>
                                        <Image width={40} height={40} src="./type.svg" alt="" />
                                    </div>
                                    <div className='mx-3'>
                                        <p className='text-brand-black-100 font-semibold whitespace-nowrap'>{btn.name}</p>
                                    </div>
                                </button>
                            </SwiperSlide>
                        ))}
                        <div className='absolute z-50 right-0 top-0 h-full w-10 bg-light'></div>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
