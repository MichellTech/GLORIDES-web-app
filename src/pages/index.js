import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navigation/Navbar'
import Search from '../components/Search'
import Image from 'next/image'
import { MdLocationOn } from 'react-icons/md'
import { FaSearchLocation } from 'react-icons/fa'
import { BsFillCarFrontFill } from 'react-icons/bs'

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
      {/* how to get started */}
      <section className='section-center space-y-10'>
        {/* header */}
        <div className='flex justify-center items-center mx-auto'>
          <div className='  space-y-2 md:space-y-3 xl:space-y-4'>
            <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl py-4 text-center  text-babyblack   '>
              How to{' '}
              <span className="bg-[url('/images/started.png')] bg-no-repeat bg-bottom  py-4  hover:bg-top duration-1000 ">
                Get Started
              </span>{' '}
            </h1>
            <p className='text-sm text-center sm:text-base max-w-sm sm:max-w-sm md:text-lg md:max-w-md text-babyblack lg:text-xl lg:max-w-lg xl:text-2xl xl:max-w-xl'>
              Renting your first car is as easy and straightforward as these 3
              steps
            </p>
          </div>
        </div>
        {/* content */}
        <div className='relative space-y-6 sm:space-y-10 md:space-y-0 '>
          {/* image */}
          <div className='  relative  md:flex md:justify-end'>
            <Image
              src={'/images/startcar.png'}
              alt='photo'
              width={1000}
              height={1000}
              className='object-cover w-full md:max-w-md lg:max-w-2xl'
            />
          </div>
          {/* text */}
          <div className=' md:absolute  md:top-1/2 md:left-60 md:transform md:-translate-x-1/2 md:-translate-y-1/2 sm:max-w-md md:max-w-sm space-y-6 sm:space-y-8 md:space-y-4 w-full'>
            {/* one */}
            <div className='bg-white shadow-md px-4 py-4 rounded-sm flex items-center w-full gap-4  sm:px-6  sm:py-6   md:py-4'>
              {/* icon */}
              <div className='bg-[#FFF2FE] w-20 h-10 shadow-md flex justify-center items-center rounded sm:h-14'>
                <MdLocationOn className='text-babypurple text-2xl sm:text-3xl' />
              </div>
              <div className='text-babyblack space-y-1'>
                <h1 className='font-bold text-sm'>Choose a Location</h1>
                <p className='text-xs'>
                  Choose your desired location to reveal cars available for
                  rental in that location
                </p>
              </div>
            </div>
            {/* two */}
            <div className='bg-white shadow-md px-4 py-4 rounded-sm flex items-center w-full gap-4  sm:px-6  sm:py-6   md:py-4 '>
              {/* icon */}
              <div className='bg-[#FFF2FE] w-20 h-10 shadow-md flex justify-center items-center rounded sm:h-14'>
                <FaSearchLocation className='text-babypurple text-2xl sm:text-3xl' />
              </div>
              <div className='text-babyblack space-y-1'>
                <h1 className='font-bold text-sm'>Browse and Select</h1>
                <p className='text-xs'>
                  Filter through our garage and select the car that matches your
                  destination & budget
                </p>
              </div>
            </div>
            {/* three */}

            <div className='bg-white shadow-md px-4 py-4 rounded-sm flex items-center w-full gap-4  sm:px-6  sm:py-6   md:py-4 '>
              {/* icon */}
              <div className='bg-[#FFF2FE] w-20 h-10 shadow-md flex justify-center items-center rounded sm:h-14'>
                <BsFillCarFrontFill className='text-babypurple text-2xl sm:text-3xl' />
              </div>
              <div className='text-babyblack space-y-1'>
                <h1 className='font-bold text-sm'>Book and Confirm</h1>
                <p className='text-xs'>
                  Choose your desired location to reveal cars available for
                  rental in that location
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default index
