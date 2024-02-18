import React, { useState, useEffect } from 'react'
import Navbar from '@/components/Navigation/Navbar/index'
import Footer from '@/components/Navigation/Footer'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { MdOutlineWorkHistory } from 'react-icons/md'
import mainAxiosAction from '../../components/axiosAction/index'
import moment from 'moment'
import ReactPaginate from 'react-paginate'
import { IoMdArrowDropdown, IoMdArrowDropright } from 'react-icons/io'

function Index() {
  const [loading, setLoading] = useState(false)
  const [history, setHistory] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 10 // Set the number of items per page

  const router = useRouter()
  const [openRowIndex, setOpenRowIndex] = useState(null)

  const handleRowClick = (index) => {
    setOpenRowIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  const getrenthistory = () => {
    setLoading(true)
    mainAxiosAction
      .post(`/cars/getrenthistory`, {})
      .then(function (response) {
        console.log(response?.data?.bookings)
        setLoading(false)
        setHistory(response?.data?.bookings)
      })
      .catch(function (error) {
        setLoading(true)
        console.log(error)
      })
  }

  useEffect(() => {
    getrenthistory()
  }, [])

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected)
  }

  const handleopen = (i) => {
    if (i?.payment_status === 'pending') {
      return
    } else {
      router.push({
        pathname: `/renthistory/${i?._id}`,
      })
    }
  }

  // const rows = history?.map((item, index) => (

  // ))

  const indexOfLastItem = (currentPage + 1) * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = history
    ?.sort((a, b) => {
      return new Date(b?.start_date) - new Date(a?.start_date)
    })
    ?.slice(indexOfFirstItem, indexOfLastItem)
    .map((item, index) => {
      if (item?.extensions?.length > 0) {
        return (
          <React.Fragment key={index}>
            <tr
              onClick={() => handleRowClick(index)}
              key={index}
              // onClick={() => {
              //   handleopen(item)
              // }}
              className='hover:bg-softpurple text-xs md:text-sm '
            >
              <td className='pl-6 pr-4  py-4  '>
                <div className='flex items-center gap-2 '>
                  <Image
                    src={item?.car_booked?.car_photos?.[0]?.url}
                    alt={item?.car_booked?.car_photos?.[0]?.name}
                    width={1000}
                    height={1000}
                    className='object-cover w-14 md:w-16 lg:w-20  rounded-md border-2 '
                  />
                </div>
                <p className='text-xs flex gap-2 items-center font-medium'>
                  Extensions available <IoMdArrowDropdown />
                </p>
              </td>
              <td className=' py-4 pr-4 '>{item?.car_booked?.car_name}</td>
              <td className=' py-4  pr-4 '>
                {moment(item?.start_date).format('MMMM Do YYYY')}
              </td>
              <td className='pr-4   py-4  text-left '>
                {moment(item?.end_date).format('MMMM Do YYYY')}
              </td>
              <td
                className={`${
                  item?.status === 'booked'
                    ? 'pr-4 py-4    text-left text-white bg-indigo-500 px-2 '
                    : item?.status === 'returned'
                    ? 'pr-4 py-4 text-left text-orange-800 bg-orange-300 px-2 '
                    : 'pr-4   py-4  text-left text-green-800 bg-green-300 px-2  font-normal'
                }`}
              >
                {item?.status}
              </td>
              <td
                className={`${
                  item?.payment_status === 'pending'
                    ? 'pr-4 py-4 text-left text-orange-800 bg-orange-300 px-2 '
                    : 'pr-4   py-4  text-left text-green-800 bg-green-300 px-2  font-normal'
                }`}
              >
                {item?.payment_status}
              </td>
              <td className='pr-4   py-4  text-center '>
                {item?.car_booked?.rent_cost}
              </td>
              <td className='pr-4   py-4  text-left '>
                {item?.pickup_address}
              </td>
            </tr>
            {openRowIndex === index && (
              <tr>
                <td colSpan='8'>
                  {/* Additional disclosure content goes here */}
                  <div className='px-2 lg:px-4 py-2 lg:py-3 border'>
                    <table className='min-w-max w-full divide-y  overflow-x-auto relative divide-gray-1 table-auto '>
                      <thead className='text-xs  overflow-x-scroll text-left text-babyblack  bg-opacity-60   w-max bg-indigo-400 '>
                        <tr>
                          <th
                            scope='col'
                            className='pr-4  pl-4 pt-2 text-left font-medium text-babyblack'
                          >
                            <div className='flex items-center gap-4 mb-2'>
                              <h2 className='text-xs font-semibold  lg:text-sm '>
                                Service
                              </h2>
                            </div>
                          </th>
                          <th
                            scope='col'
                            className='pr-4 pt-2  text-left font-medium text-babyblack'
                          >
                            <div className='flex items-center gap-4 mb-2'>
                              <h2 className='text-xs font-semibold  lg:text-sm  '>
                                New End Date
                              </h2>
                            </div>
                          </th>
                          <th
                            scope='col'
                            className=' pr-4 pt-2  text-left text-sm font-medium text-babyblack'
                          >
                            <div className='flex items-center justify-start gap-4 mb-2'>
                              <h2 className='text-xs font-semibold  lg:text-sm   '>
                                Amount
                              </h2>
                            </div>
                          </th>
                          <th
                            scope='col'
                            className=' pr-4 pt-2  text-left text-sm font-medium text-babyblack'
                          >
                            <div className='flex items-center gap-4 mb-2'>
                              <h2 className='text-xs font-semibold  lg:text-sm  '>
                                Payment status
                              </h2>
                            </div>
                          </th>
                        </tr>
                      </thead>

                      <tbody className=' px-6  py-2 overflow-x-scroll  divide-y divide-gray-1 cursor-pointer'>
                        {item?.extensions?.map((i, index) => {
                          return (
                            <tr
                              key={index}
                              className='hover:bg-softpurple text-xs md:text-sm '
                            >
                              <td className='pl-6 pr-4  py-4  text-xs '>
                                Rent Extension
                              </td>
                              <td className=' py-4 pr-4 text-xs '>
                                {moment(item?.end_date).format('MMMM Do YYYY')}
                              </td>
                              <td className=' py-4  pr-4  text-xs'>
                                {' '}
                                {item?.amount}
                              </td>

                              <td
                                className={`${
                                  item?.payment_status === 'pending'
                                    ? 'pr-4 py-4 text-left text-orange-800 bg-orange-300 px-2 text-xs'
                                    : 'pr-4   py-4  text-left text-green-800 bg-green-300 px-2  font-normal text-xs'
                                }`}
                              >
                                {item?.payment_status}
                              </td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
            )}
          </React.Fragment>
        )
      }
      return (
        <tr
          key={index}
          onClick={() => {
            handleopen(item)
          }}
          className='hover:bg-softpurple text-xs md:text-sm '
        >
          <td className='pl-6 pr-4  py-4  '>
            <Image
              src={item?.car_booked?.car_photos?.[0]?.url}
              alt={item?.car_booked?.car_photos?.[0]?.name}
              width={1000}
              height={1000}
              className='object-cover w-14 md:w-16 lg:w-20  rounded-md border-2 '
            />
          </td>
          <td className=' py-4 pr-4 '>{item?.car_booked?.car_name}</td>
          <td className=' py-4  pr-4 '>
            {moment(item?.start_date).format('MMMM Do YYYY')}
          </td>
          <td className='pr-4   py-4  text-left '>
            {moment(item?.end_date).format('MMMM Do YYYY')}
          </td>
          <td
            className={`${
              item?.status === 'booked'
                ? 'pr-4 py-4    text-left text-white bg-indigo-500 px-2 '
                : item?.status === 'returned'
                ? 'pr-4 py-4 text-left text-orange-800 bg-orange-300 px-2 '
                : 'pr-4   py-4  text-left text-green-800 bg-green-300 px-2  font-normal'
            }`}
          >
            {item?.status}
          </td>
          <td
            className={`${
              item?.payment_status === 'pending'
                ? 'pr-4 py-4 text-left text-orange-800 bg-orange-300 px-2 '
                : 'pr-4   py-4  text-left text-green-800 bg-green-300 px-2  font-normal'
            }`}
          >
            {item?.payment_status}
          </td>
          <td className='pr-4   py-4  text-center '>
            {item?.car_booked?.rent_cost}
          </td>
          <td className='pr-4   py-4  text-left '>{item?.pickup_address}</td>
        </tr>
      )
    })

  return (
    <>
      <Navbar />
      <main className='  w-full  bg-[#F5F5F5] bg-opacity-50 '>
        {loading ? (
          <div className='min-h-[40vh] flex justify-center items-center'>
            <div className='loadern '></div>
          </div>
        ) : (
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
                    We couldn't find your rental records. This is because you
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
                              Booking Status
                            </h2>
                          </div>
                        </th>
                        <th
                          scope='col'
                          className='pr-4 pt-6  text-left font-medium text-babyblack'
                        >
                          <div className='flex items-center gap-4 mb-6'>
                            <h2 className='text-sm font-semibold  md:text-base xl:text-lg  '>
                              Payment Status
                            </h2>
                          </div>
                        </th>
                        <th
                          scope='col'
                          className='pr-4 pt-6  text-left font-medium text-babyblack'
                        >
                          <div className='flex items-center gap-4 mb-6'>
                            <h2 className='text-sm font-semibold  md:text-base xl:text-lg  '>
                              Amount ($)
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
                      {currentItems}
                    </tbody>
                  </table>
                </div>
                <div className='w-full mt-10 flex justify-end px-4 md:px-6'>
                  <ReactPaginate
                    pageCount={Math.ceil(history.length / itemsPerPage)}
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
        )}
        <Footer />
      </main>
    </>
  )
}

export default Index
