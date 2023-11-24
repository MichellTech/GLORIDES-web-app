import React from 'react'

function profileloader() {
  return (
    <div className='w-full animate-pulse space-y-8'>
      {/* header */}
      <div className='  space-y-6 md:flex md:items-center md:gap-8 w-full md:space-y-0'>
        {/* cirle */}
        <div className='w-full md:w-max'>
          <div className='w-14 md:w-24 lg:w-30 h-14 md:h-24 lg:h-30 rounded-full  bg-babygrey  mx-auto md:mx-0 '></div>
        </div>

        {/* body */}
        <div className='flex justify-center items-center flex-col space-y-4 w-full md:justify-start md:items-start'>
          {/* name */}
          <div className='bg-babygrey w-32 lg:w-36 h-5 md:h-7 rounded-full '></div>
          {/* text */}
          <div className='bg-babygrey w-5/6 lg:w-full  h-20 md:h-24 lg:h-28  rounded-md '></div>
          {/* button */}
          <div className='flex justify-center items-center gap-2'>
            <div className='bg-babygrey w-24 lg:w-32 h-5 md:h-8 rounded-full '></div>
            <div className='bg-babygrey w-24 lg:w-32 h-5 md:h-8 rounded-full '></div>
          </div>
        </div>
      </div>
      {/* rest */}
      <div className='w-full space-y-4'>
        <div className='bg-babygrey w-40 lg:w-52 h-6 md:h-8  rounded-full '></div>
        {/* group */}
        <div className='space-y-2 md:space-y-4 '>
          {/* one */}
          <div className='flex justify-between items-center   w-full gap-4 lg:gap-10'>
            <div className='bg-babygrey w-full h-5 md:h-7  rounded-full '></div>
            <div className='bg-babygrey w-full h-5 md:h-7  rounded-full '></div>
          </div>
          {/* two*/}
          <div className='flex justify-between items-center   w-full gap-4 lg:gap-10'>
            <div className='bg-babygrey w-full h-5 md:h-7  rounded-full '></div>
            <div className='bg-babygrey w-full h-5 md:h-7  rounded-full '></div>
          </div>
          {/* three */}
          <div className='flex justify-between items-center   w-full gap-4 lg:gap-10'>
            <div className='bg-babygrey w-full h-5 md:h-7 rounded-full '></div>
            <div className='bg-babygrey w-full h-5 md:h-7 rounded-full '></div>
          </div>
          {/* four */}
          <div className='flex justify-between items-center   w-full gap-4 lg:gap-10'>
            <div className='bg-babygrey w-full h-5 md:h-7 rounded-full '></div>
            <div className='bg-babygrey w-full h-5 md:h-7 rounded-full '></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default profileloader
