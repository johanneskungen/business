import React from "react";
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
          <h2 className="font-bold text-2xl text-center md:text-left">Why JeConsulting?</h2>
          <p className="text-sm pt-1 text-center md:text-left">We provide you with a website fast that does not need any maintenance after it has been published to the web. This means that you can focus on your clients and earn more website with a very atracting website from JeConsulting. Our services are also super-cheap compared to other companies. Get in touch now and get your personalized website now!</p>
        </div>
        <div className="relative top-[4.4rem]">
          <button className="bg-white px-2 py-1 text-purple-500 shadow-xl rounded text-normal font-semibold hover:scale-105 duration-150 hover:skew-x-6">Get In Touch</button>
        </div>
      </div>
    </section>
  );
}

export default Story;
