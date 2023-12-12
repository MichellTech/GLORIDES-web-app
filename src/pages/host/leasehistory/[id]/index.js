import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Navbar from '@/components/Navigation/Navbar/index'
import Footer from '@/components/Navigation/Footer'
import Carousel from '../../../../components/Carousel/Image'
import { MdKeyboardBackspace, MdOutlineLocationSearching } from 'react-icons/md'
import Link from 'next/link'
import { LuCalendarClock } from 'react-icons/lu'
import mainAxiosAction from '../../../../components/axiosAction/index'
import moment from 'moment'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FaStar } from 'react-icons/fa'

function Rentedcar() {
  const [loading, setLoading] = useState(false)
  const [returnedcar, setReturnedcar] = useState(null)
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)
  const router = useRouter()

  const carId = router.query.id

  const getreturnedcardata = () => {
    mainAxiosAction
      .post(`/cars/get-returned-car`, { booking_id: carId })
      .then(function (response) {
        console.log(response?.data)
        setLoading(false)
        setReturnedcar(response?.data?.returned_car)
        setRating(response?.data?.returned_car?.rating)
        //  setDashdata(response?.data?.dashboard_details)
      })
      .catch(function (error) {
        setLoading(false)
        console.log(error)
      })
  }
  const approvecar = () => {
    setLoading(true)
    mainAxiosAction
      .post(`/cars/approve-returned-car`, { booking_id: carId })
      .then(function (response) {
        console.log(response?.data)
        setLoading(false)
        toast.success(response?.data?.message)
        router.push({
          pathname: `/host/leasehistory`,
        })
      })
      .catch(function (error) {
        setLoading(false)
        console.log(error)
      })
  }
  useEffect(() => {
    getreturnedcardata()
  }, [])
  return (
    <>
      <Navbar />
      <section className='bg-[#F5F5F5]  w-full pt-10 xl:pt-16 '>
        {/* body */}
        <div className='mx-auto font-sans  px-6  lg:px-8 space-y-6 lg:space-y-10   pb-10  '>
          {/* back */}
          <Link href='/host/leasehistory'>
            <div className='flex items-center gap-2 cursor-pointer'>
              <MdKeyboardBackspace className='lg:text-2xl' />
              <h1 className='text-sm  lg:text-base font-bold'>Lease history</h1>
            </div>
          </Link>

          {/* body */}
          <div className='space-y-5 md:space-y-0  w-full md:flex md:items-start  md:gap-6  '>
            {/* first */}
            <div className='space-y-5 md:space-y-6 lg:space-y-8 md:w-2/3 lg:w-4/6'>
              {/* image */}
              <div className='bg-white px-4 py-4 rounded-lg shadow-md lg:py-6'>
                <h1 className='font-bold text-sm sm:text-base md:text-lg lg:text-xl border-b pb-2'>
                  Returned Car Photos
                </h1>
                {/* img */}
                <div className='w-full bg-white '>
                  <Carousel photos={returnedcar?.photos} />
                </div>
              </div>
              {/* description */}

              <div className='bg-white px-4 py-4 rounded-lg space-y-2 lg:space-y-4 shadow-md lg:py-6'>
                <h1 className='font-bold text-sm sm:text-base md:text-lg lg:text-xl border-b pb-2'>
                  User Comment
                </h1>
                {/* img */}
                <div className='w-full'>
                  {returnedcar?.comment ? (
                    <h1 className='text-xs lg:text-sm'>
                      {returnedcar?.comment}
                    </h1>
                  ) : (
                    <h1 className='text-xs lg:text-sm'>
                      No Comment from client
                    </h1>
                  )}
                </div>
              </div>
              {/* rating */}
              <div className='bg-white px-4 py-4 rounded-lg space-y-2 lg:space-y-4 shadow-md lg:py-6'>
                <h1 className='font-bold text-sm sm:text-base md:text-lg lg:text-xl border-b pb-2'>
                  User Rating
                </h1>
                {/* img */}
                {returnedcar?.rating ? (
                  <div className='w-full'>
                    <div className='flex items-center gap-2 justify-center'>
                      {[...Array(5)].map((star, index) => {
                        const currentRating = index + 1
                        return (
                          <label key={index} className=''>
                            <input
                              type='radio'
                              name='rating'
                              value={currentRating}
                              className='hidden'
                            />

                            <FaStar
                              className='flex items-center cursor-pointer text-xl md:text-2xl lg:text-3xl xl:text-5xl'
                              color={
                                currentRating <= (hover || rating)
                                  ? '#A303A0'
                                  : '#e4e5e9'
                              }
                            />
                          </label>
                        )
                      })}
                    </div>
                    <h1 className='text-xs text-center lg:text-sm  pt-2 lg:pt-3 text-babyblack'>
                      {' '}
                      The client has rated the experience with your vehicle as{' '}
                      {returnedcar?.rating > 4 ? 'an' : 'a'}{' '}
                      <span className='font-bold'>
                        {' '}
                        {returnedcar?.rating === 1
                          ? 'very bad'
                          : returnedcar?.rating === 2
                          ? 'bad'
                          : returnedcar?.rating === 3
                          ? 'good'
                          : returnedcar?.rating === 4
                          ? 'very good'
                          : 'Excellent'}{' '}
                      </span>
                      one !
                    </h1>
                  </div>
                ) : (
                  <h1>No Rating from user</h1>
                )}
              </div>
            </div>
            {/* second */}
            <div className='md:w-1/3 lg:w-2/6'>
              {/* summary */}
              <div className='bg-white px-4 py-4 rounded-lg space-y-3  md:space-y-4 lg:space-y-5 shadow-md'>
                <h1 className='font-bold text-base sm:text-base md:text-base lg:text-lg border-b border-babyblack pb-2'>
                  Return Summary
                </h1>
                {/* one */}
                <div className='w-full bg-white rounded-md lg:rounded-lg  space-y-4'>
                  {/* header */}
                  <div className='relative'>
                    <h1 className='font-bold text-sm md:text-base xl:text-lg border-b pb-2 lg:pb-4'>
                      {' '}
                      Pickup loaction and time
                    </h1>
                    <div className='w-10 h-1 bg-babypurple absolute bottom-0 left-0'></div>
                  </div>
                  {/* content */}
                  <div className=' space-y-2 lg:space-y-3'>
                    <div className='flex items-center gap-2'>
                      <MdOutlineLocationSearching className='lg:text-xl' />
                      <h1 className='text-xs lg:text-sm'>
                        {returnedcar?.booking_id?.pickup_address}
                      </h1>
                    </div>
                    <div className='flex items-center gap-2'>
                      <LuCalendarClock className='lg:text-xl' />
                      <h1 className='text-xs lg:text-sm'>
                        {moment(returnedcar?.booking_id?.start_date).format(
                          'MMMM Do YYYY, h:mm:ss a'
                        )}
                      </h1>
                    </div>
                  </div>
                </div>
                {/* two */}
                <div className='w-full bg-white rounded-md lg:rounded-lg  space-y-4'>
                  {/* header */}
                  <div className='relative'>
                    <h1 className='font-bold text-sm md:text-base xl:text-lg border-b pb-2 lg:pb-4'>
                      {' '}
                      Dropoff loaction and time
                    </h1>
                    <div className='w-10 h-1 bg-babypurple absolute bottom-0 left-0'></div>
                  </div>
                  {/* content */}
                  <div className=' space-y-2 lg:space-y-3'>
                    <div className='flex items-center gap-2'>
                      <MdOutlineLocationSearching className='lg:text-xl' />
                      <h1 className='text-xs lg:text-sm'>
                        {returnedcar?.booking_id?.pickup_address}
                      </h1>
                    </div>
                    <div className='flex items-center gap-2'>
                      <LuCalendarClock className='lg:text-xl' />
                      <h1 className='text-xs lg:text-sm'>
                        {moment(returnedcar?.booking_id?.end_date).format(
                          'MMMM Do YYYY, h:mm:ss a'
                        )}
                      </h1>
                    </div>
                  </div>
                </div>

                {/* settings*/}
                <div className='w-full  space-y-4 py-4'>
                  <button
                    onClick={() => approvecar()}
                    disabled={loading}
                    className='bg-babypurple px-5 py-3 w-full text-sm md:px-2 text-white rounded-md  hover:shadow-sm'
                  >
                    {loading ? (
                      <div className='flex items-center justify-center gap-2'>
                        <div className='spinner'></div>
                        <h1>Updating...</h1>
                      </div>
                    ) : (
                      <h1>Close Out</h1>
                    )}
                  </button>
                  <button className='border- w-full border px-5 py-3 md:px-2 text-sm text-babyblack rounded-md  hover:shadow-sm'>
                    Report Issue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  )
}

export default Rentedcar
