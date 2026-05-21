import React from 'react'

type Props = {
  className? : string,
  type: string,
  placeholder? : string,
  id : string,
//   value : string,
//   name : string, 
//   onChange : (e: React.ChangeEvent<HTMLInputElement>)=> void
}

export default function Input({className, type, placeholder, id}: Props) {
  return (
    <div>
      <input
        className={`${className} py-3 px-3 border border-[#D9D9D9] rounded-md w-full`}
        type={type}
        placeholder={placeholder}
        id={id}
        // value={value}
        // name={name}
        // onChange={onChange}
      />
    </div>
  )
}