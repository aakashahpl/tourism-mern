"use client";
import React, { useState } from "react";
import Image from "next/image";
import ImageSlider from "./imageslider";
import MapboxMap from "./mapbox";

const Homeo = () => {
  const slides = [
    { url: "/taj10.jpg", title: "beach" },
    { url: "/rajasthan10.jpg", title: "boat" },
    { url: "/kashmir10.jpg", title: "boat" },
    { url: "/tiger11.jpg", title: "boat" },
    { url: "/victoria.jpg", title: "boat" },
  ];
  return (
    <div className="">
      <ImageSlider slides={slides} />
      <div className="flex">
        <div className="w-1/2 h-screen"></div>
        <MapboxMap />
      </div>  
    </div>
  );
};

export default Homeo;
// comment
