import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { LuFuel } from 'react-icons/lu'
import { GiGearStickPattern } from 'react-icons/gi'
import { AiOutlineHeart, AiFillHeart, AiFillStar } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux'
import {
  setAllsearchedcars,
  getuserfavourites,
} from '@/features/rental/filterSlice'
import { useRouter } from 'next/router'
import {
  MdOutlineMyLocation,
  MdOutlineAirlineSeatReclineExtra,
  MdLocationOn,
} from 'react-icons/md'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import mainAxiosAction from '../axiosAction'

function Allcars() {
  const [loading, setLoading] = useState(false)
  const [allcars, setAllcars] = useState([])
  const { allsearchedcars, bookmarked } = useSelector((store) => store.rental)
  const router = useRouter()
  const dispatch = useDispatch()

  const getallcars = () => {
    mainAxiosAction
      .post(`/cars/getAllCars`, {})
      .then(function (response) {
        setLoading(false)
        toast.success(response?.data?.message)
        dispatch(setAllsearchedcars(response?.data?.data))
        console.log(response?.data?.data)
      })
      .catch(function (error) {
        setLoading(false)
        console.log(error)
      })
  }

  // console.log(allcars)
  useEffect(() => {
    getallcars()
    dispatch(getuserfavourites())
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
    <div className=' '>
      {/* display cars */}
      <div className=' space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-10 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12 '>
        {allsearchedcars?.map((item, index) => {
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
                      {bookmarked?.map((i) => i._id)?.includes(item?._id) ? (
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
                      <h1 className='text-xs'>{item?.seats_number} Seats</h1>
                    </div>
                  </div>
                  {/* text */}
                  <h1 className='px-4 text-sm text-gray-500 '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                    atque tempora quidem. Placeat mollitia perspiciatis tempore
                    praesentium fugiat. Perspiciatis, esse.
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
    </div>
  )
}

export default Allcars

{
  /*text */
}
//  ;<div className='px-4 w-full '>
//    {/* first part */}
//    <div className='space-y-2 border-b-2 pb-3'>
//      {/* carname and rationg */}
//      <div className='flex items-center gap-2'>
//        <h1 className='font-bold text-sm line-clamp-1'>{item?.car_name}</h1>
//        <div className='flex items-center bg-indigo-500 py-1 px-2 gap-1 text-white rounded-sm'>
//          <AiFillStar className='text-xs' />
//          <h1 className='text-[0.6rem]'>5 stars</h1>
//        </div>
//      </div>

//      {/* owner and cost */}
//      <div className='flex items-center justify-between  '>
//        <div className='flex justify-center items-center gap-2'>
//          <LuUser className='text-sm' />
//          <h1 className='text-xs truncate w-28 lg:w-20'>
//            {item?.owner?.firstname}{' '}
//          </h1>
//        </div>
//        <h1 className='font-bold text-sm text-babypurple'>
//          ${item?.rent_cost} /{' '}
//          <span className='text-sm text-babypurple font-normal'>day</span>
//        </h1>
//      </div>
//    </div>
//    {/* second */}
//    <div className='pt-6 space-y-4'>
//      {/* params */}
//      <div className=' grid grid-cols-3 gap-x-1  justify-between items-center mx-auto w-full'>
//        {/* two */}
//        <div className='flex items-center gap-2'>
//          <LuFuel className='text-base' />
//          <h1 className='text-[0.6rem]'>{item?.fuel_type}</h1>
//        </div>
//        {/* three */}
//        <div className='flex justify-center items-center gap-2'>
//          <GiGearStickPattern className='text-base' />
//          <h1 className='text-[0.6rem]'>{item?.gear_type}</h1>
//        </div>

//        {/* six */}
//        <div className='flex justify-end items-center gap-2 w-full'>
//          <GiRoad className='text-base w-max' />
//          <h1 className='text-[0.6rem] '> {item?.miles / 100}trips</h1>
//        </div>
//      </div>
//      {/* button */}
//      <button
//        onClick={() => {
//          router.push({
//            pathname: `/rentacar/${item?._id}`,
//          })
//        }}
//        className='bg-babypurple px-2 py-2 lg:py-3 w-full text-xs text-white rounded-md cursor-pointer hover:shadow-lg'
//      >
//        Rent Now
//      </button>
//    </div>
//  </div>
//  {
//    /* buttons top */
//  }
//  ;<div className=' absolute -top-2 left-2 right-2 '>
//    <div className='flex justify-end items-center gap-2 mx-auto w-full'>
//      {/* saved */}
//      <div onClick={() => setSaved(!saved)} className='shadow-lg '>
//        <div className=' bg-white flex justify-center items-center rounded-md mx-auto cursor-pointer w-6 h-6'>
//          {saved ? (
//            <AiFillHeart className='text-sm  text-red-500' />
//          ) : (
//            <AiOutlineHeart className='text-sm    text-red-500 ' />
//          )}
//        </div>
//      </div>
//    </div>
//  </div>

{
  /* <h1 className=' text-base text-center xl:text-lg md:text-left '>
          Showing results for all cars in :{' '}
          <span className='font-bold underline'>Texas</span>{' '}
        </h1> */
}
{
  /* filter */
}
{
  /* {!isFiltering && (
          <div
            onClick={() => dispatch(openFilter())}
            className='hidden md:flex md:justify-between md:items-center bg-softpurple px-6 cursor-pointer py-2  gap-1 rounded  '
          >
            <h1 className='xl:text-lg  '>Filter</h1>
            <MdOutlineFilterAlt className='xl:text-lg ' />
          </div>
        )} */
}
