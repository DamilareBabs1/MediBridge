import React from 'react'
import Cardiology from '../assets/Cardio.svg'
import Pediatrics from '../assets/Pedio.svg'
import MentalHealth from '../assets/Mentheal.svg'
import Dentistry from '../assets/Dentistry.svg'
import Orthopedics from '../assets/Othoped.svg'
import GeneralPractice from '../assets/GeneralPractice.svg'
import OBGYN from '../assets/Ob-Gyn.svg'
import Ophthalmology from '../assets/Ophtha.svg'
import { Link } from 'react-router'


export default function SpecialityCard() {
  return (
    <div>
         {/* SPECIALTY CARE SECTION */}

          <section className='w-full bg-[#28574E] text-[#FFFFFF] flex items-center justify-center'>
            <div className='flex flex-col items-center justify-center gap-4 pt-20 gap-[20px] pb-20'>
              <p className='text-[24px] bg-[#DCF2EE] text-[#28574E] w-[175px] flex text-[5px] items-center rounded-2xl justify-center'>Specialty care</p>
              <p className='text-[24px]'>10+ departments. one unified record.</p>
              <div className='grid grid-cols-4 gap-[24px] mb-8 mt-10'>
                <Link to="/cardiology"><div className='flex items-center gap-6 justify-center text-[#191C1D] flex-col bg-[#ECEEEE] rounded-xl w-[243px] h-[130.5px]'>
                <img src={Cardiology} alt="" />
                <p className='text-[15px]'>Cardiology</p>
              </div></Link>
              <div className='flex items-center gap-6 justify-center text-[#191C1D] flex-col bg-[#ECEEEE] rounded-xl w-[243px] h-[130.5px]'>
                <img src={Pediatrics} alt="" />
                <p className='text-[15px]'>Pediatrics</p>
              </div>
              <div className='flex items-center gap-6 justify-center text-[#191C1D] flex-col bg-[#ECEEEE] rounded-xl w-[243px] h-[130.5px]'>
                <img src={MentalHealth} alt="" />
                <p className='text-[15px]'>Mental Health</p>
              </div>
              <div className='flex items-center gap-6 justify-center text-[#191C1D] flex-col bg-[#ECEEEE] rounded-xl w-[243px] h-[130.5px]'>
                <img src={Dentistry} alt="" />
                <p className='text-[15px]'>Dentistry</p>
              </div>
              <div className='flex items-center gap-6 justify-center text-[#191C1D] flex-col bg-[#ECEEEE] rounded-xl w-[243px] h-[130.5px]'>
                <img src={Orthopedics} alt="" />
                <p className='text-[15px]'>Orthopedics</p>
              </div>
              <div className='flex items-center gap-6 justify-center text-[#191C1D] flex-col bg-[#ECEEEE] rounded-xl w-[243px] h-[130.5px]'>
                <img src={GeneralPractice} alt="" />
                <p className='text-[15px]'>General Practice</p>
              </div>
              <div className='flex items-center gap-6 justify-center text-[#191C1D] flex-col bg-[#ECEEEE] rounded-xl w-[243px] h-[130.5px]'>
                <img src={OBGYN} alt="" />
                <p className='text-[15px]'>OB-GYN</p>
              </div>
              <div className='flex items-center gap-6 justify-center text-[#191C1D] flex-col bg-[#ECEEEE] rounded-xl w-[243px] h-[130.5px]'>
                <img src={Ophthalmology} alt="" />
                <p className='text-[15px]'>Ophthalmology</p>
              </div>
             </div>
              <Link to="/DepartmentPage"><button className='bg-[#28574E] w-[281px] h-[54px] text-white rounded-md border-[#FFFFFF] text-[#FFFFFF] hover:bg-white hover:text-green-500 border'>Explore all Departments</button></Link>
            </div>
          </section>
    </div>
  )
}