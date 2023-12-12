import React, { useEffect, useState } from 'react'
import Navbar from '@/components/Navigation/Navbar/index'
import Image from 'next/image'
import Profilenavsmall from '../../components/Profilenavsmall'
import Profilenavbig from '../../components/Profilenavbig'
import Link from 'next/link'
import { FiUserPlus } from 'react-icons/fi'
import { BiUser } from 'react-icons/bi'
import { MdOutlinePassword } from 'react-icons/md'
import Footer from '@/components/Navigation/Footer'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import mainAxiosAction from '@/components/axiosAction'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function Pin() {
  const [loading, setLoading] = useState(false)
  const [pinexist, setPinexist] = useState(false)
  const [resetpin, setResetpin] = useState(false)

  const initialValues = {
    password: '',
    npin: '',
    cpin: '',
  }

  const onSubmit = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(false)
    setLoading(true)

    if (resetpin) {
      changepin(values, onSubmitProps.resetForm())
    }
    if (!resetpin) {
      addpin(values.npin, onSubmitProps.resetForm())
    }
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
    npin: Yup.string()
      .max(4, 'pin cannot be more than 4 numbers')
      .min(4, 'pin cannot be more than 4 numbers')
      .required('No pin provided.'),
    cpin: Yup.string()
      .oneOf([Yup.ref('npin'), ''], 'Pin must match')
      .required('Required'),
  })

  const getpin = () => {
    mainAxiosAction
      .post(`/account/get-withdraw-pin`, {})
      .then(function (response) {
        setLoading(false)
        if (response.data.message === 'No pin available') {
          return setPinexist(false)
        }
        setPinexist(true)
        console.log(true)
      })
      .catch(function (error) {
        setLoading(false)
        console.log(error)
      })
  }

  const addpin = (values, callback) => {
    mainAxiosAction
      .post(`/account/add-withdraw-pin`, {
        pin: values,
      })
      .then(function (response) {
        setLoading(false)
        setPinexist(true)
        toast.success(response?.data?.message)
        callback()
      })
      .catch(function (error) {
        setLoading(false)
        console.log(error)
      })
  }

  const changepin = (values, callback) => {
    mainAxiosAction
      .post(`/account/reset-pin`, {
        password: values.password,
        pin: values.npin,
      })
      .then(function (response) {
        setLoading(false)
        setPinexist(true)
        toast.success(response?.data?.message)
        setResetpin(false)
        callback()
      })
      .catch(function (error) {
        setLoading(false)
        console.log(error)
      })
  }

  useEffect(() => {
    getpin()
  }, [])

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
        <div className=' px-6   space-y-10  md:w-3/4  md:absolute md:top-32 md:right-0 pb-20 min-h-[70vh]  '>
          {/* form */}
          {!pinexist ? (
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              {(formik) => {
                return (
                  <Form className='  space-y-10 lg:space-y-14 w-full overflow-x-hidden'>
                    {/* pin */}
                    <div className='bg-white space-y-4 lg:space-y-6 shadow-md rounded-md border py-4 px-6  '>
                      {/* header */}
                      <div className='border-b   pb-4 '>
                        <h1 className='text-lg font-bold lg:text-xl  '>
                          Withdrawal Pin
                        </h1>
                      </div>
                      {/* password for reset */}
                      {resetpin && (
                        <div className='space-y-3  pb-2 lg:pb-3 md:w-full'>
                          <h1 className='text-xs text-slate-500  lg:text-sm '>
                            Login Password
                          </h1>

                          <div>
                            <Field
                              type='password'
                              name='password'
                              placeholder='Login password'
                              className=' border w-full py-2  px-4  text-xs placeholder:text-xs bg-opacity-30 md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm bg-white      outline-babypurple'
                            />
                            {/* <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='npin' />
                          </div> */}
                          </div>
                        </div>
                      )}
                      {/* old pin and new pin */}
                      <div className=' md:flex md:justify-between md:items-start md:gap-4  lg:gap-10 xl:gap-14  md:space-y-0  space-y-4  '>
                        {/* new  pin */}
                        <div className='space-y-3  pb-2 lg:pb-3 md:w-1/2'>
                          <h1 className='text-xs text-slate-500  lg:text-sm '>
                            New Pin
                          </h1>

                          <div>
                            <Field
                              type='password'
                              name='npin'
                              placeholder='New Pin'
                              className=' border w-full py-2  px-4  text-xs placeholder:text-xs bg-opacity-30 md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm bg-white      outline-babypurple'
                            />
                            <div className='text-softRed text-xs mt-1 px-4'>
                              <ErrorMessage name='npin' />
                            </div>
                          </div>
                        </div>
                        {/* confirmd pin */}
                        <div className=' space-y-3  pb-2 lg:pb-3 md:w-1/2  '>
                          <h1 className='text-xs text-slate-500  lg:text-sm '>
                            Confirm Pin
                          </h1>

                          <div>
                            <Field
                              type='password'
                              name='cpin'
                              placeholder='Confirm New Pin'
                              className=' border w-full py-2  px-4  text-xs placeholder:text-xs bg-opacity-30 md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm bg-white      outline-babypurple'
                            />
                            <div className='text-softRed text-xs mt-1 px-4'>
                              <ErrorMessage name='cpin' />
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
                          updating...
                        </div>
                      ) : (
                        'Update Pin'
                      )}
                    </button>
                  </Form>
                )
              }}
            </Formik>
          ) : (
            <div className='bg-white shadow-md h-[50vh] md:h-[60vh] w-full  flex flex-col justify-center items-center px-6 py-4 mx-auto space-y-6 '>
              <div className='bg-babygrey flex justify-center items-center p-4 rounded-full '>
                <MdOutlinePassword className='text-2xl lg:text-3xl' />
              </div>
              <h1 className='text-center lg:text-sm text-xs sm:max-w-xs lg:max-w-md'>
                {' '}
                Great news! 🎉 Your withdrawal PIN has been successfully set.
                You're all set to enjoy a seamless experience with our car
                rental services. You can now approve all your withdrawals
                safely. Thank you for choosing GLORIDE car rental company!{' '}
              </h1>
              <button
                onClick={() => {
                  setResetpin(true), setPinexist(false)
                }}
                className='bg-babypurple px-6 py-2 rounded-md text-xs lg:text-sm text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 hover:border-none hover:text-white '
              >
                Reset pin
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Pin

// F4EAF3

// F4EAF3
