import React, { useState } from "react";
import { FiSearch, FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import DepartmentBg from "../assets/NewBackgoundforLandPage2.jpg";
import {useDepartmentFilter}from "../Hooks/UseDepartmentFilter";
import { useDeptModal } from "../Hooks/UseDeptModal";
import DepartmentCard from "./Auth/DepartmentCard";
import Navbar from "../Pages/Navbar";
import CardiologyPage from "./CardiologyPage";
import NeurologyPage from "./NeurologyPage";

export default function DepartmentPage() {
  const { search, setSearch, filteredCards } = useDepartmentFilter();
const { isModalOpen, selectedCard, openModal, closeModal } = useDeptModal();
  return (
    <>
      {/* HERO */}
      <section
        className="relative w-full min-h-[80vh] bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${DepartmentBg})` }}
      >
        <div className="absolute inset-0 bg-[#28574ECC]" />

        <div className="relative z-20">
          <Navbar />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center pt-10 text-center">
          <h1 className="text-[60px]">
            Find The Right Department For Your Care
          </h1>
          <p className="text-[#DAD8D8] mt-6">
            Explore hospital specialties, available services, and care teams.
          </p>

          {/* SEARCH */}
          <div className="flex mt-10 gap-6">
            <div className="relative">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search departments..."
                className="w-[330px] h-[45px] pl-12 rounded-xl text-black"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FILTERED CARDS */}
      <section className="flex justify-center mt-10">
        <div className="grid grid-cols-4 gap-10">
          {filteredCards.map((item) => (
            <DepartmentCard
              key={item.id}
              {...item}
              onClick={() => openModal(item)}
            />
          ))}
        </div>
      </section>

      {/* MODAL */}
      {isModalOpen && selectedCard && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white w-[500px] max-h-[80vh] overflow-y-auto rounded-xl p-6"
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

      {/* PAGINATION */}
      <section className="flex justify-between max-w-[1241px] mx-auto mt-10 px-4">
        <p>Showing 8 of 20</p>

        <div className="flex gap-2 items-center">
          <FiChevronsLeft />
          <FiChevronLeft />
          <FiChevronRight />
          <FiChevronsRight />
        </div>
      </section>

      {/* FOOTER INFO */}
      <section className="flex justify-center mt-20">
        <div className="bg-[#28574E] w-[90%] rounded-3xl p-10 text-center text-white">
          <h1 className="text-[39px]">Stay informed on your health</h1>
          <p className="text-[#DAD8D8] mt-3">
            Get weekly updates and health tips.
          </p>

          <div className="flex justify-center gap-4 mt-6">
            <input
              className="w-[320px] h-[54px] rounded-xl text-black px-4"
              placeholder="Enter email"
            />
            <button className="bg-white text-[#28574E] px-6 rounded-xl">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}