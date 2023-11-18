import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Forgotpasswordemailverification() {
  const [newloader, setNewloader] = useState(false)
  const [newRequest, setNewRequest] = useState(false)
  const [minutes, setMinutes] = useState(1)
  const [seconds, setSeconds] = useState(0)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { userEmail } = router.query
  const initialValues = {
    otp: '',
    newpassword: '',
    cnewpassword: '',
  }

  const onSubmit = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(false)
    setLoading(true)
    const payload = {
      email: userEmail,
      newPassword: values.newpassword,
      otp: values.otp,
    }
    resetpasswordapi(payload)
  }

  // validation
  const validationSchema = Yup.object().shape({
    otp: Yup.string()
      .trim('The verification code cannot include leading and trailing spaces')
      .required('Please input the verification code sent'),
    newpassword: Yup.string()
      .min(8, 'password must contain 8 or more characters')
      .test(
        'isValidPass',
        ' Password must have an Uppercase, Number and Lowercase',
        (value, context) => {
          const hasUpperCase = /[A-Z]/.test(value)
          const hasLowerCase = /[a-z]/.test(value)
          const hasNumber = /[0-9]/.test(value)
          let validConditions = 0
          const numberOfMustBeValidConditions = 3
          const conditions = [hasLowerCase, hasUpperCase, hasNumber]
          conditions.forEach((condition) =>
            condition ? validConditions++ : null
          )
          if (validConditions >= numberOfMustBeValidConditions) {
            return true
          }
          return false
        }
      )
      .required('No password provided.'),
    cnewpassword: Yup.string()
      .oneOf([Yup.ref('newpassword'), ''], 'Passwords must match')
      .required('Required'),
  })

  const resetpasswordapi = (payload) => {
    console.log(payload)
    axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/user/reset-password`, payload)
      .then(function (response) {
        console.log(response)
        setLoading(false)
        router.push({
          pathname: '/Auth/login',
        })
        toast.success(response.data.message)
      })
      .catch(function (error) {
        setLoading(false)
        toast.error(error.response.data.message)
        console.log(error)
      })
  }

  const handleresend = () => {
    setNewloader(true)
    axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/user/forgot-password`, {
        email: userEmail,
      })
      .then(function (response) {
        console.log(response.data)
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
                Password Update
              </h1>
              <p className='text-xs text-center  mx-auto  max-w-xs lg:text-sm lg:max-w-md'>
                Please provide the 4 digit code that was sent to your email
                address and provide a new password
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
                    <div className=' space-y-6 md:space-y-8'>
                      {/* verificationcode */}
                      <div className=' space-y-1 lg:space-y-2'>
                        <label htmlFor='' className='text-xs lg:text-sm'>
                          OTP
                        </label>
                        <div className='flex  relative justify-between items-center w-full'>
                          <Field
                            type='number'
                            name='otp'
                            placeholder='Enter verification code'
                            className=' bg-white border-babyblack border w-full py-3 px-4 outline-babypurple  text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                          />
                        </div>
                        <div className='text-softRed text-xs mt-1 px-4'>
                          <ErrorMessage name='otp' />
                        </div>
                        {/* remember me and forgot password */}
                      </div>
                      {/* password */}
                      <div className=' space-y-1 lg:space-y-2'>
                        <label htmlFor='' className='text-xs lg:text-sm'>
                          New Password
                        </label>
                        <div className='flex  relative justify-between items-center w-full'>
                          <Field
                            type='text'
                            name='newpassword'
                            placeholder='Enter new password '
                            className=' bg-white border-babyblack border w-full py-3 px-4 outline-babypurple  text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                          />
                        </div>
                        <div className='text-softRed text-xs mt-1 px-4'>
                          <ErrorMessage name='newpassword' />
                        </div>
                        {/* remember me and forgot password */}
                      </div>
                      {/* cnewpassword */}
                      <div className=' space-y-1 lg:space-y-2'>
                        <label htmlFor='' className='text-xs lg:text-sm'>
                          Confirm New Password
                        </label>
                        <div className='flex  relative justify-between items-center w-full'>
                          <Field
                            type='text'
                            name='cnewpassword'
                            placeholder='Confirm New Password'
                            className=' bg-white border-babyblack border w-full py-3 px-4 outline-babypurple  text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                          />
                        </div>
                        <div className='text-softRed text-xs mt-1 px-4'>
                          <ErrorMessage name='cnewpassword' />
                        </div>
                      </div>
                    </div>

                    <button
                      type='submit'
                      className='bg-babypurple text-white px-4 py-3   rounded-md w-full  text-base lg:text-lg '
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

export default Forgotpasswordemailverification
