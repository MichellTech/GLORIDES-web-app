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
import ReactPaginate from 'react-paginate'
import { Player, Controls } from '@lottiefiles/react-lottie-player'
import { toast } from 'react-toastify'
import { IoIosArrowDown } from 'react-icons/io'
import { TbStatusChange } from 'react-icons/tb'
function Leasehistory() {
  const [loading, setLoading] = useState(false)
  const [loadingp, setLoadingp] = useState(false)
  const [leasedata, setLeasedata] = useState(null)
  const [returneddata, setReturneddata] = useState(null)
  const [isClosing, setIsClosing] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [bookingid, setBookingid] = useState('')
  const [modal, setModal] = useState(false)
  const [sortdata,setSortdata] = useState("")
  const [searchedparams,setSearchedparams] = useState([])
  const itemsPerPage = 10 // Set the number of items per page
  const router = useRouter()
  const sortby = [
    {
      id: 1,
      value: 'booked',
      name: 'booked',
    },
    {
      id: 2,
      value: 'completed',
      name: 'completed',
    },
    {
      id: 3,
      value: 'cancelled',
      name: 'cancelled',
    },
    {
      id: 4,
      value: 'returned',
      name: 'returned',
    },
  ]
  
  const gethistory = () => {
    setLoading(true)
    mainAxiosAction
      .post(`/cars/getleasehistory`, {})
      .then(function (response) {
        console.log(response?.data?.bookings)
        setLeasedata(response?.data?.bookings)
        setSearchedparams(response?.data?.bookings)
        setLoading(false)
        setReturneddata(
          response?.data?.bookings?.filter((i) => i.status === 'returned')
        )
        //  setDashdata(response?.data?.dashboard_details)
      })
      .catch(function (error) {
        setLoading(true)
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
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected)
  }

  const indexOfLastItem = (currentPage + 1) * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = searchedparams?.sort((a, b) => {
    return new Date(b?.updatedAt) - new Date(a?.updatedAt)
  })
    ?.slice(indexOfFirstItem, indexOfLastItem)
    ?.map((item, index) => { 
      console.log(item?.updatedAt, index )
      return (
        <tr
          onClick={() => {
            if (item?.status === 'returned') {
              router.push({
                pathname: `/host/leasehistory/${item?._id}`,
              })
            }
            if (item?.status === 'booked') {
              setModal(true)
              setBookingid(item?._id)
            }
          }}
          key={index}
          className='hover:bg-softpurple text-xs md:text-sm  '
        >
          <td className='pl-6 pr-4  py-4  '>{item?.car_booked?.car_name}</td>

          <td className=' py-4  pr-4 '> {item?.booked_by?.firstname}</td>
          <td className='pr-4   py-4  text-left '>{item?.amount}</td>
          <td className='pr-4  font-normal'>
            <span
              className={`${
                item?.status === 'cancelled'
                  ? 'px-2 py-1 text-orange-800 bg-orange-300  flex justify-center items-center mx-auto rounded-full'
                  : item?.status === 'completed'
                  ? 'px-2 py-1 text-green-800 bg-green-300  flex justify-center items-center mx-auto rounded-full ' : item?.status === 'returned'
                  ? 'px-2 py-1 text-gray-800 bg-gray-300  flex justify-center items-center mx-auto rounded-full '
                  : 'px-2 py-1 text-white bg-indigo-500 flex justify-center items-center mx-auto rounded-full'
              }`}
            >
              {item?.status}
            </span>
          </td>

          <td className='pr-4   py-4  text-left '>
            {moment(item?.start_date).format('MMMM Do YYYY, h:mm:ss a')}
          </td>
          <td className='pr-4   py-4  text-left '>
            {moment(item?.end_date).format('MMMM Do YYYY, h:mm:ss a')}
          </td>
        </tr>
      )
    })

  const cancelbook = () => {
    setLoadingp(true)
    mainAxiosAction
      .post(`/cars/cancel-booking`, {
        transaction_id: bookingid,
      })
      .then(function (response) {
        setLoadingp(false)
        toast.success(response?.data?.message)
        router.push({
          pathname: `/host/leasehistory`,
        })
        setBookingid('')
        setModal(false)
        gethistory()
      })
      .catch(function (error) {
        toast.error(error?.response?.data?.message)
        setLoadingp(false)
        console.log(error)
      })
  }

  // filter
  useEffect(() => {
   if(sortdata !== ""){
    let searchedData = leasedata?.filter(
      (item) =>
      item?.status?.toLowerCase()?.includes(sortdata.toLowerCase())
    )
    setSearchedparams(searchedData)
   }
   else{
    setSearchedparams(leasedata)
   }
  }, [sortdata])

  return (
    <>
      <main
        className={`${
          modal
            ? 'relative h-screen overflow-y-hidden w-full'
            : 'relative w-full'
        }`}
      >
        <Navbar />

        {loading ? (
          <div className='min-h-[50vh] flex justify-center items-center'>
            <div className='loadern '></div>
          </div>
        ) : (
          <section className='bg-[#F5F5F5] bg-opacity-50 '>
            <div className='pt-10 lg:pt-14 xl:pt-16 max-w-lg mx-auto font-sans sm:max-w-2xl md:max-w-4xl  lg:max-w-6xl xl:max-w-full  px-6 md:px-6  lg:px-8 space-y-16'>
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
                      fleet's story, at your fingertips. Here, you can keep
                      track of past bookings, review your car's journey, and
                      make data-driven decisions.
                    </p>
                    <div className='flex items-center gap-4 lg:gap-6  pb-4 xl:pb-6'>
                      {returneddata?.length > 0 && (
                        <button
                          onClick={() => setSortdata("returned")}
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
                      We couldn't find your lease history records. This could be
                      as a result of server downtime or you haven't made any
                      sales in the last year{' '}
                    </p>
                  </div>
                </div>
              ) : !isClosing && leasedata?.length > 0 ? (
                <div className='bg-white md:min-h-[60vh]  w-full  shadow-lg rounded-md lg:rounded-lg py-6 lg:pb-8'>
                  {/* table */}
                  <div className='w-full overflow-x-auto'>
                    <div className='flex items-center gap-2 justify-between py-2 lg:py-3 lg:pb-6 px-6 '>
                    <h1 className='font-bold  text-xs xl:text-base md:text-sm flex-shrink-0  '>
                      All Leased vehicles
                    </h1>
                    <div className='relative w-full  md:max-w-xs '>
              <select
                id='dropdown'
                value={sortdata}
                onChange={(e) => setSortdata(e.target.value)}
                className='border border-babyblack pl-12 py-2 w-full text-sm outline-none appearance-none lg:text-base '
              >
                {/* Options */}
                <option value=''>All bookings</option>
                {sortby.map((item, index) => {
                  return (
                    <option key={index} value={item.name}>
                      {item.name}
                    </option>
                  )
                })}
              </select>
              <IoIosArrowDown className='absolute  top-1/2  right-1 -translate-x-1/2 -translate-y-1/2 text-babyblack  cursor-pointer font-bold sm:text-lg  lg:text-xl xl:text-2xl pointer-events-none' />
              <TbStatusChange className='absolute  top-1/2  left-6 -translate-x-1/2 -translate-y-1/2 text-babyblack  cursor-pointer font-bold sm:text-lg  lg:text-xl xl:text-2xl pointer-events-none' />
            </div>
                    </div>
                   
                    <table className='min-w-max w-full divide-y  overflow-x-auto relative divide-gray-1 table-auto '>
                      <thead className='text-xs  overflow-x-scroll text-left text-babyblack  bg-opacity-60   w-full bg-softpurple'>
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
                        {currentItems}
                      </tbody>
                    </table>
                  </div>
                  <div className='w-full mt-10 flex justify-end px-4 md:px-6'>
                    <ReactPaginate
                      pageCount={Math.ceil(searchedparams?.length / itemsPerPage)}
                      pageRangeDisplayed={5}
                      marginPagesDisplayed={2}
                      onPageChange={handlePageClick}
                      containerClassName={'pagination'}
                      activeClassName={'active'}
                      pageLinkClassName={'pagination-link'}
                      previousLinkClassName={'pagination-previous'}
                      nextLinkClassName={'pagination-next'}
                      breakClassName={'pagination-break'}
                      breakLinkClassName={'pagination-break-link'}
                    />
                  </div>
                </div>
              ) : (
                ''
              )}
            </div>
            <Footer />
          </section>
        )}

        {modal && (
          <div className='absolute top-0 z-50 left-0 right-0 bottom-0  bg-babyblack py-10 h-screen overflow-y-scroll  bg-opacity-90 flex justify-center items-center mx-auto'>
            <section className='bg-white px-6 lg:px-10  pb-6 lg:pb-10 shadow-lg rounded-md max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl'>
              <Player
                autoplay
                loop
                src={'/images/cancel.json'}
                className='w-40 h-40 md:w-60 md:h-60 '
                speed={1}
              >
                <Controls
                  visible={false}
                  buttons={['play', 'repeat', 'frame', 'debug']}
                />
              </Player>
              <h1 className='font-mono text-2xl md:text-3xl xl:text-4xl text-center text-babyblack'>
                Cancel Booking
              </h1>
              <p className='text-center text-xs md:text-sm lg:text-base mt-2 md:mt-4 xl:mt-6'>
                Are you sure you want to cancel this booking? Please note that
                canceling a booking may inconvenience the client and affect your
                host rating. It's recommended to communicate with the client and
                try to find an alternative solution before proceeding with the
                cancellation.
              </p>
              <div className='flex items-center gap-4 md:gap-6 xl:gap-8 justify-center mt-4  md:mt-6 xl:mt-8 w-full'>
                <button
                  onClick={() => {
                    cancelbook()
                  }}
                  className='px-4 w-full py-2 lg:py-3 bg-red-500 text-white text-sm lg:text-base rounded-md hover:shadow-lg'
                >
                  {loadingp && <h1 className='spinner mr-2'></h1>}
                  Cancel Booking
                </button>
                <button
                  onClick={() => setModal(false)}
                  className='px-4 py-2 lg:py-3 hover:shadow-lg w-full bg-indigo-500 text-white text-sm lg:text-base rounded-md
              '
                >
                  return
                </button>
              </div>
            </section>
          </div>
        )}
      </main>
    </>
  )
}

export default Leasehistory
