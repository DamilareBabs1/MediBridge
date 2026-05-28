import React from 'react'
import { FiSearch } from "react-icons/fi";
import DepartmentBg from '../assets/AIBACKgroundImg.jpg'
import AiChat from '../assets/AIFIRSTMessage.svg'
import Navbar from '../Pages/Navbar'

export default function AIResponse() {
  return (
  <div className='w-full h-full'>

      {/* HERO SECTION */}

      <section className='relative w-[1440px] min-h-[48vh] bg-cover bg-center bg-[#28574Ecc] text-white'
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
         <div className='w-[702px] h-[579px]'>
            <img src={AiChat} alt="" />
         </div>
      </section>
    </div>
  )
}