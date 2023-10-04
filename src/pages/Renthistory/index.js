import React, { useState } from 'react'
import Navbar from '@/components/Navigation/Navbar'
import Loadercomp from '@/components/Loadercomp'
import { AiOutlineFileSearch } from 'react-icons/ai'
import { TbReportSearch } from 'react-icons/tb'
import Link from 'next/link'
import Footer from '@/components/Navigation/Footer'
import { cars } from '../../utilis/Cardata'
import Image from 'next/image'
import { useRouter } from 'next/router'

function Index() {
  const [query, setQuery] = useState('')
  const [params, setParams] = useState('')
  const [carhistory, setCarhistory] = useState(cars)

  const router = useRouter()

  return (
    <>
      <Navbar />
      <main className='  w-full'>
        <section className='mb-10  mt-6 xl:mt-10 max-w-xs sm:max-w-md mx-auto font-sans md:max-w-xl lg:max-w-4xl xl:max-w-6xl  px-4 md:px-6  lg:px-8 '>
          {/* body */}
          <div className='space-y-12 sm:space-y-14 md:space-y-16 lg:space-y-20 xl:space-y-24 w-full'>
            {/* search and filter */}
            <div className='flex flex-col justify-center items-center space-y-4 md:flex-row md:space-y-0 md:justify-between md:gap-6 w-64 md:w-full mx-auto '>
              {/* search */}
              <div className=' max-w-xs sm:max-w-md md:max-w-md lg:max-w-xl xl:max-w-2xl w-72 sm:w-full md:w-full relative bg-white shadow-md'>
                <form
                  action=''
                  className='flex  justify-between items-center gap-1 sm:gap-3 border py-2 lg:py-3 px-3 border-babyblack  w-full '
                >
                  <input
                    type='text'
                    placeholder='Search by car name'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className=' font-sans outline-none placeholder:text-xs placeholder:text-center w-full text-xs sm:placeholder:text-sm sm:text-sm md:placeholder:text-base md:text-base  '
                  />
                  {/* <FiSearch className='sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-babyblack' /> */}
                </form>

                <AiOutlineFileSearch className='absolute  top-1/2  right-1 -translate-x-1/2 -translate-y-1/2 text-babyblack  cursor-pointer font-bold sm:text-lg lg:text-xl xl:text-2xl' />
              </div>
              {/* filter */}

              <div className=' border border-babyblack  max-w-xs sm:max-w-md md:max-w-sm lg:max-w-lg w-72 sm:w-full md:w-96 lg:w-full bg-white  shadow-md py-2 lg:py-3 px-3  '>
                <select
                  type='text'
                  placeholder='Please select a brand'
                  value={params}
                  onChange={(e) => setParams(e.target.value)}
                  className='flex justify-between items-center   outline-none  mx-auto text-xs sm:text-sm  md:text-base bg-white  '
                >
                  <option value=''>Filter by Status</option>
                  <option value='active'> Active</option>
                  <option value='closed'>Closed</option>
                </select>
              </div>
            </div>
            {/* content */}

            <div className='w-full'>
              {/* not found */}
              {!carhistory ? (
                <div className='flex flex-col justify-center items-center h-[50vh] lg:h-[70vh] space-y-4 sm:space-y-6 '>
                  <div className=' bg-softpurple rounded-full w-16 h-16 lg:w-20 lg:h-20 flex justify-center items-center mx-auto'>
                    <TbReportSearch className='text-babyblack text-3xl lg:text-4xl' />
                  </div>
                  <h1 className='text-center mx-auto text-sm sm:text-base lg:text-lg'>
                    {' '}
                    No Rental History Found,
                    <br /> Rent a car Today
                  </h1>
                  <div className='flex flex-col justify-center items-center mx-auto'>
                    <Link href='/rentacar' className=' '>
                      <div className=' bg-babypurple border  px-4 lg:px-6 py-2 text-white rounded transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 hover:border-none hover:text-white  '>
                        <h1 className='text-xs sm:text-sm lg:text-base '>
                          Get started
                        </h1>
                      </div>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className=' space-y-10 md:space-y-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between items-center mx-auto md:gap-y-12 md:gap-x-8'>
                  {carhistory.map((item) => {
                    return (
                      <div key={item.id} className='  mx-auto'>
                        <div
                          onClick={() => {
                            router.push({
                              pathname: `/Renthistory/${item.id}`,
                            })
                          }}
                          className='bg-white px-2 lg:px-3 py-3 lg:py-3 xl:py-4 w-64  shadow-lg rounded-lg space-y-4  cursor-pointer hover:shadow-babypurple hover:shadow-sm'
                        >
                          {/* image */}
                          <div className='  relative rounded-md    '>
                            <Image
                              src={item.image}
                              alt={item.carname}
                              width={1000}
                              height={1000}
                              className='object-cover rounded-md w-full h-32 '
                            />
                          </div>
                          {/* text */}
                          <div className='px-2 space-y-2      text-xs  lg:text-sm'>
                            <h1 className=' font-bold text-sm md:text-base lg:text-lg  text-babypurple'>
                              {item.carname}
                            </h1>
                            <h1 className=''>
                              Cost:{' '}
                              <span className='font-bold'>$ {item.cost}</span>
                            </h1>
                            <h1 className=''>
                              Order Date:{' '}
                              <span className='font-bold'>{item.date}</span>
                            </h1>
                            <h1 className=''>
                              Status:{' '}
                              <span
                                className={`${
                                  item.status === 'Active'
                                    ? 'font-bold text-[#029468]'
                                    : 'font-bold text-red-600'
                                }`}
                              >
                                {item.status}
                              </span>
                            </h1>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Index
