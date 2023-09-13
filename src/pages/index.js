import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navigation/Navbar'

function index() {
  return (
    <>
      {/* herro */}
      <div className='relative'>
        <video
          className='  h-[24rem] md:h-[30rem] xl:h-screen w-full bg-cover object-cover '
          autoPlay
          loop
          muted
        >
          <source src='/homevid.mp4' type='video/mp4' />
        </video>
        {/* text */}

        <div className='absolute top-0 left-0 right-0 bottom-0 h-[24rem] md:h-[30rem] xl:h-screen text-white bg-black bg-opacity-60 flex justify-center items-center'>
          <div className='space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5 xl:space-y-6'>
            <h1 className='font-mono text-3xl text-center max-w-xs mx-auto sm:max-w-sm sm:text-4xl md:text-5xl md:max-w-lg lg:max-w-2xl  lg:text-6xl xl:max-w-4xl  xl:text-7xl'>
              Make the journey worth the experience
            </h1>
            <p className='max-w-xs text-sm text-center  mx-auto sm:max-w-sm sm:text-lg md:text-xl md:max-w-md lg:max-w-lg  lg:text-2xl xl:max-w-2xl  xl:text-3xl'>
              Get Access To 5000+ Cars from over 300+ Locations Worldwide
            </p>
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
