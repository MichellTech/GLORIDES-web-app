import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { BiSolidCarGarage } from 'react-icons/bi'
import { LuFuel } from 'react-icons/lu'
import { GiGearStickPattern, GiCarSeat, GiRoundStar } from 'react-icons/gi'
import { TbClockSearch } from 'react-icons/tb'
import { MdOutlineFilterAlt } from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux'
import { openFilter } from '@/features/rental/filterSlice'
import { cars } from '../../utilis/Cardata'
import { useRouter } from 'next/router'
function Allcars() {
  const { isFiltering } = useSelector((store) => store.rental)
  const router = useRouter()
  const dispatch = useDispatch()

  return (
    <div className='space-y-6 md:space-y-10 lg:py-10 '>
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
              <div
                onClick={() => {
                  router.push({
                    pathname: `/rentacar/${item.id}`,
                  })
                }}
                className='bg-white shadow-md h-[20rem] rounded-xl px-3 py-2 space-y-4 max-w-xs cursor-pointer'
              >
                {/* image */}
                <div className='   relative '>
                  <Image
                    src={item.image}
                    alt='footer'
                    width={1000}
                    height={1000}
                    className='object-cover w-full h-40 rounded-lg '
                  />
                </div>

                {/*text */}
                <div className='px-2 w-full '>
                  {/* title */}
                  <div className='flex items-center justify-between border-b-2 pb-3 '>
                    <h1 className='font-bold'>{item.carname}</h1>
                    <h1 className='font-bold text-babypurple'>
                      ${item.cost} /{' '}
                      <span className='text-sm text-black font-normal'>hr</span>
                    </h1>
                  </div>
                  {/* params */}
                  <div className='pt-3 grid grid-cols-3 gap-x-1 gap-y-6 justify-center items-center mx-auto'>
                    {/* one */}
                    <div className='flex items-center gap-2'>
                      <BiSolidCarGarage className='text-base' />
                      <h1 className='text-[0.6rem]'> 4 Doors</h1>
                    </div>
                    {/* two */}
                    <div className='flex items-center gap-2'>
                      <LuFuel className='text-base' />
                      <h1 className='text-[0.6rem]'> Diesel</h1>
                    </div>
                    {/* three */}
                    <div className='flex items-center gap-2'>
                      <GiGearStickPattern className='text-base' />
                      <h1 className='text-[0.6rem]'>Manual</h1>
                    </div>
                    {/* four */}
                    <div className='flex items-center gap-2'>
                      <GiCarSeat className='text-base' />
                      <h1 className='text-[0.6rem]'> 4 Seater</h1>
                    </div>
                    {/* five */}
                    <div className='flex items-center gap-2'>
                      <GiRoundStar className='text-base' />
                      <h1 className='text-[0.6rem]'> 4/5 Rating</h1>
                    </div>
                    {/* six */}
                    <div className='flex items-center gap-2'>
                      <TbClockSearch className='text-base' />
                      <h1 className='text-[0.6rem]'> 2400 Miles</h1>
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
