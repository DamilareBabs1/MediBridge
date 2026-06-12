import React from 'react'
import { useState } from 'react'
import DrAmelia from '../assets/Dr.AmeliaChan.svg'
import Calender from '../assets/calendar-days.svg'
import clocler from '../assets/clock.svg'



export default function Appointcomp() {
  return (
    <div>
    <section className='border border-[#D7D7D7] rounded-md bg-white w-[1124px] gap-[10px] m-8 h-[169px]'>
      <div className='flex justify-between items-center p-8'>
        <div className='flex gap-5 items-center'><img className='w-[85px] h-[83px]' src={DrAmelia} alt="" />    <div className='gap-[10px]'>
                <h1 className='text-[#141313] text-[20px] w-[160px] h-[20px]'>Dr. Amelia Chen</h1>
                <p className='text-[#605E5E] text-[16px] pt-3'>Cardiology Department</p><div className='flex pt-2 gap-3 items-center'><img src={Calender} alt="" />
                <p className='text-[#605E5E]'>Thursday, July 2, 2026</p><img className='w-[23px] h-[23px]' src={clocler} alt="" />
                <p className='text-[#605E5E]'>3:00 PM</p></div>
             </div>
        </div>
        
        <div className='flex flex-col items-end gap-[21px]'>
    
    <p className='border flex border-[#E0F8F3] bg-[#E0F8F3] text-[#28574E] w-[104px] h-[40px] rounded-2xl items-center justify-center text-[16px]'>
        Confirmed
    </p>

    <div className='flex gap-3'>

        <button className='hover:text-white text-[#28574E] bg-white border border-[#28574E] hover:bg-[#28574E] text-center w-[180px] h-[45px] rounded-md text-[18px]'>View Summary</button>
        <button className='hover:text-white text-[#28574E] bg-white border border-[#28574E] hover:bg-[#28574E] text-center w-[180px] h-[45px] rounded-md text-[18px]'>Book Follow-Up</button>
    </div>
    </div>
    </div>
    </section>

    </div>
  )
}