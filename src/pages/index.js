import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navigation/Navbar'
import Search from '../components/Search'
import Image from 'next/image'
import { MdLocationOn } from 'react-icons/md'
import { FaSearchLocation } from 'react-icons/fa'
import { BsFillCarFrontFill } from 'react-icons/bs'
import { FiArrowUpRight } from 'react-icons/fi'

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
      <section className='section-center space-y-10 md:space-y-16'>
        {/* header */}
        <div className='flex justify-center items-center mx-auto'>
          <div className='  space-y-2 md:space-y-3 xl:space-y-4'>
            <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl py-4 text-center  text-babyblack   '>
              How to{' '}
              <span className="bg-[url('/images/started.png')] bg-no-repeat bg-bottom  py-4   ">
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
              className='object-cover w-full md:max-w-md lg:max-w-lg xl:max-w-xl'
            />
          </div>
          {/* text */}
          <div className=' md:absolute  md:top-1/2 md:left-56 lg:left-72 xl:left-[27rem] md:transform md:-translate-x-1/2 md:-translate-y-1/2 sm:max-w-md md:max-w-sm lg:max-w-md xl:max-w-xl space-y-6 sm:space-y-8 md:space-y-4 lg:space-y-5 w-full'>
            {/* one */}
            <div className='bg-white shadow-md px-4 py-4 rounded-sm flex items-center w-full gap-4  sm:px-6  sm:py-6   md:py-4 lg:py-6 lg:px-8 md:hover:translate-x-6 hover:shadow-xl duration-1000'>
              {/* icon */}
              <div className='bg-[#FFF2FE] px-2 py-2 md:px-4 md:py-4 shadow-md flex justify-center items-center rounded  '>
                <MdLocationOn className='text-babypurple text-2xl sm:text-3xl lg:text-4xl' />
              </div>
              <div className='text-babyblack space-y-1'>
                <h1 className='font-bold text-sm lg:text-base '>
                  Choose a Location
                </h1>
                <p className='text-xs lg:text-sm '>
                  Choose your desired location to reveal cars available for
                  rental in that location
                </p>
              </div>
            </div>
            {/* two */}
            <div className='bg-white shadow-md px-4 py-4 rounded-sm flex items-center w-full gap-4  sm:px-6  sm:py-6   md:py-4 lg:py-6 lg:px-8 md:hover:translate-x-6 hover:shadow-xl duration-1000 '>
              {/* icon */}
              <div className='bg-[#FFF2FE] px-2 py-2 md:px-4 md:py-4 shadow-md flex justify-center items-center rounded '>
                <FaSearchLocation className='text-babypurple text-2xl sm:text-3xl lg:text-4xl' />
              </div>
              <div className='text-babyblack space-y-1'>
                <h1 className='font-bold text-sm lg:text-base '>
                  Browse and Select
                </h1>
                <p className='text-xs lg:text-sm '>
                  Filter through our garage and select the car that matches your
                  destination & budget
                </p>
              </div>
            </div>
            {/* three */}

            <div className='bg-white shadow-md px-4 py-4 rounded-sm flex items-center w-full gap-4  sm:px-6  sm:py-6   md:py-4  lg:py-6 lg:px-8 md:hover:translate-x-6 hover:shadow-xl duration-1000'>
              {/* icon */}
              <div className='bg-[#FFF2FE] px-2 py-2 md:px-4 md:py-4 shadow-md flex justify-center items-center rounded'>
                <BsFillCarFrontFill className='text-babypurple text-2xl sm:text-3xl lg:text-4xl' />
              </div>
              <div className='text-babyblack space-y-1'>
                <h1 className='font-bold text-sm lg:text-base '>
                  Book and Confirm
                </h1>
                <p className='text-xs lg:text-sm '>
                  Upon successfull booking and payment your vehicle will be
                  reserved for you as requested
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* explore by city */}
      <section className='section-center space-y-10 md:space-y-16'>
        {/* header */}
        <div className='flex justify-center items-center mx-auto'>
          <div className='  space-y-2 md:space-y-3 xl:space-y-4'>
            <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl py-4 text-center  text-babyblack   '>
              Explore{' '}
              <span className="bg-[url('/images/started.png')] bg-no-repeat bg-bottom  py-4   ">
                by City
              </span>{' '}
            </h1>
            <p className='text-sm text-center sm:text-base max-w-xs sm:max-w-sm md:text-lg md:max-w-md text-babyblack lg:text-xl lg:max-w-lg xl:text-2xl xl:max-w-xl'>
              Check out vechiles leasing out in your desired city
            </p>
          </div>
        </div>
        {/* content */}
        <div className='space-y-5 sm:grid sm:grid-cols-2 sm:space-y-0 sm:gap-8 md:grid-cols-3 xl:grid-cols-4 xl:gap-12'>
          {/* one */}
          <div className='bg-white px-4 py-3 shadow  flex justify-between items-center rounded max-w-xs md:hover:translate-x-6 hover:shadow-xl duration-1000 hover:font-bold'>
            <h1 className='md:text-lg xl:text-xl'>Houston, Texas</h1>
            <FiArrowUpRight className='text-babypurple text-2xl md:text-3xl xl:text-4xl' />
          </div>
          {/* two */}
          <div className='bg-white px-4 py-3 shadow  flex justify-between items-center rounded max-w-xs md:hover:translate-x-6 hover:shadow-xl duration-1000 hover:font-bold'>
            <h1 className=' md:text-lg xl:text-xl'>New York</h1>
            <FiArrowUpRight className='text-babypurple text-2xl md:text-3xl xl:text-4xl' />
          </div>
          {/* three */}
          <div className='bg-white px-4 py-3 shadow  flex justify-between items-center rounded max-w-xs md:hover:translate-x-6 hover:shadow-xl duration-1000 hover:font-bold'>
            <h1 className=' md:text-lg xl:text-xl'>Los Angeles</h1>
            <FiArrowUpRight className='text-babypurple text-2xl md:text-3xl xl:text-4xl' />
          </div>
          {/* four */}
          <div className='bg-white px-4 py-3 shadow  flex justify-between items-center rounded max-w-xs md:hover:translate-x-6 hover:shadow-xl duration-1000 hover:font-bold'>
            <h1 className=' md:text-lg xl:text-xl'>Seattle</h1>
            <FiArrowUpRight className='text-babypurple text-2xl md:text-3xl xl:text-4xl' />
          </div>
          {/* five */}
          <div className='bg-white px-4 py-3 shadow  flex justify-between items-center rounded max-w-xs md:hover:translate-x-6 hover:shadow-xl duration-1000 hover:font-bold'>
            <h1 className=' md:text-lg xl:text-xl'>Austin, Texas</h1>
            <FiArrowUpRight className='text-babypurple text-2xl md:text-3xl xl:text-4xl' />
          </div>
          {/* six */}
          <div className='bg-white px-4 py-3 shadow  flex justify-between items-center rounded max-w-xs md:hover:translate-x-6 hover:shadow-xl duration-1000 hover:font-bold'>
            <h1 className=' md:text-lg xl:text-xl'>San Diego</h1>
            <FiArrowUpRight className='text-babypurple text-2xl md:text-3xl xl:text-4xl' />
          </div>
          {/* seven */}
          <div className='bg-white px-4 py-3 shadow  flex justify-between items-center rounded max-w-xs md:hover:translate-x-6 hover:shadow-xl duration-1000 hover:font-bold'>
            <h1 className=' md:text-lg xl:text-xl'>Oklahoma</h1>
            <FiArrowUpRight className='text-babypurple text-2xl md:text-3xl xl:text-4xl' />
          </div>
          {/* eight */}
          <div className='bg-white px-4 py-3 shadow  flex justify-between items-center rounded max-w-xs md:hover:translate-x-6 hover:shadow-xl duration-1000 hover:font-bold'>
            <h1 className='md:text-lg xl:text-xl'>Chicago</h1>
            <FiArrowUpRight className='text-babypurple text-2xl md:text-3xl xl:text-4xl' />
          </div>
        </div>
      </section>
      {/* partner with us */}
      <section className='section-center space-y-10 md:space-y-16'>
        {/* header */}
        <div className='flex justify-center items-center mx-auto'>
          <div className='  space-y-2 md:space-y-3 xl:space-y-4'>
            <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl py-4 text-center  text-babyblack   '>
              Partner with Us{' '}
              <span className="bg-[url('/images/started.png')] bg-no-repeat bg-bottom  py-4   ">
                Today
              </span>{' '}
            </h1>
            <p className='text-sm text-center sm:text-base max-w-sm sm:max-w-sm md:text-lg md:max-w-md text-babyblack lg:text-xl lg:max-w-lg xl:text-2xl xl:max-w-xl'>
              Join forces with us today and start experiencing tremendous
              passive income on the go
            </p>
          </div>
        </div>
        <div className='md:flex  space-y-6 md:space-y-0  md:justify-between md:gap-6 lg:gap-12'>
          {/* image */}
          <div className='  relative md:w-1/2'>
            <Image
              src={'/images/partner.png'}
              alt='picture'
              width={1000}
              height={1000}
              className='w-full   object-cover '
            />
          </div>
          {/* blue back */}
          <div
            className=' w-full flex flex-col justify-center items-center space-y-6 md:w-1/2 md:items-start
        '
          >
            {/* text */}
            {/* top */}
            <h2 className='text-center text-babyblack  font-bold text-2xl  md:text-left lg:text-3xl  xl:text-4xl md:max-w-xs xl:max-w-md '>
              Ready to forge a partnership with us?
            </h2>
            {/* paragraph */}
            <p className='text-babyblack  text-sm text-center max-w-xs sm:text-base sm:max-w-sm   md:text-left xl:text-lg xl:max-w-md'>
              Then we welocme you join forces with us today, Whether you are
              registering your car amongst our fleet or you want to come onboard
              as one of the directors , there's enough milk to go round. Get in
              touch with us now
            </p>

            <Link
              href='/partnerwithus'
              className='mx-auto md:mx-0 flex px-6 md:px-5 lg:px-6 py-3 lg:py-3 text-white bg-babypurple   rounded-md shadow-md cursor-pointer text-xs sm:text-sm font-bold md:text-sm lg:text-base tracking-wide transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 '
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
      {/* our App */}
      <section className='section-center space-y-10 md:space-y-16'>
        {/* header */}
        <div className='flex justify-center items-center mx-auto'>
          <div className='  space-y-2 md:space-y-3 xl:space-y-4'>
            <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl py-4 text-center  text-babyblack   '>
              Download{' '}
              <span className="bg-[url('/images/started.png')] bg-no-repeat bg-bottom  py-4   ">
                our Mobile App
              </span>{' '}
            </h1>
            <p className='text-sm text-center sm:text-base max-w-xs sm:max-w-sm md:text-lg md:max-w-md text-babyblack lg:text-xl lg:max-w-lg xl:text-2xl xl:max-w-xl'>
              Enjoy fast and seamless booking experience
            </p>
          </div>
        </div>
        {/* content */}

        <div className=' section-center  space-y-10 flex flex-col md:flex-row justify-center items-center md:items-center md:space-y-0    '>
          {/* image */}
          <div className='  relative  md:w-1/2'>
            <Image
              src={'/images/app.png'}
              alt='picture'
              width={1000}
              height={1000}
              className='w-64  lg:w-72 xl:w-80 object-fill  mx-auto '
            />
          </div>
          {/* text */}
          <div className='font-sans flex flex-col justify-center items-center mx-auto md:mx-0 md:items-start space-y-4 sm:space-y-6 md:w-1/2 '>
            {/* top */}
            <h2 className='text-center text-babyblack  font-bold text-2xl  md:text-left md:text-4xl md:max-w-xs lg:text-5xl lg:max-w-sm'>
              Book your rides with ease
            </h2>
            {/* paragraph */}
            <p className='text-babyblack text-sm text-center w-full  sm:text-base md:text-left lg:text-lg lg:max-w-sm  xl:max-w-md'>
              Start enjoying faster and seamless booking experience when you
              download and use the GLO RIDE mobile application. The GLORIDES app
              is available on all your favourite mobile app stores
            </p>
            <div className='flex xl:pt-4 gap-4 justify-center md:justify-start items-center'>
              <a
                // href='https://play.google.com/store/apps/details?id=com.upperlink.payguy'
                rel='noreferrer'
                target='_blank'
                className='block '
              >
                <div className='  relative md:hover:-translate-x-6 hover:shadow-xl duration-1000'>
                  <Image
                    src={'/images/appstore.png'}
                    alt='logo'
                    width={1000}
                    height={1000}
                    className='w-28 md:w-36 xl:w-40  '
                  />
                </div>
              </a>
              <a
                // href='https://play.google.com/store/apps/details?id=com.upperlink.payguy'
                rel='noreferrer'
                target='_blank'
                className='block '
              >
                <div className='  relative md:hover:translate-x-6 hover:shadow-xl duration-1000'>
                  <Image
                    src={'/images/playstore.png'}
                    alt='logo'
                    width={1000}
                    height={1000}
                    className='w-32 md:w-40 xl:w-44  '
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default index
