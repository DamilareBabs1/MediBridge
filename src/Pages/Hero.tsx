import React from 'react'
import Navbar from '../Pages/Navbar'
import ImageIcon from '../assets/Patient&Doctor.svg'
import { Link } from 'react-router'

export default function Hero() {
  return (
    <div>
        <div className='w-full relative bg-[#28574E]'>
                          <Navbar />


   <section className='flex flex-col items-center  w-full  text-center gap-5 text-white h-[550px]'>
      <div className='flex flex-col w-[780px] h-[60px] gap-10'>
        <h1 className='text-[60px] text-[#FFFFFF]'>Healthcare That Connects You</h1>
        <p className='w-[666px] h-[50px] text-[#DAD8D8] pl-15'>Book appointments, talk with trusted doctors, receive support, and get instant AI health guidance in one calm experience.</p>
          <div className='flex items-center w-full h-[720px] justify-center gap-[30px]'>
                <button className='w-[236px] h-[54px] bg-[#FFFFFF] text-[#28574E] rounded-[8px] hover:bg-gray-200'>Book Appointment</button>   
                <Link to="/ai-support"><button className='w-[236px] h-[54px] bg-[#28574E] border border-[#FFFFFF] text-[#FFFFFF] rounded-[8px] hover:bg-gray-200'>Chat with AI Support</button></Link>
            </div>
      </div>

          
    </section>

      <img className='left-1/2 -translate-x-1/2 top-[404px] absolute w-[920px]' src={ImageIcon} alt=""/>
      
</div>
    </div>
  )
}