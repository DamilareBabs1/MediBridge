import React from 'react'
// import AuthLayout from '../Layout/AuthLayout'
// import Input from '../Component/Input'
// import { Link } from 'react-router'
// import Button from '../Component/Button'
import ImageIcon from '../assets/Patient&Doctor.svg'
import AuthLayout from '../Layout/AuthLayout'


type Props = {}

export default function Login({}: Props) {
  return (
   <AuthLayout>
    <form>
         <section className='flex flex-col items-center bg-[#28574E] w-full mt-6 p-12 text-center text-white'>
      <div>
        <h1>Healthcare That Connects You</h1>
        <p>Book appointments, talk with trusted doctors, receive support, and get instant AI health guidance in one calm experience.</p>
      </div>

            <div className='flex items-center gap-6'>
                <button className='w-[519px] h-[54px] bg-[#FFFFFF] text-[#28574E] rounded-[8px] hover:bg-gray-200'>Book Appointment</button>   
                <button className='w-[519px] h-[54px] bg-[#FFFFFF] text-[#28574E] rounded-[8px] hover:bg-gray-200'>Chat with AI Support</button>
            </div>

            <div>
              image={ImageIcon}
            </div>

    </section>

    </form>


   </AuthLayout>
  )
}