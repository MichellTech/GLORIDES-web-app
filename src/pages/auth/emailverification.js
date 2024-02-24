import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import mainAxiosAction from '@/components/axiosAction'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch } from 'react-redux'
import { logOut } from '@/features/userpersona/userSlice'

function Emailverification() {
  const [loading, setLoading] = useState(false)
  const [newloader, setNewloader] = useState(false)
  const [newRequest, setNewRequest] = useState(false)
  const [minutes, setMinutes] = useState(1)
  const [seconds, setSeconds] = useState(0)
  const initialValues = {
    verificationcode: '',
  }
  const router = useRouter()
  const dispatch = useDispatch()
  const { userEmail } = router.query

  const onSubmit = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(false)
    setLoading(true)
    const payload = {
      otp: values.verificationcode,
      email: userEmail,
    }
    emailauthenticateapi(payload)

    // reset
    // onSubmitProps.resetForm()
    // router.push({
    //   pathname: '/Auth/completeregistration',
    //   //  query: response.data.data.user,
    // })
  }

  // validation
  const validationSchema = Yup.object().shape({
    verificationcode: Yup.string()
      .trim('The verification code cannot include leading and trailing spaces')
      .required('Please input the verification code sent'),
  })

  const emailauthenticateapi = (payload) => {
    mainAxiosAction
      .post(`/otp/verify`, payload)
      .then(function (response) {
        setLoading(false)
        router.push({
          pathname: '/auth/completeregistration',
        })
        toast.success(response.data.message)
      })
      .catch(function (error) {
        if (error.response.message === 'OTP Expired. Request for a new one') {
          toast.warning(error.response.data.message)
          setNewRequest(true)
        }
        toast.error(error.response.data.message)
        setLoading(false)
        console.log(error)
      })
  }

  const handlenewrequest = () => {
    setLoading(true)
    mainAxiosAction
      .post(`/otp/request-new`, {
        email: userEmail,
      })
      .then(function (response) {
        setNewRequest(false)
        setLoading(false)
      })
      .catch(function (error) {
        toast.error(error.response.data.message)
        setLoading(false)
        console.log(error)
      })
  }

  const handleresend = () => {
    setNewloader(true)
    mainAxiosAction
      .post(`/otp/resend`, {
        email: userEmail,
      })
      .then(function (response) {
        setNewloader(false)
        toast.success(response.data.message)
        setMinutes(1)
      })
      .catch(function (error) {
        toast.error(error.response.data.message)
        setNewloader(false)
        console.log(error)
      })
  }
  // timer

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1)
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval)
        } else {
          setMinutes(minutes - 1)
          setSeconds(59)
        }
      }
    }, 1000)
    return () => {
      clearInterval(myInterval)
    }
  })
  return (
    <>
      <section className='min-h-screen flex-col flex justify-center items-center backedground py-10 lg:py-14'>
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
                Email Verification
              </h1>
              <p className='text-xs text-center  mx-auto  max-w-xs lg:text-sm lg:max-w-md'>
                {newRequest
                  ? ' OTP has expired, please request for a new OTP'
                  : 'Please provide the 4 digit code that was sent to your email address'}
              </p>
            </div>
            {/* form */}
            {!newRequest && (
              <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
              >
                {(formik) => {
                  return (
                    <Form className='  text-babyblack space-y-10 font-sans px-6 py-8 md:px-0 '>
                      <div className=' space-y-6 md:space-y-8'>
                        {/* verificationcode */}
                        <div>
                          <div className='flex  relative justify-between items-center w-full'>
                            <Field
                              type='number'
                              name='verificationcode'
                              placeholder='Enter verification code'
                              className=' bg-white border-babyblack border w-full py-3 px-4 outline-babypurple  text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm text-center'
                            />
                          </div>
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='verificationcode' />
                          </div>
                          {/* remember me and forgot password */}
                        </div>
                      </div>

                      <button
                        type='submit'
                        className='bg-babypurple text-white px-4 py-3   rounded-md w-full  text-base lg:text-lg shadow-lg '
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
            )}
            {newRequest && (
              <div className='px-6 py-4 '>
                <button
                  onClick={() => handlenewrequest()}
                  className='bg-babypurple text-white px-4 py-3   rounded-md w-full  text-sm lg:text-base shadow-lg '
                >
                  {loading ? (
                    <div className='flex justify-center gap-2 items-center'>
                      <div className='spinner'></div>
                      Requesting...
                    </div>
                  ) : (
                    'Request for new OTP'
                  )}
                </button>
              </div>
            )}
          </div>
          <div className='text-center  text-xs sm:text-sm lg:text-base  text-white'>
            <h1>
              Not you ?{' '}
              <button
                onClick={() => {
                  dispatch(logOut()),
                    router.push({
                      pathname: '/auth/login',
                    })
                }}
                className='underline'
              >
                {' '}
                logout
              </button>
            </h1>
          </div>
          {/* link to signup */}
          <div className='text-center  text-xs sm:text-sm lg:text-base  text-white font-sans  mx-auto'>
            <p>
              {' '}
              Didn't get the code ? Please check your spam mails before
              requesting for a new code
            </p>{' '}
            {minutes === 0 && seconds === 0 ? (
              <button
                disabled={newloader}
                onClick={() => handleresend()}
                className={`${
                  newloader
                    ? '  tracking-wider '
                    : 'underline font-bold tracking-wider cursor-pointer'
                }`}
              >
                {' '}
                {newloader ? 'Sending....' : 'Resend'}
              </button>
            ) : (
              <p className='text-white'>
                {' '}
                you have to wait for {minutes}:
                {seconds < 10 ? `0${seconds}` : seconds} to make a new request
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default Emailverification
