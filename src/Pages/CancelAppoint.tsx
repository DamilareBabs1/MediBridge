import React from 'react'
import CalenarX from '../assets/calendar-xDASH.svg'

export default function CancelAppoint() {
  return (
    <div className='w-full h-full'>
        < div className='flex flex-col items-center justify-center gap-[10px] mt-20'>
            
            <div className='bg-[#EBEAEA] border border-[#EBEAEA] items-center p-2 rounded-md w-[57px] h-[50px]'><img className='w-[35px] h-[35px] ' src={CalenarX} alt="" /></div>
            <h1 className='text-[#000000] text-[17px] mt-3'>No cancelled appointments</h1>
            <p className='text-[#666666] text-[15px]'>Any cancelled appointments will show here</p>
        </div>
    </div>
  )
}