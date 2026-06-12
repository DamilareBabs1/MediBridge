import React from 'react'
import Hihand from '../assets/noto_raised-hand.svg'
import XCalender from '../assets/calendar-xDASH.svg'
import NormCal from '../assets/calendar-days.svg'
import AIStars from '../assets/astroidStar.svg'
import MedirePort from '../assets/file-text.svg'
import DrAmelia from '../assets/Dr.AmeliaChan.svg'
import Calender from '../assets/calendar-days.svg'
import clocler from '../assets/clock.svg'
import CalenderCheck from '../assets/hugeicons_appointment-02.svg'
import ReflectN from '../assets/refresh-cw.svg'

export default function DashBoard1() {
  return (
    <div className='w-full h-full'>
        <section className='flex p-5 mt-7 ml-7 w-[1126px] h-[116px] flex-col mt-4 bg-[#28574E] border-[#28574E] rounded-xl'>
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
        
            <div className='flex justify-between items-start w-[688px] h-[257px] p-6 border border-[#D7D7D7] rounded-xl'>
    
              <div className='flex gap-4'><img className="w-[78px] h-[100px]" src={DrAmelia} alt="" />

                <div className='flex flex-col w-full'><h1 className='mt-2'>Dr. Amelia Chen</h1><p className='mt-2'>Cardiology Department</p>

                <div className='flex items-center gap-4 mt-2'><img className='text-[14px]' src={Calender} alt="" /><p className='text-[#605E5E] text-[15px]'>Thursday, July 2, 2026</p><img className='text-[14px]' src={clocler} alt="" /><p className='text-[#605E5E] text-[15px]'>3:00 PM</p></div>
                
                <div className='flex items-center w-full mt-6'>
                    <div className='gap-5 flex items-start justify-start'>
                    <button className='border hover:border-[#28574E] hover:bg-[#28574E] rounded-md hover:text-white text-center bg-white text-[#28574E] border-[#28574E] w-[164px] h-[50px]'>View Details</button>
                    <button className='border hover:border-[#28574E] hover:bg-[#28574E] rounded-md hover:text-white bg-white text-[#28574E] border-[#28574E] text-center w-[164px] h-[50px]'>Reschedule</button>
                </div>
                <button className='text-[#FF383C]'>Cancel</button>
                </div>
                
                
                </div>
                
                </div>
                  <p className='border border-[#E0F8F3] bg-[#E0F8F3] text-[#28574E] px-4 py-1 rounded-2xl'>Confirmed</p>
                  
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
                        <div className='border border-[#EBEBEB] bg-[#EBEBEB] w-[45px] h-[45px] flex items-center rounded-md'><img className='w-[23px] h-[23px] block' src={CalenderCheck} alt="" /></div>
                        <div className='flex justify-between items-center w-full'>
                            <div className='flex flex-col gap-[8px]'>
                            <h1 className='text-[#141313] text-[18px] w-[214px] h-[24px]'>Appointment confirmed</h1>
                            <p className='text-[#605E5E] text-[16px]'>Cardiology with Dr. Amelia Chen –Thursday,  July 2, 2026</p>
                            </div>
                            <p className='text-[15px] text-[#3E3B3B]'>2hr Ago</p>
                        </div>
                    </div>
                    <div className='flex gap-6 items-center'>
                        <div className='border border-[#EBEBEB] bg-[#EBEBEB] w-[45px] h-[45px] flex items-center rounded-md'><img className='w-[23px] h-[23px] block' src={ReflectN} alt="" /></div>
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

        {/* <div className='flex gap-6 mt-14 ml-7 w-full'>
            <h1 className='text-[#141313] text-[20px]'>Upcoming Appointment</h1>
          </div>

          <section className='w-full h-full p-8 flex gap-10'>
        
            <div className='flex justify-between items-start w-[688px] h-[257px] p-6 border border-[#D7D7D7] rounded-xl'>
    
              <div className='flex gap-4'><img className="w-[78px] h-[100px]" src={DrAmelia} alt="" />

                <div className='flex flex-col w-full'><h1 className='mt-2'>Dr. Amelia Chen</h1><p className='mt-2'>Cardiology Department</p>

                <div className='flex items-center gap-4 mt-2'><img src={Calender} alt="" /><p>Thursday, July 2, 2026</p><img src={clocler} alt="" /><p>3:00 PM</p></div>
                
                <div className='flex items-center w-full mt-6'>
                    <div className='gap-5 flex items-start justify-start'>
                    <button className='border hover:border-[#28574E] hover:bg-[#28574E] rounded-md hover:text-white text-center bg-white text-[#28574E] border-[#28574E] w-[164px] h-[50px]'>View Details</button>
                    <button className='border hover:border-[#28574E] hover:bg-[#28574E] rounded-md hover:text-white bg-white text-[#28574E] border-[#28574E] text-center w-[164px] h-[50px]'>Reschedule</button>
                </div>
                <button className='text-[#FF383C]'>Cancel</button>
                </div>
                
                
                </div>
                
                </div>
                  <p className='border border-[#E0F8F3] bg-[#E0F8F3] text-[#28574E] px-4 py-1 rounded-2xl'>Confirmed</p>
                  
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
                    <h1>The man</h1>
                </div>
            </section> */}
            </div>
           
          
    
  )
}