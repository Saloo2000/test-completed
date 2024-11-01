import React, { useRef } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

function Carousel() {

    const box=useRef()

    const navigation = (dir) => {
        const container = box.current;
        const scrollAmount =
          dir === "left"
            ? container.scrollLeft - (container.offsetWidth - 500)
            : container.scrollLeft + (container.offsetWidth - 500);
    
        container.scrollTo({
          left: scrollAmount,
          behavior: "smooth",
        });
    }

  return (
    <div className="relative justify-between items-center">
   
    <div ref={box}  className='flex gap-[30px] pt-[1.5rem] pb-[1.5rem] w-[70%] mx-auto overflow-hidden mt-[4rem]'>
        
    {Array.from({ length: 6 }, (_, index) => (
        <div key={index} className="flex justify-center rounded-[16px] items-center bg-[#EEF9FF] border-1 w-[310px] h-[220px] flex-shrink-0  bg-gradient-to-t from-[#388FCB] to-[#7CC140]">
            <div className='w-[303px] h-[213px] rounded-[16px] bg-[#EEF9FF]'>
                <img src="../public/phone.png" className='h-[100px] mx-auto mt-[20px]' alt="" />
                <h2 className='text-[20px] text-center'>Apple Iphone 16 Pro Max</h2>
                <p className='text-[12px] text-zinc-500 text-center'>Apple iPhone 14 Pro 512GB Gold (MQ233)</p>
            </div>
          
        </div> ))}
        </div> 

        <div className="btns flex justify-center items-center mx-auto gap-3 py-[32px]">
        <button onClick={()=>navigation("left")} className='border-2 border-[#7CC140] transition-colors p-2 rounded-full  right-[10px] text-black'><HiChevronLeft color='green'/></button>

<div className="dots bg-[#7CC140] w-[30px] h-[15px] rounded-full"></div>
<div className="dots bg-[#EEF9FF] w-[15px] h-[15px] rounded-full"></div>
<div className="dots bg-[#EEF9FF] w-[15px] h-[15px] rounded-full"></div>
<div className="dots bg-[#EEF9FF] w-[15px] h-[15px] rounded-full"></div>

        <button onClick={()=>navigation("right")} className='border-2 border-[#7CC140] transition-colors p-2 rounded-full  right-[10px] text-black'><HiChevronRight color='green'/></button>
        </div>

    </div>
  )
}

export default Carousel