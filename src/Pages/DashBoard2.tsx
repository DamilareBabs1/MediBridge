import React from 'react'
import Hihand from '../assets/noto_raised-hand.svg'
import XCalender from '../assets/calendar-xDASH.svg'
import NormCal from '../assets/calendar-days (1)New.svg'
import AIStars from '../assets/astroidNew1.svg'
import MedirePort from '../assets/file-text (1)New.svg'
import Calender from '../assets/calendar-days (1)New.svg'
import clocler from '../assets/clock.svg'
import CalenderCheck from '../assets/hugeicons_appointment-02.svg'
import ReflectN from '../assets/rotate-cwNew.svg'

export default function DashBoard2({appointment}) {
  if (!appointment) {
  return <p>No appointment found.</p>;
}
  return (
    <div className='w-full h-full'>
        <section className='flex p-5 mt-7 w-[1126px] h-[116px] flex-col bg-[#28574E] border-[#28574E] rounded-xl'>
            <div className='flex items-start justify-start text-start'>
                <h1 className='text-[#FFFFFF] text-[24px] font-md'>Hello, Sarah Martins</h1>
                <img src={Hihand} alt="" />
            </div>
            <div className=' text-[#F0E9E9] text-[17px]'>
              <p>Welcome to MediBridge.</p>
            </div>
            <div className='flex gap-6 mt-14 ml-7 w-full'>
            <h1 className='text-[#141313] text-[20px]'>Upcoming Appointment</h1>
          </div>

          <section className='w-full h-[90vh] p-8 flex gap-10'>
        
            <div className=' card flex flex-col justify-between items-start w-[688px] h-[257px] p-6 border border-[#D7D7D7] rounded-xl relative'>
    
             <div className='top'>
               <div className='flex gap-4'><img className="w-[78px] h-[100px]" src={appointment.doctor.image} alt="" />

                <div className='flex flex-col w-full'><h1 className='mt-2'>{appointment.doctor.name}</h1><p className='mt-2'>{appointment.department} Department</p>

                <div className='flex items-center gap-4 mt-2'><img className='text-[14px]' src={Calender} alt="" /><p className='text-[#605E5E] text-[15px]'>{new Date(appointment.date).toLocaleDateString("en-US", {weekday: "long", month: "long", day: "numeric", year: "numeric",
  })}</p><img className='text-[14px]' src={clocler} alt="" /><p className='text-[#605E5E] text-[15px]'>{appointment.time}</p>
  
  </div>
                
                </div>
               
                </div>

             </div>
                  <p className='absolute top-4 right-4 border border-[#E0F8F3] bg-[#E0F8F3] text-[#28574E] px-4 py-1 rounded-2xl'>Confirmed</p>

                   <div className='btncontainer'>
                                  <div className='flex gap-5 items-center w-full mt-6'>
                    <div className='gap-5 flex items-start justify-start'>
                    <button className='border hover:border-[#28574E] hover:bg-[#28574E] rounded-md hover:text-white text-center bg-white text-[#28574E] border-[#28574E] w-[164px] h-[50px]'>View Details</button>
                    <button className='border hover:border-[#28574E] hover:bg-[#28574E] rounded-md hover:text-white bg-white text-[#28574E] border-[#28574E] text-center w-[164px] h-[50px]'>Reschedule</button>
                </div>
                <button className='text-[#FF383C] ml-6'>Cancel</button>
                </div>
                </div>
                  
                </div>

                <div className='w-[391px] h-[317px] rounded-md flex flex-col items-start justify-start p-5 -mt-17 border border-[#D7D7D7]'>
              <div className=''>
              <h1 className='text-[#141313] text-[18px]'>Quick Actions</h1>
            </div>

             <div className="flex items-center gap-4 mt-5 border border-[#E7E4E4] rounded-md w-full h-[61px] px-4"><div className="bg-[#E3FDF7] w-[45px] h-[45px] flex items-center justify-center rounded-md"><img className="w-[20px] h-[20px]" src={NormCal} alt="" /></div><p className='text-[#2B2929] text-[15px]'>Book Appointment</p></div>
            
             <div className="flex items-center gap-4 mt-5 border border-[#E7E4E4] rounded-md w-full h-[61px] px-4"><div className="bg-[#E3FDF7] w-[45px] h-[45px] flex items-center justify-center rounded-md"><img className="w-[20px] h-[20px]" src={AIStars} alt="" /></div><p className='text-[#2B2929] text-[15px]'>Chat With AI</p></div>
            
            <div className="flex items-center gap-4 mt-5 border border-[#E7E4E4] rounded-md w-full h-[61px] px-4"><div className="bg-[#E3FDF7] w-[45px] h-[45px] flex items-center justify-center rounded-md"><img className="w-[20px] h-[20px]" src={MedirePort} alt="" /></div><p className='text-[#2B2929] text-[15px]'>Medical Records</p></div>
            </div>

            </section>
              <section>
                <div>
                    <h1>Recent Activities</h1>
                </div>
                <div className='w-[1126px] h-[177px] border border-[#D7D7D7] rounded-xl bg-white mt-6 p-5 flex flex-col gap-[23px]'>
                    <div className='flex gap-6 items-center'>
                        <div className='border border-[#EBEBEB] bg-[#EBEBEB] w-[45px] h-[45px] flex items-center justify-center rounded-md'><img className='w-[20px] h-[20px] block' src={CalenderCheck} alt="" /></div>
                        <div className='flex justify-between items-center w-full'>
                            <div className='flex flex-col gap-[8px]'>
                            <h1 className='text-[#141313] text-[18px] w-[214px] h-[24px]'>Appointment confirmed</h1>
                            <p className='text-[#605E5E] text-[16px]'>{appointment.department} with {appointment.doctor.name} —{" "}{new Date(appointment.date).toLocaleDateString("en-US", {weekday: "long", month: "long", day: "numeric", year: "numeric",})}</p>
                            </div>
                            <p className='text-[15px] text-[#3E3B3B]'>{appointment.time}</p>
                        </div>
                    </div>
                    <div className='flex gap-6 items-center'>
                        <div className='border border-[#EBEBEB] bg-[#EBEBEB] w-[45px] h-[45px] flex items-center justify-center rounded-md'><img className='w-[20px] h-[20px] block' src={ReflectN} alt="" /></div>
                        <div className='flex justify-between items-center w-full'>
                            <div className='flex flex-col'>
                            <h1 className='text-[#141313] text-[18px] w-[214px] h-[24px]'>Appointment rescheduled</h1>
                            <p className='text-[#605E5E] text-[16px]'>Neurology visit moved to August 18, 2026</p>
                            </div>
                            <p className='text-[15px] text-[#3E3B3B]'>2hr Ago</p>
                        </div>
                    </div>


                </div>
            </section>
        
        </section>

     
            </div>
           
          
    
  )
}