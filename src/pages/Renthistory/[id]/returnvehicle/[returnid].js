import React, { useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import { cars } from '../../../../utilis/Cardata'
import Navbar from '@/components/Navigation/Navbar'
import Footer from '@/components/Navigation/Footer'
import Image from 'next/image'
import { FileUploader } from 'react-drag-drop-files'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { MdOutlineAddAPhoto } from 'react-icons/md'

import { AiOutlineStar, AiFillStar } from 'react-icons/ai'

import {
  MdKeyboardBackspace,
  MdOutlineLocationSearching,
  MdOutlineBluetoothConnected,
  MdGpsFixed,
  MdChildFriendly,
} from 'react-icons/md'
import Link from 'next/link'
import { BiSolidCarGarage, BiCurrentLocation } from 'react-icons/bi'
import { LuFuel, LuCalendarClock } from 'react-icons/lu'
import { GiGearStickPattern, GiCarSeat } from 'react-icons/gi'
import { TbClockSearch, TbCameraCheck } from 'react-icons/tb'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { ImSpinner } from 'react-icons/im'

function Returnvehicle() {
  const router = useRouter()

  const carId = router.query.id

  const singlecar = useMemo(
    () => cars.filter((item) => item.id === Number(carId))?.[0],
    [carId]
  )
  const [loading, setLoading] = useState(false)
  const [userimage, setUserimage] = useState(null)
  const [imagetoupload, setImagetoupload] = useState(null)
  const [ratings, setRatings] = useState(0)
  const [userimagetwo, setUserimagetwo] = useState(null)
  const [imagetouploadtwo, setImagetouploadtwo] = useState(null)
  const [imageerror, setImageerror] = useState('')
  const [imageerrortwo, setImageerrortwo] = useState('')

  const fileTypes = ['JPG', 'JPEG', 'PNG']
  // drivers
  const handleupload = (uploadedcontent) => {
    if (uploadedcontent.size > 1000000) {
      toast.error('file size is too large')
    } else {
      setUserimage(URL.createObjectURL(uploadedcontent))
      setImagetoupload(uploadedcontent)
    }
  }

  // insurance
  const handleuploadtwo = (uploadedcontent) => {
    if (uploadedcontent.size > 1000000) {
      toast.error('file size is too large')
    } else {
      setUserimagetwo(URL.createObjectURL(uploadedcontent))
      setImagetouploadtwo(uploadedcontent)
    }
  }

  const initialValues = {
    rating: 0,
  }

  const onSubmit = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(false)
    setLoading(true)
    // const payload = {
    //   email_id: values.email,
    //   password: values.password,
    // }
    // signinapi(payload)

    // reset
    // onSubmitProps.resetForm()
    //  router.push({
    //    pathname: '/Auth/emailverification',
    //    //  query: response.data.data.user,
    //  })
    //  console.log(values)
  }
  // validation

  // const validateRating= (value) {

  //   let error;
  //   if (!value || value === 0) {
  //       error = 'Required';
  //   }
  //   return error;

  const validationSchema = Yup.object().shape({
    rating: Yup.object().shape({
      rating: Yup.number().required('Please rate this vehicle.'),
    }),
  })
  return (
    <>
      <Navbar />

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => {
          return (
            <Form className='bg-[#F5F5F5]  w-full pt-10 xl:pt-16  overflow-x-hidden'>
              {/* body */}
              <div className='max-w-md sm:max-w-lg mx-auto font-sans md:max-w-4xl lg:max-w-6xl xl:max-w-7xl  px-4 md:px-6  lg:px-8 space-y-6 lg:space-y-10   pb-10  '>
                {/* back */}

                <div
                  onClick={() => {
                    router.push({
                      pathname: `/Renthistory/${carId}`,
                    })
                  }}
                  className='flex items-center gap-2 cursor-pointer'
                >
                  <MdKeyboardBackspace className='lg:text-2xl' />
                  <h1 className='text-sm  lg:text-base font-bold'>
                    {' '}
                    Car Rent history
                  </h1>
                </div>

                {/* body */}
                <div className='space-y-5  w-full  '>
                  {/* first */}
                  <div className='space-y-5 md:space-y-6 lg:space-y-8'>
                    {/* car photos*/}
                    <div className='bg-white px-4 py-4 rounded-lg shadow-md lg:py-6'>
                      <h1 className='font-bold text-sm sm:text-base md:text-lg lg:text-xl border-b pb-2'>
                        Car Photos
                      </h1>
                      {/* img */}
                      <div className='w-full bg-white pt-2  space-y-6'>
                        <h1 className='text-xs lg:text-sm'>
                          Please upload at least 6 photos of the vehicle on
                          return and these must be pictures of its front, back,
                          left side, right side, interior and booth. This is to
                          help owner access the state of the vehicle on return{' '}
                        </h1>
                        {/* upload images */}
                        <div className='space-y-6 md:grid md:grid-cols-2 md:space-y-0 md:gap-x-10 md:gap-y-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-y-8'>
                          {/* one */}
                          <div className='    '>
                            <div className='relative'>
                              {userimage && (
                                <Image
                                  src={userimage}
                                  alt='drivers license photo'
                                  width={500}
                                  height={500}
                                  priority={true}
                                  className='object-cover  border border-babygreen h-32 w-full md:h-40 xl:h-48 object-center '
                                />
                              )}
                              {userimage && (
                                <div className='absolute -top-2 -right-2'>
                                  <FileUploader
                                    classes='bg-babygreen  w-full   rounded-full cursor-pointer  '
                                    handleChange={handleupload}
                                    name='file'
                                    types={fileTypes}
                                    children={
                                      <div className=' bg-babypurple  px-2 py-2 rounded-full xl:px-3 xl:py-3 '>
                                        <MdOutlineAddAPhoto className=' text-xl xl:text-2xl  text-white' />
                                      </div>
                                    }
                                  />
                                </div>
                              )}
                            </div>

                            {!userimage && (
                              <FileUploader
                                classes='bg-babygreen  w-full   rounded-full cursor-pointer  '
                                handleChange={handleupload}
                                name='file'
                                types={fileTypes}
                                children={
                                  <div className='px-6 py-6 border-2 border-babypurple border-dotted flex flex-col justify-center items-center space-y-2  mx-auto'>
                                    <MdOutlineAddAPhoto className=' text-3xl text-babypurple' />
                                    <p className='text-xs text-center'>
                                      Upload digital copy of your driver's
                                      license
                                    </p>
                                    <p className='text-xs text-softRed '>
                                      (Max size 5 MB)
                                    </p>
                                  </div>
                                }
                              />
                            )}
                            <div className='text-softRed text-xs mt-1 px-4'>
                              <h1>{imageerror}</h1>
                            </div>
                          </div>
                          {/* two */}
                          <div className='    '>
                            <div className='relative'>
                              {userimage && (
                                <Image
                                  src={userimage}
                                  alt='drivers license photo'
                                  width={500}
                                  height={500}
                                  priority={true}
                                  className='object-cover  border border-babygreen h-32 w-full md:h-40 xl:h-48 object-center '
                                />
                              )}
                              {userimage && (
                                <div className='absolute -top-2 -right-2'>
                                  <FileUploader
                                    classes='bg-babygreen  w-full   rounded-full cursor-pointer  '
                                    handleChange={handleupload}
                                    name='file'
                                    types={fileTypes}
                                    children={
                                      <div className=' bg-babypurple  px-2 py-2 rounded-full xl:px-3 xl:py-3 '>
                                        <MdOutlineAddAPhoto className=' text-xl xl:text-2xl  text-white' />
                                      </div>
                                    }
                                  />
                                </div>
                              )}
                            </div>

                            {!userimage && (
                              <FileUploader
                                classes='bg-babygreen  w-full   rounded-full cursor-pointer  '
                                handleChange={handleupload}
                                name='file'
                                types={fileTypes}
                                children={
                                  <div className='px-6 py-6 border-2 border-babypurple border-dotted flex flex-col justify-center items-center space-y-2  mx-auto'>
                                    <MdOutlineAddAPhoto className=' text-3xl text-babypurple' />
                                    <p className='text-xs text-center'>
                                      Upload digital copy of your driver's
                                      license
                                    </p>
                                    <p className='text-xs text-softRed '>
                                      (Max size 5 MB)
                                    </p>
                                  </div>
                                }
                              />
                            )}
                            <div className='text-softRed text-xs mt-1 px-4'>
                              <h1>{imageerror}</h1>
                            </div>
                          </div>
                          {/* three */}
                          <div className='    '>
                            <div className='relative'>
                              {userimage && (
                                <Image
                                  src={userimage}
                                  alt='drivers license photo'
                                  width={500}
                                  height={500}
                                  priority={true}
                                  className='object-cover  border border-babygreen h-32 w-full md:h-40 xl:h-48 object-center '
                                />
                              )}
                              {userimage && (
                                <div className='absolute -top-2 -right-2'>
                                  <FileUploader
                                    classes='bg-babygreen  w-full   rounded-full cursor-pointer  '
                                    handleChange={handleupload}
                                    name='file'
                                    types={fileTypes}
                                    children={
                                      <div className=' bg-babypurple  px-2 py-2 rounded-full xl:px-3 xl:py-3 '>
                                        <MdOutlineAddAPhoto className=' text-xl xl:text-2xl  text-white' />
                                      </div>
                                    }
                                  />
                                </div>
                              )}
                            </div>

                            {!userimage && (
                              <FileUploader
                                classes='bg-babygreen  w-full   rounded-full cursor-pointer  '
                                handleChange={handleupload}
                                name='file'
                                types={fileTypes}
                                children={
                                  <div className='px-6 py-6 border-2 border-babypurple border-dotted flex flex-col justify-center items-center space-y-2  mx-auto'>
                                    <MdOutlineAddAPhoto className=' text-3xl text-babypurple' />
                                    <p className='text-xs text-center'>
                                      Upload digital copy of your driver's
                                      license
                                    </p>
                                    <p className='text-xs text-softRed '>
                                      (Max size 5 MB)
                                    </p>
                                  </div>
                                }
                              />
                            )}
                            <div className='text-softRed text-xs mt-1 px-4'>
                              <h1>{imageerror}</h1>
                            </div>
                          </div>
                          {/* four */}
                          <div className='    '>
                            <div className='relative'>
                              {userimage && (
                                <Image
                                  src={userimage}
                                  alt='drivers license photo'
                                  width={500}
                                  height={500}
                                  priority={true}
                                  className='object-cover  border border-babygreen h-32 w-full md:h-40 xl:h-48 object-center '
                                />
                              )}
                              {userimage && (
                                <div className='absolute -top-2 -right-2'>
                                  <FileUploader
                                    classes='bg-babygreen  w-full   rounded-full cursor-pointer  '
                                    handleChange={handleupload}
                                    name='file'
                                    types={fileTypes}
                                    children={
                                      <div className=' bg-babypurple  px-2 py-2 rounded-full xl:px-3 xl:py-3 '>
                                        <MdOutlineAddAPhoto className=' text-xl xl:text-2xl  text-white' />
                                      </div>
                                    }
                                  />
                                </div>
                              )}
                            </div>

                            {!userimage && (
                              <FileUploader
                                classes='bg-babygreen  w-full   rounded-full cursor-pointer  '
                                handleChange={handleupload}
                                name='file'
                                types={fileTypes}
                                children={
                                  <div className='px-6 py-6 border-2 border-babypurple border-dotted flex flex-col justify-center items-center space-y-2  mx-auto'>
                                    <MdOutlineAddAPhoto className=' text-3xl text-babypurple' />
                                    <p className='text-xs text-center'>
                                      Upload digital copy of your driver's
                                      license
                                    </p>
                                    <p className='text-xs text-softRed '>
                                      (Max size 5 MB)
                                    </p>
                                  </div>
                                }
                              />
                            )}
                            <div className='text-softRed text-xs mt-1 px-4'>
                              <h1>{imageerror}</h1>
                            </div>
                          </div>
                          {/* five */}
                          <div className='    '>
                            <div className='relative'>
                              {userimage && (
                                <Image
                                  src={userimage}
                                  alt='drivers license photo'
                                  width={500}
                                  height={500}
                                  priority={true}
                                  className='object-cover  border border-babygreen h-32 w-full md:h-40 xl:h-48 object-center '
                                />
                              )}
                              {userimage && (
                                <div className='absolute -top-2 -right-2'>
                                  <FileUploader
                                    classes='bg-babygreen  w-full   rounded-full cursor-pointer  '
                                    handleChange={handleupload}
                                    name='file'
                                    types={fileTypes}
                                    children={
                                      <div className=' bg-babypurple  px-2 py-2 rounded-full xl:px-3 xl:py-3 '>
                                        <MdOutlineAddAPhoto className=' text-xl xl:text-2xl  text-white' />
                                      </div>
                                    }
                                  />
                                </div>
                              )}
                            </div>

                            {!userimage && (
                              <FileUploader
                                classes='bg-babygreen  w-full   rounded-full cursor-pointer  '
                                handleChange={handleupload}
                                name='file'
                                types={fileTypes}
                                children={
                                  <div className='px-6 py-6 border-2 border-babypurple border-dotted flex flex-col justify-center items-center space-y-2  mx-auto'>
                                    <MdOutlineAddAPhoto className=' text-3xl text-babypurple' />
                                    <p className='text-xs text-center'>
                                      Upload digital copy of your driver's
                                      license
                                    </p>
                                    <p className='text-xs text-softRed '>
                                      (Max size 5 MB)
                                    </p>
                                  </div>
                                }
                              />
                            )}
                            <div className='text-softRed text-xs mt-1 px-4'>
                              <h1>{imageerror}</h1>
                            </div>
                          </div>
                          {/* six */}
                          <div className='    '>
                            <div className='relative'>
                              {userimage && (
                                <Image
                                  src={userimage}
                                  alt='drivers license photo'
                                  width={500}
                                  height={500}
                                  priority={true}
                                  className='object-cover  border border-babygreen h-32 w-full md:h-40 xl:h-48 object-center '
                                />
                              )}
                              {userimage && (
                                <div className='absolute -top-2 -right-2'>
                                  <FileUploader
                                    classes='bg-babygreen  w-full   rounded-full cursor-pointer  '
                                    handleChange={handleupload}
                                    name='file'
                                    types={fileTypes}
                                    children={
                                      <div className=' bg-babypurple  px-2 py-2 rounded-full xl:px-3 xl:py-3 '>
                                        <MdOutlineAddAPhoto className=' text-xl xl:text-2xl  text-white' />
                                      </div>
                                    }
                                  />
                                </div>
                              )}
                            </div>

                            {!userimage && (
                              <FileUploader
                                classes='bg-babygreen  w-full   rounded-full cursor-pointer  '
                                handleChange={handleupload}
                                name='file'
                                types={fileTypes}
                                children={
                                  <div className='px-6 py-6 border-2 border-babypurple border-dotted flex flex-col justify-center items-center space-y-2  mx-auto'>
                                    <MdOutlineAddAPhoto className=' text-3xl text-babypurple' />
                                    <p className='text-xs text-center'>
                                      Upload digital copy of your driver's
                                      license
                                    </p>
                                    <p className='text-xs text-softRed '>
                                      (Max size 5 MB)
                                    </p>
                                  </div>
                                }
                              />
                            )}
                            <div className='text-softRed text-xs mt-1 px-4'>
                              <h1>{imageerror}</h1>
                            </div>
                          </div>
                          {/* seven */}
                          <div className='    '>
                            <div className='relative'>
                              {userimage && (
                                <Image
                                  src={userimage}
                                  alt='drivers license photo'
                                  width={500}
                                  height={500}
                                  priority={true}
                                  className='object-cover  border border-babygreen h-32 w-full md:h-40 xl:h-48 object-center '
                                />
                              )}
                              {userimage && (
                                <div className='absolute -top-2 -right-2'>
                                  <FileUploader
                                    classes='bg-babygreen  w-full   rounded-full cursor-pointer  '
                                    handleChange={handleupload}
                                    name='file'
                                    types={fileTypes}
                                    children={
                                      <div className=' bg-babypurple  px-2 py-2 rounded-full xl:px-3 xl:py-3 '>
                                        <MdOutlineAddAPhoto className=' text-xl xl:text-2xl  text-white' />
                                      </div>
                                    }
                                  />
                                </div>
                              )}
                            </div>

                            {!userimage && (
                              <FileUploader
                                classes='bg-babygreen  w-full   rounded-full cursor-pointer  '
                                handleChange={handleupload}
                                name='file'
                                types={fileTypes}
                                children={
                                  <div className='px-6 py-6 border-2 border-babypurple border-dotted flex flex-col justify-center items-center space-y-2  mx-auto'>
                                    <MdOutlineAddAPhoto className=' text-3xl text-babypurple' />
                                    <p className='text-xs text-center'>
                                      Upload digital copy of your driver's
                                      license
                                    </p>
                                    <p className='text-xs text-softRed '>
                                      (Max size 5 MB)
                                    </p>
                                  </div>
                                }
                              />
                            )}
                            <div className='text-softRed text-xs mt-1 px-4'>
                              <h1>{imageerror}</h1>
                            </div>
                          </div>
                          {/* eight */}
                          <div className='    '>
                            <div className='relative'>
                              {userimage && (
                                <Image
                                  src={userimage}
                                  alt='drivers license photo'
                                  width={500}
                                  height={500}
                                  priority={true}
                                  className='object-cover  border border-babygreen h-32 w-full md:h-40 xl:h-48 object-center '
                                />
                              )}
                              {userimage && (
                                <div className='absolute -top-2 -right-2'>
                                  <FileUploader
                                    classes='bg-babygreen  w-full   rounded-full cursor-pointer  '
                                    handleChange={handleupload}
                                    name='file'
                                    types={fileTypes}
                                    children={
                                      <div className=' bg-babypurple  px-2 py-2 rounded-full xl:px-3 xl:py-3 '>
                                        <MdOutlineAddAPhoto className=' text-xl xl:text-2xl  text-white' />
                                      </div>
                                    }
                                  />
                                </div>
                              )}
                            </div>

                            {!userimage && (
                              <FileUploader
                                classes='bg-babygreen  w-full   rounded-full cursor-pointer  '
                                handleChange={handleupload}
                                name='file'
                                types={fileTypes}
                                children={
                                  <div className='px-6 py-6 border-2 border-babypurple border-dotted flex flex-col justify-center items-center space-y-2  mx-auto'>
                                    <MdOutlineAddAPhoto className=' text-3xl text-babypurple' />
                                    <p className='text-xs text-center'>
                                      Upload digital copy of your driver's
                                      license
                                    </p>
                                    <p className='text-xs text-softRed '>
                                      (Max size 5 MB)
                                    </p>
                                  </div>
                                }
                              />
                            )}
                            <div className='text-softRed text-xs mt-1 px-4'>
                              <h1>{imageerror}</h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* rate car */}
                    <div className='bg-white px-4 py-4 rounded-lg space-y-2 lg:space-y-4 shadow-md lg:py-6'>
                      <h1 className='font-bold text-sm sm:text-base md:text-lg lg:text-xl border-b pb-2'>
                        Car Ratings
                      </h1>
                      {/* img */}
                      <div className='w-full space-y-4'>
                        <h1 className='text-xs lg:text-sm'>
                          Don’t Forget to rate your experience with this vehicle
                          as it helps you and other user alike make an informed
                          decision on our platform.
                        </h1>
                        <div class='flex flex-row-reverse justify-center p-10'>
                          <AiFillStar className='text-babyblack peer peer-hover:text-babypurple hover:text-babypurple w-12 h-12 mx-2 cursor-pointer ' />
                          <AiFillStar className='text-babyblack peer peer-hover:text-babypurple hover:text-babypurple w-12 h-12 mx-2  cursor-pointer ' />
                          <AiFillStar className='text-babyblack peer peer-hover:text-babypurple hover:text-babypurple w-12 h-12 mx-2 cursor-pointer  ' />
                          <AiFillStar className='text-babyblack peer peer-hover:text-babypurple hover:text-babypurple w-12 h-12 mx-2 cursor-pointer  ' />
                          <AiFillStar className='text-babyblack peer peer-hover:text-babypurple hover:text-babypurple w-12 h-12 mx-2 cursor-pointer ' />
                        </div>
                      </div>
                    </div>
                    {/* car features */}
                    <div className='bg-white px-4 py-4 rounded-lg space-y-2 lg:space-y-4 shadow-md lg:py-6'>
                      <h1 className='font-bold text-sm sm:text-base md:text-lg lg:text-xl border-b pb-2'>
                        Car Features
                      </h1>
                      {/* features */}
                      <div className='flex flex-wrap gap-2 '>
                        {/* one */}
                        <div className='flex items-center gap-2 border border-babyblack px-2 py-2  w-max rounded-sm lg:rounded-md'>
                          <LuFuel className='text-xl' />
                          <h1 className='text-xs'>Diesel</h1>
                        </div>
                        {/* two */}
                        <div className='flex items-center gap-2 border border-babyblack px-2 py-2  w-max rounded-sm lg:rounded-md'>
                          <BiSolidCarGarage className='text-xl' />
                          <h1 className='text-xs '>Doors</h1>
                        </div>
                        {/* three */}
                        <div className='flex items-center gap-2 border border-babyblack px-2 py-2 w-max rounded-sm lg:rounded-md'>
                          <GiCarSeat className='text-xl' />
                          <p className='text-xs'>4 Seater</p>
                        </div>
                        {/* four */}
                        <div className='flex items-center gap-2 border border-babyblack px-2 py-2  w-max  rounded-sm lg:rounded-md'>
                          <GiGearStickPattern className='text-xl' />
                          <p className='text-xs'>Automatic</p>
                        </div>
                        {/* five */}
                        <div className='flex items-center gap-2 border border-babyblack px-2 py-2  w-max rounded-sm lg:rounded-md'>
                          <TbClockSearch className='text-xl' />
                          <p className='text-xs'>2400</p>
                        </div>
                        {/* six */}
                        <div className='flex items-center gap-2 border border-babyblack px-2 py-2  w-max rounded-sm lg:rounded-md'>
                          <MdOutlineBluetoothConnected className='text-xl' />
                          <p className='text-xs'>Bluetooth</p>
                        </div>
                        {/* seven*/}
                        <div className='flex items-center gap-2 border border-babyblack px-2 py-2  w-max rounded-sm lg:rounded-md'>
                          <MdGpsFixed className='text-xl' />
                          <p className='text-xs'>GPS</p>
                        </div>
                        {/* eight*/}
                        <div className='flex items-center gap-2 border border-babyblack px-2 py-2  w-max rounded-sm lg:rounded-md'>
                          <MdChildFriendly className='text-xl' />
                          <p className='text-xs'>Child Seat</p>
                        </div>
                        {/* eight*/}
                        <div className='flex items-center gap-2 border border-babyblack px-2 py-2  w-max rounded-sm lg:rounded-md'>
                          <TbCameraCheck className='text-xl' />
                          <p className='text-xs'>Camera</p>
                        </div>
                      </div>
                    </div>
                    {/* pickup location */}
                    <div className='bg-white px-4 py-4 rounded-lg space-y-2 lg:space-y-4 shadow-md lg:py-6'>
                      <h1 className='font-bold text-sm sm:text-base md:text-lg lg:text-xl border-b pb-2'>
                        Pickup Location
                      </h1>
                      {/* img */}
                      <div className='flex items-center gap-2'>
                        <BiCurrentLocation className='lg:text-xl' />
                        <h1 className='text-xs lg:text-sm'>
                          No 6 rumola road Aba, Abia State
                        </h1>
                      </div>
                    </div>
                    {/* drop off  location*/}
                    <div className='bg-white px-4 py-4 rounded-lg space-y-2 lg:space-y-4 shadow-md lg:py-6'>
                      <h1 className='font-bold text-sm sm:text-base md:text-lg lg:text-xl border-b pb-2'>
                        Drop Off Location
                      </h1>
                      {/* img */}
                      <div className='flex items-center gap-2'>
                        <MdOutlineLocationSearching className='lg:text-xl' />
                        <h1 className='text-xs lg:text-sm'>
                          No 6 rumola road Aba, Abia State
                        </h1>
                      </div>
                    </div>
                    {/* pickup date */}
                    <div className='bg-white px-4 py-4 rounded-lg space-y-2 lg:space-y-4 shadow-md lg:py-6'>
                      <h1 className='font-bold text-sm sm:text-base md:text-lg lg:text-xl border-b pb-2'>
                        Pickup Date
                      </h1>
                      {/* img */}
                      <div className='flex items-center gap-2'>
                        <LuCalendarClock className='lg:text-xl' />
                        <h1 className='text-xs lg:text-sm'>
                          10:00 AM Tuesday October 10th ,2023
                        </h1>
                      </div>
                    </div>
                    {/* drop off  date*/}
                    <div className='bg-white px-4 py-4 rounded-lg space-y-2 lg:space-y-4 shadow-md lg:py-6'>
                      <h1 className='font-bold text-sm sm:text-base md:text-lg lg:text-xl border-b pb-2'>
                        Drop Off Date
                      </h1>
                      {/* img */}
                      <div className='flex items-center gap-2'>
                        <LuCalendarClock className='lg:text-xl' />
                        <h1 className='text-xs lg:text-sm'>
                          10:00 AM Wednesday October 11th ,2023
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type='submit'
                className='bg-babypurple text-white px-4 py-3   rounded-md w-full  text-sm lg:text-base transition ease-in-out delay-150  hover:-translate-y-1  hover:bg-indigo-500 duration-300 hover:border-none hover:text-white '
              >
                {loading ? (
                  <div className='flex justify-center gap-2 items-center'>
                    <ImSpinner className='animate-spin' />
                    Updating...
                  </div>
                ) : (
                  'Save Card'
                )}
              </button>
              <Footer />
            </Form>
          )
        }}
      </Formik>
    </>
  )
}

export default Returnvehicle
