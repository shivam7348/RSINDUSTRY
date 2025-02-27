import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const AutoSlider = () => {
  const slides = [
    { id: 1, content: 'THINKBUY' },
    { id: 2, content: 'SE ShinRoute' },
    { id: 3, content: 'chicorde-endure-entitance' },
    { id: 4, content: 'Shree' },
    { id: 5, content: 'CLASSESBLY' },
    { id: 6, content: 'M3M' },
    { id: 7, content: 'DUE Expertise Your Joy' },
  ];

  return (
    <div className="w-full h-64 flex items-center justify-center bg-gray-100">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 2500, // Auto-slide every 2.5 seconds
          disableOnInteraction: false, // Continue autoplay even when user interacts with the slider
        }}
        modules={[Autoplay]}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="flex items-center justify-center bg-white rounded-lg shadow-md">
            <div className="text-2xl font-bold text-gray-800">{slide.content}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AutoSlider;