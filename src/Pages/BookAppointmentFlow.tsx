import React, { useState } from "react"
import BookAppointModal1 from "./BookAppointModal1"
import BookAppointModal2 from "./BookAppointModal2"

export default function BookAppointmentFlow({ onClose }) {
  const [step, setStep] = useState(1)
  const [selectedDepartment, setSelectedDepartment] = useState("")
  const [selectedDoctor, setSelectedDoctor] = useState("")

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

      <div className="bg-white rounded-xl">

        {/* STEP 1 */}
        {step === 1 && (
          <BookAppointModal1
            selectedDepartment={selectedDepartment}
            setSelectedDepartment={setSelectedDepartment}
            onNext={() => setStep(2)}
            onClose={onClose}
          />
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <BookAppointModal2
            selectedDepartment={selectedDepartment}
            selectedDoctor={selectedDoctor}
            setSelectedDoctor={setSelectedDoctor}
            onBack={() => setStep(1)}
            onNext={() => setStep(3)}
            onClose={onClose}
          />
        )}

      </div>
    </div>
  )
}