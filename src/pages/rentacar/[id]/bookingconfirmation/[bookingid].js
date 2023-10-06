import React, { useMemo } from 'react'
import { useRouter } from 'next/router'
import { cars } from '../../../../utilis/Cardata'
import Navbar from '@/components/Navigation/Navbar'
import Footer from '@/components/Navigation/Footer'
import Image from 'next/image'
import { ImSpinner } from 'react-icons/im'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import {
  MdKeyboardBackspace,
  MdOutlineLocationSearching,
  MdOutlineSecurity,
} from 'react-icons/md'
import Link from 'next/link'
import { BiSolidCarGarage, BiCurrentLocation, BiCalendar } from 'react-icons/bi'
import { LuFuel, LuClock10 } from 'react-icons/lu'
import { GiGearStickPattern, GiCarSeat } from 'react-icons/gi'
import { TbClockSearch } from 'react-icons/tb'

function Booking() {
  const router = useRouter()

  const carId = router.query.id

  const singlecar = useMemo(
    () => cars.filter((item) => item.id === Number(carId))?.[0],
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
    console.log(values)
    console.log('hello')
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
        <div className='max-w-md sm:max-w-lg mx-auto font-sans md:max-w-4xl lg:max-w-6xl xl:max-w-7xl  px-4 md:px-6  lg:px-8 space-y-6 lg:space-y-10   pb-10  '>
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
                <Form className='space-y-5 md:space-y-0  w-full md:flex md:items-start  md:gap-6  '>
                  {/* first */}
                  <div className='space-y-5 md:space-y-6 lg:space-y-8 md:w-2/3 lg:w-3/4'>
                    {/* extra services */}
                    <div className='bg-white px-4 py-4 rounded-lg shadow-md lg:py-6'>
                      <h1 className='font-bold text-sm sm:text-base md:text-lg lg:text-xl border-b pb-2'>
                        Extra Services
                      </h1>
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
                                      <h1 className='font-bold text-sm'>
                                        {' '}
                                        Insurance
                                      </h1>
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
                                      <h1 className='font-bold text-sm'>
                                        {' '}
                                        Tank Filling
                                      </h1>
                                      <p className='text-xs'>$30</p>
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

                    {/* pickup & dropoff  location*/}
                    <div className='bg-white px-4 py-4 rounded-lg space-y-2 lg:space-y-4 shadow-md lg:py-6'>
                      <h1 className='font-bold text-sm sm:text-base md:text-lg lg:text-xl border-b pb-2'>
                        Pickup and Drop Off Location
                      </h1>
                      {/* option */}
                      <Field name='address' className=' px-6 py-1 '>
                        {({ field }) => {
                          return (
                            <div className='space-y-2'>
                              {/* host addreee */}
                              <div className='space-x-4'>
                                <input
                                  type='radio'
                                  id='hostaddress'
                                  {...field}
                                  value='hostaddress'
                                  checked={field.value === 'hostaddress'}
                                />
                                <label
                                  htmlFor='hostaddress'
                                  className='text-xs md:text-sm'
                                >
                                  No 6 Awoya Street, Ajah, Lagos, Nigeria
                                </label>
                              </div>
                              {/* select addreee */}
                              <div className='space-x-4'>
                                <input
                                  type='radio'
                                  id='useraddress'
                                  {...field}
                                  value='useraddress'
                                  checked={field.value === 'useraddress'}
                                />
                                <label
                                  htmlFor='useraddress'
                                  className='text-xs md:text-sm'
                                >
                                  Select Pickup Address
                                </label>
                              </div>
                            </div>
                          )
                        }}
                      </Field>
                      {/* input addres */}
                      {formik.values.address === 'useraddress' ? (
                        <div className=' space-y-3  flex flex-col'>
                          <label
                            htmlFor='copies'
                            className='text-xs md:text-sm'
                          >
                            Please input your desired pickup address
                          </label>
                          <Field
                            type='text'
                            name='myaddress'
                            className=' w-full  py-2 px-2 border border-babyblack text-xs placeholder:text-xs rounded-sm max-w-md md:text-sm  md:placeholder:text-sm'
                            placeholder='Address'
                          />
                          {/* warning */}
                          <h1 className='text-[0.6rem] text-red-500 lg:text-xs'>
                            Be advised that inputing your own address will
                            attract an additional cost of{' '}
                            <span className='font-bold'>$40</span>
                          </h1>
                        </div>
                      ) : null}
                    </div>

                    {/* pick Up time and date */}
                    <div className='bg-white px-4 py-4 rounded-lg space-y-2 lg:space-y-4 shadow-md lg:py-6'>
                      <h1 className='font-bold text-sm sm:text-base md:text-lg lg:text-xl border-b pb-2'>
                        Pick Up Date and Time
                      </h1>
                      {/* img */}
                      <div className='flex flex-wrap items-center gap-4'>
                        {/* date */}
                        <div>
                          <div className=' relative  p-2 border border-babyblack rounded-md w-44'>
                            <Field name='pickupd' className=''>
                              {({ field, form }) => {
                                return (
                                  <DatePicker
                                    className='pl-10 outline-none   text-right w-36  '
                                    id='pickupd'
                                    {...field}
                                    selected={field.value}
                                    minDate={new Date()}
                                    dateFormat='MM/dd/yyyy '
                                    onChange={(date) =>
                                      form.setFieldValue(field.name, date)
                                    }
                                  />
                                )
                              }}
                            </Field>
                            <BiCalendar className='absolute  top-1/2  left-8 -translate-x-1/2 -translate-y-1/2 text-babyblack  cursor-pointer font-bold' />
                          </div>

                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='pickupd' />
                          </div>
                        </div>
                        {/* time */}
                        <div>
                          <div className='relative  p-2 border border-babyblack rounded-md w-36'>
                            <Field name='pickupt' className=''>
                              {({ field, form }) => {
                                return (
                                  <DatePicker
                                    // placeholderText='Click to select a date'
                                    className='  pl-10 outline-none text-left w-28  '
                                    id='pickupt'
                                    {...field}
                                    selected={field.value}
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={1}
                                    timeCaption='Time'
                                    dateFormat='h:mm aa'
                                    onChange={(date) =>
                                      form.setFieldValue(field.name, date)
                                    }
                                  />
                                )
                              }}
                            </Field>
                            <div className='absolute  top-1/2  left-8 -translate-x-1/2 -translate-y-1/2 text-babyblack  cursor-pointer font-bold '>
                              <LuClock10 />
                            </div>
                          </div>
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='pickupt' />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* drop off time and date */}
                    <div className='bg-white px-4 py-4 rounded-lg space-y-2 lg:space-y-4 shadow-md lg:py-6'>
                      <h1 className='font-bold text-sm sm:text-base md:text-lg lg:text-xl border-b pb-2'>
                        Dropoff Date and Time
                      </h1>
                      {/* date and time */}
                      <div className='flex flex-wrap items-start gap-4'>
                        {/* date */}
                        <div>
                          <div className=''>
                            <div className=' relative  p-2 border border-babyblack rounded-md w-44'>
                              <Field name='dropoffd' className=''>
                                {({ field, form }) => {
                                  return (
                                    <DatePicker
                                      className='pl-10 outline-none   text-right w-36  '
                                      id='dropoffd'
                                      {...field}
                                      selected={field.value}
                                      minDate={new Date()}
                                      dateFormat='MM/dd/yyyy '
                                      onChange={(date) =>
                                        form.setFieldValue(field.name, date)
                                      }
                                    />
                                  )
                                }}
                              </Field>
                              <BiCalendar className='absolute  top-1/2  left-8 -translate-x-1/2 -translate-y-1/2 text-babyblack  cursor-pointer font-bold' />
                            </div>
                          </div>
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='dropoffd' />
                          </div>
                        </div>
                        {/* time */}
                        <div>
                          <div className='relative  p-2 border border-babyblack rounded-md w-36'>
                            <Field name='dropofft' className=''>
                              {({ field, form }) => {
                                return (
                                  <DatePicker
                                    // placeholderText='Click to select a date'
                                    className='  pl-10 outline-none text-left w-28  '
                                    id='dropofft'
                                    {...field}
                                    selected={field.value}
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={1}
                                    timeCaption='Time'
                                    dateFormat='h:mm aa'
                                    onChange={(date) =>
                                      form.setFieldValue(field.name, date)
                                    }
                                  />
                                )
                              }}
                            </Field>
                            <div className='absolute  top-1/2  left-8 -translate-x-1/2 -translate-y-1/2 text-babyblack  cursor-pointer font-bold '>
                              <LuClock10 />
                            </div>
                          </div>
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='dropofft' />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* second */}
                  <div className='md:w-1/3 lg:w-1/4'>
                    {/* summary */}
                    <div className='bg-white px-4 py-4 rounded-lg space-y-3  md:space-y-4 lg:space-y-5 shadow-md'>
                      <h1 className='font-bold text-base sm:text-base md:text-base lg:text-lg border-b border-babyblack pb-2'>
                        Cost Summary
                      </h1>
                      {/* one */}
                      <div className='w-full  flex justify-between items-center gap-2 border-b pb-4 '>
                        <h1 className='text-xs xl:text-sm'>Rent Cost</h1>
                        <h1 className='text-xs xl:text-sm font-bold'>$ 100</h1>
                      </div>
                      {/* two */}
                      <div className='w-full  flex justify-between items-center gap-2   border-b pb-4'>
                        <h1 className='text-xs xl:text-sm '>Insurance Cost</h1>
                        <h1 className='text-xs  xl:text-sm font-bold'>
                          {formik.values.extraservices.includes('insurance')
                            ? '$24'
                            : '0'}
                        </h1>
                      </div>
                      {/* one */}
                      <div className='w-full  flex justify-between items-center gap-2  border-b pb-4 border-babyblack '>
                        <h1 className='text-xs xl:text-sm'>Tank Filling</h1>
                        <h1 className='text-xs xl:text-sm  font-bold'>
                          {formik.values.extraservices.includes('tank')
                            ? '$30'
                            : '0'}
                        </h1>
                      </div>
                      {/* one */}
                      <div className='w-full  flex justify-between items-center gap-2 border-b  border-babyblack pb-4 '>
                        <h1 className='text-xs md:text-sm lg:text-base font-bold'>
                          Total Cost
                        </h1>
                        <h1 className='text-xs  md:text-sm lg:text-base font-bold'>
                          $ 120
                        </h1>
                      </div>
                      {/* settings*/}
                      <div className='w-full  space-y-4 py-4'>
                        <button
                          type='submit'
                          className='bg-babypurple px-5 py-3 w-full text-xs md:px-2 text-white rounded-sm transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-500 hover:border-none hover:text-white'
                        >
                          Confirm Booking
                        </button>
                        <button
                          onClick={() => {
                            router.push({
                              pathname: `/rentacar`,
                            })
                          }}
                          type='reset'
                          className='border-babypurple w-full border px-5 py-3 md:px-2 text-xs text-babyblack rounded-sm transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-500 hover:border-none hover:text-white'
                        >
                          Cancel Booking
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
