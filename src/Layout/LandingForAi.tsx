import React from 'react'
// import Navbar from '../Pages/Navbar'
import Footer from '../Pages/Footer'
// import DepartmentPage from '../Pages/DepartmentPage'


type Props = {
  children: React.ReactNode,
}

export default function LandingForAi({ children }: Props) {
  return (
    <div className='min-h-screen flex flex-col w-full'>

      <main className='flex-1'>
        {children}
      </main>

      <Footer />
    </div>
  )
}