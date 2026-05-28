import React from 'react'
import AuthLayout from '../Layout/AuthLayout'
import Input from '../Component/Input'
import { Link } from 'react-router'
import Button from '../Component/Button'


type Props = {}

export default function Login({}: Props) {
  return (
   <AuthLayout heading="Welcome Back!" subHeading="Access your healthcare records, appointments, and care team.">
    <form className='py-5 w-full'>
        <label className='font-semibold text-[18px] pb-2' htmlFor="userId">Hospital Patient ID/ User ID </label>
        <Input type="text" id="userId" className='block my-2' placeholder='Enter your patient ID' />

        <label className='font-semibold text-[18px] pb-2' htmlFor="password">Password</label>
        <Input type="password" id="password" className='block my-2' placeholder='Enter your password' />

        <Link to="/signup"><span className='text-[#28574E] text-sm font-light block my-2'>Forget Password?</span></Link>

        <Button content="Sign In " type='submit' className='mt-8' />

        <p className='pt-5 text-center'>First time here? <Link to="/signup"><span className="text-[#28574E] font-medium">Create an account</span></Link></p>

    </form>
   </AuthLayout>
  )
}