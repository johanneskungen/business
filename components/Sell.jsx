import React, { useState } from "react";

const headings = ["Brainstorm", "Design", "Code", "Final touches"];

function Sell() {
  const [page, setPage] = useState(0);

  return (
    <section className="w-[92vw] md:w-[950px] flex flex-col gap-2 mx-auto my-12">
      <div className="flex text-sm gap-3">
        {headings.map((text, i) => (
          i === page ? <p key={i} onClick={() => setPage(i)} className="border-b border-purple-500 cursor-pointer">{text}</p> : <p key={i} className="cursor-pointer" onClick={() => setPage(i)}>{text}</p>
        ))}
        
      </div>
      <div className="w-full border h-96 grid place-items-center shadow-lg">
        {headings.map((text, i) => (
          i === page && <h1 key={i}>{text}</h1>
        ))}
      </div>
    </section>
  );
}

export default Sell;
