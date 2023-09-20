import React, { useState } from 'react'
import Navbar from '../components/Navigation/Navbar'
import Search from '../components/Rentcomp/Search'
import Allcars from '../components/Rentcomp/Allcars'
import { MdOutlineFilterAlt, MdCloseFullscreen } from 'react-icons/md'
import { BiSolidCarGarage } from 'react-icons/bi'
import { LuFuel } from 'react-icons/lu'
import { GiGearStickPattern, GiCarSeat, GiRoundStar } from 'react-icons/gi'
import { FaFileInvoiceDollar } from 'react-icons/fa'
import Filterparams from '../components/Rentcomp/Filterparams'

function allcars() {
  const [isFIlter, setIsFilter] = useState(false)
  return (
    <>
      <Navbar />
      {/* search */}
      <div className=' flex  justify-center items-center mx-auto w-full text-white bg-softpurple   md:py-2'>
        <Search />
      </div>
      {/* All cars and filters */}
      <section className='my-16 lg:my-0 max-w-xs sm:max-w-md mx-auto font-sans md:max-w-2xl lg:max-w-full xl:max-w-full  px-4 md:px-6  lg:px-8 lg:flex lg:justify-center lg:items-start w-full  lg:gap-2'>
        {/* Sidebar */}
        <div className='hidden lg:block lg:w-1/6 border-r lg:pr-4'>
          <Filterparams />
        </div>
        {/* all cars */}
        <div className='flex justify-center items-center mx-auto lg:w-5/6 lg:pl-4 lg:my-24'>
          <Allcars />
        </div>
      </section>
      {/* floating filter */}

      <div
        onClick={() => setIsFilter(true)}
        className='fixed bottom-8 left-1/2 right-1/2  flex items-center justify-center w-max  bg-white   cursor-pointer -translate-x-1/2 lg:hidden   '
      >
        <div className='w-max  flex items-center justify-center gap-4 shadow-lg px-6 py-3'>
          <h1 className='text-sm sm:text-base'>Filter cars</h1>
          <MdOutlineFilterAlt className=' text-lg' />
        </div>
      </div>
      {/* filter */}
      {isFIlter && (
        <div className='fixed top-0 left-0 right-0 bottom-0 lg:hidden bg-babyblack bg-opacity-80 z-50  md:h-screen  '>
          <div className='md:max-w-xs bg-white  md:shadow-md  '>
            <Filterparams />
          </div>
          {/* footer */}
          <div className=' absolute bottom-0 left-0 right-0 bg-white w-full lg:hidden md:max-w-xs'>
            <div className='grid grid-cols-2 justify-between items-center gap-4   py-3 px-6 lg:hidden  '>
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
