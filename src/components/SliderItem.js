import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import sliderImg from '../assets/images/OLIVE FRUIT.jpg';

const SliderItemStyles = styled.div`
    .sliderItem_info {
	    margin-top: 10rem;
    }
    img{
        height: 600px;
    }
`

export default function SliderItem() {
  return (
    <SliderItemStyles>
        <div className='sliderItem_info'>
            <h1>this is slider</h1>
            <Link to="#">
                <h2 className='sliderItem_title'>Slider Item 1</h2>
            </Link>
            <p className='projectItem_desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <Link to='/' className='productItem_img'>
            <img src={sliderImg} alt='slider img' />
        </Link>
    </SliderItemStyles>
  )
}
