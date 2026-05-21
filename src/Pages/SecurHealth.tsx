import React from 'react'
import RegisterLayout from '../Layout/RegisterLayout'
import SecureHealth from '../Assets/SecureHealth.svg'

export default function SecurHealth() {
  return (
    <RegisterLayout heading="Securing your healthcare journey." subHeading="We use multi-factor authentication to ensure your medical records and personal data remain private and protected at every step." image={SecureHealth}>
      <form>
        
      </form>
    </RegisterLayout>
  )
}