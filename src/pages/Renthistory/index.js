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
import { BiSolidCarGarage } from 'react-icons/bi'
import { LuFuel, LuUser } from 'react-icons/lu'
import {
  GiGearStickPattern,
  GiCarSeat,
  GiRoundStar,
  GiRoad,
} from 'react-icons/gi'
import { AiOutlineHeart, AiFillHeart, AiFillStar } from 'react-icons/ai'
import { TbClockSearch } from 'react-icons/tb'
import { MdOutlineFilterAlt } from 'react-icons/md'

function Index() {
  const [query, setQuery] = useState('')
  const [params, setParams] = useState('')
  const [carhistory, setCarhistory] = useState(cars)

  const router = useRouter()

  return (
    <>
      <Navbar />
      <main className='  w-full'>
        <section className='mb-10  mt-6 xl:mt-10 max-w-md sm:max-w-2xl mx-auto font-sans md:max-w-4xl lg:max-w-6xl xl:max-w-7xl   px-4 md:px-6  lg:px-8 '>
          {/* body */}
          <div className='space-y-12 sm:space-y-14 md:space-y-16 lg:space-y-20 xl:space-y-24 w-full'>
            {/* search and filter */}
            <div className='flex flex-col justify-center items-center space-y-4 sm:flex-row sm:space-y-0 sm:justify-between sm:gap-6 w-64 sm:w-full mx-auto '>
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

            <div className='w-full flex justify-center items-center '>
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
                <div className=' space-y-10 sm:space-y-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-between items-center mx-auto sm:gap-y-12 sm:gap-x-8'>
                  {carhistory.map((item) => {
                    return (
                      <div key={item.id}>
                        {/* car 1 */}
                        <div className='bg-white shadow-lg h-[22rem] lg:h-[23rem]  rounded-xl  pb-2 space-y-4 max-w-xs  relative w-full '>
                          {/* image */}
                          <div className='   relative '>
                            <Image
                              src={item.image}
                              alt='footer'
                              width={1000}
                              height={1000}
                              className='object-cover w-full h-40 rounded-tl-lg rounded-tr-lg rounded-br-none  rounded-bl-none '
                            />
                          </div>

                          {/*text */}
                          <div className='px-4 w-full '>
                            {/* first part */}
                            <div className='space-y-2 border-b-2 pb-3'>
                              {/* carname */}
                              <h1 className='font-bold text-sm line-clamp-1'>
                                {item.carname}
                              </h1>
                              {/* owner and cost */}
                              <div className='flex items-center justify-between  '>
                                <div className='flex justify-center items-center gap-2'>
                                  <LuUser className='text-sm' />
                                  <h1 className='text-xs truncate w-24'>
                                    Olamide Oluwale
                                  </h1>
                                </div>
                                <h1 className='font-bold text-sm text-babypurple'>
                                  ${item.cost}
                                </h1>
                              </div>
                            </div>
                            {/* second */}
                            <div className='pt-6 space-y-4'>
                              {/* params */}
                              <div className=' grid grid-cols-3 gap-x-1 gap-y-6 justify-between items-center mx-auto'>
                                {/* two */}
                                <div className='flex items-center gap-2'>
                                  <LuFuel className='text-base' />
                                  <h1 className='text-[0.6rem]'>Petrol</h1>
                                </div>
                                {/* three */}
                                <div className='flex justify-center items-center gap-2'>
                                  <GiGearStickPattern className='text-base' />
                                  <h1 className='text-[0.6rem]'>Manual</h1>
                                </div>

                                {/* six */}
                                <div className='flex items-center gap-2 justify-end '>
                                  <GiRoad className='text-base' />
                                  <h1 className='text-[0.6rem]'> 240 trips</h1>
                                </div>
                              </div>
                              {/* button */}
                              <button
                                onClick={() => {
                                  router.push({
                                    pathname: `/Renthistory/${item.id}`,
                                  })
                                }}
                                className='bg-babypurple px-2 py-2 lg:py-3 w-full text-xs text-white rounded-md cursor-pointer hover:shadow-lg'
                              >
                                View Details
                              </button>
                            </div>
                          </div>
                          {/* buttons top */}
                          <div className=' absolute -top-2 left-2 right-2 '>
                            <div className='flex justify-between items-center gap-2 mx-auto w-full'>
                              {/* ratings */}
                              <div className='flex justify-center items-center gap-1 rounded-md bg-white px-2 py-1'>
                                {item.status === 'Active' ? (
                                  <h1 className='text-xs text-green-500'>
                                    Active
                                  </h1>
                                ) : (
                                  <h1 className='text-xs text-red-500'>
                                    Closed
                                  </h1>
                                )}
                              </div>
                              {/* datw */}
                              {item.status === 'Active' ? (
                                ''
                              ) : (
                                <div className='flex justify-center items-center gap-1 rounded-md bg-white px-2 py-1'>
                                  <h1 className='text-xs text-babyblack'>
                                    {item.date}
                                  </h1>
                                </div>
                              )}
                            </div>
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
