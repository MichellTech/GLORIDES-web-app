import React, { useState } from 'react'
import Navbar from '@/components/Navigation/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineAddAPhoto } from 'react-icons/md'
import { BiLockOpenAlt, BiUser } from 'react-icons/bi'
import { AiOutlineBell } from 'react-icons/ai'
import Footer from '@/components/Navigation/Footer'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { ImSpinner } from 'react-icons/im'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { FileUploader } from 'react-drag-drop-files'

function Edit() {
  const [loading, setLoading] = useState(false)
  const [userimage, setUserimage] = useState(null)
  const [imagetoupload, setImagetoupload] = useState(null)

  const [userimagetwo, setUserimagetwo] = useState(null)
  const [imagetouploadtwo, setImagetouploadtwo] = useState(null)
  const [userimagethree, setUserimagethree] = useState(null)
  const [imagetouploadthree, setImagetouploadthree] = useState(null)
  const [imageerror, setImageerror] = useState('')
  const [imageerrortwo, setImageerrortwo] = useState('')
  const [imageerrorthree, setImageerrorthree] = useState('')
  const fileTypes = ['JPG', 'JPEG', 'PNG']
  const initialValues = {
    firstname: 'Michell',
    lastname: 'Okwu',
    email: 'Okwuchiedozie@gmail.com',
    phone: '+2348138121986',
    dob: new Date(),
    gender: 'Male',
    address: 'No 2 rumola street, Ph, Nigeria',
    city: 'Port Harcourt',
    state: 'Rivers',
    country: 'Nigeria',
    zip: '111022393',
    dln: 'N2235on1244',
    iln: 'N2235on1244',
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
  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required('No first name provided'),
    lastname: Yup.string().required('No last name provided'),
    email: Yup.string()
      .email('No email provided')
      .matches(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Kindly input a valid email'
      )
      .required('No email Provided'),
    phone: Yup.string().required('No phone number provided'),
    dob: Yup.date().required('No date provided'),
    gender: Yup.string().required('No gender provided'),
    address: Yup.string().required('No address provided'),
    city: Yup.string().required('No city provided'),
    state: Yup.string().required('No state provided'),
    country: Yup.string().required('No country provided'),
    zip: Yup.string().required('No zip code provided'),
    dln: Yup.string().required('No Drivers License Number provided'),
    iln: Yup.string().required('No Insurance license Number provided'),
  })

  // profilephoto
  const handleupload = (uploadedcontent) => {
    if (uploadedcontent.size > 1000000) {
      toast.error('file size is too large')
    } else {
      setUserimage(URL.createObjectURL(uploadedcontent))
      setImagetoupload(uploadedcontent)
    }
  }

  // drivers
  const handleuploadtwo = (uploadedcontent) => {
    if (uploadedcontent.size > 1000000) {
      toast.error('file size is too large')
    } else {
      setUserimagetwo(URL.createObjectURL(uploadedcontent))
      setImagetouploadtwo(uploadedcontent)
    }
  }

  // insurance
  const handleuploadthree = (uploadedcontent) => {
    if (uploadedcontent.size > 1000000) {
      toast.error('file size is too large')
    } else {
      setUserimagethree(URL.createObjectURL(uploadedcontent))
      setImagetouploadthree(uploadedcontent)
    }
  }
  return (
    <>
      <Navbar />
      <section className='bg-[#F5F5F5]  w-full overflow-x-hidden  '>
        {/* profile information */}
        <div className='flex flex-col justify-center items-center px-6  py-10 md:pt-14 lg:pt-16 xl:pt-20 space-y-10 md:space-y-0 md:flex-row md:items-start lg:justify-center md:gap-6 lg:max-w-5xl xl:max-w-6xl mx-auto'>
          {/* profile data */}
          <div className='bg-white rounded shadow-md px-6 py-4 md:py-6 flex flex-col justify-center items-center mx-auto space-y-4 w-72 sm:w-80 xl:w-[22rem]'>
            {/* image */}
            <div className='  relative '>
              {userimage ? (
                <Image
                  src={userimage}
                  alt='logo'
                  width={1000}
                  height={1000}
                  className='object-cover w-36 rounded-full '
                />
              ) : (
                <Image
                  src={'/images/avatar.png'}
                  alt='logo'
                  width={1000}
                  height={1000}
                  className='object-cover w-36 rounded-full '
                />
              )}
              <div className='bg-babypurple rounded-full flex justify-center items-center w-10 h-10  absolute top-0 right-0'>
                <FileUploader
                  classes=' '
                  handleChange={handleupload}
                  name='file'
                  types={fileTypes}
                  children={
                    <MdOutlineAddAPhoto className='text-xl  lg:text-2xl text-white cursor-pointer' />
                  }
                />
              </div>
            </div>
            {/* text */}
            <div className='space-y-4 w-full'>
              <h1 className='text-center font-bold'>Hello Michell Okwu</h1>
              {/* button */}
              <div className='flex flex-col gap-3'>
                <Link href='/Userprofile/view' className=' '>
                  <div className='flex  justify-center items-center gap-3 border-babypurple border  px-4 py-2 text-babyblack rounded transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-babypurple duration-300 hover:border-none hover:text-white  '>
                    <BiUser className='' />
                    <h1 className='text-xs '>View Profile</h1>
                  </div>
                </Link>
                <Link href='/Userprofile/password' className=' '>
                  <div className='flex  justify-center items-center gap-3 border-babypurple border  px-4 py-2 text-babyblack rounded transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-babypurple duration-300 hover:border-none hover:text-white  '>
                    <BiLockOpenAlt className='' />
                    <h1 className='text-xs '>Passwords</h1>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* text */}
          {/* form */}
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {(formik) => {
              return (
                <Form className='  space-y-10 lg:space-y-14  w-72  sm:w-80 md:w-full '>
                  {/* profile information */}
                  <div className='bg-white space-y-4 lg:space-y-6 shadow-md pb-4 '>
                    {/* header */}
                    <div className='bg-softpurple px-3 md:px-5 lg:px-6  py-2'>
                      <h1 className='text-sm font-bold lg:text-base '>
                        Profile Information
                      </h1>
                    </div>
                    {/* name */}
                    <div className=' md:flex md:justify-between md:items-center md:gap-2 md:space-y-0  space-y-4'>
                      <div className='space-y-2 px-3 md:px-5 lg:px-6  pb-2 lg:pb-3 md:w-1/2 '>
                        <h1 className='text-xs lg:text-sm  '>First Name</h1>
                        <p className='  border-babyblack border w-full py-2  px-4 outline-babypurple text-xs placeholder:text-xs bg-softpurple md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'>
                          {' '}
                          Michell
                        </p>
                      </div>
                      {/* last*/}
                      <div className='space-y-2 px-3 md:px-5 lg:px-6   pb-2 lg:pb-3  md:w-1/2 '>
                        <h1 className='text-xs lg:text-sm  '>Last Name</h1>
                        {/* lastnmae */}
                        <p className='  border-babyblack border w-full py-2  px-4 outline-babypurple text-xs placeholder:text-xs bg-softpurple md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'>
                          {' '}
                          Okwu
                        </p>
                      </div>
                    </div>
                    {/* email and phone no */}
                    <div className=' md:flex md:justify-between md:items-start md:gap-2 md:space-y-0  space-y-4'>
                      {/* email*/}
                      <div className='space-y-2 px-3 md:px-5 lg:px-6   pb-2 lg:pb-3 md:w-1/2 '>
                        <h1 className='text-xs lg:text-sm  '>Email</h1>
                        <p className='  border-babyblack border w-full py-2  px-4 outline-babypurple text-xs placeholder:text-xs bg-softpurple md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'>
                          {' '}
                          Michellokwu@Gmail.com
                        </p>
                      </div>
                      {/* phone*/}
                      <div className='space-y-2 px-3 md:px-5 lg:px-6   pb-2 lg:pb-3 md:w-1/2 '>
                        <h1 className='text-xs lg:text-sm  '>Phone Number</h1>
                        {/* phone */}
                        <div>
                          <Field
                            type='text'
                            name='phone'
                            placeholder='Phone Number'
                            className=' bg-white border-babyblack border w-full py-2   px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                          />
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='phone' />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* dob and gender */}
                    <div className=' md:flex md:justify-between md:flex-row-reverse md:items-start  md:gap-2 md:space-y-0  space-y-4 md:pb-4'>
                      {/* Dob */}
                      <div className='space-y-2 px-3 md:px-5 lg:px-6  pb-2 lg:pb-3 md:w-1/2'>
                        <h1 className='text-xs  lg:text-sm '>Date of Birth</h1>
                        <div className=''>
                          <Field name='dob' className='w-full'>
                            {({ field, form }) => {
                              return (
                                <DatePicker
                                  className='bg-white border-babyblack border  py-2  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm w-max'
                                  id='dob'
                                  {...field}
                                  selected={field.value}
                                  dateFormat={'dd/MM/yyyy'}
                                  onChange={(date) =>
                                    form.setFieldValue(field.name, date)
                                  }
                                />
                              )
                            }}
                          </Field>
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='dob' />
                          </div>
                        </div>
                      </div>
                      {/* gender*/}
                      <div className='space-y-2 px-3 md:px-5 lg:px-6   pb-2 lg:pb-3 md:w-1/2 '>
                        <h1 className='text-xs lg:text-sm  '>Gender</h1>
                        {/* firstnmae */}
                        <div>
                          <Field
                            type='text'
                            name='gender'
                            placeholder='Gender'
                            className=' bg-white border-babyblack border w-full py-2   px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                          />
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='gender' />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ADDress */}
                  <div className='bg-white  space-y-4 lg:space-y-6  shadow-md pb-4'>
                    {/* header */}
                    <div className='bg-softpurple px-3 md:px-5 lg:px-6  py-2 md:flex md:justify-between md:items-center md:gap-2 md:space-y-0'>
                      <h1 className='text-sm font-bold lg:text-base'>
                        Location
                      </h1>
                    </div>
                    {/* zip and city */}
                    <div className=' md:flex md:justify-between md:items-start  md:gap-2 md:space-y-0  space-y-4'>
                      {/* Zip code */}
                      <div className='space-y-2 px-3 md:px-5 lg:px-6   pb-2 lg:pb-3  md:w-1/2'>
                        <h1 className='text-xs lg:text-sm '>Zip Code</h1>
                        {/* firstnmae */}
                        <div>
                          <Field
                            type='text'
                            name='zip'
                            placeholder='Zip Code'
                            className=' bg-white border-babyblack border w-full py-2    px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                          />
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='zip' />
                          </div>
                        </div>
                      </div>

                      {/* city */}
                      <div className='space-y-2 px-3 md:px-5 lg:px-6  pb-2 lg:pb-3 md:w-1/2'>
                        <h1 className='text-xs  lg:text-sm '>city</h1>
                        {/* city */}
                        <div>
                          <Field
                            type='text'
                            name='city'
                            placeholder='City'
                            className=' bg-white border-babyblack border w-full py-2  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                          />
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='city' />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* state and country */}
                    <div className=' md:flex md:justify-between md:items-start  md:gap-2 md:space-y-0  space-y-4'>
                      {/* state */}
                      <div className='space-y-2 px-3 md:px-5 lg:px-6  pb-2 lg:pb-3  md:w-1/2'>
                        <h1 className='text-xs lg:text-sm '>State</h1>
                        {/* state */}
                        <div>
                          <Field
                            type='text'
                            name='state'
                            placeholder='State'
                            className=' bg-white border-babyblack border w-full py-2    px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                          />
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='state' />
                          </div>
                        </div>
                      </div>
                      {/* Country */}
                      <div className='space-y-2 px-3 md:px-5 lg:px-6   pb-2 lg:pb-3 md:w-1/2'>
                        <h1 className='text-xs  lg:text-sm '>Country</h1>
                        {/* firstnmae */}
                        <div>
                          <Field
                            type='text'
                            name='country'
                            placeholder='Country'
                            className=' bg-white border-babyblack border w-full py-2    px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                          />
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='country' />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Address*/}
                    <div className='space-y-2 px-3 md:px-5 lg:px-6   pb-2 lg:pb-3 '>
                      <h1 className='text-xs  lg:text-sm '>Address</h1>
                      {/* firstnmae */}
                      <div>
                        <Field
                          type='text'
                          name='address'
                          placeholder='Address'
                          className=' bg-white border-babyblack border w-full py-2    px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                        />
                        <div className='text-softRed text-xs mt-1 px-4'>
                          <ErrorMessage name='address' />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Driving information */}
                  <div className='bg-white  space-y-4 lg:space-y-6   shadow-md pb-4'>
                    {/* header */}
                    <div className='bg-softpurple px-3 md:px-5 lg:px-6  py-2'>
                      <h1 className='text-sm font-bold'>Driving Information</h1>
                    </div>
                    <div className='space-y-4 lg:space-y-0  lg:flex lg:justify-between lg:items-start lg:gap-2'>
                      {/* Driving license no*/}
                      <div className='space-y-2 px-3 md:px-5 lg:px-6   pb-2 lg:pb-3 lg:w-1/2 '>
                        <h1 className='text-xs  lg:text-sm '>
                          Driver's License Number
                        </h1>
                        {/* firstnmae */}
                        <div>
                          <Field
                            type='text'
                            name='dln'
                            placeholder='Drivers License Number'
                            className=' bg-white border-babyblack border w-full py-2    px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                          />
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='dln' />
                          </div>
                        </div>
                      </div>
                      {/* card */}
                      <div className='space-y-2 px-3 md:px-5 lg:px-6   pb-2 lg:pb-3   lg:w-1/2'>
                        <h1 className='text-xs  lg:text-sm '>
                          Driver's Liciense Card
                        </h1>
                        {/* image */}
                        <div className='  relative w-48 lg:w-60 xl:w-72 '>
                          {userimagetwo ? (
                            <Image
                              src={userimagetwo}
                              alt='logo'
                              width={1000}
                              height={1000}
                              className='object-cover  w-48 lg:w-60 xl:w-72'
                            />
                          ) : (
                            <Image
                              src={'/images/idcard.png'}
                              alt='logo'
                              width={1000}
                              height={1000}
                              className='object-cover  w-48 lg:w-60 xl:w-72'
                            />
                          )}
                          <div className='bg-babypurple rounded-full flex justify-center items-center w-7 h-7 lg:w-8 lg:h-8  absolute -top-1 lg:-top-2 right-0 '>
                            <FileUploader
                              classes=' '
                              handleChange={handleuploadtwo}
                              name='file'
                              types={fileTypes}
                              children={
                                <MdOutlineAddAPhoto className=' lg:text-lg text-white cursor-pointer' />
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* insurance information */}
                  <div className='bg-white  space-y-4 lg:space-y-6   shadow-md pb-4'>
                    {/* header */}
                    <div className='bg-softpurple px-3 md:px-5 lg:px-6  py-2'>
                      <h1 className='text-sm font-bold lg:text-sm '>
                        Insurance Information
                      </h1>
                    </div>
                    <div className='space-y-4 lg:space-y-0  lg:flex lg:justify-between lg:items-start lg:gap-2'>
                      {/* Driving license no*/}
                      <div className='space-y-2 px-3 md:px-5 lg:px-6   pb-2 lg:pb-3 lg:w-1/2 '>
                        <h1 className='text-xs  lg:text-sm '>
                          Insurance License Number
                        </h1>
                        {/* firstnmae */}
                        <div>
                          <Field
                            type='text'
                            name='iln'
                            placeholder='Insurance License Number'
                            className=' bg-white border-babyblack border w-full py-2    px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                          />
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='iln' />
                          </div>
                        </div>
                      </div>
                      {/* card */}
                      <div className='space-y-2 px-3 md:px-5 lg:px-6   pb-2 lg:pb-3 lg:w-1/2'>
                        <h1 className='text-xs  lg:text-sm '>
                          Insurance Liciense Card
                        </h1>
                        {/* image */}
                        <div className='  relative w-48 lg:w-60 xl:w-72 '>
                          {userimagethree ? (
                            <Image
                              src={userimagethree}
                              alt='logo'
                              width={1000}
                              height={1000}
                              className='object-cover  w-48  lg:w-60 xl:w-72'
                            />
                          ) : (
                            <Image
                              src={'/images/idcard.png'}
                              alt='logo'
                              width={1000}
                              height={1000}
                              className='object-cover  w-48  lg:w-60 xl:w-72'
                            />
                          )}
                          <div className='bg-babypurple rounded-full flex justify-center items-center w-7 h-7 lg:w-8 lg:h-8  absolute -top-1 lg:-top-2 right-0 '>
                            <FileUploader
                              classes=' '
                              handleChange={handleuploadthree}
                              name='file'
                              types={fileTypes}
                              children={
                                <MdOutlineAddAPhoto className=' lg:text-lg text-white cursor-pointer' />
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type='submit'
                    className='bg-babypurple text-white px-4 py-3   rounded-md w-full  text-base lg:text-lg '
                  >
                    {loading ? (
                      <div className='flex justify-center gap-2 items-center'>
                        <ImSpinner className='animate-spin' />
                        Update...
                      </div>
                    ) : (
                      'Update Profile'
                    )}
                  </button>
                </Form>
              )
            }}
          </Formik>
        </div>
        <Footer />
      </section>
    </>
  )
}

export default Edit

// F4EAF3
