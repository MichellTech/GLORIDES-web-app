import React, { useState } from 'react'
import Navbar from '@/components/Navigation/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import { FiUserPlus } from 'react-icons/fi'
import { BiUser, BiLockOpenAlt } from 'react-icons/bi'
import { CiCreditCardOff } from 'react-icons/ci'
import Footer from '@/components/Navigation/Footer'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { ImSpinner } from 'react-icons/im'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function Payment() {
  const [loading, setLoading] = useState(false)
  const [cardexists, setCardexists] = useState(false)

  const initialValues = {
    cname: '',
    cnumber: '',
    cexpiry: new Date(),
    cvv: '',
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
    cname: Yup.string().required('No Card Name provided'),
    cnumber: Yup.string().required('No Card Number provided'),
    cexpiry: Yup.date().required('No card expiry date provided'),
    cvv: Yup.string().required('No CVV provided'),
  })

  return (
    <>
      <Navbar />
      <section className='bg-[#F5F5F5]  w-full  overflow-x-hidden '>
        {/* profile information */}
        <div className='flex flex-col justify-center items-center px-6  py-10 md:pt-14 lg:pt-16 xl:pt-20 space-y-10 md:space-y-0 md:flex-row md:items-start lg:justify-center md:gap-6 lg:max-w-5xl xl:max-w-6xl mx-auto'>
          {/* profile data */}
          <div className='bg-white rounded shadow-md px-6 py-4 md:py-6 flex flex-col justify-center items-center mx-auto space-y-4 w-72 sm:w-80 xl:w-[22rem]'>
            {/* image */}
            <div className='  relative '>
              <Image
                src={'/images/avatar.png'}
                alt='logo'
                width={1000}
                height={1000}
                className='object-cover w-36 rounded-full '
              />
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
                <Link href='/Userprofile/edit' className=' '>
                  <div className='flex  justify-center items-center gap-3 border-babypurple border  px-4 py-2 text-babyblack rounded transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-babypurple duration-300 hover:border-none hover:text-white  '>
                    <FiUserPlus className='' />
                    <h1 className='text-xs '>Edit Profile</h1>
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
          {!cardexists ? (
            <div className='bg-white shadow-md h-[50vh] md:h-[60vh] w-72  sm:w-80 md:w-full  flex flex-col justify-center items-center px-6 py-4 mx-auto space-y-6 '>
              <div className='bg-babygrey flex justify-center items-center p-4 rounded-full '>
                <CiCreditCardOff className='text-2xl lg:text-3xl' />
              </div>
              <h1 className='text-center lg:text-sm text-xs md:max-w-xs lg:max-w-sm'>
                {' '}
                We noticed you haven’t added any payment card on our platform.
                Add a payment card now and start enjoying seamless booking
                experience{' '}
              </h1>
              <button
                onClick={() => setCardexists(true)}
                className='bg-babypurple px-6 py-2 rounded-md text-xs lg:text-sm text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 hover:border-none hover:text-white '
              >
                Add Payment Card
              </button>
            </div>
          ) : (
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              {(formik) => {
                return (
                  <Form className='  space-y-10 lg:space-y-10  w-72  sm:w-80 md:w-full  md:h-[60vh]'>
                    {/* login */}
                    <div className='bg-white space-y-4 lg:space-y-5 shadow-md pb-4  md:pb-10 '>
                      {/* header */}
                      <div className='bg-softpurple px-3 md:px-5 lg:px-6  py-2'>
                        <h1 className='text-sm text-center font-bold lg:text-base '>
                          Please input your card details
                        </h1>
                      </div>

                      {/* card name and number */}
                      <div className=' md:flex md:justify-between  md:items-start  md:gap-2 md:space-y-0  space-y-4 md:pt-6 lg:px-6  '>
                        {/* cname */}
                        <div className='space-y-2 px-3 md:px-5 lg:px-6   pb-2 lg:pb-3 md:w-1/2 '>
                          <h1 className='text-xs lg:text-sm  '>Card Name</h1>

                          <div>
                            <Field
                              type='text'
                              name='cname'
                              placeholder='Card Name'
                              className=' bg-white border-babyblack border w-full py-2   px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                            />
                            <div className='text-softRed text-xs mt-1 px-4'>
                              <ErrorMessage name='cname' />
                            </div>
                          </div>
                        </div>
                        {/* cnumber */}
                        <div className='space-y-2 px-3 md:px-5 lg:px-6   pb-2 lg:pb-3 md:w-1/2 '>
                          <h1 className='text-xs lg:text-sm  '>Card Number</h1>

                          <div>
                            <Field
                              type='number'
                              name='cnumber'
                              placeholder='Card Number'
                              className=' bg-white border-babyblack border w-full py-2   px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                            />
                            <div className='text-softRed text-xs mt-1 px-4'>
                              <ErrorMessage name='cnumber' />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* cvv and expiry date */}
                      <div className=' md:flex md:justify-between  md:items-start lg:px-6   md:gap-2 md:space-y-0  space-y-4 '>
                        {/* cexpiry */}
                        <div className='space-y-2 px-3 md:px-5 lg:px-6   pb-2 lg:pb-3 md:w-1/2 '>
                          <h1 className='text-xs lg:text-sm  '>
                            Card Expiry Date
                          </h1>

                          <div className=' bg-white border-babyblack border w-full py-1   px-4'>
                            <Field name='cexpiry' className=''>
                              {({ field, form }) => {
                                return (
                                  <DatePicker
                                    className=' outline-none text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm '
                                    id='cexpiry'
                                    {...field}
                                    selected={field.value}
                                    minDate={new Date()}
                                    dateFormat='MM/yyyy'
                                    showMonthYearPicker
                                    onChange={(date) =>
                                      form.setFieldValue(field.name, date)
                                    }
                                  />
                                )
                              }}
                            </Field>
                            <div className='text-softRed text-xs mt-1 px-4'>
                              <ErrorMessage name='cexpiry' />
                            </div>
                          </div>
                        </div>
                        {/* cvv */}
                        <div className='space-y-2 px-3 md:px-5 lg:px-6   pb-2 lg:pb-3 md:w-1/2 '>
                          <h1 className='text-xs lg:text-sm  '>CVV</h1>

                          <div>
                            <Field
                              type='number'
                              name='cvv'
                              placeholder='CVV'
                              className=' bg-white border-babyblack border w-full py-2   px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                            />
                            <div className='text-softRed text-xs mt-1 px-4'>
                              <ErrorMessage name='cvv' />
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
                  </Form>
                )
              }}
            </Formik>
          )}
        </div>
        <Footer />
      </section>
    </>
  )
}

export default Payment

// F4EAF3
