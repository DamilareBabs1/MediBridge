import React from 'react'
import AuthLayout from '../Layout/AuthLayout'
import Input from '../Component/Input'
import { Link } from 'react-router'
import Button from '../Component/Button'

export default function ForgetPassword() {
  return (
    <AuthLayout
      heading="Forgot your Password?" subHeading="We'll send a 6-digit verification code to your email to reset your password.">
      <form className='py-5 w-full'>
        <div className='flex flex-col gap-2'> 
          <label className='font-semibold text-[18px]' htmlFor="email">Email</label>

          <Input type="email" id="email" className='block my-2' placeholder='Enter your email' />
        </div>

        <Button content="Send Code" type="submit" className='mt-8' />

        <p className='pt-5 text-center'>Remember your password?<Link to="/login" className="text-[#28574E] font-medium ml-1">Log In</Link>
        </p>

      </form>
    </AuthLayout>
  )
}