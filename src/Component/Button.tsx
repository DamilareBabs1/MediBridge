import React from 'react'

type Props = {
    className? : string,
    children?: React.ReactNode,
    content? : string,
    type: "button" | "submit" | "reset",
    onClick? : (e: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Button({className, content, type, onClick, children}: Props) {
  return (
    <button 
  className={`${className} cursor-pointer hover:bg-[#4f8379] bg-[#28574E] text-white w-full h-[52px] rounded-md flex items-center justify-center gap-2`} 
  onClick={onClick} 
  type={type}
>
    {content}
    {children}
    </button>
  )
}