import React, {useState} from 'react'
import Cardiology from '../assets/heart.svg'
import Neurology from '../assets/Container.svg'
import Ophthalmology from '../assets/eye.svg'
import Orthopedics from '../assets/bone.svg'
import OBGYN from '../assets/Icon (1).svg'
import Pediatrics from '../assets/baby.svg'
import CancelX from '../assets/hugeicons_cancel-01.svg'
import searchVector from '../assets/SearchVector.svg'



export default function BookAppointModal1({ 
  selectedDepartment, 
  setSelectedDepartment,
  onNext, 
  onClose }) {



  return (
    <div className="p-6 w-full gap-5 max-w-full overflow-x-hidden">
        <section className='flex items-center border-b border-[#E7E4E4] justify-between w-[550px] h-[57px] p-15'> 
            <div className='flex flex-col gap-[9px]'>
              <h1 className='text-[#000000] w-[354px] h-[28px] text-[22px] font-semibold'>Book Appointment</h1>
              <p className='text-[#605E5E] text-[16px] w-[380px] h-[20px]'>Step 1 of 5</p>
            </div>
            <div>
                <button onClick={onClose}><img className='text-[#605E5E]' src={CancelX} alt="" /></button>
            </div>
        </section>
        <section>
            <div className='flex flex-col p-4 gap-[11px]'>
                <h1 className='text-[#000000] w-[473px] h-[23px] font-semibold'>What brings you in today?</h1>
                <div className='relative gap-5'><img className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" src={searchVector} alt="" /><input className='border border-[#E6E3E3] rounded-xl w-[473px] h-[40px] pl-10' type="text" placeholder='Search symptoms,department or condition...' /></div>
            </div>
        </section>
        
        <section className='p-8 gap-[20px]'>
            <div>
                <h1 className='text-[#000000] text-[18px] w-[473px] h-[23px]'>Or Select a department</h1>
            </div>
            
            <div className='grid grid-cols-2 gap-4 w-full'>
              
             <button onClick={(e) =>{ e.stopPropagation(); setSelectedDepartment("Cardiology")}} className={`rounded-xl w-full h-[83px] mt-5 flex items-center px-4 border ${selectedDepartment === "Cardiology" ? "border-[#28574E] bg-[#FFFFFF]" : "border-[#DDDDDD] bg-[#FFFFFF]"}`}>

               <div className="flex items-center gap-[16px] w-full">
                <div className="border border-[#FFF4F3] rounded-full w-[44px] h-[44px] flex items-center justify-center bg-[#FFF4F3]"><img className="h-[17px] w-[17px]" src={Cardiology} alt="" /></div>
               <div className="flex flex-col leading-tight text-left"><h1 className="text-sm font-medium">Cardiology</h1><p className="text-xs text-gray-500">8 Doctors</p></div>
               </div>
            </button>
          
            
            
          <button onClick={(e) =>{ e.stopPropagation(); setSelectedDepartment("Neurology")}} className={`rounded-xl w-full h-[83px] mt-5 flex items-center px-4 border ${selectedDepartment === "Neurology" ? "border-[#28574E] bg-[#FFFFFF]" : "border-[#DDDDDD] bg-[#FFFFFF]"}`}>

               <div className="flex items-center gap-[16px] w-full">
                <div className="border border-[#CFDFE0] rounded-full w-[44px] h-[44px] flex items-center justify-center bg-[#CFDFE0]"><img className="h-[17px] w-[17px]" src={Neurology} alt="" /></div>
               <div className="flex flex-col leading-tight text-left"><h1 className="text-sm font-medium">Neurology</h1><p className="text-xs text-gray-500">8 Doctors</p></div>
               </div>
            </button>

             <button onClick={(e) =>{ e.stopPropagation(); setSelectedDepartment("Ophthalmology")}} className={`rounded-xl w-full h-[83px] mt-5 flex items-center px-4 border ${selectedDepartment === "Ophthalmology" ? "border-[#28574E] bg-[#FFFFFF]" : "border-[#DDDDDD] bg-[#FFFFFF]"}`}>

               <div className="flex items-center gap-[16px] w-full">
                <div className="border border-[#FAEFE7] rounded-full w-[44px] h-[44px] flex items-center justify-center bg-[#FAEFE7]"><img className="h-[17px] w-[17px]" src={Ophthalmology} alt="" /></div>
               <div className="flex flex-col leading-tight text-left"><h1 className="text-sm font-medium">Ophthalmology</h1><p className="text-xs text-gray-500">8 Doctors</p></div>
               </div>
            </button>
            
            <button onClick={(e) =>{ e.stopPropagation(); setSelectedDepartment("Orthopedics")}} className={`rounded-xl w-full h-[83px] mt-5 flex items-center px-4 border ${selectedDepartment === "Orthopedics" ? "border-[#28574E] bg-[#FFFFFF]" : "border-[#DDDDDD] bg-[#FFFFFF]"}`}>

               <div className="flex items-center gap-[16px] w-full">
                <div className="border border-[#FEE2FF] rounded-full w-[44px] h-[44px] flex items-center justify-center bg-[#FEE2FF]"><img className="h-[17px] w-[17px]" src={Orthopedics} alt="" /></div>
               <div className="flex flex-col leading-tight text-left"><h1 className="text-sm font-medium">Orthopedics</h1><p className="text-xs text-gray-500">8 Doctors</p></div>
               </div>
            </button>

            <button onClick={(e) =>{ e.stopPropagation(); setSelectedDepartment("OB-GYN")}} className={`rounded-xl w-full h-[83px] mt-5 flex items-center px-4 border ${selectedDepartment === "OB-GYN" ? "border-[#28574E] bg-[#FFFFFF]" : "border-[#DDDDDD] bg-[#FFFFFF]"}`}>

               <div className="flex items-center gap-[16px] w-full">
                <div className="border border-[#ECE6FF] rounded-full w-[44px] h-[44px] flex items-center justify-center bg-[#ECE6FF]"><img className="h-[17px] w-[17px]" src={OBGYN} alt="" /></div>
               <div className="flex flex-col leading-tight text-left"><h1 className="text-sm font-medium">OB-GYN</h1><p className="text-xs text-gray-500">8 Doctors</p></div>
               </div>
            </button>

            <button onClick={(e) =>{ e.stopPropagation(); setSelectedDepartment("Pediatrics")}} className={`rounded-xl w-full h-[83px] mt-5 flex items-center px-4 border ${selectedDepartment === "Pediatrics" ? "border-[#28574E] bg-[#FFFFFF]" : "border-[#DDDDDD] bg-[#FFFFFF]"}`}>

               <div className="flex items-center gap-[16px] w-full">
                <div className="border border-[#FFF5E8] rounded-full w-[44px] h-[44px] flex items-center justify-center bg-[#FFF5E8]"><img className="h-[17px] w-[17px]" src={Pediatrics} alt="" /></div>
               <div className="flex flex-col leading-tight text-left"><h1 className="text-sm font-medium">Pediatrics</h1><p className="text-xs text-gray-500">8 Doctors</p></div>
               </div>
            </button>
            </div>
            
        <div
  className={`rounded-xl w-[473px] h-[54px] text-white flex items-center justify-center mt-20 ${
    selectedDepartment
      ? "bg-[#28574E] cursor-pointer"
      : "bg-[#D9D9D9] cursor-not-allowed"
  }`}
  onClick={() => {
    console.log("NEXT CLICKED");
  console.log("Department:", selectedDepartment);
    onNext?.();
  }}
>
  Next
</div>
        </section>
    </div>
  )
} 