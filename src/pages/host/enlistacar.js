import React, { useState } from 'react'
import Navbar from '@/components/Navigation/Navbar/index'
import Footer from '@/components/Navigation/Footer'
import Link from 'next/link'
import { MdDelete, MdKeyboardBackspace } from 'react-icons/md'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { RiDeleteBack2Fill } from 'react-icons/ri'
import { LuImagePlus } from 'react-icons/lu'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { State, City } from 'country-state-city'
import mainAxiosAction from '@/components/axiosAction'
import { useRouter } from 'next/router'
import { FileUploader } from 'react-drag-drop-files'
function Enlistacar() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const fueltype = [
    { id: 1, value: 'PMS' },
    { id: 2, value: 'Electric' },
    { id: 3, value: 'Diesel' },
    { id: 4, value: 'Solar' },
  ]
  const doortype = [
    { id: 1, value: '2' },
    { id: 2, value: '4' },
  ]
  const optiontype = [
    { id: 1, value: 'true' },
    { id: 2, value: 'false' },
  ]
  const geartype = [
    { id: 1, value: 'Automatic' },
    { id: 2, value: 'Manual' },
  ]
  const fileTypes = ['JPG', 'JPEG', 'PNG']
  const [userimage, setUserimage] = useState([])
  const [isuploading, setIsuploading] = useState(true)
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
    outside: '',
  }

  const onSubmit = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(false)
    setLoading(true)
    console.log(values)
    enlistusercar(values, onSubmitProps.resetForm)
  }
  const handleDelete = (index) => {
    // Create a copy of the current uploadedcontent array
    if (userimage.length < 2) {
      setIsuploading(true)
      setUserimage([])
      return
    }

    const updatedContent = [...userimage]

    // Remove the file at the specified index
    updatedContent.splice(index, 1)

    // Update the state with the modified array
    setUserimage(updatedContent)
  }
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
      .required('No Fuel Type Required'),
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
    message: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('No car description provided'),
    cost: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('No car rental cost provided'),
    outside: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('No Extra Cost provided'),
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

  const enlistusercar = (values, callback) => {
    if (userimage?.length < 6) {
      toast.error('Please upload atleast six photos of your vehicle')
      setLoading(false)
    } else if (userimage2.length < 1) {
      toast.error(
        'Please upload atleast one supporting documentation for your vehicle'
      )
      setLoading(false)
    } else {
      const formData = new FormData()
      userimage.forEach((file, index) => {
        // Append each file with a unique name (e.g., fileName_0, fileName_1, etc.)
        formData.append('images', file)
      })
      for (const image of userimage2) {
        formData.append('documents', image?.file)
      }
      formData?.append('car_name', values.carname)
      formData?.append('car_model', values.carmodel)
      formData?.append('plate_number', values.plateno)
      formData?.append('pickup_location', values.pickup)
      formData?.append('dropoff_location', values.dropoff)
      formData?.append('rent_cost', values.cost)
      formData?.append('tank_filling', values.tank)
      formData?.append('state', values.state)
      formData?.append('city', values.city)
      formData?.append('car_doors', values.doors)
      formData?.append('seats_number', values.seats)
      formData?.append('miles', values.miles)
      formData?.append('car_description', values.message)
      formData?.append('fuel_type', values.fuel)
      formData?.append('gear_type', values.gear)
      formData?.append('outside_location_cost', values.outside)
      formData?.append(
        'features',
        JSON.stringify([
          { heater: values.heat },
          { gps: values.gps },
          { child: values.child },
          { bluetooth: values.bluetooth },
          { camera: values.camera },
        ])
      )
      mainAxiosAction
        .post(`/cars/list`, formData)
        .then(function (response) {
          setLoading(false)
          setUserimage(null)
          setUserimage2(null)
          router.push({
            pathname: '/host/fleet',
          })
          toast.success(response?.data?.message)
          callback()
        })
        .catch(function (error) {
          toast.error(error?.response?.data?.message)
          setLoading(false)
          console.log(error)
        })
    }
  }
  console.log(userimage)
  return (
    <>
      <Navbar />
      <section className='bg-[#F5F5F5] bg-opacity-50   w-full pt-10 xl:pt-16 '>
        <div className='max-w-md sm:max-w-2xl mx-auto font-sans md:max-w-4xl lg:max-w-6xl xl:max-w-7xl  px-4 md:px-6  lg:px-8 space-y-6 lg:space-y-10   pb-10  '>
          {/* back */}
          <Link href='/host/fleet'>
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
                          <label
                            htmlFor=''
                            className='text-xs lg:text-sm text-slate-500'
                          >
                            Car Name
                          </label>
                          <Field
                            type='text'
                            name='carname'
                            placeholder='e.g Toyota Corolla'
                            className=' bg-white  border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                          />
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='carname' />
                          </div>
                        </div>
                        {/* carmodel */}
                        <div className='space-y-2 w-full '>
                          <label
                            htmlFor=''
                            className='text-xs lg:text-sm text-slate-500'
                          >
                            Car Model
                          </label>
                          <Field
                            type='text'
                            name='carmodel'
                            placeholder='e.g XLE'
                            className=' bg-white   border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                          />
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='carmodel' />
                          </div>
                        </div>
                        {/* plate no */}
                        <div className='space-y-2 w-full'>
                          <label
                            htmlFor=''
                            className='text-xs lg:text-sm text-slate-500'
                          >
                            Plate Number
                          </label>
                          <Field
                            type='text'
                            name='plateno'
                            placeholder='P3342TX'
                            className=' bg-white   border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                          />
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='plateno' />
                          </div>
                        </div>

                        {/* miles */}
                        <div className='space-y-2 w-full'>
                          <label
                            htmlFor=''
                            className='text-xs lg:text-sm text-slate-500'
                          >
                            Miles on car
                          </label>
                          <Field
                            type='text'
                            name='miles'
                            placeholder='2400'
                            className=' bg-white   border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                          />
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='miles' />
                          </div>
                        </div>

                        {/* seat */}
                        <div className='space-y-2 w-full'>
                          <label
                            htmlFor=''
                            className='text-xs lg:text-sm text-slate-500'
                          >
                            Number of Seats
                          </label>
                          <Field
                            type='number'
                            name='seats'
                            placeholder='6'
                            className=' bg-white   border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                          />
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='seats' />
                          </div>
                        </div>

                        {/* pickup */}
                        <div className='space-y-2 w-full'>
                          <label
                            htmlFor=''
                            className='text-xs lg:text-sm text-slate-500'
                          >
                            Preferred Pick Up location
                          </label>
                          <Field
                            type='text'
                            name='pickup'
                            placeholder=' e.g Airport'
                            className=' bg-white   border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                          />
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='pickup' />
                          </div>
                        </div>
                        {/* drop off */}
                        <div className='space-y-2 w-full'>
                          <label
                            htmlFor=''
                            className='text-xs lg:text-sm text-slate-500'
                          >
                            Prefered Drop Off Location
                          </label>
                          <Field
                            type='text'
                            name='dropoff'
                            placeholder='e.g. Airport'
                            className=' bg-white   border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                          />
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='dropoff' />
                          </div>
                        </div>
                        {/* state */}
                        <div className='space-y-2 w-full'>
                          <label
                            htmlFor=''
                            className='text-xs lg:text-sm text-slate-500'
                          >
                            State
                          </label>

                          <Field
                            as='select'
                            type='selectOption'
                            name='state'
                            className=' bg-white   border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                          >
                            <option value=''>select State</option>
                            {State?.getStatesOfCountry('US')?.map(
                              (item, index) => {
                                return (
                                  <option key={index} value={item?.name}>
                                    {item?.name}
                                  </option>
                                )
                              }
                            )}
                          </Field>
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='state' />
                          </div>
                        </div>
                        {/* city */}
                        <div className='space-y-2 w-full'>
                          <label
                            htmlFor=''
                            className='text-xs lg:text-sm text-slate-500'
                          >
                            City
                          </label>

                          <Field
                            as='select'
                            type='selectOption'
                            name='city'
                            className=' bg-white   border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                          >
                            <option value=''>select City</option>
                            {City?.getCitiesOfState(
                              'US',
                              State?.getStatesOfCountry('US')?.filter(
                                (i) => i?.name === formik?.values?.state
                              )?.[0]?.isoCode
                            )?.map((item, index) => {
                              return (
                                <option key={index} value={item?.name}>
                                  {item?.name}
                                </option>
                              )
                            })}
                          </Field>
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='city' />
                          </div>
                        </div>

                        {/*country */}
                        {/* <div className='space-y-2 w-full '>
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
                        </div> */}
                        {/* message */}
                        <div className='sm:col-span-2 lg:col-span-3 w-full space-y-2'>
                          <label
                            htmlFor=''
                            className='text-xs lg:text-sm text-slate-500'
                          >
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
                              className=' bg-white  border w-full py-3 px-4 outline-babypurple  text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm '
                            />
                          </div>
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='message' />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* car additional features */}
                    <div className='bg-white  py-4 rounded-lg space-y-2 lg:space-y-4 shadow-md sm:py-6 md:py-8'>
                      <h1 className='font-bold text-sm sm:text-base  px-4  md:text-lg lg:text-xl border-b pb-2 sm:px-6 md:px-8 '>
                        Car Additional Features
                      </h1>
                      <p className='text-xs lg:text-sm px-4 sm:px-6 md:px-8 text-slate-500'>
                        Please check the boxes below as it applies to the
                        features present and currently working in your vehicle
                      </p>
                      {/* features */}
                      <div className=' pt-4 px-4  sm:px-6 md:px-8  space-y-4 sm:space-y-0 sm:flex sm:flex-wrap sm:gap-10 '>
                        {/* fuel */}
                        <div className='flex flex-col space-y-3   w-max'>
                          <label
                            htmlFor='fuel'
                            className='text-sm lg:text-base text-slate-500 '
                          >
                            Fuel Type{' '}
                          </label>
                          <div className='flex items-center  gap-4 p-4 text-xs lg:text-sm border'>
                            <Field name='fuel' className=' '>
                              {({ field }) => {
                                return fueltype?.map((item) => {
                                  return (
                                    <div key={item.id}>
                                      <div className='space-x-4'>
                                        <input
                                          type='radio'
                                          id={item.value}
                                          {...field}
                                          value={item.value}
                                          checked={field.value === item.value}
                                        />
                                        <label htmlFor='fuel'>
                                          {item.value}
                                        </label>
                                      </div>
                                    </div>
                                  )
                                })
                              }}
                            </Field>
                          </div>

                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='fuel' />
                          </div>
                        </div>
                        {/* door */}
                        <div className='flex flex-col space-y-3  w-max'>
                          <label
                            htmlFor='doors'
                            className='text-sm lg:text-base text-slate-500'
                          >
                            Car Doors{' '}
                          </label>
                          <div className='flex items-center  gap-4 border p-4 text-xs lg:text-sm'>
                            <Field name='doors' className=' '>
                              {({ field }) => {
                                return doortype.map((item) => {
                                  return (
                                    <div key={item.id}>
                                      <div className='space-x-4'>
                                        <input
                                          type='radio'
                                          id={item.value}
                                          {...field}
                                          value={item.value}
                                          checked={field.value === item.value}
                                        />
                                        <label htmlFor='doors'>
                                          {item.value}
                                        </label>
                                      </div>
                                    </div>
                                  )
                                })
                              }}
                            </Field>
                          </div>

                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='doors' />
                          </div>
                        </div>
                        {/* gear */}
                        <div className='flex flex-col space-y-3  w-max'>
                          <label
                            htmlFor='gear'
                            className='text-sm lg:text-base  text-slate-500'
                          >
                            Gear Type{' '}
                          </label>
                          <div className='flex items-center  gap-4 border p-4 text-xs lg:text-sm'>
                            <Field name='gear' className=' '>
                              {({ field }) => {
                                return geartype.map((item) => {
                                  return (
                                    <div key={item.id}>
                                      <div className='space-x-4'>
                                        <input
                                          type='radio'
                                          id={item.value}
                                          {...field}
                                          value={item.value}
                                          checked={field.value === item.value}
                                        />
                                        <label htmlFor='gear'>
                                          {item.value}
                                        </label>
                                      </div>
                                    </div>
                                  )
                                })
                              }}
                            </Field>
                          </div>

                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='gear' />
                          </div>
                        </div>
                        {/* Heater */}
                        <div className='flex flex-col space-y-3  w-max'>
                          <label
                            htmlFor='heat'
                            className='text-sm lg:text-base text-slate-500 '
                          >
                            Heater Availability{' '}
                          </label>
                          <div className='flex items-center  gap-4 border p-4 text-xs lg:text-sm'>
                            <Field name='heat' className=' '>
                              {({ field }) => {
                                return optiontype.map((item) => {
                                  return (
                                    <div key={item.id}>
                                      <div className='space-x-4'>
                                        <input
                                          type='radio'
                                          id={item.value}
                                          {...field}
                                          value={item.value}
                                          checked={field.value === item.value}
                                        />
                                        <label htmlFor='heater'>
                                          {item.value}
                                        </label>
                                      </div>
                                    </div>
                                  )
                                })
                              }}
                            </Field>
                          </div>

                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='heat' />
                          </div>
                        </div>
                        {/* bluetooth */}
                        <div className='flex flex-col space-y-3  w-max'>
                          <label
                            htmlFor='bluetooth'
                            className='text-sm lg:text-base text-slate-500'
                          >
                            Bluetooth Availability{' '}
                          </label>
                          <div className='flex items-center  gap-4 border p-4 text-xs lg:text-sm'>
                            <Field name='bluetooth' className=' '>
                              {({ field }) => {
                                return optiontype.map((item) => {
                                  return (
                                    <div key={item.id}>
                                      <div className='space-x-4'>
                                        <input
                                          type='radio'
                                          id={item.value}
                                          {...field}
                                          value={item.value}
                                          checked={field.value === item.value}
                                        />
                                        <label htmlFor='bluetooth'>
                                          {item.value}
                                        </label>
                                      </div>
                                    </div>
                                  )
                                })
                              }}
                            </Field>
                          </div>

                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='bluetooth' />
                          </div>
                        </div>
                        {/* gps */}
                        <div className='flex flex-col space-y-3  w-max'>
                          <label
                            htmlFor='gps'
                            className='text-sm lg:text-base text-slate-500'
                          >
                            GPS Availability{' '}
                          </label>
                          <div className='flex items-center  gap-4 border p-4 text-xs lg:text-sm'>
                            <Field name='gps' className=' '>
                              {({ field }) => {
                                return optiontype.map((item) => {
                                  return (
                                    <div key={item.id}>
                                      <div className='space-x-4'>
                                        <input
                                          type='radio'
                                          id={item.value}
                                          {...field}
                                          value={item.value}
                                          checked={field.value === item.value}
                                        />
                                        <label htmlFor='gps'>
                                          {item.value}
                                        </label>
                                      </div>
                                    </div>
                                  )
                                })
                              }}
                            </Field>
                          </div>

                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='gps' />
                          </div>
                        </div>
                        {/* camera */}
                        <div className='flex flex-col space-y-3  w-max'>
                          <label
                            htmlFor='camera'
                            className='text-sm lg:text-base text-slate-500'
                          >
                            Camera Availability{' '}
                          </label>
                          <div className='flex items-center  gap-4 border p-4 text-xs lg:text-sm'>
                            <Field name='camera' className=' '>
                              {({ field }) => {
                                return optiontype.map((item) => {
                                  return (
                                    <div key={item.id}>
                                      <div className='space-x-4'>
                                        <input
                                          type='radio'
                                          id={item.value}
                                          {...field}
                                          value={item.value}
                                          checked={field.value === item.value}
                                        />
                                        <label htmlFor='camera'>
                                          {item.value}
                                        </label>
                                      </div>
                                    </div>
                                  )
                                })
                              }}
                            </Field>
                          </div>

                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='camera' />
                          </div>
                        </div>
                        {/* child seat*/}
                        <div className='flex flex-col space-y-3  w-max'>
                          <label
                            htmlFor='child'
                            className='text-sm lg:text-base text-slate-500'
                          >
                            Child Seat Availability{' '}
                          </label>
                          <div className='flex items-center  gap-4 border p-4 text-xs lg:text-sm'>
                            <Field name='child' className=' '>
                              {({ field }) => {
                                return optiontype.map((item) => {
                                  return (
                                    <div key={item.id}>
                                      <div className='space-x-4'>
                                        <input
                                          type='radio'
                                          id={item.value}
                                          {...field}
                                          value={item.value}
                                          checked={field.value === item.value}
                                        />
                                        <label htmlFor='child'>
                                          {item.value}
                                        </label>
                                      </div>
                                    </div>
                                  )
                                })
                              }}
                            </Field>
                          </div>

                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='child' />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* car photos */}
                    <div className='bg-white  py-4 rounded-lg space-y-2 lg:space-y-4 shadow-md sm:py-6 md:py-8'>
                      <h1 className='font-bold text-sm sm:text-base  px-4  md:text-lg lg:text-xl border-b pb-2 sm:px-6 md:px-8 '>
                        Car Photos
                      </h1>
                      <p className='text-xs lg:text-sm px-4 sm:px-6 md:px-8 text-slate-500'>
                        Please upload at least 6 photos of your vehicle and the
                        must be pictures of its front, back, left side, right
                        side, interior and booth. This is to help users make
                        informed decision about your vehicle
                      </p>
                      {/* photos */}
                      {isuploading ? (
                        <div className='px-4 py-4 space-y-10'>
                          <FileUploader
                            classes='border border-babypurple lg:border-2  border-dashed rounded-md flex flex-col  w-full max-w-xs lg:max-w-sm justify-center items-center mx-auto px-6 py-6 h-40'
                            handleChange={async (files) => {
                              // Convert FileList to an array using Array.from
                              const filesArray = Array.from(files)

                              // Check for invalid files based on size
                              const invalidFiles = filesArray.filter(
                                (file) => file.size > 20000000
                              )

                              if (invalidFiles.length > 0) {
                                toast.error(
                                  'One or more files have size exceeding 20MB'
                                )
                                return
                              }
                              if (filesArray.length < 6) {
                                toast.error(
                                  'You must upload at least 6 photos '
                                )
                                return
                              }

                              // Set the files array in the state
                              setUserimage(filesArray)
                              setIsuploading(false)
                            }}
                            name='file'
                            types={fileTypes}
                            label='Choose a file or Drag it here'
                            hoverTitle='Drop here'
                            multiple={true}
                            // fileOrFiles={fileAdded} // Include fileAdded if needed
                            children={
                              <label className='custom-file-upload space-y-4 md:space-y-6 flex flex-col justify-center items-center  text-center  max-w-lg  '>
                                <LuImagePlus className='text-center text-5xl lg:text-7xl text-babypurple mx-auto ' />
                                <h1
                                  htmlFor=''
                                  className='text-center text-xs md:text-sm xl:text-base'
                                >
                                  {' '}
                                  <span className='font-bold text-xs md:text-sm xl:text-base cursor-pointer'>
                                    Choose a file
                                  </span>{' '}
                                  or Drag it here
                                </h1>
                              </label>
                            }
                          />

                          <h1 className='text-xs md:text-base text-center'>
                            * supported files are JPG, JPEG, PNG <br />
                            <span className='text-softRed font-bold'>
                              File size must not be more than 20MB
                            </span>
                          </h1>
                        </div>
                      ) : (
                        <div className=' flex flex-col  gap-4 w-full px-4 sm:px-6'>
                          {/* view */}
                          <div className='bg-inherit  text-xs lg:text-sm max-w-md  outline-none w-full space-y-3 lg:space-y-4'>
                            {userimage?.map((file, index) => (
                              <div
                                key={index}
                                className='border-babygreen border rounded-md px-2 py-1 lg:py-2 lg:px-3 flex items-center justify-between gap-2 '
                              >
                                <h1 className='text-xs lg:text-sm'>
                                  {file?.name}
                                </h1>

                                <MdDelete
                                  onClick={() => handleDelete(index)}
                                  className=' cursor-pointer flex-shrink-0 text-red-500 text-sm lg:text-base'
                                />
                              </div>
                            ))}
                          </div>
                          {/* add more  */}
                          {/* <div className='border border-babyblack   w-52 md:w-80 xl:w-96  relative'>
                            <label>
                              <span className='sr-only text-xs '>Add more</span>
                              <input
                                name=''
                                type='file'
                                accept='image/png, image/jpg, image/gif, image/jpeg,application/pdf'
                                // value={item?.file?.name}
                                onChange={(e) => {
                              
                                  setUserimage((previous) => [
                                    ...previous,
                                    ...e.target.files,
                                  ])
                                  // console.log(userimage)
                                  // console.log(e.target.files?.[0])
                                }}
                                className='block   w-40 md:w-64 xl:w-80 text-xs text-babyblack file:mr-4 file:py-2 file:px-4 file:border-l-0 file:border-t-0 file:border-b-0 file:border-babygrey file:border-r file:border file:text-xs file:font-semibold file:text-babyblack cursor-pointer file:cursor-pointer file:bg-white md:file:text-sm md:file:py-3 xl:file:text-base lg:text-sm xl:text-base truncate 
      '
                              />
                            </label>
                          </div> */}
                        </div>
                      )}
                    </div>
                    {/* car documentations */}
                    <div className='bg-white  pt-4 rounded-lg space-y-2 lg:space-y-4 shadow-md sm:pt-6 md:pt-8'>
                      <h1 className='font-bold text-sm sm:text-base  px-4  md:text-lg lg:text-xl border-b pb-2 sm:px-6 md:px-8 '>
                        Car Documentations
                      </h1>
                      <p className='text-xs lg:text-sm px-4 sm:px-6 md:px-8 text-slate-500'>
                        Please upload any supporting documentations to certify
                        that you own this vehicle and it's road worthyness
                      </p>
                      {/* photos */}
                      <div className='w-full px-4 sm:px-6 md:px-8 py-6 lg:px-10 lg:py-10 space-y-3 lg:space-y-6 '>
                        {/* photos */}
                        <div className='flex justify-between items-start gap-4 '>
                          <div className='flex flex-col gap-2 lg:gap-4 items-center'>
                            {userimage2?.map((item, index) => {
                              return (
                                <div
                                  key={index}
                                  className='border border-babyblack   w-52 md:w-80 xl:w-96  relative'
                                >
                                  <label>
                                    <span className='sr-only text-xs '>
                                      Select File
                                    </span>
                                    <input
                                      name=''
                                      type='file'
                                      accept='image/png, image/jpg, image/gif, image/jpeg,application/pdf'
                                      // value={item?.file?.name}
                                      onChange={(e) => {
                                        setUserimage2((previous) =>
                                          previous?.map((i) => {
                                            if (i.id === item.id) {
                                              i.file = e.target.files[0]
                                              return i
                                            }
                                            return i
                                          })
                                        )
                                      }}
                                      className='block   w-40 md:w-64 xl:w-80 text-xs text-babyblack file:mr-4 file:py-2 file:px-4 file:border-l-0 file:border-t-0 file:border-b-0 file:border-babygrey file:border-r file:border file:text-xs file:font-semibold file:text-babyblack cursor-pointer file:cursor-pointer file:bg-white md:file:text-sm md:file:py-3 xl:file:text-base lg:text-sm xl:text-base truncate 
      '
                                    />
                                  </label>
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
                                      className='absolute  top-1/2  right-1 -translate-x-1/2 -translate-y-1/2 text-babyblack  cursor-pointer font-bold sm:text-lg lg:text-xl xl:text-2xl'
                                    >
                                      <RiDeleteBack2Fill />
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
                              className='px-4 py-2 md:py-3 bg-softpurple  shadow-md text-xs sm:px-6 font-bold lg:text-sm lg:px-8 cursor-pointer '
                            >
                              Add{' '}
                              <span className='hidden md:inline-block '>
                                More Files
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* more */}
                        <h1 className='text-xs text-babypurple'>
                          Only Images and Pdf's are allowed
                        </h1>
                      </div>
                    </div>
                    {/* costing */}
                    <div className='bg-white  py-4 rounded-lg space-y-2 lg:space-y-4 shadow-md sm:py-6 md:py-8'>
                      <h1 className='font-bold text-sm sm:text-base  px-4  md:text-lg lg:text-xl border-b pb-2 sm:px-6 md:px-8 '>
                        Pricing
                      </h1>
                      <p className='text-xs lg:text-sm px-4 sm:px-6 md:px-8 text-slate-500'>
                        Please input a competive price for your car services
                      </p>
                      {/* group */}
                      <div className='w-full pt-2 space-y-4 grid grid-cols-1 sm:grid-cols-3  px-4 sm:px-6 md:px-8  sm:space-y-0  sm:gap-8 md:gap-10'>
                        {/* cost*/}
                        <div className='space-y-2 w-full'>
                          <label
                            htmlFor=''
                            className='text-xs lg:text-sm text-slate-500'
                          >
                            Price per day
                          </label>
                          <Field
                            type='number'
                            name='cost'
                            placeholder='6'
                            className=' bg-white    border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                          />
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='cost' />
                          </div>
                        </div>
                        {/* carmodel */}
                        <div className='space-y-2 w-full '>
                          <label
                            htmlFor=''
                            className='text-xs lg:text-sm text-slate-500'
                          >
                            Tank Filling Cost
                          </label>
                          <Field
                            type='number'
                            name='tank'
                            placeholder='10'
                            className=' bg-white   border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                          />
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='tank' />
                          </div>
                        </div>
                        {/* carmodel */}
                        <div className='space-y-2 w-full '>
                          <label
                            htmlFor=''
                            className='text-xs lg:text-sm text-slate-500'
                          >
                            Outside Location Pickup Cost
                          </label>
                          <Field
                            type='number'
                            name='outside'
                            placeholder='30'
                            className=' bg-white   border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                          />
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='outside' />
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
                            <div className='spinner'></div>
                            Uploading...
                          </div>
                        ) : (
                          'Enlist'
                        )}
                      </button>
                      <Link
                        href='/host/fleet'
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
