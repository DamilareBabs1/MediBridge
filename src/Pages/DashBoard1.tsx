import React from 'react'
import Hihand from '../assets/noto_raised-hand.svg'
import XCalender from '../assets/calendar-xDASH.svg'
import NormCal from '../assets/calendar-days.svg'
import AIStars from '../assets/astroidStar.svg'
import MedirePort from '../assets/file-text.svg'

type DashBoard1Props = {
  onBookAppointment: () => void;
};
export default function DashBoard1({onBookAppointment} : DashBoard1Props) {
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
        </section>

        <div className='flex gap-6 mt-9 ml-7 w-full'>
            <h1 className='text-[#141313] text-[20px]'>Upcoming Appointment</h1>
          </div>

        <section className='w-[1126px] h-[374px] p-8 flex gap-10'>

          <div className='bg-white border border-[#D7D7D7] p-5 rounded-xl w-[570px] h-[280px] flex flex-col justify-center items-center text-center'>
          <div className='bg-[#EBEAEA] border border-[#EBEAEA] rounded-md flex items-center justify-center w-[67px] h-[57px]'>
            <img className='w-[40px] h-[40px]' src={XCalender} alt="" />
          </div>
            <div className='p-5'>
              <h1 className='text-[#000000] text-[20px]'>No upcoming appointments</h1>
              <p className='text-[#666666] pt-2'>You don’t have any scheduled hospital visits yet. Once you book an appointment, it will appear here.</p>
            </div>
            
              <button onClick={onBookAppointment} className='border border-[#28574E] bg-[#28574E] rounded-md text-white text-center w-[194px] h-[54px]'>Book Appointment</button>
            </div>
            
            <div className='w-[391px] h-[317px] rounded-md flex flex-col items-start justify-start p-5 -mt-13 border border-[#D7D7D7]'>
              <div className=''>
              <h1 className='text-[#141313] text-[18px]'>Quick Actions</h1>
            </div>

             <div className="flex items-center gap-4 mt-5 border border-[#E7E4E4] rounded-md w-full h-[61px] px-4"><div className="bg-[#E3FDF7] w-[45px] h-[45px] flex items-center justify-center rounded-md"><img className="w-[20px] h-[20px]" src={NormCal} alt="" /></div><p className='text-[#2B2929] text-[15px]'>Book Appointment</p></div>
            
             <div className="flex items-center gap-4 mt-5 border border-[#E7E4E4] rounded-md w-full h-[61px] px-4"><div className="bg-[#E3FDF7] w-[45px] h-[45px] flex items-center justify-center rounded-md"><img className="w-[20px] h-[20px]" src={AIStars} alt="" /></div><p className='text-[#2B2929] text-[15px]'>Chat With AI</p></div>
            
            <div className="flex items-center gap-4 mt-5 border border-[#E7E4E4] rounded-md w-full h-[61px] px-4"><div className="bg-[#E3FDF7] w-[45px] h-[45px] flex items-center justify-center rounded-md"><img className="w-[20px] h-[20px]" src={MedirePort} alt="" /></div><p className='text-[#2B2929] text-[15px]'>Medical Records</p></div>
            </div>
            </section>

          <section className='mt-5 p-10'>
            <div>
              <h1 className='text-[#141313] text-[23px] font-bold'>Recent Activities</h1>
            </div>
            <div className='flex flex-col items-center justify-center p-10'>
              <h1 className='text-[#000000] text-[17px] font-bold '>No recent activity yet</h1>
              <p className='text-[#666666] text-[15px] w-[450px] h-[60px] text-center'>Your hospital activity will appear here after you book an appointment, visit the hospital and receive updates from your care team</p>
            </div>
          </section>
    </div>
  )
}