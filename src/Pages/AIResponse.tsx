import React from 'react'
import { FiSearch } from "react-icons/fi";
import DepartmentBg from '../assets/AIBACKgroundImg.jpg'
import Alien from '../assets/Alienbuild.svg'
import Navbar from '../Pages/Navbar'
import { MdSend } from "react-icons/md";
import infoContainer from '../assets/infoContainer.svg'

export default function AIResponse() {
  return (
  <div className='w-full h-full'>

      {/* HERO SECTION */}

      <section className='relative w-full min-h-[48vh] bg-cover bg-center bg-[#28574Ecc] text-white'
        style={{ backgroundImage: `url(${DepartmentBg})` }}>

        {/* DARK OVERLAY */}

        <div className="absolute inset-0 bg-[#28574ECC]"></div>

        {/* NAVBAR */}

        <div className='relative z-20'><Navbar /></div>

        {/* CONTENT */}

        <div className='relative z-10 flex flex-col items-center justify-center pt-10'>

          <div className='flex flex-col w-[780px] text-center'><h1 className='text-[60px] text-[#FFFFFF]'>Talk to MediBridge AI Support</h1>
            <p className='text-[#DAD8D8] mt-2 w-[620px] text-center'>Describe your symptoms or ask any hospital-related question. The AI will guide you step-by-step.</p>
          </div>

        </div>

      </section>
      
          {/* {AI CENTER} */}

      <section className='w-full flex flex-col items-center justify-center gap-[76px]'>
         <div className='flex flex-col items-center justify-center gap-[20px]'>
            <p className='border border-[#DCF2EE] bg-[#DCF2EE] text-[16px] text-[#28574E] rounded-xl text-center w-[120px] h-[34px] pt-1 mt-18'>AI Support</p>
            <h1 className='text-[#141313] text-[34px] w-[500px] h-[30px] text-center'>How can I help today?</h1>
            <p className='text-[#757575] text-[16px] w-[400px] h-[50px] text-center'>No login required. Conversations are private and not stored to your record.</p>
         </div>
      </section>

      <section className="flex justify-center mt-10 mb-10">
  <div className="w-[702px] h-[578px] border border-[#DDDDDD] rounded-xl p-5">

    <div className="flex gap-2">
      <img className="w-[30px] h-[30px]" src={Alien} alt="" />

      <div className="border pt-3 pb-3 pl-3 mt-2 border-[#DCF2EEB5] rounded-tl-none bg-[#DCF2EEB5] rounded-xl w-[611px]">
        <p>Hi 👋 I'm MediBridge AI. I can help with medication questions, appointment prep, and general health information. What's on your mind today?</p>
      </div>
    </div>

    <hr className="my-6 mt-[300px] border-[#C2C6D4] w-full" />

    <div className="flex flex-wrap gap-[16px]">
      <button className='border border-[#DDDDDD] bg-white text-black text-[13px] w-[118px] h-[32px] rounded-xl'>I don't feel well</button>
      <button className='border border-[#DDDDDD] bg-white text-black text-[13px] w-[159px] h-[30px] rounded-xl'>Medication information</button>
      <button className='border border-[#DDDDDD] bg-white text-black text-[13px] w-[138px] h-[30px] rounded-xl'>Appointment help</button>
      <button className='border border-[#DDDDDD] bg-white text-black text-[13px] w-[187px] h-[32px] rounded-xl'>Understand my lab result</button>
    </div>
    <div className='mt-5 relative'>
      <input type="text" placeholder='Type anything...' className='border border-[#C2C6D4] w-[654px] h-[50px] bg-[#F1FFFD] text-[#6B7280] rounded-xl p-4' />
      <button className='absolute right-4 top-1/2 -translate-y-1/2 text-[#28574E] text-xl'><MdSend /></button>
    </div>
    <div className='flex gap-2 mt-3 items-center justify-center'>
      <img src={infoContainer} alt="" />
      <p className='text-[12px] text-[#757575]'>This AI provides informational guidance and does not replace professional medical diagnosis.</p>
    </div>
  </div>
</section>
    </div>
  )
}