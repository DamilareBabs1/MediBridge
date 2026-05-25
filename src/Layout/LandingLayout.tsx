import React from 'react'
import Navbar from '../Pages/Navbar'
import Footer from '../Pages/Footer'


type Props = {
  children: React.ReactNode,
}

export default function LandingLayout({children}: Props) {
  return (
    <div>
        <Navbar />
      {children}
      <Footer />
    </div>
  )
}