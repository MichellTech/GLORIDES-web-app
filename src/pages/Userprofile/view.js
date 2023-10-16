import React from 'react'
import Navbar from '@/components/Navigation/Navbar'
import Profilecomp from '@/components/Profilecomp'
import Image from 'next/image'
import Link from 'next/link'

import Footer from '@/components/Navigation/Footer'
import Profilecompbig from '@/components/Profilecompbig'
function view() {
  return (
    <>
      {/* small nav */}
      <div className='sticky  md:fixed top-0 left-0 right-0 bg-white z-50  '>
        <Navbar />
        <div className='example md:hidden  overflow-y-auto w-full '>
          <Profilecomp />
        </div>
      </div>

      {/* body */}
      <div className='bg-[#F5F5F5] md:bg-white bg-opacity-50 pt-8  md:pt-0 md:px-6  md:flex md:justify-between md:items-start md:gap-4 w-full md:relative  '>
        {/* bg-nave links */}
        <div className='hidden md:block md:w-1/4 fixed top-32  md:pr-10       '>
          <Profilecompbig />
        </div>
        {/* information */}
        <div className=' px-6   space-y-10  md:w-3/4  md:absolute md:top-32 md:right-0 pb-20  '>
          {/* welcom picture */}
          <div className='bg-white w-full flex justify-center items-center flex-col border px-6 py-4 sm:px-8 sm:py-6 rounded-md space-y-4 shadow-md md:flex-row md:space-y-0 md:w-full md:gap-4'>
            <div className='  relative max-w-xs '>
              <Image
                src={'/images/avatar.png'}
                alt='logo'
                width={1000}
                height={1000}
                className='object-cover w-28 xl:w-32 rounded-full '
              />
            </div>
            <div className='space-y-2 md:w-full'>
              <h1 className='font-bold text-base text-center sm:text-lg md:text-base md:text-left'>
                {' '}
                Hello Michell{' '}
              </h1>
              <h1 className='text-xs text-center sm:text-sm md:text-left md:text-xs '>
                Welcome to your profile page! Here, you have the power to
                customize your experience. Edit your profile, enhance your
                security settings, and manage your payments effortlessly.Make
                your experience truly yours.
              </h1>
            </div>
          </div>
          {/* profile information */}
          <div className='bg-white space-y-4 lg:space-y-6 shadow-md rounded-md border py-4 px-6 '>
            {/* header */}
            <div className='border-b   pb-4 '>
              <h1 className='text-base font-bold '>Profile Information</h1>
            </div>
            {/* fullname*/}
            <div className='space-y-2  pt-2 border-b pb-3 md:flex md:justify-between md:items-center md:gap-2 md:space-y-0'>
              <h1 className='text-xs text-slate-500   '>Full Name</h1>
              <p className='text-base '>Michell Okwu</p>
            </div>
            {/* email */}
            <div className='space-y-2 border-b pb-3 md:flex md:justify-between md:items-center md:gap-2 md:space-y-0'>
              <h1 className='text-xs text-slate-500    '>Email</h1>
              <p className='text-base'>MichellOkwu@gmail.com</p>
            </div>
            {/* phnoe */}
            <div className='space-y-2 border-b pb-3 md:flex md:justify-between md:items-center md:gap-2 md:space-y-0'>
              <h1 className='text-xs text-slate-500   '>Phone Number</h1>
              <p className='text-base  '>+2348138121986</p>
            </div>
            {/* Dob */}
            <div className='space-y-2 border-b pb-3 md:flex md:justify-between md:items-center md:gap-2 md:space-y-0'>
              <h1 className='text-xs text-slate-500   '>Date of Birth</h1>
              <p className='text-base  '>25-August 2023</p>
            </div>
            {/* gender */}
            <div className='space-y-2 border-b pb-3 md:flex md:justify-between md:items-center md:gap-2 md:space-y-0'>
              <h1 className='text-xs text-slate-500   '>Gender</h1>
              <p className='text-base  '>Male</p>
            </div>
          </div>
          {/* ADDress */}
          <div className='bg-white space-y-4 lg:space-y-6 shadow-md rounded-md border py-4 px-6 '>
            {/* header */}
            <div className='border-b   pb-4 '>
              <h1 className='text-base font-bold '>Location</h1>
            </div>
            {/* fullname*/}
            <div className='space-y-2  pt-2 border-b pb-3 md:flex md:justify-between md:items-center md:gap-2 md:space-y-0'>
              <h1 className='text-xs text-slate-500   '>Address</h1>
              <p className='text-base '>No 2 rumola street, Ph, Nigeria</p>
            </div>
            {/* email */}
            <div className='space-y-2 border-b pb-3 md:flex md:justify-between md:items-center md:gap-2 md:space-y-0'>
              <h1 className='text-xs text-slate-500    '>city</h1>
              <p className='text-base'>Port Harcourt</p>
            </div>
            {/* State*/}
            <div className='space-y-2 border-b pb-3 md:flex md:justify-between md:items-center md:gap-2 md:space-y-0'>
              <h1 className='text-xs text-slate-500   '>State</h1>
              <p className='text-base  '>Rivers</p>
            </div>
            {/* Country*/}
            <div className='space-y-2 border-b pb-3 md:flex md:justify-between md:items-center md:gap-2 md:space-y-0'>
              <h1 className='text-xs text-slate-500   '>Country</h1>
              <p className='text-base  '>Nigeria</p>
            </div>
            {/* Zip Code*/}
            <div className='space-y-2 border-b pb-3 md:flex md:justify-between md:items-center md:gap-2 md:space-y-0'>
              <h1 className='text-xs text-slate-500   '>Zip Code</h1>
              <p className='text-base  '>111021234</p>
            </div>
          </div>

          {/* Driving information */}
          <div className='bg-white space-y-4 lg:space-y-6 shadow-md rounded-md border py-4 px-6'>
            {/* header */}
            <div className='border-b   pb-4 '>
              <h1 className='text-base font-bold '>Driving Information</h1>
            </div>
            {/* Driving license no*/}

            <div className='space-y-2  pt-2 border-b pb-3 md:flex md:justify-between md:items-center md:gap-2 md:space-y-0'>
              <h1 className='text-xs text-slate-500   '>
                Driver's License Number
              </h1>
              <p className='text-base '>N2235on1244</p>
            </div>
            {/* card */}
            <div className='space-y-2  pb-2  md:flex md:justify-between md:items-start md:gap-2 md:space-y-0'>
              <h1 className='text-xs text-slate-500  '>
                Driver's Liciense Card
              </h1>
              {/* image */}
              <div className='  relative '>
                <Image
                  src={'/images/idcard.png'}
                  alt='logo'
                  width={1000}
                  height={1000}
                  className='object-cover  w-48 lg:w-60 xl:w-72'
                />
              </div>
            </div>
          </div>
          {/* Insurance Information */}
          <div className='bg-white space-y-4 lg:space-y-6 shadow-md rounded-md border py-4 px-6'>
            {/* header */}
            <div className='border-b   pb-4 '>
              <h1 className='text-base font-bold '>Insurance Information</h1>
            </div>
            {/*  Insurance Information*/}

            <div className='space-y-2  pt-2 border-b pb-3 md:flex md:justify-between md:items-center md:gap-2 md:space-y-0'>
              <h1 className='text-xs text-slate-500   '>
                Insurance License Number
              </h1>
              <p className='text-base '>N2235on1244</p>
            </div>
            {/* card */}
            <div className='space-y-2  pb-2  md:flex md:justify-between md:items-start md:gap-2 md:space-y-0'>
              <h1 className='text-xs text-slate-500  '>
                Insurance Liciense Card
              </h1>
              {/* image */}
              <div className='  relative '>
                <Image
                  src={'/images/idcard.png'}
                  alt='logo'
                  width={1000}
                  height={1000}
                  className='object-cover  w-48 lg:w-60 xl:w-72'
                />
              </div>
            </div>
          </div>
        </div>

        {/* <Footer /> */}
      </div>
    </>
  )
}

export default view
