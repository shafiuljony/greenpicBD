import React from 'react'
import styled from 'styled-components';
import SwiperCore,{ Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import sliders from '../assets/data/sliders';
import SliderItem from './SliderItem';
import 'swiper/css/bundle';
SwiperCore.use([Navigation]);

const HeroSectionStyles = styled.div`
.swiper-button-next,
.swiper-button-prev {
	right: 10px;
	background-color: var(--gray-2);
	border-radius: 8px;
	position: absolute;
	height: 50px;
	width: 50px;
	color: var(--gray-1);
	z-index: 10;
}
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
                <SliderItem 
                  title={slider.name}
                  img={slider.img}
                  desc={slider.desc}
                />
              </SwiperSlide>
            );
          })}
         </Swiper>
        </div>
      </div>
    </HeroSectionStyles>
  )
}
