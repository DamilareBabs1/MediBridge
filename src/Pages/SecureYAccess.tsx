import React, { useState } from 'react'
import RegisterLayout from '../Layout/RegisterLayout'
import SecureHealth from '../assets/SecurityMeau2.svg'
import Input from '../Component/Input'
import Button from '../Component/Button'
import { Link } from 'react-router'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import Stepper from '../Component/Stepper'

export default function SecureYAccess() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <RegisterLayout heading="Secure Your Access." subHeading="Your health data is protected with industry-leading encryption. Step 3 of 3: finalise your security credentials." image={SecureHealth}>

      
      
      <form className='w-[540px] h-[678px] border border-white gap-[40px] mt-10 rounded-2xl p-8 shadow-sm mx-auto'>
        <Stepper currentStep={3} />
        
        <div className='flex flex-col gap-4 items-start justify-start'>
          <h1 className='text-[#141313] text-[28px]'>Set Up Password</h1>
        <p className='text-[#757575] text-[18px]'>Finalise your security credentials</p>
        </div>
        
        <div className='relative w-full mt-7 gap-6 flex flex-col'>
         <label htmlFor="password">Password</label>
         <Input type={showPassword ? "text" : "password"} placeholder='Enter your password' id="password" className='border border-gray-300 rounded-md' />
         <span onClick={()=> setShowPassword(!showPassword)} className='absolute right-4 top-1/4 pt-1 transform -translate-y-1/2 cursor-pointer mt-2'>{showPassword ? <FaRegEyeSlash /> :<FaRegEye />}</span>

         <label htmlFor="confirm-password">Confirm Password</label>
         <Input type={showConfirmPassword ? "text" : "password"} placeholder='Confirm your password' id="confirm-password" className='border border-gray-300 rounded-md ' /><span onClick={()=> setShowConfirmPassword(!showConfirmPassword)} className='absolute right-4 bottom-2 transform -translate-y-1/2 cursor-pointer mt-5'>{showConfirmPassword ? <FaRegEyeSlash /> :<FaRegEye />}</span>
        </div>

       <div className='flex items-center gap-3 justify-center mt-5'>
        
        <input type="checkbox" id="checkbox" className='border border-gray-300 rounded-md' />
       <label htmlFor="checkbox">I agree to the <Link className='text-[#28574E] font-medium' to='#'> Terms of service and privacy policy.</Link></label>
       
       </div>
       

        <div className='gap-15 flex flex-col items-center justify-center mt-3'>
           <Button content="Activate Account " type='submit' className='mt-8 bg-[#F8F7F7]' />

        <p className='text-[#757575] text-center'>Need help? <Link className='text-[#28574E] font-medium' to='#'> Contact Support</Link></p>


    </div>

  </form>
</RegisterLayout>
)
}