import React from 'react'
import BackGround from '../assets/Background.png'
import Logo from "../assets/MediBridgeNew.svg"
import Footer from '../Pages/Footer'

type Props = {
  children: React.ReactNode
  heading?: string
  subHeading?: string
  image? : string,
}

export default function AuthLayout({
  children,
  heading,
  subHeading,
}: Props) {
  return (
    <div className="min-h-screen flex flex-col">

      <div className="flex-1 w-screen flex items-center justify-center bg-cover bg-center bg-no-repeat px-10" style={{ backgroundImage: `url(${BackGround})` }} >
        <div className="bg-white w-full lg:w-[600px] h-auto px-8 py-10 rounded-md text-start">
          <h1 className="text-[28px] text-[#141313] font-medium pb-5 flex items-center justify-center">
            {heading}
          </h1>

          <p className="text-[#757575] mb-6 text-center font-light">
            {subHeading}
          </p>

          {children}
        </div>
      </div>

      <Footer />

    </div>
  );
}