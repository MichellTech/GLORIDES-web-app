import React, { useState, useEffect } from 'react'
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
import moment from 'moment'
import axios from 'axios'

function Editprofile() {
  const [loading, setLoading] = useState(false)
  const [userimage, setUserimage] = useState(null)
  const [imagetoupload, setImagetoupload] = useState(null)
  const [usergender, setUsergender] = useState(['male', 'female', 'others'])
  const [userinfo, setUserinfo] = useState(null)
  const getuserprofile = () => {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/user/get-user`,
        {},
        {
          headers: {
            'x-glorious-access': JSON.parse(localStorage.getItem('User_Token')),
          },
        }
      )
      .then(function (response) {
        console.log(response.data)
        setLoading(false)
        setUserinfo(response.data.user)
      })
      .catch(function (error) {
        setLoading(false)
        console.log(error)
      })
  }

  useEffect(() => {
    getuserprofile()
  }, [])
  console.log(userinfo)
  const fileTypes = ['JPG', 'JPEG', 'PNG']
  const initialValues = {
    firstname: userinfo?.firstname,
    lastname: userinfo?.lastname,
    phone: userinfo?.phone_number,
    gender: userinfo?.gender,
    address: userinfo?.full_address,
    city: userinfo?.city,
    state: userinfo?.state,
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
    updateprofile(values)
  }
  // validation
  const validationSchema = Yup.object().shape({
    phone: Yup.string().required('No phone number provided'),
    address: Yup.string().required('No address provided'),
    city: Yup.string().required('No city provided'),
    gender: Yup.string().required('No city provided'),
    state: Yup.string().required('No state provided'),
    firstname: Yup.string().required('No firstname provided'),
    lastname: Yup.string().required('No lastname provided'),
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

  const updateprofile = (values) => {
    const formData = new FormData()
    formData?.append('gender', values.gender)
    formData?.append('firstname', values.firstname)
    formData?.append('address', values.address)
    formData?.append('lastname', values.lastname)
    formData?.append('state', values.state)
    formData?.append('city', values.city)
    formData?.append('phone', values.phone)
    formData?.append('profile_picture', imagetoupload)
    axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/user/update-user`, formData, {
        headers: {
          'x-glorious-access': JSON.parse(localStorage.getItem('User_Token')),
        },
      })
      .then(function (response) {
        console.log(response?.data)
        setLoading(false)
        toast.success(response?.data?.message)
      })
      .catch(function (error) {
        toast.error(error?.response?.data?.message)
        setLoading(false)
        console.log(error)
      })
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
            enableReinitialize
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
                      <div className=' flex flex-col justify-center items-center mx-auto  relative w-32 lg:w-40 w-  '>
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
                            src={userinfo?.profile_picture.url}
                            alt={userinfo?.profile_picture.name}
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
                          {moment(userinfo?.date_of_birth).format(
                            'MMMM Do YYYY'
                          )}
                        </p>
                      </div>
                      {/* gender*/}
                      <div className='space-y-3  pb-2 lg:pb-3 md:w-1/3 '>
                        <h1 className='text-xs text-slate-500  lg:text-sm  '>
                          Gender
                        </h1>
                        {/* firstnmae */}
                        <div>
                          <Field
                            as='select'
                            type='selectOption'
                            name='gender'
                            className=' border w-full py-2  px-4  text-xs placeholder:text-xs bg-opacity-30 md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm bg-white      outline-babypurple'
                          >
                            <option value=''>select gender</option>
                            {usergender?.map((item, index) => {
                              return (
                                <option key={index} value={item}>
                                  {item}
                                </option>
                              )
                            })}
                          </Field>
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='gender' />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* name */}
                    <div className=' md:flex md:justify-between md:items-center md:gap-4  lg:gap-10 xl:gap-14  md:space-y-0  space-y-4'>
                      <div className='space-y-3  pb-2 lg:pb-3 md:w-1/2 '>
                        <h1 className='text-xs text-slate-500  lg:text-sm '>
                          First Name
                        </h1>
                        <div>
                          <Field
                            type='text'
                            name='firstname'
                            placeholder='First Name'
                            className=' border w-full py-2  px-4  text-xs placeholder:text-xs bg-opacity-30 md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm bg-white      outline-babypurple'
                          />
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='firstname' />
                          </div>
                        </div>
                      </div>
                      {/* last*/}
                      <div className='space-y-3  pb-2 lg:pb-3 md:w-1/2'>
                        <h1 className='text-xs text-slate-500  lg:text-sm '>
                          Last Name
                        </h1>
                        {/* lastnmae */}
                        <div>
                          <Field
                            type='text'
                            name='lastname'
                            placeholder='Last Name'
                            className=' border w-full py-2  px-4  text-xs placeholder:text-xs bg-opacity-30 md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm bg-white      outline-babypurple'
                          />
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='lastname' />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* email and phone no */}
                    <div className=' md:flex md:justify-between md:items-start md:gap-4  lg:gap-10  xl:gap-14  md:space-y-0  space-y-4'>
                      {/* email*/}
                      <div className='space-y-3  pb-2 lg:pb-3 md:w-1/2 '>
                        <h1 className='text-xs text-slate-500  lg:text-sm '>
                          Email
                        </h1>
                        <p className='  border w-full py-2  px-4  text-xs placeholder:text-xs bg-babygrey bg-opacity-30 md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'>
                          {userinfo?.email}
                        </p>
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

                    {/* state and country */}
                    <div className=' md:flex md:justify-between md:flex-row-reverse md:items-start  md:gap-4  lg:gap-10 xl:gap-14   md:space-y-0  space-y-4 md:pb-4'>
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
