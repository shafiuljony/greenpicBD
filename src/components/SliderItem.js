import React from 'react';
import styled from 'styled-components';
import sliderImg from '../assets/images/OLIVE FRUIT.jpg';
import Button from './Button';

const SliderItemStyles = styled.div`
    .sliderItem{
        padding-top: 5rem;
    }
    .productItem_img{
        img{
            height: 1000px;
        }
    }
    .sliderItem_info{
        margin-top: -50rem;
        padding-left: 10rem;
        color: var(--green-2);
    }

`

export default function SliderItem({
    img = sliderImg,
    title = "slider name",
    desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
}) {
  return (
    <SliderItemStyles>
        <div className='sliderItem'>
        <div className='productItem_img'>
            <img src={img} alt='slider img' />
        </div>
            <div className='sliderItem_info'>
                <div>
                    <h2 className='sliderItem_title'>{title}</h2>
                </div>
                <p className='projectItem_desc'>{desc}</p>
                <Button btnLink='/products' btnText='Explore our product'/>
            </div>
        </div>
    </SliderItemStyles>
  )
}
