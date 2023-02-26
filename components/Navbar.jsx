import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  return (
    <nav
      className={
        "flex gap-2 md:gap-8 justify-between md:justify-center border py-8 md:px-0 px-6 text-sm"
      }
    >
      <p className="font-bold">Business-Name</p>
      <div className="gap-8 hidden md:flex">
        <p>Contact</p>
        <p>Pricing</p>
        <p>FAQ</p>
        <p>About</p>
      </div>
      <p className="md:hidden cursro-pointer"><RxHamburgerMenu size={22}/></p>
    </nav>
  );
}

export default Navbar;
