import React from 'react'
import cardioheart from '../assets/CardiologyNew.svg'
import HeartMag from '../assets/HEartIMage.svg'
import CancelX from '../assets/hugeicons_cancel-01.svg'



export default function CardiologyPage() {
  return (
    <section className='bg-black flex items-center justify-center '>
        <div className='flex bg-white flex-col w-[520px] h-[118vh] items-start justify-start m-6 p-10 border border-gray-100 rounded-md'>
            
            <div className='flex flex-row items-center justify-between w-full'>
              <div className='flex gap-5'>
                <img src={cardioheart} alt="" />
                <h1>Cardiology</h1>
             </div>
             <div className=''>
                 <img src={CancelX} alt="" />
               </div>
         </div>
        
        <hr className="border-t border-gray-300 w-full mt-4" />

        <div className='mt-10'>
            <img src={HeartMag} alt="" />
        </div>
        <div className='w-[360px] h-[204px] mt-5'>
            <h1 className='text-[22px] text-[#28574E] items-start justify-start'>Department Overview</h1>
            <p className='mt-2 text-[#3F484A] text-[16px]'>The Cardiology department specializes in diagnosing and treating conditions related to the heart and cardiovascular system, providing expert care for hypertension, arrhythmias, and coronary diseases. Our multidisciplinary approach ensures that patients receive comprehensive care from initial diagnosis through long-term management and rehabilitation.</p>
        </div>
       
       
       <div className='mt-20 text-[20px] text-[#28574E]'>
        <h1>Service Offered</h1>
       </div>
       <div className="mt-4 flex gap-20">
    
            {/* LEFT COLUMN */}
       <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <input className="w-[24px] h-[24px]" type="checkbox" />
          <label className='text-[#141313] text-[16px]'>ECG (Heart test)</label>
        </div>

      <div className="flex items-center gap-2">
        <input className="w-[24px] h-[24px]" type="checkbox" />
        <label className='text-[#141313] text-[16px]'>Heart screening</label>
      </div>

    <div className="flex items-center gap-2">
       <input className="w-[24px] h-[24px]" type="checkbox"  />
       <label className='text-[#141313] text-[16px]'>Heart monitoring</label>
    </div>
    </div>

       {/* RIGHT COLUMN */}
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <input className="w-[24px] h-[24px]" type="checkbox" />
        <label className='text-[#141313] text-[16px]'>Blood Pressure</label>
     </div>

     <div className="flex items-center gap-2">
       <input className="w-[24px] h-[24px]" type="checkbox" />
       <label className='text-[#141313] text-[16px]'>Cardiac Consultation</label>
     </div>
    </div>

    </div>

        <div className='flex gap-8 mt-18'>
            <button className='w-[181px] h-[47px] bg-white border border-[#4D5461] rounded-md text-[#4D5461] text-[16px]'>Cancel</button>
            <button className='w-[216px] h-[47px] bg-[#28574E] border border-[#28574E] rounded-md text-[#FFFFFF] text-[16px]'>Book Appointment</button>
        </div>

        </div>
    </section>
  )
}