import React from "react";
import { GiBlackBook } from "react-icons/gi";

function Hero() {
  return (
    <main className="py-24 2xl:py-[10rem]">
      <div className="flex flex-col items-center gap-4">
        <div className="text-center flex flex-col gap-1 w-[92vw] md:w-[650px]">
          <h1 className="font-bold text-2xl md:text-5xl">
            Personalized websites is only a few minutes away!
          </h1>
          <h3 className="font-semibold md:font-normal text-sm md:text-xl text-black/70">
            Want to reach out to more customers? Start marketing your website instead of 
            your instagram or tiktok accounts!
          </h3>
        </div>
        <div>
          <button className="button_icon">
            <a href="/contact" className="flex items-center gap-1">Get a website! <GiBlackBook /></a>
          </button>
        </div>
      </div>
    </main>
  );
}

export default Hero;
