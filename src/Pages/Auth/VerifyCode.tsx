import React from 'react'
import AuthLayout from '../../Layout/AuthLayout'
import CheckImage from '../../assets/OtpCheckList.png'
import Input from '../../Component/Input'


export default function VerifyCode() {
  return (
      <AuthLayout>
        <div className='flex items-center justify-center mx-auto w-13.25 h-[52.18px] bg-[#DCF2EE] rounded-full'>
          <img src={CheckImage} alt="Check" />
        </div>

        <form className='text-center'>
            <label htmlFor="otp" className='text-[18px] font-semibold'>OTP Verification</label>
            <p>Enter the 6-digit code sent to [user@email.com]</p>

        <div className='flex gap-5 py-7 items-center justify-center'>
          {Array.from({ length: 6 }, (_, index) => {
            return (
              <Input key={index} type="text" id={`otp-${index}`} inputMode="numeric" pattern="\d*" maxLength={1} className='flex items-center justify-center text-center border-[1.5px] border-[#D9D9D9] w-[44px] h-[44px] text-[18px] font-semibold' />
            )
          })}
        </div>

        <p>Code expires in 15:00</p>

        <div className='flex justify-between items-center pt-8'>
          <button className='w-[177px] h-[54px] rounded-md text-[#28574E] border-[1.5px] border-[#28574E] cursor-pointer hover:bg-[#28574E] hover:text-white' type="submit">Resend Code</button>  
          <button className='w-[177px] h-[54px] rounded-md text-[#28574E] border-[1.5px] border-[#28574E] cursor-pointer hover:bg-[#28574E] hover:text-white' type="submit">Verify Code</button>
        </div>
        </form>
      </AuthLayout>
  )
}