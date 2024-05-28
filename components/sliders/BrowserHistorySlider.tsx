"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const data = [...Array(20)].map((item, idx) => idx + 1);

const BrowserHistorySlider = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={14}
        slidesPerView="auto"
        navigation={{
          nextEl: `.browser-history-slider-next`,
          prevEl: `.browser-history-slider-prev`,
        }}
        loop
        className="w-full h-full">
        {data.map((item) => (
          <SwiperSlide key={item} className="!w-40">
            <div>
              <div className="relative w-full h-24 rounded-lg overflow-hidden">
                <Image src="/cardImg-1.jpeg" alt="Image" fill className="object-cover" />
              </div>
              <Link href="#" className="block mt-3">
                <span className="line-clamp-2 ">I will do professional video editing with in 24 hours</span>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrowserHistorySlider;
