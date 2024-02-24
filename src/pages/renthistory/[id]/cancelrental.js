import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Navbar from '@/components/Navigation/Navbar/index'
import Footer from '@/components/Navigation/Footer'
import Image from 'next/image'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import mainAxiosAction from '../../../components/axiosAction/index'
import { MdCancel, MdMyLocation } from 'react-icons/md'
import { TbClockHour9 } from 'react-icons/tb'
import moment from 'moment'
import { GoCheckCircleFill } from 'react-icons/go'
import { toast } from 'react-toastify'

function Cancelrental() {
  const [loading, setLoading] = useState(false)
  const [cardata, setCardata] = useState({})
  const [eligibile, setEligibile] = useState(false)
  const [bank, setBank] = useState('')
  const [account, setAccount] = useState('')
  const [sort, setSort] = useState('')
  const router = useRouter()
  const carId = router.query.id

  useEffect(() => {
    getrentdetails()
  }, [carId])

  const getrentdetails = () => {
    mainAxiosAction
      .post(`/cars/getsinglerenthistory`, { booking_id: carId })
      .then(function (response) {
        setLoading(false)
        setCardata(response?.data?.booking)
        isLessThan24Hours(response?.data?.booking?.end_date)
        console.log(response?.data)
      })
      .catch(function (error) {
        setLoading(false)
        console.log(error)
      })
  }
  function isLessThan24Hours(dateString) {
    // Parse the input date string to a Date object
    const inputDate = new Date(dateString)

    // Get the current date and time
    const currentDate = new Date()

    // Calculate the time difference in milliseconds
    const timeDifference = inputDate.getTime() - currentDate.getTime()

    // Convert the time difference from milliseconds to hours
    const hoursDifference = timeDifference / (1000 * 60 * 60)

    // Check if the time difference is less than 24 hours
    if (hoursDifference < 24) {
      return setEligibile(false)
    } else {
      return setEligibile(true)
    }
  }
  console.log(cardata)
  const profile =
    localStorage?.getItem('User_Profile') === null ||
    localStorage?.getItem('User_Profile') === 'undefined' ||
    localStorage?.getItem('User_Profile') === undefined
      ? []
      : JSON?.parse(localStorage?.getItem('User_Profile'))

  const cancelbook = () => {
    if (eligibile && (bank === '' || account === '' || sort === '')) {
      return toast.error('Please provide payment details')
    } else {
      setLoading(true)
      const payload = {
        transaction_id: cardata?._id,
        account_number: account,
        bank: bank,
        sortcode: sort,
      }
      mainAxiosAction
        .post(`/cars/cancel-booking`, payload)
        .then(function (response) {
          setLoading(false)
          toast.success(response?.data?.message)
          router.push({
            pathname: `/renthistory/${carId}`,
          })
        })
        .catch(function (error) {
          toast.error(error?.response?.data?.message)
          setLoading(false)
          console.log(error)
        })
    }
  }
  return (
    <>
      <Navbar />
      <main className='w-full py-10 lg:py-16 xl:py-20  bg-[#F5F5F5] bg-opacity-50 flex justify-center items-center mx-auto  px-4 md:px-6  lg:px-8'>
        {/* content */}
        <section className='bg-white px-6 lg:px-10 py-6 lg:py-10 shadow-lg rounded-md w-full  max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl'>
          {/* pickup */}
          <div className='w-full bg-white rounded-md lg:rounded-lg px-3 py-4 lg:px-5 lg:py-6 space-y-4'>
            {/* header */}
            <div className='relative'>
              <h1 className='font-bold text-sm md:text-base xl:text-lg border-b pb-2 lg:pb-4'>
                {' '}
                Pickup Location and Time
              </h1>
              <div className='w-10 h-1 bg-babypurple absolute bottom-0 left-0'></div>
            </div>
            {/* content */}
            <div className=' space-y-2 lg:space-y-3'>
              <div className='flex items-center gap-2'>
                <MdMyLocation />
                <h1 className='text-sm lg:text-base '>
                  {cardata?.car_booked?.pickup_location}
                </h1>
              </div>
              <div className='flex items-center gap-2'>
                <TbClockHour9 />
                <h1 className='text-sm lg:text-base '>
                  {moment(cardata?.start_date).format(
                    'MMMM Do YYYY, h:mm:ss a'
                  )}
                </h1>
              </div>
            </div>
          </div>
          {/* drop off */}

          <div className='w-full bg-white rounded-md lg:rounded-lg px-3 py-4 lg:px-5 lg:py-6 space-y-4'>
            {/* header */}
            <div className='relative'>
              <h1 className='font-bold text-sm md:text-base xl:text-lg border-b pb-2 lg:pb-4'>
                {' '}
                Dropoff Location and Time
              </h1>
              <div className='w-10 h-1 bg-babypurple absolute bottom-0 left-0'></div>
            </div>
            {/* content */}
            <div className=' space-y-2 lg:space-y-3'>
              <div className='flex items-center gap-2'>
                <MdMyLocation />
                <h1 className='text-sm lg:text-base '>
                  {cardata?.car_booked?.dropoff_location}
                </h1>
              </div>
              <div className='flex items-center gap-2'>
                <TbClockHour9 />
                <h1 className='text-sm lg:text-base '>
                  {moment(cardata?.end_date).format('MMMM Do YYYY, h:mm:ss a')}
                </h1>
              </div>
            </div>
          </div>
          {/* eligibility */}
          <div className='w-full bg-white rounded-md lg:rounded-lg px-3 py-4 lg:px-5 lg:py-6 space-y-4'>
            {/* header */}
            <div className='relative'>
              <h1 className='font-bold text-sm md:text-base xl:text-lg border-b pb-2 lg:pb-4'>
                {' '}
                Refund Eligibity
              </h1>
              <div className='w-10 h-1 bg-babypurple absolute bottom-0 left-0'></div>
            </div>
            {/* content */}
            <div className=' space-y-2 lg:space-y-3'>
              <div className='flex items-center gap-2'>
                {eligibile ? <GoCheckCircleFill /> : <MdCancel />}
                <h1 className='text-sm lg:text-base '>
                  {eligibile
                    ? 'You are eligible for a refund'
                    : "Sorry you aren't eligible for a refund"}
                </h1>
              </div>
            </div>
          </div>
          {/* Bank */}
          {eligibile && (
            <div className='w-full bg-white rounded-md lg:rounded-lg px-3 py-4 lg:px-5 lg:py-6 space-y-4'>
              {/* header */}
              <div className='relative'>
                <h1 className='font-bold text-sm md:text-base xl:text-lg border-b pb-2 lg:pb-4'>
                  {' '}
                  Bank Details
                </h1>
                <div className='w-10 h-1 bg-babypurple absolute bottom-0 left-0'></div>
              </div>
              {/* content */}
              <div className=' space-y-2 lg:space-y-3'>
                <div className='flex items-center gap-2'>
                  <h1 className='text-sm lg:text-base '>
                    Please input your bank details asssociated with your profile
                  </h1>
                </div>
                <div className='w-full space-y-1 lg:space-y-2 '>
                  <label htmlFor='fullname' className='text-xs lg:text-sm  '>
                    Full name
                  </label>

                  <div className='px-4 py-3 lg:py-4 rounded-md  bg-softpurple w-full text-sm lg:text-base'>
                    <h1>
                      {' '}
                      {profile?.lastname} {profile?.firstname}
                    </h1>
                  </div>
                </div>
                <div className='w-full space-y-1 lg:space-y-2 '>
                  <label htmlFor='fullname' className='text-xs lg:text-sm  '>
                    Account Number
                  </label>
                  <input
                    type='number'
                    value={account}
                    onChange={(e) => setAccount(e.target.value)}
                    placeholder='input your account number here'
                    className='px-4 py-3 lg:py-4 rounded-md  bg-white border  w-full text-sm lg:text-base border-babyblack'
                  />
                </div>
                <div className='w-full space-y-1 lg:space-y-2 '>
                  <label htmlFor='fullname' className='text-xs lg:text-sm  '>
                    Bank
                  </label>
                  <input
                    type='text'
                    value={bank}
                    onChange={(e) => setBank(e.target.value)}
                    placeholder='input your bank here'
                    className='px-4 py-3 lg:py-4 rounded-md  bg-white border  w-full text-sm lg:text-base border-babyblack'
                  />
                </div>
                <div className='w-full space-y-1 lg:space-y-2 '>
                  <label htmlFor='fullname' className='text-xs lg:text-sm  '>
                    Sort Code
                  </label>
                  <input
                    type='number'
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    placeholder='input your sort code here'
                    className='px-4 py-3 lg:py-4 rounded-md  bg-white border  w-full text-sm lg:text-base border-babyblack'
                  />
                </div>
              </div>
            </div>
          )}
          <div className='py-10 space-y-2 sm:flex sm:space-y-0 sm:items-center w-full sm:gap-2 lg:gap-4'>
            <button
              onClick={() => cancelbook()}
              className=' px-4 py-2 lg:py-3 hover:shadow-lg w-full bg-babypurple text-white text-sm lg:text-base rounded-md '
            >
              {loading && <h1 className='spinner mr-2'></h1>}
              Cancel Booking
            </button>
            <button
              onClick={() =>
                router.push({
                  pathname: `/renthistory/${carId}`,
                })
              }
              className=' px-4 py-2 lg:py-3 hover:shadow-lg w-full bg-indigo-500 text-white text-sm lg:text-base rounded-md'
            >
              Return
            </button>
          </div>
        </section>
      </main>
    </>
  )
}

export default Cancelrental
