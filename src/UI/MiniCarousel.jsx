import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { FaHeadphonesAlt } from 'react-icons/fa'
import { IoWatch } from "react-icons/io5";
import { IoPhonePortraitOutline, IoStopwatchOutline } from 'react-icons/io5'

function MiniCarousel() {

  useGSAP(()=>{
    gsap.to(".runner",{x:500,ease:'linear', repeat:-1,duration:5})
  })
  return (
    <div className=' bg-white -z-40 relative'>
      <img src="../public/shape-5.png " className='absolute top-[9w] -z-20' alt="shape-5" />
<div className="divider bg-[#388FCB] h-[10px] w-[32vw] rounded-r-full my-2"></div>
<div className="divider bg-[#7CC140] h-[10px] w-[26vw] rounded-r-full"></div>

<div className="carousel">
    <div className="runner text-6xl flex justify-center items-center gap-2 flex-nowrap pt-[3rem] pb-[12rem]">
        {Array.from({ length: 63 }, (_, index) => (    <>
        <h2><IoPhonePortraitOutline color='green' /></h2>
        <h2><IoWatch color='green' /> </h2>
        <h2><FaHeadphonesAlt color='green' /></h2>
        </>))}
    </div>
</div>

    </div>
  )
}

export default MiniCarousel