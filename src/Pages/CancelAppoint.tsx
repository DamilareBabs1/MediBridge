import React from 'react'
import CalenarX from '../assets/calendar-xDASH.svg'

export default function CancelAppoint({ cancelledAppointments }) {

  if (cancelledAppointments.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center mt-20">
        <h1>No cancelled appointments</h1>
        <p>Any cancelled appointments will show here.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {cancelledAppointments.map((appointment, index) => {

        const safeDate = new Date(appointment.date);

        return (

          <section
            key={index}
            className="border border-[#D7D7D7] rounded-md bg-white w-[1124px] h-[169px] m-8"
          >

            <div className="flex justify-between items-center p-8">

              <div className="flex gap-5">

                <img
                  src={appointment.doctor.image}
                  className="w-[85px] h-[83px]"
                />

                <div>

                  <h1>{appointment.doctor.name}</h1>

                  <p>{appointment.department}</p>

                  <p>
                    {safeDate.toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>

                  <p>{appointment.time}</p>

                </div>

              </div>

              <p className="bg-red-100 text-red-600 rounded-xl px-5 py-2">
                Cancelled
              </p>

            </div>

          </section>

        );
      })}
    </div>
  );
}