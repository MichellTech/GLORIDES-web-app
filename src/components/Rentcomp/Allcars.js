import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { BiSolidCarGarage } from 'react-icons/bi'
import { LuFuel, LuUser } from 'react-icons/lu'
import { GiGearStickPattern, GiCarSeat, GiRoundStar } from 'react-icons/gi'
import { AiOutlineHeart, AiFillHeart, AiFillStar } from 'react-icons/ai'
import { TbClockSearch } from 'react-icons/tb'
import { MdOutlineFilterAlt } from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux'
import { openFilter } from '@/features/rental/filterSlice'
import { cars } from '../../utilis/Cardata'
import { useRouter } from 'next/router'
function Allcars() {
  const [saved, setSaved] = useState(false)
  const { isFiltering } = useSelector((store) => store.rental)
  const router = useRouter()
  const dispatch = useDispatch()

  return (
    <div className='space-y-10 lg:py-10 '>
      <div className='md:flex md:justify-between md:items-center'>
        <h1 className=' text-base text-center xl:text-lg md:text-left '>
          Showing results for all cars in :{' '}
          <span className='font-bold underline'>Texas</span>{' '}
        </h1>
        {/* filter */}
        {!isFiltering && (
          <div
            onClick={() => dispatch(openFilter())}
            className='hidden md:flex md:justify-between md:items-center bg-softpurple px-6 cursor-pointer py-2  gap-1 rounded  '
          >
            <h1 className='xl:text-lg  '>Filter</h1>
            <MdOutlineFilterAlt className='xl:text-lg ' />
          </div>
        )}
      </div>
      {/* display cars */}
      <div className='space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-4 lg:gap-x-6 sm:gap-y-16 lg:grid-cols-3 xl:grid-cols-4'>
        {cars.map((item) => {
          return (
            <div key={item.id}>
              {/* car 1 */}
              <div className='bg-white shadow-lg h-[22rem] rounded-xl  pb-2 space-y-4 max-w-xs  relative w-full '>
                {/* image */}
                <div className='   relative '>
                  <Image
                    src={item.image}
                    alt='footer'
                    width={1000}
                    height={1000}
                    className='object-cover w-full h-40 rounded-tl-lg rounded-tr-lg rounded-br-none  rounded-bl-none '
                  />
                </div>

                {/*text */}
                <div className='px-4 w-full '>
                  {/* first part */}
                  <div className='space-y-2 border-b-2 pb-3'>
                    {/* carname */}
                    <h1 className='font-bold text-sm line-clamp-1'>
                      {item.carname}
                    </h1>
                    {/* owner and cost */}
                    <div className='flex items-center justify-between  '>
                      <div className='flex justify-center items-center gap-2'>
                        <LuUser className='text-sm' />
                        <h1 className='text-xs'>Olamide Oluwale</h1>
                      </div>
                      <h1 className='font-bold text-sm text-babypurple'>
                        ${item.cost} /{' '}
                        <span className='text-sm text-babypurple font-normal'>
                          day
                        </span>
                      </h1>
                    </div>
                  </div>
                  {/* second */}
                  <div className='pt-6 space-y-4'>
                    {/* params */}
                    <div className=' grid grid-cols-3 gap-x-1 gap-y-6 justify-center items-center mx-auto'>
                      {/* two */}
                      <div className='flex items-center gap-2'>
                        <LuFuel className='text-base' />
                        <h1 className='text-[0.6rem]'>Petrol</h1>
                      </div>
                      {/* three */}
                      <div className='flex items-center gap-2'>
                        <GiGearStickPattern className='text-base' />
                        <h1 className='text-[0.6rem]'>Manual</h1>
                      </div>

                      {/* six */}
                      <div className='flex items-center gap-2'>
                        <TbClockSearch className='text-base' />
                        <h1 className='text-[0.6rem]'> 2.4k Miles</h1>
                      </div>
                    </div>
                    {/* button */}
                    <button
                      onClick={() => {
                        router.push({
                          pathname: `/rentacar/${item.id}`,
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
                  <div className='flex justify-between items-center gap-2 mx-auto w-full'>
                    {/* ratings */}
                    <div className='flex justify-center items-center gap-1 rounded-md bg-white px-2 py-1'>
                      <h1 className='text-xs'>5.0</h1>
                      <AiFillStar className='text-xs text-yellow-500' />
                    </div>
                    {/* saved */}
                    <div onClick={() => setSaved(!saved)} className=' '>
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
