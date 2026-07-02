import React, { useEffect, useState } from 'react'
import AuthLayout from '../../Layout/AuthLayout'
import CheckImage from '../../assets/OtpCheckList.png'
import Input from '../../Component/Input'
import Stepper from '../../Component/Stepper'
import { useNavigate } from 'react-router'

export default function VerifyCode() {

  const navigate = useNavigate();

  const [timeLeft, setTimeLeft] = useState(15 * 60)
  
  const [otp, setOtp] = useState<string[]>(Array(6).fill(''))

  // FORMAT TIME
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`
  }

  // TIMER LOGIC
  useEffect(() => {
    if (timeLeft <= 0) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft])

  // OTP INPUT HANDLER
  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)
  }

  const handleSubmit = (e: React.FormEvent) =>{
    e.preventDefault();
    
    const code = otp.join("");

    console.log(code);

    navigate("/SecureYAccess")
  }

  return (
    <AuthLayout>
      <Stepper currentStep={2} />
      {/* ICON */}
      <div className='flex items-center justify-center mx-auto w-[52px] h-[52px] bg-[#DCF2EE] rounded-full'>
        <img src={CheckImage} alt="Check" />
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit} className='text-center mt-6'>
        <label className='text-[18px] font-semibold'>
          OTP Verification
        </label>

        <p className='text-sm text-gray-500 mt-2'>
          Enter the 6-digit code sent to your email
        </p>

        {/* OTP INPUTS */}
        <div className='flex gap-3 py-7 justify-center'>
          {otp.map((value, index) => (
            <Input
              key={index}
              type="text"
              value={value}
              onChange={(e: any) => handleChange(e.target.value, index)}
              maxLength={1}
              inputMode="numeric"
              className='w-[44px] h-[44px] text-center border border-[#D9D9D9] text-[18px] font-semibold'
            />
          ))}
        </div>

        {/* TIMER */}
        <p className='text-gray-600'>
          Code expires in {formatTime(timeLeft)}
        </p>

        {/* BUTTONS */}
        <div className='flex justify-between items-center pt-8'>
          <button
            type="button"
            onClick={() => setTimeLeft(15 * 60)}
            className='w-[177px] h-[54px] rounded-md text-[#28574E] border border-[#28574E] hover:bg-[#28574E] hover:text-white'
          >
            Resend Code
          </button>

          <button
            type="submit"
            className='w-[177px] h-[54px] rounded-md text-[#28574E] border border-[#28574E] hover:bg-[#28574E] hover:text-white'
          >
            Verify Code
          </button>
        </div>
      </form>
    </AuthLayout>
  )
}