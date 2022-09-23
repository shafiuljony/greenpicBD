import React from 'react';
import styled from 'styled-components';
import sliderImg from '../assets/images/olive-fruit.jpg';

const SliderItemStyles = styled.div`
    .sliderItem{
        padding-top: 9rem;
    }
    .sliderItem_info{
        text-align: center;
        margin-top: -10rem;
        position: relative;
    }
    h2{
        text-transform: uppercase;
        font-size: 5rem;
        font-weight: 700;
    }
    p{
        font-size: 4rem;
    }

`

export default function SliderItem({
    img = sliderImg,
    desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    name = 'slider',
}) {
  return (
    <SliderItemStyles>
        <div className='sliderItem'>
            <div className='sliderItem_img'>
                <img src={img} alt='slider img' />
            </div>
        </div>
    </SliderItemStyles>
  )
}
