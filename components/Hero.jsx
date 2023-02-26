import React from "react";
import { GiBlackBook } from "react-icons/gi";

function Hero() {
  return (
    <main className="py-24 2xl:py-[10rem]">
      <div className="flex flex-col items-center gap-4">
        <div className="text-center flex flex-col gap-1 w-[92vw] md:w-[650px]">
          <h1 className="font-bold text-2xl md:text-5xl">
            Sample text that can should attract customers to wesbite
          </h1>
          <h3 className="font-semibold md:font-normal text-sm md:text-xl">
            After reading the big heading you should be orsdf very
            tempted to buy a website from the company.
          </h3>
        </div>
        <div>
          <button className="button_icon">
            Our Story <GiBlackBook />
          </button>
        </div>
      </div>
    </main>
  );
}

export default Hero;
