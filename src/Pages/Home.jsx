import React from 'react'

import Navbar from '../Component/Navbar/Navbar'

import { MdFitScreen } from "react-icons/md";

import { TbMultiplier2X } from "react-icons/tb";

import { IoSpeedometerOutline } from "react-icons/io5";

import { CiBatteryCharging } from "react-icons/ci";

import { FaSatellite } from "react-icons/fa";

import { CiClock2 } from "react-icons/ci";

function Home() {
  return (
    <div className={`w-full h-auto md:h-screen bg-intro`}>
        <Navbar/>
        <div className='w-full h-full max-w-[1400px] mx-auto py-28 text-white flex items-center justify-center flex-col'>
            <h1 className='sm:translate-x-[6rem] sm:translate-y-9 text-3xl  sm:text-[2.5rem] md:text-[3.6rem] sm:leading-[2.6rem] md:leading-[4rem] uppercase font-normal tracking-[0.5rem] font-Rubik'>Ui_Rimate<br/><span className='ml-[4rem] inline-block'>Camera</span> <br/><span className='ml-[2rem]'>Drone</span></h1>
          <div className='flex mt-10 translate-y-8 flex-wrap w-full justify-center'>
                  <div className='w-[10rem] p-3 m-2'>
                    <MdFitScreen className='md:text-2xl lg:text-[2.3rem]'/>
                    <p className='text-xl md:my-2 lg:my-4'>Live Streaming</p>
                  </div>
                  <div className='w-[10rem] p-3 m-2'>
                    <TbMultiplier2X className='md:text-2xl lg:text-[2.3rem]'/>
                    <p className='text-xl md:my-2 lg:my-4'>Enhanced Zoom</p>
                  </div>
                  <div className='w-[10rem] p-3 m-2'>
                    <IoSpeedometerOutline className='md:text-2xl lg:text-[2.3rem]'/>
                    <p className='text-xl md:my-2 lg:my-4'>Par Hours 17Km</p>
                  </div>
                  <div className='w-[10rem] p-3 m-2'>
                    <CiBatteryCharging className='md:text-2xl lg:text-[2.3rem]'/>
                    <p className='text-xl md:my-2 lg:my-4'>Extended Battery Life</p>
                  </div>
                  <div className='w-[10rem] p-3 m-2'>
                    <FaSatellite className='md:text-2xl lg:text-[2.3rem]'/>
                    <p className='text-xl md:my-2 lg:my-4'>Remote Sensing Satellites</p>
                  </div>
                


          </div>
        </div>

    </div>
  )
}

export default Home