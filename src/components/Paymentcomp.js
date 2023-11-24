import React, { useState } from 'react'
import Image from 'next/image'
import { cancelwithdraw } from '@/features/userpersona/userSlice'
import { ImCancelCircle, ImSpinner } from 'react-icons/im'
import { useSelector, useDispatch } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Link from 'next/link'
function Paymentcomp() {
  const { isWithdrawing } = useSelector((store) => store.userpersona)
  const [loading, setLoading] = useState(false)

  const [userAccount, setUserAccount] = useState([])
  const dispatch = useDispatch()
  const initialValues = {
    account: '',
    amount: '',
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
    // router.push({
    //   pathname: '/Auth/emailverification',
    //   //  query: response.data.data.user,
    // })
    console.log(values)
  }
  console.log(userAccount.length)
  const validationSchema = Yup.object().shape({
    account: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('No Account provided'),
    amount: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('No amount provided'),
  })

  return (
    <div className='bg-white py-4 lg:py-8 px-6 lg:px-8 flex justify-center flex-col items-center  rounded-md shadow-md w-full mx-6 sm:max-w-lg md:max-w-lg lg:max-w-xl xl:max-w-2xl overflow-y-auto'>
      {/* title */}
      <div className=' flex justify-between items-center w-full  border-b pb-4 lg:pb-6 '>
        <h1 className='font-bold text-sm md:text-base xl:text-lg '>
          Withdraw funds
        </h1>
        <ImCancelCircle
          onClick={() => dispatch(cancelwithdraw())}
          className='text-babypurple text-xl lg:text-2xl cursor-pointer'
        />
      </div>
      {/* form */}
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        enableReinitialize
      >
        {(formik) => {
          return (
            <Form className='  text-babyblack space-y-6 font-sans md:space-y-8 xl:space-y-10 w-full pt-4 lg:pt-8  '>
              {/* user account */}
              <div className='space-y-2 w-full'>
                <div className='flex justify-between items-center'>
                  <label htmlFor='' className='text-xs lg:text-sm'>
                    Account Payable
                  </label>
                  {userAccount.length < 1 && (
                    <Link
                      href='/userprofile/accounts'
                      className='text-xs lg:text-sm text-babypurple font-bold cursor-pointer'
                    >
                      {' '}
                      + Add Account
                    </Link>
                  )}
                </div>

                <Field
                  as='select'
                  type='selectOption'
                  name='account'
                  className=' bg-white   border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                >
                  <option value=''>select account</option>
                  {userAccount?.map((item, index) => {
                    return (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    )
                  })}
                </Field>

                <div className='text-softRed text-xs mt-1 px-4'>
                  <ErrorMessage name='account' />
                </div>
              </div>
              {/* amount to pay */}
              <div className='space-y-2 w-full'>
                <label htmlFor='' className='text-xs lg:text-sm'>
                  Amoun to Pay ($)
                </label>
                <div className='space-y-4'>
                  <div className='flex flex-wrap gap-3 items-center'>
                    <div
                      onClick={() => formik.setFieldValue('amount', 100)}
                      className={`${
                        formik.values.amount === 100
                          ? 'border rounded-sm px-4 py-3 w-max cursor-pointer hover:bg-softpurple hover:border-none duration-150  flex-grow text-center bg-softpurple border-none'
                          : 'border rounded-sm px-4 py-3 w-max cursor-pointer hover:bg-softpurple hover:border-none duration-150  flex-grow text-center'
                      }`}
                    >
                      <h1 className='text-xs md:text-sm lg:text-base '>100</h1>
                    </div>
                    <div
                      onClick={() => formik.setFieldValue('amount', 200)}
                      className={`${
                        formik.values.amount === 200
                          ? 'border rounded-sm px-4 py-3 w-max cursor-pointer hover:bg-softpurple hover:border-none duration-150  flex-grow text-center bg-softpurple border-none'
                          : 'border rounded-sm px-4 py-3 w-max cursor-pointer hover:bg-softpurple hover:border-none duration-150  flex-grow text-center'
                      }`}
                    >
                      <h1 className='text-xs md:text-sm lg:text-base '>200</h1>
                    </div>
                    <div
                      onClick={() => formik.setFieldValue('amount', 500)}
                      className={`${
                        formik.values.amount === 500
                          ? 'border rounded-sm px-4 py-3 w-max cursor-pointer hover:bg-softpurple hover:border-none duration-150  flex-grow text-center bg-softpurple border-none'
                          : 'border rounded-sm px-4 py-3 w-max cursor-pointer hover:bg-softpurple hover:border-none duration-150  flex-grow text-center'
                      }`}
                    >
                      <h1 className='text-xs md:text-sm lg:text-base '>500</h1>
                    </div>
                    <div
                      onClick={() => formik.setFieldValue('amount', 1000)}
                      className={`${
                        formik.values.amount === 1000
                          ? 'border rounded-sm px-4 py-3 w-max cursor-pointer hover:bg-softpurple hover:border-none duration-150  flex-grow text-center bg-softpurple border-none'
                          : 'border rounded-sm px-4 py-3 w-max cursor-pointer hover:bg-softpurple hover:border-none duration-150  flex-grow text-center'
                      }`}
                    >
                      <h1 className='text-xs md:text-sm lg:text-base '>1000</h1>
                    </div>
                  </div>
                  <Field
                    type='text'
                    name='amount'
                    placeholder='1000'
                    className=' bg-white  border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                  />
                </div>
                <div className='flex justify-between items-center gap-4 flex-row-reverse'>
                  <h1 className='text-xs '>
                    Amount withdrawable : <span className='font-bold'>200</span>
                  </h1>

                  <div className='text-softRed text-xs mt-1 px-4'>
                    <ErrorMessage name='amount' />
                  </div>
                </div>
              </div>

              {/* button */}
              <button
                type='submit'
                className='bg-babypurple text-white px-2 py-3  w-40 md:w-60 md:max-w-xs mx-auto flex justify-center items-center    rounded-md   text-xs md:text-sm  shadow-md transition ease-in-out delay-150   hover:bg-indigo-500 duration-1000 hover:border-none hover:text-white  '
              >
                {loading ? (
                  <div className='flex justify-center gap-2 items-center'>
                    <div className='spinner'></div>
                    <h1>Processing...</h1>
                  </div>
                ) : (
                  'Submit'
                )}
              </button>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default Paymentcomp
