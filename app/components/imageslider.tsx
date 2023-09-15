"use strict";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import React from "react";
import { useState } from "react";
import Image from "next/image";

const ImageSlider = ({ slides }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    console.log("previous");
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    console.log("Next");
  };
  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div>
      <div className="">
        <Image
          className="w-screen h-screen  -z-10"
          src={slides[currentIndex].url}
          fill={true}

          style={{objectFit:"cover"}}

          alt="Profile Picture"
        />
      </div>
      <div className=" absolute bottom-20 left-[95vh] select-none ">
        <div className=" flex p-3 w-[40vh] justify-between">
          <div className="hover:scale-110 ease-in-out" onClick={goToPrevious}>
            <BsFillArrowLeftCircleFill size={40} />
          </div>
          <div className="hover:scale-110 ease-in-out" onClick={goToNext}>
            <BsFillArrowRightCircleFill size={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
