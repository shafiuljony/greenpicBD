import React from 'react'
import styled from 'styled-components';
import SwiperCore,{ Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import sliders from '../assets/data/sliders';
import SliderItem from './SliderItem';
import 'swiper/css/bundle';
SwiperCore.use([Navigation]);

const HeroSectionStyles = styled.div`
`
export default function HeroSection() {
  return (
    <HeroSectionStyles> 
      <div className='container'>
        <div className='slider-img'>
         <Swiper 
         slidesPerView={1}
         navigation >
          {sliders.map((slider, index) => {
            if(index >= 3) return '';
            return(
              <SwiperSlide key={slider.id}>
                <SliderItem />
              </SwiperSlide>
            );
          })}
         </Swiper>
        </div>
      </div>
    </HeroSectionStyles>
  )
}
