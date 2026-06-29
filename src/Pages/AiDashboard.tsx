import React from 'react'
import Alien from '../assets/Alienbuild.svg'
import { MdSend } from "react-icons/md";
import infoContainer from '../assets/infoContainer.svg'



export default function AiDashboard() {
return (
    <div>
        <section className='flex justify-between items-center p-10'>
          <div className='flex flex-col gap-[5px]'>
            <h1 className='text-[22px] text-[#000000] w-[116px] h-[30px] font-bold'>AI Support</h1>
            <p className='text-[15px] text-[#707070] w-[680px] h-[20px]'>Describe your symptoms or ask any hospital-related question. The AI will guide you step-by-step.</p>
          </div>
        </section>
        
        <div className='w-[1126px] h-[767px] border border-[#D7D7D7] rounded-xl m-10'>
          <div className="flex items-center justify-between p-2 w-full border-b border-[#D7D7D7]">
            <div className='flex gap-3'>
              <img className='w-[25px] h-[25px]' src={Alien} alt="" />
              <h1>MediBridge AI</h1>
            </div>
          <div>
            <button className='w-[98px] h-[38px] bg-[#28574E] border-[#28574E] border text-white rounded-xl'>New Chat</button>
          </div>
        </div>
        
        <div className="p-4 flex gap-4 ">
          <img src={Alien} alt="" />
          <div className='border border-[#DCF2EEB5] rounded-tl-none p-4 rounded-xl w-[610px] h-[80px] bg-[#DCF2EEB5] flex items-center mt-8'>
            <p>Hi 👋 I'm MediBidge AI. I can help with medication questions, appointment prep, and general health information. What's on your mind today?</p>
          </div>
        </div>
          
        <div className='flex justify-end mt-10'>
          <p className='bg-[#28574E] border border-[#C2C6D44D] rounded-xl rounded-tr-none text-[#FFFFFF] w-[288px] h-[53px] flex items-center p-5 m-4'>I don’t feel well — can you help?</p>
        </div>

        <div className='border-t mt-65 border-[#C2C6D4]'>
          <div className="flex flex-wrap gap-[16px] p-3">
                <button className='border border-[#DDDDDD] bg-white text-black text-[13px] w-[118px] h-[32px] rounded-xl'>I don't feel well</button>
                <button className='border border-[#DDDDDD] bg-white text-black text-[13px] w-[159px] h-[30px] rounded-xl'>Medication information</button>
                <button className='border border-[#DDDDDD] bg-white text-black text-[13px] w-[138px] h-[30px] rounded-xl'>Appointment help</button>
                <button className='border border-[#DDDDDD] bg-white text-black text-[13px] w-[187px] h-[32px] rounded-xl'>Understand my lab result</button>
              </div>
              <div className='mt-5 relative pl-5'>
                <input type="text" placeholder='Type anything...' className='border border-[#C2C6D4] w-[1078px] h-[50px] bg-[#F1FFFD] text-[#6B7280] rounded-xl p-4' />
                <button className='absolute right-10 top-1/2 -translate-y-1/2 text-[#28574E] text-xl'><MdSend /></button>
              </div>
              <div className='flex gap-2 mt-3 items-center justify-center'>
                <img src={infoContainer} alt="" />
                <p className='text-[12px] text-[#757575]'>This AI provides informational guidance and does not replace professional medical diagnosis.</p>
              </div>

        </div>

      </div>

 </div>
)
}