import React from 'react'
import AuthLayout from '../Layout/AuthLayout'
import Input from '../Component/Input'
import { Link } from 'react-router'
import Button from '../Component/Button'
import { MdRemoveRedEye } from "react-icons/md";



type Props = {}

export default function PassReset({}: Props) {
  return (
    <AuthLayout
      heading="Reset your Password?"
      subHeading="You're just one step away from accessing your account."
    >
      <form className='py-5 w-full'>

        <div className='flex flex-col gap-2'>

          <label
            className='font-semibold text-[18px]'
            htmlFor="NewPassword"
          >
            New Password
          </label>

          <Input
            type="password"
            id="NewPassword"
            className='block my-2'
            placeholder='Enter your new password'
          /><span className="absolute right-3 top-3 cursor-pointer"><MdRemoveRedEye /></span>
          <p>Minimum 8 characters, must include letters and numbers</p>

          <label
            className='font-semibold text-[18px]'
            htmlFor="ConfirmNewPassword"
          >
            Confirm Password
          </label>

          <Input
            type="password"
            id="ConfirmNewPassword"
            className='block my-2'
            placeholder='Confirm password'
          /><span className="absolute right-3 top-3 cursor-pointer"><MdRemoveRedEye /> </span>
           <p>Must match the above field</p>

        </div>

        <Button
          content="Update Password"
          type="submit"
          className='mt-8'
        />

        <p className='pt-5 text-center'>

          {/* <Link
            to="/login"
            className="text-[#28574E] font-medium ml-1"
          >
            Log In
          </Link> */}

        </p>

      </form>
    </AuthLayout>
  )
}