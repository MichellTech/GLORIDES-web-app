import React, { useState } from 'react'
import Navbar from '../components/Navigation/Navbar'
import Search from '../components/Search'
import { MdOutlineFilterAlt, MdCloseFullscreen } from 'react-icons/md'
import { BiSolidCarGarage } from 'react-icons/bi'
import { LuFuel } from 'react-icons/lu'
import { GiGearStickPattern, GiCarSeat, GiRoundStar } from 'react-icons/gi'
import { FaFileInvoiceDollar } from 'react-icons/fa'

function allcars() {
  const [isFIlter, setIsFilter] = useState(true)
  return (
    <>
      <Navbar />
      {/* search */}
      <div className=' flex  justify-center items-center mx-auto w-full text-white bg-softpurple   md:py-2'>
        <Search />
      </div>
      {/* All cars and filters */}
      <section className='section-center'></section>
      {/* floating filter */}

      <div
        onClick={() => setIsFilter(true)}
        className='fixed bottom-8 left-1/2 right-1/2  flex items-center justify-center w-max  bg-white   cursor-pointer -translate-x-1/2 md:hidden   '
      >
        <div className='w-max  flex items-center justify-center gap-4 shadow-lg px-6 py-3'>
          <h1 className='text-sm sm:text-base'>Filter cars</h1>
          <MdOutlineFilterAlt className=' text-lg' />
        </div>
      </div>
      {/* filter */}
      {isFIlter && (
        <div className='fixed top-0 left-0 right-0 bottom-0 md:hidden bg-white z-50 py-6 overflow-y-auto  space-y-4'>
          {/* header */}
          <div className='border-b'>
            <div className='flex justify-between items-center border-b  pb-6 px-6  '>
              {/* close */}
              <div className=' cursor-pointer'>
                <h1 className='text-xl font-bold'> All Filters</h1>
              </div>
              {/* remove all */}
              <div
                onClick={() => setIsFilter(false)}
                className='borde  px-3 py-1 cursor-pointer'
              >
                <MdCloseFullscreen className='text-2xl' />
              </div>
            </div>
          </div>
          {/* cardoor */}
          <div className='border-b'>
            <div className='space-y-6 px-6 py-3'>
              {/* header */}
              <div className='flex items-center gap-4'>
                <BiSolidCarGarage className='text-2xl sm:text-3xl ' />
                <h1 className=' text-lg  sm:text-xl '>Car Doors</h1>
              </div>
              {/* params */}
              <div className='grid grid-cols-2 gap-4'>
                {/* one */}
                <div className='border border-babyblack px-2 py-1 cursor-pointer text-center rounded-sm text-sm'>
                  <h1>Two Doors </h1>
                </div>
                {/* two*/}
                <div className='border border-babyblack px-2 py-1 cursor-pointer text-center rounded-sm text-sm'>
                  <h1>Four Doors </h1>
                </div>
              </div>
            </div>
          </div>

          {/* fuel type */}
          <div className='border-b'>
            <div className='space-y-6 px-6 py-3'>
              {/* header */}
              <div className='flex items-center gap-4'>
                <LuFuel className='text-2xl sm:text-3xl ' />
                <h1 className=' text-lg  sm:text-xl '>Fuel Type</h1>
              </div>
              {/* params */}
              <div className='grid grid-cols-2 gap-4'>
                {/* one */}
                <div className='border border-babyblack px-2 py-1 cursor-pointer text-center rounded-sm text-sm'>
                  <h1>Diesel </h1>
                </div>
                {/* two*/}
                <div className='border border-babyblack px-2 py-1 cursor-pointer text-center rounded-sm text-sm  '>
                  <h1>PMS </h1>
                </div>
              </div>
            </div>
          </div>

          {/* gear */}
          <div className='border-b'>
            <div className='space-y-6 px-6 py-3'>
              {/* header */}
              <div className='flex items-center gap-4'>
                <GiGearStickPattern className='text-2xl sm:text-3xl ' />
                <h1 className=' text-lg  sm:text-xl '>Gear Type</h1>
              </div>
              {/* params */}
              <div className='grid grid-cols-2 gap-4'>
                {/* one */}
                <div className='border border-babyblack px-2 py-1 cursor-pointer text-center rounded-sm text-sm'>
                  <h1>Manual </h1>
                </div>
                {/* two*/}
                <div className='border border-babyblack px-2 py-1 cursor-pointer text-center rounded-sm text-sm  '>
                  <h1>Automatic </h1>
                </div>
              </div>
            </div>
          </div>

          {/* seats */}
          <div className='border-b'>
            <div className='space-y-6 px-6 py-3'>
              {/* header */}
              <div className='flex items-center gap-4'>
                <GiCarSeat className='text-2xl sm:text-3xl ' />
                <h1 className=' text-lg  sm:text-xl '>Number of Seats</h1>
              </div>
              {/* params */}
              <div className='grid grid-cols-4 gap-4'>
                {/* one */}
                <div className='border border-babyblack px-2 py-1 cursor-pointer text-center rounded-sm text-sm'>
                  <h1>Two </h1>
                </div>
                {/* two*/}
                <div className='border border-babyblack px-2 py-1 cursor-pointer text-center rounded-sm text-sm  '>
                  <h1>Four </h1>
                </div>
                {/* three*/}
                <div className='border border-babyblack px-2 py-1 cursor-pointer text-center rounded-sm text-sm  '>
                  <h1>Six </h1>
                </div>
                {/* four*/}
                <div className='border border-babyblack px-2 py-1 cursor-pointer text-center rounded-sm text-sm  '>
                  <h1>Eight </h1>
                </div>
              </div>
            </div>
          </div>

          {/* rationgs */}
          <div className='border-b'>
            <div className='space-y-6 px-6 py-3'>
              {/* header */}
              <div className='flex items-center gap-4'>
                <GiRoundStar className='text-2xl sm:text-3xl ' />
                <h1 className=' text-lg  sm:text-xl '>Car Rating</h1>
              </div>
              {/* params */}
              <div className='grid grid-cols-2 gap-4'>
                {/* one */}
                <div className='border border-babyblack px-2 py-1 cursor-pointer text-center rounded-sm text-sm'>
                  <h1>Highest to Lowest </h1>
                </div>
                {/* two*/}
                <div className='border border-babyblack px-2 py-1 cursor-pointer text-center rounded-sm text-sm  '>
                  <h1>Lowest to Highest </h1>
                </div>
              </div>
            </div>
          </div>

          {/* pricing*/}
          <div className='border-b'>
            <div className='space-y-6 px-6 py-3'>
              {/* header */}
              <div className='flex items-center gap-4'>
                <FaFileInvoiceDollar className='text-2xl sm:text-3xl ' />
                <h1 className=' text-lg  sm:text-xl '>Pricing</h1>
              </div>
              {/* params */}
              <div className='grid grid-cols-2 gap-4'>
                {/* one */}
                <div className='border border-babyblack px-2 py-1 cursor-pointer text-center rounded-sm text-sm'>
                  <h1>Highest to Lowest </h1>
                </div>
                {/* two*/}
                <div className='border border-babyblack px-2 py-1 cursor-pointer text-center rounded-sm text-sm  '>
                  <h1>Lowest to Highest </h1>
                </div>
              </div>
            </div>
          </div>
          {/* footer */}
          <div className=''>
            <div className='grid grid-cols-2 justify-between items-center gap-4   py-3 px-6  '>
              {/* APPly all */}
              <div className='border  px-3 py-2 cursor-pointer bg-babypurple text-center text-white rounded'>
                <h1>Apply Filter </h1>
              </div>
              {/* remove all */}
              <div className='border  px-3 py-2 cursor-pointer text-center bg-slate-500 rounded text-white font-light'>
                <h1>Clear All </h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default allcars
