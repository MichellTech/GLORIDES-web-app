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
  MdMyLocation,
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
import { TbClockHour9 } from 'react-icons/tb'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import {
  setAllsearchedcars,
  getuserfavourites,
} from '@/features/rental/filterSlice'

function Extendride() {
  const router = useRouter()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [cardata, setCardata] = useState({})
  const { carId } = router.query

  useEffect(() => {
    getrentdetails()
  }, [carId])

  const getrentdetails = () => {
    mainAxiosAction
      .post(`/cars/getsinglerenthistory`, { booking_id: carId })
      .then(function (response) {
        setLoading(false)
        setCardata(response?.data?.booking)
        console.log(response?.data?.booking)
      })
      .catch(function (error) {
        setLoading(false)
        console.log(error)
      })
  }

  const date1 = new Date(cardata?.start_date)
  const date2 = new Date(cardata?.end_date)
  const diffTime = Math.abs(date2 - date1)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  const OneDayInMilliseconds = 24 * 60 * 60 * 1000
  const initialValues = {
    dropoffd: new Date(), // Set default to one day ahead
  }
  const validationSchema = Yup.object().shape({
    dropoffd: Yup.date().required('Dropoff Date Required'),
  })

  const onSubmit = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(false)
    console.log(values)
  }

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
                <Carousel photos={cardata?.car_booked?.car_photos} />
              </div>
              {/* desc */}
              <div className='w-full bg-white rounded-md lg:rounded-lg px-3 py-4 lg:px-5 lg:py-6 space-y-4'>
                {/* header */}
                <div className='relative'>
                  <h1 className='font-bold text-sm md:text-base xl:text-lg border-b pb-2 lg:pb-4'>
                    {' '}
                    Description
                  </h1>
                  <div className='w-10 h-1 bg-babypurple absolute bottom-0 left-0'></div>
                </div>
                {/* content */}
                <div className=' space-y-2 lg:space-y-3'>
                  <h1 className='text-sm '>
                    {cardata?.car_booked?.car_description}
                  </h1>
                </div>
              </div>
              {/* pick */}
              {/* Features */}
              <div className='w-full bg-white rounded-md lg:rounded-lg px-3 py-4 lg:px-5 lg:py-6 space-y-4'>
                {/* header */}
                <div className='relative'>
                  <h1 className='font-bold text-sm md:text-base xl:text-lg  border-b pb-2 lg:pb-4'>
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
                    <h1 className='text-xs'>
                      {cardata?.car_booked?.fuel_type}{' '}
                    </h1>
                  </div>
                  {/* two */}
                  <div className='flex items-center gap-2 border border-gray-400 px-2 py-2  w-max rounded-sm lg:rounded-md'>
                    <BiSolidCarGarage className='text-xl' />
                    <h1 className='text-xs '>
                      {' '}
                      {cardata?.car_booked?.car_doors} Doors
                    </h1>
                  </div>
                  {/* three */}
                  <div className='flex items-center gap-2 border border-gray-400 px-2 py-2 w-max rounded-sm lg:rounded-md'>
                    <GiCarSeat className='text-xl' />
                    <p className='text-xs'>
                      {cardata?.car_booked?.seats_number} Seater
                    </p>
                  </div>
                  {/* four */}
                  <div className='flex items-center gap-2 border border-gray-400 px-2 py-2  w-max  rounded-sm lg:rounded-md'>
                    <GiGearStickPattern className='text-xl' />
                    <p className='text-xs'>{cardata?.car_booked?.gear_type} </p>
                  </div>
                  {/* five */}
                  <div className='flex items-center gap-2 border border-gray-400 px-2 py-2  w-max rounded-sm lg:rounded-md'>
                    <TbClockSearch className='text-xl' />
                    <p className='text-xs'>{cardata?.car_booked?.miles} </p>
                  </div>
                  {/* six */}
                  <div className='flex items-center gap-2 border border-gray-400 px-2 py-2  w-max rounded-sm lg:rounded-md'>
                    <MdOutlineBluetoothConnected className='text-xl' />
                    <p className='text-xs'>Bluetooth</p>
                  </div>
                  {/* seven*/}
                  {cardata?.car_booked?.car_additional_features?.some(
                    (i) => i['gps']
                  ) && (
                    <div className='flex items-center gap-2 border border-gray-400 px-2 py-2  w-max rounded-sm lg:rounded-md'>
                      <MdGpsFixed className='text-xl' />
                      <p className='text-xs'>GPS</p>
                    </div>
                  )}
                  {/* eight*/}
                  {cardata?.car_booked?.car_additional_features?.some(
                    (i) => i['heater']
                  ) && (
                    <div className='flex items-center gap-2 border border-gray-400 px-2 py-2  w-max rounded-sm lg:rounded-md'>
                      <MdLocalFireDepartment className='text-xl' />
                      <p className='text-xs'>Heater Available</p>
                    </div>
                  )}
                  {/* eight*/}
                  {cardata?.car_booked?.car_additional_features?.some(
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
                  <h1 className='font-bold text-sm md:text-base xl:text-lg border-b pb-2 lg:pb-4'>
                    {' '}
                    Extra Services
                  </h1>
                  <div className='w-10 h-1 bg-babypurple absolute bottom-0 left-0'></div>
                </div>
                {/* content */}
                <div className=' space-y-2 lg:space-y-3'>
                  {/* <h1 className='text-sm lg:text-base'>Child Seat - $10</h1> */}
                  <h1 className='text-sm lg:text-base'>
                    Tank Filling - ${cardata?.car_booked?.tank_filling?.amount}
                  </h1>
                </div>
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
                      {cardata?.car_booked?.pickup_location}
                    </h1>
                  </div>
                  <div className='flex items-center gap-2'>
                    <TbClockHour9 />
                    <h1 className='text-sm lg:text-base '>
                      {moment(cardata?.car_booked?.start_date).format(
                        'MMMM Do YYYY, h:mm:ss a'
                      )}
                    </h1>
                  </div>
                </div>
              </div>

              {/* review */}
              <div className='w-full bg-white rounded-md lg:rounded-lg px-3 py-4 lg:px-5 lg:py-6 space-y-4'>
                {/* header */}
                <div className='relative'>
                  <h1 className='font-bold text-sm md:text-base xl:text-lg border-b pb-2 lg:pb-4'>
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
                        <div className='w-full mx-auto  flex  items-center  '>
                          <div className='relative  rounded-md border  w-full px-4 py-4  flex flex-col    mx-2  '>
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
                                      priority
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
              {/* closeout car */}
              {/* summary */}
              <div className='bg-white px-4 py-4 rounded-lg space-y-3  md:space-y-4 lg:space-y-5 shadow-md'>
                <h1 className='font-bold text-sm md:text-base xl:text-lg border-b border-babyblack pb-2'>
                  Complete Extension
                </h1>
                {/* drop off */}

                <div className='w-full bg-white border-b pb-4  space-y-4'>
                  {/* header */}
                  <div className='relative'>
                    <h1 className=' text-xs  lg:text-sm  '>
                      {' '}
                      Inital Dropoff Location and Time
                    </h1>
                  </div>
                  {/* content */}
                  <div className='flex items-center gap-2'>
                    <TbClockHour9 className='text-sm' />
                    <h1 className='text-xs '>
                      {moment(cardata?.car_booked?.end_date).format(
                        'MMMM Do YYYY, h:mm:ss a'
                      )}
                    </h1>
                  </div>
                </div>

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
                                            className='pl-10 outline-none   text-left w-60 text-sm   '
                                            id='dropoffd'
                                            {...field}
                                            selected={field.value}
                                            showTimeSelect
                                            timeFormat='HH:mm'
                                            timeIntervals={15}
                                            timeCaption='time'
                                            dateFormat='MM/dd/yyyy  h:mm aa'
                                            // minDate={
                                            //   new Date(
                                            //     cardata?.car_booked?.end_date
                                            //   )
                                            // }
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
                            </div>
                          </div>
                        </div>
                        {/* button*/}
                        <div className='w-full  space-y-4 py-4'>
                          <button
                            type='submit'
                            disabled={loading}
                            className='bg-babypurple px-5 py-3 w-full text-sm md:px-2 text-white rounded-md  hover:shadow-sm'
                          >
                            {loading ? (
                              <div className='flex items-center justify-center gap-2'>
                                <div className='spinner'></div>
                                <h1>Extending</h1>
                              </div>
                            ) : (
                              <h1>Extend Rent</h1>
                            )}
                          </button>
                        </div>
                      </Form>
                    )
                  }}
                </Formik>
                {/* one */}
                <div className='w-full  flex justify-between items-center gap-2 border-b pb-4 '>
                  <h1 className='text-sm lg:text-base'>Rent Cost</h1>
                  <h1 className='text-sm lg:text-base font-bold'>
                    $ {cardata?.car_booked?.rent_cost}{' '}
                  </h1>
                </div>
                <div className='w-full  flex justify-between items-center gap-2 border-b pb-4 '>
                  <h1 className='text-sm lg:text-base'>Number of day(s)</h1>
                  <h1 className='text-sm lg:text-base font-bold'>{diffDays}</h1>
                </div>
                {/* two */}
                <div className='w-full  flex justify-between items-center gap-2   border-b pb-4'>
                  <h1 className='text-sm lg:text-base '>Insurance Cost</h1>
                  <h1 className='text-xs  xl:text-sm font-bold'>$ 0</h1>
                </div>
                {/* one */}
                <div className='w-full  flex justify-between items-center gap-2  border-b pb-4 border-babyblack '>
                  <h1 className='text-sm lg:text-base'>Tank Filling</h1>
                  <h1 className='text-xs xl:text-sm  font-bold'>
                    $ {cardata?.car_booked?.tank_filling?.amount}
                  </h1>
                </div>
                {/* one */}
                <div className='w-full  flex justify-between items-center gap-2 border-b  border-babyblack pb-4 '>
                  <h1 className='text-sm lg:text-base font-bold'>Total Cost</h1>
                  <h1 className='text-xs  md:text-sm lg:text-base font-bold'>
                    ${cardata?.amount}
                  </h1>
                </div>
              </div>
              {/* owner Listing*/}
              <div className='w-full bg-white rounded-md lg:rounded-lg px-3 py-4 lg:px-5 lg:py-6 space-y-4'>
                {/* header */}
                <div className='relative'>
                  <h1 className='font-bold text-sm md:text-base xl:text-lg border-b pb-2 lg:pb-4'>
                    {' '}
                    Lisiting Owner Details
                  </h1>
                  <div className='w-10 h-1 bg-babypurple absolute bottom-0 left-0'></div>
                </div>
                {/* content */}
                <div className=' space-y-5 lg:space-y-6'>
                  {/* photo and name */}
                  <div className='flex justify-between items-center gap-3'>
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
                          {cardata?.car_owner?.firstname}
                        </h1>
                        <div className='flex items-center  text-xs text-yellow-600'>
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <h1 className='text-babyblack '>(5.0)</h1>
                        </div>
                      </div>
                    </div>
                    <div
                      onClick={() => {
                        router.push({
                          pathname: '/messages',
                          query: { ownerid: cardata?.car_owner?._id },
                        })
                      }}
                      className='px-4 py-2 cursor-pointer bg-babypurple text-white shadow hover:shadow-lg text-sm md:text-base md:px-6 xl:px-8'
                    >
                      {' '}
                      Message
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
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  )
}

export default Extendride
