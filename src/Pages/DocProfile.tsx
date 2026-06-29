import React from 'react'
import CancelX from "../assets/hugeicons_cancel-01.svg"
import DoctorOne from '../assets/Dr.AmeliaChan.svg'


export default function DocProfile({ doctor, onClose}) {
  if (!doctor) return null;
  return (
    <div className='flex flex-col rounded-md gap-[19px]'>
        <section className='flex items-center border-b border-[#E7E4E4] justify-between p-15 '> 
            <div className='flex flex-col gap-[9px]'>
              <h1 className='text-[#000000] w-[354px] h-[28px] text-[22px] font-semibold'>Doctor Profile</h1>
            </div>
            <div>
                <button onClick={onClose}><img className='text-[#605E5E]' src={CancelX} alt="" /></button>
            </div>
        </section>

        <section>
           <div className='flex gap-[18px] items-center p-[28px]'>
            <img className='w-[69px] h-[77px]' src={DoctorOne} alt="" />

            <div className='flex flex-col gap-[8px]'>
              <h1 className='text-[#141313] text-[18px]'>{doctor?.name}</h1>
              <p className='text-[#605E5E] text-[15px]'>{doctor?.department}</p>

              <div className='flex gap-[14px] text-[14px]'>
                <p>{doctor?.experience}</p>
                <p className='text-[#10AA37]'>Available</p>
              </div>
            </div>
          </div>
        </section>

        <section>
            <div className='w-[410px] h-[80px] pl-[28px]'>
                <p className='text-[#3E3B3B] text-[16px]'>Dr. Chen is a board-certified cardiologist with over 14 years of experience in interventional cardiology. He specializes in complex coronary interventions and heart failure</p>
            </div>
        </section>

        <section>
            <div className='flex flex-col gap-[14px] p-[28px]'>
                <h1 className='text-[#141313] text-[18px]'>Availability</h1>
                <p className='text-[#3E3B3B] text-[15px]'>Monday - Wednesday</p>
                <p className='text-[#3E3B3B] text-[15px]'>10:00 AM – 4:00 PM</p>
            </div>
        </section>
    </div>
  )
}