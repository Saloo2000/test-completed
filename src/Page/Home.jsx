import React from 'react'
import SubHeader from '../UI/SubHeader'
import Header from '../UI/Header'
import Hero from '../UI/Hero'
import MiniCarousel from '../UI/MiniCarousel'
import MainCarousel from '../UI/MainCarousel'

function Home() {
  return (
    <div className='h-[120vh]'>
       <div className='bg-[#EEF9FF] w-full mt-[4rem] rounded-t-[50px] absolute z-30 overflow-hidden'>
 <Header/>
 <Hero/>
 <MiniCarousel/>
 <MainCarousel/>
 </div>
    </div>
  )
}

export default Home