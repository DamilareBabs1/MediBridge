import React from 'react'
import searchVector from '../assets/SearchVector.svg'
import {useDepartmentFilter}from "../Hooks/UseDepartmentFilter";
import CalenderDone from '../assets/hugeicons_appointment-02 (1).svg'
import CalenderTwo from '../assets/calendar-days.svg'
import Download from '../assets/download.svg'





export default function MedicalAP1() {
    const { search, setSearch} = useDepartmentFilter();
  return (
    <div className='w-full h-full'>
        <section className='flex justify-between items-center p-10'>
            <div className='flex flex-col gap-[5px]'>
                <h1 className='text-[22px] text-[#000000] w-[178px] h-[30px] font-bold'>Medical Records</h1>
                <p className='text-[15px] text-[#707070] w-[473px] h-[20px]'>Your complete history of hospital visits and consultation summaries.</p>
            </div>
            
        </section>
        <section className='flex w-[1124px] h-[125px] m-8 border border-[#E6E3E3] rounded-md'>
            
            <div className='p-5 flex gap-20 w-full'>

                <div className='flex flex-col flex-1 gap-[6px]'>
                <h1 className='text-[#494747] text-[15px]'>Search</h1>
                <div className='relative gap-5'><img src={searchVector} alt="" className="absolute left-3 top-1/2 -translate-y-1/2 w-[12px] h-[12px]" /> 
                <input value={search} onChange={(e)=> setSearch(e.target.value)} className='border rounded-md w-full h-[44px] border-[#E6E3E3] bg-white text-[#605E5E] pl-9 placeholder:text-[#363636] placeholder:text-[13px]' placeholder='Search by doctor, department, or date (e.g. “cardiology”, “May 2026”)' type="text" /></div>
            </div>
            <div className='flex flex-col w-[209px] gap-[6px]'>
                <h1 className='text-[#494747] text-[15px]'>Filter</h1>
                <select className='border border-[#E6E3E3] rounded-md  h-[38px] text-[#363636] text-[13px] p-3'>
                    <option value="all">All</option>
                    <option value="some">Some</option>
                    <option value="T-pain">Tami</option>
                </select>
            </div>
            </div>
        </section>

        <section className='w-full h-full gap-[22px] flex flex-col m-8 pt-7'>
            
            <div className='w-[1124px] h-[126px] border border-[#D7D7D7] rounded-md bg-white flex justify-between items-center'>
                <div className='flex flex-row items-start justify-start gap-[24px] p-5'>
                    <div className='border border-[#EBEBEB] rounded-[12px] bg-[#EBEBEB] flex items-center justify-center w-[40px] h-[40px]'>
                        <img className="w-[28px] h-[28px]" src={CalenderDone} alt="" />
                    </div>
                    <div>
                        <h1 className='text-[#141313] text-[16px] w-[271px] h-[25px] font-bold'>Cardiology Consultation Notes</h1>
                        <p className='text-[#605E5E] text-[14px] w-[293px] h-[20px] mt-1'>Dr. Amelia Chen · Cardiology Department</p>
                        <div className='flex gap-[24px] mt-1'><img className='w-[19px] h-[19px]' src={CalenderTwo} alt="" /> <p className='text-[#605E5E] text-[14px] w-[161px] h-[20px]'>Thursday,  July 2, 2026</p></div>
                    </div>
                </div>
                <div className='flex gap-5 p-5'>
                    <button className='border border-[#28574E] text-white bg-[#28574E] w-[135px] h-[48px] flex items-center justify-center rounded-md'>View</button>

                   <button className='border border-[#28574E] bg-white text-[#28574E] w-[135px] h-[48px] flex items-center justify-center gap-2 rounded-md'><img src={Download} alt="Download" className='w-4 h-4' />PDF</button>
                </div>

            </div>

            <div className='w-[1124px] min-h-[126px] border border-[#D7D7D7] rounded-md bg-white flex justify-between items-center'>
                <div className='flex flex-row items-start justify-start gap-5 p-5'>
                    <div className='border border-[#EBEBEB] rounded-[12px] bg-[#EBEBEB] flex items-center justify-center w-[40px] h-[40px]'>
                        <img className="w-[28px] h-[28px]" src={CalenderDone} alt="" />
                    </div>
                    <div>
                        <h1 className='text-[#141313] text-[16px] w-[271px] h-[25px] font-bold'>Pediatrics Consultation</h1>
                        <p className='text-[#605E5E] text-[14px] w-[293px] h-[20px] mt-1'>Dr. Emily Carter · Pediatrics Department</p>
                        <div className='flex gap-[24px] mt-1'><img className='w-[19px] h-[19px]' src={CalenderTwo} alt="" /> <p className='text-[#605E5E] text-[14px] w-[161px] h-[20px] '>Thursday,  July 2, 2026</p></div>
                    </div>
                </div>
                 <div className='flex gap-5 p-5'>
                    <button className='border border-[#28574E] text-white bg-[#28574E] w-[135px] h-[48px] flex items-center justify-center rounded-md'>View</button>

                    <button className='border border-[#28574E] bg-white text-[#28574E] w-[135px] h-[48px] flex items-center justify-center gap-2 rounded-md'><img src={Download} alt="Download" className='w-4 h-4' />PDF</button>
                </div>

                
               
            </div>


            
        </section>
    </div>
  )
}