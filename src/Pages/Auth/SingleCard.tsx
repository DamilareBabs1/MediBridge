import React from "react"
import { Link } from "react-router-dom"

type Props = {
  image: string | any,
  specialists: string,
  title: string,
  description: string,
  link: string,
}

export default function DepartmentCard({
  image,
  specialists,
  title,
  description,
  link
}: Props) {
  return (
    <Link to={link} className="block">

      <section className="w-[289px] h-[307px] mt-5 bg-white border border-[#D9D9D9] rounded-xl p-6 flex flex-col gap-[23px]">

        {/* IMAGE + SPECIALIST */}
        <div className="flex items-center justify-between">
          <img src={image} alt={title} className="w-[40px] h-[40px]" />

          <p className="text-[13px] text-[#28574E] bg-[#DCF2EE] border border-[#DCF2EE] rounded-3xl w-[102px] h-[25px] flex items-center justify-center font-medium">
            {specialists}
          </p>
        </div>

        {/* TITLE + DESCRIPTION */}
        <div className="text-center">
          <h3 className="text-[16px] font-semibold text-[#28574E]">
            {title}
          </h3>

          <p className="text-[13px] text-[#757575] mt-2">
            {description}
          </p>
        </div>

        {/* BUTTON */}
        <button className="mt-auto bg-white w-[245px] h-[54px] flex items-center justify-center text-[#28574E] border border-[#28574E] hover:bg-[#28574E] hover:text-white rounded-md">
          View Department
        </button>

      </section>

    </Link>
  )
}