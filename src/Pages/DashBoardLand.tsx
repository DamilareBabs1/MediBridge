import React, { useState, useEffect } from "react";
import { RxDashboard } from "react-icons/rx";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import BellNew from "../assets/bell.svg";
import ArrowLAnd from "../assets/ArrowLAnd.svg";
import IconWoman from "../assets/Ellipse 1962.svg";
import DashBoard1 from "./DashBoard1";
import DashBoard2 from "./DashBoard2";
import Appointment from "./Appointment";
import DepartmentDASH from "../Pages/DepartmentDASH";
import MedicalAP1 from "./MedicalAP1";
import MessageAI from "../Pages/MessageAI";
import AiDashboard from "./AiDashboard";
import Calender from "../assets/calendar-days (1)New.svg";
import Department from "../assets/hospital (1)New.svg";
import MedicalRecord from "../assets/file-text (1)New.svg";
import MessagingTee from "../assets/message-circle-more (2).svg";
import searchVector from "../assets/SearchVector.svg";
import AstroidAI from "../assets/astroidNew1.svg";
import Signout from "../assets/sign out.svg";
import AccountSetting from '../assets/settings (1)New.svg'
import DASHDASH from '../assets/FIRSTPArt.svg'
import BookAppointModal1 from "./BookAppointModal1";
import BookAppointModal2 from "./BookAppointModal2";
import BookAppoint3 from "./BookAppoint3";
import BookAppoint4 from "./BookAppoint4";
import BookAppoint5 from "./BookAppoint5";
import AppointComf from "./AppointComf";
import DoctorOne from "../assets/Dr.AmeliaChan.svg"



export default function DashBoardLand() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [selectedDepartment, setSelectedDepartment] = useState(null)
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [hasAppointment, setHasAppointment] = useState(false);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [step, setStep] = useState(1);
  const [reason, setReason] = useState("");
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showAppointmentDetails, setShowAppointmentDetails] = useState(false);
  const [appointment, setAppointment] = useState(null);
  const [cancelledAppointments, setCancelledAppointments] = useState([]);
  const [completedAppointments, setCompletedAppointments] = useState([]);

  const handleCancelAppointment = () => {
     if (appointment) {
    setCancelledAppointments((prev) => [...prev, appointment]);
  }
  setAppointment(null);
  setHasAppointment(false);
};
  
  
const users = [
  {
    name: "Sarah Martins",
    email: "Sarahmartins32@gmail.com",
    image: IconWoman,
  },
  {
    name: "John Doe",
    email: "johndoe@gmail.com",
    image: DoctorOne
  },
];

const [currentUser, setCurrentUser] = useState(users[0])

 const TabButton = ({ label, tabKey, icon }) => (
  <button
    onClick={() => setActiveTab(tabKey)}
    className={`flex items-center gap-3 px-4 py-3 w-full rounded-md text-left transition-all duration-200 ${
      activeTab === tabKey ? "bg-[#E6F2EF] text-[#28574E] font-semibold" : "text-[#605E5E]"
    }`}
  >
    {icon}
    {label}
  </button>
);

  useEffect(() => {
  if (showAppointmentModal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}, [showAppointmentModal]);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
  <div className="w-auto h-[90px] flex items-center justify-between border border-[#E6EFF5] p-3">
    <img src={DASHDASH} alt="" />
    
    {activeTab === "dashboard" && <div><h1 className="text-[#000000] text-[25px] font-bold">Dashboard</h1></div>}
    
    {activeTab === "appointment" && ( <div className="relative"><img src={searchVector} alt="" className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" />
    <input className="border rounded-md w-[622px] h-[44px] border-[#E7E4E4] bg-white text-[#605E5E] pl-10" placeholder="Search condition, department....." type="text" /></div> )}
    
    {activeTab === "department" && ( <div className="relative"><img src={searchVector} alt="" className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" />
    <input className="border rounded-md w-[622px] h-[44px] border-[#E7E4E4] bg-white text-[#605E5E] pl-10" placeholder="Search condition, department....." type="text" /></div> )}
    
    {activeTab === "Medical Records" && ( <div className="relative"><img src={searchVector} alt="" className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" />
    <input className="border rounded-md w-[622px] h-[44px] border-[#E7E4E4] bg-white text-[#605E5E] pl-10" placeholder="Search condition, department....." type="text" /></div> )}
    
    {activeTab === "Messages" && ( <h1 className="text-[#000000] text-[28px]">Messages</h1> )}
    
    {activeTab === "AI Support" && ( <div className="relative"><img src={searchVector} alt="" className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" />
    <input className="border rounded-md w-[622px] h-[44px] border-[#E7E4E4] bg-white text-[#605E5E] pl-10" placeholder="Search condition, department....." type="text" /></div> )}
    
    {activeTab === "Account Settings" && ( <div className="relative"><img src={searchVector} alt="" className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" />
    <input className="border rounded-md w-[622px] h-[44px] border-[#E7E4E4] bg-white text-[#605E5E] pl-10" placeholder="Search condition, department....." type="text" /></div> )}

    {/* USER AREA */}
    <div className="flex items-center gap-[32px]">
      <div className="border flex rounded-full w-[50px] h-[50px] border-[#F5F7FA] bg-[#F5F7FA] items-center justify-center"><img className="w-[24px] h-[24px]" src={BellNew} alt="" /></div>

      <div className="flex gap-[12px] items-center">
  <img
    className="w-[40px] h-[40px] rounded-full"
    src={currentUser.image}
    alt={currentUser.name}
  />

  <div className="text-[14px]">
    <h1 className="text-[#0C0C0C]">{currentUser.name}</h1>
    <p className="text-[#666666]">{currentUser.email}</p>
  </div>

  <div className="relative">
    <button
      onClick={() => setShowUserMenu(!showUserMenu)}
      className="flex items-center justify-center"
    >
      {showUserMenu ? (
        <FiChevronUp size={20} />
      ) : (
        <FiChevronDown size={20} />
      )}
    </button>

    {showUserMenu && (
      <div className="absolute top-12 right-0 w-[220px] bg-white border border-[#E6E3E3] rounded-lg shadow-lg z-50">
        {users.map((user) => (
          <button
            key={user.email}
            onClick={() => {
              setCurrentUser(user);
              setShowUserMenu(false);
            }}
            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100"
          >
            <img
              src={user.image}
              alt={user.name}
              className="w-8 h-8 rounded-full"
            />

            <div className="text-left">
              <p>{user.name}</p>
              <p className="text-xs text-gray-500">{user.email}</p>
            </div>
          </button>
        ))}

        <button className="w-full text-left px-4 py-3 hover:bg-gray-100 border-t">
          Add Another Account
        </button>
        <button className="w-full text-left px-4 py-3 hover:bg-gray-100 ">
          Log Out
        </button>
      </div>
    )}
  </div>
</div>    
</div>
  </div>

  {/* SIDEBAR + CONTENT */}
  <div className="flex w-full gap-6">

    {/* SIDEBAR */}
    <div className="w-[330px] flex-shrink-0 min-h-screen flex flex-col justify-between border border-[#E6E3E3] shadow-[#0000001A]">
      <div className="flex flex-col gap-2 mt-7">

        <button onClick={() => setActiveTab("dashboard")} className={`flex items-center gap-3 px-4 h-[44px] rounded-md ${activeTab === "dashboard" ? "bg-[#28574E] text-white" : "text-[#605E5E]"}`}>
          <RxDashboard size={20} />Dashboard
        </button>

        <button onClick={() => setActiveTab("appointment")} className={`flex items-center gap-3 px-4 h-[44px] rounded-md ${activeTab === "appointment" ? "bg-[#28574E] text-white" : "text-[#605E5E]"}`}>
          <img src={Calender} alt="" />Appointment
        </button>

        <button onClick={() => setActiveTab("department")} className={`flex items-center gap-3 px-4 h-[44px] rounded-md ${activeTab === "department" ? "bg-[#28574E] text-white" : "text-[#605E5E]"}`}>
          <img src={Department} alt="" />Department
        </button>

        <button onClick={() => setActiveTab("Medical Records")} className={`flex items-center gap-3 px-4 h-[44px] rounded-md ${activeTab === "Medical Records" ? "bg-[#28574E] text-white" : "text-[#605E5E]"}`}>
          <img src={MedicalRecord} alt="" />Medical Records
        </button>

        <button onClick={() => setActiveTab("Messages")} className={`flex items-center gap-3 px-4 h-[44px] rounded-md ${activeTab === "Messages" ? "bg-[#28574E] text-white" : "text-[#605E5E]"}`}>
          <img src={MessagingTee} alt="" />Messages
        </button>

        <button onClick={() => setActiveTab("AI Support")} className={`flex items-center gap-3 px-4 h-[44px] rounded-md ${activeTab === "AI Support" ? "bg-[#28574E] text-white" : "text-[#605E5E]"}`}>
          <img src={AstroidAI} alt="" />AI Support
        </button>

         <button onClick={() => setActiveTab("Account Settings")} className={`flex items-center gap-3 px-4 h-[44px] rounded-md ${activeTab === "Account Settings" ? "bg-[#28574E] text-white" : "text-[#605E5E]"}`}>
          <img src={AccountSetting} alt="" />Account Settings
        </button>
      </div>

      <button className="flex gap-3 items-center text-[#E60E0E]">
        <img src={Signout} alt="" />Log Out
      </button>
    </div>

    {/* MAIN CONTENT */}
    <div className="flex-1 min-w-0">
      
      {activeTab === "dashboard" &&(hasAppointment ? (<DashBoard2 appointment={appointment} />) : (<DashBoard1 currentUser={currentUser} onBookAppointment={() => { setShowAppointmentModal(true); setStep(1);}} /> ))}

      {activeTab === "appointment" && <Appointment appointment={appointment} cancelledAppointments={cancelledAppointments} completedAppointments={completedAppointments} onCancel={handleCancelAppointment} />}
      {activeTab === "department" && <DepartmentDASH />}
      {activeTab === "Medical Records" && <MedicalAP1 />}
      {activeTab === "Messages" && <MessageAI />}
      {activeTab === "AI Support" && <AiDashboard />}
    </div>
    
      {showAppointmentModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-[594px] max-h-[90vh] overflow-hidden flex flex-col">
            <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide p-6">

        {step === 1 && (<BookAppointModal1 selectedDepartment={selectedDepartment} setSelectedDepartment={setSelectedDepartment} onNext={() => setStep(2)} onClose={() => setShowAppointmentModal(false)} /> )}

        {step === 2 && (<BookAppointModal2 selectedDepartment={selectedDepartment} selectedDoctor={selectedDoctor} setSelectedDoctor={setSelectedDoctor} onBack={() => setStep(1)} onNext={() => setStep(3)} onClose={() => setShowAppointmentModal(false)} />)}

        {step === 3 && (<BookAppoint3 selectedDoctor={selectedDoctor} selectedDate={selectedDate} setSelectedDate={setSelectedDate} selectedTime={selectedTime} setSelectedTime={setSelectedTime} onBack={() => setStep(2)} onNext={() => setStep(4)} onClose={() => setShowAppointmentModal(false)} />)}
          
        {step === 4 && (<BookAppoint4 reason={reason} setReason={setReason} onBack={() => setStep(3)} onNext={() => setStep(5)} onClose={() => setShowAppointmentModal(false)} />)}
          
        {step === 5 && (<BookAppoint5 selectedDepartment={selectedDepartment} selectedDoctor={selectedDoctor} selectedDate={selectedDate} selectedTime={selectedTime} reason={reason} onBack={() => setStep(4)} onNext={() => {const newAppointment = {department: selectedDepartment, doctor: selectedDoctor, date: selectedDate, time: selectedTime, reason,}; setAppointment(newAppointment); setHasAppointment(true); setStep(6);}} onClose={() => setShowAppointmentModal(false)} />)}
          
        {step === 6 && (<AppointComf onClose={() => setShowAppointmentModal(false)} onViewAppointment={() =>{setShowAppointmentModal(false); setHasAppointment(true); setShowAppointmentDetails(true); setActiveTab("appointment");}} selectedDoctor={selectedDoctor} selectedDate={selectedDate} selectedTime={selectedTime} />)}

        </div>
        </div>
      </div>
)}
  </div>
  </div>
  )
  };
