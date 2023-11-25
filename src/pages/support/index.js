import React from 'react'
import Navbar from '@/components/Navigation/Navbar/index'
import Link from 'next/link'
import Footer from '@/components/Navigation/Footer'
import { TbMessagesOff } from 'react-icons/tb'
import Ticketdata from '../../utilis/tickets'
import { useRouter } from 'next/router'
function index() {
  const router = useRouter()
  return (
    <>
      <Navbar />

      <section className='bg-[#F5F5F5] bg-opacity-50 '>
        <div className='pt-10 lg:pt-14 xl:pt-16 max-w-lg mx-auto font-sans sm:max-w-xl md:max-w-3xl  lg:max-w-4xl xl:max-w-6xl  px-6 md:px-6  lg:px-8 space-y-16'>
          {/* title */}
          <div className='flex justify-between items-center gap-2'>
            <h1 className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
              My Support Tickets
            </h1>
            <Link
              href='/support/raiseaticket'
              className='bg-babypurple px-6 py-2 text-white rounded-md text-sm lg:text-base shadow-md transition ease-in-out delay-150  hover:-translate-y-1  hover:bg-indigo-500 duration-300 hover:border-none hover:text-white '
            >
              Raise A Ticket
            </Link>
          </div>
          {/* content */}
          {!Ticketdata ? (
            <div className='bg-white  w-full min-h-[60vh] lg:min-h-[70vh] shadow-lg flex flex-col justify-center items-center rounded-md lg:rounded-lg px-6 space-y-5'>
              {/* icon */}
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
                  abuse, mistreatement or need to speak to our customer servive
                  urgently
                </p>
              </div>
            </div>
          ) : (
            <div className='bg-white  w-full  shadow-lg rounded-md lg:rounded-lg px-6 py-8'>
              {/* table */}
              <div className='w-full overflow-x-auto'>
                <table className='min-w-max w-full divide-y  overflow-x-auto relative divide-gray-1 table-auto '>
                  <thead className='text-xs  overflow-x-scroll text-left text-babyblack   w-max'>
                    <tr>
                      <th
                        scope='col'
                        className='pr-4   text-left font-medium text-babyblack'
                      >
                        <div className='flex items-center gap-4 mb-6'>
                          <h2 className='text-base lg:text-lg xl:text-xl font-semibold '>
                            Subject
                          </h2>
                        </div>
                      </th>
                      <th
                        scope='col'
                        className=' pr-4   text-left text-sm font-medium text-babyblack'
                      >
                        <div className='flex items-center justify-start gap-4 mb-6'>
                          <h2 className='text-base font-semibold lg:text-lg xl:text-xl  '>
                            Reference Code
                          </h2>
                        </div>
                      </th>
                      <th
                        scope='col'
                        className=' pr-4   text-left text-sm font-medium text-babyblack'
                      >
                        <div className='flex items-center gap-4 mb-6'>
                          <h2 className='text-base font-semibold lg:text-lg xl:text-xl  '>
                            Status
                          </h2>
                        </div>
                      </th>
                      <th
                        scope='col'
                        className='pr-4   text-left font-medium text-babyblack'
                      >
                        <div className='flex items-center gap-4 mb-6'>
                          <h2 className='text-base font-semibold  lg:text-lg xl:text-xl '>
                            Last Updated
                          </h2>
                        </div>
                      </th>
                      <th
                        scope='col'
                        className='pr-4   text-left font-medium text-babyblack'
                      >
                        <div className='flex items-center gap-4 mb-6'>
                          <h2 className='text-base font-semibold  lg:text-lg xl:text-xl '>
                            Priority
                          </h2>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className=' py-5 overflow-x-scroll  divide-y divide-gray-1 cursor-pointer'>
                    {Ticketdata.map((item, index) => {
                      return (
                        <tr
                          onClick={() => {
                            router.push({
                              pathname: `/support/${item.id}`,
                            })
                          }}
                          key={index}
                          className='hover:bg-softpurple text-xs md:text-sm '
                        >
                          <td className=' pr-4  py-4   '>{item.title}</td>
                          <td className=' py-4 '>{item.referencecode}</td>

                          <td
                            className={`${
                              item.status === 'open'
                                ? 'pr-4   py-4  text-left text-babypurple font-normal'
                                : 'pr-4   py-4  text-left text-green-500 font-normal'
                            }`}
                          >
                            {item.status}
                          </td>
                          <td className='pr-4   py-4  text-left '>
                            {item.lastupdated}
                          </td>
                          <td className='pr-4   py-4  text-left '>
                            {item.priority}
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

export default index
