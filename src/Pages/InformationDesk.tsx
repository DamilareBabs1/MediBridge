import React from 'react'


export default function InformationDesk() {
  return (
    <div className='items-center justify-center w-full flex flex-col gap-10'>
        <section className='bg-[#F7F7F7] flex items-center justify-center w-full pt-20'>
  <div className='flex gap-[20px] flex-col bg-[#28574E] mx-auto w-6xl h-[291px] rounded-3xl items-center justify-center'>
    <h1 className='text-[39px] text-[#FFFFFF]'>
      Stay informed on your health
    </h1>
    <p className='text-[#DAD8D8] w-3xl'>Get the latest health tips, medical news, and app updates delivered to your inbox once a week.</p>

      <div className='flex gap-4'>
      <input className='pl-3 border-[#FFFFFF] border w-[322px] h-[54px] shadow-[#BFC8CA] bg-[#28574E] text-[14px] text-[#DAD8D8] rounded-xl' type="email" placeholder='Enter your email address' />
      <button className='bg-[#FFFFFF] w-[174px] h-[54px] text-[#28574E] text-[14px] rounded-xl border hover:bg-[#28574E] hover:text-white'>Subscribe</button>

    </div>
  </div>

</section>
    </div>
  )
}