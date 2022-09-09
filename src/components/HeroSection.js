import React from 'react'
import styled from 'styled-components';
import sliderImg from '../assets/images/OLIVE FRUIT.jpg';

const HeroSectionStyles = styled.div`
    h1{
      position: relative;
      height: 100vh;
      min-height: 1000px;
      width: 100%;
      display: flex;
      text-align: center;
      align-items: center;
    }
`

export default function HeroSection() {
  return (
    <HeroSectionStyles> 
      <div>
        <div className='slider-img'>
          <img src={sliderImg} alt="slider img" />
        </div>
      </div>
    </HeroSectionStyles>
  )
}
