import React from 'react'
import Navbar from '../../components/Navigation/Navbar/index'
import Footer from '@/components/Navigation/Footer'
import { GoCheckCircle } from 'react-icons/go'
import Link from 'next/link'
import Image from 'next/image'
import { LuFuel } from 'react-icons/lu'
import { GiGearStickPattern } from 'react-icons/gi'
import {
  MdOutlineAirlineSeatReclineExtra,
  MdOutlineMyLocation,
  MdOutlineLocationSearching,
} from 'react-icons/md'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
function success() {
  const { successinfo } = useSelector((store) => store.rental)
  const router = useRouter()

  console.log(successinfo)
  return (
    <>
      <Navbar />
      <section className='flex flex-col justify-center items-center min-h-screen  space-y-12 sm:space-y-16 py-10 w-full px-6'>
        {/* cta */}
        <div className='space-y-4 flex flex-col justify-center items-center md:space-y-8 '>
          {/* logo */}
          <GoCheckCircle className='text-green-700 text-7xl md:text-9xl xl:text-[9rem]' />
          <h1 className='text-xl md:text-2xl font-bold xl:text-3xl'>
            {' '}
            Your booking was successfull
          </h1>
          <h1 className='text-sm md:text-base '>
            reservation code : <span>{successinfo?.booked_by?._id}</span>
          </h1>
          <div
            onClick={() => {
              router.push({
                pathname: '/messages',
                query: { ownerid: successinfo?.car_owner?._id },
              })
            }}
            className='px-4 py-2 cursor-pointer bg-babypurple text-white shadow hover:shadow-lg text-sm md:text-base md:px-6 xl:px-8'
          >
            {' '}
            Message Owner
          </div>
        </div>
        {/* booking details */}
        <div className='space-y-6 flex flex-col justify-center items-center w-full'>
          <h1 className='text-xs md:text-sm lg:text-base'>
            Booking Information
          </h1>
          <div className='space-y-6 sm:space-y-8 flex justify-center items-center flex-col md:flex-row md:space-y-0 md:gap-3 md:justify-between w-full max-w-4xl'>
            {/* image */}
            <Image
              src={'/images/avatar.png'}
              alt='logo'
              width={1000}
              height={1000}
              className='object-cover w-20 md:w-24 lg:w-28  xl:w-32  rounded-md border-2 '
            />
            {/* car name */}
            <div className='space-y-6 flex justify-center items-center flex-col md:space-y-2 md:justify-start md:items-start'>
              <h1 className='text-lg font-mono'>
                {successinfo?.car_booked?.car_name}
              </h1>
              {/* params */}
              <div className=' grid grid-cols-3 gap-x-3 justify-center items-center mx-auto'>
                {/* two */}
                <div className='flex items-center gap-1'>
                  <LuFuel className='text-base' />
                  <h1 className='text-xs text-babyblack'>
                    {successinfo?.car_booked?.fuel_type}
                  </h1>
                </div>
                {/* three */}
                <div className='flex justify-center items-center gap-1'>
                  <GiGearStickPattern className='text-base' />
                  <h1 className='text-xs text-babyblack'>
                    {successinfo?.car_booked?.gear_type}
                  </h1>
                </div>

                {/* six */}
                <div className='flex items-center gap-1 justify-end '>
                  <MdOutlineAirlineSeatReclineExtra className='text-base' />
                  <h1 className='text-xs text-babyblack'>
                    {' '}
                    {successinfo?.car_booked?.seats_number} Seats
                  </h1>
                </div>
              </div>
            </div>
            {/* location and tim */}
            <div className='space-y-6 sm:flex sm:items-center sm:gap-6 sm:space-y-0 md:flex-col md:space-y-2 md:gap-0'>
              {/* start */}
              <div className='flex items-start gap-2'>
                <MdOutlineLocationSearching className='text-xl' />
                <div className=''>
                  <h1 className='text-xs lg:text-sm'>
                    {moment(successinfo?.start_date).format(
                      'MMMM Do YYYY, h:mm:ss a'
                    )}
                  </h1>
                  <h1 className='text-xs'>{successinfo?.pickup_address}</h1>
                </div>
              </div>
              {/* end */}
              <div className='flex items-start gap-2'>
                <MdOutlineMyLocation className='text-xl' />
                <div className=''>
                  <h1 className='text-xs lg:text-sm'>
                    {moment(successinfo?.end_date).format(
                      'MMMM Do YYYY, h:mm:ss a'
                    )}
                  </h1>
                  <h1 className='text-xs'>{successinfo?.pickup_address}</h1>
                </div>
              </div>
            </div>
            {/* cost */}
            <h1 className='text-babypurple text-3xl font-mono lg:text-4xl'>
              ${successinfo.amount}
            </h1>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default success
