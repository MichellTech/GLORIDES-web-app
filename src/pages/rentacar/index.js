import React, { useState, useEffect, useRef } from 'react'
import Navbar from '../../components/Navigation/Navbar/index'
import Search from '../../components/Rentcomp/Search'
import Allcars from '../../components/Rentcomp/Allcars'
import { MdOutlineFilterAlt } from 'react-icons/md'
import Footer from '../../components/Navigation/Footer'
import Filterparams from '../../components/Rentcomp/Filterparams'
import { useSelector, useDispatch } from 'react-redux'
import { openFilter, closeFilter } from '@/features/rental/filterSlice'
import Rentform from '../../components/Rentcomp/Rentform'
import { LuFilter } from 'react-icons/lu'
import { BsBookmark } from 'react-icons/bs'

function allcars() {
  const { isFiltering, bookmarked } = useSelector((store) => store.rental)
  const dispatch = useDispatch()

  return (
    <>
      <main
        className={`${
          isFiltering ? 'relative h-[100vh] overflow-y-hidden ' : 'relative '
        }`}
      >
        <Navbar />

        {/* search */}
        <div className=' w-full px-6 lg:px-10  py-3 lg:py-5  sticky    top-0 left-0 right-0 bg-white  z-30  '>
          <Rentform />
        </div>

        {/* body */}
        {/* allcars and filter */}
        <div className='  px-6 md:px-8  lg:px-10  pt-10 pb-28 '>
          {/* all cars */}
          <div className='flex justify-center items-center w-full'>
            <Allcars />
          </div>
        </div>

        {/* filtering comp*/}
        {isFiltering && (
          <div className='absolute top-0 bottom-0 left-0 right-0 bg-black  bg-opacity-50 z-30  '>
            <Filterparams />
          </div>
        )}

        {/* mobile */}
        <div className='fixed bottom-8 left-0 right-0'>
          <div className='flex justify-center flex-wrap gap-4 z-30'>
            {/* fiter */}
            <div
              onClick={() => dispatch(openFilter())}
              className='flex items-center gap-3 border py-3 px-8 xl:hidden shadow-2xl rounded-sm   cursor-pointer bg-white'
            >
              <LuFilter className='text-sm md:text-base' />
              <h1 className='text-xs md:text-sm'>Filter</h1>
            </div>
            {/* favorites */}
            <div className='flex items-center gap-3 border py-3 px-8 xl:hidden shadow-2xl rounded-sm  cursor-pointer bg-white'>
              <BsBookmark className='text-sm md:text-base' />
              <h1 className='text-xs md:text-sm'>
                Favorites ({bookmarked?.length})
              </h1>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default allcars
