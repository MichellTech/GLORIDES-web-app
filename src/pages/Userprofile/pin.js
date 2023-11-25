import React, { useState } from 'react'
import Navbar from '@/components/Navigation/Navbar/index'
import Profilecomp from '@/components/Profilecomp'
import Image from 'next/image'
import Profilecompbig from '@/components/Profilecompbig'
import Link from 'next/link'
import { FiUserPlus } from 'react-icons/fi'
import { BiUser } from 'react-icons/bi'
import { MdOutlinePayments } from 'react-icons/md'
import Footer from '@/components/Navigation/Footer'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { ImSpinner } from 'react-icons/im'

function Pin() {
  const [loading, setLoading] = useState(false)

  const initialValues = {
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

                    {/* old pin and new pin */}
                    <div className=' md:flex md:justify-between md:items-center md:gap-4  lg:gap-10 xl:gap-14  md:space-y-0  space-y-4  '>
                      {/* old pin */}
                      <div className='space-y-3  pb-2 lg:pb-3 md:w-1/2'>
                        <h1 className='text-xs text-slate-500  lg:text-sm '>
                          Old Pin
                        </h1>

                        <div>
                          <Field
                            type='password'
                            name='opin'
                            placeholder='Old Pin'
                            className=' border w-full py-2  px-4  text-xs placeholder:text-xs bg-opacity-30 md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm bg-white      outline-babypurple'
                          />
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='opin' />
                          </div>
                        </div>
                      </div>
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
                    </div>
                    {/* confirm  pin*/}
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
        </div>
      </div>
    </>
  )
}

export default Pin

// F4EAF3

// F4EAF3
