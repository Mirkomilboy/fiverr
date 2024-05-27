"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import VideoComponent from "./common/VideoComponent";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { CardSlider } from "@/lib/data";
import { cardDataI } from "@/lib/types";
import Status from "./common/Status";

interface props {
  card: cardDataI;
  id: number;
}

const Card = ({ id, card }: props) => {
  let next = "next" + id;
  let prev = "prev" + id;

  return (
    <div className="w-full bg-transparent">
      <div className="relative after:absolute after:h-12 after:w-full after:left-0 after:bottom-0 after:bg-card-bottom group h-[190px] w-full rounded-lg overflow-hidden cursor-pointer">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: `.${next.toString()}`,
            prevEl: `.${prev.toString()}`,
          }}
          pagination={{ clickable: true }}
          className="my-swiper w-full h-full">
          {CardSlider.map((item, idx) => (
            <SwiperSlide key={idx}>
              <VideoComponent imgLink={item.imgLink} videoLink={item.videoLink} like={item.like} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className={`${next.toString()} btn absolute top-1/2 transition-all duration-300 group-hover:right-4 -right-full -translate-y-1/2 z-40 flex items-center justify-center bg-white hover:bg-gray-200 w-8 h-8 rounded-full`}>
          <svg width="12" height="12" viewBox="0 0 8 16" xmlns="http://www.w3.org/2000/svg" fill="currentFill">
            <path d="m.772 1.19-.619.62a.375.375 0 0 0 0 .53L5.8 8 .153 13.66a.375.375 0 0 0 0 .53l.62.62a.375.375 0 0 0 .53 0l6.544-6.545a.375.375 0 0 0 0-.53L1.302 1.19a.375.375 0 0 0-.53 0Z"></path>
          </svg>
        </button>
        <button
          className={`${prev.toString()} btn absolute top-1/2 transition-all duration-500 group-hover:left-4 -left-full -translate-y-1/2 z-40 flex items-center justify-center bg-white hover:bg-gray-200 w-8 h-8 rounded-full`}>
          <svg width="12" height="12" viewBox="0 0 8 15" xmlns="http://www.w3.org/2000/svg" fill="currentFill">
            <path d="m7.228.69.619.62a.375.375 0 0 1 0 .53L2.2 7.5l5.647 5.66a.375.375 0 0 1 0 .53l-.62.62a.375.375 0 0 1-.53 0L.154 7.764a.375.375 0 0 1 0-.53L6.698.69a.375.375 0 0 1 .53 0Z"></path>
          </svg>
        </button>
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full relative overflow-hidden">
              <Image fill className="absolute size-full object-cover" src="/user.jpg" alt="" />
            </div>
            <p className="flex items-center gap-1 text-brand-black-100 font-bold text-sm">
              <span className="text-brand-black-300 font-normal">Ad by</span>
              {card.name}
            </p>
          </div>
          <Status status={card.status} />
        </div>
        <Link href={"#"}>
          <p className="line-clamp-2 text-brand-black h-12">{card.text}</p>
        </Link>
        <div className="flex items-center gap-1 mt-3">
          <span>
            <svg width={15} height={14} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
              />
            </svg>
          </span>
          <strong className="text-brand-black-100 font-bold">{card.rating}</strong>
          <span className="text-brand-gray-dark">({card.totalJob})</span>
        </div>
        <div className="flex items-center gap-2 text-brand-gray-dark mt-3">
          <span className="text-brand-black-100 font-semibold">From US${card.fromPrice}</span>
          <span>/</span>
          <span>7 minutes</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
