import React from 'react'
import LandingLayout from '../Layout/LandingLayout'
import Hero from './Hero'


type Props = {}

export default function HomePage({}: Props) {
  return (
    <LandingLayout>
      <Hero />
      

    </LandingLayout>
  )
}