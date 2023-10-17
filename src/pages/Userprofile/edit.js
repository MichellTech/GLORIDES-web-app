import React, { useState } from 'react'
import Navbar from '@/components/Navigation/Navbar'
import Profilecomp from '@/components/Profilecomp'
import Image from 'next/image'
import Profilecompbig from '@/components/Profilecompbig'
import { MdOutlineAddAPhoto } from 'react-icons/md'
import { BiLockOpenAlt, BiUser } from 'react-icons/bi'
import { MdOutlinePayments } from 'react-icons/md'
import Footer from '@/components/Navigation/Footer'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { ImSpinner } from 'react-icons/im'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { FileUploader } from 'react-drag-drop-files'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function Editprofile() {
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
    email: Yup.string()
      .email('No email provided')
      .matches(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Kindly input a valid email'
      )
      .required('No email Provided'),
    phone: Yup.string().required('No phone number provided'),
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
      {/* small nav */}
      <div className='sticky  md:fixed top-0 left-0 right-0 bg-white z-50  '>
        <Navbar />
        <div className='example md:hidden  overflow-y-auto w-full '>
          <Profilecomp />
        </div>
      </div>

      {/* body */}
      <div className='bg-[#F5F5F5] md:bg-white bg-opacity-50 pt-8  md:pt-0 md:px-6  md:flex md:justify-between md:items-start md:gap-4 w-full md:relative  '>
        {/* bg-nave links */}
        <div className='hidden md:block md:w-1/4 fixed top-32  md:pr-10       '>
          <Profilecompbig />
        </div>
        {/* information */}
        <div className=' px-6   space-y-10  md:w-3/4  md:absolute md:top-32 md:right-0 pb-20  '>
          {/* form */}
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {(formik) => {
              return (
                <Form className='  space-y-10 lg:space-y-14 w-full overflow-x-hidden '>
                  {/* profile information */}
                  <div className='bg-white space-y-4 lg:space-y-6 shadow-md rounded-md border py-4 px-6 '>
                    {/* header */}
                    <div className='border-b   pb-4 '>
                      <h1 className='text-lg font-bold lg:text-xl'>
                        Profile Information
                      </h1>
                    </div>
                    {/* dob and gender and image */}
                    <div className=' md:flex md:justify-between  md:items-center  md:gap-4  lg:gap-10 xl:gap-14   md:space-y-0  space-y-4 md:pb-4'>
                      {/* image */}
                      <div className='  relative w-32 lg:w-40 w-  '>
                        {userimage ? (
                          <Image
                            src={userimage}
                            alt='logo'
                            width={1000}
                            height={1000}
                            className='object-cover   w-32  lg:w-40  h-32  lg:h-40 rounded-full'
                          />
                        ) : (
                          <Image
                            src={'/images/avatar.png'}
                            alt='logo'
                            width={1000}
                            height={1000}
                            className='object-cover  w-32  lg:w-40   h-32  lg:h-40 rounded-full'
                          />
                        )}
                        <div className='bg-babypurple rounded-full flex justify-center items-center w-7 h-7 lg:w-8 lg:h-8  absolute top-0 lg:top-0 right-0 '>
                          <FileUploader
                            classes=' '
                            handleChange={handleupload}
                            name='file'
                            types={fileTypes}
                            children={
                              <MdOutlineAddAPhoto className=' lg:text-lg text-white cursor-pointer' />
                            }
                          />
                        </div>
                      </div>
                      {/* Dob */}
                      <div className='space-y-3  pb-2 lg:pb-3 md:w-1/3 '>
                        <h1 className='text-xs text-slate-500  lg:text-sm '>
                          Date of Birth
                        </h1>
                        <p className='  border w-full py-2  px-4  text-xs placeholder:text-xs bg-babygrey bg-opacity-30 md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'>
                          {' '}
                          25-August 2023
                        </p>
                      </div>
                      {/* gender*/}
                      <div className='space-y-3  pb-2 lg:pb-3 md:w-1/3 '>
                        <h1 className='text-xs text-slate-500  lg:text-sm  '>
                          Gender
                        </h1>
                        {/* firstnmae */}
                        <p className='  border w-full py-2  px-4  text-xs placeholder:text-xs bg-babygrey bg-opacity-30 md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'>
                          {' '}
                          Male
                        </p>
                      </div>
                    </div>
                    {/* name */}
                    <div className=' md:flex md:justify-between md:items-center md:gap-4  lg:gap-10 xl:gap-14  md:space-y-0  space-y-4'>
                      <div className='space-y-3  pb-2 lg:pb-3 md:w-1/2 '>
                        <h1 className='text-xs text-slate-500  lg:text-sm '>
                          First Name
                        </h1>
                        <p className='  border w-full py-2  px-4  text-xs placeholder:text-xs bg-babygrey bg-opacity-30 md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'>
                          {' '}
                          Michell
                        </p>
                      </div>
                      {/* last*/}
                      <div className='space-y-3  pb-2 lg:pb-3 md:w-1/2'>
                        <h1 className='text-xs text-slate-500  lg:text-sm '>
                          Last Name
                        </h1>
                        {/* lastnmae */}
                        <p className='   border w-full py-2  px-4  text-xs placeholder:text-xs bg-babygrey bg-opacity-30 md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'>
                          {' '}
                          Okwu
                        </p>
                      </div>
                    </div>
                    {/* email and phone no */}
                    <div className=' md:flex md:justify-between md:items-start md:gap-4  lg:gap-10  xl:gap-14  md:space-y-0  space-y-4'>
                      {/* email*/}
                      <div className='space-y-3  pb-2 lg:pb-3 md:w-1/2 '>
                        <h1 className='text-xs text-slate-500  lg:text-sm '>
                          Email
                        </h1>
                        <div>
                          <Field
                            type='text'
                            name='email'
                            placeholder='Email'
                            className=' border w-full py-2  px-4  text-xs placeholder:text-xs bg-opacity-30 md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm bg-white      outline-babypurple'
                          />
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='email' />
                          </div>
                        </div>
                      </div>
                      {/* phone*/}
                      <div className='space-y-3  pb-2 lg:pb-3 md:w-1/2  '>
                        <h1 className='text-xs text-slate-500  lg:text-sm '>
                          Phone Number
                        </h1>
                        {/* phone */}
                        <div>
                          <Field
                            type='text'
                            name='phone'
                            placeholder='Phone Number'
                            className=' border w-full py-2  px-4  text-xs placeholder:text-xs bg-opacity-30 md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm bg-white      outline-babypurple'
                          />
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='phone' />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ADDress */}
                  <div className='bg-white space-y-4 lg:space-y-6 shadow-md rounded-md border py-4 px-6 '>
                    {/* header */}
                    <div className='border-b   pb-4'>
                      <h1 className='text-lg font-bold lg:text-xl'>Location</h1>
                    </div>
                    {/* zip and city */}
                    <div className=' md:flex md:justify-between md:flex-row-reverse md:items-start  md:gap-4  lg:gap-10 xl:gap-14   md:space-y-0  space-y-4 md:pb-4'>
                      {/* Zip code */}
                      <div className='space-y-3  pb-2 lg:pb-3 md:w-1/2 '>
                        <h1 className='text-xs text-slate-500  lg:text-sm '>
                          Zip Code
                        </h1>
                        {/* firstnmae */}
                        <div>
                          <Field
                            type='text'
                            name='zip'
                            placeholder='Zip Code'
                            className='border w-full py-2  px-4  text-xs placeholder:text-xs bg-opacity-30 md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm bg-white      outline-babypurple'
                          />
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='zip' />
                          </div>
                        </div>
                      </div>

                      {/* city */}
                      <div className='space-y-3  pb-2 lg:pb-3 md:w-1/2 '>
                        <h1 className='text-xs text-slate-500  lg:text-sm '>
                          city
                        </h1>
                        {/* city */}
                        <div>
                          <Field
                            type='text'
                            name='city'
                            placeholder='City'
                            className=' border w-full py-2  px-4  text-xs placeholder:text-xs bg-opacity-30 md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm bg-white      outline-babypurple'
                          />
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='city' />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* state and country */}
                    <div className=' md:flex md:justify-between md:flex-row-reverse md:items-start  md:gap-4  lg:gap-10 xl:gap-14   md:space-y-0  space-y-4 md:pb-4'>
                      {/* state */}
                      <div className='space-y-3  pb-2 lg:pb-3 md:w-1/2 '>
                        <h1 className='text-xs text-slate-500  lg:text-sm '>
                          State
                        </h1>
                        {/* state */}
                        <div>
                          <Field
                            type='text'
                            name='state'
                            placeholder='State'
                            className='border w-full py-2  px-4  text-xs placeholder:text-xs bg-opacity-30 md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm bg-white      outline-babypurple'
                          />
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='state' />
                          </div>
                        </div>
                      </div>
                      {/* Country */}
                      <div className='space-y-3  pb-2 lg:pb-3 md:w-1/2 '>
                        <h1 className='text-xs text-slate-500  lg:text-sm  '>
                          Country
                        </h1>
                        {/* firstnmae */}
                        <div>
                          <Field
                            type='text'
                            name='country'
                            placeholder='Country'
                            className=' border w-full py-2  px-4  text-xs placeholder:text-xs bg-opacity-30 md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm bg-white      outline-babypurple'
                          />
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='country' />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Address*/}
                    <div className=' space-y-4 md:pb-4'>
                      <h1 className='text-xs text-slate-500  lg:text-sm  '>
                        Address
                      </h1>
                      {/* firstnmae */}
                      <div>
                        <Field
                          type='text'
                          name='address'
                          placeholder='Address'
                          className='border w-full py-2  px-4  text-xs placeholder:text-xs bg-opacity-30 md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm bg-white      outline-babypurple'
                        />
                        <div className='text-softRed text-xs mt-1 px-4'>
                          <ErrorMessage name='address' />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Driving information */}
                  <div className='bg-white space-y-4 lg:space-y-6 shadow-md rounded-md border py-4 px-6'>
                    {/* header */}
                    <div className='border-b   pb-4'>
                      <h1 className='text-lg font-bold lg:text-xl'>
                        Driving Information
                      </h1>
                    </div>
                    <div className=' md:flex md:justify-between md:items-start md:gap-4  lg:gap-10 xl:gap-14  md:space-y-0  space-y-4'>
                      {/* Driving license no*/}
                      <div className='space-y-3  pb-2 lg:pb-3 md:w-1/2 '>
                        <h1 className='text-xs text-slate-500  lg:text-sm '>
                          Driver's License Number
                        </h1>
                        {/* firstnmae */}
                        <div>
                          <Field
                            type='text'
                            name='dln'
                            placeholder='Drivers License Number'
                            className=' border w-full py-2  px-4  text-xs placeholder:text-xs bg-opacity-30 md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm bg-white      outline-babypurple'
                          />
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='dln' />
                          </div>
                        </div>
                      </div>
                      {/* card */}
                      <div className='space-y-3  pb-2 lg:pb-3 md:w-1/2 '>
                        <h1 className='text-xs text-slate-500  lg:text-sm '>
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
                  <div className='bg-white space-y-4 lg:space-y-6 shadow-md rounded-md border py-4 px-6'>
                    {/* header */}
                    <div className='border-b   pb-4'>
                      <h1 className='text-lg font-bold lg:text-xl '>
                        Insurance Information
                      </h1>
                    </div>
                    <div className=' md:flex md:justify-between md:items-start md:gap-4  lg:gap-10 xl:gap-14  md:space-y-0  space-y-4 w-full'>
                      {/* Driving license no*/}
                      <div className='space-y-3  pb-2 lg:pb-3 md:w-1/2  '>
                        <h1 className='text-xs text-slate-500  lg:text-sm'>
                          Insurance License Number
                        </h1>
                        {/* firstnmae */}
                        <div>
                          <Field
                            type='text'
                            name='iln'
                            placeholder='Insurance License Number'
                            className=' border w-full py-2  px-4  text-xs placeholder:text-xs bg-opacity-30 md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm bg-white      outline-babypurple'
                          />
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='iln' />
                          </div>
                        </div>
                      </div>
                      {/* card */}
                      <div className='space-y-3  pb-2 lg:pb-3 md:w-1/2 '>
                        <h1 className='text-xs text-slate-500  lg:text-sm'>
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
                    className='bg-babypurple text-white px-6 py-2 lg:py-3   rounded-md flex justify-center items-center mx-auto text-sm md:w-full max-w-xs shadow-md'
                  >
                    {loading ? (
                      <div className='flex justify-center gap-2 items-center  '>
                        <div className='spinner'></div>
                        Updating...
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
      </div>
    </>
  )
}

export default Editprofile
