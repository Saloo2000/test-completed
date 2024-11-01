import React, { useRef } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
function PhoneContent() {

    const cont = useRef()
    const contgr = useRef()

    useGSAP(()=>{
        gsap.to(".right",{rotation:360,duration:20,repeat:-1, ease:"linear"})
        gsap.to(".left",{rotation:-360,duration:15,repeat:-1, ease:"linear"})
        gsap.to(".green-r",{rotation:-360,duration:18,repeat:-1, ease:"linear"})
        gsap.to(".green-l",{rotation:360,duration:29,repeat:-1, ease:"linear"})
        gsap.to(".sm-circle-l",{rotation:-360,duration:10,repeat:-1, ease:"linear"})
        gsap.to(".sm-circle-r",{rotation:360,duration:15,repeat:-1, ease:"linear"})
    },{scope:cont})

  return (
    <div ref={cont} className="w-2/4 flex justify-center items-center relative">


        <div className="main-cirlce absolute -z-20 ">
            <img className='right m-circle absolute w-full object-cover h-[100vh] ' src="../public/shape-4.png" alt="shape-4" />
            <img className='left m-circle rotate-6 w-full object-cover h-[100vh]' src="../public/shape-3.png" alt="shape-3" />
            
        </div>

        
        <div ref={cont} className="geen-cirlce self-start -z-10 ">
            <img className='green-l absolute w-[30rem] object-cover left-[14rem] top-16' src="../public/green.png" alt="green" />
            <img className='green-r m-circle absolute w-[30rem] object-cover opacity-30 rotate-45 left-[14rem] top-16' src="../public/green.png" alt="green" />
        </div>


        <div className="small-green-cirlce self-start -z-5 ">
            <img className='sm-circle-l absolute w-[8rem] object-cover left-[44rem] -top-16' src="../public/green.png" alt="green" />
            <img className='sm-circle-r absolute w-[8rem] object-cover opacity-30 rotate-90 left-[44rem] -top-16' src="../public/green.png" alt="green" />
        </div>


        <div className="phone-img pt-[3vw]">
            <img src="../public/phone.png" alt="phone" />
        </div>

        <div className="dots absolute right-[8rem] ">
        <div className="dots bg-zinc-300 w-[15px] h-[15px] rounded-full my-[4px]"></div>
        <div className="dots bg-[#7CC140] w-[15px] h-[30px] rounded-full my-[4px]"></div>
        <div className="dots bg-zinc-300 w-[15px] h-[15px] rounded-full my-[4px]"></div>
        <div className="dots bg-zinc-300 w-[15px] h-[15px] rounded-full my-[4px]"></div></div>

    </div>
  )
}

export default PhoneContent