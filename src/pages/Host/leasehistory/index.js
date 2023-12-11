import React, { useState, useEffect } from 'react'
import Navbar from '@/components/Navigation/Navbar/index'

import Footer from '@/components/Navigation/Footer'
import { leasehistory, cars } from '../../../utilis/Cardata'
import { useRouter } from 'next/router'
import { BiCurrentLocation } from 'react-icons/bi'
import Image from 'next/image'
import { LuCalendarClock } from 'react-icons/lu'
import { MdOutlineCarRental } from 'react-icons/md'
import mainAxiosAction from '../../../components/axiosAction/index'
import moment from 'moment'

function Leasehistory() {
  const [loading, setLoading] = useState(false)
  const [leasedata, setLeasedata] = useState(null)
  const [returneddata, setReturneddata] = useState(null)
  const [isClosing, setIsClosing] = useState(false)
  const router = useRouter()

  const gethistory = () => {
    mainAxiosAction
      .post(`/cars/getleasehistory`, {})
      .then(function (response) {
        console.log(response?.data?.bookings)
        setLeasedata(response?.data?.bookings)
        setLoading(false)
        setReturneddata(
          response?.data?.bookings?.filter((i) => i.status === 'returned')
        )
        //  setDashdata(response?.data?.dashboard_details)
      })
      .catch(function (error) {
        setLoading(false)
        console.log(error)
      })
  }

  useEffect(() => {
    gethistory()
  }, [])

  const profile =
    localStorage?.getItem('User_Profile') === null ||
    localStorage?.getItem('User_Profile') === 'undefined' ||
    localStorage?.getItem('User_Profile') === undefined
      ? []
      : JSON?.parse(localStorage?.getItem('User_Profile'))

  return (
    <>
      <Navbar />

      <section className='bg-[#F5F5F5] bg-opacity-50 '>
        <div className='pt-10 lg:pt-14 xl:pt-16 max-w-lg mx-auto font-sans sm:max-w-2xl md:max-w-4xl  lg:max-w-6xl xl:max-w-7xl  px-6 md:px-6  lg:px-8 space-y-16'>
          <div className='space-y-6 lg:space-y-8'>
            {/* notifications */}
            {returneddata?.length > 0 && (
              <div className='bg-softpurple border border-babypurple  px-4 py-3 rounded-md sm:text-center'>
                <h1 className='text-xs lg:text-sm text-babypurple'>
                  You have{' '}
                  <span className='font-bold'>{returneddata?.length}</span>{' '}
                  lease transaction(s) that are yet to be closed out
                </h1>
              </div>
            )}
            {/* title */}
            <div className='border  shadow-sm w-full rounded-md pt-4 xl:pt-6 px-6 md:flex md:justify-between md:items-end md:gap-10 bg-white '>
              {/* text */}
              <div className='flex flex-col justify-center items-center md:justify-start md:items-start md:mx-0 space-y-4 lg:space-y-5 xl:space-y-6 mx-auto md:w-4/6  '>
                <h1 className='text-lg text-center md:text-left font-bold   lg:text-xl'>
                  {profile?.firstname}, Here's your lease history so far !
                </h1>
                <p className='text-xs text-center md:text-left max-w-xs md:max-w-full lg:text-sm  xl:text-base '>
                  Welcome to Your Car Lease History Management page! Your
                  fleet's story, at your fingertips. Here, you can keep track of
                  past bookings, review your car's journey, and make data-driven
                  decisions.
                </p>
                <div className='flex items-center gap-4 lg:gap-6  pb-4 xl:pb-6'>
                  {returneddata?.length > 0 && (
                    <button
                      onClick={() => setIsClosing(!isClosing)}
                      className='px-6 py-2  bg-babypurple rounded-md text-xs lg:text-sm text-white tracking-wide transition ease-in-out delay-150  hover:scale-110 hover:bg-indigo-500 duration-300 '
                    >
                      {' '}
                      Close Out{' '}
                      <span className='font-bold'>
                        {returneddata?.length}
                      </span>{' '}
                      Transaction(s)
                    </button>
                  )}
                </div>
              </div>
              {/* image */}
              <div className='hidden md:block '>
                <Image
                  src={'/images/dash.png'}
                  alt='dash'
                  width={1000}
                  height={1000}
                  className='object-cover w-48   '
                />
              </div>
            </div>
          </div>

          {/* content */}
          {!isClosing && leasedata?.length < 1 ? (
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
          ) : !isClosing && leasedata?.length > 0 ? (
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
                            Rent Date
                          </h2>
                        </div>
                      </th>
                      <th
                        scope='col'
                        className='pr-4 pt-6  text-left font-medium text-babyblack'
                      >
                        <div className='flex items-center gap-4 mb-6'>
                          <h2 className='text-base font-semibold  lg:text-lg xl:text-xl '>
                            Return Date
                          </h2>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className=' px-6  py-5 overflow-x-scroll  divide-y divide-gray-1 cursor-pointer'>
                    {leasedata
                      ?.sort((a, b) => {
                        return new Date(b?.start_date) - new Date(a?.start_date)
                      })
                      ?.map((item, index) => {
                        return (
                          <tr
                            onClick={() => {
                              item?.status === 'returned'
                                ? router.push({
                                    pathname: `/host/leasehistory/${item?._id}`,
                                  })
                                : ''
                            }}
                            key={index}
                            className='hover:bg-softpurple text-xs md:text-sm '
                          >
                            <td className='pl-6 pr-4  py-4  '>
                              {item?.car_booked?.car_name}
                            </td>

                            <td className=' py-4  pr-4 '>
                              {' '}
                              {item?.booked_by?.firstname}
                            </td>
                            <td className='pr-4   py-4  text-left '>
                              {item?.amount}
                            </td>
                            <td
                              className={`${
                                item?.status === 'completed'
                                  ? 'pr-4    text-left text-green-800 bg-green-300 px-2 py-1'
                                  : item?.status === 'returned'
                                  ? 'pr-4    text-left text-orange-800 bg-orange-300 px-2 py-1'
                                  : 'pr-4     text-left text-indigo-800 bg-indigo-300 font-normal px-2 py-1'
                              }`}
                            >
                              {item?.status}
                            </td>

                            <td className='pr-4   py-4  text-left '>
                              {moment(item?.start_date).format(
                                'MMMM Do YYYY, h:mm:ss a'
                              )}
                            </td>
                            <td className='pr-4   py-4  text-left '>
                              {moment(item?.start_date).format(
                                'MMMM Do YYYY, h:mm:ss a'
                              )}
                            </td>
                          </tr>
                        )
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className='w-full   mx-auto flex flex-col  space-y-3 bg-white border px-4 py-6  lg:px-6 shadow-lg rounded-md   md:min-h-[60vh]'>
              <div className='w-full overflow-x-auto'>
                <h1 className='font-bold  text-xs xl:text-base md:text-sm px-6 pb-6 '>
                  All open transactions
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
                            Rent Date
                          </h2>
                        </div>
                      </th>
                      <th
                        scope='col'
                        className='pr-4 pt-6  text-left font-medium text-babyblack'
                      >
                        <div className='flex items-center gap-4 mb-6'>
                          <h2 className='text-base font-semibold  lg:text-lg xl:text-xl '>
                            Return Date
                          </h2>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className=' px-6  py-5 overflow-x-scroll  divide-y divide-gray-1 cursor-pointer'>
                    {returneddata
                      ?.sort((a, b) => {
                        return new Date(b?.start_date) - new Date(a?.start_date)
                      })
                      ?.map((item, index) => {
                        return (
                          <tr
                            onClick={() => {
                              item?.status === 'returned'
                                ? router.push({
                                    pathname: `/host/leasehistory/${item?._id}`,
                                  })
                                : ''
                            }}
                            key={index}
                            className='hover:bg-softpurple text-xs md:text-sm '
                          >
                            <td className='pl-6 pr-4  py-4  '>
                              {item?.car_booked?.car_name}
                            </td>

                            <td className=' py-4  pr-4 '>
                              {' '}
                              {item?.booked_by?.firstname}
                            </td>
                            <td className='pr-4   py-4  text-left '>
                              {item?.amount}
                            </td>
                            <td
                              className={`${
                                item?.status === 'completed'
                                  ? 'pr-4    text-left text-green-800 bg-green-300 px-2 py-1'
                                  : item?.status === 'returned'
                                  ? 'pr-4    text-left text-orange-800 bg-orange-300 px-2 py-1'
                                  : 'pr-4     text-left text-indigo-800 bg-indigo-300 font-normal px-2 py-1'
                              }`}
                            >
                              {item?.status}
                            </td>

                            <td className='pr-4   py-4  text-left '>
                              {moment(item?.start_date).format(
                                'MMMM Do YYYY, h:mm:ss a'
                              )}
                            </td>
                            <td className='pr-4   py-4  text-left '>
                              {moment(item?.start_date).format(
                                'MMMM Do YYYY, h:mm:ss a'
                              )}
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
