import React, { useState } from 'react'
import Navbar from '@/components/Navigation/Navbar'
import Footer from '@/components/Navigation/Footer'
import { ImSpinner } from 'react-icons/im'
import Link from 'next/link'
import { MdKeyboardBackspace } from 'react-icons/md'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
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
  })
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
                        {/* cost*/}
                        <div className='space-y-2 w-full'>
                          <label htmlFor='' className='text-xs lg:text-sm'>
                            Cost ($) per day
                          </label>
                          <Field
                            type='number'
                            name='cost'
                            placeholder='30'
                            className=' bg-white  border-babyblack border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                          />
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='cost' />
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
                    </div>

                    <button
                      type='submit'
                      className='bg-babypurple text-white px-4 py-3   rounded-md w-full  text-base lg:text-lg '
                    >
                      {loading ? (
                        <div className='flex justify-center gap-2 items-center'>
                          <ImSpinner className='animate-spin' />
                          Verifying...
                        </div>
                      ) : (
                        'Continue'
                      )}
                    </button>
                  </Form>
                )
              }}
            </Formik>
          </div>
        </div>
      </section>
    </>
  )
}

export default Enlistacar
