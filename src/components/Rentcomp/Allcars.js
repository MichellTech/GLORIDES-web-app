import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { LuFuel } from 'react-icons/lu'
import { GiGearStickPattern } from 'react-icons/gi'
import { AiOutlineHeart, AiFillHeart, AiFillStar } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux'
import { getallcars, getuserfavourites } from '@/features/rental/filterSlice'
import { useRouter } from 'next/router'
import {
  MdOutlineMyLocation,
  MdOutlineAirlineSeatReclineExtra,
  MdLocationOn,
  MdError,
} from 'react-icons/md'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import mainAxiosAction from '../axiosAction'
import axios from 'axios'
import { TbCashBanknoteOff } from 'react-icons/tb'
function Allcars({ carloader }) {
  const { allsearchedcars, bookmarked, isUsersearching } = useSelector(
    (store) => store.rental
  )
  const router = useRouter()
  const dispatch = useDispatch()
  const isLoadingAllCars = useSelector((state) => state.rental.isLoading)

  useEffect(() => {
    if (!isUsersearching) {
      dispatch(getallcars())
    }
    if (localStorage.getItem('User_Token')) {
      dispatch(getuserfavourites())
    }
  }, [])

  // add to fav
  const addtofav = (id) => {
    if (bookmarked?.map((i) => i._id)?.includes(id)) {
      mainAxiosAction
        .post(`/cars/delete-bookmark`, { car_id: id })
        .then(function (response) {
          dispatch(getuserfavourites())
        })
        .catch(function (error) {
          console.log(error)
        })
    } else {
      mainAxiosAction
        .post(`/cars/add-bookmark`, { car_id: id })
        .then(function (response) {
          dispatch(getuserfavourites())
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
  return (
    <>
      {isLoadingAllCars ? (
        <div className='min-h-[50vh] flex justify-center items-center'>
          <div className='loadern '></div>
        </div>
      ) : (
        <div className=' '>
          {allsearchedcars.length < 1 ? (
            <div className='flex justify-center items-center flex-col space-y-2 md:space-y-3  lg:space-y-6 pt-10 min-h-[40vh]'>
              {/* icon */}
              <div className='flex justify-center items-center p-3 lg:p-6 bg-opacity-50 bg-babygrey rounded-full'>
                <MdError className='text-2xl md:text-3xl lg:text-5xl xl:text-6xl' />
              </div>
              <h1 className='text-base md:text-xl  lg:text-2xl xl:text-3xl  font-bold'>
                {' '}
                No Cars Found for your Search Query
              </h1>
              <p className='text-xs md:text-sm  lg:text-base xl:text-lg  xl:max-w-md md:max-w-sm max-w-xs text-center'>
                We couldn't find any cars for your Search Query. Please update
                your search query parameters for a much better result. Thanks
              </p>
            </div>
          ) : (
            <div className=' space-y-10 sm:space-y-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 justify-between items-center mx-auto sm:gap-y-12 sm:gap-x-4'>
              {allsearchedcars?.map((item) => {
                return (
                  <div key={item._id}>
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
                          <div className='flex items-center gap-1   w-max'>
                            <MdLocationOn className='text-base ' />
                            <h1 className=' line-clamp-1 text-sm'>
                              {item?.city} ,{''}
                              {item?.state}
                            </h1>
                          </div>

                          {/* name and cost */}
                          <div className='flex items-center justify-between  gap-1 '>
                            <h1 className='font-bold text-lg line-clamp-1 font-mono tracking-widest'>
                              {item?.car_name}
                            </h1>
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
                          {bookmarked
                            ?.map((i) => i._id)
                            ?.includes(item?._id) ? (
                            <AiFillHeart className='text-sm lg:text-base  text-white' />
                          ) : (
                            <AiOutlineHeart className='text-sm lg:text-base   text-white ' />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default Allcars
