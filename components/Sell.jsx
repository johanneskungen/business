import React, { useState } from "react";
import Image from "next/image";
import image1 from "../assets/image.png";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const headings = [
  {
    h: "Brainstorm",
    description:
      "Put all your different ideas on the table, together with our team, we will decide what would be best for your website.",
  },
  {
    h: "Design",
    description:
      "Provide some inspiration for our team by sending us links to website that you like (from an design perspective). We will then responde with various example that you can choose between. ",
  },
  {
    h: "Code",
    description:
      "Our team will code and design your future website. ",
  },
  {
    h: "Final touches",
    description:
      "In the last phase you will have a look on the website and decide which things you want to keep and what you want to change. We will also help you publish the website to the web and help with custom domain names if that is what you want. ",
  },
];

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
              {text.h}
            </p>
          ) : (
            <p key={i} className="cursor-pointer" onClick={() => setPage(i)}>
              {text.h}
            </p>
          )
        )}
      </div>
      <div className="w-full border border-gray-400 h-96 flex items-center justify-center gap-10 shadow-lg overflow-hidden">
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
        <div className="w-[50%]">
          {headings.map(
            (text, i) =>
              i === page && (
                <div key={i}>
                  <h3 className="text-lg font-semibold">{text.h}</h3>
                  <p className="text-sm">{text.description}</p>
                  {i === 3 && <button className="text-white px-2 py-1 mt-2 bg-purple-500 shadow-xl rounded text-sm font-semibold hover:scale-105 duration-150 hover:skew-x-2"><a href="/contact">Create wesbite</a></button>}
                </div>
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
