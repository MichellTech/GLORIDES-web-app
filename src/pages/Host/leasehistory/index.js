import React from 'react'
import Navbar from '@/components/Navigation/Navbar'
import Link from 'next/link'
import Footer from '@/components/Navigation/Footer'
import { leasehistory } from '../../../utilis/Cardata'
import { useRouter } from 'next/router'
import { BiSolidCarMechanic } from 'react-icons/bi'
import { TbCashBanknoteOff } from 'react-icons/tb'
import {
  MdOutlineDirectionsCar,
  MdOutlineElectricCar,
  MdOutlineCarRepair,
  MdOutlineCarRental,
} from 'react-icons/md'
// import { TfiWallet } from 'react-icons/tf'
import {
  PiChartLineUpLight,
  PiChartLineDownLight,
  PiWallet,
} from 'react-icons/pi'
function Leasehistory() {
  const router = useRouter()
  return (
    <>
      <Navbar />

      <section className='bg-[#F5F5F5]'>
        <div className='pt-10 lg:pt-14 xl:pt-16 max-w-lg mx-auto font-sans sm:max-w-2xl md:max-w-4xl  lg:max-w-6xl xl:max-w-7xl  px-6 md:px-6  lg:px-8 space-y-16'>
          <div className='space-y-6 lg:space-y-8'>
            {/* notifications */}
            <div className='bg-softpurple border border-babypurple px-4 py-3 rounded-md sm:text-center'>
              <h1 className='text-xs lg:text-sm text-babypurple'>
                You have <span className='font-bold'>4</span> lease transactions
                that are yet to be closed out
              </h1>
            </div>
            {/* title and stat */}
            <div className='space-y-6 lg:space-y-8 rounded-md border px-4 md:px-6 lg:px-8 lg:py-8 py-6 bg-white'>
              {/* title */}
              <div className='flex justify-between items-center gap-2'>
                <h1 className='text-xs sm:text-sm md:text-base font-bold lg:text-lg'>
                  Michell, Here's your lease history so far !
                </h1>
                <Link
                  href='/Host/withdraw'
                  className='bg-babypurple hidden md:block px-6 py-2 lg:py-3 text-white rounded-md text-xs lg:text-sm shadow-md transition ease-in-out delay-150    hover:bg-indigo-500 duration-300 hover:border-none hover:text-white w-max '
                >
                  Close Out Transactions
                </Link>
              </div>
              {/* statistics */}
              <div className='flex gap-4 flex-wrap  w-full  '>
                {/* two */}
                <div className='border bg-white  shadow-sm  rounded-md px-4 py-4 space-y-2 hover:shadow-md  lg:space-y-3 w-max  grow '>
                  {/* header */}
                  <div className='flex justify-between items-center gap-2'>
                    <h1 className='text-xs lg:text-sm xl:text-base'>
                      All Cars
                    </h1>
                    <div className='flex justify-center items-center p-2 bg-green-500   bg-opacity-50 rounded-full '>
                      <MdOutlineDirectionsCar className='lg:text-2xl xl:text-3xl' />
                    </div>
                  </div>
                  {/* text */}
                  <h1 className='font-bold text-2xl lg:text-3xl'>24</h1>
                </div>
                {/* three */}
                <div className='border bg-white  shadow-sm  rounded-md px-4 py-4  space-y-2 lg:space-y-3  w-max grow hover:shadow-md '>
                  {/* header */}
                  <div className='flex justify-between items-center gap-2'>
                    <h1 className='text-xs lg:text-sm xl:text-base'>
                      Active Cars
                    </h1>
                    <div className='flex justify-center items-center p-2 bg-indigo-400 bg-opacity-50  rounded-full '>
                      <MdOutlineElectricCar className='lg:text-2xl xl:text-3xl' />
                    </div>
                  </div>
                  {/* text */}
                  <h1 className='font-bold text-2xl lg:text-3xl'>12</h1>
                </div>
                {/* one */}
                <div className='border bg-white shadow-sm  rounded-md px-4 py-4  space-y-2 lg:space-y-3 w-max grow hover:shadow-md '>
                  {/* header */}
                  <div className='flex justify-between items-center gap-2'>
                    <h1 className='text-xs lg:text-sm xl:text-base'>
                      Inactive Cars
                    </h1>
                    <div className='flex justify-center items-center p-2 bg-babygrey rounded-full '>
                      <MdOutlineCarRepair className='lg:text-2xl xl:text-3xl' />
                    </div>
                  </div>
                  {/* text */}
                  <h1 className='font-bold text-2xl lg:text-3xl'>10</h1>
                </div>
                {/* four */}
                <div className='border  bg-white  shadow-sm rounded-md px-4 py-4 space-y-2 lg:space-y-3  w-max  grow hover:shadow-md'>
                  {/* header */}
                  <div className='flex justify-between items-center gap-2'>
                    <h1 className='text-xs lg:text-sm xl:text-base'>
                      Delisted Cars
                    </h1>
                    <div className='flex justify-center items-center p-2 bg-softpurple rounded-full '>
                      <BiSolidCarMechanic className='lg:text-2xl xl:text-3xl' />
                    </div>
                  </div>
                  {/* text */}
                  <h1 className='font-bold text-2xl lg:text-3xl'>2</h1>
                </div>
              </div>
              {/* mobile withdrawa */}
              <div className='w-full'>
                <Link
                  href='/Host/withdraw'
                  className='bg-babypurple md:hidden px-6 py-2 sm:py-3 text-white rounded-md text-xs lg:text-sm shadow-md transition ease-in-out delay-150    hover:bg-indigo-500 duration-300 hover:border-none hover:text-white w-full flex justify-center items-center '
                >
                  Close Out Transactions
                </Link>
              </div>
            </div>
          </div>

          {/* content */}
          {!leasehistory ? (
            <div className='bg-white  w-full min-h-[60vh] lg:min-h-[50vh] shadow-lg flex flex-col justify-center items-center rounded-md lg:rounded-lg px-6 space-y-5'>
              {/* icon */}
              <div className='flex justify-center items-center p-4 rounded-full bg-babygrey'>
                <MdOutlineCarRental className='text-2xl md:text-3xl xl:text-4xl text-babyblack' />
              </div>
              <div className='text-center mx-auto space-y-2 md:space-y-4'>
                <h1 className='font-bold text-lg md:text-2xl xl:text-3xl'>
                  No Lease Records Found
                </h1>
                <p className='text-xs max-w-xs md:text-sm md:max-w-md xl:text-base xl:max-w-xl'>
                  We couldn't find your lease history records. This could be as
                  a result of server downtime or you haven't made any sales in
                  the last year{' '}
                </p>
              </div>
            </div>
          ) : (
            <div className='bg-white md:min-h-[60vh]  w-full  shadow-lg rounded-md lg:rounded-lg py-6 lg:pb-8'>
              {/* table */}
              <div className='w-full overflow-x-auto'>
                <h1 className='font-bold  text-xs xl:text-base md:text-sm px-6 pb-6 '>
                  All Leased vehicles
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
                            Carname
                          </h2>
                        </div>
                      </th>
                      <th
                        scope='col'
                        className=' pr-4 pt-6  text-left text-sm font-medium text-babyblack'
                      >
                        <div className='flex items-center justify-start gap-4 mb-6'>
                          <h2 className='text-base font-semibold lg:text-lg xl:text-xl  '>
                            Rented by
                          </h2>
                        </div>
                      </th>
                      <th
                        scope='col'
                        className=' pr-4 pt-6  text-left text-sm font-medium text-babyblack'
                      >
                        <div className='flex items-center gap-4 mb-6'>
                          <h2 className='text-base font-semibold lg:text-lg xl:text-xl  '>
                            Amount ($)
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
                            Date
                          </h2>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className=' px-6  py-5 overflow-x-scroll  divide-y divide-gray-1 cursor-pointer'>
                    {leasehistory.map((item, index) => {
                      return (
                        <tr
                          key={index}
                          className='hover:bg-softpurple text-xs md:text-sm '
                        >
                          <td className='pl-6 pr-4  py-4  '>{item.carname}</td>

                          <td className=' py-4  pr-4 '>{item.renter}</td>
                          <td className='pr-4   py-4  text-left '>
                            {item.amount}
                          </td>
                          <td
                            className={`${
                              item.status === 'Successfull'
                                ? 'pr-4    text-left text-green-800 bg-green-300 px-2 py-1'
                                : item.status === 'Canceled'
                                ? 'pr-4    text-left text-red-800 bg-red-300 px-2 py-1'
                                : 'pr-4   py-4  text-left text-orange-800 bg-orange-300 font-normal'
                            }`}
                          >
                            {item.status}
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
    </>
  )
}

export default Leasehistory
