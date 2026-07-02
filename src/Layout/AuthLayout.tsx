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
          <div className='flex justify-center pb-5'>
            <img src={Logo} alt="" />
          </div>
          <h1 className="text-[28px] w-[374px] h-[35px] text-[#141313] font-bold  mt-5 pb-5 flex text-start ">
            {heading}
          </h1>

          <p className="text-[#757575] text-[18px] mt-5 mb-6 w-[374px] h-[46px] text-start font-light">
            {subHeading}
          </p>

          {children}
        </div>
      </div>

      <Footer />

    </div>
  );
}