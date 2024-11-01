import React from 'react'
import Home from './Page/Home'
import SubHeader from './UI/SubHeader'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



function App() {
  return (
    <div className='font-["poppins"]'>
      <SubHeader/>
      <Home/>
    </div>
  )
}

export default App