import React, { useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import { cars } from '../../../../utilis/Cardata'
import Navbar from '@/components/Navigation/Navbar'
import Link from 'next/link'
import { MdKeyboardBackspace, MdOutlineCancel } from 'react-icons/md'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'
import Generaldetails from '@/components/Singlecardetails/generaldetails'
import Photos from '@/components/Singlecardetails/photos'
import Documentations from '@/components/Singlecardetails/documentations'
import Leasehistory from '@/components/Singlecardetails/leasehistory'
import Footer from '@/components/Navigation/Footer'
function index() {
  const [display, setDisplay] = useState(1)
  const router = useRouter()
  const [rating, setRating] = useState(3)
  const [hover, setHover] = useState(null)
  const [isDelisting, setIsDelisting] = useState(false)
  const [loading, setLoading] = useState(false)
  const carId = router.query.id
  const singlecar = useMemo(
    () => cars.filter((item) => item.id === Number(carId))?.[0],
    [carId]
  )
  return (
    <>
      <main
        className={`${
          isDelisting ? 'relative h-[100vh] overflow-y-hidden' : 'relative '
        }`}
      >
        <Navbar />
        <section className='bg-[#F5F5F5] bg-opacity-50  w-full pt-10 xl:pt-16'>
          {/* overvall body */}
          <div className='max-w-md sm:max-w-2xl mx-auto font-sans md:max-w-5xl lg:max-w-6xl xl:max-w-7xl  px-4 md:px-6  lg:px-8 space-y-6 lg:space-y-10   pb-10 '>
            {/* back */}
            <Link href='/Host/fleet'>
              <div className='flex items-center gap-2 cursor-pointer'>
                <MdKeyboardBackspace className='lg:text-2xl' />
                <h1 className='text-sm  lg:text-base font-bold'>All Cars</h1>
              </div>
            </Link>
            {/* title */}
            <div className='flex justify-between items-center gap-2'>
              <h1 className='font-bold sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl'>
                Car Details
              </h1>
              {/* direction */}
              <div className='flex items-center gap-2 sm:gap-3 md:gap-6'>
                <button
                  onClick={() => {
                    router.push({
                      pathname: `/Host/fleet/${singlecar.id}/editcardetails/${singlecar.id}`,
                    })
                  }}
                  className='px-2 sm:px-4 lg:px-6  py-2 lg:py-3  rounded-md border border-indigo-500 text-xs md:text-sm xl:text-base  hover:bg-indigo-500 hover:text-white hover:duration-500  shadow-md hover:shadow-xl'
                >
                  Edit Car Details
                </button>
                <button
                  onClick={() => setIsDelisting(true)}
                  className='px-2 sm:px-4 lg:px-6  py-2 lg:py-3 rounded-md border border-babypurple text-xs md:text-sm xl:text-base hover:bg-babypurple hover:text-white hover:duration-500  shadow-md hover:shadow-xl'
                >
                  Delist Vehicle
                </button>
              </div>
            </div>
            {/* stat and control */}
            <div className='bg-white rounded-md px-4 sm:px-6 sm:pt-6 pt-4 shadow-md flex flex-col justify-between gap-10 md:gap-12 md:px-8 overflow-y-auto example'>
              {/* stat */}
              <div className=' flex justify-between gap-4 sm:justify-start  sm:gap-6 md:gap-10 lg:gap-12 items-center example  overflow-y-auto w-max sm:w-full'>
                {/* photo and carnamen and plate no */}
                <div className='flex items-center gap-4 m:gap-6'>
                  {/* image */}
                  <div className=''>
                    <Image
                      src={singlecar?.image}
                      alt='logo'
                      width={1000}
                      height={1000}
                      className='object-cover  w-16 md:w-24  md:h-24   xl:w-28  xl:h-28   h-16   rounded-full border-2 border-babypurple'
                    />
                  </div>
                  {/* text */}
                  <div className=' space-y-1 lg:space-y-2 xl:space-y-3'>
                    <h1 className='text-xs sm:text-sm font-bold lg:text-base  xl:text-xl'>
                      {singlecar?.carname}
                    </h1>
                    <h1 className='text-xs lg:text-sm'>Xter34epe</h1>
                  </div>
                </div>

                {/*  rating*/}
                <div className='border-r border-l border-babypurple  space-y-1 lg:space-y-2 xl:space-y-3 px-6 lg:px-8 text-left '>
                  <div className='flex items-center gap-2 '>
                    {[...Array(5)].map((star, index) => {
                      const currentRating = index + 1
                      return (
                        <label key={index} className=''>
                          <input
                            type='radio'
                            name='rating'
                            value={currentRating}
                            className='hidden'
                            // onClick={() => setRating(currentRating)}
                          />

                          <FaStar
                            className='flex items-center  text-xs md:text-sm  lg:text-lg xl:text-2xl'
                            color={
                              currentRating <= (hover || rating)
                                ? '#A303A0'
                                : '#e4e5e9'
                            }
                            // onMouseEnter={() => setHover(currentRating)}
                            // onMouseLeave={() => setHover(null)}
                          />
                        </label>
                      )
                    })}
                  </div>
                  <h1 className='text-xs lg:text-sm text-center'>Car Rating</h1>
                </div>

                {/* money */}
                <div className='  space-y-1 lg:space-y-2  xl:space-y-3'>
                  <h1 className='text-sm font-bold lg:text-lg xl:text-2xl'>
                    $200,000
                  </h1>
                  <h1 className='text-xs lg:text-sm'>Total income generated</h1>
                </div>
              </div>
              {/* control */}
              <div className='relative example  overflow-y-auto w-max sm:w-full  '>
                <div className='flex items-start space-x-10 text-xs  md:space-x-16   xl:space-x-20 md:text-sm xl:text-base '>
                  <button
                    onClick={() => setDisplay(1)}
                    className={`${
                      display === 1
                        ? 'border-b-4  rounded-sm border-babypurple pb-3 font-bold text-babypurple '
                        : '  rounded-sm  pb-3 '
                    }`}
                  >
                    General Details
                  </button>
                  <button
                    onClick={() => setDisplay(2)}
                    className={`${
                      display === 2
                        ? 'border-b-4  rounded-sm border-babypurple pb-3 font-bold  text-babypurple '
                        : '  rounded-sm  pb-3 '
                    }`}
                  >
                    Car Photos
                  </button>
                  <button
                    onClick={() => setDisplay(3)}
                    className={`${
                      display === 3
                        ? 'border-b-4 font-bold   rounded-sm border-babypurple pb-3 text-babypurple '
                        : '  rounded-sm  pb-3 '
                    }`}
                  >
                    Car Documentations
                  </button>
                  <button
                    onClick={() => setDisplay(4)}
                    className={`${
                      display === 4
                        ? 'border-b-4 font-bold   rounded-sm border-babypurple pb-3 text-babypurple '
                        : '  rounded-sm  pb-3 '
                    }`}
                  >
                    Lease History
                  </button>
                </div>
              </div>
            </div>
            {/* displayinf */}
            <div className='w-full'>
              {display === 1 ? (
                <Generaldetails />
              ) : display === 2 ? (
                <Photos />
              ) : display === 3 ? (
                <Documentations />
              ) : (
                <Leasehistory />
              )}
            </div>
          </div>
          {/*footer  */}
          <Footer />
        </section>
        {isDelisting && (
          <div className='absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40  px-6 flex justify-center items-center mx-auto  '>
            <div className='bg-white rounded-md px-4 sm:px-10 lg:px-14 xl:px-20   pb-6 sm:pb-10 shadow-lg  flex flex-col justify-center items-center relative'>
              {/* image */}
              <div className=''>
                <Image
                  src={'/images/drivings.gif'}
                  alt='dash'
                  width={1000}
                  height={1000}
                  className='object-cover w-48 lg:w-52 xl:w-64  '
                />
              </div>
              {/* text */}
              <div className='space-y-6 lg:space-y-10'>
                <h1 className='text text-xs md:text-sm md:max-w-md text-center max-w-xs lg:text-base lg:max-w-lg'>
                  Delisting your vehicle from our platform will result in its
                  removal from the pool of available cars for rent. Please
                  consider the impact on your rental opportunities before
                  proceeding
                </h1>
                <div className='flex flex-col justify-center items-center gap-4 w-full sm:flex-row'>
                  <button
                    type='submit'
                    className='bg-babypurple text-white px-2 py-3  sm:w-40 w-full md:w-60 md:max-w-xs mx-auto flex justify-center items-center    rounded-md   text-xs md:text-sm  hover:shadow-md transition ease-in-out delay-500   hover:bg-indigo-500 duration-1000 hover:border-none hover:text-white  '
                  >
                    {loading ? (
                      <div className='flex justify-center gap-2 items-center'>
                        <div className='spinner'></div>
                        <h1>Processing...</h1>
                      </div>
                    ) : (
                      'Delist'
                    )}
                  </button>
                  <button
                    onClick={() => setIsDelisting(false)}
                    className=' text-babyblack border border-babypurple px-2 py-3  sm:w-40 md:w-60 md:max-w-xs mx-auto flex justify-center items-center w-full   rounded-md   text-xs md:text-sm  hover:shadow-md transition ease-in-out delay-500   hover:bg-indigo-500 duration-1000 hover:border-none hover:text-white  '
                  >
                    Canel
                  </button>
                </div>
              </div>
              <div
                onClick={() => setIsDelisting(false)}
                className='absolute top-2 right-2 md:top-4 md:right-4'
              >
                <MdOutlineCancel className='text-babypurple text-xl md:text-2xl xl:text-3x cursor-pointer' />
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  )
}

export default index
