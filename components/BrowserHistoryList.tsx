import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const BrowserHistoryList = () => {
  return (
    <div>
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: `.`,
          prevEl: `.`,
        }}
        pagination={{ clickable: true }}
        className="my-swiper w-full h-full">
        {/* {CardSlider.map((item, idx) => ( */}
        <SwiperSlide>
          {/* <VideoComponent imgLink={item.imgLink} videoLink={item.videoLink} like={item.like} /> */}
        </SwiperSlide>
        {/* ))} */}
      </Swiper>
    </div>
  );
};

export default BrowserHistoryList;
