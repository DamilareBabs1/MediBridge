import React from 'react'
import AuthLayout from '../Layout/AuthLayout'
import Input from '../Component/Input'
import { Link } from 'react-router'
import Button from '../Component/Button'

export default function PassResSuc() {
  return (
    <AuthLayout
      heading="Password Reset Successful"
      subHeading="You can now log in with your new password."
    >
      <form className='py-5 w-full'>

        <Button
          content="Go to Login"
          type="submit"
          className='mt-8'
        />

      </form>
    </AuthLayout>
  )
}