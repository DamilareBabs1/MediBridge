import React from 'react'

type Props = {
    className? : string,
    content : string,
    type: "button" | "submit" | "reset",
    onClick? : (e: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Button({className, content, type, onClick}: Props) {
  return (
    <button 
    className={`${className} cursor-pointer hover:bg-[#4f8379] bg-[#28574E] text-white w-full h-[52px] rounded-md`} 
    onClick={onClick} 
    type={type}
    >
    {content}
    </button>
  )
}