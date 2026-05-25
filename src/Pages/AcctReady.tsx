import React from 'react'
import AuthLayout from '../Layout/AuthLayout'
import Button from '../Component/Button'
import image from '../assets/AccountReady.png'

export default function ForgetPassword() {
  return (
    <AuthLayout
      heading="Your account is ready." subHeading="Account activation complete. You can now access appointments, records, and 24/7 medical support." image={image}>
      <form className='py-1 w-[500px]'>
        <div className='flex flex-col gap-2'> 

        <Button content="Go to Dashboard" type="submit" className='mt-8' />
        </div>
      </form>
    </AuthLayout>
  )
}