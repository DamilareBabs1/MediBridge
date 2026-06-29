import React, { useState } from 'react'
import Appointcomp from './Appointcomp'
import UpcomingAppoint from './UpcomingAppoint'
import CancelAppoint from './CancelAppoint'

export default function Appointment({ appointment, onCancel, cancelledAppointments, completedAppointments }) {
  const [ourAppointment, setOurAppointment] = useState("upcoming");

  return (
    <div className="flex flex-col gap-4">

      <div>
        <h1 className="text-[20px] font-bold">Appointments</h1>
        <p className="text-[15px] text-[#707070]">
          Manage your visits and continue your care.
        </p>
      </div>

      <button className="bg-[#28574E] text-white w-[234px] h-[54px] rounded-md">
        Book New Appointment
      </button>

      <div className="flex gap-4 m-8">
        <button
          onClick={() => setOurAppointment("upcoming")}
          className={`w-[210px] h-[48px] rounded-md ${
            ourAppointment === "upcoming"
              ? "bg-[#28574E] text-white"
              : "bg-[#F7F4F4] text-[#605E5E]"
          }`}
        >
          Upcoming ({appointment ? 1 : 0})
        </button>

        <button
          onClick={() => setOurAppointment("completed")}
          className={`w-[210px] h-[48px] rounded-md ${
            ourAppointment === "completed"
              ? "bg-[#28574E] text-white"
              : "bg-[#F7F4F4] text-[#605E5E]"
          }`}
        >
          Completed ({completedAppointments.length})
        </button>

        <button
          onClick={() => setOurAppointment("cancel")}
          className={`w-[210px] h-[48px] rounded-md ${
            ourAppointment === "cancel"
              ? "bg-[#28574E] text-white"
              : "bg-[#F7F4F4] text-[#605E5E]"
          }`}
        >
          Cancel ({cancelledAppointments.length})
        </button>
      </div>

      {ourAppointment === "upcoming" && appointment && (
        <UpcomingAppoint 
    selectedDoctor={appointment.doctor}
    selectedDepartment={appointment.department}
    selectedDate={appointment.date}
    selectedTime={appointment.time}
    reason={appointment.reason}
    onCancel={onCancel}
    status="Confirmed"
         />
      )}

      {ourAppointment === "completed" && <Appointcomp />}
      {ourAppointment === "cancel" && (<CancelAppoint cancelledAppointments={cancelledAppointments} />)}
    </div>
  );
}