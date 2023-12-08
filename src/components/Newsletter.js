import React, { useState, useContext } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import mainAxiosAction from '@/components/axiosAction'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function Subscribe() {
  const [loading, setLoading] = useState(false)

  const initialValues = {
    email: '',
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
  })

  const onSubmit = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(false)
    setLoading(true)
    const payload = {
      email: values.email,
    }
    submitform(payload, onSubmitProps.resetForm)
  }

  const submitform = (payload, callback) => {
    mainAxiosAction
      .post(`/general/newsletter`, payload)
      .then(function (response) {
        setLoading(false)
        toast.success(response?.data?.message)
        callback()
      })
      .catch(function (error) {
        toast.error(error?.response?.data?.message)
        setLoading(false)
        console.log(error)
      })
  }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <Form className=''>
            <div className='mx-auto md:mx-0 md:flex max-w-xs sm:max-w-sm xl:max-w-md'>
              {/* email*/}
              <div className=''>
                <Field
                  type='email'
                  name='email'
                  placeholder='Please input your email here '
                  className='px-3 w-60  sm:w-96 xl:w-[18rem] md:px-4 lg:px-6 py-2 lg:py-3 border border-babypurple  md:w-full lg:w-max outline-none md:border-r-0 border-b-0 md:border-b placeholder:text-xs md:placeholder:text-sm placeholder:text-center md:placeholder:text-left '
                />
              </div>
              <button
                type='submit'
                className='px-3 md:px-4 lg:px-6 py-2 lg:py-3 text-white bg-babypurple     shadow-md cursor-pointer text-sm font-bold md:text-sm lg:text-base tracking-wide w-full  md:w-max '
              >
                {loading ? (
                  <div className='flex justify-center gap-2 items-center'>
                    <div className='spinner'></div>
                    sending...
                  </div>
                ) : (
                  'Subscribe'
                )}
              </button>
            </div>
            <div className='text-softRed text-xs mt-1 px-4 text-center md:text-left'>
              <ErrorMessage name='email' />
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}

export default Subscribe
