import React from 'react'
import Logo from '../assets/newFrame.png'

type Props = {
  children: React.ReactNode,
  heading?: string,
  subHeading?: string,
  ul?: React.ReactNode,
  image : string,
}


export default function RegisterLayout({children, heading, subHeading, ul, image}: Props) {
return (
    <div  className='h-screen w-full flex justify-between'>
      <div className='w-full'>
        <div className='authBg px-10 py-5 w-1/2 h-screen'>
               
               <div className="container mx-auto">
                 <img className="flex w-80" src={Logo} alt="" />
                <h1 className='text-[#28574E] text-[40px]'>{heading}</h1>
                <p className="text-[#3E3B3B] text-[18px]">{subHeading}</p>
                <div className=" flex pt-4 pb-8">
                    {ul}
                </div>
                <img src={image} alt="" />
               </div>

            <div className='w-1/2'>
                <div className='container mx-auto'>
                    {children}
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}