import React from 'react'
import AuthLayout from '../Layout/AuthLayout'
import Input from '../Component/Input'
import { Link, useNavigate } from 'react-router'
import Button from '../Component/Button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const ForgetPasswordSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
})
type ForgetPasswordValue = z.infer<typeof ForgetPasswordSchema>;


export default function ForgetPassword() {
  
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm<ForgetPasswordValue>({
    resolver: zodResolver(ForgetPasswordSchema)
  })

  const onSubmit = (data: ForgetPasswordValue) => {
    console.log("Form Submitted :", data)
    navigate('/login')
  }

  return (
    <AuthLayout
      heading="Forgot your Password?" subHeading="We'll send a 6-digit verification code to your email to reset your password.">
      <form className='py-5 w-full' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-2'> 
          <label className='font-semibold text-[18px]' htmlFor="email">Email</label>

          <Input type="email" id="email" className='block my-2' placeholder='Enter your email' {...register("email")} />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <Button content="Send Code" type="submit" className='mt-8' />

        <p className='pt-5 text-center'>Remember your password?<Link to="/login" className="text-[#28574E] font-medium ml-1">Log In</Link>
        </p>

      </form>
    </AuthLayout>
  )
}