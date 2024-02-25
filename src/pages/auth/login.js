import React, { useState } from 'react'
import Image from 'next/image'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { AiFillEyeInvisible } from 'react-icons/ai'
import { AiFillEye } from 'react-icons/ai'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import mainAxiosAction from '@/components/axiosAction'
import { useSelector, useDispatch } from 'react-redux'
import {
  logIN,
  getuserprofile,
  getusernotifications,
} from '@/features/userpersona/userSlice'

function Login() {
  const [seepassword, setSeepassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const dispatch = useDispatch()
  //  const {
  //    isUserLogedin,
  //  } = useSelector((store) => store.userpersona)
  const initialValues = {
    email: '',
    password: '',
  }

  const onSubmit = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(false)
    setLoading(true)
    loginapi(values)

    // reset
    // onSubmitProps.resetForm()
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

  const loginapi = (values) => {
    mainAxiosAction
      .post(`/user/login`, values)
      .then(function (response) {
        if (response?.data?.user?.isVerified === false) {
          setLoading(false)
          router.push({
            pathname: '/auth/emailverification',
            query: { userEmail: response?.data?.user?.email },
          })
        } else if (response.data.user.isCompleted === false) {
          localStorage.setItem(
            'User_Token',
            JSON.stringify(response?.data?.user?.token)
          )
          router.push({
            pathname: '/auth/completeregistration',
          })
        } else {
          setLoading(false)
          toast.success(response?.data?.message)
          dispatch(logIN())
          dispatch(getuserprofile())
          dispatch(getusernotifications())
          localStorage.setItem(
            'User_Token',
            JSON.stringify(response?.data?.user?.token)
          )
          // localStorage.setItem('User_Exist', JSON.stringify(true))
          if (response?.data?.user?.type === 'business') {
            router.push({
              pathname: '/host/dashboard',
            })
          } else {
            router.push({
              pathname: '/',
            })
          }
        }
      })
      .catch(function (error) {
        setLoading(false)
        toast.error(error?.response?.data?.message)

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
                Signin to your Account
              </h1>
              <p className='text-xs text-center  mx-auto  max-w-xs lg:text-sm lg:max-w-md'>
                Please provide your login details to get access to your account
                on our platform
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
                      {/* email */}
                      <div>
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
                      <div>
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
                        <div className=' flex justify-end'>
                          <Link href='/auth/forgotpassword'>
                            <h1 className='text-xs font-bold text-left'>
                              Forgot Password ?
                            </h1>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <button
                      disabled={loading}
                      type='submit'
                      className='bg-babypurple text-white px-4 py-3   rounded-md w-full  text-base lg:text-lg   shadow-xl'
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
            Dont have an account?{' '}
            <Link href='/auth/signup'>
              <span className='underline font-bold tracking-wider cursor-pointer'>
                {' '}
                Register
              </span>
            </Link>{' '}
          </h1>
        </div>
      </section>
    </>
  )
}

export default Login

// select {
// -webkit-appearance: none;
// -moz-appearance: none;
// }
