import React from 'react'

function paymentcardloader() {
  return (
    <div className='bg-slate-200 shadow-md h-[50vh] md:h-[60vh] w-full  flex flex-col justify-start items-start px-6 py-4 mx-auto space-y-6  animate-pulse'>
      <div className='  rounded-lg border px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white space-y-4 w-4/6 sm:w-3/6 '>
        <div className='flex justify-end'>
          <div className='w-7 md:w-8 lg:w-10 h-7 md:h-8 lg:h-10 rounded-full  bg-babygrey '></div>
        </div>
        <div className='space-y-4 lg:space-y-6'>
          <div className='bg-babygrey w-32 lg:w-36 h-5 md:h-7 rounded-full '></div>
          <div className='bg-babygrey w-5/6 lg:w-full  h-10 md:h-12 lg:h-14  rounded-md '></div>
          <div className='flex justify-between items-center   w-full gap-4 lg:gap-10'>
            <div className='bg-babygrey w-full h-5 md:h-7 rounded-full '></div>
            <div className='bg-babygrey w-full h-5 md:h-7 rounded-full '></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default paymentcardloader
