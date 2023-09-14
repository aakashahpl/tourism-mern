"use client";
import React from "react";
import "../globals.css";
import Image from "next/image";
import localFont from "@next/font/local";

const Navbar = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[90%] h-[5rem] border-2 border-red-900 flex justify-between ">
        <div id="Logo" className="test-bdr py-2 flex px-2">
          <Image
            src={"/logo.png"}
            alt="My Image"
            width={60} // Set the width
            height={60} // Set the height
          />
          <h1
            className="text-white text-3xl px-2 py-2 "
            style={{ fontFamily: "MyFont" }}
          >
            India
          </h1>
        </div>

        <div>
          <ul className=" flex justify-between gap-6 py-4 px-5 test-bdr text-white text-2xl">
            <li className="">text</li>
            <li className="">text</li>
            <li className="">text</li>
            <li className="">text</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
