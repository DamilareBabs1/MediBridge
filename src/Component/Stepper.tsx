import React from 'react'

interface StepperProps {
    currentStep: number;
}

export default function Stepper({ currentStep }: StepperProps) {
    const steps = ["Identity", "OTP", "Set Up"];

  return (
   <div className="flex items-center gap-5 justify-center mb-8">
      {steps.map((step, index) => (
        <React.Fragment key={step}>
          {/* Circle */}
          <div className="flex gap-3 items-center">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center font-medium
              ${
                currentStep > index + 1
                  ? "bg-[#28574E] text-white"
                  : currentStep === index + 1
                  ? "bg-[#28574E] text-white"
                  : "bg-gray-200 text-gray-500"
              }`}
            >
              {currentStep > index + 1 ? "✓" : index + 1}
            </div>

            <span className="text-sm mt-">{step}</span>
          </div>

          {/* Line */}
          {index < steps.length - 1 && (
            <div
              className={`w-[48px] h-[2px]
              ${
                currentStep > index + 1
                  ? "bg-[#28574E]"
                  : "bg-gray-300"
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}