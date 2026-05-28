import React from 'react'
import Navbar from '../Pages/Navbar'
import ImageIcon from '../assets/Patient&Doctor.svg'
import DateCalender from '../assets/TimeFrame!.svg'
import AIFeatures from '../assets/AIFrame!.svg'
import MessageFunc from '../assets/MessagesFrame!.svg'
import AnonyLock from '../assets/Vector.svg'
import BrainGent from '../assets/BrainVector.svg'
import ThickGent from '../assets/CheckVector.svg'
import CHatGH from '../assets/ChatWithAI.svg'
import Cardiology from '../assets/Cardio.svg'
import Pediatrics from '../assets/Pedio.svg'
import MentalHealth from '../assets/Mentheal.svg'
import Dentistry from '../assets/Dentistry.svg'
import Orthopedics from '../assets/Othoped.svg'
import GeneralPractice from '../assets/GeneralPractice.svg'
import OBGYN from '../assets/Ob-Gyn.svg'
import Ophthalmology from '../assets/Ophtha.svg'
import DirectinalIcon from '../assets/DirectionTag.svg'
import FiveStar from '../assets/5Star.svg'
import Jordan from '../assets/JordanA.svg'
import PriyaS from '../assets/PriyaS.svg'
import Marcus from '../assets/MarcusW.svg'
import { Link } from 'react-router'

export default function Hero() {
  return (
    <div className='w-full'>
   <section className='flex flex-col items-center justify-center w-full p-12 text-center gap-23 text-white -mt-[-10px] bg-[#28574E] relative h-[80vh]'>
    <Navbar />
      <div className='flex flex-col w-[780px] h-[60px]'>
        <h1 className='text-[60px] text-[#FFFFFF]'>Healthcare That Connects You</h1>
        <p className='w-[666px] h-[50px] text-[#DAD8D8] mt-6 pl-15'>Book appointments, talk with trusted doctors, receive support, and get instant AI health guidance in one calm experience.</p>
      </div>

            <div className='flex items-center w-full h-[720px] mt-[-30px] justify-center gap-[30px]'>
                <button className='w-[236px] h-[54px] bg-[#FFFFFF] text-[#28574E] rounded-[8px] hover:bg-gray-200'>Book Appointment</button>   
                <Link to="/ai-support"><button className='w-[236px] h-[54px] bg-[#28574E] border border-[#FFFFFF] text-[#FFFFFF] rounded-[8px] hover:bg-gray-200'>Chat with AI Support</button></Link>
            </div>
    </section>
      <div className='absolute left-1/2 -translate-x-1/2 bottom-[-37px] w-[908px] h-[352px] flex justify-center'>
      <img className='w-full object-contain' src={ImageIcon} alt=""/></div>
      
      {/* WHY MEDIBRIDGE SECTION */}

          <section>
            <div className='flex flex-col pt-48 items-center justify-center gap-2'>
                <p className='bg-[#DCF2EE] text-[#28574E] rounded-3xl flex items-center w-[181px] h-[43px] justify-center'>Why MediBridge</p>
                <h1 className='text-[#141313] text-center text-[34px] h-[40px] font-bold items-center justify-center'>A calmer way to care for yourself.</h1>
                <p className='text-[#757575] text-[20px] pl-[180px] text-center '>One platform connecting patients with the great care, exactly when they need it.</p>
            </div>

            <div className='flex flex-row items-center justify-center mt-11 gap-[58px]'>
              <div className='flex flex-col w-[352px] h-[235px] rounded-xl bg-[#FFFFFF] border-[#D1D5D5] border-2 items-center justify-center'>
                <img src={DateCalender} alt="" />
                <h3 className='mt-4 text-[#000000] text-[24px]'>Easy Booking</h3>
                <p className='mt-4 pl-10 pr-10 text-[#757575] text-[18px]'>Find and schedule appointments with verified doctors in minutes</p>
              </div>
              <div className='flex flex-col w-[352px] h-[235px] rounded-xl bg-[#FFFFFF] border-[#D1D5D5] border-2 items-center justify-center'>
                <img src={AIFeatures} alt="" />
                <h3 className='mt-4 text-[#000000] text-[24px]'>AI Support</h3>
                <p className='mt-4 pl-6 pr-10 text-[#757575] text-[18px]'>Get instant calm responses to your health questions 24/7.</p>
              </div>
              <div className='flex flex-col w-[352px] h-[235px] rounded-xl bg-[#FFFFFF] border-[#D1D5D5] border-2 items-center justify-center'>
                <img src={MessageFunc} alt="" />
                <h3 className='mt-4 text-[#000000] text-[24px]'>Message your care team</h3>
                <p className='mt-4 pl-5 pr-10 text-[#757575] text-[18px]'>Secure conversations with doctors, with read receipts and attachments.</p>
              </div>
            </div>
          </section>

          {/* AI SUPPORT SECTION */}

          <section className='w-full mt-29 flex flex-row gap-[80px]'>
            <div className='w-[482px] pl-30'>
              <p className='bg-[#DCF2EE] flex text-[#28574E] text-[15px] rounded-xl w-[134px] h-[43px] items-center justify-center'>AI Support</p>
              <h1 className='flex text-[#141313] text-[28px] font-semibold mt-2'>Ask anything about your health instantly.</h1>
              <p className='flex text-[#757575] text-[16px] mt-2'>Get calm, private support from MediBridge AI before you even sign up. Talk through symptoms, prepare for a visit, or just think out loud.</p>
             <div className='flex flex-col gap-5 mt-5'>
               <div className='flex items-start justify-start gap-2'>
                <img src={AnonyLock} alt="" />
                <p className='text-[#494949]'>Anonymous <span> — </span> nothing leaves this device.</p>
              </div>
              <div className='flex items-start justify-start gap-2'>
                <img src={BrainGent} alt="" />
                <p className='text-[#494949]'>Gentle and non-judgemental, 24/7</p>
              </div>
              <div className='flex items-start justify-start gap-2'>
                <img src={ThickGent} alt="" />
                <p className='text-[#494949]'>Not a replacement for medical care.</p>
              </div>
              <Link to="/ai-support"><button className='items-start w-[215px] text-[18px] h-[54px] justify-start border-[8px] border-[#28574E] bg-[#28574E] text-white rounded-xl'>Start Free AI Chat</button></Link>
             </div>
             </div>

             <div className='w-[678.4px] pl-[90px]'>
              <img src={CHatGH} alt="" />
             </div>
          </section>

        {/* SPECIALTY CARE SECTION */}

          <section className='w-full bg-[#28574E] text-[#FFFFFF] flex items-center justify-center mt-15'>
            <div className='flex flex-col items-center justify-center gap-4 pt-20 gap-[20px] pb-20'>
              <p className='text-[24px] bg-[#DCF2EE] text-[#28574E] w-[175px] flex text-[5px] items-center rounded-2xl justify-center'>Specialty care</p>
              <p className='text-[24px]'>10+ departments. one unified record.</p>
              <div className='grid grid-cols-4 gap-[24px] mb-8 mt-10'>
                <Link to="/cardiology"><div className='flex items-center gap-6 justify-center text-[#191C1D] flex-col bg-[#ECEEEE] rounded-xl w-[243px] h-[130.5px]'>
                <img src={Cardiology} alt="" />
                <p className='text-[15px]'>Cardiology</p>
              </div></Link>
              <div className='flex items-center gap-6 justify-center text-[#191C1D] flex-col bg-[#ECEEEE] rounded-xl w-[243px] h-[130.5px]'>
                <img src={Pediatrics} alt="" />
                <p className='text-[15px]'>Pediatrics</p>
              </div>
              <div className='flex items-center gap-6 justify-center text-[#191C1D] flex-col bg-[#ECEEEE] rounded-xl w-[243px] h-[130.5px]'>
                <img src={MentalHealth} alt="" />
                <p className='text-[15px]'>Mental Health</p>
              </div>
              <div className='flex items-center gap-6 justify-center text-[#191C1D] flex-col bg-[#ECEEEE] rounded-xl w-[243px] h-[130.5px]'>
                <img src={Dentistry} alt="" />
                <p className='text-[15px]'>Dentistry</p>
              </div>
              <div className='flex items-center gap-6 justify-center text-[#191C1D] flex-col bg-[#ECEEEE] rounded-xl w-[243px] h-[130.5px]'>
                <img src={Orthopedics} alt="" />
                <p className='text-[15px]'>Orthopedics</p>
              </div>
              <div className='flex items-center gap-6 justify-center text-[#191C1D] flex-col bg-[#ECEEEE] rounded-xl w-[243px] h-[130.5px]'>
                <img src={GeneralPractice} alt="" />
                <p className='text-[15px]'>General Practice</p>
              </div>
              <div className='flex items-center gap-6 justify-center text-[#191C1D] flex-col bg-[#ECEEEE] rounded-xl w-[243px] h-[130.5px]'>
                <img src={OBGYN} alt="" />
                <p className='text-[15px]'>OB-GYN</p>
              </div>
              <div className='flex items-center gap-6 justify-center text-[#191C1D] flex-col bg-[#ECEEEE] rounded-xl w-[243px] h-[130.5px]'>
                <img src={Ophthalmology} alt="" />
                <p className='text-[15px]'>Ophthalmology</p>
              </div>
             </div>
              <Link to="/DepartmentPage"><button className='bg-[#28574E] w-[281px] h-[54px] text-white rounded-md border-[#FFFFFF] text-[#FFFFFF] hover:bg-white hover:text-green-500 border'>Explore all Departments</button></Link>
            </div>
          </section>

          {/* PATIENT STORIES SECTION */}
          <section className='w-full bg-[#F7F7F7] flex justify-center pt-10 px-15 pb-20'>
            <div className='w-full max-w-[1238px] flex flex-col gap-8'>
              <p className='text-[#28574E] text-[13px] bg-[#DCF2EE] w-[163px] h-[43px] items-center justify-center flex rounded-xl font-medium'>Patient stories</p>
            <div className='flex items-center justify-between'>
              <h1 className='text-[36px] w-[470px] font-bold text-[#141313]'>Real people. Real care. Real coordination</h1>
                <img src={DirectinalIcon} alt="" />
            </div>

           <div className='grid grid-cols-3 gap-6'>

        {/* CARD 1 */}

        <div className='border border-[#DDDDDD] bg-[#EEEDED] w-[357px] h-[236px] rounded-xl p-6 flex flex-col gap-4'>
         <img className='w-[130px] h-[21.15px]' src={FiveStar} alt="" />
          <p className='text-[14px] text-[#403F3F]'>"I researched my mother's cardiology visit in under a minute. The whole family is on it now"</p>
        <div className='mt-5'>
           <hr />
        </div>

        <div className='flex items-center gap-3 mt-4'>
          <img src={Jordan} alt="" />

          <div>
            <p className='text-[14px] font-semibold'>Jordan A.</p>
            <p className='text-sm text-[10px] text-[#656565]'>Family caregiver</p>
          </div>
        </div>
      </div>

      {/* CARD 2 */}

      <div className='border border-[#DDDDDD] bg-[#EEEDED] w-[357px] h-[236px] rounded-xl p-6 flex flex-col gap-4'>
        <img className='w-[130px] h-[21.15px]' src={FiveStar} alt="" />

        <p className='text-[14px] text-[#403F3F]'>
          "MediCare isn't just a hospital, it's a partner in my family's health. The pediatrics team is simply the best in the state."
        </p>
         <div className='mt-1'>
           <hr />
        </div>

        <div className='flex items-center gap-3 mt-3'>
          <img src={PriyaS} alt="" />

          <div>
            <p className='text-[14px] font-semibold'>Priya S.</p>
            <p className='text-sm text-[10px] text-[#656565]'>Patient</p>
          </div>
        </div>
      </div>

      {/* CARD 3 */}

      <div className='bg-[#EEEDED] border border-[#DDDDDD] w-[357px] h-[236px] rounded-xl p-6 flex flex-col gap-4'>
        <img className='w-[130px] h-[21.15px]' src={FiveStar} alt="" />

        <p className='text-[14px] text-[#403F3F]'>
          "The AI support helped me prep questions before my visit. My doctor noticed the difference."
        </p>

        <hr className='mb-4' />

        <div className='flex items-center gap-3'>
          <img src={Marcus} alt="" />

          <div>
            <p className='text-[14px] font-semibold'>Marcus D.</p>
            <p className='text-sm text-[10px] text-[#656565]'>Caregiver</p>
          </div>
        </div>
      </div>
      </div>
     </div>

     
  </section>

{/* FAQ SECTION */}

<section className='w-full flex justify-center mt-20 mb-20'>
  <div className='w-[900px] flex flex-col items-center'>

    <p className='bg-[#DCF2EE] rounded-3xl flex items-center justify-center text-[#28574E] text-[18px] w-[84px] h-[43px]'>FAQ</p>

    <h1 className='text-[32px] font-bold text-[#141313] mt-4'>Frequently Asked Questions</h1>

    <div className='w-full flex flex-col gap-4 mt-10'>

      {/* FAQ 1 */}

 <details className='bg-white border border-[#D9D9D9] rounded-xl p-5 group'>

  <summary className='flex items-center justify-between list-none cursor-pointer'>

    <span className='font-semibold w-[600px] h-[20px] text-[20px] text-[#141313]'>Can I use the AI assistant for free?</span><span className='text-[24px] text-[#28574E] transition-transform group-open:rotate-180'>⌄</span></summary>

  <p className='mt-4 text-[#757575] text-[16px]'>
    Yes. MediBridge AI support is available for free and can help answer
    general health-related questions anytime.
  </p>

</details>

      {/* FAQ 2 */}

      <details className='bg-white border border-[#D9D9D9] rounded-xl p-5 cursor-pointer'>
        <summary className='flex items-center justify-between list-none cursor-pointer'>
         <span className='font-semibold w-[600px] h-[20px] text-[20px] text-[#141313]'> What is a patient ID and how do I find mine?</span><span className='text-[24px] text-[#28574E] transition-transform group-open:rotate-180'>⌄</span></summary>

        <p className='mt-4 text-[#757575] text-[16px]'>
          A patient ID is a unique identifier assigned to each patient.
          You can find yours on your medical records or by contacting support.
        </p>
      </details>

      {/* FAQ 3 */}

       <details className='bg-white border border-[#D9D9D9] rounded-xl p-5 cursor-pointer'>
        <summary className='flex items-center justify-between list-none cursor-pointer'>
         <span className='font-semibold w-[600px] h-[20px] text-[20px] text-[#141313]'>How do I book an appointment?</span><span className='text-[24px] text-[#28574E] transition-transform group-open:rotate-180'>⌄</span></summary>

        <p className='mt-4 text-[#757575] text-[16px]'>
          Click the "Book Appointment" button, choose your doctor and preferred
          time, then confirm your booking.
        </p>
      </details>

    </div>
  </div>
</section>

<section className='bg-white flex items-center justfify-center w-full'>
  <div className='flex gap-[20px] flex-col bg-[#28574E] mx-auto w-6xl h-[291px] rounded-3xl items-center justify-center'>
    <h1 className='text-[39px] text-[#FFFFFF]'>
      Stay informed on your health
    </h1>
    <p className='text-[#DAD8D8] w-3xl'>Get the latest health tips, medical news, and app updates delivered to your inbox once a week.</p>

      <div className='flex mt-3 gap-4'>
      <input className='pl-3 border-[#FFFFFF] border w-[322px] h-[54px] shadow-[#BFC8CA] bg-[#28574E] text-[14px] text-[#DAD8D8] rounded-xl' type="email" placeholder='Enter your email address' />
      <button className='bg-[#FFFFFF] w-[174px] h-[54px] text-[#28574E] text-[14px] rounded-xl border hover:bg-[#28574E] hover:text-white'>Subscribe</button>

    </div>


  </div>

</section>
</div>
  )
}