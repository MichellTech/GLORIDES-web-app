import React, { useState } from 'react'
import Image from 'next/image'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { AiFillEyeInvisible } from 'react-icons/ai'
import { AiFillEye } from 'react-icons/ai'
import { ImSpinner } from 'react-icons/im'
import Link from 'next/link'
function Login() {
  const [seepassword, setSeepassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const initialValues = {
    email: '',
    password: '',
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
    onSubmitProps.resetForm()
    console.log(values)
  }
  // validation
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('No email provided')
      .matches(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Kindly input a valid email'
      )
      .required('No email Provided'),
    password: Yup.string().required('No password provided.'),
  })
  return (
    <>
      {/* body */}
      <div className='md:flex  w-full'>
        {/* image */}
        <div className="md:bg-[url('/images/loginphoto.png')] bg-no-repeat bg-top bg-cover hidden  md:w-1/2 lg:w-2/5 h-[100v] bg-none py-6 px-6 lg:px-10 xl:px-16 md:flex flex-col justify-center">
          {/* logo */}
          <Link href='/'>
            <div className='absolute top-6 left-6 lg:left-10 xl:left-16 lg:top-10 max-w-[4rem]  hidden md:flex lg:max-w-[6rem]'>
              <Image
                src={'/images/logo.png'}
                width={200}
                height={200}
                priority={true}
                className=''
                alt='logo'
              />
            </div>
          </Link>
          {/* text */}
          <div className='text-white  space-y-2 lg:space-y-3 xl:space-y-4 '>
            <h1 className='font-mono text-bold text-2xl lg:text-3xl xl:text-4xl'>
              Welcome Back
            </h1>
            <p className='text-xs max-w-xs xl:max-w-sm lg:text-sm xl:text-lg'>
              Please provide your login details to get access to your account on
              our platform
            </p>
          </div>
        </div>
        {/* text */}
        <div className=' md:w-1/2 lg:w-3/5'>
          <div className="bg-[url('/images/loginphoto.png')] bg-no-repeat bg-top bg-cover w-full h-full md:bg-none">
            {/* content */}
            <div className='flex flex-col justify-center items-start min-h-screen md:max-w-xs lg:max-w-sm  xl:max-w-md mx-auto   space-y-10 md:space-y-0 py-10 md:py-2'>
              {/* logo */}

              <div className='relative max-w-[6rem] mx-auto md:hidden'>
                <Link href='/'>
                  <Image
                    src={'/images/logo.png'}
                    width={200}
                    height={200}
                    priority={true}
                    className=''
                    alt='logo'
                  />
                </Link>
              </div>

              {/* header */}
              <div className='space-y-2 md:space-y-3 hidden md:block'>
                <h1 className='text-center mx-auto text-babypurple font-bold text-2xl md:text-3xl lg:text-4xl font-mono md:text-left md:mx-0 '>
                  Login
                </h1>
                <p className='text-xs md:text-sm text-center font-babyblack  mx-auto lg:text-base md:text-left md:mx-auto '>
                  We are glad to have you back on our platform
                </p>
              </div>
              {/*form */}
              <div className=' w-[70vw] sm:w-[60vw] md:w-full bg-white px-6 py-6 rounded-md md:px-0  mx-auto'>
                {/* header */}
                <div className='space-y-2 md:space-y-3 md:hidden'>
                  <h1 className='text-center mx-auto text-babypurple font-bold text-2xl md:text-4xl font-mono'>
                    Login
                  </h1>
                  <p className='text-xs md:text-sm text-center font-babyblack max-w-xs mx-auto'>
                    We are glad to have you back on our platform
                  </p>
                </div>
                <Formik
                  initialValues={initialValues}
                  onSubmit={onSubmit}
                  validationSchema={validationSchema}
                >
                  {(formik) => {
                    return (
                      <Form className='  text-babyblack space-y-10 font-sans w-full  md:flex md:justify-center md:flex-col md:mx-auto px-6 py-8 md:px-0 '>
                        <div className=' space-y-6 md:space-y-10'>
                          {/* email */}
                          <div>
                            <Field
                              type='email'
                              name='email'
                              placeholder='Email'
                              className=' bg-white border-babyblack border w-full py-2 lg:py-3 px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base'
                            />
                            <div className='text-softRed text-xs mt-1 px-4'>
                              <ErrorMessage name='email' />
                            </div>
                          </div>
                          {/* paswoord */}
                          <div>
                            <div className='flex  relative justify-between items-center w-full'>
                              <Field
                                type={seepassword ? 'text ' : 'password'}
                                name='password'
                                placeholder='Password'
                                className=' bg-white border-babyblack border w-full py-2 px-4 outline-babypurple lg:py-3 text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base'
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
                            <div className=' flex justify-end'>
                              <Link href='/forgotpassword'>
                                <h1 className='text-xs font-bold text-left'>
                                  Forgot Password ?
                                </h1>
                              </Link>
                            </div>
                          </div>
                        </div>

                        <button
                          type='submit'
                          className='bg-babypurple text-white px-4 py-2 lg:py-3   rounded-md w-full font-medium text-base lg:text-lg '
                        >
                          {loading ? (
                            <div className='flex justify-center gap-2 items-center'>
                              <ImSpinner className='animate-spin' />
                              Verifying...
                            </div>
                          ) : (
                            'Login'
                          )}
                        </button>
                      </Form>
                    )
                  }}
                </Formik>
              </div>
              {/* link to signup */}
              <h1 className='text-center  text-xs  text-white tracking-wider md:text-babyblack mx-auto'>
                Don't have an account with us ?{' '}
                <Link href='/signup'>
                  <span className='underline font-bold'> Register</span>{' '}
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
