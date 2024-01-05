import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Footer from '@/components/Navigation/Footer'
import { useSelector, useDispatch } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { unbookCar, setsuccessinfo } from '@/features/rental/filterSlice'
import {
  MdKeyboardBackspace,
  MdOutlineSecurity,
  MdMyLocation,
} from 'react-icons/md'
import Link from 'next/link'
import { LuFuel } from 'react-icons/lu'
import { TbClockHour9 } from 'react-icons/tb'
import mainAxiosAction from '../axiosAction/index'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import moment from 'moment'
function Booking({ cardata, uservalues }) {
  const dispatch = useDispatch()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const initialValues = {
    extraservices: [],
  }
  const date1 = new Date(uservalues?.pickupd)
  const date2 = new Date(uservalues?.dropoffd)
  const diffTime = Math.abs(date2 - date1)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  const onSubmit = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(false)
    setLoading(true)
    const payload = {
      start_date: uservalues?.pickupd?.toISOString(),
      end_date: uservalues?.dropoffd?.toISOString(),
      car_id: cardata?._id,
      use_car_pickup: uservalues?.address === 'hostaddress' ? true : false,
      use_insurance: values.extraservices.includes('insurance') ? true : false,
      use_tank_filling: values.extraservices.includes('tank') ? true : false,
      pickup_address: uservalues?.myaddress,
    }
    bookcar(payload)

    // UpdateProfile(payload, imagetoupload)
  }

  const bookcar = (payload) => {
    console.log('booking')
    mainAxiosAction
      .post(`/cars/book-car`, payload)
      .then(function (response) {
        setLoading(false)
        // toast?.success(response?.data?.message)
        console.log(response?.data)
        window.location.replace(response?.data?.payment_url)
        // router.push({
        //   pathname: `/rentacar/success`,
        // })
        // dispatch(setsuccessinfo(response.data.booking_details))
      })
      .catch(function (error) {
        toast?.error(error?.response?.data?.message)
        setLoading(false)
        console.log(error)
      })
  }

  return (
    <>
      <section className='bg-[#F5F5F5]  w-full pt-10 xl:pt-16 '>
        {/* body */}
        <div className='px-6 md:px-7  lg:px-8 xl:px-12 space-y-6 lg:space-y-10   pb-10  '>
          {/* back */}
          <div
            onClick={() => {
              dispatch(unbookCar())
            }}
            className='flex items-center gap-2 cursor-pointer'
          >
            <MdKeyboardBackspace className='lg:text-2xl' />
            <h1 className='text-sm  lg:text-base font-bold'>
              View Car Specifications
            </h1>
          </div>
          {/* form */}
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            enableReinitialize
          >
            {(formik) => {
              return (
                <Form className='space-y-6  md:space-y-0  w-full md:flex md:items-start  md:gap-6  '>
                  {/* first */}
                  <div className='space-y-6  lg:w-2/3 xl:w-4/6'>
                    {/* extra services */}
                    <div className='w-full bg-white rounded-md lg:rounded-lg px-3 py-4 lg:px-5 lg:py-6 space-y-4'>
                      {/* header */}
                      <div className='relative'>
                        <h1 className='font-bold text-sm md:text-base xl:text-lg border-b pb-2 lg:pb-4'>
                          {' '}
                          Extra Services
                        </h1>
                        <div className='w-10 h-1 bg-babypurple absolute bottom-0 left-0'></div>
                      </div>
                      {/* img */}
                      <div className='w-full bg-white pt-4 '>
                        <Field name='extraservices' className=' px-6 py-1'>
                          {({ field }) => {
                            return (
                              <div className='flex flex-wrap items-center gap-6'>
                                {/* one */}
                                <div className='flex  items-center gap-4'>
                                  <input
                                    type='checkbox'
                                    id='insurance'
                                    {...field}
                                    value='insurance'
                                    checked={field.value.includes('insurance')}
                                  />
                                  <label
                                    htmlFor='insurance'
                                    className='flex items-center gap-2 border rounded-md px-4 py-2'
                                  >
                                    <MdOutlineSecurity className='text-3xl' />
                                    <div className='space-y-1'>
                                      <h1 className=' text-sm'> Insurance</h1>
                                      <p className='text-xs'>$24/day</p>
                                    </div>
                                  </label>
                                </div>
                                {/* two*/}
                                <div className='flex  items-center gap-4'>
                                  <input
                                    type='checkbox'
                                    id='tank'
                                    {...field}
                                    value='tank'
                                    checked={field.value.includes('tank')}
                                  />
                                  <label
                                    htmlFor='tank'
                                    className='flex items-center gap-2 border rounded-md px-4 py-2'
                                  >
                                    <LuFuel className='text-3xl' />
                                    <div className='space-y-1'>
                                      <h1 className=' text-sm'>
                                        {' '}
                                        Tank Filling
                                      </h1>
                                      <p className='text-xs'>
                                        ${cardata?.tank_filling?.amount}
                                      </p>
                                    </div>
                                  </label>
                                </div>
                              </div>
                            )
                          }}
                        </Field>
                      </div>
                      {/* warning */}
                      {!formik.values.extraservices.includes('insurance') ? (
                        <h1 className='text-[0.6rem] text-red text-red-500 pt-4 lg:text-xs'>
                          Be advised that not checking the insurance box makes
                          your liable for any damges incurred while in
                          possession of this vehicle
                        </h1>
                      ) : null}
                      {!formik.values.extraservices.includes('tank') ? (
                        <h1 className='text-[0.6rem] text-red text-red-500  lg:text-xs'>
                          Be advised that not checking the tank filling box
                          means you will return the car with the same amount of
                          fuel as it was delivered
                        </h1>
                      ) : null}
                    </div>

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
                            {uservalues?.address === 'hostaddress'
                              ? cardata?.pickup_location
                              : uservalues?.myaddress}
                          </h1>
                        </div>
                        <div className='flex items-center gap-2'>
                          <TbClockHour9 />
                          <h1 className='text-sm lg:text-base '>
                            {moment(uservalues?.pickupd).format(
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
                            {uservalues?.address === 'hostaddress'
                              ? cardata?.pickup_location
                              : uservalues?.myaddress}
                          </h1>
                        </div>
                        <div className='flex items-center gap-2'>
                          <TbClockHour9 />
                          <h1 className='text-sm lg:text-base '>
                            {moment(uservalues?.dropoffd).format(
                              'MMMM Do YYYY, h:mm:ss a'
                            )}
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* second */}
                  <div className='lg:w-1/3 xl:w-2/6'>
                    {/* summary */}
                    <div className='bg-white px-4 py-4 rounded-lg space-y-3  md:space-y-4 lg:space-y-5 shadow-md'>
                      <h1 className='font-bold text-sm md:text-base xl:text-lg border-b border-babyblack pb-2'>
                        Cost Summary
                      </h1>
                      {/* one */}
                      <div className='w-full  flex justify-between items-center gap-2 border-b pb-4 '>
                        <h1 className='text-sm lg:text-base'>Rent Cost</h1>
                        <h1 className='text-sm lg:text-base font-bold'>
                          $ {cardata?.rent_cost * diffDays}{' '}
                          <span className='font-normal'>
                            {' '}
                            / {diffDays} day(s)
                          </span>
                        </h1>
                      </div>
                      {/* two */}
                      <div className='w-full  flex justify-between items-center gap-2   border-b pb-4'>
                        <h1 className='text-sm lg:text-base '>
                          Insurance Cost
                        </h1>
                        <h1 className='text-xs  xl:text-sm font-bold'>
                          ${' '}
                          {formik.values.extraservices.includes('insurance')
                            ? 24
                            : 0}
                        </h1>
                      </div>
                      {/* one */}
                      <div className='w-full  flex justify-between items-center gap-2  border-b pb-4 border-babyblack '>
                        <h1 className='text-sm lg:text-base'>Tank Filling</h1>
                        <h1 className='text-xs xl:text-sm  font-bold'>
                          ${' '}
                          {formik.values.extraservices.includes('tank')
                            ? cardata?.tank_filling.amount
                            : 0}
                        </h1>
                      </div>
                      {/* one */}
                      <div className='w-full  flex justify-between items-center gap-2 border-b  border-babyblack pb-4 '>
                        <h1 className='text-sm lg:text-base font-bold'>
                          Total Cost
                        </h1>
                        <h1 className='text-xs  md:text-sm lg:text-base font-bold'>
                          $
                          {cardata?.rent_cost * diffDays +
                            (formik.values.extraservices.includes('tank')
                              ? cardata?.tank_filling.amount
                              : 0) +
                            (formik.values.extraservices.includes('insurance')
                              ? 24
                              : 0)}
                        </h1>
                      </div>
                      {/* button*/}

                      <div className='w-full  space-y-4 py-4'>
                        <button
                          type='submit'
                          className='bg-babypurple px-5 py-3 w-full text-sm md:px-2 text-white rounded-md  hover:shadow-sm'
                        >
                          {loading ? (
                            <div className='flex justify-center items-center gap-2'>
                              <div className='spinner'></div>
                              <h1>Booking</h1>
                            </div>
                          ) : (
                            <h1>Book Car</h1>
                          )}
                        </button>
                        <button
                          type='reset'
                          onClick={() => {
                            dispatch(unbookCar())
                          }}
                          className='border- w-full border px-5 py-3 md:px-2 text-sm text-babyblack rounded-md  hover:shadow-sm'
                        >
                          Edit Booking Details
                        </button>
                      </div>
                    </div>
                  </div>
                </Form>
              )
            }}
          </Formik>
          {/* body */}
        </div>
        <Footer />
      </section>
    </>
  )
}

export default Booking
