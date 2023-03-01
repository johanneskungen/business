import React, { useState } from "react";
import Image from "next/image";
import image1 from "../assets/image.png";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const headings = ["Brainstorm", "Design", "Code", "Final touches"];

function Sell() {
  const [page, setPage] = useState(0);

  return (
    <section className="w-[92vw] md:w-[950px] flex flex-col gap-2 mx-auto my-12">
      <div className="flex text-sm gap-3">
        {headings.map((text, i) =>
          i === page ? (
            <p
              key={i}
              onClick={() => setPage(i)}
              className="border-b border-purple-500 cursor-pointer"
            >
              {text}
            </p>
          ) : (
            <p key={i} className="cursor-pointer" onClick={() => setPage(i)}>
              {text}
            </p>
          )
        )}
      </div>
      <div className="w-full border h-96 flex items-center justify-center gap-10 shadow-lg overflow-hidden">
        <div>
          {page == 0 ? (
            <button disabled className="opacity-30">
              <BsFillArrowLeftCircleFill size={35} />
            </button>
          ) : (
            <button onClick={() => setPage((prev) => prev - 1)}>
              <BsFillArrowLeftCircleFill size={35} />
            </button>
          )}
        </div>
        <div>
          {headings.map(
            (text, i) =>
              i === page && (
                <Image key={i} src={image1} alt="Image" width={700}/>
              )
          )}
        </div>
        <div>
          {page == 3 ? (
            <button disabled className="opacity-30">
              <BsFillArrowRightCircleFill size={35} />
            </button>
          ) : (
            <button onClick={() => setPage((prev) => prev + 1)}>
              <BsFillArrowRightCircleFill size={35} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default Sell;
