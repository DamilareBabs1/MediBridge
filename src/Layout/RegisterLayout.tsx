import React from 'react'
import Logo from '../assets/MediBridgeNew.svg'
import Footer from '../Pages/Footer'

type Props = {
  children: React.ReactNode,
  heading?: string,
  subHeading?: string,
  ul?: React.ReactNode,
  image : string,
}


export default function RegisterLayout({children, heading, subHeading, ul, image}: Props) {
return (
  <div>
    <div  className='h-screen w-full flex items-center justify-between'>
      <div className='w-full flex'>
       
        {/* LEFT CARD */}

        <div className='authBg px-10 py-12 w-1/2 h-screen'>
               
               <div className="container mx-auto">
                 <img className="flex w-80" src={Logo} alt="" />
                <h1 className='text-[#28574E] text-[40px]'>{heading}</h1>
                <p className="text-[#3E3B3B] text-[18px]">{subHeading}</p>
                <div className=" flex pt-4 pb-8">
                    {ul}
                </div>
                <img src={image} alt="" />
               </div>
        </div>

               {/* RIGHT CARD */}

            <div className='w-1/2 mt-15 gap-20'>
                <div className='container mx-auto'>
                  {children}
                  
                  {/* <div>
                    <h2>{heading}</h2>
                    <p>{subHeading}</p>
                  </div> */}
                    
                </div>
            </div>

        
      </div>
      
    </div>
    <Footer />
  </div>
  
  )
}