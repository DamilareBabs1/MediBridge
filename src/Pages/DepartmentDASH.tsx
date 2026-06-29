import React from 'react'
import searchVector from '../assets/SearchVector.svg'
import {useDepartmentFilter}from "../Hooks/UseDepartmentFilter";
import { useDeptModal } from "../Hooks/UseDeptModal";
import DepartmentCard from '../Pages/Auth/DepartmentCard';
import CardiologyPage from './CardiologyPage';
import NeurologyPage from './NeurologyPage';


export default function DepartmentDASH() {
const { search, setSearch, filteredCards } = useDepartmentFilter();
const { isModalOpen, selectedCard, openModal, closeModal } = useDeptModal();
  return (
    <div>
        <section className='flex justify-between items-center p-10'>
            <div className='flex flex-col'>
                <h1>Departments</h1>
                <p>Find the right department for your healthcare needs</p>
            </div>
            <button className='border border-[#FFFFFF] bg-[#28574E] rounded-md text-white text-center w-[194px] h-[54px]'>Book Appointment</button>
        </section>
        <section className='flex w-[1126px] h-[125px] m-4 border border-[#E6E3E3] rounded-md'>
            <div className='p-5 flex gap-2 w-full '>
                <div className='flex flex-col w-[817px] h-[66px] gap-[6px]'>
                <h1>Search</h1>
                <div className='relative gap-5'><img src={searchVector} alt="" className="absolute left-3 top-1/2 -translate-y-1/2 w-[20px] h-[20px]" /> 
                <input value={search} onChange={(e)=> setSearch(e.target.value)} className='border rounded-md w-[622px] h-[44px] border-[#E6E3E3] bg-white text-[#605E5E] pl-9' placeholder='Search condition, department.....' type="text" /></div>
            </div>
            <div className='flex flex-col w-[249px] h-[65px] gap-[6px]'>
                <h1>Filter</h1>
                <select className='border border-[#E6E3E3] rounded-md w-[249px] h-[38px]'>
                    <option value="all">All</option>
                    <option value="some">Some</option>
                    <option value="T-pain">Tami</option>
                </select>
            </div>
            </div>
        </section>

        <section className="grid grid-cols-3 gap-5 m-8">
  {filteredCards.map((item) => (
    <div key={item.id} onClick={() => openModal(item)}>
      <DepartmentCard {...item} />
    </div>
  ))}
</section>

{isModalOpen && selectedCard && (
  <div
    className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
    onClick={closeModal}
  >
    <div
      className="bg-white w-[500px] p-6 rounded-xl"
      onClick={(e) => e.stopPropagation()}
    >
      {selectedCard.title === "Cardiology" && (
        <CardiologyPage onClose={closeModal} />
      )}

      {selectedCard.title === "Neurology" && (
        <NeurologyPage onClose={closeModal} />
      )}
    </div>
  </div>
)}
    </div>
  )
}