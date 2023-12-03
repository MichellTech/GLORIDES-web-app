import React, { useState, useEffect } from 'react'
import Footer from '@/components/Navigation/Footer'
import Navbar from '@/components/Navigation/Navbar/index'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { LuFuel } from 'react-icons/lu'
import { GiGearStickPattern } from 'react-icons/gi'
import { GoBookmarkSlashFill } from 'react-icons/go'

import { AiOutlineHeart, AiFillHeart, AiFillStar } from 'react-icons/ai'
import { MdOutlineAirlineSeatReclineExtra, MdLocationOn } from 'react-icons/md'
import mainAxiosAction from '../components/axiosAction/index'
import { useSelector, useDispatch } from 'react-redux'
import { getuserfavourites } from '@/features/rental/filterSlice'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function savedvehicles() {
  const { bookmarked } = useSelector((store) => store.rental)
  const router = useRouter()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getuserfavourites())
  }, [])

  const addtofav = (id) => {
    if (bookmarked?.map((i) => i._id)?.includes(id)) {
      mainAxiosAction
        .post(`/cars/delete-bookmark`, { car_id: id })
        .then(function (response) {
          dispatch(getuserfavourites())
          toast.success(response?.data?.message)
        })
        .catch(function (error) {
          console.log(error)
        })
    } else {
      mainAxiosAction
        .post(`/cars/add-bookmark`, { car_id: id })
        .then(function (response) {
          toast.success(response?.data?.message)
          dispatch(getuserfavourites())
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
  return (
    <>
      <Navbar />
      <section className=' mt-10 mx-auto font-sans   px-6 md:px-8  lg:px-10 xl:px-16 space-y-10  lg:space-y-12 pb-10   '>
        {/* title */}
        <div className='flex justify-between items-center gap-2 '>
          {/* amount */}
          {bookmarked?.length > 0 && (
            <h1 className='text-base lg:text-lg xl:text-xl'>
              <span className='font-bold'>{bookmarked?.length}</span> Car(s)
              saved
            </h1>
          )}
          {/* remove */}
          {/* <button className='px-6 py-2 text-white bg-babypurple rounded-md text-xs sm:text-sm lg:text-base shadow-md'>
            Remove All
          </button> */}
        </div>
        {/* display cars */}
        {bookmarked?.length < 1 ? (
          <div className='flex justify-center items-center flex-col space-y-2 xl:space-y-3'>
            {/* icon */}
            <div className='flex justify-center items-center p-3 bg-opacity-50 bg-babygrey rounded-full'>
              <GoBookmarkSlashFill className='text-2xl xl:text-3xl' />
            </div>
            <h1 className='text-sm md:text-base xl:text-lg font-bold'>
              {' '}
              No Bookedmarked Records Found
            </h1>
            <p className='text-xs md:text-sm xl:text-base max-w-xs lg:max-w-lg text-center'>
              We couldn't find your Bookedmarked. This is because you haven't
              bookmarked any car. Bookmark a vehicle today to easily access them
              when next you wan to rent a car
            </p>
          </div>
        ) : (
          <div className=' space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-10 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12 '>
            {bookmarked?.map((item, index) => {
              return (
                <div key={index}>
                  {/* car 1 */}
                  <div className='bg-white shadow-lg space-y-4 pb-4'>
                    {/* image */}
                    <div className='   relative  '>
                      <Image
                        src={item?.car_photos?.[0]?.url}
                        alt={item?.car_photos?.[0]?.name}
                        width={1000}
                        height={1000}
                        className='object-cover object-center w-full h-64 '
                      />
                      <div className='absolute top-2 right-2'>
                        <div
                          onClick={() => addtofav(item?._id)}
                          className=' bg-black bg-opacity-50 flex justify-center items-center rounded-md mx-auto cursor-pointer w-10 h-10'
                        >
                          {bookmarked
                            ?.map((i) => i._id)
                            ?.includes(item?._id) ? (
                            <AiFillHeart className='text-lg  text-white' />
                          ) : (
                            <AiOutlineHeart className='text-lg    text-white ' />
                          )}
                        </div>
                      </div>
                    </div>
                    {/* info */}
                    <div className=' space-y-4'>
                      {/* location */}
                      <div className='flex items-center gap-2 px-4'>
                        <MdLocationOn />
                        <h1>{item?.city}</h1>
                      </div>

                      {/* name */}
                      <div className='px-4'>
                        <h1 className='font-mono text-3xl'>{item?.car_name}</h1>
                      </div>
                      {/* descr */}
                      <div className='flex items-center gap-2 px-4 '>
                        {/* fuel */}
                        <div className='flex items-center gap-2 bg-softpurple  px-3 py-2 w-max'>
                          <LuFuel className='text-base' />
                          <h1 className='text-xs'>{item?.fuel_type}</h1>
                        </div>
                        {/* gear */}
                        <div className='flex items-center gap-2 bg-softpurple  px-3 py-2 w-max'>
                          <GiGearStickPattern className='text-base' />
                          <h1 className='text-xs'>{item?.gear_type}</h1>
                        </div>
                        {/* seats */}

                        <div className='flex items-center gap-2 bg-softpurple  px-3 py-2 w-max'>
                          <MdOutlineAirlineSeatReclineExtra className='text-base' />
                          <h1 className='text-xs'>
                            {item?.seats_number} Seats
                          </h1>
                        </div>
                      </div>
                      {/* text */}
                      <h1 className='px-4 text-sm text-gray-500 '>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ab atque tempora quidem. Placeat mollitia perspiciatis
                        tempore praesentium fugiat. Perspiciatis, esse.
                      </h1>
                      {/* rating */}
                      <div className='flex items-center gap-2 px-4'>
                        {/* star */}
                        <div className='flex items-center '>
                          <AiFillStar className='text-yellow-500' />
                          <AiFillStar className='text-yellow-500' />
                          <AiFillStar className='text-yellow-500' />
                          <AiFillStar className='text-yellow-500' />
                          <AiFillStar className='text-yellow-500' />
                        </div>
                        <h1 className='text-xs text-slate-500'>(4.97 / 5.0)</h1>
                      </div>
                      {/* divide */}
                      <div className='border border-dashed w-full'></div>
                      {/* price and call to action */}
                      <div className='px-4 flex justify-between items-center gap-1'>
                        <h1 className='font-bold text-sm lg:text-base'>
                          {' '}
                          <span className='text-3xl lg:text-4xl text-babypurple font-mono '>
                            ${item?.rent_cost}
                          </span>{' '}
                          / day
                        </h1>
                        {/* button */}
                        <button
                          onClick={() => {
                            router.push({
                              pathname: `/rentacar/${item?._id}`,
                            })
                          }}
                          className='border px-4 py-2 lg:py-3 w-3/6 text-sm text-babyblack rounded-md cursor-pointer font-bold hover:text-white hover:bg-babypurple hover:shadow  '
                        >
                          Explore
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </section>
      <Footer />
    </>
  )
}

export default savedvehicles
