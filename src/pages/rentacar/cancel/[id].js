import React, { useEffect, useState } from 'react'
import Navbar from '@/components/Navigation/Navbar/index'
import Footer from '@/components/Navigation/Footer'
import { GoCheckCircle } from 'react-icons/go'
import Link from 'next/link'
import Image from 'next/image'
import { LuFuel } from 'react-icons/lu'
import { GiGearStickPattern } from 'react-icons/gi'
import {
  MdOutlineAirlineSeatReclineExtra,
  MdOutlineMyLocation,
  MdOutlineLocationSearching,
} from 'react-icons/md'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import mainAxiosAction from '../../../components/axiosAction/index'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FcCancel } from 'react-icons/fc'
function success() {
  const [loading, setLoading] = useState(false)
  const [bookingdata, setBookingdata] = useState(null)
  const { successinfo } = useSelector((store) => store.rental)
  const router = useRouter()
  const transid = router?.query?.id

  const cancelbooking = (value) => {
    mainAxiosAction
      .post(`/cars/cancel-booking`, {
        transaction_id: value,
      })
      .then(function (response) {
        setLoading(false)
        console.log(response?.data)
        router.push({
          pathname: `/rentacar/${response?.data?.booking?.car_booked}`,
        })
        // setBookingdata(response?.data?.booking)
        toast.success(response?.data?.message)
      })
      .catch(function (error) {
        toast.error(error?.response?.data?.message)
        setLoading(false)
        console.log(error)
      })
  }

  useEffect(() => {
    if (transid) {
      cancelbooking(transid)
    }
  }, [transid])

  return (
    <>
      <Navbar />
      <section className='flex flex-col justify-center items-center min-h-[40vh]  space-y-12 sm:space-y-16 py-10 w-full px-6'>
        {/* cta */}
        <div className='space-y-4 flex flex-col justify-center items-center md:space-y-6 border px-6 max-w-xl lg:max-w-3xl xl:max-w-4xl py-10 shadow bg-white w-full  rounded-lg  lg:py-16'>
          {/* logo */}

          <FcCancel className='text-green-700 text-7xl md:text-9xl xl:text-[9rem]' />
          <h1 className='text-xl md:text-2xl font-bold xl:text-3xl'>
            {' '}
            Your booking was Unsuccessfull
          </h1>
          <h1 className='text-xs md:text-sm xl:text-base max-w-md xl:max-w-2xl  text-center'>
            We apologize, but it seems there was an issue processing your car
            rental booking. Please double-check your details and try again. If
            the problem persists, feel free to contact our support team for
            assistance. Thank you for your understanding.
          </h1>
          <div
            onClick={() => {
              router.push({
                pathname: '/support',
              })
            }}
            className='px-4 py-2 cursor-pointer bg-babypurple text-white shadow hover:shadow-lg text-sm md:text-base md:px-6 xl:px-8'
          >
            {' '}
            Contact Support
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default success
