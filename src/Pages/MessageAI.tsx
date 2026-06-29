import React from 'react'
import Doctor1 from '../assets/Dr.AmeliaChan.svg'
import Doctor2 from '../assets/SecondDocImg.svg'
import SearchMate from '../assets/SearchVector.svg'
import { MdSend } from "react-icons/md";

export default function MessageAI() {
  return (
    <div>
        <section className='flex justify-between items-center p-10'>
            <div className='flex flex-col gap-[5px]'>
                <h1 className='text-[22px] text-[#000000] w-[178px] h-[30px] font-bold'>Messages</h1>
                <p className='text-[15px] text-[#707070] w-[473px] h-[20px]'>Conversations with your doctors and care team</p>
            </div>
            
        </section>

        <section className='w-[1126px] h-[701px] flex'>
            <div className='border border-[#D7D7D7] bg-white w-[393px] h-[701px] rounded-l-md rounded-r-none'>
               
                <div className='m-5 relative'><img src={SearchMate} alt="" className="absolute left-3 top-1/2 -translate-y-1/2 w-[14px] h-[14px]" /> 
                <input className='border rounded-md w-[353px] h-[40px] border-[#E6E3E3] bg-white text-[#605E5E] placeholder:text-[14px] pl-12' placeholder='Search conversation' type="text" /></div>

                <div className='flex items-center gap-[8px] justify-between p-5 bg-[#E8FBF7]'>
                    <img className="rounded-[35px] w-[30px] h-[30px]" src={Doctor1} alt="" />
                    <div className='flex flex-col items-start'>
                        <h1 className='text-[#2B2929] text-[15px] font-bold w-[272px] h-[23px]'>Dr. Amelia Chen</h1>
                        <p className='text-[#605E5E] text-[12px] w-[272px] h-[18px]'>Good afternoon doctor, I have my appoint...</p>
                    </div>
                    <div className='self-start'>
                        <p className='text-[#605E5E] text-[10px] w-[46px] h-[15px]'>3:00 AM</p>
                    </div>
                </div>

                <div className='flex items-center gap-[8px] justify-between p-5'>
                    <img className="rounded-[35px] w-[30px] h-[30px]" src={Doctor2} alt="" />
                    <div className='flex flex-col items-start'>
                        <h1 className='text-[#2B2929] text-[15px] font-bold w-[272px] h-[23px]'>Dr. Usman Dafodi</h1>
                        <p className='text-[#605E5E] text-[12px] w-[272px] h-[18px]'>Good afternoon doctor, I have my appoint...</p>
                    </div>
                    <div className='self-start'>
                        <p className='text-[#605E5E] text-[10px] w-[46px] h-[15px]'>3:00 AM</p>
                    </div>
                </div>


            </div>
            <div className='border border-[#D7D7D7] bg-white w-[733px] h-[701px] rounded-r-md rounded-l-none'>
                <div className='p-4 border-b border-[#D7D7D7] flex items-center gap-[14px]'>
                    <img className="rounded-[35px] w-[30px] h-[30px]" src={Doctor1} alt="" />
                    <h1 className='text-[#2B2929] text-[18px] font-semibold'>Dr. Amelia Chen</h1>
                </div>

            <div className="flex justify-end mt-5">
              <div className="bg-[#28574E] border border-[#28574E] text-white rounded-xl rounded-tr-none w-[478px] p-3 m-4">
                <p className='text-[#FFFFFF] text-[14px]'>Good afternoon doctor, I have my appointment tomorrow. Is there anything I should prepare before coming?</p>
                <p className="text-[10px] mt-2 text-left">3:00 AM</p>
              </div>
              </div>

            <div className="flex justify-start items-start mt-5">
                <img className="rounded-[35px] w-[30px] h-[30px] mt-6 ml-6" src={Doctor1} alt="" />
              <div className="bg-[#E8FBF7] border border-[#E8FBF7] text-black rounded-xl rounded-tl-none w-[580px] px-[16px] py-[12px] p m-4">
                <p className='text-black text-[14px]'>Good afternoon Sarah. Yes, please avoid food and caffeine for at least 8 hours before your appointment.</p>
                <p className="text-[10px] text-[#605E5E] mt-2 text-left">3:10 AM</p>
              </div>
              </div>
            
             <div className='p-4 border-t border-[#D7D7D7] flex items-center justify-center gap-[14px] mt-67 relative'>
                <input className='border border-[#C2C6D4] bg-[#F1FFFD] rounded-xl placeholder:text-[#6B7280] placeholder:text-[14px] w-[687px] h-[50px] items-center flex pl-2' type="text" placeholder='Type your Message...' />
                <button className='absolute right-10 top-1/2 -translate-y-1/2 text-[#28574E] text-xl'><MdSend /></button>
             </div>
            </div>
        </section>
    </div>
  )
}