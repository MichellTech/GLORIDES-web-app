import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navigation/Navbar'
import Search from '../components/Search'

function index() {
  return (
    <>
      {/* herro */}
      <div className='relative w-full '>
        <video
          className='  h-[30rem] sm:h-[34rem] lg:h-[36rem] xl:h-screen w-full bg-cover object-cover '
          autoPlay
          loop
          muted
        >
          <source src='/homevid.mp4' type='video/mp4' />
        </video>
        {/* text */}

        <div className='absolute top-0 left-0 right-0 bottom-0 h-[30rem]  sm:h-[34rem] lg:h-[36rem] xl:h-screen text-white bg-black bg-opacity-60 flex flex-col justify-center items-center space-y-6 md:space-y-7 lg:space-y-8 xl:space-y-9 pt-14 sm:pt-16 md:pt-24 xl:pt-28 w-full'>
          <div className='space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6 xl:space-y-6'>
            <h1 className='font-mono text-3xl text-center max-w-[22rem] mx-auto sm:max-w-md sm:text-4xl md:text-5xl md:max-w-xl lg:max-w-2xl  lg:text-6xl xl:max-w-2xl  xl:text-6xl'>
              Make the journey worth the experience
            </h1>
            <p className='max-w-xs text-sm text-center  mx-auto sm:max-w-md sm:text-base md:text-base md:max-w-md lg:max-w-lg  lg:text-xl xl:max-w-2xl  xl:text-2xl'>
              Get Access To 5000+ Cars from various Locations in the United
              State of America
            </p>
          </div>
          {/* search */}
          <div>
            <Search />
          </div>
        </div>
        <div className='absolute top-0 left-0 right-0'>
          <Navbar />
        </div>
      </div>
    </>
  )
}

export default index
