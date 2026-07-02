import React, { useState } from 'react'
import AuthLayout from '../Layout/AuthLayout'
import Input from '../Component/Input'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../Component/Button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const loginSchema = z.object({
  patientId: z.string().min(6, 'Patient ID must be at least 6 characters'),
  password: z.string().min(6, 'Password must be at least 6 characters').max(12, 'Password must be at most 12 characters'),
})
type LoginValue = z.infer<typeof loginSchema>;


export default function Login() {

  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm<LoginValue>({
    resolver: zodResolver(loginSchema)
  })

  const onSubmit = (data: LoginValue) => {
    console.log("Form Submitted :", data)
    navigate('/DashBoardLand')
  }

  return (
    <AuthLayout
      heading="Welcome Back!"
      subHeading="Access your healthcare records, appointments, and care team."
    >
      <form className='py-5 w-full' onSubmit={handleSubmit(onSubmit)}>

        {/* Patient ID */}
        <label>Hospital Patient ID / User ID</label>

        <Input {...register("patientId")} type="text"  className="" placeholder="Enter your patient ID" />

        {errors.patientId && (
          <p className="text-red-500 text-sm">{errors.patientId.message}</p>
        )}

        {/* Password */}
        <label className='mt-6'>Password</label>

        <Input {...register("password")} type="password" className="" placeholder="Enter your password" />

        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}

        <Link to="/ForgetPassword">
          <span className='text-[#28574E] text-sm block my-2'>
            Forget Password?
          </span>
        </Link>

        <Button type="submit" content="Sign In" className='mt-8' />

        <p className='pt-5 text-center'>
          First time here?
          <Link to="/signup">
            <span className="text-[#28574E] font-medium ml-1">
              Create an account
            </span>
          </Link>
        </p>

      </form>
    </AuthLayout>
  )
}