import React from 'react'
import AppointComft from "../assets/AppointComf.svg"
import CancelX from "../assets/hugeicons_cancel-01.svg"

export default function AppointComf({ onClose, onViewAppointment, selectedDoctor, selectedDate, selectedTime }) {
  return (
    <div className="p-6">
        
        <section className="flex justify-end">
            <button onClick={onClose}>
                <img src={CancelX} alt="Close" />
            </button>
        </section>
        
        <section className="flex flex-col items-center text-center mt-4">
            <div className='flex border border-[#EAF9E8] rounded-full items-center justify-center bg-[#EAF9E8] w-[50px] h-[50px]'>
                <img className='w-[28px] h-[28px]' src={AppointComft} alt="" /></div>
                <h1 className="text-[24px] font-semibold mt-6">Appointment Confirmed</h1>
                
                <p className="text-[#605E5E] mt-2 w-[510px]">We've booked you with {selectedDoctor?.name} on{" "}
                    {new Date(selectedDate).toLocaleDateString("en-US", {weekday: "long", month: "long", day: "numeric", year: "numeric",})}{" "} at {selectedTime}.</p>
                    
                    <div className='flex mt-8 gap-[23px]'>
                        <button className="w-[195px] h-[54px] bg-white border border-[#D7D7D7] text-[#757575] text-[18px] rounded-md text-[#757575]">Message Doctor</button>
                        
                    <button onClick={() =>{
                        onClose();
                        onViewAppointment();
                    }} className="w-[195px] h-[54px] bg-[#28574E] text-white border border-[#28574E] text-[18px] rounded-md">View Appointment</button>
                    </div>
        </section>

    </div>
  )
}