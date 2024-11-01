import React from 'react'
import HeroContent from './HeroContent'
import PhoneContent from './PhoneContent'

function Hero() {
  return (
    <div className='flex justify-between items-center py-[2vw]'>
      <HeroContent/>
      <PhoneContent/>
    </div>
  )
}

export default Hero