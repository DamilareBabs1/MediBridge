import React from 'react'
// import Navbar from '../Pages/Navbar'
import Footer from '../Pages/Footer'
// import Navbar from '../Pages/Navbar'


type Props = {
  children: React.ReactNode,
}

export default function LandingLayout3({ children }: Props) {
  return (
    <div className='min-h-screen flex flex-col w-full'>

      <main className='flex-1'>
        {children}
      </main>

      <Footer />

    </div>
  )
}