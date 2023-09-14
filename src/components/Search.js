import React, { useState } from 'react'
import Image from 'next/image'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { FaRegAddressCard } from 'react-icons/fa'

import Link from 'next/link'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { MdOutlineAddAPhoto } from 'react-icons/md'
import { useRouter } from 'next/router'

function Search() {
  const [loading, setLoading] = useState(false)
  const [usergender, setUsergender] = useState(['Nigeria', 'USA', 'England'])

  const router = useRouter()

  const initialValues = {
    city: '',
    state: '',
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
    console.log(values)
  }
  // validation
  const validationSchema = Yup.object().shape({
    city: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('No value provided'),
    state: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('No value provided'),
    country: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('No country value provided'),
  })
  return (
    <>
      <div className=' px-4 h-full max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl '>
        {/* form */}
        <div className='  py-4 md:py-5 md:px-6 bg-white   '>
          {/* form */}
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {(formik) => {
              return (
                <Form className=' space-y-3 sm:space-y-4 px-3 md:flex items-center md:space-y-0 gap-4 '>
                  {/* city,state,country */}
                  <div className=' flex items-center w-full gap-4 '>
                    {/* city */}
                    <Field
                      type='text'
                      name='city'
                      placeholder='Your City'
                      className={`${
                        formik.errors.city && formik.touched.city
                          ? 'bg-white border border-softRed px-2 text-center w-1/3 py-2 outline-none text-xs sm:h-12 md:h-14 lg:rounded-sm xl:rounded-md h-10 md:text-sm xl:text-base text-babyblack placeholder:text-xs '
                          : 'bg-softpurple px-2 text-center w-1/3 py-2 outline-none text-xs sm:h-12 md:h-14 lg:rounded-sm xl:rounded-md placeholder:text-xs h-10 md:text-sm xl:text-base text-babyblack'
                      }`}
                    />
                    {/* state */}

                    <Field
                      type='text'
                      name='state'
                      placeholder='Your State'
                      className={`${
                        formik.errors.state && formik.touched.state
                          ? 'bg-white border border-softRed px-2 text-center w-1/3 py-2 outline-none text-xs sm:h-12 md:h-14 lg:rounded-sm xl:rounded-md h-10 md:text-sm xl:text-base text-babyblack placeholder:text-xs '
                          : 'bg-softpurple px-2 text-center w-1/3 py-2 outline-none text-xs sm:h-12 md:h-14 lg:rounded-sm xl:rounded-md placeholder:text-xs h-10 md:text-sm xl:text-base text-babyblack'
                      }`}
                    />
                    {/* country*/}
                    <div className='bg-softpurple px-2 text-center text-babyblack w-1/3 py-2 sm:h-12 mx-auto flex justify-center h-10 items-center md:h-14  lg:rounded-sm xl:rounded-md'>
                      <h1 className='font-bold sm:hidden text-xs'>USA</h1>
                      <h1 className='font-bold hidden sm:block text-xs'>
                        United States of America
                      </h1>
                    </div>
                  </div>

                  <button
                    type='submit'
                    className='bg-babypurple w-full md:w-40 py-2 shadow-md font-bold sm:h-12 md:h-14 lg:w-60 xl:w-64 rounded lg:rounded-sm xl:rounded-md h-10'
                  >
                    search
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

export default Search

//  className={`${
//                             formik.errors.city && formik.touched.city
//                               ? ' md:border-2  border  px-1 border-softRed   text-xs placeholder:text-xs md:text-sm  lg:text-base  placeholder-babyblack bg-white text-center focus:outline-none h-full'
//                               : '  text-xs placeholder:text-xs md:text-sm lg:text-base  placeholder-babyblack  bg-softpurple text-center focus:outline-none '
//                           }`}
