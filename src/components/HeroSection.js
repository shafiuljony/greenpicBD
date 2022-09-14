import React, {useState} from 'react'
import '../components/sliders/Slider.css';
import sliders from '../assets/data/sliders';
import SliderItem from './sliders/SliderItem';
import BtnSlider from './sliders/SliderBtn';

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
        <div className="container-slider">
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
        </div>
    )
}