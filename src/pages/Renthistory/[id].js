import React, { useMemo } from 'react'
import { useRouter } from 'next/router'
import { cars } from '../../utilis/Cardata'
import Navbar from '@/components/Navigation/Navbar'
import Footer from '@/components/Navigation/Footer'
import Image from 'next/image'
import Carousel from '../../components/Carousel/Image'
import { MdKeyboardBackspace, MdOutlineLocationSearching } from 'react-icons/md'
import Link from 'next/link'
import { BiSolidCarGarage, BiCurrentLocation } from 'react-icons/bi'
import { LuFuel } from 'react-icons/lu'
import { GiGearStickPattern, GiCarSeat } from 'react-icons/gi'
import { TbClockSearch } from 'react-icons/tb'

function Rentedcar() {
  const router = useRouter()

  const carId = router.query.id

  const singlecar = useMemo(
    () => cars.filter((item) => item.id === Number(carId))?.[0],
    [carId]
  )

  return (
    <>
      <Navbar />
      <section className='bg-[#F5F5F5]  w-full pt-10 xl:pt-16 '>
        {/* body */}
        <div className='max-w-md sm:max-w-lg mx-auto font-sans md:max-w-4xl lg:max-w-6xl xl:max-w-7xl  px-4 md:px-6  lg:px-8 space-y-6 lg:space-y-10   pb-10  '>
          {/* back */}
          <Link href='/Renthistory'>
            <div className='flex items-center gap-2 cursor-pointer'>
              <MdKeyboardBackspace className='lg:text-2xl' />
              <h1 className='text-sm  lg:text-base font-bold'>Rent history</h1>
            </div>
          </Link>

          {/* body */}
          <div className='space-y-5 md:space-y-0  w-full md:flex md:items-start  md:gap-6  '>
            {/* first */}
            <div className='space-y-5 md:space-y-6 lg:space-y-8 md:w-2/3 lg:w-3/4'>
              {/* image */}
              <div className='bg-white px-4 py-4 rounded-lg shadow-md lg:py-6'>
                <h1 className='font-bold text-sm sm:text-base md:text-lg lg:text-xl border-b pb-2'>
                  Car Photos
                </h1>
                {/* img */}
                <div className='w-full bg-white '>
                  <Carousel />
                </div>
              </div>
              {/* description */}
              <div className='bg-white px-4 py-4 rounded-lg space-y-2 lg:space-y-4 shadow-md lg:py-6'>
                <h1 className='font-bold text-sm sm:text-base md:text-lg lg:text-xl border-b pb-2'>
                  Car Description
                </h1>
                {/* img */}
                <div className='w-full'>
                  <h1 className='text-xs lg:text-sm'>
                    {singlecar?.description}
                  </h1>
                </div>
              </div>
              {/* car features */}
              <div className='bg-white px-4 py-4 rounded-lg space-y-2 lg:space-y-4 shadow-md lg:py-6'>
                <h1 className='font-bold text-sm sm:text-base md:text-lg lg:text-xl border-b pb-2'>
                  Car Features
                </h1>
                {/* features */}
                <div className='w-full grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 justify-center items-center gap-x-1 sm:gap-x-3 md:gap-x-3 gap-y-3 sm:w-max lg:gap-x-3'>
                  {/* one */}
                  <div className='flex items-center gap-2 border border-babyblack px-2 py-2  w-28 rounded-sm'>
                    <LuFuel className='text-xl' />
                    <div className='space-y-1'>
                      <h1 className='text-xs font-bold'>Diesel</h1>
                      <p className='text-xs'>Fuel Engine</p>
                    </div>
                  </div>
                  {/* two */}
                  <div className='flex items-center gap-2 border border-babyblack px-2 py-2  w-28 rounded-sm'>
                    <BiSolidCarGarage className='text-xl' />
                    <div className='space-y-1'>
                      <h1 className='text-xs font-bold'>Doors</h1>
                      <p className='text-xs'>4 Doors</p>
                    </div>
                  </div>
                  {/* three */}
                  <div className='flex items-center gap-2 border border-babyblack px-2 py-2  w-28 rounded-sm'>
                    <GiCarSeat className='text-xl' />
                    <div className='space-y-1'>
                      <h1 className='text-xs font-bold'>Seat</h1>
                      <p className='text-xs'>4 Seater</p>
                    </div>
                  </div>
                  {/* four */}
                  <div className='flex items-center gap-2 border border-babyblack px-2 py-2  w-28 rounded-sm'>
                    <GiGearStickPattern className='text-xl' />
                    <div className='space-y-1'>
                      <h1 className='text-xs font-bold'>Gear</h1>
                      <p className='text-xs'>Automatic</p>
                    </div>
                  </div>
                  {/* five */}
                  <div className='flex items-center gap-2 border border-babyblack px-2 py-2  w-28 rounded-sm'>
                    <TbClockSearch className='text-xl' />
                    <div className='space-y-1'>
                      <h1 className='text-xs font-bold'>Miles</h1>
                      <p className='text-xs'>2400</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* pickup */}
              <div className='bg-white px-4 py-4 rounded-lg space-y-2 lg:space-y-4 shadow-md lg:py-6'>
                <h1 className='font-bold text-sm sm:text-base md:text-lg lg:text-xl border-b pb-2'>
                  Pickup Location
                </h1>
                {/* img */}
                <div className='flex items-center gap-2'>
                  <BiCurrentLocation className='lg:text-xl' />
                  <h1 className='text-xs lg:text-sm'>
                    No 6 rumola road Aba, Abia State
                  </h1>
                </div>
              </div>
              {/* drop off */}
              <div className='bg-white px-4 py-4 rounded-lg space-y-2 lg:space-y-4 shadow-md lg:py-6'>
                <h1 className='font-bold text-sm sm:text-base md:text-lg lg:text-xl border-b pb-2'>
                  Drop Off Location
                </h1>
                {/* img */}
                <div className='flex items-center gap-2'>
                  <MdOutlineLocationSearching className='lg:text-xl' />
                  <h1 className='text-xs lg:text-sm'>
                    No 6 rumola road Aba, Abia State
                  </h1>
                </div>
              </div>
            </div>
            {/* second */}
            <div className='md:w-1/3 lg:w-1/4'>
              {/* summary */}
              <div className='bg-white px-4 py-4 rounded-lg space-y-3  md:space-y-4 lg:space-y-5 shadow-md'>
                <h1 className='font-bold text-base sm:text-base md:text-base lg:text-lg border-b border-babyblack pb-2'>
                  Cost Summary
                </h1>
                {/* one */}
                <div className='w-full  flex justify-between items-center gap-2 border-b pb-4 '>
                  <h1 className='text-xs xl:text-sm'>Rent Cost</h1>
                  <h1 className='text-xs xl:text-sm font-bold'>$ 100</h1>
                </div>
                {/* two */}
                <div className='w-full  flex justify-between items-center gap-2   border-b pb-4'>
                  <h1 className='text-xs xl:text-sm '>Insurance Cost</h1>
                  <h1 className='text-xs  xl:text-sm font-bold'>$ 10</h1>
                </div>
                {/* one */}
                <div className='w-full  flex justify-between items-center gap-2  border-b pb-4 border-babyblack '>
                  <h1 className='text-xs xl:text-sm'>Child Seat</h1>
                  <h1 className='text-xs xl:text-sm  font-bold'>$ 10</h1>
                </div>
                {/* one */}
                <div className='w-full  flex justify-between items-center gap-2 border-b  border-babyblack pb-4 '>
                  <h1 className='text-xs md:text-sm lg:text-base font-bold'>
                    Total Cost
                  </h1>
                  <h1 className='text-xs  md:text-sm lg:text-base font-bold'>
                    $ 120
                  </h1>
                </div>
                {/* settings*/}
                <div className='w-full  space-y-4 py-4'>
                  <button className='bg-babypurple px-5 py-3 w-full text-xs md:px-2 text-white rounded-sm transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-500 hover:border-none hover:text-white'>
                    Return Vehicle
                  </button>
                  <button className='border-babypurple w-full border px-5 py-3 md:px-2 text-xs text-babyblack rounded-sm transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-500 hover:border-none hover:text-white'>
                    Cancel Booking
                  </button>
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

export default Rentedcar
