import React from "react";
import { AiFillGithub, AiFillMail, AiFillTwitterCircle } from "react-icons/ai";

function Contact() {
  return (
    <div>
      <form className="text-sm mt-32">
        <label className="w-full flex flex-col gap-1.5">
          <h2 className="font-semibold text-lg text-purple-500">
            Enter your info and we will get back to you within a day
          </h2>
          <input className="w-full" placeholder="First name" />
        </label>
        <input placeholder="Last name" />
        <input placeholder="Email address" />
        <textarea
          rows={4}
          placeholder="Brief description about your project"
        ></textarea>
        <button className="text-white px-2 py-2 mt-2 bg-purple-500 shadow-xl rounded text-sm font-semibold hover:scale-105 duration-150 hover:skew-x-2">
          Contact us
        </button>
        <div className="flex gap-2 text-gray-900">
          <AiFillGithub size={29} className="cursor-pointer" />
          <AiFillMail size={29} className="cursor-pointer" />
          <AiFillTwitterCircle size={29} className="cursor-pointer" />
        </div>
      </form>
    </div>
  );
}

export default Contact;
