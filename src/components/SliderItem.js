import React from 'react';
import styled from 'styled-components';
import sliderImg from '../assets/images/OLIVE FRUIT.jpg';
import Button from './Button';

const SliderItemStyles = styled.div`
    .sliderItem{
        padding-top: 5rem;
    }
    .sliderItem_info{
        margin-top: -50rem;
        padding-left: 10rem;
        color: var(--green-2);
    }

`

export default function SliderItem() {
  return (
    <SliderItemStyles>
        <div className='sliderItem'>
        <div className='productItem_img'>
            <img src={sliderImg} alt='slider img' />
        </div>
            <div className='sliderItem_info'>
                <h1>this is slider</h1>
                <div>
                    <h2 className='sliderItem_title'>Slider Item 1</h2>
                </div>
                <p className='projectItem_desc'>Lorem Ipsum is simply dummy text of the 
                printing and typesetting industry.</p>
                <Button btnLink='/products' btnText='Explore our product'/>
            </div>
        </div>
    </SliderItemStyles>
  )
}
