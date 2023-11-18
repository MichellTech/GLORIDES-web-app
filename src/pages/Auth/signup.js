import React, { useState } from 'react'
import Image from 'next/image'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { AiFillEyeInvisible } from 'react-icons/ai'
import { AiFillEye } from 'react-icons/ai'
import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Signup() {
  const [seepassword, setSeepassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    cpassword: '',
  }

  const onSubmit = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(false)
    setLoading(true)
    signupapi(values)

    // reset
    // onSubmitProps.resetForm()
  }
  // validation
  const validationSchema = Yup.object().shape({
    firstname: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('No first name provided'),
    lastname: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('No last name provided'),
    email: Yup.string()
      .email('No email provided')
      .matches(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Kindly input a valid email'
      )
      .required('No email Provided'),
    password: Yup.string()
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
    cpassword: Yup.string()
      .oneOf([Yup.ref('password'), ''], 'Passwords must match')
      .required('Required'),
  })

  const signupapi = (values) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/user/signup`, values)
      .then(function (response) {
        setLoading(false)
        localStorage.setItem(
          'User_Token',
          JSON.stringify(response.data.user.token)
        )
        router.push({
          pathname: '/Auth/emailverification',
          query: { userEmail: response.data.user.email },
        })

        console.log(response)
      })
      .catch(function (error) {
        toast.error(error?.response?.data?.message)
        setLoading(false)
        console.log(error)
      })
  }
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
                Create an Account
              </h1>
              <p className='text-xs text-center  mx-auto  max-w-xs lg:text-sm lg:max-w-md'>
                Please provide the following details in order to begin your
                journey with us
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
                      {/* firstnmae */}
                      <div className=' space-y-1 lg:space-y-2'>
                        <label htmlFor='' className='text-xs lg:text-sm'>
                          First Name
                        </label>
                        <Field
                          type='text'
                          name='firstname'
                          placeholder='First Name'
                          className=' bg-white border-babyblack border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                        />
                        <div className='text-softRed text-xs mt-1 px-4'>
                          <ErrorMessage name='firstname' />
                        </div>
                      </div>
                      {/* lastnmae */}
                      <div className=' space-y-1 lg:space-y-2'>
                        <label htmlFor='' className='text-xs lg:text-sm'>
                          Last Name
                        </label>
                        <Field
                          type='text'
                          name='lastname'
                          placeholder='Last Name'
                          className=' bg-white border-babyblack border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                        />
                        <div className='text-softRed text-xs mt-1 px-4'>
                          <ErrorMessage name='lastname' />
                        </div>
                      </div>
                      {/* email */}
                      <div className=' space-y-1 lg:space-y-2'>
                        <label htmlFor='' className='text-xs lg:text-sm'>
                          Email
                        </label>
                        <Field
                          type='email'
                          name='email'
                          placeholder='Email'
                          className=' bg-white border-babyblack border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                        />
                        <div className='text-softRed text-xs mt-1 px-4'>
                          <ErrorMessage name='email' />
                        </div>
                      </div>
                      {/* paswoord */}
                      <div className=' space-y-1 lg:space-y-2'>
                        <label htmlFor='' className='text-xs lg:text-sm'>
                          Password
                        </label>
                        <div className='flex  relative justify-between items-center w-full'>
                          <Field
                            type={seepassword ? 'text ' : 'password'}
                            name='password'
                            placeholder='Password'
                            className=' bg-white border-babyblack border w-full py-3 px-4 outline-babypurple  text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                          />
                          {seepassword ? (
                            <AiFillEye
                              className='absolute right-4 cursor-pointer'
                              onClick={() => setSeepassword(!seepassword)}
                            />
                          ) : (
                            <AiFillEyeInvisible
                              className='absolute right-4 cursor-pointer'
                              onClick={() => setSeepassword(!seepassword)}
                            />
                          )}
                        </div>
                        <div className='text-softRed text-xs mt-1 px-4'>
                          <ErrorMessage name='password' />
                        </div>
                        {/* remember me and forgot password */}
                      </div>
                      {/* cpaswoord */}
                      <div className=' space-y-1 lg:space-y-2'>
                        <label htmlFor='' className='text-xs lg:text-sm'>
                          Confirm Password
                        </label>
                        <div className='flex  relative justify-between items-center w-full'>
                          <Field
                            type={seepassword ? 'text ' : 'password'}
                            name='cpassword'
                            placeholder='Confirm Password'
                            className=' bg-white border-babyblack border w-full py-3 px-4 outline-babypurple  text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                          />
                          {seepassword ? (
                            <AiFillEye
                              className='absolute right-4 cursor-pointer'
                              onClick={() => setSeepassword(!seepassword)}
                            />
                          ) : (
                            <AiFillEyeInvisible
                              className='absolute right-4 cursor-pointer'
                              onClick={() => setSeepassword(!seepassword)}
                            />
                          )}
                        </div>
                        <div className='text-softRed text-xs mt-1 px-4'>
                          <ErrorMessage name='cpassword' />
                        </div>
                        {/* remember me and forgot password */}
                      </div>
                    </div>

                    <button
                      type='submit'
                      className='bg-babypurple text-white px-4 py-3 shadow-xl   rounded-md w-full  text-base lg:text-lg '
                    >
                      {loading ? (
                        <div className='flex justify-center gap-2 items-center '>
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
            <Link href='/Auth/login'>
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

export default Signup
