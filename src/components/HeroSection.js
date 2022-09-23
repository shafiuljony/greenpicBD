import React, {useState} from 'react'
import sliders from '../assets/data/sliders';
import SliderItem from './SliderItem';
import BtnSlider from './SliderBtn';
import styled from 'styled-components';


const HeroSectionStyles = styled.div`
    height: 700px;
    position: relative;
    overflow: hidden;

    /* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); */
  @media screen and (max-width: 700px){
    .container-slider {
      margin: 100px 10px 0;
    }
  }
  .slide {
    // margin-top: 10rem;
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    transition: opacity ease-in-out 0.4s;
  }
  .slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .active-anim {
    opacity: 1;
  }
  
  .btn-slide {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #f1f1f1;
    border: 1px solid rgba(34, 34, 34, 0.287);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  
  .btn-slide img {
    width: 25px;
    height: 25px;
    pointer-events: none;
  }
  .prev {
    top: 50%;
    left: 20px;
    transform: translateY(-60%);
  }
  .next {
    top: 50%;
    right: 20px;
    transform: translateY(-60%);
  }
  
  
  .container-dots {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
  }
  .dot {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 3px solid #f1f1f1;
    margin: 0 5px;
    background: #f1f1f1;
  }
  .dot.active {
    background: rgb(32, 32, 32);
  }
`

export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== sliders.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === sliders.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(sliders.length)
        }
    }
    return (
        <HeroSectionStyles className="container-slider">
            {sliders.map((slider, index) => {
                return (
                    <div
                    key={slider.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <SliderItem 
                          img={slider.img} 
                          title={slider.name}
                          desc={slider.desc}
                        />
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
        </HeroSectionStyles>
    )
}