import React from 'react'
import { FiSearch } from "react-icons/fi";
import DepartmentBg from '../assets/NewBackgoundforLandPage2.jpg'
import { AllSingleCard } from './Auth/AllSingleCard';
import SingleCard from '../Pages/Auth/SingleCard'
import { FiChevronLeft } from 'react-icons/fi'
import { FiChevronRight } from 'react-icons/fi'
import { FiChevronsLeft } from 'react-icons/fi'
import { FiChevronsRight } from 'react-icons/fi'
import Navbar from '../Pages/Navbar'

export default function DepartmentPage() {
  return (
  <div className='w-full h-full'>

      {/* HERO SECTION */}

      <section className='relative w-full min-h-[80vh] bg-cover bg-center bg-[#28574Ecc] text-white'
        style={{ backgroundImage: `url(${DepartmentBg})` }}>

        {/* DARK OVERLAY */}

        <div className="absolute inset-0 bg-[#28574ECC]"></div>

        {/* NAVBAR */}

        <div className='relative z-20'><Navbar /></div>

        {/* CONTENT */}

        <div className='relative z-10 flex flex-col items-center justify-center pt-10'>

          <div className='flex flex-col w-[780px] text-center'><h1 className='text-[60px] text-[#FFFFFF]'>Find The Right Department For Your Care</h1>
            <p className='text-[#DAD8D8] mt-6'>Explore hospital specialties, available services, and care teams.</p>
          </div>

          {/* SEARCH BAR */}

          <div className='flex items-center justify-center mt-12 gap-[30px]'>

            <div className='relative'><FiSearch className='absolute left-4 top-1/2 -translate-y-1/2 text-[#757575] text-[20px]' />
              <input type="text" placeholder='Search for departments or conditions' className='w-[330px] h-[45px] pl-12 rounded-xl outline-none text-black bg-white'/>
            </div>

              <button className='w-[150px] h-[45px] bg-white text-[#28574E] rounded-[8px] hover:bg-gray-200'>Search</button>

          </div>

        </div>

      </section>
      
          {/* {SERVICES CENTER} */}

      <section className='w-full'>
        <div className='flex w-full flex-row items-center justify-evenly mt-10'>
            <p className='bg-[#28574E] text-center h-[28px] border text-[#FFFFFF] border-[#28574E] rounded-4xl flex items-center justify-center px-8 py-4'>All</p>
            <p className='bg-[#E5E5E5] text-center h-[38px] p-2 border border-[#E5E5E5] rounded-4xl flex items-center justify-center px-8 py-4'>Medical</p>
            <p className='bg-[#E5E5E5] text-center h-[38px] p-2 border border-[#E5E5E5] rounded-2xl flex items-center justify-center px-8 py-4'>Surgical</p>
            <p className='bg-[#E5E5E5] text-center h-[28px] p-2 border border-[#E5E5E5] rounded-2xl flex items-center justify-center px-8 py-4'>Diagnotics</p>
            <p className='bg-[#E5E5E5] text-center h-[28px] p-2 border border-[#E5E5E5] rounded-2xl flex items-center justify-center px-8 py-4'>Mental Health</p>
            <p className='bg-[#E5E5E5] text-center h-[28px] p-2 border border-[#E5E5E5] rounded-2xl flex items-center justify-center px-8 py-4'>Emergency</p>
            <p className='bg-[#E5E5E5] text-center h-[28px] p-2 border border-[#E5E5E5] rounded-2xl flex items-center justify-center px-8 py-4'>Women & Children</p>
        </div>
      </section>
         
        {/* {SERVICES OFFERED} */}

      <section>
        <div className='grid grid-cols-4 w-[1241px] gap-[50px] mb-8 mt-10 pl-10'>
      {AllSingleCard.map((item) => (<SingleCard key={item.id} image={item.image} specialists={item.specialists} title={item.title} description={item.description} link={item.link} />
       ))}
        </div>
      </section>

      {/* {PAGES ITEMIZATION} */}

    <section className='flex items-center justify-between w-full max-w-[1241px] mx-auto mt-10 px-4'>
        
      <div>
          <p className='text-[14px] text-[#838383]'>Showing 8 of 20</p>
      </div>
     
     <div className="flex items-center gap-2">
       <p className="text-[#202020] text-[14px]">Page 1 of 10</p>

       <button className="w-[32px] h-[32px] border border-[#E8E8E8] rounded-md flex items-center justify-center text-sm text-[#202020]"><FiChevronsLeft /></button>

       <button className="w-[32px] h-[32px] border border-[#E8E8E8] gap-1 rounded-md flex items-center justify-center"><FiChevronLeft /></button>

       <button className="w-[32px] h-[32px] border border-[#E8E8E8] gap-1 rounded-md flex items-center justify-center"><FiChevronRight /></button>

       <button className="w-[32px] h-[32px] border border-[#E8E8E8] gap-1 rounded-md flex items-center justify-center"><FiChevronsRight /></button>

      </div>
      </section>

      {/* {INFORMATION DECK} */}

    <section className='bg-white flex items-center justify-center w-full mt-20 pr-22'>
        <div className='flex gap-[20px] flex-col bg-[#28574E] mx-auto w-6xl h-[291px] rounded-3xl items-center justify-center'>
          <h1 className='text-[39px] text-[#FFFFFF]'>Stay informed on your health</h1>
           <p className='text-[#DAD8D8] w-3xl'>Get the latest health tips, medical news, and app updates delivered to your inbox once a week.</p>

       <div className='flex mt-3 gap-4'>
        <input className='pl-3 border-[#FFFFFF] border w-[322px] h-[54px] shadow-[#BFC8CA] bg-[#28574E] text-[14px] text-[#DAD8D8] rounded-xl' type="email" placeholder='Enter your email address' />
        <button className='bg-[#FFFFFF] w-[174px] h-[54px] text-[#28574E] text-[14px] rounded-xl border hover:bg-[#28574E] hover:text-white'>Subscribe</button>
      </div>
      </div>
    </section>
    </div>
  )
}