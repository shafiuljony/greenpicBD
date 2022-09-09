import React from 'react'
import styled from 'styled-components';
import SwiperCore,{ Navigation } from 'swiper';
import { Swiper } from 'swiper/react';
import sliders from '../assets/data/sliders';
import SliderItem from './SliderItem';

const HeroSectionStyles = styled.div`
   .container{
    height: 100vh;
    min-height: 1000px;
    text-align: center;
    display: flex;
    aligh-items: center;
    justify-content: center;
    position: relative;
   }
`
SwiperCore.use([Navigation]);
export default function HeroSection() {
  return (
    <HeroSectionStyles> 
      <div className='container'>
        <div className='slider-img'>
         <Swiper>
          {sliders.map((slider, index) => {
            if(index >= 3) return '';
            return <SliderItem />;
          })}
         </Swiper>
        </div>
      </div>
    </HeroSectionStyles>
  )
}
