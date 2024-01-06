import React, { useState, useEffect } from 'react'
import Navbar from '@/components/Navigation/Navbar/index'
import Link from 'next/link'
import Footer from '@/components/Navigation/Footer'
import { TbMessagesOff } from 'react-icons/tb'
import mainAxiosAction from '@/components/axiosAction'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import moment from 'moment'
import Loader from '../../components/Loaders/tableloaders'
import ReactPaginate from 'react-paginate'
import { useRouter } from 'next/router'

function Index() {
  const [tickets, setTickets] = useState(null)
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 10 // Set the number of items per page
  const router = useRouter()

  const getalltickets = () => {
    setLoading(true)
    mainAxiosAction
      .post(`/ticket/get-ticket`, {})
      .then(function (response) {
        setTickets(response?.data?.tickets)
        setLoading(false)
      })
      .catch(function (error) {
        toast.error(error?.response?.data?.message)
        setLoading(false)
        console.log(error)
      })
  }

  useEffect(() => {
    getalltickets()
  }, [])

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected)
  }

  const indexOfLastItem = (currentPage + 1) * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = tickets
    ?.slice(indexOfFirstItem, indexOfLastItem)
    .map((item, index) => (
      <tr
        onClick={() => {
          router.push({
            pathname: `/support/${item?._id}`,
            query: {
              status: item?.status,
              priority: item?.priority,
              reference_code: item?.reference_code,
              lastupdated: item?.last_updated,
              subject: item?.subject,
            },
          })
        }}
        key={index}
        className='hover:bg-softpurple text-xs md:text-sm  xl:text-base'
      >
        {/* Your table data rendering here */}
        <td className='pr-4  py-4   '>{item?.subject}</td>
        <td className='py-4  pr-4'>{item?.reference_code}</td>
        <td
          className={`${
            item.status === 'open'
              ? 'pr-4   py-4  text-left text-babypurple font-normal'
              : 'pr-4   py-4  text-left text-green-500 font-normal'
          }`}
        >
          {item?.status}
        </td>
        <td className='pr-4   py-4  text-left '>
          {moment(item?.last_updated).format('MMMM Do YYYY')}
        </td>
        <td className='pr-4   py-4  text-left '>{item?.priority}</td>
      </tr>
    ))

  return (
    <>
      <Navbar />
      <section className='bg-[#F5F5F5] bg-opacity-50 '>
        <div className='pt-10 lg:pt-14 xl:pt-16 mx-auto font-sans  w-full  px-6 md:px-8  lg:px-10 xl:px-14 space-y-10'>
          {/* Title */}
          <div className='flex justify-between items-center gap-2'>
            <h1 className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>
              My Support Tickets
            </h1>
            <Link
              href='/support/raiseaticket'
              className='bg-babypurple px-6 py-2 text-white rounded-md text-sm lg:text-base shadow-md transition ease-in-out delay-150  hover:-translate-y-1  hover:bg-indigo-500 duration-300 hover:border-none hover:text-white '
            >
              Raise A Ticket
            </Link>
          </div>
          {/* Content */}
          {tickets?.length < 1 ? (
            <div className='bg-white  w-full min-h-[60vh] lg:min-h-[70vh] shadow-lg flex flex-col justify-center items-center rounded-md lg:rounded-lg px-6 space-y-5'>
              {/* Icon */}
              <div className='flex justify-center items-center p-4 rounded-full bg-babygrey'>
                <TbMessagesOff className='text-2xl md:text-3xl xl:text-4xl text-babyblack' />
              </div>
              <div className='text-center mx-auto space-y-2 md:space-y-4'>
                <h1 className='font-bold text-lg md:text-2xl xl:text-3xl'>
                  No Tickets Found
                </h1>
                <p className='text-xs max-w-xs md:text-sm md:max-w-md xl:text-base xl:max-w-xl'>
                  You haven't raised any issues lately, please click the button
                  above to raise an issue if you have noticed or encountered any
                  abuse, mistreatment, or need to speak to our customer service
                  urgently
                </p>
              </div>
            </div>
          ) : (
            <div className='bg-white  w-full  shadow-lg rounded-md lg:rounded-lg px-6 py-8'>
              {/* Table */}
              <div className='w-full overflow-x-auto'>
                {loading ? (
                  <div className='w-full'>
                    <Loader />
                  </div>
                ) : (
                  <table className='min-w-max w-full divide-y  overflow-x-auto relative divide-gray-1 table-auto '>
                    <thead className='text-xs  overflow-x-scroll text-left text-babyblack   w-max'>
                      <tr>
                        <th
                          scope='col'
                          className='pr-4   text-left font-medium text-babyblack'
                        >
                          <div className='flex items-center gap-4 mb-6'>
                            <h2 className='text-sm lg:text-base xl:text-lg font-semibold '>
                              Subject
                            </h2>
                          </div>
                        </th>
                        <th
                          scope='col'
                          className=' pr-4   text-left text-sm font-medium text-babyblack'
                        >
                          <div className='flex items-center justify-start gap-4 mb-6'>
                            <h2 className=' font-semibold text-sm lg:text-base xl:text-lg  '>
                              Reference Code
                            </h2>
                          </div>
                        </th>
                        <th
                          scope='col'
                          className=' pr-4   text-left text-sm font-medium text-babyblack'
                        >
                          <div className='flex items-center gap-4 mb-6'>
                            <h2 className=' font-semibold text-sm lg:text-base xl:text-lg '>
                              Status
                            </h2>
                          </div>
                        </th>
                        <th
                          scope='col'
                          className='pr-4   text-left font-medium text-babyblack'
                        >
                          <div className='flex items-center gap-4 mb-6'>
                            <h2 className=' font-semibold  text-sm lg:text-base xl:text-lg '>
                              Last Updated
                            </h2>
                          </div>
                        </th>
                        <th
                          scope='col'
                          className='pr-4   text-left font-medium text-babyblack'
                        >
                          <div className='flex items-center gap-4 mb-6'>
                            <h2 className=' font-semibold  text-sm lg:text-base xl:text-lg'>
                              Priority
                            </h2>
                          </div>
                        </th>
                      </tr>
                    </thead>

                    <tbody className=' py-5 overflow-x-scroll  divide-y divide-gray-1 cursor-pointer'>
                      {currentItems}
                    </tbody>
                  </table>
                )}
              </div>
              <div className='w-full mt-10 flex justify-end px-4 md:px-6'>
                <ReactPaginate
                  pageCount={Math.ceil(tickets?.length / itemsPerPage)}
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
        </div>
        <Footer />
      </section>
    </>
  )
}

export default Index
