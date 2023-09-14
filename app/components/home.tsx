"use client";
import React, { useState } from "react";
import Image from "next/image";
import ImageSlider from "./imageslider";
import MapboxMap from "./mapbox";

const Homeo = () => {
  const slides = [
    { url: "/taj.jpg", title: "beach" },
    { url: "/pink.jpg", title: "boat" },
    { url: "/women.jpg", title: "boat" },
    { url: "/Taj.jpg", title: "boat" },
    { url: "/camle.jpg", title: "boat" },
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
