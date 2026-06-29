import React from 'react'
import CancelX from "../assets/hugeicons_cancel-01.svg"



export default function BookAppoint3({ selectedDoctor, selectedDate, setSelectedDate, selectedTime, setSelectedTime, onBack, onClose, onNext}) {

  const timeSlots = selectedDoctor?.schedule || [];
  return (

    <div className='m-5'>
         <section className='flex items-center border-b border-[#E7E4E4] justify-between w-[550px] h-[57px] p-15'> 
            <div className='flex flex-col gap-[9px]'>
              <h1 className='text-[#000000] w-[354px] h-[28px] text-[22px] font-semibold'>Book Appointment</h1>
              <p className='text-[#605E5E] text-[16px] w-[380px] h-[20px]'>Step 3 of 5</p>
            </div>
            <div>
                <button onClick={onClose}><img className='text-[#605E5E]' src={CancelX} alt="" /></button>
            </div>
        </section>

        <section>
            <div className='gap-[11px] m-6'>    
                <h1>Select a Date</h1>
                <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} className='mt-3 rounded-md border border-[#D7D7D7] w-[472px] h-[52px] p-5' />
            </div>
        </section>

        <section>
            <div className='gap-[11px] m-6'>
                <h1>Time Slot</h1>
                <div className='grid grid-cols-3 gap-[9px] w-[473px] mt-3'>
{timeSlots.length === 0 ? (
    <p className="text-red-500 col-span-3">
      No schedule available for this doctor.
    </p>
  ) : (
    timeSlots.map((slot) => (
      <button
        key={slot.time}
        disabled={!slot.available}
        onClick={() => setSelectedTime(slot.time)}
        className={`w-[152px] h-[62px] rounded-md flex flex-col items-center justify-center
          ${
            selectedTime === slot.time
              ? "bg-white text-[#141313] border border-[#28574E]"
              : slot.available
              ? "border border-[#DDDDDD] bg-white text-[#141313]"
              : "bg-[#F3F3F3] text-[#A0A0A0] cursor-not-allowed"
          }
        `}
      >
        {slot.time}

        {!slot.available && (
          <span className="text-red-500 text-xs mt-1">
            Unavailable
          </span>
        )}
      </button>
    ))
  )}
                </div>
            </div>
        </section>

        <section>
            <div className='flex gap-[23px] items-center mt-5 p-7'>
        <button onClick={onBack} className="h-[54px] w-[225px] rounded-md border border-[#D7D7D7] text-[#757575]">Back</button>

        <button onClick={onNext}
  disabled={!selectedDate || !selectedTime}
  className={`h-[54px] w-[225px] text-white rounded-md

${
  selectedDate && selectedTime
    ? "bg-[#28574E]"
    : "bg-[#D9D9D9] cursor-not-allowed"
}
`}>Next</button>
      </div>
        </section>
    </div>
  )
}