import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { FileUploader } from 'react-drag-drop-files'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { MdOutlineAddAPhoto } from 'react-icons/md'
import { useRouter } from 'next/router'
import { State, City } from 'country-state-city'
import { useSelector, useDispatch } from 'react-redux'
import {
  logIN,
  getuserprofile,
  getusernotifications,
} from '@/features/userpersona/userSlice'
import { phone } from 'phone'
import Link from 'next/link'
import mainAxiosAction from '@/components/axiosAction'
import { FaAngleDown } from 'react-icons/fa'

function Completeregistration() {
  const [loading, setLoading] = useState(false)
  const [usergender, setUsergender] = useState(['male', 'female', 'others'])

  const [userimage, setUserimage] = useState(null)
  const [imagetoupload, setImagetoupload] = useState(null)

  const [userimagetwo, setUserimagetwo] = useState(null)
  const [imagetouploadtwo, setImagetouploadtwo] = useState(null)
  const [imageerror, setImageerror] = useState('')
  const [imageerrortwo, setImageerrortwo] = useState('')
  const fileTypes = ['JPG', 'JPEG', 'PNG']
  const router = useRouter()
  const dispatch = useDispatch()
  // drivers
  const handleupload = (uploadedcontent) => {
    if (uploadedcontent.size > 2000000) {
      toast.error('file size is too large')
    } else {
      setUserimage(URL.createObjectURL(uploadedcontent))
      setImagetoupload(uploadedcontent)
    }
  }

  // insurance
  const handleuploadtwo = (uploadedcontent) => {
    if (uploadedcontent.size > 2000000) {
      toast.error('file size is too large')
    } else {
      setUserimagetwo(URL.createObjectURL(uploadedcontent))
      setImagetouploadtwo(uploadedcontent)
    }
  }
  const initialValues = {
    dob: new Date(),
    gender: '',
    address: '',
    city: '',
    state: '',
    phone: '',
    dl: '',
    il: '',
  }

  const onSubmit = (values, onSubmitProps) => {
    setLoading(true)
    onSubmitProps.setSubmitting(false)
    const phoneresult = phone(values.phone)
    if (phoneresult?.isValid === false) {
      toast.warning('please input a valid phone number')
      setLoading(false)
    } else {
      completeregapi(values)
    }
  }
  // validation
  const validationSchema = Yup.object().shape({
    dob: Yup.date().required('Date cannot be a future date!!'),
    gender: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('No gender provided'),
    address: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('No address provided'),
    city: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('No value provided'),
    state: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('No value provided'),
    dl: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('No value provided'),
    il: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('No value provided'),
    phone: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('No value provided'),
  })

  const completeregapi = (values) => {
    if (!imagetoupload) {
      setImageerror("Please upload driver's license")
      setLoading(false)
    } else if (!imagetouploadtwo) {
      setImageerrortwo('Please upload Insurance license')
      setLoading(false)
    } else {
      const formData = new FormData()
      formData?.append('license', imagetoupload)
      formData?.append('insurance', imagetouploadtwo)
      formData?.append('gender', values.gender)
      formData?.append('license_number', values.dl)
      formData?.append('insurance_number', values.il)
      formData?.append('address', values.address)
      formData?.append('date_of_birth', values.dob.toISOString())
      formData?.append('state', values.state)
      formData?.append('city', values.city)
      formData?.append('phone', values.phone)
      mainAxiosAction
        .post(`/user/complete-registration`, formData)
        .then(function (response) {
          setLoading(false)
          setImageerror('')
          setImageerrortwo('')
          router.push({
            pathname: '/',
          })
          toast.success(response?.data?.message)
          dispatch(logIN())
          dispatch(getuserprofile())
          dispatch(getusernotifications())
        })
        .catch(function (error) {
          toast.error(error?.response?.data?.message)
          setLoading(false)
          console.log(error)
        })
    }
  }
  return (
    <>
      <section className='min-h-screen flex-col flex justify-center items-center backedground py-10 lg:py-14 overflow-x-hidden'>
        <div className=' space-y-8 lg:space-y-10 px-7 flex flex-col justify-center items-center w-full'>
          {/* logo */}
          <Link href='/'>
            <div className='w-28 md:w-32 lg:w-40'>
              <Image
                src={'/images/logo.png'}
                width={500}
                height={500}
                priority={true}
                className=''
                alt='logo'
              />
            </div>
          </Link>
          {/* form */}
          <div className='px-2 sm:px-6 md:px-12 lg:px-16 py-6 bg-white rounded-md max-w-sm sm:max-w-sm md:max-w-md lg:max-w-lg w-full   '>
            {/* header */}
            <div className='space-y-1 lg:space-y-2'>
              <h1 className=' font-bold text-babypurple text-2xl lg:text-3xl text-center  mx-auto '>
                Complete your registration
              </h1>
              <p className='text-xs text-center  mx-auto  max-w-xs lg:text-sm lg:max-w-md'>
                Please provide the following information to enable us know you
                better
              </p>
            </div>
            {/* form */}
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              {(formik) => {
                return (
                  <Form className='  text-babyblack space-y-10 font-sans px-6 py-8 md:px-0 '>
                    <div className=' space-y-6 md:space-y-8 '>
                      <div className='flex items-start gap-x-10 justify-between  w-full'>
                        {/* dob */}
                        <div className=' space-y-1 lg:space-y-2'>
                          <label htmlFor='' className='text-xs lg:text-sm'>
                            Date of Birth
                          </label>
                          <Field name='dob' className=''>
                            {({ field, form }) => {
                              return (
                                <DatePicker
                                  className='bg-white border-babyblack border  py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm w-36 sm:w-32 md:w-44'
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

                        {/* gender */}
                        <div className='w-full space-y-1 lg:space-y-2'>
                          <label htmlFor='' className='text-xs lg:text-sm'>
                            Gender
                          </label>
                          <div className='relative'>
                            <Field
                              as='select'
                              type='selectOption'
                              name='gender'
                              className=' bg-white border-babyblack border  py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm  h-max w-full appearance-none'
                            >
                              <option value=''>select option</option>
                              {usergender?.map((item, index) => {
                                return (
                                  <option key={index} value={item}>
                                    {item}
                                  </option>
                                )
                              })}
                            </Field>
                            <FaAngleDown className='absolute  top-1/2  right-1 -translate-x-1/2 -translate-y-1/2 text-babyblack  cursor-pointer font-bold sm:text-lg  lg:text-xl xl:text-2xl pointer-events-none' />
                          </div>

                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='gender' />
                          </div>
                        </div>
                      </div>
                      {/* phone */}
                      <div className=' space-y-1 lg:space-y-2'>
                        <label htmlFor='' className='text-xs lg:text-sm'>
                          Phone Number
                        </label>
                        <Field
                          type='text'
                          name='phone'
                          placeholder='Phone Number'
                          className=' bg-white border-babyblack border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                        />
                        <div className='text-softRed text-xs mt-1 px-4'>
                          <ErrorMessage name='phone' />
                        </div>
                      </div>
                      {/* address */}
                      <div className=' space-y-1 lg:space-y-2'>
                        <label htmlFor='' className='text-xs lg:text-sm'>
                          Full Address
                        </label>
                        <Field
                          type='text'
                          name='address'
                          placeholder='Full address'
                          className=' bg-white border-babyblack border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                        />
                        <div className='text-softRed text-xs mt-1 px-4'>
                          <ErrorMessage name='address' />
                        </div>
                      </div>
                      {/* city,state,country */}
                      {/* state */}

                      <div className=' space-y-1 lg:space-y-2'>
                        <label htmlFor='' className='text-xs lg:text-sm'>
                          State
                        </label>
                        <div className='relative'>
                          <Field
                            as='select'
                            type='selectOption'
                            name='state'
                            className=' bg-white border-babyblack border  py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm  h-max w-full appearance-none'
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
                          <FaAngleDown className='absolute  top-1/2  right-1 -translate-x-1/2 -translate-y-1/2 text-babyblack  cursor-pointer font-bold sm:text-lg  lg:text-xl xl:text-2xl pointer-events-none' />
                        </div>

                        <div className='text-softRed text-xs mt-1 px-4'>
                          <ErrorMessage name='state' />
                        </div>
                      </div>
                      {/* city */}

                      {formik.values.state && (
                        <div className=' space-y-1 lg:space-y-2'>
                          <label htmlFor='' className='text-xs lg:text-sm'>
                            City
                          </label>
                          <div className='relative'>
                            <Field
                              as='select'
                              type='selectOption'
                              name='city'
                              className=' bg-white border-babyblack border  py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm  h-max w-full appearance-none'
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
                            <FaAngleDown className='absolute  top-1/2  right-1 -translate-x-1/2 -translate-y-1/2 text-babyblack  cursor-pointer font-bold sm:text-lg  lg:text-xl xl:text-2xl pointer-events-none' />
                          </div>

                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='city' />
                          </div>
                        </div>
                      )}
                      {/* drivers license */}
                      <div className='space-y-1 lg:space-y-2'>
                        <label htmlFor='' className='text-xs lg:text-sm'>
                          Drivers License Number
                        </label>
                        <Field
                          type='text'
                          name='dl'
                          placeholder='Drivers License Number'
                          className=' bg-white border-babyblack border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                        />
                        <div className='text-softRed text-xs mt-1 px-4'>
                          <ErrorMessage name='dl' />
                        </div>
                      </div>
                      {/* Insurance license */}
                      <div className='space-y-1 lg:space-y-2'>
                        <label htmlFor='' className='text-xs lg:text-sm'>
                          Insurance License Number
                        </label>
                        <Field
                          type='text'
                          name='il'
                          placeholder='Insurance License Number'
                          className=' bg-white border-babyblack border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                        />
                        <div className='text-softRed text-xs mt-1 px-4'>
                          <ErrorMessage name='il' />
                        </div>
                      </div>
                      {/* drivers license */}
                      <div className='space-y-1 lg:space-y-2'>
                        <label htmlFor='' className='text-xs lg:text-sm'>
                          Driver's License Photo
                        </label>
                        <div className='   '>
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
                                <div className='px-6 py-6 border-2 border-babypurple border-dotted flex flex-col justify-center items-center space-y-2'>
                                  <MdOutlineAddAPhoto className=' text-3xl text-babypurple' />
                                  <p className='text-xs'>
                                    Upload digital copy of your driver's license
                                  </p>
                                  <p className='text-xs text-softRed '>
                                    (Max size 2 MB)
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
                      {/* insurance license */}
                      <div className='space-y-1 lg:space-y-2'>
                        <label htmlFor='' className='text-xs lg:text-sm'>
                          Insurance License Photo
                        </label>
                        <div className='   '>
                          <div className='relative'>
                            {userimagetwo && (
                              <Image
                                src={userimagetwo}
                                alt='Insurance license photo'
                                width={500}
                                height={500}
                                priority={true}
                                className='object-cover  border border-babygreen h-32 w-full md:h-40 xl:h-48 object-center '
                              />
                            )}
                            {userimagetwo && (
                              <div className='absolute -top-2 -right-2'>
                                <FileUploader
                                  classes='bg-babygreen  w-full   rounded-full cursor-pointer  '
                                  handleChange={handleuploadtwo}
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

                          {!userimagetwo && (
                            <FileUploader
                              classes='bg-babygreen  w-full   rounded-full cursor-pointer  '
                              handleChange={handleuploadtwo}
                              name='file'
                              types={fileTypes}
                              children={
                                <div className='px-6 py-6 border-2 border-babypurple border-dotted flex flex-col justify-center items-center space-y-2'>
                                  <MdOutlineAddAPhoto className=' text-3xl text-babypurple' />
                                  <p className='text-xs'>
                                    Upload digital copy of your Insurance
                                    license
                                  </p>
                                  <p className='text-xs text-softRed '>
                                    (Max size 2 MB)
                                  </p>
                                </div>
                              }
                            />
                          )}
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <h1>{imageerrortwo}</h1>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      type='submit'
                      className='bg-babypurple text-sm lg:text-base text-white px-4 py-3 lg:py-4 rounded-md w-full shadow-lg '
                    >
                      {loading ? (
                        <div className='flex justify-center gap-2 items-center'>
                          <div className='spinner'></div>
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

          {/* link to signup */}
          <h1 className='text-center  text-xs sm:text-sm lg:text-base  text-white font-sans  mx-auto'>
            Do you have an account with us ?{' '}
            <Link href='/auth/login'>
              <span className='underline font-bold tracking-wider cursor-pointer'>
                {' '}
                Login
              </span>
            </Link>{' '}
          </h1>
        </div>
      </section>
    </>
  )
}

export default Completeregistration
