import React from 'react'
import DirectinalIcon from '../assets/DirectionTag.svg'
import FiveStar from '../assets/5Star.svg'
import Jordan from '../assets/JordanA.svg'
import PriyaS from '../assets/PriyaS.svg'
import Marcus from '../assets/MarcusW.svg'
import { Link } from 'react-router'


export default function PatientCard() {
  return (
    <div>

          {/* PATIENT STORIES SECTION */}
          <section className='w-full bg-[#F7F7F7] flex justify-center pt-10 px-15 pb-20'>
            <div className='w-full max-w-[1238px] flex flex-col gap-8'>
              <p className='text-[#28574E] text-[13px] bg-[#DCF2EE] w-[163px] h-[43px] items-center justify-center flex rounded-xl font-medium'>Patient stories</p>
            <div className='flex items-center justify-between'>
              <h1 className='text-[36px] w-[470px] font-bold text-[#141313]'>Real people. Real care. Real coordination</h1>
                <img src={DirectinalIcon} alt="" />
            </div>

           <div className='grid grid-cols-3 gap-6'>

        {/* CARD 1 */}

        <div className='border border-[#DDDDDD] bg-[#EEEDED] w-[357px] h-[236px] rounded-xl p-6 flex flex-col gap-4'>
         <img className='w-[130px] h-[21.15px]' src={FiveStar} alt="" />
          <p className='text-[14px] text-[#403F3F]'>"I researched my mother's cardiology visit in under a minute. The whole family is on it now"</p>
        <div className='mt-5'>
           <hr />
        </div>

        <div className='flex items-center gap-3 mt-4'>
          <img src={Jordan} alt="" />

          <div>
            <p className='text-[14px] font-semibold'>Jordan A.</p>
            <p className='text-sm text-[10px] text-[#656565]'>Family caregiver</p>
          </div>
        </div>
      </div>

      {/* CARD 2 */}

      <div className='border border-[#DDDDDD] bg-[#EEEDED] w-[357px] h-[236px] rounded-xl p-6 flex flex-col gap-4'>
        <img className='w-[130px] h-[21.15px]' src={FiveStar} alt="" />

        <p className='text-[14px] text-[#403F3F]'>
          "MediCare isn't just a hospital, it's a partner in my family's health. The pediatrics team is simply the best in the state."
        </p>
         <div className='mt-1'>
           <hr />
        </div>

        <div className='flex items-center gap-3 mt-3'>
          <img src={PriyaS} alt="" />

          <div>
            <p className='text-[14px] font-semibold'>Priya S.</p>
            <p className='text-sm text-[10px] text-[#656565]'>Patient</p>
          </div>
        </div>
      </div>

      {/* CARD 3 */}

      <div className='bg-[#EEEDED] border border-[#DDDDDD] w-[357px] h-[236px] rounded-xl p-6 flex flex-col gap-4'>
        <img className='w-[130px] h-[21.15px]' src={FiveStar} alt="" />

        <p className='text-[14px] text-[#403F3F]'>
          "The AI support helped me prep questions before my visit. My doctor noticed the difference."
        </p>

        <hr className='mb-4' />

        <div className='flex items-center gap-3'>
          <img src={Marcus} alt="" />

          <div>
            <p className='text-[14px] font-semibold'>Marcus D.</p>
            <p className='text-sm text-[10px] text-[#656565]'>Caregiver</p>
          </div>
        </div>
      </div>
      </div>
     </div>

     
  </section>
    </div>
  )
}