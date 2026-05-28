import React from 'react'
import Brain1 from '../assets/NeurologyBrain.svg'
import BrainNeuro from '../assets/BRAINNeurology.svg'
import CancelX from '../assets/hugeicons_cancel-01.svg'



export default function NeurologyPage() {
  return (
    <section className='bg-black flex items-center justify-center '>
        <div className='flex bg-white flex-col w-[500px] h-[120vh] items-start justify-start m-6 p-10 border border-gray-100 rounded-md'>
            
            <div className='flex flex-row items-center justify-between w-full'>
              <div className='flex gap-5'>
                <img src={Brain1} alt="" />
                <h1>Neurology</h1>
             </div>
             <div className=''>
                 <img src={CancelX} alt="" />
               </div>
         </div>
        
        <hr className="border-t border-gray-300 w-full mt-4" />

        <div className='mt-10'>
            <img src={BrainNeuro} alt="" />
        </div>
        <div className='w-[360px] h-[204px] mt-5'>
            <h1 className='text-[22px] text-[#28574E] items-start justify-start'>Department Overview</h1>
            <p className='mt-2 text-[#3F484A] text-[16px]'>The Neurology Department focuses on diagnosing and treating disorders of the brain, spine, and nervous system. It provides specialized care for conditions that affect movement, thinking, memory, and sensation.</p>
        </div>
       
       
       <div className='mt-10 text-[20px] text-[#28574E]'>
        <h1>Service Offered</h1>
       </div>
       <div className="mt-4 flex flex-col gap-20">
    
           
       <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <input className="w-[24px] h-[24px]" type="checkbox" />
          <label className='text-[#141313] text-[16px]'>Epilepsy (seizure) care</label>
        </div>

      <div className="flex items-center gap-2">
        <input className="w-[24px] h-[24px]" type="checkbox" />
        <label className='text-[#141313] text-[16px]'>Headache and migraine treatment</label>
      </div>

    <div className="flex items-center gap-2">
       <input className="w-[24px] h-[24px]" type="checkbox"  />
       <label className='text-[#141313] text-[16px]'>Nerve disorder diagnosis and care</label>
    </div>
    <div className="flex items-center gap-2">
        <input className="w-[24px] h-[24px]" type="checkbox" />
        <label className='text-[#141313] text-[16px]'>Memory and cognitive assessment</label>
     </div>

     <div className="flex items-center gap-2">
       <input className="w-[24px] h-[24px]" type="checkbox" />
       <label className='text-[#141313] text-[16px]'>Parkinson’s disease management</label>
     </div>
     <div className="flex items-center gap-2">
          <input className="w-[24px] h-[24px]" type="checkbox" />
          <label className='text-[#141313] text-[16px]'>Stroke evaluation and management</label>
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