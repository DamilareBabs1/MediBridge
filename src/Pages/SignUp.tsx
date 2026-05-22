import React from 'react'
import RegisterLayout from '../Layout/RegisterLayout'
import image from '../assets/Frame 2121455033.svg'
import Icon from '../assets/Icon.svg'
import { Link } from 'react-router'
import ArrowIcon from '../assets/ArrowIcon.png'
import ButtonContent from '../Component/Button'

export default function SignUp() {
  return (
    <RegisterLayout subHeading="Manage appointments, view medical information, chat with your care team, and recieve support in one place." heading="Access your care anytime" image={image}
        ul={<ul>
        <li className='flex items-center gap-[16px]'><img src={Icon} alt="Logo" />Book and manage appointments</li>
        <li className='flex items-center gap-[16px]'><img src={Icon} alt="Logo" />Access visit history</li>
        <li className='flex items-center gap-[16px]'><img src={Icon} alt="Logo" />Message your healthcare team</li>
        <li className='flex items-center gap-[16px]'><img src={Icon} alt="Logo" />AI support assistance</li>
        <li className='flex items-center gap-[16px]'><img src={Icon} alt="Logo" />Appointment reminders</li>
      </ul>}>
     <form className='w-[420px] border border-white gap-[32px] rounded-2xl p-8 shadow-sm mx-auto'>
      <h1 className='text-[28px] text-[#141313] font-medium pb-5 flex w-[394px] h-[35px]'>
        Activate your account
      </h1>
      <p className='text-[#3E3B3B] text-[18px]'>Verify your hospital details to set up portal access.</p>
        <div className='flex flex-col gap-4 mt-4'>
          <label htmlFor="Hospital Patient ID / User ID">Hospital Patient / User ID</label>
          <input type="text" id="Hospital Patient ID / User ID" placeholder="Enter your Patient ID" className='border border-gray-300 rounded-md p-2' />

          <label htmlFor="Email Address">Email Address</label>
          <input type="email" id="Email Address" placeholder="Enter your email address" className='border border-gray-300 rounded-md p-2' />

          <label htmlFor="Phone Number">Registered Phone Number</label>
          <input type="tel" id="Phone Number" placeholder="Enter your phone number" className='border border-gray-300 rounded-md p-2' />

         <ButtonContent type="submit" className='bg-[#28574E]'>Verify Identity<img src={ArrowIcon} alt="Arrow Icon" /></ButtonContent>

         <p className='pl-12'>Already have an account? <Link to="/login" className="text-[#28574E] font-medium ml-1">Log In</Link></p>

        </div>

        <div className='mt-8'>
        <hr />
        <div className='flex items-center justify-center mt-6 '>
          <p>Need help with your patient ID? <a href="#">Contact Support</a></p>
        </div>
        </div>

        

     </form>
    </RegisterLayout>
  )
}