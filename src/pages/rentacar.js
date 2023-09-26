import React, { useState, useEffect, useRef } from 'react'
import Navbar from '../components/Navigation/Navbar'
import Search from '../components/Rentcomp/Search'
import Allcars from '../components/Rentcomp/Allcars'
import { MdOutlineFilterAlt } from 'react-icons/md'
import Footer from '../components/Navigation/Footer'
import Filterparams from '../components/Rentcomp/Filterparams'
import { useSelector, useDispatch } from 'react-redux'
import { openFilter, closeFilter } from '@/features/rental/filterSlice'

function allcars() {
  const { isFiltering } = useSelector((store) => store.rental)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       setIsIntersecting(entry.isIntersecting)
  //     },
  //     { rootMargin: '-30%' }
  //   )
  //   console.log(isIntersecting)
  //   observer.observe(ref.current)

  //   return () => observer.disconnect()
  // }, [isIntersecting])

  return (
    <>
      <main className='example '>
        <Navbar />
        {/* search */}
        <div className=' flex  justify-center items-center mx-auto w-full text-white bg-white  border-b border-t border-[#D9D9D9]  md:py-2 xl:py-4'>
          <Search />
        </div>

        {/* All cars and filters */}
        <section className=' my-16 lg:my-0 max-w-xs sm:max-w-full mx-auto font-sans md:max-w-2xl lg:max-w-full xl:max-w-full  px-4 sm:px-6  lg:px-8 lg:flex lg:justify-center lg:items-start w-full example  '>
          {/* Sidebar */}
          {isFiltering && (
            <div className='hidden lg:block lg:w-1/6 border-r  lg:h-[100vh]  lg:gap-4  lg:overflow-y-hidden  '>
              <Filterparams />
            </div>
          )}
          {/* all cars */}
          <div
            className={`${
              isFiltering
                ? ' flex justify-center items-center mx-auto lg:w-5/6 lg:pl-4 lg:my-2 lg:items-start lg:h-[100vh]  lg:gap-4  lg:overflow-y-auto example '
                : ' flex justify-center items-center mx-auto lg:w-6/6 lg:pl-4 lg:my-2 lg:items-start lg:h-[100vh]  lg:gap-4  lg:overflow-y-auto example '
            }`}
          >
            <Allcars />
          </div>
        </section>

        {/* floating filter */}
        <div
          onClick={() => dispatch(openFilter())}
          className='fixed bottom-8 left-1/2 right-1/2  flex items-center justify-center w-max  bg-white shadow-xl   cursor-pointer -translate-x-1/2 md:hidden   '
        >
          <div className='w-max  flex items-center justify-center gap-4  px-6 py-3'>
            <h1 className='text-sm sm:text-base'>Filter cars</h1>
            <MdOutlineFilterAlt className=' text-lg' />
          </div>
        </div>
        {/* filter */}
        {isFiltering && (
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
                <div
                  onClick={() => dispatch(closeFilter())}
                  className='border  px-3 py-2 cursor-pointer text-center bg-slate-500 rounded text-white font-light'
                >
                  <h1>Clear All </h1>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* 
        <Footer /> */}
      </main>
    </>
  )
}

export default allcars
