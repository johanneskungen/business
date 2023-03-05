import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  return (
    <nav
      className={
        "flex gap-2 md:gap-8 justify-between md:justify-center items-center border border-gray-400 py-8 md:px-0 px-6 text-sm"
      }
    >
      <a href="/" className="font-semibold text-lg border-r-2 border-gray-400 pr-8">JeConsulting</a>
      <div className="gap-8 hidden md:flex">
        <a href="/contact">Contact</a>
        <p>Pricing</p>
        <p>FAQ</p>
        <p>About</p>
      </div>
      <p className="md:hidden cursor-pointer"><RxHamburgerMenu size={22}/></p>
    </nav>
  );
}

export default Navbar;
