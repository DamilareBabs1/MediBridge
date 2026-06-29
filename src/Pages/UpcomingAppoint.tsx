import React from 'react'
import { useState } from 'react'
import DrAmelia from '../assets/Dr.AmeliaChan.svg'
import Calender from '../assets/calendar-days.svg'
import clocler from '../assets/clock.svg'
import Appointcomp from './Appointcomp'


export default function UpcomingAppoint({ selectedDoctor, selectedDepartment, selectedDate, selectedTime, reason, onCancel, status }) {

const safeDate = selectedDate ? new Date(selectedDate) : null;

  return (
    <div>
    <section className='border border-[#D7D7D7] rounded-md bg-white w-[1124px] gap-[10px] m-8 h-[169px]'>
      <div className='flex justify-between items-center p-8'>
        <div className='flex gap-5 items-center'><img className='w-[85px] h-[83px]' src={selectedDoctor?.image} alt="" /> <div className='gap-[10px]'>
                <h1 className='text-[#141313] text-[20px] w-[160px] h-[20px]'>{selectedDoctor?.name}</h1>
                <p className='text-[#605E5E] text-[16px] pt-3'>{selectedDepartment} Department</p><div className='flex pt-2 gap-3 items-center'><img src={Calender} alt="" />
                {safeDate && !isNaN(safeDate.getTime()) && (<p className='text-[#605E5E]'>{new Date(selectedDate).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric",})}</p>)}<img className='w-[23px] h-[23px]' src={clocler} alt="" />
                <p className='text-[#605E5E]'>{selectedTime}</p></div>
             </div>
        </div>
        
        <div className='flex flex-col items-end gap-[21px]'>
    
    <p
  className={`border flex w-[104px] h-[40px] rounded-2xl items-center justify-center text-[16px]
    ${
      status === "Confirmed"
        ? "border-[#E0F8F3] bg-[#E0F8F3] text-[#28574E]"
        : "border-[#FDE2E2] bg-[#FDE2E2] text-[#FF383C]"
    }`}
>
  {status}
</p>

    <div className='flex gap-3'>
        <button className='hover:bg-[#28574E] border hover:border-[#28574E] hover:text-white bg-white text-[#28574E] border-[#28574E] w-[154px] h-[58px] rounded-md'>
            View Details
        </button>

        <button className='hover:bg-[#28574E] border hover:border-[#28574E] hover:text-white bg-white text-[#28574E] border-[#28574E] w-[154px] h-[58px] rounded-md'>
            Reschedule
        </button>

        <button className='text-[#3E3B3B] text-[18px]'>Message</button>

        <button onClick={onCancel} className='text-[#FF383C] text-[18px]'>Cancel</button>
    </div>
    </div>
    </div>
    </section>


        
    </div>
  )
}