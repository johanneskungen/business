import Image from "next/image";
import React from "react";
import cdimg from '../assets/code_image.jpg'
import { useEffect } from 'react'

function Story() {

  useEffect(() => {
    if(window != undefined)
    return
  }, [])

  return (
    <section className="bg-purple-500/70 h-[400px] my-24 text-white">
      <div className="flex flex-col justify-center items-center md:w-[30vw] md:mx-auto h-[90%]">
        <div className="flex flex-col gap-1">
          <h2 className="font-bold text-2xl text-center md:text-left">Why did this business start?</h2>
          <p className="text-sm pt-1 text-center md:text-left">Our team saw an increase in the demand of personalized, modern websites. After setting up a business plan the business took of real fast. It started on fiverr where the business sold a couple websites, as a freelancing service. However, the team wanted to go further and decided to start the business. </p>
        </div>
        <div className="relative top-[6.3rem]">
          <button className="bg-white px-2 py-1 text-purple-500 shadow-xl rounded text-lg font-semibold hover:scale-105 duration-150 hover:skew-x-6">Get In Touch</button>
        </div>
      </div>
    </section>
  );
}

export default Story;
