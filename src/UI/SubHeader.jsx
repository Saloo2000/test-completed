import React from 'react'
import { IoIosCall } from "react-icons/io";
import { BsEnvelope } from "react-icons/bs";

function SubHeader() {
 

  return (
    <div className='h-[8rem] text-[13px] pb-[4rem] bg-[#388FCB] px-[8vw] flex justify-between items-center text-white font-light absolute w-full'>
     
     <div className='flex gap-4'>
     <h2 className='flex items-center gap-2'><BsEnvelope /> Info@abc.com</h2>
     <h2 className='flex gap-2 items-center'><IoIosCall /> +923222255389</h2>
     </div>

     <div className='flex gap-4'>
      <h2 className='border-r-2 pr-4'>Privacy Policy</h2>
      <h2>Terms & Condition</h2>
     </div>

    </div>
  )
}

export default SubHeader