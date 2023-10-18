import React from 'react'
import { GrClose } from 'react-icons/gr'
import { BiSolidCarGarage } from 'react-icons/bi'
import { LuFuel } from 'react-icons/lu'
import { GiGearStickPattern, GiCarSeat, GiRoundStar } from 'react-icons/gi'
import { FaFileInvoiceDollar } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { closeFilter } from '@/features/rental/filterSlice'
function Filterparams() {
  const dispatch = useDispatch()
  return (
    <div className='bg-white h-[100vh]   relative  overflow-y-auto   md:h-full md:max-w-xs '>
      <div className=' space-y-4 '>
        {/* header */}
        <div className='border-b sticky top-0 left-0 right-0 bg-white py-6'>
          <div className='flex justify-between items-center  px-4   '>
            {/* close */}
            <div className=' cursor-pointer'>
              <h1 className='text-xl  md:text-base font-bold'> All Filters</h1>
            </div>
            {/* rclose all */}
            <div
              onClick={() => dispatch(closeFilter())}
              className='borde  px-3 py-1 cursor-pointer'
            >
              <GrClose className='text-2xl lg:text-xl text-babypurple font-bold' />
            </div>
          </div>
        </div>
        {/* cardoor */}
        <div className='space-y-4 lg:space-y-6 px-6 py-3   '>
          {/* header */}
          <div className='flex items-center gap-4'>
            <BiSolidCarGarage className='text-base' />
            <h1 className='text-sm '>Car Doors</h1>
          </div>
          {/* params */}
          <div className='grid grid-cols-2 gap-4 lg:gap-2 max-w-xs'>
            {/* one */}
            <div className='border  px-2 py-2 cursor-pointer text-center rounded-sm text-xs'>
              <h1>Two (2) </h1>
            </div>
            {/* two*/}
            <div className='border  px-2 py-2 cursor-pointer text-center rounded-sm text-xs'>
              <h1>Four (4) </h1>
            </div>
          </div>
        </div>

        {/* fuel type */}
        <div className='space-y-4 lg:space-y-6 px-6 py-3 '>
          {/* header */}
          <div className='flex items-center gap-4'>
            <LuFuel className='text-base ' />
            <h1 className=' text-sm '>Fuel Type</h1>
          </div>
          {/* params */}
          <div className='grid grid-cols-2 gap-4 lg:gap-2 max-w-xs'>
            {/* one */}
            <div className='border  px-2 py-2 cursor-pointer text-center rounded-sm text-xs'>
              <h1>Diesel </h1>
            </div>
            {/* two*/}
            <div className='border  px-2 py-2 cursor-pointer text-center rounded-sm text-xs  '>
              <h1>PMS </h1>
            </div>
          </div>
        </div>

        {/* gear */}

        <div className='space-y-4 lg:space-y-6 px-6 py-3   '>
          {/* header */}
          <div className='flex items-center gap-4'>
            <GiGearStickPattern className='text-base ' />
            <h1 className=' text-sm  '>Gear Type</h1>
          </div>
          {/* params */}
          <div className='grid grid-cols-2 gap-4 lg:gap-2 max-w-xs'>
            {/* one */}
            <div className='border  px-2 py-2 cursor-pointer text-center rounded-sm text-xs'>
              <h1>Manual </h1>
            </div>
            {/* two*/}
            <div className='border  px-2 py-2 cursor-pointer text-center rounded-sm text-xs '>
              <h1>Automatic </h1>
            </div>
          </div>
        </div>

        {/* seats */}

        <div className='space-y-4 lg:space-y-6 px-6 py-3  '>
          {/* header */}
          <div className='flex items-center gap-4'>
            <GiCarSeat className='text-base ' />
            <h1 className='text-sm  '>Number of Seats</h1>
          </div>
          {/* params */}
          <div className='grid grid-cols-4 gap-4 lg:grid-cols-2 lg:gap-2 sm:max-w-md'>
            {/* one */}
            <div className='border  px-2 py-2 cursor-pointer text-center rounded-sm text-xs'>
              <h1>Two </h1>
            </div>
            {/* two*/}
            <div className='border  px-2 py-2 cursor-pointer text-center rounded-sm text-xs '>
              <h1>Four </h1>
            </div>
            {/* three*/}
            <div className='border px-2 py-2 cursor-pointer text-center rounded-sm text-xs '>
              <h1>Six </h1>
            </div>
            {/* four*/}
            <div className='border  px-2 py-2 cursor-pointer text-center rounded-sm text-xs '>
              <h1>Eight </h1>
            </div>
          </div>
        </div>

        {/* rationgs */}
        <div className='space-y-4 lg:space-y-6 px-6 py-3 '>
          {/* header */}
          <div className='flex items-center gap-4 '>
            <GiRoundStar className='text-base ' />
            <h1 className=' text-sm '>Car Rating</h1>
          </div>
          {/* params */}
          <div className='grid grid-cols-2 gap-4 lg:gap-2 max-w-xs'>
            {/* one */}
            <div className='border  px-2 py-2 cursor-pointer text-center rounded-sm text-xs'>
              <h1>Highest </h1>
            </div>
            {/* two*/}
            <div className='border  px-2 py-2 cursor-pointer text-center rounded-sm text-xs  '>
              <h1>Lowest </h1>
            </div>
          </div>
        </div>

        {/* pricing*/}

        <div className='space-y-4 lg:space-y-6 px-6 py-3  '>
          {/* header */}
          <div className='flex items-center gap-4'>
            <FaFileInvoiceDollar className='text-base' />
            <h1 className='text-sm '>Pricing</h1>
          </div>
          {/* params */}
          <div className='grid grid-cols-2 gap-4 lg:gap-2 max-w-xs'>
            {/* one */}
            <div className='border  px-2 py-2 cursor-pointer text-center rounded-sm text-xs'>
              <h1>Highest </h1>
            </div>
            {/* two*/}
            <div className='border  px-2 py-2 cursor-pointer text-center rounded-sm text-xs  '>
              <h1>Lowest </h1>
            </div>
          </div>
        </div>

        {/* button */}
        <div className='flex justify-center items-center flex-wrap gap-4 pt-8 pb-6 px-6 '>
          <button className='px-6 py-2 sm:py-3 bg-babypurple text-white shadow-md rounded-sm text-xs w-max flex-grow'>
            Apply Filter (0)
          </button>
          <button className='px-6 py-2 sm:py-3 border border-babyblack shadow-md rounded-sm text-xs w-max flex-grow'>
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default Filterparams
