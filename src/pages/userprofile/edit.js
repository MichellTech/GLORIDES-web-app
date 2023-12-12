import React, { useState, useEffect } from 'react'
import Navbar from '@/components/Navigation/Navbar/index'
import Image from 'next/image'
import Profilenavsmall from '../../components/Profilenavsmall'
import Profilenavbig from '../../components/Profilenavbig'
import { MdOutlineAddAPhoto } from 'react-icons/md'
import { useRouter } from 'next/router'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import 'react-datepicker/dist/react-datepicker.css'
import { FileUploader } from 'react-drag-drop-files'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux'
import { getuserprofile } from '@/features/userpersona/userSlice'
import Link from 'next/link'
import Loader from '../../components/Loaders/profileloader'
import mainAxiosAction from '@/components/axiosAction'
import { State, City } from 'country-state-city'

function Editprofile() {
  const [loading, setLoading] = useState(false)
  const [userimage, setUserimage] = useState(null)
  const [imagetoupload, setImagetoupload] = useState(null)
  const [usergender, setUsergender] = useState(['male', 'female', 'others'])
  const { isLoading, userData } = useSelector((store) => store.userpersona)
  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    if (userData === null) {
      dispatch(getuserprofile())
    }
  }, [])
  const fileTypes = ['JPG', 'JPEG', 'PNG']
  const initialValues = {
    firstname: userData?.firstname,
    lastname: userData?.lastname,
    phone: userData?.phone_number,
    gender: userData?.gender,
    address: userData?.full_address,
    city: userData?.city,
    state: userData?.state,
  }

  const onSubmit = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(false)
    setLoading(true)

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
    mainAxiosAction
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/user/update-user`, formData)
      .then(function (response) {
        setLoading(false)
        toast.success(response?.data?.message)
        router.push({
          pathname: '/userprofile/view',
        })
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
          <Profilenavsmall />
        </div>
      </div>

      {/* body */}
      <div className='bg-[#F5F5F5] md:bg-white bg-opacity-50 pt-8  md:pt-0 md:px-6  md:flex md:justify-between md:items-start md:gap-4 w-full md:relative  '>
        {/* bg-nave links */}
        <div className='hidden md:block md:w-1/4 fixed top-32  md:pr-10       '>
          <Profilenavbig />
        </div>
        {/* information */}
        {isLoading ? (
          <div className='px-6   space-y-10  md:w-3/4  md:absolute md:top-32 md:right-0 pb-20  '>
            <Loader />
          </div>
        ) : (
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
                          ) : userData?.profile_picture ? (
                            <Image
                              src={userData?.profile_picture?.url}
                              alt={userData?.profile_picture?.name}
                              width={1000}
                              height={1000}
                              className='object-cover  w-32  lg:w-40   h-32  lg:h-40 rounded-full'
                            />
                          ) : (
                            <Image
                              src={'/images/avatar.png'}
                              alt={'avatar'}
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
                            {moment(userData?.date_of_birth).format(
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
                            {userData?.email}
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
                        <h1 className='text-lg font-bold lg:text-xl'>
                          Location
                        </h1>
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
                              as='select'
                              type='selectOption'
                              name='city'
                              className=' border w-full py-2  px-4  text-xs placeholder:text-xs bg-opacity-30 md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm bg-white      outline-babypurple'
                            >
                              <option value=''>select City</option>
                              {City.getCitiesOfState(
                                'US',
                                State.getStatesOfCountry('US')?.filter(
                                  (i) => i?.name === formik?.values?.state
                                )?.[0]?.isoCode
                              )?.map((item, index) => {
                                return (
                                  <option key={index} value={item.name}>
                                    {item.name}
                                  </option>
                                )
                              })}
                            </Field>
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
                              as='select'
                              type='selectOption'
                              name='state'
                              className='border w-full py-2  px-4  text-xs placeholder:text-xs bg-opacity-30 md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm bg-white      outline-babypurple'
                            >
                              <option value=''>select State</option>
                              {State.getStatesOfCountry('US')?.map(
                                (item, index) => {
                                  return (
                                    <option key={index} value={item.name}>
                                      {item.name}
                                    </option>
                                  )
                                }
                              )}
                            </Field>
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

                    <div className='flex flex-col sm:flex-row   justify-center items-center gap-4 lg:gap-8'>
                      <button
                        type='submit'
                        className='bg-babypurple text-white px-6 py-2 lg:py-3 xl:py-4    rounded-md flex justify-center items-center mx-auto text-sm xl:text-base  w-full shadow-md'
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
                      <Link
                        href='/userprofile/view'
                        className='bg-softpurple text-babyblack  px-6 py-2 lg:py-3 xl:py-4   rounded-md flex justify-center items-center xl:text-base text-sm w-full shadow-md'
                      >
                        Cancel
                      </Link>
                    </div>
                  </Form>
                )
              }}
            </Formik>
          </div>
        )}
      </div>
    </>
  )
}

export default Editprofile
