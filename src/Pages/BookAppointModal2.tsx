import React, { useState } from 'react'
import DoctorOne from "../assets/Dr.AmeliaChan.svg"
import DoctorTwo from "../assets/Dr.Blessing.svg"
import CancelX from '../assets/hugeicons_cancel-01.svg'
import DocProfile from './DocProfile';
import {toast} from "react-toastify"
import { FaCheck } from "react-icons/fa";

export default function BookAppointModal2({selectedDepartment,
selectedDoctor,
setSelectedDoctor,
onBack,
onNext,
onClose}) {


  const doctorsByDepartment = {
    Cardiology: [
      {
        id: 1,
        name: "Dr. Amelia Chen",
        experience: "14 Yrs",
        available: true,
        image: DoctorOne,
        
        schedule: [
      { time: "10:00 AM", available: true },
      { time: "11:00 AM", available: false },
      { time: "12:00 PM", available: true },
      { time: "1:00 PM", available: false },
      { time: "2:00 PM", available: true },
      { time: "3:00 PM", available: true },
    ],
      },
      {
        id: 2,
        name: "Dr. Blessing Friday",
        experience: "14 Yrs",
        available: false,
        image: DoctorTwo,

        schedule: [
      { time: "10:00 AM", available: false },
      { time: "11:00 AM", available: false },
      { time: "12:00 PM", available: false },
      { time: "1:00 PM", available: false },
      { time: "2:00 PM", available: false },
      { time: "3:00 PM", available: false },
    ],
      },
    ],
    Neurology: [
      {
        id: 3,
        name: "Dr. Lawal Damijo",
        experience: "20 Yrs",
        available: true,
        image: DoctorTwo,

        schedule: [
      { time: "10:00 AM", available: false },
      { time: "11:00 AM", available: true },
      { time: "12:00 PM", available: false },
      { time: "1:00 PM", available: true },
      { time: "2:00 PM", available: true },
      { time: "3:00 PM", available: true },
    ],
      },
      {
        id: 4,
        name: "Dr. Bamidele John",
        experience: "10 Yrs",
        available: true,
        image: DoctorTwo,

        schedule: [
      { time: "10:00 AM", available: true },
      { time: "11:00 AM", available: true },
      { time: "12:00 PM", available: true },
      { time: "1:00 PM", available: true },
      { time: "2:00 PM", available: true },
      { time: "3:00 PM", available: false },
    ],
      },
    ],
    Pediatrics: [
    {
      id: 4,
      name: "Dr. Sarah Williams",
      experience: "8 Yrs",
      available: true,
      image: DoctorTwo,

      schedule: [
      { time: "10:00 AM", available: false },
      { time: "11:00 AM", available: false },
      { time: "12:00 PM", available: false },
      { time: "1:00 PM", available: false },
      { time: "2:00 PM", available: false },
      { time: "3:00 PM", available: false },
    ],
    },
  ],
  };

  const doctors = doctorsByDepartment[selectedDepartment] || [];
  console.log("Department:", selectedDepartment);
console.log("Doctors:", doctors);

  const [showProfile, setShowProfile] = useState(false);
  const [profileDoctor, setProfileDoctor] = useState(null);
  const [doctorSelected, setDoctorSelected] = useState(false);

  if (showProfile) {
  return (
    
    <DocProfile doctor={profileDoctor} onClose={() => setShowProfile(false)} />);}

  return (
    <div className="w-full h-full">

      {/* HEADER */}
      <section className='flex items-center border-b border-[#E7E4E4] justify-between w-[550px] h-[57px] p-15'>
        <div className='flex flex-col gap-[9px]'>
          <h1 className='text-[#000000] text-[22px] font-semibold'>Book Appointment</h1>
          <p className='text-[#605E5E] text-[16px]'>Step 2 of 5</p>
        </div>

        <button onClick={onClose}>
          <img className='text-[#605E5E]' src={CancelX} alt="close" />
        </button>
      </section>

      {/* TITLE */}
      <section>
        <div className='flex items-center justify-between p-4 gap-[11px]'>
          <h1 className='text-[#000000] font-semibold'>Select a Doctor</h1>
          <p className='text-[#3E3B3B]'>{selectedDepartment} Department • 8 available</p>
        </div>
      </section>

      {/* DOCTORS */}
     <section className='flex flex-col gap-10 p-7'>
      <h1 className="text-red-500">Number of doctors: {doctors.length}</h1>
      
      {doctors.map((doctor) => (<div key={doctor.id} onClick={(e) => {e.stopPropagation(); setSelectedDoctor(doctor); setDoctorSelected(true);}} className={`border w-[473px] bg-white rounded-xl p-3 flex flex-col cursor-pointer ${ selectedDoctor?.id === doctor.id ? "border-[#28574E]" : "border-[#D7D7D7]"}`}>
    
    {/* TOP PART */}
     <div className='flex gap-[18px] items-center'>
      <img className='w-[69px] h-[77px]' src={doctor.image} alt="" />
      
    <div className='flex flex-col gap-[8px]'>
      <h1 className='text-[#141313] text-[18px]'>{doctor.name}</h1>
      <p className='text-[#605E5E] text-[15px]'>{selectedDepartment}</p>
      
    <div className='flex gap-[14px] text-[14px]'>
      <p>{doctor.experience}</p>
      <p className={ doctor.available ? "text-[#10AA37]" : "text-[#FF383C]"}>{doctor.available ? "Available" : "Unavailable"}</p>
    </div>
    </div>
    </div>

    {/* BOTTOM PART */}
    <div className='flex gap-[150px] items-center w-full mt-8 pl-12'>
      <button className='text-[#605E5E]' onClick={(e) => {e.stopPropagation(); setProfileDoctor(doctor); setShowProfile(true);}}>View Profile</button>

      <button onClick={(e) => {e.stopPropagation(); setSelectedDoctor(doctor); setDoctorSelected(true);}} className="border border-[#28574E] w-[140px] h-[30px] rounded-md">{selectedDoctor?.id === doctor.id ? "✓ Selected" : "Select Doctor"}</button>
    </div>
  </div>))}
</section>

      {/* FOOTER BUTTONS */}
      {doctorSelected && (<div className="mb-4 p-3 rounded-md bg-[#EBEBEB] text-[#141313]"> ✓ Doctor selected successfully. Click Next to continue.</div>)}
      
      <div className='flex gap-[23px] items-center mt-5 p-7'>
        <button onClick={onBack} className="h-[54px] w-[225px] rounded-md border border-[#D7D7D7] text-[#757575]">Back</button>
        
        <button onClick={onNext} className={`h-[54px] w-[225px] text-white rounded-md ${selectedDoctor ? "bg-[#28574E]" : "bg-[#D9D9D9] cursor-not-allowed"}`} disabled={!selectedDoctor}>Next</button>
      </div>
      </div>
)}