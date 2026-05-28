import React from 'react'
import DepartmentPage from './DepartmentPage'
import LandingLayout3 from '../Layout/LandingLayout3'


type Props = {}

export default function DepartmentRoute({}: Props) {
  return (
    <LandingLayout3>
      <DepartmentPage />
    </LandingLayout3>
  )
}