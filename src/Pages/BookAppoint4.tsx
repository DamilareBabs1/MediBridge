import React from 'react'
import CancelX from "../assets/hugeicons_cancel-01.svg"



export default function BookAppoint4({reason, setReason, onBack, onNext, onClose}) {
  return (
    <div>
        <section className='flex items-center border-b border-[#E7E4E4] justify-between px-6 py-4'> 
                <div className='flex flex-col gap-1'>
                <h1 className='text-[#000000] text-[22px] font-semibold'>Book Appointment</h1>
                <p className='text-[#605E5E] text-[16px]'>Step 4 of 5</p>
                </div>
                <div>
                    <button onClick={onClose}><img className='p-2 hover:bg-gray-100 rounded-full transition-colors' src={CancelX} alt="" /></button>
                </div>
        </section>

        <div>
            <div className='px-6 '>
                <h1 className='text-[18px] mt-4 '>
                    Reason for Visit <span className='text-[#E60E0E]'>*</span>
                </h1>

                <textarea value={reason} onChange={(e) => setReason(e.target.value)} className='w-[492px] rounded-[8px] mt-4 h-[128px] border-1 border-[#D7D7D7] p-3 resize-none focus:outline-none'  placeholder='Briefly describe your symptoms or reason for this appointment...' />
            </div>
        </div>

        <div className='flex gap-[23px] items-center mt-8 px-6  py-4'>
                    <button onClick={onBack} className="h-[54px] w-[225px] rounded-md border border-[#D7D7D7] text-[#757575]">
                    Back
                    </button>

                    <button onClick={onNext}
  disabled={!reason.trim()}
  className={`h-[54px] w-[225px] text-white rounded-md

${
  reason.trim()
    ? "bg-[#28574E]"
    : "bg-[#D9D9D9] cursor-not-allowed"
}
`}>
                    Next
                    </button>
                </div>

    </div>
  )
}