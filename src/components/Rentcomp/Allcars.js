import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { BiSolidCarGarage } from 'react-icons/bi'
import { LuFuel } from 'react-icons/lu'
import { GiGearStickPattern, GiCarSeat, GiRoundStar } from 'react-icons/gi'
import { TbClockSearch } from 'react-icons/tb'
import { MdOutlineFilterAlt } from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux'
import { openFilter } from '@/features/rental/filterSlice'

function Allcars() {
  const { isFiltering } = useSelector((store) => store.rental)

  const dispatch = useDispatch()

  return (
    <div className='space-y-6 md:space-y-10 lg:py-10'>
      <div className='md:flex md:justify-between md:items-center'>
        <h1 className=' text-base text-center sm:text-lg md:text-left lg:text-xl'>
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

      <div
        className={`${
          isFiltering
            ? 'space-y-10 md:space-y-0 sm:grid sm:grid-cols-2 md:gap-x-10 lg:gap-x-8 md:gap-y-10 lg:grid-cols-3 xl:grid-cols-3'
            : 'space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-10 lg:gap-x-4 sm:gap-y-16 lg:grid-cols-3 xl:grid-cols-4'
        }`}
      >
        {/* car 1 */}
        <div className='bg-white shadow-md h-[24rem] rounded-xl px-1 py-2 space-y-4 max-w-xs'>
          {/* image */}
          <div className='   relative '>
            <Image
              src={'/images/car.png'}
              alt='footer'
              width={1000}
              height={1000}
              className='object-cover w-full '
            />
          </div>

          {/*text */}
          <div className='px-2 w-full '>
            {/* title */}
            <div className='flex items-center justify-between border-b-2 pb-3 '>
              <h1 className='font-bold'>BMW X5 Series</h1>
              <h1 className='font-bold text-babypurple'>
                $23 / <span className='text-sm text-black font-normal'>hr</span>
              </h1>
            </div>
            {/* params */}
            <div className='pt-3 grid grid-cols-3 gap-x-1 gap-y-6 justify-center items-center mx-auto'>
              {/* one */}
              <div className='flex items-center gap-2'>
                <BiSolidCarGarage className='text-xl' />
                <h1 className='text-xs'> 4 Doors</h1>
              </div>
              {/* two */}
              <div className='flex items-center gap-2'>
                <LuFuel className='text-xl' />
                <h1 className='text-xs'> Diesel</h1>
              </div>
              {/* three */}
              <div className='flex items-center gap-2'>
                <GiGearStickPattern className='text-xl' />
                <h1 className='text-xs'>Manual</h1>
              </div>
              {/* four */}
              <div className='flex items-center gap-2'>
                <GiCarSeat className='text-xl' />
                <h1 className='text-xs'> 4 Seater</h1>
              </div>
              {/* five */}
              <div className='flex items-center gap-2'>
                <GiRoundStar className='text-xl' />
                <h1 className='text-xs'> 4/5 Rating</h1>
              </div>
              {/* six */}
              <div className='flex items-center gap-2'>
                <TbClockSearch className='text-xl' />
                <h1 className='text-xs'> 2400 Miles</h1>
              </div>
            </div>
          </div>
        </div>
        {/* car 2 */}
        <div className='bg-white shadow-md h-[24rem] rounded-xl px-1 py-2 space-y-4 max-w-xs'>
          {/* image */}
          <div className='   relative '>
            <Image
              src={'/images/car.png'}
              alt='footer'
              width={1000}
              height={1000}
              className='object-cover w-full '
            />
          </div>

          {/*text */}
          <div className='px-2 w-full '>
            {/* title */}
            <div className='flex items-center justify-between border-b-2 pb-3 '>
              <h1 className='font-bold'>BMW X5 Series</h1>
              <h1 className='font-bold text-babypurple'>
                $23 / <span className='text-sm text-black font-normal'>hr</span>
              </h1>
            </div>
            {/* params */}
            <div className='pt-3 grid grid-cols-3 gap-x-1 gap-y-6 justify-center items-center mx-auto'>
              {/* one */}
              <div className='flex items-center gap-2'>
                <BiSolidCarGarage className='text-xl' />
                <h1 className='text-xs'> 4 Doors</h1>
              </div>
              {/* two */}
              <div className='flex items-center gap-2'>
                <LuFuel className='text-xl' />
                <h1 className='text-xs'> Diesel</h1>
              </div>
              {/* three */}
              <div className='flex items-center gap-2'>
                <GiGearStickPattern className='text-xl' />
                <h1 className='text-xs'>Manual</h1>
              </div>
              {/* four */}
              <div className='flex items-center gap-2'>
                <GiCarSeat className='text-xl' />
                <h1 className='text-xs'> 4 Seater</h1>
              </div>
              {/* five */}
              <div className='flex items-center gap-2'>
                <GiRoundStar className='text-xl' />
                <h1 className='text-xs'> 4/5 Rating</h1>
              </div>
              {/* six */}
              <div className='flex items-center gap-2'>
                <TbClockSearch className='text-xl' />
                <h1 className='text-xs'> 2400 Miles</h1>
              </div>
            </div>
          </div>
        </div>
        {/* car 3 */}
        <div className='bg-white shadow-md h-[24rem] rounded-xl px-1 py-2 space-y-4 max-w-xs'>
          {/* image */}
          <div className='   relative '>
            <Image
              src={'/images/car.png'}
              alt='footer'
              width={1000}
              height={1000}
              className='object-cover w-full '
            />
          </div>

          {/*text */}
          <div className='px-2 w-full '>
            {/* title */}
            <div className='flex items-center justify-between border-b-2 pb-3 '>
              <h1 className='font-bold'>BMW X5 Series</h1>
              <h1 className='font-bold text-babypurple'>
                $23 / <span className='text-sm text-black font-normal'>hr</span>
              </h1>
            </div>
            {/* params */}
            <div className='pt-3 grid grid-cols-3 gap-x-1 gap-y-6 justify-center items-center mx-auto'>
              {/* one */}
              <div className='flex items-center gap-2'>
                <BiSolidCarGarage className='text-xl' />
                <h1 className='text-xs'> 4 Doors</h1>
              </div>
              {/* two */}
              <div className='flex items-center gap-2'>
                <LuFuel className='text-xl' />
                <h1 className='text-xs'> Diesel</h1>
              </div>
              {/* three */}
              <div className='flex items-center gap-2'>
                <GiGearStickPattern className='text-xl' />
                <h1 className='text-xs'>Manual</h1>
              </div>
              {/* four */}
              <div className='flex items-center gap-2'>
                <GiCarSeat className='text-xl' />
                <h1 className='text-xs'> 4 Seater</h1>
              </div>
              {/* five */}
              <div className='flex items-center gap-2'>
                <GiRoundStar className='text-xl' />
                <h1 className='text-xs'> 4/5 Rating</h1>
              </div>
              {/* six */}
              <div className='flex items-center gap-2'>
                <TbClockSearch className='text-xl' />
                <h1 className='text-xs'> 2400 Miles</h1>
              </div>
            </div>
          </div>
        </div>
        {/* car 4 */}
        <div className='bg-white shadow-md h-[24rem] rounded-xl px-1 py-2 space-y-4 max-w-xs'>
          {/* image */}
          <div className='   relative '>
            <Image
              src={'/images/car.png'}
              alt='footer'
              width={1000}
              height={1000}
              className='object-cover w-full '
            />
          </div>

          {/*text */}
          <div className='px-2 w-full '>
            {/* title */}
            <div className='flex items-center justify-between border-b-2 pb-3 '>
              <h1 className='font-bold'>BMW X5 Series</h1>
              <h1 className='font-bold text-babypurple'>
                $23 / <span className='text-sm text-black font-normal'>hr</span>
              </h1>
            </div>
            {/* params */}
            <div className='pt-3 grid grid-cols-3 gap-x-1 gap-y-6 justify-center items-center mx-auto'>
              {/* one */}
              <div className='flex items-center gap-2'>
                <BiSolidCarGarage className='text-xl' />
                <h1 className='text-xs'> 4 Doors</h1>
              </div>
              {/* two */}
              <div className='flex items-center gap-2'>
                <LuFuel className='text-xl' />
                <h1 className='text-xs'> Diesel</h1>
              </div>
              {/* three */}
              <div className='flex items-center gap-2'>
                <GiGearStickPattern className='text-xl' />
                <h1 className='text-xs'>Manual</h1>
              </div>
              {/* four */}
              <div className='flex items-center gap-2'>
                <GiCarSeat className='text-xl' />
                <h1 className='text-xs'> 4 Seater</h1>
              </div>
              {/* five */}
              <div className='flex items-center gap-2'>
                <GiRoundStar className='text-xl' />
                <h1 className='text-xs'> 4/5 Rating</h1>
              </div>
              {/* six */}
              <div className='flex items-center gap-2'>
                <TbClockSearch className='text-xl' />
                <h1 className='text-xs'> 2400 Miles</h1>
              </div>
            </div>
          </div>
        </div>
        {/* car 5 */}
        <div className='bg-white shadow-md h-[24rem] rounded-xl px-1 py-2 space-y-4 max-w-xs'>
          {/* image */}
          <div className='   relative '>
            <Image
              src={'/images/car.png'}
              alt='footer'
              width={1000}
              height={1000}
              className='object-cover w-full '
            />
          </div>

          {/*text */}
          <div className='px-2 w-full '>
            {/* title */}
            <div className='flex items-center justify-between border-b-2 pb-3 '>
              <h1 className='font-bold'>BMW X5 Series</h1>
              <h1 className='font-bold text-babypurple'>
                $23 / <span className='text-sm text-black font-normal'>hr</span>
              </h1>
            </div>
            {/* params */}
            <div className='pt-3 grid grid-cols-3 gap-x-1 gap-y-6 justify-center items-center mx-auto'>
              {/* one */}
              <div className='flex items-center gap-2'>
                <BiSolidCarGarage className='text-xl' />
                <h1 className='text-xs'> 4 Doors</h1>
              </div>
              {/* two */}
              <div className='flex items-center gap-2'>
                <LuFuel className='text-xl' />
                <h1 className='text-xs'> Diesel</h1>
              </div>
              {/* three */}
              <div className='flex items-center gap-2'>
                <GiGearStickPattern className='text-xl' />
                <h1 className='text-xs'>Manual</h1>
              </div>
              {/* four */}
              <div className='flex items-center gap-2'>
                <GiCarSeat className='text-xl' />
                <h1 className='text-xs'> 4 Seater</h1>
              </div>
              {/* five */}
              <div className='flex items-center gap-2'>
                <GiRoundStar className='text-xl' />
                <h1 className='text-xs'> 4/5 Rating</h1>
              </div>
              {/* six */}
              <div className='flex items-center gap-2'>
                <TbClockSearch className='text-xl' />
                <h1 className='text-xs'> 2400 Miles</h1>
              </div>
            </div>
          </div>
        </div>
        {/* car 6 */}
        <div className='bg-white shadow-md h-[24rem] rounded-xl px-1 py-2 space-y-4 max-w-xs'>
          {/* image */}
          <div className='   relative '>
            <Image
              src={'/images/car.png'}
              alt='footer'
              width={1000}
              height={1000}
              className='object-cover w-full '
            />
          </div>

          {/*text */}
          <div className='px-2 w-full '>
            {/* title */}
            <div className='flex items-center justify-between border-b-2 pb-3 '>
              <h1 className='font-bold'>BMW X5 Series</h1>
              <h1 className='font-bold text-babypurple'>
                $23 / <span className='text-sm text-black font-normal'>hr</span>
              </h1>
            </div>
            {/* params */}
            <div className='pt-3 grid grid-cols-3 gap-x-1 gap-y-6 justify-center items-center mx-auto'>
              {/* one */}
              <div className='flex items-center gap-2'>
                <BiSolidCarGarage className='text-xl' />
                <h1 className='text-xs'> 4 Doors</h1>
              </div>
              {/* two */}
              <div className='flex items-center gap-2'>
                <LuFuel className='text-xl' />
                <h1 className='text-xs'> Diesel</h1>
              </div>
              {/* three */}
              <div className='flex items-center gap-2'>
                <GiGearStickPattern className='text-xl' />
                <h1 className='text-xs'>Manual</h1>
              </div>
              {/* four */}
              <div className='flex items-center gap-2'>
                <GiCarSeat className='text-xl' />
                <h1 className='text-xs'> 4 Seater</h1>
              </div>
              {/* five */}
              <div className='flex items-center gap-2'>
                <GiRoundStar className='text-xl' />
                <h1 className='text-xs'> 4/5 Rating</h1>
              </div>
              {/* six */}
              <div className='flex items-center gap-2'>
                <TbClockSearch className='text-xl' />
                <h1 className='text-xs'> 2400 Miles</h1>
              </div>
            </div>
          </div>
        </div>
        {/* car 7 */}
        <div className='bg-white shadow-md h-[24rem] rounded-xl px-1 py-2 space-y-4 max-w-xs'>
          {/* image */}
          <div className='   relative '>
            <Image
              src={'/images/car.png'}
              alt='footer'
              width={1000}
              height={1000}
              className='object-cover w-full '
            />
          </div>

          {/*text */}
          <div className='px-2 w-full '>
            {/* title */}
            <div className='flex items-center justify-between border-b-2 pb-3 '>
              <h1 className='font-bold'>BMW X5 Series</h1>
              <h1 className='font-bold text-babypurple'>
                $23 / <span className='text-sm text-black font-normal'>hr</span>
              </h1>
            </div>
            {/* params */}
            <div className='pt-3 grid grid-cols-3 gap-x-1 gap-y-6 justify-center items-center mx-auto'>
              {/* one */}
              <div className='flex items-center gap-2'>
                <BiSolidCarGarage className='text-xl' />
                <h1 className='text-xs'> 4 Doors</h1>
              </div>
              {/* two */}
              <div className='flex items-center gap-2'>
                <LuFuel className='text-xl' />
                <h1 className='text-xs'> Diesel</h1>
              </div>
              {/* three */}
              <div className='flex items-center gap-2'>
                <GiGearStickPattern className='text-xl' />
                <h1 className='text-xs'>Manual</h1>
              </div>
              {/* four */}
              <div className='flex items-center gap-2'>
                <GiCarSeat className='text-xl' />
                <h1 className='text-xs'> 4 Seater</h1>
              </div>
              {/* five */}
              <div className='flex items-center gap-2'>
                <GiRoundStar className='text-xl' />
                <h1 className='text-xs'> 4/5 Rating</h1>
              </div>
              {/* six */}
              <div className='flex items-center gap-2'>
                <TbClockSearch className='text-xl' />
                <h1 className='text-xs'> 2400 Miles</h1>
              </div>
            </div>
          </div>
        </div>
        {/* car 8 */}
        <div className='bg-white shadow-md h-[24rem] rounded-xl px-1 py-2 space-y-4 max-w-xs'>
          {/* image */}
          <div className='   relative '>
            <Image
              src={'/images/car.png'}
              alt='footer'
              width={1000}
              height={1000}
              className='object-cover w-full '
            />
          </div>

          {/*text */}
          <div className='px-2 w-full '>
            {/* title */}
            <div className='flex items-center justify-between border-b-2 pb-3 '>
              <h1 className='font-bold'>BMW X5 Series</h1>
              <h1 className='font-bold text-babypurple'>
                $23 / <span className='text-sm text-black font-normal'>hr</span>
              </h1>
            </div>
            {/* params */}
            <div className='pt-3 grid grid-cols-3 gap-x-1 gap-y-6 justify-center items-center mx-auto'>
              {/* one */}
              <div className='flex items-center gap-2'>
                <BiSolidCarGarage className='text-xl' />
                <h1 className='text-xs'> 4 Doors</h1>
              </div>
              {/* two */}
              <div className='flex items-center gap-2'>
                <LuFuel className='text-xl' />
                <h1 className='text-xs'> Diesel</h1>
              </div>
              {/* three */}
              <div className='flex items-center gap-2'>
                <GiGearStickPattern className='text-xl' />
                <h1 className='text-xs'>Manual</h1>
              </div>
              {/* four */}
              <div className='flex items-center gap-2'>
                <GiCarSeat className='text-xl' />
                <h1 className='text-xs'> 4 Seater</h1>
              </div>
              {/* five */}
              <div className='flex items-center gap-2'>
                <GiRoundStar className='text-xl' />
                <h1 className='text-xs'> 4/5 Rating</h1>
              </div>
              {/* six */}
              <div className='flex items-center gap-2'>
                <TbClockSearch className='text-xl' />
                <h1 className='text-xs'> 2400 Miles</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Allcars
