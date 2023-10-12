import React from 'react'
import Navbar from '@/components/Navigation/Navbar'
import Footer from '../../components/Navigation/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { TbWallet } from 'react-icons/tb'

function Dashboard() {
  return (
    <>
      <Navbar />
      <section className='mt-6 sm:mt-10 max-w-md sm:max-w-2xl mx-auto font-sans md:max-w-4xl lg:max-w-6xl xl:max-w-7xl  px-4 md:px-6  lg:px-8 space-y-10'>
        {/* title */}
        <div className='border w-full rounded-md pt-4 xl:pt-6 px-6 md:flex md:justify-between md:items-end md:gap-10'>
          {/* text */}
          <div className='flex flex-col justify-center items-center md:justify-start md:items-start md:mx-0 space-y-4 lg:space-y-5 xl:space-y-6 mx-auto md:w-4/6  '>
            <h1 className='text-lg font-bold   lg:text-xl'>
              Hello Okwu Chiedozie !
            </h1>
            <p className='text-xs text-center md:text-left max-w-xs md:max-w-full lg:text-sm  xl:text-base '>
              Welcome to your Host Dashboard! Your gateway to managing your car
              rentals efficiently. Explore your listings, connect with guests,
              and boost your earnings. Let's hit the road to success together!
            </p>
            <div className='flex items-center gap-4 lg:gap-6  pb-4 xl:pb-6'>
              <Link
                href='/Host/enlistacar'
                className='px-6  py-2 border  rounded-md text-xs lg:text-sm tracking-wide transition ease-in-out delay-150   hover:scale-110 border-babyblack hover:bg-indigo-500 duration-300 hover:text-white hover:border-none'
              >
                {' '}
                Enlist a car
              </Link>
              <Link
                href='/Host/enlistacar'
                className='px-6 py-2  bg-babypurple rounded-md text-xs lg:text-sm text-white tracking-wide transition ease-in-out delay-150  hover:scale-110 hover:bg-indigo-500 duration-300 '
              >
                {' '}
                Withdrawl
              </Link>
            </div>
          </div>
          {/* image */}
          <div className='hidden md:block '>
            <Image
              src={'/images/dash2.png'}
              alt='dash'
              width={1000}
              height={1000}
              className='object-cover w-48 lg:w-52 xl:w-64  '
            />
          </div>
        </div>
        {/* statistics */}
        <div className='flex  flex-wrap  justify-between   gap-4 '>
          {/* one */}
          <div className='border  rounded-md px-4 py-4  space-y-2 w-full '>
            {/* header */}
            <div className='flex justify-between items-center gap-2'>
              <h1 className='text-xs'>Available Balance</h1>
              <div className='flex justify-center items-center p-2 bg-babygrey rounded-full '>
                <TbWallet className='' />
              </div>
            </div>
            {/* text */}
            <h1 className='font-bold text-2xl'>$24,000</h1>
          </div>
          {/* two */}
          <div className='border  rounded-md px-4 py-4 space-y-2 w-full '>
            {/* header */}
            <div className='flex justify-between items-center gap-2'>
              <h1 className='text-xs'>Available Balance</h1>
              <div className='flex justify-center items-center p-2 bg-babygrey rounded-full '>
                <TbWallet className='' />
              </div>
            </div>
            {/* text */}
            <h1 className='font-bold text-2xl'>$24,000</h1>
          </div>
          {/* three */}
          <div className='border  rounded-md px-4 py-4  space-y-2  w-full'>
            {/* header */}
            <div className='flex justify-between items-center gap-2'>
              <h1 className='text-xs'>Available Balance</h1>
              <div className='flex justify-center items-center p-2 bg-babygrey rounded-full '>
                <TbWallet className='' />
              </div>
            </div>
            {/* text */}
            <h1 className='font-bold text-2xl'>$24,000</h1>
          </div>
          {/* four */}
          <div className='border  rounded-md px-4 py-4 space-y-2 w-full'>
            {/* header */}
            <div className='flex justify-between items-center gap-2'>
              <h1 className='text-xs'>Available Balance</h1>
              <div className='flex justify-center items-center p-2 bg-babygrey rounded-full '>
                <TbWallet className='' />
              </div>
            </div>
            {/* text */}
            <h1 className='font-bold text-2xl'>$24,000</h1>
          </div>
        </div>
      </section>
    </>
  )
}

export default Dashboard
