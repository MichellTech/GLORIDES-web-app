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
          <div className=' space-y-10 sm:space-y-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 justify-between items-center mx-auto sm:gap-y-12 sm:gap-x-4'>
            {bookmarked?.map((item) => {
              return (
                <div key={item.id}>
                  {/* car 1 */}
                  <div className='bg-white hover:shadow-xl shadow h- rounded-xl  pb-4 space-y-4 max-w-xs  relative w-full  '>
                    {/* image */}
                    <div className='   relative '>
                      <Image
                        src={item?.car_photos?.[0]?.url}
                        alt={item?.car_photos?.[0]?.name}
                        width={1000}
                        height={1000}
                        className='object-cover w-full h-40 rounded-tl-lg rounded-tr-lg rounded-br-none  rounded-bl-none '
                      />
                    </div>

                    {/*text */}
                    <div className='px-4 w-full '>
                      {/* first part */}
                      <div className='space-y-2 border-b-2 pb-3 border-dashed'>
                        {/* locatio  */}
                        <h1 className='font-bold text-lg line-clamp-1 font-mono tracking-widest'>
                          {item?.car_name}
                        </h1>
                        {/* name and cost */}
                        <div className='flex items-center justify-between  gap-1 '>
                          <div className='flex items-center gap-1   w-max'>
                            <MdLocationOn className='text-base ' />
                            <h1 className=' line-clamp-1 text-sm'>
                              {item?.city}
                            </h1>
                          </div>

                          <h1 className='font-bold text-lg text-babypurple font-mono tracking-widest line-clamp-1 '>
                            ${item?.rent_cost} /
                            <span className='text-sm  text-babyblack font-normal font-sans'>
                              day
                            </span>
                          </h1>
                        </div>
                      </div>
                      {/* second */}
                      <div className='pt-6 space-y-4'>
                        {/* params */}
                        <div className=' grid grid-cols-3 gap-x-1 gap-y-6 justify-between items-center mx-auto'>
                          {/* two */}
                          <div className='flex items-center gap-1'>
                            <LuFuel className='text-base' />
                            <h1 className='text-xs text-babyblack'>
                              {item?.fuel_type}
                            </h1>
                          </div>
                          {/* three */}
                          <div className='flex justify-center items-center gap-1'>
                            <GiGearStickPattern className='text-base' />
                            <h1 className='text-xs text-babyblack'>
                              {item?.gear_type}
                            </h1>
                          </div>

                          {/* six */}
                          <div className='flex items-center gap-1 justify-end '>
                            <MdOutlineAirlineSeatReclineExtra className='text-base' />
                            <h1 className='text-xs text-babyblack'>
                              {' '}
                              {item?.seats_number} Seats
                            </h1>
                          </div>
                        </div>
                        {/* button */}
                        <button
                          onClick={() => {
                            router.push({
                              pathname: `/rentacar/${item?._id}`,
                            })
                          }}
                          className='bg-babypurple px-2 py-2  w-full text-xs text-white  cursor-pointer hover:shadow-lg font-bold tracking-widest lg:text-sm rounded-md'
                        >
                          Explore
                        </button>
                      </div>
                    </div>
                    {/* buttons top */}
                    <div className='absolute -top-2 right-2'>
                      <div
                        onClick={() => addtofav(item?._id)}
                        className=' bg-black bg-opacity-50 flex justify-center items-center rounded-md mx-auto cursor-pointer lg:w-8 lg:h-8 w-6 h-6'
                      >
                        {bookmarked?.map((i) => i._id)?.includes(item?._id) ? (
                          <AiFillHeart className='text-sm lg:text-base  text-white' />
                        ) : (
                          <AiOutlineHeart className='text-sm lg:text-base text-white ' />
                        )}
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
