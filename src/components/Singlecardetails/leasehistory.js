import React from 'react'
import { leasehistory } from '@/utilis/Cardata'
import { MdOutlineCarRental } from 'react-icons/md'
function Userleasehistory() {
  return (
    <div className='bg-white rounded-md px-4 py-6 md:py-8 shadow-md'>
      {/* car photos */}
      <div className='space-y-6 '>
        <h1 className='font-bold text-sm sm:text-base  px-4  md:text-lg lg:text-xl border-b pb-2 sm:px-6 md:px-8 '>
          Most Recent Lease History
        </h1>
        {/* group */}
        <div>
          {!leasehistory ? (
            <div className='  w-full min-h-[60vh] lg:min-h-[50vh]  flex flex-col justify-center items-center rounded-md lg:rounded-lg px-6 space-y-5'>
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
            <div className=' md:min-h-[60vh]  w-full  rounded-md lg:rounded-lg '>
              {/* table */}
              <div className='w-full overflow-x-auto'>
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
                          onClick={() => {
                            router.push({
                              pathname: `/Host/leasehistory/${item.id}`,
                            })
                          }}
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
                                : 'pr-4     text-left text-orange-800 bg-orange-300 font-normal px-2 py-1'
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
      </div>
    </div>
  )
}

export default Userleasehistory
