import React, { useMemo, useEffect } from 'react'
import { useRouter } from 'next/router'
import { cars } from '../../../utilis/Cardata'
import Navbar from '@/components/Navigation/Navbar/index'
import Footer from '@/components/Navigation/Footer'
import { useSelector, useDispatch } from 'react-redux'

import Carousel from '../../../components/Carousel/Image'
import Userfeedback from '../../../components/Carousel/userfeedback'
import {
  MdKeyboardBackspace,
  MdOutlineBluetoothConnected,
  MdGpsFixed,
  MdChildFriendly,
  MdSettingsInputHdmi,
  MdOutlineMyLocation,
  MdLocalFireDepartment,
} from 'react-icons/md'
// import { FaBluetoothB } from 'react-icons/md'
import Link from 'next/link'
import { BiSolidCarGarage, BiBookmark, BiCurrentLocation } from 'react-icons/bi'
import { LuFuel } from 'react-icons/lu'
import { GiGearStickPattern, GiCarSeat } from 'react-icons/gi'
import { TbClockSearch, TbCameraCheck } from 'react-icons/tb'
import { AiFillCar } from 'react-icons/ai'
import { RiUserSettingsFill } from 'react-icons/ri'
import { FaRegCreditCard } from 'react-icons/fa'
import { GoMilestone } from 'react-icons/go'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Viewcar() {
  const router = useRouter()
  const { allsearchedcars } = useSelector((store) => store.rental)
  const carId = router.query.id

  const singlecar = useMemo(
    () => allsearchedcars?.filter((item) => item._id === carId),
    [carId]
  )
  // console.log(singlecar?.[0]?.car_additional_features)
  return (
    <>
      <Navbar />
      <section className='bg-[#F5F5F5]  w-full pt-10 xl:pt-16 '>
        {/* body */}
        <div className=' px-6 md:px-7  lg:px-8 space-y-6 lg:space-y-10   pb-10  '>
          {/* back */}
          <Link href='/rentacar'>
            <div className='flex items-center gap-2 cursor-pointer'>
              <MdKeyboardBackspace className='lg:text-2xl' />
              <h1 className='text-sm  lg:text-base font-bold'>All Cars</h1>
            </div>
          </Link>
          {/* body */}
          <div>
            {/* car details */}
            <div>
              {/* car photo */}
              <div className='w-full bg-white rounded-md lg:rounded-lg'>
                <Carousel photos={singlecar?.[0]?.car_photos} />
              </div>
            </div>
            {/* booking and user Info */}
            <div>
              <h1>bookings</h1>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  )
}

export default Viewcar

//  ;<div className='space-y-5 md:space-y-0  w-full md:flex md:items-start  md:gap-6  '>
//    {/* first */}
//    <div className='space-y-5 md:space-y-6 lg:space-y-8 md:w-2/3 lg:w-3/4'>
//      {/* carname*/}
//      <div className='bg-white px-4 py-4 rounded-lg space-y-2 lg:space-y-4 shadow-md lg:py-6'>
//        <h1 className='font-bold text-sm sm:text-base md:text-lg lg:text-xl border-b pb-2'>
//          Car Information
//        </h1>
//        {/* img */}
//        <div className='flex flex-wrap items-start gap-4 lg:gap-6 divide-x'>
//          <div className='space-y-1 lg:space-y-2'>
//            <h1 className='text-sm lg:text-base'>Car Name</h1>
//            <div className='flex items-center gap-2'>
//              <AiFillCar className='' />
//              <h1 className='text-xs lg:text-sm'>{singlecar?.[0]?.car_name}</h1>
//            </div>
//          </div>

//          <div className='space-y-1 lg:space-y-2 pl-4 lg:pl-6'>
//            <h1 className='text-sm lg:text-base'>Car Model</h1>
//            <div className='flex items-center gap-2'>
//              <MdSettingsInputHdmi className='' />
//              <h1 className='text-xs lg:text-sm'>{singlecar?.[0]?.car_model}</h1>
//            </div>
//          </div>
//          <div className='space-y-1 lg:space-y-2 pl-4 lg:pl-6'>
//            <h1 className='text-sm lg:text-base'>Car Miles</h1>
//            <div className='flex items-center gap-2'>
//              <GoMilestone className='' />
//              <h1 className='text-xs lg:text-sm'>{singlecar?.[0]?.miles}</h1>
//            </div>
//          </div>
//          <div className='space-y-1 lg:space-y-2 pl-4 lg:pl-6'>
//            <h1 className='text-sm lg:text-base'>Location</h1>
//            <div className='flex items-center gap-2'>
//              <MdOutlineMyLocation className='' />
//              <h1 className='text-xs lg:text-sm'>
//                {singlecar?.[0]?.city}, {singlecar?.[0]?.state}
//              </h1>
//            </div>
//          </div>
//          <div className='space-y-1 lg:space-y-2 pl-4 lg:pl-6'>
//            <h1 className='text-sm lg:text-base'>Plate Number</h1>
//            <div className='flex items-center gap-2'>
//              <FaRegCreditCard className='' />
//              <h1 className='text-xs lg:text-sm'>
//                {singlecar?.[0]?.plate_number}
//              </h1>
//            </div>
//          </div>
//          <div className='space-y-1 lg:space-y-2 pl-4 lg:pl-6'>
//            <h1 className='text-sm lg:text-base'>Car Owner</h1>
//            <div className='flex items-center gap-2'>
//              <RiUserSettingsFill className='' />
//              <h1 className='text-xs lg:text-sm'>
//                {singlecar?.[0]?.owner.firstname}
//              </h1>
//            </div>
//          </div>
//        </div>
//      </div>
//      {/* image */}
//      <div className='bg-white px-4 py-4 rounded-lg shadow-md lg:py-6'>
//        <h1 className='font-bold text-sm sm:text-base md:text-lg lg:text-xl border-b pb-2'>
//          Car Photos
//        </h1>
//        {/* img */}
//        <div className='w-full bg-white '>
//          <Carousel photos={singlecar?.[0]?.car_photos} />
//        </div>
//      </div>
//      {/* description */}
//      <div className='bg-white px-4 py-4 rounded-lg space-y-2 lg:space-y-4 shadow-md lg:py-6'>
//        <h1 className='font-bold text-sm sm:text-base md:text-lg lg:text-xl border-b pb-2'>
//          Car Description
//        </h1>
//        {/* img */}
//        <div className='w-full'>
//          <h1 className='text-xs lg:text-sm'>{singlecar?.description}</h1>
//        </div>
//      </div>
//      {/* car features */}
//      <div className='bg-white px-4 py-4 rounded-lg space-y-2 lg:space-y-4 shadow-md lg:py-6'>
//        <h1 className='font-bold text-sm sm:text-base md:text-lg lg:text-xl border-b pb-2'>
//          Car Features
//        </h1>

//        {/* features */}
//        <div className='flex flex-wrap gap-2 '>
//          {/* one */}
//          <div className='flex items-center gap-2 border border-babyblack px-2 py-2  w-max rounded-sm lg:rounded-md'>
//            <LuFuel className='text-xl' />
//            <h1 className='text-xs'>{singlecar?.[0]?.fuel_type} </h1>
//          </div>
//          {/* two */}
//          <div className='flex items-center gap-2 border border-babyblack px-2 py-2  w-max rounded-sm lg:rounded-md'>
//            <BiSolidCarGarage className='text-xl' />
//            <h1 className='text-xs '> {singlecar?.[0]?.car_doors} Doors</h1>
//          </div>
//          {/* three */}
//          <div className='flex items-center gap-2 border border-babyblack px-2 py-2 w-max rounded-sm lg:rounded-md'>
//            <GiCarSeat className='text-xl' />
//            <p className='text-xs'>{singlecar?.[0]?.seats_number} Seater</p>
//          </div>
//          {/* four */}
//          <div className='flex items-center gap-2 border border-babyblack px-2 py-2  w-max  rounded-sm lg:rounded-md'>
//            <GiGearStickPattern className='text-xl' />
//            <p className='text-xs'>{singlecar?.[0]?.gear_type} </p>
//          </div>
//          {/* five */}
//          <div className='flex items-center gap-2 border border-babyblack px-2 py-2  w-max rounded-sm lg:rounded-md'>
//            <TbClockSearch className='text-xl' />
//            <p className='text-xs'>{singlecar?.[0]?.miles} </p>
//          </div>
//          {/* six */}
//          <div className='flex items-center gap-2 border border-babyblack px-2 py-2  w-max rounded-sm lg:rounded-md'>
//            <MdOutlineBluetoothConnected className='text-xl' />
//            <p className='text-xs'>Bluetooth</p>
//          </div>
//          {/* seven*/}
//          {singlecar?.[0]?.car_additional_features?.some((i) => i['gps']) && (
//            <div className='flex items-center gap-2 border border-babyblack px-2 py-2  w-max rounded-sm lg:rounded-md'>
//              <MdGpsFixed className='text-xl' />
//              <p className='text-xs'>GPS</p>
//            </div>
//          )}
//          {/* eight*/}
//          {singlecar?.[0]?.car_additional_features?.some((i) => i['heater']) && (
//            <div className='flex items-center gap-2 border border-babyblack px-2 py-2  w-max rounded-sm lg:rounded-md'>
//              <MdLocalFireDepartment className='text-xl' />
//              <p className='text-xs'>Heater Available</p>
//            </div>
//          )}
//          {/* eight*/}
//          {singlecar?.[0]?.car_additional_features?.some((i) => i['camera']) && (
//            <div className='flex items-center gap-2 border border-babyblack px-2 py-2  w-max rounded-sm lg:rounded-md'>
//              <TbCameraCheck className='text-xl' />
//              <p className='text-xs'>Camera</p>
//            </div>
//          )}
//        </div>
//      </div>

//      {/* review */}
//      <div className='bg-white px-4 py-4 rounded-lg space-y-2 lg:space-y-4 shadow-md lg:py-6'>
//        <h1 className='font-bold text-sm sm:text-base md:text-lg lg:text-xl border-b pb-2'>
//          Car Reviews and Ratings
//        </h1>
//        {/* img */}
//        <div className=''>
//          <Userfeedback />
//        </div>
//      </div>
//    </div>
//    {/* second */}
//    <div className='md:w-1/3 lg:w-1/4'>
//      {/* summary */}
//      <div className='bg-white px-4 py-4 rounded-lg space-y-3  md:space-y-4 lg:space-y-5 shadow-md'>
//        <h1 className='font-bold text-base sm:text-base md:text-base lg:text-lg border-b border-babyblack pb-2'>
//          Rental Information
//        </h1>
//        {/* one */}
//        <div className='w-full  flex justify-between items-center gap-2 border-b pb-4 '>
//          <h1 className='text-xs xl:text-sm'>Rent Cost</h1>
//          <h1 className='text-xs xl:text-sm font-bold text-babypurple'>
//            $ {singlecar?.[0]?.rent_cost} / day
//          </h1>
//        </div>
//        {/* two */}
//        <div className='w-full  flex justify-between items-center gap-2   border-b pb-4'>
//          <h1 className='text-xs xl:text-sm '>Insurance Cost</h1>
//          <h1 className='text-xs  xl:text-sm font-bold text-green-500'>
//            Optional
//          </h1>
//        </div>

//        {/* settings*/}
//        <div className='w-full  space-y-4 py-4'>
//          <button
//            onClick={() => {
//              router.push({
//                pathname: `/rentacar/${singlecar?.[0]?._id}/bookingconfirmation/${singlecar?.[0]?._id}`,
//              })
//            }}
//            className='bg-babypurple px-5 py-3 w-full  md:px-2 text-white rounded-sm transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-500 hover:border-none hover:text-white flex justify-center items-center gap-2'
//          >
//            <BiCurrentLocation className='text-xl' />
//            <h1 className='text-xs'> Book Vehicle</h1>
//          </button>
//          <button
//            onClick={() => toast.success('Car successfully bookmarked')}
//            className='border-babypurple w-full border px-5 py-3 md:px-2 text-babyblack rounded-sm transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-500 hover:border-none hover:text-white flex justify-center items-center gap-2'
//          >
//            <BiBookmark className='text-lg' />
//            <h1 className='text-xs'> Bookmark Vehicle</h1>
//          </button>
//          <Link
//            href='/support'
//            className='text-xs text-center text-softRed mx-auto flex justify-center items-center '
//          >
//            Report listing
//          </Link>
//        </div>
//      </div>
//    </div>
//  </div>
