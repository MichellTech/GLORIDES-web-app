import React from 'react'
import Navbar from '@/components/Navigation/Navbar'
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

function Fleet() {
  const router = useRouter()
  return (
    <>
      <Navbar />
      <div className='bg-[#F5F5F5] bg-opacity-50  w-full pt-10 xl:pt-16'>
        <section className='my-6 sm:my-10 md:pb-6 max-w-md sm:max-w-2xl mx-auto font-sans md:max-w-4xl lg:max-w-6xl xl:max-w-7xl  px-4 md:px-6  lg:px-8 space-y-10 md:space-y-14 xl:space-y-20'>
          {/* title and stat */}
          <div className='space-y-6 lg:space-y-8 rounded-md border px-4 md:px-6 lg:px-8 lg:py-7 py-6 bg-white  shadow-lg'>
            {/* title */}
            <div className='flex justify-between items-center gap-2'>
              <div className='space-y-2'>
                <h1 className='text-sm  text-center sm:text-sm md:text-base md:text-left font-bold lg:text-lg'>
                  Welcome to your Garage Michell!
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
                  <h1 className='text-xs lg:text-sm xl:text-base'>All Cars</h1>
                  <div className='flex justify-center items-center p-2 bg-green-500   bg-opacity-50 rounded-full '>
                    <MdOutlineDirectionsCar className='lg:text-2xl xl:text-3xl' />
                  </div>
                </div>
                {/* text */}
                <h1 className='font-bold text-2xl lg:text-3xl'>24</h1>
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
                <h1 className='font-bold text-2xl lg:text-3xl'>12</h1>
              </div>
              {/* one */}
              <div className='border bg-white shadow-sm  rounded-md px-4 py-4  space-y-2 lg:space-y-3 w-max grow hover:shadow-md '>
                {/* header */}
                <div className='flex justify-between items-center gap-2'>
                  <h1 className='text-xs lg:text-sm xl:text-base'>
                    Inactive Cars
                  </h1>
                  <div className='flex justify-center items-center p-2 bg-babygrey rounded-full '>
                    <MdOutlineCarRepair className='lg:text-2xl xl:text-3xl' />
                  </div>
                </div>
                {/* text */}
                <h1 className='font-bold text-2xl lg:text-3xl'>10</h1>
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
                <h1 className='font-bold text-2xl lg:text-3xl'>2</h1>
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
          <div className='w-full   mx-auto flex flex-col justify-center space-y-3 bg-white border px-4 py-6  lg:px-6 shadow-lg rounded-md  '>
            <div className='border-b'>
              <h1 className='font-bold  text-xs xl:text-base md:text-sm text-center md:text-left px-6 pb-6 '>
                All Vehicles
              </h1>
            </div>

            <div className=' pt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center items-center mx-auto  gap-y-10 lg:gap-y-14 gap-x-3 lg:gap-x-4  '>
              {cars?.map((item) => {
                return (
                  <div key={item.id}>
                    {/* car 1 */}
                    <div className='bg-white shadow-xl h-[21rem] rounded-xl  pb-2 space-y-4 max-w-xs  relative w-full border hover:shadow-2xl  '>
                      {/* image */}
                      <div className='   relative '>
                        <Image
                          src={item.image}
                          alt='image'
                          width={1000}
                          height={1000}
                          className='object-cover w-full h-40 rounded-tl-lg rounded-tr-lg rounded-br-none  rounded-bl-none '
                        />
                      </div>

                      {/*text */}
                      <div className='px-4 w-full '>
                        {/* first part */}
                        <div className=' border-b-2 pb-2 flex justify-between items-center'>
                          {/* carname */}
                          <h1 className='font-bold text-sm line-clamp-1'>
                            {item.carname}
                          </h1>
                          <h1 className='text-xs font-bold text-babypurple'>
                            ${item.cost} / day
                          </h1>
                        </div>
                        {/* second */}
                        <div className='pt-4 space-y-3'>
                          {/* params */}
                          <div className='flex items-center gap-2'>
                            <GiRoad className='text-base' />
                            <h1 className='text-[0.6rem]'>250 trips</h1>
                          </div>
                          {/* three */}
                          <div className='flex items-center gap-2'>
                            <BiCurrentLocation className='text-base' />
                            <h1 className='text-[0.6rem]'>
                              No 2 Omuola Street Awoyaya
                            </h1>
                          </div>
                          {/* button */}
                          <button
                            onClick={() => {
                              router.push({
                                pathname: `/host/fleet/${item.id}`,
                              })
                            }}
                            className='bg-babypurple px-2 py-2  w-full text-xs text-white rounded-md cursor-pointer hover:shadow-lg'
                          >
                            Manage
                          </button>
                        </div>
                      </div>
                      {/* buttons top */}
                      <div className=' absolute -top-2 left-2 right-2 '>
                        <div className='flex justify-between items-center gap-2 mx-auto w-full'>
                          {/* ratings */}
                          <div className='flex justify-center items-center gap-1 rounded-md bg-white px-2 py-1'>
                            <h1 className='text-xs text-babyblack'>
                              {' '}
                              Inservice
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}

export default Fleet
