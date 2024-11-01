import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Header() {

  const header = useRef()

  useGSAP(
      () => {
          // gsap code here...
          gsap.from('h2', { y:"random(100%,-100%,10)", opacity:0, duration:1, stagger:".5", }); // <-- automatically reverted
      },
      { scope: header }
  ); 
  return (
   <header>
    <nav ref={header} className='flex justify-center text-[18px] py-[2rem] gap-8 font-regular items-center'>
      <a className='hover:border-b-4 hover:border-[#7CC140] pb-2' href="#">Home</a>
      <a className='hover:border-b-4 hover:border-[#7CC140] pb-2' href="#">About Us</a>
      <a className='hover:border-b-4 hover:border-[#7CC140] pb-2'href="#">WholeSale</a>

      <div className="logo flex justify-center items-center">
      <h2 className='text-[3rem] font-["gallient"]'>L</h2>
      <h2 className='text-[3rem] font-["gallient"]'>o</h2>
      <h2 className='text-[3rem] font-["gallient"]'>g</h2>
      <h2 className='text-[3rem] font-["gallient"]'>o</h2>
      </div>

      <a className='hover:border-b-4 hover:border-[#7CC140] pb-2' href="#">Service</a>
      <a className='hover:border-b-4 hover:border-[#7CC140] pb-2' href="#">News</a>
      <a className='hover:border-b-4 hover:border-[#7CC140] pb-2' href="#">How it Works</a>
    </nav>
   </header>
  )
}

export default Header