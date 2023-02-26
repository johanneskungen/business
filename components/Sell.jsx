import React, { useState } from "react";

function Sell() {
    const [active, setActive] = useState(true)
    const checkActive = () => {

    }
  return (
    <section className="w-[92vw] md:w-[950px] flex flex-col gap-2 mx-auto my-12">
        <div className="flex text-sm gap-3">
            <p className={`${active ? "border-b border-purple-500": ""} cursor-pointer`}>Brainstorming</p>
            <p>Desiging</p>
            <p>Coding</p>
            <p>Final touches</p>
        </div>
        <div className="w-full border h-96 grid place-items-center">
            <h1>Video</h1>
        </div>
    </section>
  );
}

export default Sell;
