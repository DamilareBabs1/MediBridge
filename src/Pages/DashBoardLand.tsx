import React from 'react'
import { RxDashboard } from "react-icons/rx";
import BackgoundImg from '../assets/MediBridgeNew.svg'
import BellNew from '../assets/bell.svg'
import ArrowLAnd from '../assets/ArrowLAnd.svg'
import IconWoman from '../assets/Ellipse 1962.svg'
import { useState } from 'react';
import DashBoard1 from './DashBoard1';
import Calender from '../assets/calendar-days.svg'
import Department from '../assets/hospital.svg'
import MedicalRecord from '../assets/file-text.svg'
import MessagingTee from '../assets/message-circle-more.svg'
import searchVector from '../assets/SearchVector.svg'
import AstroidAI from '../assets/astroidStar.svg'
import SettingG from '../assets/settings.svg'
import Signout from '../assets/sign out.svg'
import Appointment from './Appointment'
import DashBoard2 from './DashBoard2'
import { Divide } from 'lucide-react';
import DepartmentDASH from '../Pages/DepartmentDASH'

export default function DashBoardLand() {
    const [activeTab, setActiveTab] = useState<string>("dashboard");
    const [hasAppointment, setHasAppointment] = useState(false);
  return (
    <div className='w-full'>
        <div className='top w-[1440px] border border-[#E6EFF5] mt-4 p-4 h-[100px] flex items-center justify-center'>
            <div className='w-1/3'>
            <img src={BackgoundImg} alt="" />
            </div>            
            
            <div className='w-[1125px] flex items-center justify-between'>
            {activeTab === "dashboard" && <div>
                <h1 className='text-[#000000] text-[28px]'>Dashboard</h1></div>}
            
            {activeTab === "appointment" && <div className='relative gap-5'><img src={searchVector} alt="" className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" /> 
                <input className='border rounded-md w-[622px] h-[44px] border-[#E7E4E4] bg-white text-[#605E5E] pl-9' placeholder='Search condition, department.....' type="text" /></div>}

             {activeTab === "department" && <div className='relative gap-5'><img src={searchVector} alt="" className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" /> 
                <input className='border rounded-md w-[622px] h-[44px] border-[#E7E4E4] bg-white text-[#605E5E] pl-9' placeholder='Search condition, department.....' type="text" /></div>}



                {/* user avatar */}
                <div className='flex items-center gap-[32px] justify-between'>
                    <div className='border flex rounded-full w-[50px] h-[50px] border-[#F5F7FA] bg-[#F5F7FA] items-center justify-center'>
                    <img className='w-[24px] h-[24px]' src={BellNew} alt="" />
                </div>
                <div className='flex gap-[12px] items-center justify-center'>
                    <img className='w-[40px] h-[40px]' src={IconWoman} alt="" />
                    <div className='text-[14px]'>
                        <h1 className='text-[#0C0C0C]'>Serah Martins</h1>
                        <p className='text-[#666666]'>Sarahmartins32@gmailcom</p>
                    </div>
                    <div>
                        <img className='text-[#666666]' src={ArrowLAnd} alt="" />
                    </div>
                </div>

                </div>
            </div>


        </div>

        <div className='bottom flex justify-between'>
  <div className='w-[250px] p-5 h-[998px] border border-[#E6E3E3] rounded-sm flex flex-col gap-3 bg-white'>
            <button className="flex items-center justify-start gap-3 px-4 w-[214px] h-[44px] hover:bg-[#28574E] border-transparent hover:border-[#28574E] text-[#605E5E] hover:text-white text-[18px] rounded-md" onClick={()=> setActiveTab("dashboard")}><RxDashboard className='w-[24px] h-[24px]'/> Dashboard</button>
            <button className="flex items-center justify-start gap-3 px-4 w-[214px] h-[44px] hover:bg-[#28574E] border-transparent hover:border-[#28574E] text-[#605E5E] hover:text-white text-[18px] rounded-md" onClick={()=> setActiveTab("appointment")}><img className='w-[24px] h-[24px]' src={Calender} alt="" /> Appopintment</button>
            <button className="flex items-center justify-start gap-3 px-4 w-[214px] h-[44px] hover:bg-[#28574E] border-transparent hover:border-[#28574E] text-[#605E5E] hover:text-white text-[18px] rounded-md" onClick={()=> setActiveTab("department")}><img className='w-[24px] h-[24px]' src={Department} alt="" />Department</button>
            <button className="flex items-center justify-start gap-3 px-4 w-[214px] h-[44px] hover:bg-[#28574E] border-transparent hover:border-[#28574E] text-[#605E5E] hover:text-white text-[18px] rounded-md" onClick={()=> setActiveTab("Medical Records")}><img className='w-[24px] h-[24px]' src={MedicalRecord} alt="" /> Medical Records</button>
            <button className="flex items-center justify-start gap-3 px-4 w-[214px] h-[44px] hover:bg-[#28574E] border-transparent hover:border-[#28574E] text-[#605E5E] hover:text-white text-[18px] rounded-md" onClick={()=> setActiveTab("Messages")}><img className='w-[24px] h-[24px]' src={MessagingTee} alt="" /> Messages</button>
            <button className="flex items-center justify-start gap-3 px-4 w-[214px] h-[44px] hover:bg-[#28574E] border-transparent hover:border-[#28574E] text-[#605E5E] hover:text-white text-[18px] rounded-md" onClick={()=> setActiveTab("AI Support")}><img className='w-[24px] h-[24px]' src={AstroidAI} alt="" /> AI Support</button>
            <button className="flex items-center justify-start gap-3 px-4 w-[214px] h-[44px] hover:bg-[#28574E] border-transparent hover:border-[#28574E] text-[#605E5E] hover:text-white text-[18px] rounded-md" onClick={()=> setActiveTab("Account Settings")}><img className='w-[24px] h-[24px]' src={SettingG} alt="" /> Account Settings</button>
            
            <button className='flex gap-3 items-start justify-start text-[#E60E0E] mt-85'><img src={Signout} alt="" /> Log Out</button>
            </div>


            <div className='w-[1440px]'>
            { activeTab === "dashboard" && (
                hasAppointment? <DashBoard2 /> : <DashBoard1 onBookAppointment={() => setHasAppointment(true)} />
            )}
          

            {activeTab === "appointment" && <div><Appointment /></div>}

            {activeTab === "department" && <div><DepartmentDASH /></div>}
            </div>

        </div>
    </div>
  )
}