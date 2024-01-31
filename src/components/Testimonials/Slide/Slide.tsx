"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { dataTestimonials } from "../Testimonials.data";
import { Reveal } from "@/components/Reveal/Reveal";
import Image from "next/image";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";

export const Slide = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        678: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
    >
      {dataTestimonials.map(({ id, image, name, testimonial, work }) => (
        <SwiperSlide key={id} className='my-5 cursor-pointer md:px-10'>
          <Reveal>
            <Image
              src='/assets/testimonial-icon.png'
              alt={name}
              width={50}
              height={50}
              className='w-auto h-auto'
            />
            <div className='my-5'>{testimonial}</div>
            <div className='flex'>
              <Image
                src={image}
                alt={name}
                width={50}
                height={50}
                className='mr-5 w-auto h-auto'
              />
              <div>
                <h4 className='text-center'>{name}</h4>
                <p className='text-primaryDark'>{work}</p>
              </div>
            </div>
          </Reveal>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
