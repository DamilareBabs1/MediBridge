import React from 'react'
import AIResponse from './AIResponse'
import LandingForAi from '../Layout/LandingForAi'


type Props = {}

export default function AIRouting({}: Props) {
  return (
    <LandingForAi>
      <AIResponse />
    </LandingForAi>
  )
}