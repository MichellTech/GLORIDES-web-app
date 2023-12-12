import React, { useState } from 'react'
import Image from 'next/image'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { AiFillEyeInvisible } from 'react-icons/ai'
import { AiFillEye } from 'react-icons/ai'
import { ImSpinner } from 'react-icons/im'
import Link from 'next/link'
import { useRouter } from 'next/router'
function Hostregistration() {
  const [seepassword, setSeepassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const initialValues = {
    businessname: '',
    accountno: '',
    email: '',
    bank: '',
    accountname: '',
    withdrawalpin: '',
    cwithdrawalpin: '',
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
    router.push({
      pathname: '/auth/emailverification',
      //  query: response.data.data.user,
    })
  }
  // validation
  const validationSchema = Yup.object().shape({
    businessname: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('No business name provided'),
    accountname: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('No  account name provided'),
    bank: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('No  bank provided'),
    accountno: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('No  account number provided'),
    email: Yup.string()
      .email('No email provided')
      .matches(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Kindly input a valid email'
      )
      .required('No email Provided'),
    withdrawalpin: Yup.string()
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
    cwithdrawalpin: Yup.string()
      .oneOf([Yup.ref('password'), ''], 'Passwords must match')
      .required('Required'),
  })
  return (
    <>
      <section className='min-h-screen flex-col flex justify-center items-center  py-10 lg:py-14'>
        <div className=' space-y-8 lg:space-y-10 px-7 flex flex-col justify-center items-center w-full '>
          {/* logo */}
          <Link href='/'>
            <div className='w-28 md:w-32 lg:w-40'>
              <Image
                src={'/images/logop.png'}
                width={500}
                height={500}
                priority={true}
                className=''
                alt='logo'
              />
            </div>
          </Link>
          {/* form */}
          <div className='px-2 sm:px-6 md:px-12 lg:px-16 py-6 bg-white rounded-xl max-w-sm sm:max-w-sm md:max-w-md lg:max-w-lg w-full border border-babyblack shadow-md  '>
            {/* header */}
            <div className='space-y-1 lg:space-y-2'>
              <h1 className=' font-bold text-babypurple text-2xl lg:text-3xl text-center  mx-auto '>
                Create a Business Account
              </h1>
              <p className='text-xs text-center  mx-auto  max-w-xs lg:text-sm lg:max-w-md'>
                Please provide the following details in order to begin your
                business journey with us
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
                      <div>
                        <Field
                          type='text'
                          name='businessname'
                          placeholder='Business Name'
                          className=' bg-white border-babyblack border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                        />
                        <div className='text-softRed text-xs mt-1 px-4'>
                          <ErrorMessage name='businessname' />
                        </div>
                      </div>

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
                      {/* Account n0 */}
                      <div>
                        <Field
                          type='number'
                          name='accountno'
                          placeholder='Banking Acccount Number'
                          className=' bg-white border-babyblack border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                        />
                        <div className='text-softRed text-xs mt-1 px-4'>
                          <ErrorMessage name='accountno' />
                        </div>
                      </div>
                      {/* Account name */}
                      <div>
                        <Field
                          type='text'
                          name='accountname'
                          placeholder='Banking Acccount Name'
                          className=' bg-white border-babyblack border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                        />
                        <div className='text-softRed text-xs mt-1 px-4'>
                          <ErrorMessage name='accountname' />
                        </div>
                      </div>
                      {/* bank */}
                      <div>
                        <Field
                          type='text'
                          name='bank'
                          placeholder='Banking Acccount Number'
                          className=' bg-white border-babyblack border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                        />
                        <div className='text-softRed text-xs mt-1 px-4'>
                          <ErrorMessage name='bank' />
                        </div>
                      </div>
                      {/* pin*/}
                      <div>
                        <div className='flex  relative justify-between items-center w-full'>
                          <Field
                            type={seepassword ? 'text ' : 'password'}
                            name='withdrawal pin'
                            placeholder='Withdrawalpin'
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
                          <ErrorMessage name='withdrawalpin' />
                        </div>
                        {/* remember me and forgot password */}
                      </div>
                      {/* cpaswoord */}
                      <div>
                        <div className='flex  relative justify-between items-center w-full'>
                          <Field
                            type={seepassword ? 'text ' : 'password'}
                            name='cwithdrawalpin'
                            placeholder='Confirm Pin'
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
                          <ErrorMessage name='cwithdrawalpin' />
                        </div>
                        {/* remember me and forgot password */}
                      </div>
                    </div>

                    <button
                      type='submit'
                      className='bg-babypurple text-white px-4 py-3   rounded-md w-full  text-base lg:text-lg '
                    >
                      {loading ? (
                        <div className='flex justify-center gap-2 items-center'>
                          <ImSpinner className='animate-spin' />
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
        </div>
      </section>
    </>
  )
}

export default Hostregistration
