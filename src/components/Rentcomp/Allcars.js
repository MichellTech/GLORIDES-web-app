import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { LuFuel, LuUser } from 'react-icons/lu'
import { GiGearStickPattern } from 'react-icons/gi'
import { AiOutlineHeart, AiFillHeart, AiFillStar } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux'
import { setAllsearchedcars } from '@/features/rental/filterSlice'
import { cars } from '../../utilis/Cardata'
import { useRouter } from 'next/router'
import { GiRoad } from 'react-icons/gi'
await mainAxiosAction.post
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import mainAxiosAction from '../axiosAction'

function Allcars() {
  const [saved, setSaved] = useState(false)
  const [loading, setLoading] = useState(false)
  const [allcars, setAllcars] = useState([])
  const { allsearchedcars } = useSelector((store) => store.rental)
  const router = useRouter()
  const dispatch = useDispatch()

  const getallcars = () => {
    mainAxiosAction
      .post(`/cars/getAllCars`, {})
      .then(function (response) {
        setLoading(false)
        toast.success(response?.data?.message)

        dispatch(setAllsearchedcars(response?.data?.data))
      })
      .catch(function (error) {
        setLoading(false)
        console.log(error)
      })
  }
  // console.log(allcars)
  useEffect(() => {
    getallcars()
  }, [])
  return (
    <div className='space-y-10  pb-10 '>
      <div className='md:flex md:justify-between md:items-center'>
        {/* <h1 className=' text-base text-center xl:text-lg md:text-left '>
          Showing results for all cars in :{' '}
          <span className='font-bold underline'>Texas</span>{' '}
        </h1> */}
        {/* filter */}
        {/* {!isFiltering && (
          <div
            onClick={() => dispatch(openFilter())}
            className='hidden md:flex md:justify-between md:items-center bg-softpurple px-6 cursor-pointer py-2  gap-1 rounded  '
          >
            <h1 className='xl:text-lg  '>Filter</h1>
            <MdOutlineFilterAlt className='xl:text-lg ' />
          </div>
        )} */}
      </div>
      {/* display cars */}
      <div className='space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-4 md:gap-x-6 sm:gap-y-16 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 '>
        {allsearchedcars?.map((item, index) => {
          return (
            <div key={index}>
              {/* car 1 */}
              <div className='bg-white shadow-lg h-[22rem] rounded-xl  pb-2 space-y-4 max-w-xs  relative w-full '>
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
                  <div className='space-y-2 border-b-2 pb-3'>
                    {/* carname and rationg */}
                    <div className='flex items-center gap-2'>
                      <h1 className='font-bold text-sm line-clamp-1'>
                        {item?.car_name}
                      </h1>
                      <div className='flex items-center bg-indigo-500 py-1 px-2 gap-1 text-white rounded-sm'>
                        <AiFillStar className='text-xs' />
                        <h1 className='text-[0.6rem]'>5 stars</h1>
                      </div>
                    </div>

                    {/* owner and cost */}
                    <div className='flex items-center justify-between  '>
                      <div className='flex justify-center items-center gap-2'>
                        <LuUser className='text-sm' />
                        <h1 className='text-xs truncate w-28 lg:w-20'>
                          {item?.owner?.firstname}{' '}
                        </h1>
                      </div>
                      <h1 className='font-bold text-sm text-babypurple'>
                        ${item?.rent_cost} /{' '}
                        <span className='text-sm text-babypurple font-normal'>
                          day
                        </span>
                      </h1>
                    </div>
                  </div>
                  {/* second */}
                  <div className='pt-6 space-y-4'>
                    {/* params */}
                    <div className=' grid grid-cols-3 gap-x-1  justify-between items-center mx-auto w-full'>
                      {/* two */}
                      <div className='flex items-center gap-2'>
                        <LuFuel className='text-base' />
                        <h1 className='text-[0.6rem]'>{item?.fuel_type}</h1>
                      </div>
                      {/* three */}
                      <div className='flex justify-center items-center gap-2'>
                        <GiGearStickPattern className='text-base' />
                        <h1 className='text-[0.6rem]'>{item?.gear_type}</h1>
                      </div>

                      {/* six */}
                      <div className='flex justify-end items-center gap-2 w-full'>
                        <GiRoad className='text-base w-max' />
                        <h1 className='text-[0.6rem] '>
                          {' '}
                          {item?.miles / 100}trips
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
                      className='bg-babypurple px-2 py-2 lg:py-3 w-full text-xs text-white rounded-md cursor-pointer hover:shadow-lg'
                    >
                      Rent Now
                    </button>
                  </div>
                </div>
                {/* buttons top */}
                <div className=' absolute -top-2 left-2 right-2 '>
                  <div className='flex justify-end items-center gap-2 mx-auto w-full'>
                    {/* saved */}
                    <div
                      onClick={() => setSaved(!saved)}
                      className='shadow-lg '
                    >
                      <div className=' bg-white flex justify-center items-center rounded-md mx-auto cursor-pointer w-6 h-6'>
                        {saved ? (
                          <AiFillHeart className='text-sm  text-red-500' />
                        ) : (
                          <AiOutlineHeart className='text-sm    text-red-500 ' />
                        )}
                      </div>
                    </div>
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
