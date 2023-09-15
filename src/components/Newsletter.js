import React, { useState, useContext } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ImSpinner } from 'react-icons/im'
import axios from 'axios'
// import { AppContext } from '../context/Context'

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
    // Submitform(payload)

    // reset
    onSubmitProps.resetForm()
  }
  const Submitform = (payload) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_POSTSUBSCRIBE_API}`, payload, {
        headers: {
          ' x-api-key':
            'PMAK-646f49a99c0bef19902a3fe4-7049a9fa0500a342980c89cca17c38dfca',
        },
      })
      .then(function (response) {
        if (response.data.message === 'Ok') {
          toast.success('Thanks for Subscribing ', { autoClose: 2000 })
        }
        setLoading(false)
      })
      .catch(function (error) {
        toast.error('Network Error, Try Again')
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
                  className='px-3 w-60  sm:w-96 xl:w-[18rem] md:px-4 lg:px-6 py-2 lg:py-3 border border-babypurple  md:w-full lg:w-max outline-babyblack md:border-r-0 border-b-0 md:border-b placeholder:text-xs md:placeholder:text-sm placeholder:text-center md:placeholder:text-left '
                />
              </div>
              <button
                type='submit'
                className='px-3 md:px-4 lg:px-6 py-2 lg:py-3 text-white bg-babypurple     shadow-md cursor-pointer text-sm font-bold md:text-sm lg:text-base tracking-wide w-full  md:w-max '
              >
                {loading ? (
                  <div className='flex justify-center gap-2 items-center'>
                    <ImSpinner className='animate-spin' />
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
