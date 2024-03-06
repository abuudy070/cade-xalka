import React, { useState } from "react";

function Header() {
    const [nav, setNav] = useState(false)
    const handleNav = () =>{
        setNav(!nav)
    }
  return (
    <div>
      <div className="bg-[#F0DC28] h-[100px] flex items-center justify-between px-[100px] w-full ">
        <h1 className=" text-3xl font-bold text-center">CODE XALKA</h1>
        <ul className="hidden sm:flex items-center justify-between gap-10 text-3xl">
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
        <i class={`${nav?"hidden":"block"} ml-10 sm:hidden fa-solid fa-bars text-5xl font-bold `} onClick={handleNav}></i>
        <i class={`${nav?"block":"hidden"} fa-solid fa-xmark text-5xl font-bold `} onClick={handleNav}></i>
      </div>
      <div>
      <ul  className={`  ${nav?"flex":"hidden"} flex-col gap-12 py-10 sm:hidden  items-center justify-between text-3xl`}>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;