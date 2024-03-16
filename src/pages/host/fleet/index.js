import React, { useState, useEffect } from 'react'
import Navbar from '@/components/Navigation/Navbar/index'
import Footer from '@/components/Navigation/Footer'
import Link from 'next/link'
import Image from 'next/image'
import {
  MdOutlineDirectionsCar,
  MdOutlineElectricCar,
  MdOutlineCarRepair,
  MdOutlineCarRental,
} from 'react-icons/md'
import { BiSolidCarMechanic, BiCurrentLocation } from 'react-icons/bi'
import { cars } from '../../../utilis/Cardata'
import { useRouter } from 'next/router'
import { GiRoad } from 'react-icons/gi'
import mainAxiosAction from '../../../components/axiosAction/index'
import moment from 'moment'
import ReactPaginate from 'react-paginate'
function Fleet() {
  const [loading, setLoading] = useState(false)
  const [fleetdata, setFleetdata] = useState(null)
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 10 // Set the number of items per page
  const router = useRouter()

  const profile =
    localStorage?.getItem('User_Profile') === null ||
    localStorage?.getItem('User_Profile') === 'undefined' ||
    localStorage?.getItem('User_Profile') === undefined
      ? []
      : JSON?.parse(localStorage?.getItem('User_Profile'))

  const getfleet = () => {
    setLoading(true)
    mainAxiosAction
      .post(`/cars/get-fleet-details`, {})
      .then(function (response) {
        setLoading(false)
        setFleetdata(response?.data?.fleet_details)
      })
      .catch(function (error) {
        setLoading(true)
        console.log(error)
      })
  }

  useEffect(() => {
    getfleet()
  }, [])
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected)
  }
  const indexOfLastItem = (currentPage + 1) * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = fleetdata?.all_vehicles
    ?.slice(indexOfFirstItem, indexOfLastItem)
    ?.sort((a, b) => {
      return new Date(b?.createdAt) - new Date(a?.createdAt)
    })
    ?.map((item, index) => {
      return (
        <tr
          onClick={() => {
            router.push({
              pathname: `/host/fleet/${item?._id}`,
            })
          }}
          key={index}
          className='hover:bg-softpurple text-xs md:text-sm '
        >
          <td className='pl-6 pr-4  py-4  '>{item?.car_name}</td>

          <td className=' py-4  pr-4 '>
            {' '}
            {moment(item?.createdAt).format('MMMM Do YYYY, h:mm:ss a')}{' '}
          </td>
          <td className='pr-4   py-4  text-left '>{item?.rent_cost}</td>
          <td
            className={`${
              item?.status === 'listed'
                ? 'pr-4    text-left text-green-800 bg-green-300 px-2 py-1':  item?.status === 'booked'
                ? 'pr-4    text-left text-blue-800 bg-blue-300 px-2 py-1'
                : 'pr-4    text-left text-red-800 bg-red-300 px-2 py-1'
            }`}
          >
            {item?.status}
          </td>

          <td className='pr-4   py-4  text-left '>{item?.pickup_location}</td>
          <td className='pr-4   py-4  text-left '>{item?.dropoff_location}</td>
        </tr>
      )
    })

  console.log(fleetdata)
  return (
    <>
      <Navbar />
      {loading ? (
        <div className='min-h-[50vh] flex justify-center items-center'>
          <div className='loadern '></div>
        </div>
      ) : (
        <div className='bg-[#F5F5F5] bg-opacity-50  w-full pt-10 xl:pt-16'>
          <section className='my-6 sm:my-10 md:pb-6 max-w-md sm:max-w-2xl mx-auto font-sans md:max-w-4xl lg:max-w-6xl xl:max-w-full  px-4 md:px-6  lg:px-8 space-y-10 md:space-y-14 xl:space-y-20'>
            {/* title and stat */}
            <div className='space-y-6 lg:space-y-8 rounded-md border px-4 md:px-6 lg:px-8 lg:py-7 py-6 bg-white  shadow-lg'>
              {/* title */}
              <div className='flex justify-between items-center gap-2'>
                <div className='space-y-2'>
                  <h1 className='text-sm  text-center sm:text-sm md:text-base md:text-left font-bold lg:text-lg'>
                    Welcome to your Garage {profile?.firstname}!
                  </h1>
                  <h1 className='text-xs text-center lg:text-sm md:text-left md:max-w-md lg:max-w-xl xl:max-w-2xl px-3 md:px-0'>
                    Here, you can effortlessly oversee your car fleet, track
                    bookings, and ensure smooth rides for your customers. Let's
                    hit the road to success together !
                  </h1>
                </div>

                <Link
                  href='/host/enlistacar'
                  className='bg-babypurple hidden md:block px-6 py-2 lg:py-3 text-white rounded-md text-xs lg:text-sm shadow-md transition ease-in-out delay-150    hover:bg-indigo-500 duration-300 hover:border-none hover:text-white w-max '
                >
                  Enlist a Car
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
                  <h1 className='font-bold text-2xl lg:text-3xl'>
                    {fleetdata?.all_cars}
                  </h1>
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
                  <h1 className='font-bold text-2xl lg:text-3xl'>
                    {fleetdata?.active_cars}
                  </h1>
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
                  <h1 className='font-bold text-2xl lg:text-3xl'>
                    {fleetdata?.delisted_cars}
                  </h1>
                </div>
              </div>

              {/* mobile withdrawa */}
              <div className='w-full'>
                <Link
                  href='/host/enlistacar'
                  className='bg-babypurple md:hidden px-6 py-2 sm:py-3 text-white rounded-md text-xs lg:text-sm shadow-md transition ease-in-out delay-150    hover:bg-indigo-500 duration-300 hover:border-none hover:text-white w-full flex justify-center items-center '
                >
                  Enlist a Car
                </Link>
              </div>
            </div>
            {/* display cars */}
            {fleetdata?.all_vehicles?.length < 1 ? (
              <div className='bg-white  w-full min-h-[60vh] lg:min-h-[50vh] shadow-lg flex flex-col justify-center items-center rounded-md lg:rounded-lg px-6 space-y-5'>
                {/* icon */}
                <div className='flex justify-center items-center p-4 rounded-full bg-babygrey'>
                  <MdOutlineCarRental className='text-2xl md:text-3xl xl:text-4xl text-babyblack' />
                </div>
                <div className='text-center mx-auto space-y-2 md:space-y-4'>
                  <h1 className='font-bold text-lg md:text-2xl xl:text-3xl'>
                    No Fleet Records Found
                  </h1>
                  <p className='text-xs max-w-xs md:text-sm md:max-w-md xl:text-base xl:max-w-xl'>
                    We couldn't find your fleet records. This could be because
                    you haven't enlisted any vehicle. enlist a vehicle today so
                    you can start earning on the gloride platform{' '}
                  </p>
                </div>
              </div>
            ) : (
              <div className='bg-white min-h-[60vh]  w-full  shadow-lg rounded-md lg:rounded-lg py-6 lg:pb-8'>
                {/* table */}
                <div className='w-full overflow-x-auto'>
                  <h1 className='font-bold  text-xs xl:text-base md:text-sm px-6 pb-6 '>
                    All vehicles
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
                              Date Enlisted
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
                              Pickup location
                            </h2>
                          </div>
                        </th>
                        <th
                          scope='col'
                          className='pr-4 pt-6  text-left font-medium text-babyblack'
                        >
                          <div className='flex items-center gap-4 mb-6'>
                            <h2 className='text-base font-semibold  lg:text-lg xl:text-xl '>
                              Dropoff location
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
                    pageCount={Math.ceil(
                      fleetdata?.all_vehicles?.length / itemsPerPage
                    )}
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
            )}
          </section>

          <Footer />
        </div>
      )}
    </>
  )
}

export default Fleet
