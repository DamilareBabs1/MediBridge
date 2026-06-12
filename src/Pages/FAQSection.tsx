import React from 'react'



export default function FAQSection() {
  return (
    <div className='items-center justify-center w-full flex flex-col gap-10'>
{/* FAQ SECTION */}

<section className='w-full flex justify-center pt-10 bg-[#F7F7F7]'>
  <div className='w-[900px] flex flex-col items-center'>

    <p className='bg-[#DCF2EE] rounded-3xl flex items-center justify-center text-[#28574E] text-[18px] w-[84px] h-[43px]'>FAQ</p>

    <h1 className='text-[32px] font-bold text-[#141313] mt-4'>Frequently Asked Questions</h1>

    <div className='w-full flex flex-col gap-4 mt-10'>

      {/* FAQ 1 */}

 <details className='bg-white border border-[#D9D9D9] rounded-xl p-5 group'>

  <summary className='flex items-center justify-between list-none cursor-pointer'>

    <span className='font-semibold w-[600px] h-[20px] text-[20px] text-[#141313]'>Can I use the AI assistant for free?</span><span className='text-[24px] text-[#28574E] transition-transform group-open:rotate-180'>⌄</span></summary>

  <p className='mt-4 text-[#757575] text-[16px]'>
    Yes. MediBridge AI support is available for free and can help answer
    general health-related questions anytime.
  </p>

</details>

      {/* FAQ 2 */}

      <details className='bg-white border border-[#D9D9D9] rounded-xl p-5 cursor-pointer'>
        <summary className='flex items-center justify-between list-none cursor-pointer'>
         <span className='font-semibold w-[600px] h-[20px] text-[20px] text-[#141313]'> What is a patient ID and how do I find mine?</span><span className='text-[24px] text-[#28574E] transition-transform group-open:rotate-180'>⌄</span></summary>

        <p className='mt-4 text-[#757575] text-[16px]'>
          A patient ID is a unique identifier assigned to each patient.
          You can find yours on your medical records or by contacting support.
        </p>
      </details>

      {/* FAQ 3 */}

       <details className='bg-white border border-[#D9D9D9] rounded-xl p-5 cursor-pointer'>
        <summary className='flex items-center justify-between list-none cursor-pointer'>
         <span className='font-semibold w-[600px] h-[20px] text-[20px] text-[#141313]'>How do I book an appointment?</span><span className='text-[24px] text-[#28574E] transition-transform group-open:rotate-180'>⌄</span></summary>

        <p className='mt-4 text-[#757575] text-[16px]'>
          Click the "Book Appointment" button, choose your doctor and preferred
          time, then confirm your booking.
        </p>
      </details>

    </div>
  </div>
</section>
    </div>
  )
}