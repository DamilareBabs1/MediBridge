import React from 'react'
import RegisterLayout from '../Layout/RegisterLayout'
import SecureHealth from '../assets/SecureHealth.svg'
import Input from '../Component/Input'
import Button from '../Component/Button'
import { Link } from 'react-router'

export default function SecurHealth() {
  return (
    <RegisterLayout heading="Securing your healthcare journey." subHeading="We use multi-factor authentication to ensure your medical records and personal data remain private and protected at every step." image={SecureHealth}>
      
      <form className='w-[420px] border border-white gap-[48px] mt-10 rounded-2xl p-8 shadow-sm mx-auto'>
        <div className='flex flex-col gap-4 items-start justify-start'>
          <h1 className='text-[#141313] text-[28px]'>Verify your Account</h1>
        <p className='text-[#757575] text-[18px]'>We'll send a 6-digit verification code to your email to reset your password</p>
        </div>
        <div className='flex gap-5 py-7 items-center justify-center'>
          {Array.from({ length: 6 }, (_, index) => {
            return (
              <Input key={index} type="text" id={`otp-${index}`} inputMode="numeric" pattern="\d*" maxLength={1} className='flex items-center justify-center text-center border-[1.5px] border-[#D9D9D9] w-[44px] h-[44px] text-[18px] font-semibold' />
            )
          })}
        </div>

        <p className='flex text-[#605D5D] text-[14px] items-center justify-center'>Code expires in 5:00</p>

        <div className='gap-15 flex flex-col items-center justify-center mt-8'>
           <Button content="Verify Code " type='submit' className='mt-8 hover:bg-[#F8F7F7]' />

           <p className='text-[#757575] text-center'>Didn't receive the code?<Link className='text-[#28574E] font-medium' to='#'> Resend code</Link></p>


        </div>

      
      </form>
    </RegisterLayout>
  )
}