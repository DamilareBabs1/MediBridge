import DateCalender from "../assets/TimeFrame!.svg";
import AIFeatures from "../assets/AIFrame!.svg";
import MessageFunc from "../assets/MessagesFrame!.svg";
import AnonyLock from "../assets/Vector.svg";
import BrainGent from "../assets/BrainVector.svg";
import ThickGent from "../assets/CheckVector.svg";
import CHatGH from "../assets/ChatWithAI.svg";
import { Link } from "react-router-dom";

export default function MediAndAI() {
  return (
    <div className="bg-[#F7F7F7] pt-20 gap-10 items-center justify-center w-full flex flex-col">

      {/* WHY MEDIBRIDGE SECTION */}
      <section className="pt-20">
        <div className="flex flex-col pt-20 items-center justify-center gap-2">
          <p className="bg-[#DCF2EE] text-[#28574E] rounded-3xl flex items-center w-[181px] h-[43px] justify-center">
            Why MediBridge
          </p>

          <h1 className="text-[#141313] text-center text-[34px] font-bold">
            A calmer way to care for yourself.
          </h1>

          <p className="text-[#757575] text-[20px] text-center max-w-2xl">
            One platform connecting patients with great care, exactly when they need it.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center mt-11 gap-[58px]">
          <div className="flex flex-col w-[352px] h-[235px] rounded-xl bg-white border border-[#D1D5D5] items-center justify-center">
            <img src={DateCalender} alt="calendar" />
            <h3 className="mt-4 text-[24px]">Easy Booking</h3>
            <p className="mt-4 px-6 text-[#757575] text-[18px] text-center">
              Find and schedule appointments with verified doctors in minutes
            </p>
          </div>

          <div className="flex flex-col w-[352px] h-[235px] rounded-xl bg-white border border-[#D1D5D5] items-center justify-center">
            <img src={AIFeatures} alt="ai features" />
            <h3 className="mt-4 text-[24px]">AI Support</h3>
            <p className="mt-4 px-6 text-[#757575] text-[18px] text-center">
              Get instant calm responses to your health questions 24/7.
            </p>
          </div>

          <div className="flex flex-col w-[352px] h-[235px] rounded-xl bg-white border border-[#D1D5D5] items-center justify-center">
            <img src={MessageFunc} alt="messages" />
            <h3 className="mt-4 text-[24px]">Message your care team</h3>
            <p className="mt-4 px-6 text-[#757575] text-[18px] text-center">
              Secure conversations with doctors, with read receipts and attachments.
            </p>
          </div>
        </div>
      </section>

      {/* AI SUPPORT SECTION */}
      <section className="w-full pt-20 pb-20 flex flex-col md:flex-row gap-[80px] bg-gray-100">

        <div className="w-full md:w-[482px] px-6 md:pl-30">
          <p className="bg-[#DCF2EE] text-[#28574E] text-[15px] rounded-xl w-[134px] h-[43px] flex items-center justify-center">
            AI Support
          </p>

          <h1 className="text-[#141313] text-[28px] font-semibold mt-2">
            Ask anything about your health instantly.
          </h1>

          <p className="text-[#757575] text-[16px] mt-2">
            Get calm, private support from MediBridge AI before you even sign up.
          </p>

          <div className="flex flex-col gap-5 mt-5">

            <div className="flex gap-2 items-start">
              <img src={AnonyLock} alt="anonymous" />
              <p className="text-[#494949]">
                Anonymous — nothing leaves this device.
              </p>
            </div>

            <div className="flex gap-2 items-start">
              <img src={BrainGent} alt="gentle ai" />
              <p className="text-[#494949]">
                Gentle and non-judgemental, 24/7
              </p>
            </div>

            <div className="flex gap-2 items-start">
              <img src={ThickGent} alt="warning" />
              <p className="text-[#494949]">
                Not a replacement for medical care.
              </p>
            </div>

            <Link to="/ai-support">
              <button className="w-[215px] h-[54px] bg-[#28574E] text-white rounded-xl">
                Start Free AI Chat
              </button>
            </Link>

          </div>
        </div>

        <div className="w-full md:w-[678px] flex justify-center">
          <img src={CHatGH} alt="chat ui" />
        </div>

      </section>

    </div>
  );
}