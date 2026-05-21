import React from 'react'

type Props = {
  className? : string,
  type: string,
  placeholder? : string,
  id : string,
  value? : string,
  name? : string, 
  pattern? : string,
  maxLength? : number,
  inputMode? : "search" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "none" | undefined,
  onChange? : (e: React.ChangeEvent<HTMLInputElement>)=> void
}

export default function Input({className, type, placeholder, id, value, name, onChange, pattern, maxLength, inputMode}: Props) {
  return (
    <div>
      <input
        className={`${className} py-3 px-3 border border-[#D9D9D9] rounded-md w-full`}
        type={type}
        placeholder={placeholder}
        id={id}
        value={value}
        name={name}
        onChange={onChange}
        pattern={pattern}
        maxLength={maxLength}
        inputMode={inputMode}
      />
    </div>
  )
}