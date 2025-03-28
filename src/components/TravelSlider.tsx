"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

const images = [
  "/images/travel1.jpg",
  "/images/travel2.jpg",
  "/images/travel3.jpg"
];

export default function TravelSlider() {
  return (
    <div className="w-full flex justify-center">
      <Swiper
        spaceBetween={0} // 余白をなくす
        slidesPerView={1} // 1枚ずつ表示
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full max-w-sm rounded-lg shadow-lg" // スライダーの最大幅を小さく
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <div className="relative w-[400px] h-[500px]"> {/* サイズを調整できるように変更 */}
              <Image
                src={src}
                alt={`travel ${index + 1}`}
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}