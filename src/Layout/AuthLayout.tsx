import React from 'react'
import BackGround from '../assets/Background.png'
import Logo from '../assets/Frame 4.jpg'

type Props = {
  children: React.ReactNode
  heading: string
  subHeading: string
}

export default function AuthLayout({
  children,
  heading,
  subHeading,
}: Props) {
  return (
    <div
      className='min-h-screen w-screen flex items-center justify-center bg-cover bg-center bg-no-repeat px-10'
      style={{ backgroundImage: `url(${BackGround})` }}
    >
      <div className='flex items-center mx-auto justify-center'>

        <div className='bg-white w-full lg:w-[600px] gap-2 h-auto px-8 py-10 rounded-md text-start'>

          <img
            className='flex mx-auto pb-5'
            src={Logo}
            alt="Logo"
          />

          <h1 className='text-[28px] text-[#141313] font-medium pb-5 flex items-center justify-center'>
            {heading}
          </h1>

          <p className='text-[#757575] mb-6 text-center font-light'>
            {subHeading}
          </p>

          <div>
            {children}
          </div>

        </div>

      </div>
    </div>
  )
}