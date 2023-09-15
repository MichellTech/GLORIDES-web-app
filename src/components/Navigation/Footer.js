import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaFacebook, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import { TbBrandTwitterFilled } from 'react-icons/tb'
// import { FiArrowUpRight } from 'react-icons/fi'
// import { FiArrowUpRight } from 'react-icons/fi'
// import { FiArrowUpRight } from 'react-icons/fi'

function Footer() {
  return (
    <section className='mt-16  bg-[#FFF2FE]  '>
      {/* cont*/}
      <div className='  py-8 md:pt-12 space-y-6 px-6 md:px-8 lg:px-10 sm:space-y-8 md:space-y-12 xl:space-y-14'>
        {/* logo */}

        <Link href='/'>
          <div className='  flex justify-center items-center relative '>
            <Image
              src={'/images/logob.png'}
              alt='logo'
              width={1000}
              height={1000}
              className='object-cover w-28 md:w-32 lg:w-36 xl:w-40'
            />
          </div>
        </Link>
        {/* text */}
        <h1 className='text-xs text-center max-w-xs mx-auto sm:max-w-md sm:text-sm md:max-w-xl md:text-base lg:max-w-3xl lg:text-lg xl:max-w-4xl xl:text-xl text-babyblack'>
          Glo Rides is a car rental company that provides car rental services
          for customers seeking to hire or rent a car for commercial or personal
          purposes. we also offer opportunity for people to enlist their cars
          under our platform and make a fortune from it. We pride ourselves in
          delivering the best car rental service in and around the globe{' '}
        </h1>
        {/* links and social */}
        <div className='space-y-6 sm:space-y-8 md:space-y-0 md:flex md:justify-between md:items-center'>
          {/* links */}
          <div className='flex justify-between items-center md:gap-6 lg:gap-8 xl:gap-10'>
            <Link href='/allcars'>
              <h1 className='text-xs sm:text-sm font-bold lg:text-base xl:text-lg'>
                Rent a Car
              </h1>
            </Link>
            <Link href='/partnerwithus'>
              <h1 className='text-xs font-bold sm:text-sm lg:text-base xl:text-lg'>
                Enlist you Car
              </h1>
            </Link>
            <Link href='/aboutus'>
              <h1 className='text-xs sm:text-sm font-bold lg:text-base xl:text-lg'>
                About us
              </h1>
            </Link>
            <Link href='/contactus'>
              <h1 className='text-xs sm:text-sm font-bold lg:text-base xl:text-lg'>
                Contact us
              </h1>
            </Link>
            <Link href='/documentations'>
              <h1 className='text-xs  sm:text-sm font-bold lg:text-base xl:text-lg'>
                Documentations
              </h1>
            </Link>
          </div>
          {/* social */}
          <div className='flex justify-center items-center gap-6 lg:gap-8 xl:gap-10'>
            <FaFacebook className='text-babyblack text-lg sm:text-xl lg:text-2xl xl:text-3xl' />
            <TbBrandTwitterFilled className='text-babyblack text-lg sm:text-xl lg:text-2xl xl:text-3xl' />
            <FaInstagramSquare className='text-babyblack text-lg sm:text-xl lg:text-2xl xl:text-3xl' />
            <FaLinkedin className='text-babyblack sm:text-xl text-lg lg:text-2xl xl:text-3xl' />
          </div>
        </div>
      </div>
      {/* line and copy right*/}
      <div className='space-y-6'>
        {/* line */}
        <div className='bg-babyblack bg-opacity-60 w-full h-[1px] md:h-[2px]'></div>
        {/* copyright */}
        <h1 className='text-xs text-center sm:text-sm mx-auto font-bold lg:text-base'>
          copyright @ 2022-2023 Glo Rides. All Rights Reserved
        </h1>
      </div>
      {/* picture */}
      <div className='   relative '>
        <Image
          src={'/images/foot2.svg'}
          alt='footer'
          width={1000}
          height={1000}
          className='object-cover w-full '
        />
      </div>
    </section>
  )
}

export default Footer
