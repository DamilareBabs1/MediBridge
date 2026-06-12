import React from 'react'
import cardioheart from '../assets/CardiologyNew.svg'
import HeartMag from '../assets/HEartIMage.svg'
import CancelX from '../assets/hugeicons_cancel-01.svg'

type Props = {
  onClose: () => void
}

export default function CardiologyPage({ onClose }: Props) {
  return (
    <section>
      <div className="w-full h-auto border-gray-100 bg-white flex flex-col rounded-md">

      {/* HEADER */}
      <div className="flex justify-between items-center">

        <div className="flex items-center gap-3">
          <img src={cardioheart} className="w-6 h-6" />
          <h1 className="text-xl font-semibold">Cardiology</h1>
        </div>

        <button onClick={onClose}>
          <img src={CancelX} className="w-5 h-5" />
        </button>

      </div>

      <hr className="text-[#E7E4E4] my-6" />

      <img src={HeartMag} className="w-[423px] h-[217px] rounded-lg" />

      <h2 className="mt-5 text-[#28574E] text-[20px]">
        Department Overview
      </h2>

      <p className="text-[21px] text-gray-600 mt-2">
        The Cardiology department specializes in diagnosing and treating conditions related to the heart and cardiovascular system, providing expert care for hypertension, arrhythmias, and coronary diseases. Our multidisciplinary approach ensures that patients receive comprehensive care from initial diagnosis through long-term management and rehabilitation.
      </p>

      <h3 className="mt-5 text-[#28574E] text-[20px]">Services Offered</h3>

      
      <div className="flex gap-[18px] mt-3">

        <div className="flex flex-col gap-4 flex-1">
          <label><input type="checkbox" />   ECG (Heart test)</label>
          <label><input type="checkbox" />   Heart monitoring</label>
          <label><input type="checkbox" />   Cardiac Consultation</label>
        </div>

        <div className="flex flex-col gap-3 items-center flex-1">
          <label><input type="checkbox" />   Heart screening</label>
          <label><input type="checkbox" />   Blood Pressure</label>
        </div>

      </div>

      <div className="flex justify-between gap-[10px] mt-15">
        <button onClick={onClose} className="w-[181px] h-[48px] border border-[#4D5461] text-[#4D5461] bg-white px-6 py-2 rounded-md">
          Cancel
        </button>

        <button className="bg-[#28574E] w-[216px] h-[48px] pr-10 text-white px-6 py-2 rounded-md">
          Book Appointment
        </button>
      </div>

    </div>
 
    </section>
     )
}