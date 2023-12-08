import React, { useMemo } from 'react'
import { useRouter } from 'next/router'
import Navbar from '@/components/Navigation/Navbar/index'
import Footer from '@/components/Navigation/Footer'
import { useSelector, useDispatch } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import {
  MdKeyboardBackspace,
  MdAccessTimeFilled,
  MdOutlineSecurity,
  MdMyLocation,
} from 'react-icons/md'
import Link from 'next/link'
import { BiSolidCarGarage, BiCurrentLocation, BiCalendar } from 'react-icons/bi'
import { LuFuel, LuClock10 } from 'react-icons/lu'
import { GiGearStickPattern, GiCarSeat } from 'react-icons/gi'
import { TbClockHour9 } from 'react-icons/tb'

function Booking() {
  const router = useRouter()
  const { allsearchedcars } = useSelector((store) => store.rental)
  const carId = router.query.id
  const { status, priority, lastupdated, reference_code, subject } =
    router.query
  const singlecar = useMemo(
    () => allsearchedcars?.filter((item) => item._id === carId),
    [carId]
  )
  const initialValues = {
    extraservices: [],
    address: 'hostaddress',
    myaddress: '',
    pickupd: new Date(),
    pickupt: new Date(),
    dropoffd: new Date(),
    dropofft: new Date(),
  }
  // .toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })

  const onSubmit = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(false)

    // setLoadingp(true)

    // const payload = {
    //   first_name: values.firstname,
    //   last_name: values.lastname,
    //   email_id: values.email,
    //   phone: values.phone,
    //   address: values.address,
    //   profile_type: '',
    // }

    // UpdateProfile(payload, imagetoupload)
  }

  const validationSchema = Yup.object().shape({
    address: Yup.string().required('Required'),
    myaddress: Yup.string().when('address', {
      is: 'useraddress',
      then: () => Yup.string().required('Required'),
    }),
    dropoffd: Yup.date().required('Dropoff Date Required'),
    dropofft: Yup.date().required('Dropoff time Required'),
    pickupd: Yup.date().required('Pickup Date Required'),
    pickupt: Yup.date().required('Pickup time Required'),
  })

  return (
    <>
      <Navbar />
      <section className='bg-[#F5F5F5]  w-full pt-10 xl:pt-16 '>
        {/* body */}
        <div className='px-6 md:px-7  lg:px-8 xl:px-12 space-y-6 lg:space-y-10   pb-10  '>
          {/* back */}
          <div
            onClick={() => {
              router.push({
                pathname: `/rentacar/${carId}`,
              })
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
            validationSchema={validationSchema}
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
                                        ${singlecar?.[0]?.tank_filling?.amount}
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
                            Ajah Lagos State
                          </h1>
                        </div>
                        <div className='flex items-center gap-2'>
                          <TbClockHour9 />
                          <h1 className='text-sm lg:text-base '>
                            25th sept 2023
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
                            Ajah Lagos State
                          </h1>
                        </div>
                        <div className='flex items-center gap-2'>
                          <TbClockHour9 />
                          <h1 className='text-sm lg:text-base '>
                            25th sept 2023
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
                        <h1 className='text-xs xl:text-sm'>Rent Cost</h1>
                        <h1 className='text-sm lg:text-base font-bold'>
                          $ {singlecar?.[0]?.rent_cost}
                        </h1>
                      </div>
                      {/* two */}
                      <div className='w-full  flex justify-between items-center gap-2   border-b pb-4'>
                        <h1 className='text-sm lg:text-base '>
                          Insurance Cost
                        </h1>
                        <h1 className='text-xs  xl:text-sm font-bold'>
                          {formik.values.extraservices.includes('insurance')
                            ? '$24'
                            : '0'}
                        </h1>
                      </div>
                      {/* one */}
                      <div className='w-full  flex justify-between items-center gap-2  border-b pb-4 border-babyblack '>
                        <h1 className='text-sm lg:text-base'>Tank Filling</h1>
                        <h1 className='text-xs xl:text-sm  font-bold'>
                          {formik.values.extraservices.includes('tank')
                            ? singlecar?.[0]?.tank_filling.amount
                            : '0'}
                        </h1>
                      </div>
                      {/* one */}
                      <div className='w-full  flex justify-between items-center gap-2 border-b  border-babyblack pb-4 '>
                        <h1 className='text-sm lg:text-base font-bold'>
                          Total Cost
                        </h1>
                        <h1 className='text-xs  md:text-sm lg:text-base font-bold'>
                          $ 120
                        </h1>
                      </div>
                      {/* button*/}

                      <div className='w-full  space-y-4 py-4'>
                        <button
                          type='submit'
                          className='bg-babypurple px-5 py-3 w-full text-sm md:px-2 text-white rounded-md  hover:shadow-sm'
                        >
                          Book Vehicle
                        </button>
                        <button
                          type='reset'
                          onClick={() => {
                            router.push({
                              pathname: `/rentacar/${carId}`,
                            })
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
