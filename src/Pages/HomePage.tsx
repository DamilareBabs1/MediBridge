import React from 'react'
import LandingLayout from '../Layout/LandingLayout3'
import Hero from './Hero'
import MediAndAI from './MediAndAI'
import SpecialityCard from './SpecialityCard'
import PatientCard from './PatientCard'
import FAQSection from './FAQSection'
import InformationDesk from './InformationDesk'

type Props = {}

export default function HomePage({}: Props) {
  return (
    <LandingLayout>
      <Hero />
      <MediAndAI />
      <SpecialityCard />
      <PatientCard />
      <FAQSection />
      <InformationDesk />
    </LandingLayout>
  )
}