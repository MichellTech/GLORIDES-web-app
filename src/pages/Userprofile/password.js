import React, { useState } from 'react'
import Navbar from '@/components/Navigation/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import { FiUserPlus } from 'react-icons/fi'
import { BiUser } from 'react-icons/bi'
import { MdOutlinePayments } from 'react-icons/md'
import Footer from '@/components/Navigation/Footer'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { ImSpinner } from 'react-icons/im'

function Password() {
  const [loading, setLoading] = useState(false)

  const initialValues = {
    opassword: 'MichellOkwu007',
    npassword: '',
    cpassword: '',
    opin: '1234',
    npin: '',
    cpin: '',
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
    npassword: Yup.string()
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
      .oneOf([Yup.ref('npassword'), ''], 'Passwords must match')
      .required('Required'),
    npin: Yup.string()
      .min(8, 'pin must contain 8 or more characters')
      .test(
        'isValidPass',
        ' Pin must have an Uppercase, Number and Lowercase',
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
      .required('No pin provided.'),
    cpin: Yup.string()
      .oneOf([Yup.ref('npin'), ''], 'Pin must match')
      .required('Required'),
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
                <Link href='/Userprofile/payment' className=' '>
                  <div className='flex  justify-center items-center gap-3 border-babypurple border  px-4 py-2 text-babyblack rounded transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-babypurple duration-300 hover:border-none hover:text-white  '>
                    <MdOutlinePayments className='' />
                    <h1 className='text-xs '>Payment</h1>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* text */}
          {/* form */}
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {(formik) => {
              return (
                <Form className='  space-y-10 lg:space-y-14  w-72  sm:w-80 md:w-full '>
                  {/* login */}
                  <div className='bg-white space-y-4 lg:space-y-5 shadow-md pb-4 '>
                    {/* header */}
                    <div className='bg-softpurple px-3 md:px-5 lg:px-6  py-2'>
                      <h1 className='text-sm font-bold lg:text-base '>
                        Login Password
                      </h1>
                    </div>

                    {/* old password and new password */}
                    <div className=' md:flex md:justify-between  md:items-start  md:gap-2 md:space-y-0  space-y-4 '>
                      {/* old password */}
                      <div className='space-y-2 px-3 md:px-5 lg:px-6   pb-2 lg:pb-3 md:w-1/2 '>
                        <h1 className='text-xs lg:text-sm  '>Old Password</h1>

                        <div>
                          <Field
                            type='password'
                            name='opassword'
                            placeholder='Old Password'
                            className=' bg-white border-babyblack border w-full py-2   px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                          />
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='opassword' />
                          </div>
                        </div>
                      </div>
                      {/* new  password */}
                      <div className='space-y-2 px-3 md:px-5 lg:px-6   pb-2 lg:pb-3 md:w-1/2 '>
                        <h1 className='text-xs lg:text-sm  '>New Password</h1>

                        <div>
                          <Field
                            type='password'
                            name='npassword'
                            placeholder='New Password'
                            className=' bg-white border-babyblack border w-full py-2   px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                          />
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='npassword' />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* confirm  password */}
                    <div className='space-y-2 px-3 md:px-5 lg:px-6   pb-2 lg:pb-3 md:w-1/2 '>
                      <h1 className='text-xs lg:text-sm  '>Confirm Password</h1>

                      <div>
                        <Field
                          type='password'
                          name='cpassword'
                          placeholder='Confirm Password'
                          className=' bg-white border-babyblack border w-full py-2   px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                        />
                        <div className='text-softRed text-xs mt-1 px-4'>
                          <ErrorMessage name='cpassword' />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* pin */}
                  <div className='bg-white space-y-4 lg:space-y-5 shadow-md pb-4 '>
                    {/* header */}
                    <div className='bg-softpurple px-3 md:px-5 lg:px-6  py-2'>
                      <h1 className='text-sm font-bold lg:text-base '>
                        Withdrawal Pin
                      </h1>
                    </div>

                    {/* old password and new password */}
                    <div className=' md:flex md:justify-between  md:items-start  md:gap-2 md:space-y-0  space-y-4  '>
                      {/* old password */}
                      <div className='space-y-2 px-3 md:px-5 lg:px-6   pb-2 md:w-1/2 '>
                        <h1 className='text-xs lg:text-sm  '>Old Pin</h1>

                        <div>
                          <Field
                            type='password'
                            name='opin'
                            placeholder='Old Pin'
                            className=' bg-white border-babyblack border w-full py-2   px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                          />
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='opin' />
                          </div>
                        </div>
                      </div>
                      {/* new  password */}
                      <div className='space-y-2 px-3 md:px-5 lg:px-6   pb-2  md:w-1/2 '>
                        <h1 className='text-xs lg:text-sm  '>New Pin</h1>

                        <div>
                          <Field
                            type='password'
                            name='npin'
                            placeholder='New Pin'
                            className=' bg-white border-babyblack border w-full py-2   px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                          />
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='npin' />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* confirm  password */}
                    <div className='space-y-2 px-3 md:px-5 lg:px-6   pb-2  md:w-1/2 '>
                      <h1 className='text-xs lg:text-sm  '>Confirm Pin</h1>

                      <div>
                        <Field
                          type='password'
                          name='cpin'
                          placeholder='Confirm Pin'
                          className=' bg-white border-babyblack border w-full py-2   px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                        />
                        <div className='text-softRed text-xs mt-1 px-4'>
                          <ErrorMessage name='cpin' />
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type='submit'
                    className='bg-babypurple text-white px-4 py-3   rounded-md w-full  text-base lg:text-lg '
                  >
                    {loading ? (
                      <div className='flex justify-center gap-2 items-center'>
                        <ImSpinner className='animate-spin' />
                        Updating...
                      </div>
                    ) : (
                      'Update Password'
                    )}
                  </button>
                </Form>
              )
            }}
          </Formik>
        </div>
        <Footer />
      </section>
    </>
  )
}

export default Password

// F4EAF3
