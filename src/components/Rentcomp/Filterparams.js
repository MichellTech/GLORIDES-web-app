import React from 'react'
import { MdOutlineFilterAlt, MdCloseFullscreen } from 'react-icons/md'
import { BiSolidCarGarage } from 'react-icons/bi'
import { LuFuel } from 'react-icons/lu'
import { GiGearStickPattern, GiCarSeat, GiRoundStar } from 'react-icons/gi'
import { FaFileInvoiceDollar } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { closeFilter } from '@/features/rental/filterSlice'
function Filterparams() {
  const dispatch = useDispatch()
  return (
    <div className='bg-white h-[95vh]  relative  overflow-y-auto lg:h-full lg:my-20'>
      <div className='pt-6 pb-20  space-y-4 '>
        {/* header */}
        <div className='border-b'>
          <div className='flex justify-between items-center border-b  pb-6 px-8 lg:px-0  '>
            {/* close */}
            <div className=' cursor-pointer'>
              <h1 className='text-2xl lg:text-base font-bold'> All Filters</h1>
            </div>
            {/* remove all */}
            <div
              onClick={() => dispatch(closeFilter())}
              className='borde  px-3 py-1 cursor-pointer'
            >
              <MdCloseFullscreen className='text-2xl' />
            </div>
          </div>
        </div>
        {/* cardoor */}
        <div className='border-b'>
          <div className='space-y-4 lg:space-y-6 px-6 py-3 lg:px-0 '>
            {/* header */}
            <div className='flex items-center gap-4'>
              <BiSolidCarGarage className='text-base' />
              <h1 className='text-sm '>Car Doors</h1>
            </div>
            {/* params */}
            <div className='grid grid-cols-2 gap-4 lg:gap-2 max-w-xs'>
              {/* one */}
              <div className='border border-babyblack px-2 py-1 cursor-pointer text-center rounded-sm text-xs'>
                <h1>Two (2) </h1>
              </div>
              {/* two*/}
              <div className='border border-babyblack px-2 py-1 cursor-pointer text-center rounded-sm text-xs'>
                <h1>Four (4) </h1>
              </div>
            </div>
          </div>
        </div>

        {/* fuel type */}
        <div className='border-b'>
          <div className='space-y-4 lg:space-y-6 px-6 py-3 lg:px-0 '>
            {/* header */}
            <div className='flex items-center gap-4'>
              <LuFuel className='text-base ' />
              <h1 className=' text-sm '>Fuel Type</h1>
            </div>
            {/* params */}
            <div className='grid grid-cols-2 gap-4 lg:gap-2 max-w-xs'>
              {/* one */}
              <div className='border border-babyblack px-2 py-1 cursor-pointer text-center rounded-sm text-xs'>
                <h1>Diesel </h1>
              </div>
              {/* two*/}
              <div className='border border-babyblack px-2 py-1 cursor-pointer text-center rounded-sm text-xs  '>
                <h1>PMS </h1>
              </div>
            </div>
          </div>
        </div>

        {/* gear */}
        <div className='border-b'>
          <div className='space-y-4 lg:space-y-6 px-6 py-3 lg:px-0 '>
            {/* header */}
            <div className='flex items-center gap-4'>
              <GiGearStickPattern className='text-base ' />
              <h1 className=' text-sm  '>Gear Type</h1>
            </div>
            {/* params */}
            <div className='grid grid-cols-2 gap-4 lg:gap-2 max-w-xs'>
              {/* one */}
              <div className='border border-babyblack px-2 py-1 cursor-pointer text-center rounded-sm text-xs'>
                <h1>Manual </h1>
              </div>
              {/* two*/}
              <div className='border border-babyblack px-2 py-1 cursor-pointer text-center rounded-sm text-xs '>
                <h1>Automatic </h1>
              </div>
            </div>
          </div>
        </div>

        {/* seats */}
        <div className='border-b'>
          <div className='space-y-4 lg:space-y-6 px-6 py-3 lg:px-0  '>
            {/* header */}
            <div className='flex items-center gap-4'>
              <GiCarSeat className='text-base ' />
              <h1 className='text-sm  '>Number of Seats</h1>
            </div>
            {/* params */}
            <div className='grid grid-cols-4 gap-4 lg:grid-cols-2 lg:gap-2 sm:max-w-md'>
              {/* one */}
              <div className='border border-babyblack px-2 py-1 cursor-pointer text-center rounded-sm text-xs'>
                <h1>Two </h1>
              </div>
              {/* two*/}
              <div className='border border-babyblack px-2 py-1 cursor-pointer text-center rounded-sm text-xs '>
                <h1>Four </h1>
              </div>
              {/* three*/}
              <div className='border border-babyblack px-2 py-1 cursor-pointer text-center rounded-sm text-xs '>
                <h1>Six </h1>
              </div>
              {/* four*/}
              <div className='border border-babyblack px-2 py-1 cursor-pointer text-center rounded-sm text-xs '>
                <h1>Eight </h1>
              </div>
            </div>
          </div>
        </div>

        {/* rationgs */}
        <div className='border-b'>
          <div className='space-y-4 lg:space-y-6 px-6 py-3 lg:px-0 '>
            {/* header */}
            <div className='flex items-center gap-4 '>
              <GiRoundStar className='text-base ' />
              <h1 className=' text-sm '>Car Rating</h1>
            </div>
            {/* params */}
            <div className='grid grid-cols-2 gap-4 lg:gap-2 max-w-xs'>
              {/* one */}
              <div className='border border-babyblack px-2 py-1 cursor-pointer text-center rounded-sm text-xs'>
                <h1>Highest </h1>
              </div>
              {/* two*/}
              <div className='border border-babyblack px-2 py-1 cursor-pointer text-center rounded-sm text-xs  '>
                <h1>Lowest </h1>
              </div>
            </div>
          </div>
        </div>

        {/* pricing*/}
        <div className='border-b'>
          <div className='space-y-4 lg:space-y-6 px-6 py-3 lg:px-0 '>
            {/* header */}
            <div className='flex items-center gap-4'>
              <FaFileInvoiceDollar className='text-base' />
              <h1 className='text-sm '>Pricing</h1>
            </div>
            {/* params */}
            <div className='grid grid-cols-2 gap-4 lg:gap-2 max-w-xs'>
              {/* one */}
              <div className='border border-babyblack px-2 py-1 cursor-pointer text-center rounded-sm text-xs'>
                <h1>Highest </h1>
              </div>
              {/* two*/}
              <div className='border border-babyblack px-2 py-1 cursor-pointer text-center rounded-sm text-xs  '>
                <h1>Lowest </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filterparams
