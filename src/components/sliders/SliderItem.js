import React from 'react';
import styled from 'styled-components';
import sliderImg from '../../assets/images/olive-fruit.jpg';
import Button from '../Button';

const SliderItemStyles = styled.div`
    .sliderItem{
        padding-top: 7rem;
    }
    .sliderItem_info{
        // background-color: #363636;
        // margin: 30rem;
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
            <div className='sliderItem_info'>
                {/* <div>
                    <h2 className='sliderItem_name'>{name}</h2>
                </div>
                <p className='sliderItem_desc'>{desc}</p> */}
                <Button btnLink='/products' btnText='Explore our product'/>
            </div>
        </div>
    </SliderItemStyles>
  )
}
