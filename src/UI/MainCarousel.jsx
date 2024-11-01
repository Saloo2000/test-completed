import React, { useRef } from 'react'
import Carousel from './Carousel'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function MainCarousel() {
const rotate=useRef()

  useGSAP(()=>{
    gsap.to(".rot",{rotation:360, duration:15, ease:"linear", repeat:-1, yoyo:true})
  },{scope:rotate})

  return (
    <div className='bg-white'>

<div ref={rotate}>
  <img src="../public/dot-1.png" className='rot w-[300px] absolute left-[-60px] opacity-20' alt="dot-1" />
  <img  src="../public/dot2.png" className='rot w-[300px] absolute left-[-80px] top-[30%] -z-40 opacity-20' alt="dot-2" />
</div>

        <div className="heading text-center text-[48px] flex justify-center gap-2 font-extrabold relative ">
            <img src="../public/headbg.png" className='h-[150px] top-[-2vw] absolute left-[38.8vw]' alt="headbg" />
         <div className='relative z-30 flex gap-5' >
         <h2 className=' text-white'>
            Mobile</h2>
            <h2 className='text-[#388FCB]'>Stock</h2>
         </div>
        </div>
         <p className='mx-auto text-center pt-[4rem] text-[20px] w-[44vw]'>We stay upto date with latest technology trends and offer innovative solutions. that help you stay ahead in competetion</p>
         <Carousel/>
    </div>
  )
}

export default MainCarousel