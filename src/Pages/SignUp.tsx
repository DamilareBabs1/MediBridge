import React from 'react'
import RegisterLayout from '../Layout/RegisterLayout'
import image from '../assets/Frame 2121455033.svg'
import Icon from '../assets/Icon.svg'

export default function SignUp() {
  return (
    <RegisterLayout subHeading="Manage appointments, view medical information, chat with your care team, and recieve support in one place." heading="Access your care anytime" image={image}
        ul={<ul>
        <li className='flex items-center gap-[16px]'><img src={Icon} alt="Logo" />Book and manage appointments</li>
        <li className='flex items-center gap-[16px]'><img src={Icon} alt="Logo" />Access visit history</li>
        <li className='flex items-center gap-[16px]'><img src={Icon} alt="Logo" />Message your healthcare team</li>
        <li className='flex items-center gap-[16px]'><img src={Icon} alt="Logo" />AI support assistance</li>
        <li className='flex items-center gap-[16px]'><img src={Icon} alt="Logo" />Appointment reminders</li>
      </ul>}>
     <form>
   

     </form>
    </RegisterLayout>
  )
}