import React, { useState } from 'react'
import Navbar from '@/components/Navigation/Navbar'
import Footer from '@/components/Navigation/Footer'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
function Raiseaticket() {
  const [loading, setLoading] = useState(false)
  const initialValues = {
    subject: '',
    message: '',
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

  const validationSchema = Yup.object().shape({
    subject: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('No subject provided'),
    message: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('No message provided'),
  })

  return (
    <>
      <Navbar />
      <div className='my-16 xl:my-24 max-w-md mx-auto font-sans md:max-w-4xl lg:max-w-5xl xl:max-w-7xl  px-4 md:px-6  lg:px-8'>
        {/* form */}
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(formik) => {
            return (
              <Form className='  text-babyblack space-y-10 font-sans w-full px-6 py-4 md:px-0 '>
                <div className=' space-y-6 sm:space-y-7 md:grid md:grid-cols-2 md:space-y-0 md:gap-6'>
                  {/* subject */}
                  <div>
                    <Field
                      type='text'
                      name='subject'
                      placeholder='Input your message title here'
                      className=' bg-white border-babyblack border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                    />
                    <div className='text-softRed text-xs mt-1 px-4'>
                      <ErrorMessage name='subject' />
                    </div>
                  </div>

                  {/* message*/}
                  <div className='md:col-span-2'>
                    <div className='flex  relative justify-between items-center w-full md:col-span-2 '>
                      <Field
                        as='textarea'
                        type='text'
                        id='message'
                        name='message'
                        cols={20}
                        rows={10}
                        placeholder='Input your message here'
                        className=' bg-white border-babyblack border w-full py-3 px-4 outline-babypurple  text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm '
                      />
                    </div>
                    <div className='text-softRed text-xs mt-1 px-4'>
                      <ErrorMessage name='message' />
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
    </>
  )
}

export default Raiseaticket
