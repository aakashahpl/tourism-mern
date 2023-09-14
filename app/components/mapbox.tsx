"use client";
import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";

// Replace with your Mapbox access token
mapboxgl.accessToken =
  "pk.eyJ1IjoiYWFrYXNocGF0ZWxhaHBsIiwiYSI6ImNsbWF2MnpkejBkeW8zcGpyNnZsZGs1ancifQ.1CZK6EwQfroKMlUqn1yobA";

const MapboxMap = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map-container",
      style: "mapbox://styles/aakashpatelahpl/clmddgl7701a201nz4qonbcta", // Replace with your desired map style
      center: [77, 23], // Initial map center
      zoom: 4, // Initial zoom level
      projection: "globe",
    });

    return () => map.remove(); // Clean up when unmounting
  }, []);

  return (
    <div className="border-2 border-red-600 w-1/2 h-screen bg-gradient-to-r from-transparent to-black">
      <div id="map-container" style={{ width: "100%", height: "100%" }}></div>
    </div>
  );
};

export default MapboxMap;
