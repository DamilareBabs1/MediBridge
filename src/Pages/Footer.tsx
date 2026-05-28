import React from 'react'
import Logo from '../assets/MedibridgeIcon.svg'


export default function Footer() {
  return (
    <div className='bg-[#E2DFDF] mt-35 p-8 border border-[#E2DFDF] h-[72px] flex gap-6 items-center justify-between flex-row w-full'>
      <div>
        <img src={Logo} alt="" />

      </div>

      <div className='flex flex-row items-center justfiy-center gap-5 '>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
        <p>Support Center</p>
        <p>Contact</p>
      </div>

      <div>
        <p>© 2026 MediBridge Healthcare. Calm & Trusted Care.</p>
      </div>
    </div>
  )
}