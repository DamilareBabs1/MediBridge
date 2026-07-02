import React, { useState } from 'react'
import RegisterLayout from '../Layout/RegisterLayout'
import image from '../assets/Frame 2121455033.svg'
import Icon from '../assets/Icon.svg'
import { Link, useNavigate } from 'react-router-dom'
import ArrowIcon from '../assets/ArrowIcon.png'
import ButtonContent from '../Component/Button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Stepper from '../Component/Stepper'

const signupSchema = z.object({
  patientId: z.string().min(6, 'Patient ID must be at least 6 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits').max(15, 'Phone number must be at most 15 digits'),
})
type SignupValue = z.infer<typeof signupSchema>;

export default function SignUp() {

  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm<SignupValue>({
    resolver: zodResolver(signupSchema)
  })

  const onSubmit = (data: SignupValue) => {
    console.log("Form Submitted :", data)
    navigate('/VerifyCode')
  }

  
  return (
    <RegisterLayout
      subHeading="Manage appointments, view medical information, chat with your care team, and receive support in one place."
      heading="Access your care anytime"
      image={image}
      ul={
        <ul className='flex flex-col gap-[17px]'>
          <li className='flex items-center gap-[16px]'><img src={Icon} />Book and manage appointments</li> 
          <li className='flex items-center gap-[16px]'><img src={Icon} />Access visit history</li>
          <li className='flex items-center gap-[16px]'><img src={Icon} />Message your healthcare team</li>
          <li className='flex items-center gap-[16px]'><img src={Icon} />AI support assistance</li>
          <li className='flex items-center gap-[16px]'><img src={Icon} />Appointment reminders</li>
        </ul>
      }>
      <form onSubmit={handleSubmit(onSubmit)} className='w-[540px] border border-gray-100 h-[708px] p-5 rounded-2xl items-start mx-auto'> 

        <Stepper currentStep={1} />

        <h1 className='text-[28px] font-medium text-[#141313]'>Activate your account</h1>

        <p className='text-[#3E3B3B] text-[18px] mt-3'>Verify your hospital details to set up portal access.</p>

        <div className='flex flex-col gap-6 mt-6'>

          {/* Patient ID */}
          <label>Hospital Patient / User ID</label>
          <input placeholder='Enter Patient ID' className='border p-4 rounded-md' {...register("patientId")} />
          {errors.patientId && (
            <p className="text-red-500 text-sm">{errors.patientId.message}</p>
          )}

          {/* Email */}
          <label>Email Address</label>
          <input placeholder='Enter your email address' type="email" className='border p-4 rounded-md' {...register("email")} />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          {/* Phone */}
          <label>Registered Phone Number</label>
          <input placeholder='+234 000-0000' type="tel" className='border p-4 rounded-md' {...register("phone")} />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}

          {/* Submit */}
          <ButtonContent type="submit" className='bg-[#28574E]'>Verify Identity<img src={ArrowIcon} /></ButtonContent>
             <p className='text-center'>Already have an account?<Link to="/login" className='text-[#28574E] ml-1'>Log In</Link></p>

        </div>
      </form>
    </RegisterLayout>
  )
}