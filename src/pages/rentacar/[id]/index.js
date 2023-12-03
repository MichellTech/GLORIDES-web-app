import React, { useMemo, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { cars } from '../../../utilis/Cardata'
import Navbar from '@/components/Navigation/Navbar/index'
import Footer from '@/components/Navigation/Footer'
import Feedback from '../../../utilis/Carfeedback'
import Carousel from '../../../components/Carousel/Image'
import Image from 'next/image'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import mainAxiosAction from '../../../components/axiosAction/index'
import {
  MdKeyboardBackspace,
  MdOutlineBluetoothConnected,
  MdLocalFireDepartment,
  MdGpsFixed,
} from 'react-icons/md'
import Link from 'next/link'
import { BiSolidCarGarage, BiCalendar } from 'react-icons/bi'
import { LuFuel, LuClock10 } from 'react-icons/lu'
import { GiGearStickPattern, GiCarSeat } from 'react-icons/gi'
import {
  TbClockSearch,
  TbCameraCheck,
  TbBrandTwitterFilled,
} from 'react-icons/tb'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
// import { RiTwitterXFill } from 'react-icons/ri'
import { FaFacebook, FaInstagramSquare } from 'react-icons/fa'
import { RiWhatsappFill } from 'react-icons/ri'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSelector, useDispatch } from 'react-redux'
import {
  setAllsearchedcars,
  getuserfavourites,
} from '@/features/rental/filterSlice'

function Viewcar() {
  const router = useRouter()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const { allsearchedcars, bookmarked } = useSelector((store) => store.rental)
  const carId = router.query.id
  const singlecar = useMemo(
    () => allsearchedcars?.filter((item) => item._id === carId),
    [carId]
  )

  useEffect(() => {
    dispatch(getuserfavourites())
  }, [])

  const addtofav = (id) => {
    if (bookmarked?.map((i) => i._id)?.includes(id)) {
      mainAxiosAction
        .post(`/cars/delete-bookmark`, { car_id: id })
        .then(function (response) {
          dispatch(getuserfavourites())
        })
        .catch(function (error) {
          console.log(error)
        })
    } else {
      mainAxiosAction
        .post(`/cars/add-bookmark`, { car_id: id })
        .then(function (response) {
          toast.success(response?.data?.message)

          dispatch(getuserfavourites())
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
  const initialValues = {
    extraservices: [],
    address: 'hostaddress',
    myaddress: '',
    pickupd: new Date(),
    pickupt: new Date(),
    dropoffd: new Date(),
    dropofft: new Date(),
  }

  const onSubmit = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(false)
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
        <div className=' px-6 md:px-7  lg:px-8 xl:px-12 space-y-6 lg:space-y-10   pb-10  '>
          {/* back */}
          <Link href='/rentacar'>
            <div className='flex items-center gap-2 cursor-pointer'>
              <MdKeyboardBackspace className='lg:text-2xl' />
              <h1 className='text-sm  lg:text-base font-bold'>All Cars</h1>
            </div>
          </Link>
          {/* body */}
          <div className='lg:flex lg:items-start lg:gap-4 w-full xl:gap-6'>
            {/* car details */}
            <div className='space-y-6 lg:w-2/3 xl:w-4/6'>
              {/* car photo */}
              <div className='w-full bg-white rounded-md lg:rounded-lg'>
                <Carousel photos={singlecar?.[0]?.car_photos} />
              </div>
              {/* desc */}
              <div className='w-full bg-white rounded-md lg:rounded-lg px-3 py-4 lg:px-5 lg:py-6 space-y-4'>
                {/* header */}
                <div className='relative'>
                  <h1 className='font-bold text-sm sm:text-base md:text-lg lg:text-xl border-b pb-2 lg:pb-4'>
                    {' '}
                    Description
                  </h1>
                  <div className='w-10 h-1 bg-babypurple absolute bottom-0 left-0'></div>
                </div>
                {/* content */}
                <div className=' space-y-2 lg:space-y-3'>
                  <h1 className='text-sm '>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Cum minus consequatur dicta dignissimos nihil accusantium!
                    Nam excepturi, libero harum ullam asperiores distinctio
                    voluptatem cupiditate non explicabo quae laboriosam quisquam
                    reiciendis aliquid id ab rem facere nemo autem, repellat
                    voluptate numquam earum quasi? Similique, sequi adipisci
                    mollitia praesentium laborum pariatur debitis!
                  </h1>
                </div>
              </div>
              {/* Features */}
              <div className='w-full bg-white rounded-md lg:rounded-lg px-3 py-4 lg:px-5 lg:py-6 space-y-4'>
                {/* header */}
                <div className='relative'>
                  <h1 className='font-bold text-sm sm:text-base md:text-lg lg:text-xl border-b pb-2 lg:pb-4'>
                    {' '}
                    Features
                  </h1>
                  <div className='w-10 h-1 bg-babypurple absolute bottom-0 left-0'></div>
                </div>
                {/* content */}
                <div className='flex flex-wrap gap-2 md:gap-3 lg:gap-4 '>
                  {/* one */}
                  <div className='flex items-center gap-2 border border-gray-400 px-2 py-2  w-max rounded-sm lg:rounded-md'>
                    <LuFuel className='text-xl' />
                    <h1 className='text-xs'>{singlecar?.[0]?.fuel_type} </h1>
                  </div>
                  {/* two */}
                  <div className='flex items-center gap-2 border border-gray-400 px-2 py-2  w-max rounded-sm lg:rounded-md'>
                    <BiSolidCarGarage className='text-xl' />
                    <h1 className='text-xs '>
                      {' '}
                      {singlecar?.[0]?.car_doors} Doors
                    </h1>
                  </div>
                  {/* three */}
                  <div className='flex items-center gap-2 border border-gray-400 px-2 py-2 w-max rounded-sm lg:rounded-md'>
                    <GiCarSeat className='text-xl' />
                    <p className='text-xs'>
                      {singlecar?.[0]?.seats_number} Seater
                    </p>
                  </div>
                  {/* four */}
                  <div className='flex items-center gap-2 border border-gray-400 px-2 py-2  w-max  rounded-sm lg:rounded-md'>
                    <GiGearStickPattern className='text-xl' />
                    <p className='text-xs'>{singlecar?.[0]?.gear_type} </p>
                  </div>
                  {/* five */}
                  <div className='flex items-center gap-2 border border-gray-400 px-2 py-2  w-max rounded-sm lg:rounded-md'>
                    <TbClockSearch className='text-xl' />
                    <p className='text-xs'>{singlecar?.[0]?.miles} </p>
                  </div>
                  {/* six */}
                  <div className='flex items-center gap-2 border border-gray-400 px-2 py-2  w-max rounded-sm lg:rounded-md'>
                    <MdOutlineBluetoothConnected className='text-xl' />
                    <p className='text-xs'>Bluetooth</p>
                  </div>
                  {/* seven*/}
                  {singlecar?.[0]?.car_additional_features?.some(
                    (i) => i['gps']
                  ) && (
                    <div className='flex items-center gap-2 border border-gray-400 px-2 py-2  w-max rounded-sm lg:rounded-md'>
                      <MdGpsFixed className='text-xl' />
                      <p className='text-xs'>GPS</p>
                    </div>
                  )}
                  {/* eight*/}
                  {singlecar?.[0]?.car_additional_features?.some(
                    (i) => i['heater']
                  ) && (
                    <div className='flex items-center gap-2 border border-gray-400 px-2 py-2  w-max rounded-sm lg:rounded-md'>
                      <MdLocalFireDepartment className='text-xl' />
                      <p className='text-xs'>Heater Available</p>
                    </div>
                  )}
                  {/* eight*/}
                  {singlecar?.[0]?.car_additional_features?.some(
                    (i) => i['camera']
                  ) && (
                    <div className='flex items-center gap-2 border border-gray-400 px-2 py-2  w-max rounded-sm lg:rounded-md'>
                      <TbCameraCheck className='text-xl' />
                      <p className='text-xs'>Camera</p>
                    </div>
                  )}
                </div>
              </div>
              {/* extra service */}
              <div className='w-full bg-white rounded-md lg:rounded-lg px-3 py-4 lg:px-5 lg:py-6 space-y-4'>
                {/* header */}
                <div className='relative'>
                  <h1 className='font-bold text-sm sm:text-base md:text-lg lg:text-xl border-b pb-2 lg:pb-4'>
                    {' '}
                    Extra Services
                  </h1>
                  <div className='w-10 h-1 bg-babypurple absolute bottom-0 left-0'></div>
                </div>
                {/* content */}
                <div className=' space-y-2 lg:space-y-3'>
                  <h1 className='text-sm lg:text-base'>Child Seat - $10</h1>
                  <h1 className='text-sm lg:text-base'>Tank Filling - $40</h1>
                </div>
              </div>
              {/* review */}
              <div className='w-full bg-white rounded-md lg:rounded-lg px-3 py-4 lg:px-5 lg:py-6 space-y-4'>
                {/* header */}
                <div className='relative'>
                  <h1 className='font-bold text-sm sm:text-base md:text-lg lg:text-xl border-b pb-2 lg:pb-4'>
                    {' '}
                    Reviews and ratings
                  </h1>
                  <div className='w-10 h-1 bg-babypurple absolute bottom-0 left-0'></div>
                </div>
                {/* content */}
                <div className='w-full relative   '>
                  {Feedback?.map((item, index) => {
                    return (
                      <div key={index} className='pt-5 pb-4 '>
                        <div
                          key={index}
                          className='w-full mx-auto  flex  items-center  '
                        >
                          <div className='relative  rounded-md border  w-full px-4 py-4  flex flex-col justify-center items-center  mx-2  '>
                            {/* text */}
                            <div className=' space-y-3 '>
                              {/* header */}
                              <div className='space-y-2'>
                                {/* rating */}
                                <div className='flex items-center  text-xs lg:text-sm text-yellow-600'>
                                  <AiFillStar />
                                  <AiFillStar />
                                  <AiFillStar />
                                  <AiOutlineStar />
                                  <AiOutlineStar />
                                  <h1 className='text-babyblack '>(3.0)</h1>
                                </div>
                                {/* photo and name */}
                                <div className='flex items-center gap-2 lg:gap-4'>
                                  {/* photo */}
                                  <div className='relative'>
                                    <Image
                                      src={'/images/avatar.png'}
                                      alt='logo'
                                      width={1000}
                                      height={1000}
                                      className='object-cover w-12 lg:w-16   rounded-full border-2 '
                                    />
                                  </div>
                                  {/* name and date */}

                                  <div className='flex flex-col space-y-1'>
                                    <h1 className='text-sm font-bold lg:text-base text-babyblack'>
                                      {item.name}
                                    </h1>
                                    <h1 className='text-xs lg:text-sm  text-babyblack'>
                                      Sept 26,2023
                                    </h1>
                                  </div>
                                </div>

                                {/* <h2 className='text-xs font-medium text-babyblack'>
                                  {' '}
                                  {item.location}
                                </h2> */}
                              </div>
                              {/* boddy */}
                              <p className='text-xs lg:text-sm text-left'>
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            {/* booking and user Info */}
            <div className='space-y-6 lg:w-1/3 xl:w-2/6 '>
              {/* check availability */}
              <div className='w-full bg-white rounded-md lg:rounded-lg px-3 py-4 lg:px-5 lg:py-6 space-y-4 '>
                {/* header */}
                <div className='relative'>
                  <h1 className='font-bold text-sm sm:text-base md:text-lg lg:text-xl border-b pb-2 lg:pb-4'>
                    {' '}
                    Check Availability
                  </h1>
                  <div className='w-10 h-1 bg-babypurple absolute bottom-0 left-0'></div>
                </div>
                {/* content */}
                <Formik
                  initialValues={initialValues}
                  onSubmit={onSubmit}
                  validationSchema={validationSchema}
                  enableReinitialize
                >
                  {(formik) => {
                    return (
                      <Form className='space-y-5 w-full   '>
                        {/* first */}
                        <div className='space-y-6  lg:space-y-10 pt-4'>
                          {/* pickup & dropoff  location*/}
                          <div className='  space-y-2 lg:space-y-4 '>
                            <h1 className='font-bold text-sm lg:text-base  '>
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
                                        className='text-sm'
                                      >
                                        {singlecar?.[0]?.pickup_location}
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
                                        className='text-sm'
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
                                <h1 className=' text-red-500 text-xs'>
                                  Be advised that inputing your own address will
                                  attract an additional cost of{' '}
                                  <span className='font-bold'>
                                    $ {singlecar?.[0]?.outside_location_cost}
                                  </span>
                                </h1>
                              </div>
                            ) : null}
                          </div>

                          {/* pick Up time and date */}
                          <div className='   rounded-lg space-y-2 lg:space-y-4  '>
                            <h1 className='font-bold text-sm lg:text-base '>
                              Pick Up Date and Time
                            </h1>
                            {/* img */}
                            <div className='space-y-3'>
                              {/* date */}
                              <div>
                                <div className=' relative  p-2 border w-full'>
                                  <Field name='pickupd' className=''>
                                    {({ field, form }) => {
                                      return (
                                        <DatePicker
                                          className='pl-10 outline-none   text-left w-36 text-sm   '
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
                                <div className='relative  p-2 border '>
                                  <Field name='pickupt' className=''>
                                    {({ field, form }) => {
                                      return (
                                        <DatePicker
                                          // placeholderText='Click to select a date'
                                          className='  pl-10 outline-none text-left w-28 text-sm   '
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
                          <div className='  space-y-2 lg:space-y-4  '>
                            <h1 className='font-bold text-sm lg:text-base '>
                              Dropoff Date and Time
                            </h1>
                            {/* date and time */}
                            <div className='space-y-3'>
                              {/* date */}
                              <div>
                                <div className=''>
                                  <div className=' relative  p-2 border '>
                                    <Field name='dropoffd' className=''>
                                      {({ field, form }) => {
                                        return (
                                          <DatePicker
                                            className='pl-10 outline-none   text-left w-36 text-sm   '
                                            id='dropoffd'
                                            {...field}
                                            selected={field.value}
                                            minDate={new Date()}
                                            dateFormat='MM/dd/yyyy '
                                            onChange={(date) =>
                                              form.setFieldValue(
                                                field.name,
                                                date
                                              )
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
                                <div className='relative  p-2 border '>
                                  <Field name='dropofft' className=''>
                                    {({ field, form }) => {
                                      return (
                                        <DatePicker
                                          // placeholderText='Click to select a date'
                                          className='  pl-10 outline-none text-left w-28 text-sm   '
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
                        {/* button*/}
                        <div className='w-full  space-y-4 py-4'>
                          <button
                            type='submit'
                            className='bg-babypurple px-5 py-3 w-full text-sm md:px-2 text-white rounded-md  hover:shadow-sm'
                          >
                            Confirm Availability
                          </button>
                          {bookmarked
                            ?.map((i) => i._id)
                            ?.includes(singlecar?.[0]?._id) ? (
                            <button
                              type='reset'
                              onClick={() => addtofav(singlecar?.[0]?._id)}
                              className='border- w-full border px-5 py-3 md:px-2 text-sm text-babyblack rounded-md  hover:shadow-sm'
                            >
                              Unbookmark car
                            </button>
                          ) : (
                            <button
                              type='reset'
                              onClick={() => addtofav(singlecar?.[0]?._id)}
                              className='border- w-full border px-5 py-3 md:px-2 text-sm text-babyblack rounded-md  hover:shadow-sm'
                            >
                              Bookmark Car Instead
                            </button>
                          )}
                        </div>
                      </Form>
                    )
                  }}
                </Formik>
              </div>
              {/* owner Listing*/}
              <div className='w-full bg-white rounded-md lg:rounded-lg px-3 py-4 lg:px-5 lg:py-6 space-y-4'>
                {/* header */}
                <div className='relative'>
                  <h1 className='font-bold text-sm sm:text-base md:text-lg lg:text-xl border-b pb-2 lg:pb-4'>
                    {' '}
                    Lisiting Owner Details
                  </h1>
                  <div className='w-10 h-1 bg-babypurple absolute bottom-0 left-0'></div>
                </div>
                {/* content */}
                <div className=' space-y-5 lg:space-y-6'>
                  {/* photo and name */}
                  <div className='flex items-center gap-2 lg:gap-4'>
                    {/* photo */}
                    <div className='relative'>
                      <Image
                        src={'/images/avatar.png'}
                        alt='logo'
                        width={1000}
                        height={1000}
                        className='object-cover w-12 lg:w-16   rounded-full border-2 '
                      />
                    </div>
                    {/* name and date */}
                    <div className='flex flex-col space-y-1'>
                      <h1 className='text-sm font-bold text-babyblack'>
                        Olamide Omotuyaloe
                      </h1>
                      <div className='flex items-center gap-2 text-xs text-yellow-600'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <h1 className='text-babyblack '>(5.0)</h1>
                      </div>
                    </div>
                  </div>
                  <div className='space-y-3 lg:space-y-4'>
                    {/* no of lisitngs */}
                    <div className='border-b pb-2 lg:pb-4 flex justify-between items-center'>
                      <h1 className=' text-sm   text-gray-400'>
                        {' '}
                        Number of Lisitings
                      </h1>
                      <h1 className=' text-sm   text-babyblack'> 10</h1>
                    </div>
                    {/* no of bookings */}
                    <div className='border-b pb-2 lg:pb-4 flex justify-between items-center'>
                      <h1 className=' text-sm   text-gray-400'>
                        {' '}
                        Number of Bookings
                      </h1>
                      <h1 className=' text-sm   text-babyblack'> 100</h1>
                    </div>
                    {/* Verification*/}
                    <div className='border-b pb-2 lg:pb-4 flex justify-between items-center'>
                      <h1 className=' text-sm   text-gray-400'>
                        {' '}
                        verification
                      </h1>
                      <h1 className=' text-sm   text-green-700'> Verified</h1>
                    </div>
                  </div>
                </div>
              </div>
              {/* Share*/}
              <div className='w-full bg-white rounded-md lg:rounded-lg px-3 py-4 lg:px-5 lg:py-6 space-y-4'>
                {/* header */}
                <div className='relative'>
                  <h1 className='font-bold text-sm sm:text-base md:text-lg lg:text-xl border-b pb-2 lg:pb-4'>
                    {' '}
                    Share car Details
                  </h1>
                  <div className='w-10 h-1 bg-babypurple absolute bottom-0 left-0'></div>
                </div>
                {/* content */}
                <div className='flex items-center gap-6 lg:gap-8 xl:gap-10'>
                  <FaFacebook className='text-babyblack text-lg sm:text-xl lg:text-2xl ' />
                  <TbBrandTwitterFilled className='text-babyblack text-lg sm:text-xl lg:text-2xl ' />
                  <FaInstagramSquare className='text-babyblack text-lg sm:text-xl lg:text-2xl ' />
                  <RiWhatsappFill className='text-babyblack sm:text-xl text-lg lg:text-2xl ' />
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
