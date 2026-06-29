import React from 'react'
import CancelX from "../assets/hugeicons_cancel-01.svg"
import DoctorOne from "../assets/Dr.AmeliaChan.svg"


export default function BookAppoint5({onClose, onBack, selectedDepartment, selectedDoctor, selectedDate, selectedTime, reason, onNext}) {
  return (
    <div>
        <section className='flex items-center border-b border-[#E7E4E4] justify-between w-[550px] h-[57px] p-15'> 
            <div className='flex flex-col gap-[9px]'>
              <h1 className='text-[#000000] w-[354px] h-[28px] text-[22px] font-semibold'>Book Appointment</h1>
              <p className='text-[#605E5E] text-[16px] w-[380px] h-[20px]'>Step 5 of 5</p>
            </div>
            <div>
                <button onClick={onClose}><img className='text-[#605E5E]' src={CancelX} alt="" /></button>
            </div>
        </section>
        
        <section className='m-5 border-b pb-8 border-[#E7E4E4]'>
          <div>
            <h1>Review Your Appointment</h1>
            <div className='flex items-center mt-5 gap-[18px]'>
              <img className='w-[50px] h-[50px]' src={DoctorOne} alt="" />
             <div className='flex flex-col'>
               <p>{selectedDoctor?.name}</p>
              <p>{selectedDepartment} Department</p>
             </div>
            </div>
          </div>
        </section>
        
        <section className='flex flex-col gap-[12px] mt-5'>
      <div className='flex justify-between'>
      <p className='text-[#605E5E]'>Department</p>
      <p>{selectedDepartment}</p>
    </div>

    <div className='flex justify-between'>
      <p className='text-[#605E5E]'>Date</p>
      <p>{new Date(selectedDate).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  })}</p>
    </div>

    <div className='flex justify-between'>
      <p className='text-[#605E5E]'>Time</p>
      <p>{selectedTime}</p>
    </div>

    <div className='flex justify-between'>
      <p className='text-[#605E5E]'>Reason</p>
      <p>{reason}</p>
    </div>
          <p></p>
        </section>

        <section>
          <div className='mt-5 gap-[14px]'>
            <h1>Record Sharing</h1>
            <div className='flex gap-[16px] items-center mt-4'>
              <input className='w-[20px] h-[20px] accent-[#28574E]' type="checkbox" /><p>Medical History</p>
            </div>
          </div>
        </section>

        <div className='mt-15 gap-[23px] flex p-5'>
          <button className='w-[225px] h-[54px] border border-[#D7D7D7] rounded-md bg-white text-[#757575]' onClick={onBack}>Back</button>
          <button onClick={onNext} className='w-[225px] h-[54px] border border-[#28574E] rounded-md bg-[#28574E] text-white'>Confirm Appointment</button>
        </div>
    </div>
  )
}