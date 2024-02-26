import React, { useState } from 'react'

import { NavLink } from 'react-router-dom';

import { HiMiniBars3 } from "react-icons/hi2";

import { LiaTimesSolid } from "react-icons/lia";




function Navbar() {
  const [toggle, setToggle] = useState(!true);
  return (
    <div className={`w-full ${toggle ? 'bg-black/45' : ""} absolute top-0 left-0 right-0 z-20`}>
    <div className="w-full max-w-[1400px] mx-auto h-20 flex items-center justify-between px-4">
      <h1 className='text-[1rem] md:text-xl text-white tracking-wider '><a href='#'>ProDrones*</a></h1>
      <ul className="hidden sm:flex text-white gap-9 z-20">
        <li><NavLink to="/">Home</NavLink></li>
        <li><a href="#">About us</a></li>
        <li><a href="#">Contact us</a></li>
      </ul>
      {/* responsive nav  */}
      <ul className={`block sm:hidden text-white gap-9 absolute top-[5rem] ${toggle ? "left-[0]" :"left-[-100%]"} duration-300 right-0 h-screen bg-intro w-full space-y-4 pl-10 z-20`}>
        <li><NavLink to="/" className='Navbtn'>Home</NavLink></li> 
        <li><a href="#" className='Navbtn'>About us</a></li>
        <li><a href="#" className='Navbtn'>Contact us</a></li>
      </ul>
      {
        toggle? 
        <LiaTimesSolid onClick={()=>setToggle(!toggle)} className='text-white text-xl sm:hidden'/>
        : 
        <HiMiniBars3 onClick={()=>setToggle(!toggle)} className='text-white text-xl sm:hidden'/>

      }
      {/* responsive nav  */}
    </div>
    </div>
  )
}

export default Navbar