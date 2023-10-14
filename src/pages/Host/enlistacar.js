import React, { useState } from 'react'
import Navbar from '@/components/Navigation/Navbar'
import Footer from '@/components/Navigation/Footer'
import { ImSpinner } from 'react-icons/im'
import Link from 'next/link'
import { MdKeyboardBackspace } from 'react-icons/md'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { RiDeleteBack2Fill } from 'react-icons/ri'
import { LuImagePlus } from 'react-icons/lu'
import Image from 'next/image'
function Enlistacar() {
  const [loading, setLoading] = useState(false)
  const [cardoors, setCardoors] = useState(['Two', 'Four', 'Six'])
  const [carfuel, setCarfuel] = useState([
    'PMS',
    'Diesel',
    'Solar',
    'Electricity',
  ])
  const [cargear, setCargear] = useState(['Automatic', 'Manual'])
  const [caroption, setCaroption] = useState(['Yes', 'No'])
  const [userimage, setUserimage] = useState([{ id: 1, file: null }])
  const [userimage2, setUserimage2] = useState([{ id: 1, file: null }])
  const initialValues = {
    carname: '',
    carmodel: '',
    plateno: '',
    doors: '',
    miles: '',
    fuel: '',
    gear: '',
    seats: '',
    pickup: '',
    dropoff: '',
    city: '',
    state: '',
    country: '',
    message: '',
    cost: '',
    bluetooth: '',
    gps: '',
    camera: '',
    child: '',
    heat: '',
    tank: '',
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
    // router.push({
    //   pathname: '/Auth/emailverification',
    //   //  query: response.data.data.user,
    // })
    console.log(values)
  }
  // validation
  const validationSchema = Yup.object().shape({
    carname: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('No car name provided'),
    carmodel: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('No car model provided'),
    plateno: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('No plate number provided'),
    doors: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('No door option  provided'),
    miles: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('No miles data provided'),
    fuel: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('No fuel type provided'),
    gear: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('No gear type provided'),
    seats: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('Number of seats not provided'),
    pickup: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('No pickup location provided'),
    dropoff: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('No drop off location provided'),
    city: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('No city provided'),
    state: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('No state provided'),
    country: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('No country provided'),
    message: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('No car description provided'),
    cost: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('No car rental cost provided'),
    bluetooth: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('Bluetooth availability not specified'),
    gps: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('GPS availability not specified'),
    camera: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('Camera availability not specified'),
    child: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('Child Seat availability not specified'),
    heat: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('Heater availability not specified'),
    tank: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('No tank filling cost provided'),
  })
  // console.log(userimage)
  return (
    <>
      <Navbar />
      <section className='bg-[#F5F5F5] bg-opacity-50   w-full pt-10 xl:pt-16 '>
        <div className='max-w-md sm:max-w-2xl mx-auto font-sans md:max-w-4xl lg:max-w-6xl xl:max-w-7xl  px-4 md:px-6  lg:px-8 space-y-6 lg:space-y-10   pb-10  '>
          {/* back */}
          <Link href='/Host/fleet'>
            <div className='flex items-center gap-2 cursor-pointer'>
              <MdKeyboardBackspace className='lg:text-2xl' />
              <h1 className='text-sm  lg:text-base font-bold'>Back to Fleet</h1>
            </div>
          </Link>
          {/* form */}
          <div>
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              {(formik) => {
                return (
                  <Form className='  space-y-8 md:space-y-12 lg:space-y-16   w-full '>
                    {/* car description */}
                    <div className='bg-white  py-4 rounded-lg space-y-2 lg:space-y-4 shadow-md sm:py-6 md:py-8'>
                      <h1 className='font-bold text-sm sm:text-base  px-4  md:text-lg lg:text-xl border-b pb-2 sm:px-6 md:px-8 '>
                        Car Description
                      </h1>
                      {/* group */}
                      <div className='w-full pt-2 space-y-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 md:px-8  sm:space-y-0  sm:gap-8 md:gap-10'>
                        {/* carname */}
                        <div className='space-y-2 w-full'>
                          <label htmlFor='' className='text-xs lg:text-sm'>
                            Car Name
                          </label>
                          <Field
                            type='text'
                            name='carname'
                            placeholder='e.g Toyota Corolla'
                            className=' bg-white  border-babyblack border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                          />
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='carname' />
                          </div>
                        </div>
                        {/* carmodel */}
                        <div className='space-y-2 w-full '>
                          <label htmlFor='' className='text-xs lg:text-sm'>
                            Car Model
                          </label>
                          <Field
                            type='text'
                            name='carmodel'
                            placeholder='e.g XLE'
                            className=' bg-white  border-babyblack border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                          />
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='carmodel' />
                          </div>
                        </div>
                        {/* plate no */}
                        <div className='space-y-2 w-full'>
                          <label htmlFor='' className='text-xs lg:text-sm'>
                            Plate Number
                          </label>
                          <Field
                            type='text'
                            name='plateno'
                            placeholder='P3342TX'
                            className=' bg-white  border-babyblack border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                          />
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='plateno' />
                          </div>
                        </div>
                        {/* doors */}
                        <div className='space-y-2 w-full'>
                          <label htmlFor='' className='text-xs lg:text-sm'>
                            Car Doors
                          </label>
                          <Field
                            as='select'
                            type='selectOption'
                            name='doors'
                            className=' bg-white  border-babyblack border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                          >
                            <option value=''>select door type</option>
                            {cardoors?.map((item, index) => {
                              return (
                                <option key={index} value={item}>
                                  {item}
                                </option>
                              )
                            })}
                          </Field>

                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='doors' />
                          </div>
                        </div>
                        {/* miles */}
                        <div className='space-y-2 w-full'>
                          <label htmlFor='' className='text-xs lg:text-sm'>
                            Miles on car
                          </label>
                          <Field
                            type='text'
                            name='miles'
                            placeholder='2400'
                            className=' bg-white  border-babyblack border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                          />
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='miles' />
                          </div>
                        </div>
                        {/* fuel type */}
                        <div className='space-y-2 w-full'>
                          <label htmlFor='' className='text-xs lg:text-sm'>
                            Fuel Type
                          </label>
                          <Field
                            as='select'
                            type='selectOption'
                            name='fuel'
                            className=' bg-white  border-babyblack border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                          >
                            <option value=''>select fuel type</option>
                            {carfuel?.map((item, index) => {
                              return (
                                <option key={index} value={item}>
                                  {item}
                                </option>
                              )
                            })}
                          </Field>
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='fuel' />
                          </div>
                        </div>

                        {/* gear type */}
                        <div className='space-y-2 w-full'>
                          <label htmlFor='' className='text-xs lg:text-sm'>
                            Gear Type
                          </label>
                          <Field
                            as='select'
                            type='selectOption'
                            name='gear'
                            className=' bg-white  border-babyblack border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                          >
                            <option value=''>select gear type</option>
                            {cargear?.map((item, index) => {
                              return (
                                <option key={index} value={item}>
                                  {item}
                                </option>
                              )
                            })}
                          </Field>
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='gear' />
                          </div>
                        </div>
                        {/* seat */}
                        <div className='space-y-2 w-full'>
                          <label htmlFor='' className='text-xs lg:text-sm'>
                            Number of Seats
                          </label>
                          <Field
                            type='number'
                            name='seats'
                            placeholder='6'
                            className=' bg-white  border-babyblack border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                          />
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='seats' />
                          </div>
                        </div>
                        {/* Heater*/}
                        <div className='space-y-2 w-full'>
                          <label htmlFor='' className='text-xs lg:text-sm'>
                            Heater Availability
                          </label>
                          <Field
                            as='select'
                            type='selectOption'
                            name='heat'
                            className=' bg-white  border-babyblack border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                          >
                            <option value=''>Select Availability</option>
                            {caroption?.map((item, index) => {
                              return (
                                <option key={index} value={item}>
                                  {item}
                                </option>
                              )
                            })}
                          </Field>
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='heat' />
                          </div>
                        </div>
                        {/* Bluettoth */}

                        <div className='space-y-2 w-full'>
                          <label htmlFor='' className='text-xs lg:text-sm'>
                            Bluetooth Availability
                          </label>
                          <Field
                            as='select'
                            type='selectOption'
                            name='bluetooth'
                            className=' bg-white  border-babyblack border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                          >
                            <option value=''>Select Availability</option>
                            {caroption?.map((item, index) => {
                              return (
                                <option key={index} value={item}>
                                  {item}
                                </option>
                              )
                            })}
                          </Field>
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='bluetooth' />
                          </div>
                        </div>
                        {/* gps */}

                        <div className='space-y-2 w-full'>
                          <label htmlFor='' className='text-xs lg:text-sm'>
                            GPS Availability
                          </label>
                          <Field
                            as='select'
                            type='selectOption'
                            name='gps'
                            className=' bg-white  border-babyblack border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                          >
                            <option value=''>Select Availability</option>
                            {caroption?.map((item, index) => {
                              return (
                                <option key={index} value={item}>
                                  {item}
                                </option>
                              )
                            })}
                          </Field>
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='gps' />
                          </div>
                        </div>
                        {/* camera */}

                        <div className='space-y-2 w-full'>
                          <label htmlFor='' className='text-xs lg:text-sm'>
                            Camera Availability
                          </label>
                          <Field
                            as='select'
                            type='selectOption'
                            name='camera'
                            className=' bg-white  border-babyblack border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                          >
                            <option value=''>Select Availability</option>
                            {caroption?.map((item, index) => {
                              return (
                                <option key={index} value={item}>
                                  {item}
                                </option>
                              )
                            })}
                          </Field>
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='camera' />
                          </div>
                        </div>
                        {/* childsear */}

                        <div className='space-y-2 w-full'>
                          <label htmlFor='' className='text-xs lg:text-sm'>
                            Child Seat Availability
                          </label>
                          <Field
                            as='select'
                            type='selectOption'
                            name='child'
                            className=' bg-white  border-babyblack border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                          >
                            <option value=''>Select Availability</option>
                            {caroption?.map((item, index) => {
                              return (
                                <option key={index} value={item}>
                                  {item}
                                </option>
                              )
                            })}
                          </Field>
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='child' />
                          </div>
                        </div>
                        {/* pickup */}
                        <div className='space-y-2 w-full'>
                          <label htmlFor='' className='text-xs lg:text-sm'>
                            Preferred Pick Up location
                          </label>
                          <Field
                            type='text'
                            name='pickup'
                            placeholder=' e.g Airport'
                            className=' bg-white  border-babyblack border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                          />
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='pickup' />
                          </div>
                        </div>
                        {/* drop off */}
                        <div className='space-y-2 w-full'>
                          <label htmlFor='' className='text-xs lg:text-sm'>
                            Prefered Drop Off Location
                          </label>
                          <Field
                            type='text'
                            name='dropoff'
                            placeholder='e.g. Airport'
                            className=' bg-white  border-babyblack border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                          />
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='dropoff' />
                          </div>
                        </div>
                        {/* city */}
                        <div className='space-y-2 w-full'>
                          <label htmlFor='' className='text-xs lg:text-sm'>
                            City
                          </label>
                          <Field
                            type='text'
                            name='city'
                            placeholder='Houston'
                            className=' bg-white  border-babyblack border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                          />
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='city' />
                          </div>
                        </div>
                        {/* state */}
                        <div className='space-y-2 w-full'>
                          <label htmlFor='' className='text-xs lg:text-sm'>
                            State
                          </label>
                          <Field
                            type='text'
                            name='state'
                            placeholder='Texas'
                            className=' bg-white  border-babyblack border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                          />
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='state' />
                          </div>
                        </div>
                        {/*country */}
                        <div className='space-y-2 w-full '>
                          <label htmlFor='' className='text-xs lg:text-sm'>
                            Country
                          </label>
                          <Field
                            type='text'
                            name='country'
                            placeholder='United States of America'
                            className='  bg-white  border-babyblack border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                          />
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='country' />
                          </div>
                        </div>
                        {/* message */}
                        <div className='sm:col-span-2 lg:col-span-3 w-full space-y-2'>
                          <label htmlFor='' className='text-xs lg:text-sm'>
                            Car Description
                          </label>
                          <div className='flex  relative justify-between items-center w-full  '>
                            <Field
                              as='textarea'
                              type='text'
                              id='message'
                              name='message'
                              cols={20}
                              rows={10}
                              placeholder='Input a summarized information about this car. This message will aid the client make a good decision about this vehicle'
                              className=' bg-white border-babyblack border w-full py-3 px-4 outline-babypurple  text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm '
                            />
                          </div>
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='message' />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* car photos */}
                    <div className='bg-white  py-4 rounded-lg space-y-2 lg:space-y-4 shadow-md sm:py-6 md:py-8'>
                      <h1 className='font-bold text-sm sm:text-base  px-4  md:text-lg lg:text-xl border-b pb-2 sm:px-6 md:px-8 '>
                        Car Photos
                      </h1>
                      <p className='text-xs lg:text-sm px-4 sm:px-6 md:px-8'>
                        Please upload at least 6 photos of your vehicle and the
                        must be pictures of its front, back, left side, right
                        side, interior and booth. This is to help users make
                        informed decision about your vehicle
                      </p>
                      {/* photos */}
                      <div className='flex justify-between items-start gap-4 pt-4 px-4 sm:px-6 md:px-8 '>
                        <div className='flex flex-wrap  gap-6  lg:gap-5  items-center'>
                          {userimage.map((item, index) => {
                            return (
                              <div key={index} className='col-span-full'>
                                {!item.file ? (
                                  <div className='mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 relative'>
                                    <div className='text-center'>
                                      <LuImagePlus className='text-center text-5xl mx-auto text-slate-400' />
                                      <div className='mt-4 flex text-sm leading-6 text-gray-600'>
                                        <label
                                          htmlFor='file-upload'
                                          className='relative cursor-pointer rounded-md bg-white font-semibold mx-auto text-indigo-500 focus-within:outline-none  text-center  hover:text-indigo-500'
                                        >
                                          Click here to upload a file
                                          <input
                                            id='file-upload'
                                            name='file-upload'
                                            type='file'
                                            className='sr-only'
                                            accept='image/png, image/jpg, image/gif, image/jpeg'
                                            // value={item?.file?.name}
                                            onChange={(e) => {
                                              setUserimage((previous) =>
                                                previous.map((i) => {
                                                  if (i.id === item.id) {
                                                    i.file = e.target.files[0]
                                                    // console.log(i.id, 'olamide')
                                                    // console.log(item)
                                                    // console.log(index)
                                                    return i
                                                  }
                                                  return i
                                                })
                                              )
                                            }}
                                          />
                                        </label>
                                        {/* <p className='pl-1'>or drag and drop</p> */}
                                      </div>
                                      <p className='text-xs leading-5 mt-1 text-gray-600'>
                                        PNG, JPG, GIF up to 10MB
                                      </p>
                                    </div>
                                    {/* delete */}
                                    {index !== 0 && (
                                      <div
                                        onClick={() =>
                                          setUserimage((previous) =>
                                            previous.filter((i) => {
                                              return i.id !== item.id
                                            })
                                          )
                                        }
                                        className='absolute  -top-3 -right-3 p-2 rounded-full text-babyblack  cursor-pointer font-bold md:text-lg bg-softpurple  '
                                      >
                                        <RiDeleteBack2Fill />
                                      </div>
                                    )}
                                  </div>
                                ) : (
                                  <div className='relative'>
                                    <img
                                      src={URL.createObjectURL(item?.file)}
                                      className='w-[13rem] h-[12.4rem]  rounded-md object-center object-cover'
                                      alt='photo'
                                    />
                                    {/* delete */}
                                    {index !== 0 && (
                                      <div
                                        onClick={() =>
                                          setUserimage((previous) =>
                                            previous.filter((i) => {
                                              return i.id !== item.id
                                            })
                                          )
                                        }
                                        className='absolute  -top-3 -right-3 p-2 rounded-full text-babyblack  cursor-pointer font-bold md:text-lg bg-softpurple '
                                      >
                                        <RiDeleteBack2Fill />
                                      </div>
                                    )}
                                    {index === 0 && item.file && (
                                      <div
                                        onClick={() =>
                                          setUserimage([
                                            {
                                              id: 1,
                                              file: null,
                                            },
                                          ])
                                        }
                                        className='absolute  -top-3 -right-3 p-2 rounded-full text-babyblack  cursor-pointer font-bold md:text-lg bg-softpurple '
                                      >
                                        <RiDeleteBack2Fill />
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>
                            )
                          })}
                        </div>
                        {/*add  */}
                        <div>
                          <div
                            onClick={() =>
                              setUserimage((previous, index) => [
                                ...previous,
                                { id: previous.length + 1, file: null },
                              ])
                            }
                            className='px-4 py-2 md:py-3 bg-softpurple  shadow-md text-xs sm:px-6 font-bold lg:text-sm lg:px-8 cursor-pointer w-max '
                          >
                            Add{' '}
                            <span className='hidden lg:inline-block '>
                              More Photos
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* car documentations */}
                    <div className='bg-white  py-4 rounded-lg space-y-2 lg:space-y-4 shadow-md sm:py-6 md:py-8'>
                      <h1 className='font-bold text-sm sm:text-base  px-4  md:text-lg lg:text-xl border-b pb-2 sm:px-6 md:px-8 '>
                        Car Documentations
                      </h1>
                      <p className='text-xs lg:text-sm px-4 sm:px-6 md:px-8'>
                        Please upload any supporting documentations to certify
                        that you own this vehicle and it's road worthyness
                      </p>
                      {/* photos */}
                      <div className='flex justify-between items-start gap-4 pt-4 px-4 sm:px-6 md:px-8 '>
                        <div className='flex flex-wrap  gap-6 lg:gap-5  items-center'>
                          {userimage2.map((item, index) => {
                            return (
                              <div key={index} className='col-span-full'>
                                {!item.file ? (
                                  <div className='mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 relative'>
                                    <div className='text-center'>
                                      <LuImagePlus className='text-center text-5xl mx-auto text-slate-400' />
                                      <div className='mt-4 flex text-sm leading-6 text-gray-600'>
                                        <label
                                          htmlFor='file-upload'
                                          className='relative cursor-pointer rounded-md bg-white font-semibold mx-auto text-indigo-500 focus-within:outline-none  text-center  hover:text-indigo-500'
                                        >
                                          Click here to upload a file
                                          <input
                                            id='file-upload'
                                            name='file-upload'
                                            type='file'
                                            className='sr-only'
                                            accept='image/png, image/jpg, image/gif, image/jpeg'
                                            // value={item?.file?.name}
                                            onChange={(e) => {
                                              setUserimage2((previous) =>
                                                previous.map((i) => {
                                                  if (i.id === item.id) {
                                                    i.file = e.target.files[0]

                                                    return i
                                                  }
                                                  return i
                                                })
                                              )
                                            }}
                                          />
                                        </label>
                                      </div>
                                      <p className='text-xs leading-5 mt-1 text-gray-600'>
                                        PNG, JPG, GIF up to 10MB
                                      </p>
                                    </div>
                                    {/* delete */}
                                    {index !== 0 && (
                                      <div
                                        onClick={() =>
                                          setUserimage2((previous) =>
                                            previous.filter((i) => {
                                              return i.id !== item.id
                                            })
                                          )
                                        }
                                        className='absolute  -top-3 -right-3 p-2 rounded-full text-babyblack  cursor-pointer font-bold md:text-lg bg-softpurple  '
                                      >
                                        <RiDeleteBack2Fill />
                                      </div>
                                    )}
                                  </div>
                                ) : (
                                  <div className='relative'>
                                    <img
                                      src={URL.createObjectURL(item?.file)}
                                      className='w-[13rem] h-[12.4rem]  rounded-md object-center object-cover'
                                      alt='photo'
                                    />
                                    {/* delete */}
                                    {index !== 0 && (
                                      <div
                                        onClick={() =>
                                          setUserimage2((previous) =>
                                            previous.filter((i) => {
                                              return i.id !== item.id
                                            })
                                          )
                                        }
                                        className='absolute  -top-3 -right-3 p-2 rounded-full text-babyblack  cursor-pointer font-bold md:text-lg bg-softpurple '
                                      >
                                        <RiDeleteBack2Fill />
                                      </div>
                                    )}
                                    {index === 0 && item.file && (
                                      <div
                                        onClick={() =>
                                          setUserimage2([
                                            {
                                              id: 1,
                                              file: null,
                                            },
                                          ])
                                        }
                                        className='absolute  -top-3 -right-3 p-2 rounded-full text-babyblack  cursor-pointer font-bold md:text-lg bg-softpurple '
                                      >
                                        <RiDeleteBack2Fill />
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>
                            )
                          })}
                        </div>
                        {/*add  */}
                        <div>
                          <div
                            onClick={() =>
                              setUserimage2((previous, index) => [
                                ...previous,
                                { id: previous.length + 1, file: null },
                              ])
                            }
                            className='px-4 py-2 md:py-3 bg-softpurple  shadow-md text-xs sm:px-6 font-bold lg:text-sm lg:px-8 cursor-pointer w-max '
                          >
                            Add{' '}
                            <span className='hidden lg:inline-block '>
                              More Photos
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* costing */}
                    <div className='bg-white  py-4 rounded-lg space-y-2 lg:space-y-4 shadow-md sm:py-6 md:py-8'>
                      <h1 className='font-bold text-sm sm:text-base  px-4  md:text-lg lg:text-xl border-b pb-2 sm:px-6 md:px-8 '>
                        Pricing
                      </h1>
                      <p className='text-xs lg:text-sm px-4 sm:px-6 md:px-8'>
                        Please input a competive price for your car services
                      </p>
                      {/* group */}
                      <div className='w-full pt-2 space-y-4 grid grid-cols-1 sm:grid-cols-2  px-4 sm:px-6 md:px-8  sm:space-y-0  sm:gap-8 md:gap-10'>
                        {/* cost*/}
                        <div className='space-y-2 w-full'>
                          <label htmlFor='' className='text-xs lg:text-sm'>
                            Price per day
                          </label>
                          <Field
                            type='text'
                            name='cost'
                            placeholder='6'
                            className=' bg-white  border-babyblack border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                          />
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='cost' />
                          </div>
                        </div>
                        {/* carmodel */}
                        <div className='space-y-2 w-full '>
                          <label htmlFor='' className='text-xs lg:text-sm'>
                            Tank Filling Cost
                          </label>
                          <Field
                            type='text'
                            name='tank'
                            placeholder='10'
                            className=' bg-white  border-babyblack border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                          />
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='tank' />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='flex justify-center items-center gap-4 md:gap-6 lg:gap-8 max-w-md lg:max-w-xl pt-8 mx-auto'>
                      <button
                        type='submit'
                        className='bg-babypurple text-white px-4 py-2 sm:py-3   rounded-md w-full  text-sm lg:text-base xl:text-lg transition ease-in-out delay-150  hover:scale-105 hover:bg-indigo-500 duration-500 hover:border-none hover:text-white '
                      >
                        {loading ? (
                          <div className='flex justify-center gap-2 items-center'>
                            <ImSpinner className='animate-spin' />
                            Uploading...
                          </div>
                        ) : (
                          'Enlist'
                        )}
                      </button>
                      <Link
                        href='/Host/fleet'
                        className='border  border-babyblack text-babyblack px-4 py-2 sm:py-3   rounded-md w-full  text-sm lg:text-base xl:text-lg text-center transition ease-in-out delay-150  hover:scale-105 hover:bg-indigo-500 duration-500 hover:border-none hover:text-white '
                      >
                        Cancel
                      </Link>
                    </div>
                  </Form>
                )
              }}
            </Formik>
          </div>
        </div>
        <Footer />
      </section>
    </>
  )
}

export default Enlistacar
