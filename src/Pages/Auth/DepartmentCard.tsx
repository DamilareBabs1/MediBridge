import React from "react"

type Props = {
  image: string
  specialists: string
  title: string
  description: string
  onClick?: () => void
}

export default function DepartmentCard({
  image,
  specialists,
  title,
  description,
  onClick
}: Props) {
  return (
    <section className="w-[293px] h-[357px] bg-white border border-[#DDDDDD] rounded-xl p-6 flex flex-col gap-[44px]">

      <div className="flex justify-between items-center">
        <img src={image} alt={title} className="w-[40px] h-[40px]" />

        <p className="text-xs text-[#28574E] bg-[#DCF2EE] px-3 py-1 rounded-full">
          {specialists}
        </p>
      </div>

      <div className="text-center">
        <h3 className="text-[16px] font-semibold text-[#28574E]">
          {title}
        </h3>

        <p className="text-start text-[16px] text-[#757575] mt-2">
          {description}
        </p>
      </div>

      <button
        onClick={onClick}
        className="mt-auto border border-[#28574E] text-[#28574E] hover:bg-[#28574E] hover:text-white rounded-md h-[45px]"
      >
        View Department
      </button>

    </section>
  )
}