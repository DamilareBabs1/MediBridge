import React from 'react'
import { Link } from 'react-router'
import image from '../assets/MediBridgeNew.svg'




export default function Navbar() {
  return (
    <nav className='w-full bg-[#28574E] h-[20vh] flex flex-col items-center justify-center z-999'>
        <div className='flex w-[80%] items-center justify-between py-4 px-6 bg-white text-[#3E3B3B] rounded-[59px] shadow-sm'>
            <div className='text-2xl font-bold text-[#28574E] flex items-center gap-2'>
                <img src={image} alt="" />
            </div>
            <div className='flex gap-6'>
                <Link to="/" className='hover:text-[#28574E]'>Home</Link>
                <Link to="/department" className='hover:text-[#28574E]'>Department</Link>
                <Link to="/ai-support" className='hover:text-[#28574E]'>AI Support</Link>
                <Link to="/about" className='hover:text-[#28574E]'>About Us</Link>
            </div>

            <div className='flex items-center gap-6'>
                <Link to="/login" className='text-[#28574E] '>Login</Link>
                <button className='w-[176px] h-[54px] bg-[#28574E] text-white rounded-md hover:bg-gray-200'>Activate Account</button>   
            </div>

        </div>

        <div>
            


        </div>
    </nav>
  )
}