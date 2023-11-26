import React, { useEffect, useState } from 'react'
import Navbar from '@/components/Navigation/Navbar/index'
import Image from 'next/image'
import { CiCreditCardOff } from 'react-icons/ci'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Profilenavsmall from '../../components/Profile/Profilenavsmall'
import Profilenavbig from '../../components/Profile/Profilenavbig'
import creditCardType, {
  getTypeInfo,
  types as CardType,
} from 'credit-card-type'
import mainAxiosAction from '@/components/axiosAction'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { MdOutlineDeleteOutline } from 'react-icons/md'
import moment from 'moment'
import Loader from '../../components/Loaders/paymentcardloader'

function Payment() {
  const [loading, setLoading] = useState(true)
  const [loadingnew, setLoadingnew] = useState(false)
  const [cardexists, setCardexists] = useState(0)
  const [userdetails, setUserdetails] = useState(null)
  const initialValues = {
    cname: '',
    cnumber: '',
    cexpiry: new Date(),
    cvv: '',
  }

  const onSubmit = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(false)
    setLoadingnew(true)
    const payload = {
      cvv: values.cvv,
      card_name: values.cname,
      card_expiry: values.cexpiry.toISOString(),
      card_number: values.cnumber,
    }
    postcarddetails(payload, onSubmitProps.resetForm)
  }

  // credittype
  const cardtypecheck = (string) => {
    if (string?.trim?.()?.length >= 12) {
      const type = creditCardType?.(string)?.[0]?.type

      return type
    }
  }
  // validation
  const validationSchema = Yup.object().shape({
    cname: Yup.string().required('No Card Name provided'),
    cnumber: Yup.string().required('No Card Number provided'),
    cexpiry: Yup.date().required('No card expiry date provided'),
    cvv: Yup.string().required('No CVV provided'),
  })
  const getusercard = () => {
    mainAxiosAction
      .post(`/payment/get-cards`, {})
      .then(function (response) {
        setLoading(false)
        // toast.success(response?.data?.message)
        setCardexists(2)
        setUserdetails(response?.data?.card_details)
      })
      .catch(function (error) {
        if (error?.response?.data?.message === 'Cards not found') {
          setCardexists(0)
        }

        setLoading(false)
        console.log(error)
      })
  }
  const postcarddetails = (payload, callback) => {
    setLoadingnew(true)
    mainAxiosAction
      .post(`/payment/add-cards`, payload)
      .then(function (response) {
        setLoadingnew(false)
        toast.success(response?.data?.message)
        setCardexists(2)
        callback()
        getusercard()
      })
      .catch(function (error) {
        toast.error(error?.response?.data?.message)
        setLoadingnew(false)
        console.log(error)
      })
  }
  useEffect(() => {
    getusercard()
  }, [])
  // 5061240202044217007

  const handledelete = () => {
    mainAxiosAction
      .post(`/payment/delete-cards`, {})
      .then(function (response) {
        setLoading(false)
        toast.success(response?.data?.message)
        setCardexists(0)
        setUserdetails(null)
      })
      .catch(function (error) {
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
        {loading ? (
          <div className='px-6   space-y-10  md:w-3/4  md:absolute md:top-32 md:right-0 pb-20 min-h-[70vh] '>
            <Loader />
          </div>
        ) : (
          <div className=' px-6   space-y-10  md:w-3/4  md:absolute md:top-32 md:right-0 pb-20 min-h-[70vh]  '>
            {/* form */}
            {cardexists === 0 ? (
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
                  onClick={() => setCardexists(1)}
                  className='bg-babypurple px-6 py-2 rounded-md text-xs lg:text-sm text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 hover:border-none hover:text-white '
                >
                  Add Payment Card
                </button>
              </div>
            ) : cardexists === 1 ? (
              <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
                enableReinitialize
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
                        <div className='md:flex md:justify-center md:items-start md:gap-4  lg:gap-10 xl:gap-14  md:space-y-0  space-y-4  md:flex-row-reverse  '>
                          {/* card tyoe */}
                          {formik?.values?.cnumber?.toString?.()?.trim?.()
                            ?.length >= 3 && (
                            <div className='space-y-3  pb-2 lg:pb-3 md:w-full'>
                              <h1 className='text-xs text-slate-500  lg:text-sm '>
                                Card Type
                              </h1>
                              {formik?.values?.cnumber &&
                              formik?.values?.cnumber?.toString?.()?.trim?.()
                                ?.length >= 12 ? (
                                <div className='bg-babypurple px-6 py-2 text-white text-center rounded-sm shadow-lg'>
                                  <h1>
                                    {cardtypecheck(
                                      formik?.values?.cnumber?.toString?.()
                                    )}
                                  </h1>
                                </div>
                              ) : formik?.values?.cnumber
                                  ?.toString?.()
                                  ?.trim?.()?.length <= 2 ? null : (
                                <div className='bg-babypurple px-6 py-2 text-white text-center rounded-sm shadow-lg'>
                                  <div className='spinner'></div>
                                </div>
                              )}
                            </div>
                          )}

                          {/* cexpiry */}
                          <div className='space-y-3  pb-2 lg:pb-3 md:w-full'>
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
                          <div className='space-y-3  pb-2 lg:pb-3 md:w-full '>
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
                        disabled={loadingnew}
                        type='submit'
                        className='bg-babypurple text-white px-6 py-2 lg:py-3   rounded-md flex justify-center items-center mx-auto text-sm md:w-full max-w-xs shadow-md'
                      >
                        {loadingnew ? (
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
            ) : (
              <div className='bg-white shadow-md h-[50vh] md:h-[60vh] w-full  flex flex-col justify-start items-start px-6 py-4 mx-auto space-y-6 '>
                <div className='  rounded-lg border px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white space-y-4 '>
                  <div className='flex justify-end'>
                    <MdOutlineDeleteOutline
                      onClick={() => handledelete()}
                      className='text-white text-lg lg:text-2xl cursor-pointer'
                    />
                  </div>
                  <div className='space-y-2 lg:space-y-4'>
                    <h1 className='text-xs md:text-sm xl:text-base'>
                      {userdetails?.card_name}
                    </h1>
                    <h1 className='text-lg lg:text-2xl font-bold'>
                      {userdetails?.card_number}
                    </h1>
                    <div className='flex justify-between items-center gap-2'>
                      <h1 className='text-xs md:text-sm xl:text-base'>
                        {' '}
                        {userdetails?.cvv}
                      </h1>
                      <h1 className='text-xs md:text-sm xl:text-base'>
                        {' '}
                        {moment(userdetails?.card_expiry).format('MM / YY')}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default Payment

// F4EAF3
