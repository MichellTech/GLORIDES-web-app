import React, { useState } from 'react'
import Navbar from '../components/Navigation/Navbar/index'
import Image from 'next/image'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { MdAttachEmail, MdLocationOn, MdPhoneCallback } from 'react-icons/md'
import { useRouter } from 'next/router'
import Footer from '../components/Navigation/Footer'
import { phone } from 'phone'
import { Country } from 'country-state-city'
import mainAxiosAction from '@/components/axiosAction'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function contactus() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    country: '',
    title: '',
    message: '',
  }

  const onSubmit = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(false)
    setLoading(true)
    const phoneresult = phone(values.phone)
    if (phoneresult?.isValid === false) {
      toast.warning('please input a valid phone number')
      setLoading(false)
    } else {
      const payload = {
        firstname: values.firstname,
        lastname: values.lastname,
        email: values.email,
        phone_number: values.phone,
        title: values.title,
        country: values.country,
        message: values.message,
      }

      sendinquiry(payload, onSubmitProps.resetForm)
    }
  }
  // validation
  const validationSchema = Yup.object().shape({
    firstname: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('No first name provided'),
    lastname: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('No last name provided'),
    email: Yup.string()
      .email('No email provided')
      .matches(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Kindly input a valid email'
      )
      .required('No email Provided'),
    phone: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('No Phone Number provided'),
    country: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('No Country provided'),
    title: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('No title provided'),
    message: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('No message provided'),
  })

  const sendinquiry = (payload, callback) => {
    mainAxiosAction
      .post(`/general/contact`, payload)
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
    <>
      <section>
        {/* body */}
        <div className="bg-[url('/images/cont.png')] bg-no-repeat h-[30rem] sm:h-[34rem] lg:h-[36rem] xl:h-screen w-full bg-cover object-cover relative ">
          {/* navbar */}
          <Navbar />
          {/* text and form */}
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full  bottom-0 space-y-6 sm:space-y-8  md:space-y-10  xl:space-y-12  '>
            {/* text */}
            <div className='text-center mx-auto max-w-sm space-y-4 sm:space-y-5 md:space-y-5 xl:space-y-6 text-white sm:max-w-md md:max-w-xl px-6 lg:max-w-3xl xl:max-w-4xl '>
              <h1 className=' font-mono text-2xl w-full sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>
                {' '}
                Let’s help answer any Questions you might Have !
              </h1>
              <p className=' text-sm sm:text-base md:max-w-lg md:text-lg lg:text-xl  lg:max-w-2xl xl:text-2xl xl:max-w-3xl mx-auto'>
                Do have any questions or doubts about our product? then reach
                out to us and we will get back to you in little or no time
              </p>
            </div>

            {/*Form  */}
            <div className='px-3 sm:px-6 md:px-10 lg:px-14 py-6 bg-white rounded-md max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl  xl:max-w-3xl w-full shadow-md flex flex-col justify-center items-center mx-auto   '>
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
                        {/* firstnmae */}
                        <div>
                          <Field
                            type='text'
                            name='firstname'
                            placeholder='First Name'
                            className=' bg-white border-babyblack border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                          />
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='firstname' />
                          </div>
                        </div>
                        {/* lastnmae */}
                        <div>
                          <Field
                            type='text'
                            name='lastname'
                            placeholder='Last Name'
                            className=' bg-white border-babyblack border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                          />
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='lastname' />
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
                        {/* phone number */}
                        <div>
                          <div className='flex  relative justify-between items-center w-full'>
                            <Field
                              type='text'
                              name='phone'
                              placeholder='Phone Number including intl dial code'
                              className=' bg-white border-babyblack border w-full py-3 px-4 outline-babypurple  text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                            />
                          </div>
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='phone' />
                          </div>
                        </div>
                        {/* country */}
                        <div>
                          <div className='flex  relative justify-between items-center w-full'>
                            <Field
                              as='select'
                              type='selectOption'
                              name='country'
                              className=' bg-white border-babyblack border w-full py-3 px-4 outline-babypurple  text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                            >
                              <option value=''>select Country</option>
                              {Country.getAllCountries()?.map((item, index) => {
                                return (
                                  <option key={index} value={item.name}>
                                    {item.name}
                                  </option>
                                )
                              })}
                            </Field>
                          </div>
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='country' />
                          </div>
                        </div>
                        {/* title */}
                        <div>
                          <div className='flex  relative justify-between items-center w-full'>
                            <Field
                              type='text'
                              name='title'
                              placeholder='Message Title'
                              className=' bg-white border-babyblack border w-full py-3 px-4 outline-babypurple  text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'
                            />
                          </div>
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='title' />
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
                        className='bg-babypurple text-white px-4 py-3 shadow-md   rounded-md w-full  text-base lg:text-lg '
                      >
                        {loading ? (
                          <div className='flex justify-center gap-2 items-center'>
                            <div className='spinner'></div>
                            Sending...
                          </div>
                        ) : (
                          'Send'
                        )}
                      </button>
                    </Form>
                  )
                }}
              </Formik>
            </div>

            {/* direct contact */}
            <div className='section-center flex flex-col justify-center mx-auto items-start sm:flex-row sm:space-y-0 sm:items-start space-y-8 py-10 md:gap-8 lg:gap-10 xl:gap-12    sm:gap-4'>
              {/* one */}
              <div className='flex items-center gap-4'>
                {/* icon */}
                <div className='bg-babypurple text-white flex justify-center items-center px-2 md:px-3 md:py-3 py-2 xl:px-4 xl:py-4  rounded '>
                  <MdAttachEmail className='text-2xl md:text-3xl xl:text-4xl' />
                </div>
                {/* text */}
                <div className='flex flex-col text-left text-babyblack '>
                  <h1 className='font-bold md:text-lg xl:text-xl'> Email Us</h1>
                  <p className='text-sm md:text-base xl:text-lg'>
                    hello@gloride.com
                  </p>
                </div>
              </div>
              {/* two */}
              <div className='flex items-start gap-4'>
                {/* icon */}
                <div className='bg-babypurple text-white flex justify-center items-center px-2 md:px-3 md:py-3 py-2 xl:px-4 xl:py-4  rounded '>
                  <MdLocationOn className='text-2xl md:text-3xl xl:text-4xl' />
                </div>
                {/* text */}
                <div className='flex flex-col text-left text-babyblack'>
                  <h1 className='font-bold md:text-lg xl:text-xl'>
                    {' '}
                    Our Location
                  </h1>
                  <p className='text-sm md:text-base xl:text-lg w-full sm:w-36 md:w-40  lg:w-52 xl:w-60'>
                    No 2 omuruyi street awoyaya, Lagos. Nigeria
                  </p>
                </div>
              </div>
              {/* three */}
              <div className='flex items-center gap-4'>
                {/* icon */}
                <div className='bg-babypurple text-white flex justify-center items-center px-2 md:px-3 md:py-3 py-2 xl:px-4 xl:py-4  rounded '>
                  <MdPhoneCallback className='text-2xl md:text-3xl xl:text-4xl' />
                </div>
                {/* text */}
                <div className='flex flex-col text-left text-babyblack '>
                  <h1 className='font-bold md:text-lg xl:text-xl'> Call Us</h1>
                  <p className='text-sm md:text-base xl:text-lg'>+2348121986</p>
                </div>
              </div>
            </div>
            {/* foor */}
            <Footer />
          </div>
        </div>
      </section>
    </>
  )
}

export default contactus
