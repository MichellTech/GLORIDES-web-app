import React from 'react'
import Navbar from '@/components/Navigation/Navbar'
import Link from 'next/link'
import Footer from '@/components/Navigation/Footer'
import { transactionhistory } from '../../utilis/Cardata'
import { useRouter } from 'next/router'
import { VscPieChart } from 'react-icons/vsc'
import { TbCashBanknoteOff } from 'react-icons/tb'
import { useSelector, useDispatch } from 'react-redux'
import {
  PiChartLineUpLight,
  PiChartLineDownLight,
  PiWallet,
} from 'react-icons/pi'
import Paymentcomp from '@/components/Paymentcomp'
import { withdrawmoney } from '@/features/userpersona/userSlice'
function Transactionhistory() {
  const router = useRouter()
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

        <section className='bg-[#F5F5F5] bg-opacity-50 '>
          <div className='pt-10 lg:pt-14 xl:pt-16 max-w-lg mx-auto font-sans sm:max-w-2xl md:max-w-4xl  lg:max-w-6xl xl:max-w-7xl  px-6 md:px-6  lg:px-8 space-y-16'>
            {/* title and stat */}
            <div className='space-y-6 lg:space-y-8 rounded-md border px-4 md:px-6 lg:px-8 lg:py-8 py-6 bg-white'>
              {/* title */}
              <div className='flex justify-between items-center gap-2'>
                <h1 className='text-xs sm:text-sm md:text-base font-bold lg:text-lg'>
                  Michell, keep track of your transactions
                </h1>
                <button
                  onClick={() => dispatch(withdrawmoney())}
                  className='bg-babypurple hidden md:block px-6 py-2 lg:py-3 text-white rounded-md text-xs lg:text-sm shadow-md transition ease-in-out delay-150    hover:bg-indigo-500 duration-300 hover:border-none hover:text-white w-max '
                >
                  Make a Withdrawal
                </button>
              </div>
              {/* statistics */}
              <div className='flex gap-4 flex-wrap  w-full  '>
                {/* two */}
                <div className='border bg-white  shadow-sm  rounded-md px-4 py-4 space-y-2 hover:shadow-md  lg:space-y-3 w-max  grow '>
                  {/* header */}
                  <div className='flex justify-between items-center gap-2'>
                    <h1 className='text-xs lg:text-sm xl:text-base'>
                      Total Income
                    </h1>
                    <div className='flex justify-center items-center p-2 bg-green-500   bg-opacity-50 rounded-full '>
                      <PiChartLineUpLight className='lg:text-2xl xl:text-3xl' />
                    </div>
                  </div>
                  {/* text */}
                  <h1 className='font-bold text-2xl lg:text-3xl'>$240,000</h1>
                </div>
                {/* three */}
                <div className='border bg-white  shadow-sm  rounded-md px-4 py-4  space-y-2 lg:space-y-3  w-max grow hover:shadow-md '>
                  {/* header */}
                  <div className='flex justify-between items-center gap-2'>
                    <h1 className='text-xs lg:text-sm xl:text-base'>
                      Total Withdrawn
                    </h1>
                    <div className='flex justify-center items-center p-2 bg-indigo-400 bg-opacity-50  rounded-full '>
                      <PiChartLineDownLight className='lg:text-2xl xl:text-3xl' />
                    </div>
                  </div>
                  {/* text */}
                  <h1 className='font-bold text-2xl lg:text-3xl'>$200,000</h1>
                </div>
                {/* one */}
                <div className='border bg-white shadow-sm  rounded-md px-4 py-4  space-y-2 lg:space-y-3 w-max grow hover:shadow-md '>
                  {/* header */}
                  <div className='flex justify-between items-center gap-2'>
                    <h1 className='text-xs lg:text-sm xl:text-base'>
                      Available Balance
                    </h1>
                    <div className='flex justify-center items-center p-2 bg-babygrey rounded-full '>
                      <PiWallet className='lg:text-2xl xl:text-3xl' />
                    </div>
                  </div>
                  {/* text */}
                  <h1 className='font-bold text-2xl lg:text-3xl'>$40,000</h1>
                </div>
                {/* four */}
                <div className='border  bg-white  shadow-sm rounded-md px-4 py-4 space-y-2 lg:space-y-3  w-max  grow hover:shadow-md'>
                  {/* header */}
                  <div className='flex justify-between items-center gap-2'>
                    <h1 className='text-xs lg:text-sm xl:text-base'>
                      Pending Income
                    </h1>
                    <div className='flex justify-center items-center p-2 bg-softpurple rounded-full '>
                      <VscPieChart className='lg:text-2xl xl:text-3xl' />
                    </div>
                  </div>
                  {/* text */}
                  <h1 className='font-bold text-2xl lg:text-3xl'>$4,000</h1>
                </div>
              </div>
              {/* mobile withdrawa */}
              <div className='w-full'>
                <Link
                  href='/host/withdraw'
                  className='bg-babypurple md:hidden px-6 py-2 sm:py-3 text-white rounded-md text-xs lg:text-sm shadow-md transition ease-in-out delay-150    hover:bg-indigo-500 duration-300 hover:border-none hover:text-white w-full flex justify-center items-center '
                >
                  Make a Withdrawal
                </Link>
              </div>
            </div>

            {/* content */}
            {!transactionhistory ? (
              <div className='bg-white  w-full min-h-[60vh] lg:min-h-[50vh] shadow-lg flex flex-col justify-center items-center rounded-md lg:rounded-lg px-6 space-y-5'>
                {/* icon */}
                <div className='flex justify-center items-center p-4 rounded-full bg-babygrey'>
                  <TbCashBanknoteOff className='text-2xl md:text-3xl xl:text-4xl text-babyblack' />
                </div>
                <div className='text-center mx-auto space-y-2 md:space-y-4'>
                  <h1 className='font-bold text-lg md:text-2xl xl:text-3xl'>
                    No Transcation Records Found
                  </h1>
                  <p className='text-xs max-w-xs md:text-sm md:max-w-md xl:text-base xl:max-w-xl'>
                    We couldn't find your transactional records. This could be
                    as a result of server downtime or you haven't conducted any
                    transactions in the last year
                  </p>
                </div>
              </div>
            ) : (
              <div className='bg-white md:min-h-[60vh]  w-full  shadow-lg rounded-md lg:rounded-lg py-6 lg:pb-8'>
                {/* table */}
                <div className='w-full overflow-x-auto'>
                  <h1 className='font-bold  text-xs xl:text-base md:text-sm px-6 pb-6 '>
                    All Transactions
                  </h1>
                  <table className='min-w-max w-full divide-y  overflow-x-auto relative divide-gray-1 table-auto '>
                    <thead className='text-xs  overflow-x-scroll text-left text-babyblack  bg-opacity-60   w-max bg-softpurple'>
                      <tr>
                        <th
                          scope='col'
                          className='pl-6 pr-4 pt-6  text-left font-medium text-babyblack'
                        >
                          <div className='flex items-center gap-4 mb-6'>
                            <h2 className='text-base lg:text-lg xl:text-xl font-semibold  '>
                              Description
                            </h2>
                          </div>
                        </th>
                        <th
                          scope='col'
                          className=' pr-4 pt-6  text-left text-sm font-medium text-babyblack'
                        >
                          <div className='flex items-center justify-start gap-4 mb-6'>
                            <h2 className='text-base font-semibold lg:text-lg xl:text-xl  '>
                              Payable
                            </h2>
                          </div>
                        </th>
                        <th
                          scope='col'
                          className=' pr-4 pt-6  text-left text-sm font-medium text-babyblack'
                        >
                          <div className='flex items-center gap-4 mb-6'>
                            <h2 className='text-base font-semibold lg:text-lg xl:text-xl  '>
                              Type
                            </h2>
                          </div>
                        </th>
                        <th
                          scope='col'
                          className='pr-4 pt-6  text-left font-medium text-babyblack'
                        >
                          <div className='flex items-center gap-4 mb-6'>
                            <h2 className='text-base font-semibold  lg:text-lg xl:text-xl '>
                              Status
                            </h2>
                          </div>
                        </th>
                        <th
                          scope='col'
                          className='pr-4 pt-6  text-left font-medium text-babyblack'
                        >
                          <div className='flex items-center gap-4 mb-6'>
                            <h2 className='text-base font-semibold  lg:text-lg xl:text-xl '>
                              Amount
                            </h2>
                          </div>
                        </th>
                        <th
                          scope='col'
                          className='pr-4  pt-6 text-left font-medium text-babyblack'
                        >
                          <div className='flex items-center gap-4 mb-6'>
                            <h2 className='text-base font-semibold  lg:text-lg xl:text-xl '>
                              Date
                            </h2>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className=' px-6  py-5 overflow-x-scroll  divide-y divide-gray-1 cursor-pointer'>
                      {transactionhistory.map((item, index) => {
                        return (
                          <tr
                            key={index}
                            className='hover:bg-softpurple text-xs md:text-sm '
                          >
                            <td className='pl-6 pr-4  py-4  '>
                              {item.description}
                            </td>
                            <td className=' py-4 pr-4 '>Michell Okwu</td>
                            <td className=' py-4  pr-4 '>{item.type}</td>

                            <td
                              className={`${
                                item.status === 'Successfull'
                                  ? 'pr-4    text-left text-green-800 bg-green-300 px-2 py-1'
                                  : item.status === 'Failed'
                                  ? 'pr-4    text-left text-red-800 bg-red-300 px-2 py-1'
                                  : 'pr-4   py-4  text-left text-orange-800 bg-orange-300 font-normal'
                              }`}
                            >
                              {item.status}
                            </td>
                            <td className='pr-4   py-4  text-left '>
                              {item.amount}
                            </td>
                            <td className='pr-4   py-4  text-left '>
                              {item.date}
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
          <Footer />
        </section>
        {isWithdrawing && (
          <div className='absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40  px-6 flex justify-center items-center mx-auto  '>
            <Paymentcomp />
          </div>
        )}
      </main>
    </>
  )
}

export default Transactionhistory
