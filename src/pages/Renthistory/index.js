import React, { useState, useEffect } from 'react'
import Navbar from '@/components/Navigation/Navbar/index'
import Link from 'next/link'
import Footer from '@/components/Navigation/Footer'

import Image from 'next/image'
import { useRouter } from 'next/router'

import { MdOutlineWorkHistory } from 'react-icons/md'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import mainAxiosAction from '../../components/axiosAction/index'
import moment from 'moment'
function Index() {
  const [loading, setLoading] = useState(false)
  const [history, setHistory] = useState([])

  const router = useRouter()

  const getrenthistory = () => {
    mainAxiosAction
      .post(`/cars/getrenthistory`, {})
      .then(function (response) {
        console.log(response?.data?.bookings)
        setLoading(false)
        setHistory(response?.data?.bookings)
      })
      .catch(function (error) {
        setLoading(false)
        console.log(error)
      })
  }

  useEffect(() => {
    getrenthistory()
  }, [])

  return (
    <>
      <Navbar />
      <main className='  w-full  bg-[#F5F5F5] bg-opacity-50 '>
        <section className='  pt-10 xl:pt-20 font-sans  pb-10  px-4 md:px-6  lg:px-8 '>
          {/* content */}
          {history.length < 1 ? (
            <div className='bg-white  w-full min-h-[60vh] lg:min-h-[70vh]  flex flex-col justify-center items-center rounded-md lg:rounded-lg px-6 space-y-5'>
              {/* icon */}
              <div className='flex justify-center items-center p-4 rounded-full bg-softpurple'>
                <MdOutlineWorkHistory className='text-2xl md:text-3xl xl:text-4xl text-babyblack' />
              </div>
              <div className='text-center mx-auto space-y-2 md:space-y-4'>
                <h1 className='font-bold text-lg md:text-xl xl:text-2xl'>
                  No Rental History Found
                </h1>
                <p className='text-xs max-w-xs md:text-sm md:max-w-md xl:text-base xl:max-w-xl'>
                  We couldn't find your rentalrecords. This is because you
                  haven't rented any car in the past year
                </p>
              </div>
            </div>
          ) : (
            <div className='bg-white md:min-h-[60vh]  w-full   rounded-md lg:rounded-lg py-6 lg:pb-8'>
              {/* table */}
              <div className='w-full overflow-x-auto'>
                <h1 className='font-bold  text-xs xl:text-base md:text-sm px-6 pb-6 '>
                  All Rent History
                </h1>
                <table className='min-w-max w-full divide-y  overflow-x-auto relative divide-gray-1 table-auto '>
                  <thead className='text-xs  overflow-x-scroll text-left text-babyblack  bg-opacity-60   w-max bg-softpurple '>
                    <tr>
                      <th
                        scope='col'
                        className='pr-4  pl-4 pt-6 text-left font-medium text-babyblack'
                      >
                        <div className='flex items-center gap-4 mb-6'>
                          <h2 className='text-sm font-semibold  md:text-base xl:text-lg '>
                            Car Photo
                          </h2>
                        </div>
                      </th>
                      <th
                        scope='col'
                        className='pr-4 pt-6  text-left font-medium text-babyblack'
                      >
                        <div className='flex items-center gap-4 mb-6'>
                          <h2 className='text-sm font-semibold  md:text-base xl:text-lg  '>
                            Car Name
                          </h2>
                        </div>
                      </th>
                      <th
                        scope='col'
                        className=' pr-4 pt-6  text-left text-sm font-medium text-babyblack'
                      >
                        <div className='flex items-center justify-start gap-4 mb-6'>
                          <h2 className='text-sm font-semibold  md:text-base xl:text-lg   '>
                            Rent Date
                          </h2>
                        </div>
                      </th>
                      <th
                        scope='col'
                        className=' pr-4 pt-6  text-left text-sm font-medium text-babyblack'
                      >
                        <div className='flex items-center gap-4 mb-6'>
                          <h2 className='text-sm font-semibold  md:text-base xl:text-lg  '>
                            Return Date
                          </h2>
                        </div>
                      </th>
                      <th
                        scope='col'
                        className='pr-4 pt-6  text-left font-medium text-babyblack'
                      >
                        <div className='flex items-center gap-4 mb-6'>
                          <h2 className='text-sm font-semibold  md:text-base xl:text-lg  '>
                            Status
                          </h2>
                        </div>
                      </th>
                      <th
                        scope='col'
                        className='pr-4 pt-6  text-left font-medium text-babyblack'
                      >
                        <div className='flex items-center gap-4 mb-6'>
                          <h2 className='text-sm font-semibold  md:text-base xl:text-lg  '>
                            Amount
                          </h2>
                        </div>
                      </th>

                      <th
                        scope='col'
                        className='pr-4  pt-6 text-left font-medium text-babyblack'
                      >
                        <div className='flex items-center gap-4 mb-6'>
                          <h2 className='text-sm font-semibold  md:text-base xl:text-lg '>
                            Pickup Address
                          </h2>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className=' px-6  py-5 overflow-x-scroll  divide-y divide-gray-1 cursor-pointer'>
                    {history
                      ?.sort((a, b) => {
                        return new Date(b.start_date) - new Date(a.start_date)
                      })
                      ?.map((item, index) => {
                        return (
                          <tr
                            key={index}
                            onClick={() => {
                              router.push({
                                pathname: `/renthistory/${item?._id}`,
                              })
                            }}
                            className='hover:bg-softpurple text-xs md:text-sm '
                          >
                            <td className='pl-6 pr-4  py-4  '>
                              <Image
                                src={item?.car_booked?.car_photos?.[0]?.url}
                                alt={item?.car_booked?.car_photos?.[0]?.name}
                                width={1000}
                                height={1000}
                                className='object-cover h-6 w-6 lg:w-8 lg:h-8 rounded-full '
                              />
                            </td>
                            <td className=' py-4 pr-4 '>
                              {' '}
                              {item?.car_booked?.car_name}
                            </td>
                            <td className=' py-4  pr-4 '>
                              {' '}
                              {moment(item?.start_date).format('MMMM Do YYYY')}
                            </td>
                            <td className='pr-4   py-4  text-left '>
                              {moment(item?.end_date).format('MMMM Do YYYY')}
                            </td>
                            <td
                              className={`${
                                item.status === 'booked'
                                  ? 'pr-4    text-left text-green-800 bg-green-300 px-2 py-1'
                                  : item.status === 'overdue'
                                  ? 'pr-4    text-left text-red-800 bg-red-300 px-2 py-1'
                                  : 'pr-4   py-4  text-left text-orange-800 bg-orange-300 font-normal'
                              }`}
                            >
                              {item?.status}
                            </td>

                            <td className='pr-4   py-4  text-center '>
                              {item?.car_booked?.rent_cost}
                            </td>
                            <td className='pr-4   py-4  text-left '>
                              {item?.pickup_address}
                            </td>
                          </tr>
                        )
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </section>
        <Footer />
      </main>
    </>
  )
}

export default Index
