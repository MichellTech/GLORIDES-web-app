import React, { useState } from 'react'
import Navbar from '@/components/Navigation/Navbar/index'
import Profilenavsmall from '../../components/Profile/Profilenavsmall'
import Profilenavbig from '../../components/Profile/Profilenavbig'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import mainAxiosAction from '@/components/axiosAction'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AiFillEyeInvisible } from 'react-icons/ai'
import { AiFillEye } from 'react-icons/ai'

function Password() {
  const [loading, setLoading] = useState(false)
  const [seepassword, setSeepassword] = useState(false)
  const initialValues = {
    opassword: '',
    npassword: '',
    cpassword: '',
  }

  const onSubmit = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(false)
    setLoading(true)
    const payload = {
      old_password: values.opassword,
      new_password: values.npassword,
    }

    resetpassword(payload, onSubmitProps.resetForm)
  }
  // validation
  const validationSchema = Yup.object().shape({
    opassword: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('Please provide old password'),
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
  })

  const resetpassword = (payload, callback) => {
    mainAxiosAction
      .post(`/user/change-password`, payload)
      .then(function (response) {
        setLoading(false)
        toast.success(response?.data?.message)
        setSeepassword(false)
        callback()
      })
      .catch(function (error) {
        toast.error(error?.response?.data?.message)
        setLoading(false)
        console.log(error)
      })
  }
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
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {(formik) => {
              return (
                <Form className='  space-y-10 lg:space-y-14 w-full overflow-x-hidden'>
                  {/* login */}
                  <div className='bg-white space-y-4 lg:space-y-6 shadow-md rounded-md border py-4 px-6  '>
                    {/* header */}
                    <div className='border-b   pb-4 '>
                      <h1 className='text-lg font-bold lg:text-xl  '>
                        Manage your Login Password
                      </h1>
                    </div>

                    {/* old password and new password */}
                    <div className=' md:flex md:justify-between md:items-start md:gap-4  lg:gap-10 xl:gap-14  md:space-y-0  space-y-4  '>
                      {/* old password */}
                      <div className='space-y-3  pb-2 lg:pb-3 md:w-1/2'>
                        <h1 className='text-xs text-slate-500  lg:text-sm '>
                          Old Password
                        </h1>

                        <div>
                          <div className='flex  relative justify-between items-center w-full'>
                            <Field
                              type={seepassword ? 'text ' : 'password'}
                              name='opassword'
                              placeholder='Old Password'
                              className=' border w-full py-2  px-4  text-xs placeholder:text-xs bg-opacity-30 md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm bg-white      outline-babypurple'
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
                            <ErrorMessage name='opassword' />
                          </div>
                        </div>
                      </div>
                      {/* new  password */}
                      <div className='space-y-3  pb-2 lg:pb-3 md:w-1/2'>
                        <h1 className='text-xs text-slate-500  lg:text-sm '>
                          New Password
                        </h1>

                        <div>
                          <div className='flex  relative justify-between items-center w-full'>
                            <Field
                              type={seepassword ? 'text ' : 'password'}
                              name='npassword'
                              placeholder='New Password'
                              className=' border w-full py-2  px-4  text-xs placeholder:text-xs bg-opacity-30 md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm bg-white      outline-babypurple'
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
                            <ErrorMessage name='npassword' />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* confirm  password */}
                    <div className=' space-y-3  pb-2 lg:pb-3 md:w-1/2  '>
                      <h1 className='text-xs text-slate-500  lg:text-sm '>
                        Confirm Password
                      </h1>

                      <div>
                        <div className='flex  relative justify-between items-center w-full'>
                          <Field
                            type={seepassword ? 'text ' : 'password'}
                            name='cpassword'
                            placeholder='Confirm New Password'
                            className=' border w-full py-2  px-4  text-xs placeholder:text-xs bg-opacity-30 md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm bg-white      outline-babypurple'
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
                      </div>
                    </div>
                  </div>

                  <button
                    type='submit'
                    className='bg-babypurple text-white px-6 py-2 lg:py-3   rounded-md flex justify-center items-center mx-auto text-sm md:w-full max-w-xs shadow-lg'
                  >
                    {loading ? (
                      <div className='flex justify-center gap-2 items-center  '>
                        <div className='spinner'></div>
                        updating...
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
      </div>
    </>
  )
}

export default Password

// F4EAF3
