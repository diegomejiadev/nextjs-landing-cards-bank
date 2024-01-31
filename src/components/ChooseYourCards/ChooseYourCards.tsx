"use client";

import "swiper/css";
import "swiper/css/effect-cards"
import { SwiperSlide, Swiper } from "swiper/react";
import { BackgroundRadialRight } from "../BackgroundRadialRight/BackgroundRadialRight";
import { MotionTransition } from "../MotionTransition/MotionTransition";
import { Reveal } from "../Reveal/Reveal";
import { EffectCards } from "swiper/modules";
import { dataCards } from "./ChooseYourCards.data";
import Image from "next/image";


export default function ChooseYourCards() {
  return (
    <div className='relative px-6 py-20 md:py-64' id='tarjetas'>
      <BackgroundRadialRight />
      <div className='block max-w-5xl mx-auto md:grid md:grid-cols-2 overflow-hidden'>
        <Reveal>
          <h2 className='text-4xl md:text-5xl font-semibold'>
            Elige la tarjeta que más{" "}
            <span className='block degrade-blue bg-blueLight'>
              se adapta a tus necesidades
            </span>
          </h2>
        </Reveal>
        <div className='py-8 md:py-0 px-5'>
          <MotionTransition>
            <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]}>
              {dataCards.map(({ id, image }) => (
                <SwiperSlide key={id}>
                  <Image
                    src={image}
                    alt='Credit Card'
                    width={400}
                    height={300}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </MotionTransition>
        </div>
      </div>
    </div>
  );
}
