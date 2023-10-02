import React from 'react'
import Navbar from '@/components/Navigation/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import { FiUserPlus } from 'react-icons/fi'
import { BiLockOpenAlt } from 'react-icons/bi'
import { AiOutlineBell } from 'react-icons/ai'
import Footer from '@/components/Navigation/Footer'
function View() {
  return (
    <>
      <Navbar />
      <section className='bg-[#F5F5F5]  w-full  '>
        {/* profile information */}
        <div className='flex flex-col justify-center items-center px-6  py-6 space-y-10 md:space-y-0 md:flex-row md:items-start md:gap-6 max-w-6xl'>
          {/* profile data */}
          <div className='bg-white rounded shadow-md px-6 py-4 flex flex-col justify-center items-center mx-auto space-y-4 w-72'>
            {/* image */}
            <div className='  relative '>
              <Image
                src={'/images/avatar.png'}
                alt='logo'
                width={1000}
                height={1000}
                className='object-cover w-36 rounded-full '
              />
            </div>
            {/* text */}
            <div className='space-y-4 w-full'>
              <h1 className='text-center font-bold'>Hello Michell Okwu</h1>
              {/* button */}
              <div className='flex flex-col gap-3'>
                <Link href='/Userprofile/edit' className=' '>
                  <div className='flex  justify-center items-center gap-3 border-babypurple border  px-4 py-2 text-babyblack rounded '>
                    <FiUserPlus className='' />
                    <h1 className='text-xs '>Edit Profile</h1>
                  </div>
                </Link>
                <Link href='/Userprofile/password' className=' '>
                  <div className='flex  justify-center items-center gap-3 border-babypurple border  px-4 py-2 text-babyblack rounded '>
                    <BiLockOpenAlt className='' />
                    <h1 className='text-xs '>Passwords</h1>
                  </div>
                </Link>
                <Link href='/Userprofile/notificiations' className=' '>
                  <div className='flex  justify-center items-center gap-3 border-babypurple border  px-4 py-2 text-babyblack rounded '>
                    <AiOutlineBell className='' />
                    <h1 className='text-xs '>Notifications</h1>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* text */}
          <div className='space-y-10 w-72 md:w-full'>
            {/* profile information */}
            <div className='bg-white space-y-4 '>
              {/* header */}
              <div className='bg-softpurple px-3 py-2'>
                <h1 className='text-sm font-bold'>Profile Information</h1>
              </div>
              {/* fullname*/}
              <div className='space-y-2 px-3 border-b pb-2'>
                <h1 className='text-xs font-bold'>Full Name</h1>
                <p className='text-xs'>Michell Okwu</p>
              </div>
              {/* email */}
              <div className='space-y-2 px-3 border-b pb-2'>
                <h1 className='text-xs font-bold'>Email</h1>
                <p className='text-xs'>MichellOkwu@gmail.com</p>
              </div>
              {/* phnoe */}
              <div className='space-y-2 px-3 border-b pb-2'>
                <h1 className='text-xs font-bold'>Phone Number</h1>
                <p className='text-xs'>+2348138121986</p>
              </div>
              {/* Dob */}
              <div className='space-y-2 px-3 border-b pb-2'>
                <h1 className='text-xs font-bold'>Date of Birth</h1>
                <p className='text-xs'>25-August-1992</p>
              </div>
              {/* gender */}
              <div className='space-y-2 px-3  pb-2'>
                <h1 className='text-xs font-bold'>Gender</h1>
                <p className='text-xs'>Male</p>
              </div>
            </div>
            {/* ADDress */}
            <div className='bg-white  space-y-4'>
              {/* header */}
              <div className='bg-softpurple px-3 py-2'>
                <h1 className='text-sm font-bold'>Location</h1>
              </div>
              {/* Address*/}
              <div className='space-y-2 px-3 border-b pb-2'>
                <h1 className='text-xs font-bold'>Address</h1>
                <p className='text-xs'>No 2 rumola street, Ph, Nigeria</p>
              </div>
              {/* city */}
              <div className='space-y-2 px-3 border-b pb-2'>
                <h1 className='text-xs font-bold'>city</h1>
                <p className='text-xs'>Port Harcourt</p>
              </div>
              {/* state */}
              <div className='space-y-2 px-3 border-b pb-2'>
                <h1 className='text-xs font-bold'>State</h1>
                <p className='text-xs'>Rivers</p>
              </div>
              {/* Country */}
              <div className='space-y-2 px-3 border-b pb-2'>
                <h1 className='text-xs font-bold'>Country</h1>
                <p className='text-xs'>Nigeria</p>
              </div>
              {/* Zip code */}
              <div className='space-y-2 px-3  pb-2'>
                <h1 className='text-xs font-bold'>Zip Code</h1>
                <p className='text-xs'>111021234</p>
              </div>
            </div>
            {/* Driving information */}
            <div className='bg-white  space-y-4 '>
              {/* header */}
              <div className='bg-softpurple px-3 py-2'>
                <h1 className='text-sm font-bold'>Driving Information</h1>
              </div>
              {/* Driving license no*/}
              <div className='space-y-2 px-3 border-b pb-2'>
                <h1 className='text-xs font-bold'>Driver's License Number</h1>
                <p className='text-xs'>N2235on1244</p>
              </div>
              {/* card */}
              <div className='space-y-2 px-3  pb-2'>
                <h1 className='text-xs font-bold'>Driver's Liciense Card</h1>
                {/* image */}
                <div className='  relative '>
                  <Image
                    src={'/images/idcard.png'}
                    alt='logo'
                    width={1000}
                    height={1000}
                    className='object-cover  w-48 '
                  />
                </div>
              </div>
            </div>
            {/* insurance information */}
            <div className='bg-white  space-y-4 '>
              {/* header */}
              <div className='bg-softpurple px-3 py-2'>
                <h1 className='text-sm font-bold'>Insurance Information</h1>
              </div>
              {/* Driving license no*/}
              <div className='space-y-2 px-3 border-b pb-2'>
                <h1 className='text-xs font-bold'>Insurance License Number</h1>
                <p className='text-xs'>N2235on1244</p>
              </div>
              {/* card */}
              <div className='space-y-2 px-3  pb-2'>
                <h1 className='text-xs font-bold'>Insurance Liciense Card</h1>
                {/* image */}
                <div className='  relative '>
                  <Image
                    src={'/images/idcard.png'}
                    alt='logo'
                    width={1000}
                    height={1000}
                    className='object-cover  w-48 '
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  )
}

export default View

// F4EAF3
