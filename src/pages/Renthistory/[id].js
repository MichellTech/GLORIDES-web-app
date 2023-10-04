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
      <section className='bg-[#F5F5F5]  w-full py-10 xl:py-16 '>
        {/* body */}
        <div className='max-w-md sm:max-w-xl mx-auto font-sans md:max-w-4xl lg:max-w-5xl xl:max-w-7xl  px-4 md:px-6  lg:px-8 space-y-6'>
          {/* back */}
          <Link href='/Renthistory'>
            <div className='flex items-center gap-2 cursor-pointer'>
              <MdKeyboardBackspace />
              <h1 className='text-sm font-bold'>Rent history</h1>
            </div>
          </Link>

          {/* body */}
          <div className='space-y-4'>
            {/* first */}
            <div className='space-y-4'>
              {/* image */}
              <div className='bg-white px-4 py-4 rounded-lg'>
                <h1 className='font-bold text-sm sm:text-base md:text-lg lg:text-xl border-b pb-2'>
                  Car Photos
                </h1>
                {/* img */}
                <div className='w-full bg-white '>
                  <Carousel />
                </div>
              </div>
              {/* description */}
              <div className='bg-white px-4 py-4 rounded-lg space-y-2'>
                <h1 className='font-bold text-sm sm:text-base md:text-lg lg:text-xl border-b pb-2'>
                  Car Description
                </h1>
                {/* img */}
                <div className='w-full'>
                  <h1 className='text-xs'>{singlecar?.description}</h1>
                </div>
              </div>
              {/* car features */}
              <div className='bg-white px-4 py-4 rounded-lg space-y-2'>
                <h1 className='font-bold text-sm sm:text-base md:text-lg lg:text-xl border-b pb-2'>
                  Car Features
                </h1>
                {/* features */}
                <div className='w-full grid grid-cols-3 justify-center items-center gap-x-1 gap-y-3'>
                  {/* one */}
                  <div className='flex items-center gap-2 border border-babyblack px-2 py-2  w-28 rounded-sm'>
                    <LuFuel className='text-2xl' />
                    <div className='space-y-1'>
                      <h1 className='text-sm font-bold'>Diesel</h1>
                      <p className='text-xs'>Fuel Engine</p>
                    </div>
                  </div>
                  {/* two */}
                  <div className='flex items-center gap-2 border border-babyblack px-2 py-2  w-28 rounded-sm'>
                    <BiSolidCarGarage className='text-2xl' />
                    <div className='space-y-1'>
                      <h1 className='text-sm font-bold'>Doors</h1>
                      <p className='text-xs'>4 Doors</p>
                    </div>
                  </div>
                  {/* three */}
                  <div className='flex items-center gap-2 border border-babyblack px-2 py-2  w-28 rounded-sm'>
                    <GiCarSeat className='text-2xl' />
                    <div className='space-y-1'>
                      <h1 className='text-sm font-bold'>Seat</h1>
                      <p className='text-xs'>4 Seater</p>
                    </div>
                  </div>
                  {/* four */}
                  <div className='flex items-center gap-2 border border-babyblack px-2 py-2  w-28 rounded-sm'>
                    <GiGearStickPattern className='text-2xl' />
                    <div className='space-y-1'>
                      <h1 className='text-sm font-bold'>Gear</h1>
                      <p className='text-xs'>Automatic</p>
                    </div>
                  </div>
                  {/* five */}
                  <div className='flex items-center gap-2 border border-babyblack px-2 py-2  w-28 rounded-sm'>
                    <TbClockSearch className='text-2xl' />
                    <div className='space-y-1'>
                      <h1 className='text-sm font-bold'>Miles</h1>
                      <p className='text-xs'>2400</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* pickup */}
              <div className='bg-white px-4 py-4 rounded-lg space-y-2'>
                <h1 className='font-bold text-sm sm:text-base md:text-lg lg:text-xl border-b pb-2'>
                  Pickup Location
                </h1>
                {/* img */}
                <div className='flex items-center gap-2'>
                  <BiCurrentLocation />
                  <h1 className='text-xs'>No 6 rumola road Aba, Abia State</h1>
                </div>
              </div>
              {/* drop off */}
              <div className='bg-white px-4 py-4 rounded-lg space-y-2'>
                <h1 className='font-bold text-sm sm:text-base md:text-lg lg:text-xl border-b pb-2'>
                  Drop Off Location
                </h1>
                {/* img */}
                <div className='flex items-center gap-2'>
                  <MdOutlineLocationSearching />
                  <h1 className='text-xs'>No 6 rumola road Aba, Abia State</h1>
                </div>
              </div>
            </div>
            {/* second */}
            <div>
              {/* summary */}
              <div className='bg-white px-4 py-4 rounded-lg space-y-2'>
                <h1 className='font-bold text-sm sm:text-base md:text-lg lg:text-xl border-b pb-2'>
                  Cost Summary
                </h1>
                {/* one */}
                <div className='w-full  flex justify-between items-center gap-2 '>
                  <h1 className='text-xs'>Rent Cost</h1>
                  <h1 className='text-xs font-bold'>$ 100</h1>
                </div>
                {/* two */}
                <div className='w-full  flex justify-between items-center gap-2 '>
                  <h1 className='text-xs'>Insurance Cost</h1>
                  <h1 className='text-xs font-bold'>$ 10</h1>
                </div>
                {/* one */}
                <div className='w-full  flex justify-between items-center gap-2 '>
                  <h1 className='text-xs'>Child Seat</h1>
                  <h1 className='text-xs font-bold'>$ 10</h1>
                </div>
                {/* one */}
                <div className='w-full  flex justify-between items-center gap-2 border-b border-t py-2 '>
                  <h1 className='text-xs'>Total Cost</h1>
                  <h1 className='text-xs font-bold'>$ 120</h1>
                </div>
                {/* settings*/}
                <div className='w-full  flex justify-between items-center gap-4 py-6'>
                  <button className='bg-babypurple px-5 py-3 w-full text-xs text-white rounded-sm'>
                    Return Vehicle
                  </button>
                  <button className='border-babypurple w-full border px-5 py-3 text-xs text-babyblack rounded-sm'>
                    Cancel Booking
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Rentedcar
