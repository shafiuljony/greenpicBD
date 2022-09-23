import React from "react";


import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";


export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      {direction === "next" ? <AiOutlineArrowRight /> : <AiOutlineArrowLeft />}
    </button>
  );
}