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
import Profilecomp from '@/components/Profilecomp'
import Profilecompbig from '@/components/Profilecompbig'
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
        <div className=' px-6   space-y-10  md:w-3/4  md:absolute md:top-32 md:right-0 pb-20 min-h-[70vh]  '>
          {/* form */}
          {!cardexists ? (
            <div className='bg-white shadow-md h-[50vh] md:h-[60vh] w-full  flex flex-col justify-center items-center px-6 py-4 mx-auto space-y-6 '>
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
                  <Form className='  space-y-10 lg:space-y-14 w-full overflow-x-hidden '>
                    {/* login */}
                    <div className='bg-white space-y-4 lg:space-y-6 shadow-md rounded-md border py-4 px-6  '>
                      {/* header */}
                      <div className='border-b   pb-4 '>
                        <h1 className='text-lg font-bold lg:text-xl '>
                          Please input your card details
                        </h1>
                      </div>

                      {/* card name and number */}
                      <div className=' md:flex md:justify-between md:items-center md:gap-4  lg:gap-10 xl:gap-14  md:space-y-0  space-y-4 '>
                        {/* cname */}
                        <div className='space-y-3  pb-2 lg:pb-3 md:w-1/2'>
                          <h1 className='text-xs text-slate-500  lg:text-sm'>
                            Card Name
                          </h1>

                          <div>
                            <Field
                              type='text'
                              name='cname'
                              placeholder='Card Name'
                              className='border w-full py-2  px-4  text-xs placeholder:text-xs bg-opacity-30 md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm bg-white      outline-babypurple'
                            />
                            <div className='text-softRed text-xs mt-1 px-4'>
                              <ErrorMessage name='cname' />
                            </div>
                          </div>
                        </div>
                        {/* cnumber */}
                        <div className='space-y-3  pb-2 lg:pb-3 md:w-1/2 '>
                          <h1 className='text-xs text-slate-500  lg:text-sm '>
                            Card Number
                          </h1>

                          <div>
                            <Field
                              type='number'
                              name='cnumber'
                              placeholder='Card Number'
                              className='border w-full py-2  px-4  text-xs placeholder:text-xs bg-opacity-30 md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm bg-white      outline-babypurple'
                            />
                            <div className='text-softRed text-xs mt-1 px-4'>
                              <ErrorMessage name='cnumber' />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* cvv and expiry date */}
                      <div className='md:flex md:justify-between md:items-center md:gap-4  lg:gap-10 xl:gap-14  md:space-y-0  space-y-4  md:flex-row-reverse  '>
                        {/* cexpiry */}
                        <div className='space-y-3  pb-2 lg:pb-3 md:w-1/2'>
                          <h1 className='text-xs text-slate-500  lg:text-sm '>
                            Card Expiry Date
                          </h1>

                          <div className=' '>
                            <Field name='cexpiry' className=''>
                              {({ field, form }) => {
                                return (
                                  <DatePicker
                                    className=' border w-full py-2  px-4  text-xs placeholder:text-xs bg-opacity-30 md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm bg-white      outline-babypurple '
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
                        <div className='space-y-3  pb-2 lg:pb-3 md:w-1/2 '>
                          <h1 className='text-xs text-slate-500  lg:text-sm '>
                            CVV
                          </h1>

                          <div>
                            <Field
                              type='number'
                              name='cvv'
                              placeholder='CVV'
                              className=' border w-full py-2  px-4  text-xs placeholder:text-xs bg-opacity-30 md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm bg-white      outline-babypurple'
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
                      className='bg-babypurple text-white px-6 py-2 lg:py-3   rounded-md flex justify-center items-center mx-auto text-sm md:w-full max-w-xs shadow-md'
                    >
                      {loading ? (
                        <div className='flex justify-center gap-2 items-center  '>
                          <div className='spinner'></div>
                          Saving...
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
      </div>
    </>
  )
}

export default Payment

// F4EAF3
