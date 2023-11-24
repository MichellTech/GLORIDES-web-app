import React, { useState } from 'react'
import Navbar from '@/components/Navigation/Navbar'
import Footer from '../../components/Navigation/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { TbWallet, TbCashBanknoteOff } from 'react-icons/tb'
import {
  MdOutlineDirectionsCar,
  MdOutlineElectricCar,
  MdOutlineCarRepair,
  MdOutlineCarRental,
} from 'react-icons/md'
import { BsArrowDown, BsArrowUp } from 'react-icons/bs'
import { transactionhistory, leasehistory } from '../../utilis/Cardata'
import Paymentcomp from '@/components/Paymentcomp'
import { withdrawmoney } from '@/features/userpersona/userSlice'
function Dashboard() {
  // console.log(transactionhistory)
  const { isWithdrawing } = useSelector((store) => store.userpersona)
  const dispatch = useDispatch()
  return (
    <>
      <main
        className={`${
          isWithdrawing ? 'relative h-[100vh] overflow-y-hidden' : 'relative '
        }`}
      >
        <Navbar />
        <div className='bg-[#F5F5F5] bg-opacity-50  w-full pt-10 xl:pt-16 '>
          <section className='my-6 sm:my-10 md:pb-6 max-w-md sm:max-w-2xl mx-auto font-sans md:max-w-4xl lg:max-w-6xl xl:max-w-7xl  px-4 md:px-6  lg:px-8 space-y-10 md:space-y-12 xl:space-y-14'>
            {/* title */}
            <div className='border  shadow-sm w-full rounded-md pt-4 xl:pt-6 px-6 md:flex md:justify-between md:items-end md:gap-10  bg-white'>
              {/* text */}
              <div className='flex flex-col justify-center items-center md:justify-start md:items-start md:mx-0 space-y-4 lg:space-y-5 xl:space-y-6 mx-auto md:w-4/6  '>
                <h1 className='text-lg font-bold   lg:text-xl'>
                  Hello Okwu Chiedozie !
                </h1>
                <p className='text-xs text-center md:text-left max-w-xs md:max-w-full lg:text-sm  xl:text-base '>
                  Welcome to your Host Dashboard! Your gateway to managing your
                  car rentals efficiently. Explore your listings, connect with
                  guests, and boost your earnings. Let's hit the road to success
                  together!
                </p>
                <div className='flex items-center gap-4 lg:gap-6  pb-4 xl:pb-6'>
                  <Link
                    href='/host/enlistacar'
                    className='px-6  py-2 border  rounded-md text-xs lg:text-sm tracking-wide transition ease-in-out delay-150   hover:scale-110 border-babyblack hover:bg-indigo-500 duration-300 hover:text-white hover:border-none'
                  >
                    {' '}
                    Enlist a car
                  </Link>
                  <button
                    onClick={() => dispatch(withdrawmoney())}
                    className='px-6 py-2  bg-babypurple rounded-md text-xs lg:text-sm text-white tracking-wide transition ease-in-out delay-150  hover:scale-110 hover:bg-indigo-500 duration-300 '
                  >
                    {' '}
                    Withdraw
                  </button>
                </div>
              </div>
              {/* image */}
              <div className='hidden md:block '>
                <Image
                  src={'/images/dash2.png'}
                  alt='dash'
                  width={1000}
                  height={1000}
                  className='object-cover w-48 lg:w-52 xl:w-64  '
                />
              </div>
            </div>
            {/* statistics */}
            <div className='flex gap-4 flex-wrap  w-full  '>
              {/* one */}
              <div className='border shadow-sm  bg-white rounded-md px-4 py-4  space-y-2 lg:space-y-3 w-max grow hover:shadow-md '>
                {/* header */}
                <div className='flex justify-between items-center gap-2'>
                  <h1 className='text-xs lg:text-sm xl:text-base'>
                    Available Balance
                  </h1>
                  <div className='flex justify-center items-center p-2 bg-babygrey rounded-full '>
                    <TbWallet className='lg:text-2xl xl:text-3xl' />
                  </div>
                </div>
                {/* text */}
                <h1 className='font-bold text-2xl lg:text-3xl'>$24,000</h1>
              </div>
              {/* two */}
              <div className='border bg-white  shadow-sm  rounded-md px-4 py-4 space-y-2 hover:shadow-md  lg:space-y-3 w-max  grow '>
                {/* header */}
                <div className='flex justify-between items-center gap-2'>
                  <h1 className='text-xs lg:text-sm xl:text-base'>
                    Number of Vehicles
                  </h1>
                  <div className='flex justify-center items-center p-2 bg-indigo-400 bg-opacity-50 rounded-full '>
                    <MdOutlineDirectionsCar className='lg:text-2xl xl:text-3xl' />
                  </div>
                </div>
                {/* text */}
                <h1 className='font-bold text-2xl lg:text-3xl'>24</h1>
              </div>
              {/* three */}
              <div className='border  shadow-sm  bg-white rounded-md px-4 py-4  space-y-2 lg:space-y-3  w-max grow hover:shadow-md '>
                {/* header */}
                <div className='flex justify-between items-center gap-2'>
                  <h1 className='text-xs lg:text-sm xl:text-base'>
                    Active Vehicles
                  </h1>
                  <div className='flex justify-center items-center p-2 bg-green-500 bg-opacity-50  rounded-full '>
                    <MdOutlineElectricCar className='lg:text-2xl xl:text-3xl' />
                  </div>
                </div>
                {/* text */}
                <h1 className='font-bold text-2xl lg:text-3xl'>20</h1>
              </div>
              {/* four */}
              <div className='border  bg-white  shadow-sm rounded-md px-4 py-4 space-y-2 lg:space-y-3  w-max  grow hover:shadow-md'>
                {/* header */}
                <div className='flex justify-between items-center gap-2'>
                  <h1 className='text-xs lg:text-sm xl:text-base'>
                    Delisted Vehicles
                  </h1>
                  <div className='flex justify-center items-center p-2 bg-softpurple rounded-full '>
                    <MdOutlineCarRepair className='lg:text-2xl xl:text-3xl' />
                  </div>
                </div>
                {/* text */}
                <h1 className='font-bold text-2xl lg:text-3xl'>4</h1>
              </div>
            </div>
            {/* lease history and transaction history */}
            <div className='space-y-10 md:space-y-0 md:flex   md:items-center md:gap-6 w-full md:h-[456px] lg:h-[517px]'>
              {/* leasehistory */}
              <div className='border px-4 py-4 h-full  bg-white shadow-md  w-full flex justify-center  hover:shadow-md rounded-md'>
                {/* nofound */}
                {!leasehistory ? (
                  <div className='flex   justify-center items-center flex-col space-y-2 xl:space-y-3 '>
                    {/* icon */}
                    <div className='flex justify-center items-center p-3 bg-opacity-50 bg-babygrey rounded-full'>
                      <MdOutlineCarRental className='text-2xl xl:text-3xl' />
                    </div>
                    <h1 className='text-sm xl:text-base font-bold'>
                      {' '}
                      No Lease History Found
                    </h1>
                    <p className='text-xs xl:text-sm xl:max-w-sm max-w-xs text-center'>
                      We couldn't find your lease history records. This could be
                      as a result of server downtime or you haven't made any
                      sales in the last year{' '}
                    </p>
                  </div>
                ) : (
                  <div className='w-full  '>
                    {/* header */}
                    <div className='flex justify-between items-center gap-2 border-b pb-6 '>
                      <h1 className='font-bold text-sm lg:text-base'>
                        Lease History
                      </h1>
                      <Link
                        href='/host/leasehistory'
                        className='px-4 py-1 rounded-full border text-xs hover:bg-softpurple hover:border-none lg:text-sm'
                      >
                        View All
                      </Link>
                    </div>
                    {/* content */}
                    <div className='pt-6 space-y-5 '>
                      {leasehistory.map((item, index) => {
                        return (
                          <div key={index}>
                            <div className='flex justify-between gap-2 items-center border-b py-2 hover:bg-softpurple hover:bg-opacity-50 hover:duration-1000 hover:px-2 lg:hover:px-4 cursor-pointer '>
                              {/* icona nd descripiton */}
                              <div className='flex items-center gap-4'>
                                {/* icon */}
                                <div className='bg-babygrey flex justify-center items-center  rounded-full bg-opacity-70 h-max w-max p-2 lg:p-3 '>
                                  <MdOutlineDirectionsCar className='text-sm lg:text-base' />
                                </div>
                                {/* first text */}
                                <div className='space-y-1'>
                                  <h1 className='text-xs lg:text-[0.8rem] font-bold'>
                                    {item.renter}
                                  </h1>
                                  <h1 className='text-[0.5rem] lg:text-xs'>
                                    {item.date}
                                  </h1>
                                </div>
                              </div>
                              {/* amount and status */}
                              <div className='space-y-1 lg:space-y-2 flex flex-col items-end'>
                                <h1 className='text-xs lg:text-sm font-bold'>
                                  $ {item.amount}
                                </h1>
                                <h1
                                  className={
                                    item.status === 'Successfull'
                                      ? 'text-[0.5rem] lg:text-xs text-green-500'
                                      : item.status === 'Canceled'
                                      ? 'text-[0.5rem] lg:text-xs text-red-600'
                                      : 'text-[0.5rem] lg:text-xs text-orange-500'
                                  }
                                >
                                  {item.status}
                                </h1>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
              {/* transhistory */}
              <div className='border px-4 py-4 h-full shadow-sm  bg-white    w-full flex justify-center  hover:shadow-md rounded-md'>
                {/* nofound */}
                {!transactionhistory ? (
                  <div className='flex justify-center items-center flex-col space-y-2 xl:space-y-3'>
                    {/* icon */}
                    <div className='flex justify-center items-center p-3 bg-opacity-50 bg-babygrey rounded-full'>
                      <TbCashBanknoteOff className='text-2xl xl:text-3xl' />
                    </div>
                    <h1 className='text-sm xl:text-base font-bold'>
                      {' '}
                      No Transactional Records Found
                    </h1>
                    <p className='text-xs xl:text-sm xl:max-w-sm max-w-xs text-center'>
                      We couldn't find your transactional records. This could be
                      as a result of server downtime or you haven't conducted
                      any transactions in the last year{' '}
                    </p>
                  </div>
                ) : (
                  <div className='w-full bg-white  '>
                    {/* header */}
                    <div className='flex justify-between items-center gap-2 border-b pb-6 '>
                      <h1 className='font-bold text-sm lg:text-base'>
                        Transactional Records
                      </h1>
                      <Link
                        href='/host/transactionhistory'
                        className='px-4 py-1 rounded-full border text-xs hover:bg-softpurple hover:border-none lg:text-sm'
                      >
                        View All
                      </Link>
                    </div>
                    {/* content */}
                    <div className='pt-6 space-y-5 '>
                      {transactionhistory.map((item, index) => {
                        return (
                          <div key={index}>
                            <div className='flex justify-between gap-2 items-center border-b py-2 hover:bg-softpurple hover:bg-opacity-50 hover:px-2 lg:hover:px-4 hover:duration-1000 cursor-pointer '>
                              {/* icona nd descripiton */}
                              <div className='flex items-center gap-4'>
                                {/* icon */}
                                <div className='bg-babygrey flex justify-center items-center  rounded-full bg-opacity-70 h-max w-max p-2 lg:p-3 '>
                                  {item.type === 'incoming' ? (
                                    <BsArrowDown className='text-sm lg:text-base' />
                                  ) : (
                                    <BsArrowUp className='text-sm lg:text-base ' />
                                  )}
                                </div>
                                {/* first text */}
                                <div className='space-y-1'>
                                  <h1 className='text-xs lg:text-[0.8rem] font-bold'>
                                    {item.description}
                                  </h1>
                                  <h1 className='text-[0.5rem] lg:text-xs'>
                                    {item.date}
                                  </h1>
                                </div>
                              </div>
                              {/* amount and status */}
                              <div className='space-y-1 lg:space-y-2 flex flex-col items-end'>
                                <h1 className='text-xs lg:text-sm font-bold'>
                                  $ {item.amount}
                                </h1>
                                <h1
                                  className={
                                    item.status === 'Successfull'
                                      ? 'text-[0.5rem] lg:text-xs text-green-500'
                                      : item.status === 'Failed'
                                      ? 'text-[0.5rem] lg:text-xs text-red-600'
                                      : 'text-[0.5rem] lg:text-xs text-orange-500'
                                  }
                                >
                                  {item.status}
                                </h1>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
          <Footer />
        </div>
        {isWithdrawing && (
          <div className='absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40  px-6 flex justify-center items-center mx-auto  '>
            <Paymentcomp />
          </div>
        )}
      </main>
    </>
  )
}

export default Dashboard
