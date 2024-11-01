import React, { useRef, useState } from 'react'
import { MdOutlineCallMade } from "react-icons/md";
import { BsEnvelope } from "react-icons/bs";
import { MdOutlineCallReceived } from "react-icons/md";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { IoMdPeople } from 'react-icons/io';
import { TiSocialFacebook, TiSocialTwitter } from 'react-icons/ti';
import { SlSocialBehance, SlSocialInstagram } from 'react-icons/sl';
import { FaArrowDownLong, FaArrowRightLong } from 'react-icons/fa6';

let text=["MobilePhones","Laptop","Tablets"]

function HeroContent() {
    let [count, setCount]=useState(0) 

    const texter = useRef()
    const texterRef = useRef()
 useGSAP(function anime(){
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(texterRef.current, { y: "-200px", duration: 1, delay: 2, onComplete:()=>{counter()}}) 
    .to(texterRef.current, { y: "0px", duration: 1 });
    
 },{scope:texter})

 function counter() {
    setCount(count > 1 ? count = 0 : count=count+1)
 }
 

  return (
    <div className="left w-2/4 relative px-[8vw] flex items-center">
    <img className='right absolute w-[16rem] top-[-9vw] left-[1rem] z-[-1]' src="../public/shape.png" alt="" />
    <img className='left absolute w-[19rem] left-[11rem] top-[-4rem] z-[-2]' src="../public/shape-2.png" alt=""/>
   
   <div ref={texter} className='mt-[-4vw]'>
   <h2 className='text-[48px] font-bold w-fit'>Largest <span className='text-[#388FCB]'> Wholesalers</span> </h2>
   <h2 className='flex text-[48px] font-bold w-fit overflow-hidden'>of <p ref={texterRef} className='texter pl-3 text-[#388FCB]'>{text[count]}</p></h2>
   <p className='py-[1vw] text-[1rem]'>Supply that meets Demand. Get the best wholesale prices of used and refurbished Mobile Stocks</p>
   <a href="#" className='flex gap-2 text-[#388FCB] text-[1.2rem]'>Learn More <MdOutlineCallMade /></a>

   <form className='flex py-[1.2vw] text-white gap-4'>
       <div className='rounded-full px-6 border-[1px] flex justify-center items-center gap-2 bg-white text-zinc-400 border-[#7CC140]'>
   <BsEnvelope/>
       <input 
       type="email"
       placeholder='Email'
       />
       </div>
   
       <button className='px-6 py-3 bg-[#7CC140] hover:bg-[#EEF9FF] border-2 hover:border-[#7CC140] hover:text-[#7CC140] rounded-full flex justify-center items-center gap-2'>Subscribe <FaArrowRightLong /></button>
       <button className='px-6 py-3 bg-[#388FCB] hover:bg-[#EEF9FF] border-2 hover:border-[#388FCB] hover:text-[#388FCB] rounded-full flex justify-center items-center gap-2'>Stocklist <FaArrowDownLong /></button>
   </form>

   <div className="icon-set pt-[1.2rem] flex gap-6">
       <div className="gr flex gap-2 text-2xl">
           <div className='bg-[#7CC140] grad bg-gradient-to-l w-[40px] h-[40px] flex justify-center items-center rounded-full p-4'><p><TiSocialFacebook color='white'/></p></div>
           <div className='bg-[#7CC140] grad bg-gradient-to-l w-[40px] h-[40px] flex justify-center items-center rounded-full p-4'><p><TiSocialTwitter color='white'/></p></div>
           <div className='bg-[#7CC140] grad bg-gradient-to-l w-[40px] h-[40px] flex justify-center items-center rounded-full p-4'><p><SlSocialBehance color='white'/></p></div>
           <div className='bg-[#7CC140] grad bg-gradient-to-l w-[40px] h-[40px] flex justify-center items-center rounded-full p-4'><p><TiSocialFacebook color='white'/></p></div>
           <div className='bg-[#7CC140] grad bg-gradient-to-l w-[40px] h-[40px] flex justify-center items-center rounded-full p-4'><p><SlSocialInstagram color='white'/></p></div>
       </div>
       <div className="para flex items-center justify-center gap-2">
       <p className='text-4xl'><IoMdPeople color='#7CC140'/></p>
           <p className='text-[1rem] font-bold bg-gradient-to-bl from-[#7CC140] to-[#388FCB] bg-clip-text text-transparent'>400K People Registered</p>
       </div>
   </div>

   </div>
    </div>
  )
}

export default HeroContent