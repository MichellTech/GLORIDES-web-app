import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { BiCalendar } from 'react-icons/bi'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Link from 'next/link'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { MdLocationPin } from 'react-icons/md'
import { useRouter } from 'next/router'

function Search() {
  const [loading, setLoading] = useState(false)
  const [usebg, setUsebg] = useState(false)

  const router = useRouter()
  useEffect(() => {
    if (router.pathname === '/') {
      setUsebg(false)
    } else {
      setUsebg(true)
    }
  }, [router.pathname])

  const initialValues = {
    city: '',
    date: new Date(),
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
    date: Yup.date().required('Required'),
    country: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('No country value provided'),
  })
  return (
    <>
      <div className=' px-6  '>
        {/* form */}
        <div
          className={`${
            !usebg
              ? ' px-4 py-4 md:py-5 md:px-6 bg-white max-w-md sm:w-[34rem] sm:max-w-full md:w-[44rem] md:max-w-full  lg:w-[56rem] xl:w-[64rem]    '
              : ' px-4 py-4 md:py-5 md:px-6 bg-softpurple max-w-md sm:w-[34rem] sm:max-w-full md:w-[44rem] md:max-w-full  lg:w-[56rem] xl:w-[64rem]     '
          }`}
        >
          {/* form */}
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {(formik) => {
              return (
                <Form className='grid grid-cols-2 gap-4  rounded md:grid-cols-3 lg:gap-8 w-full justify-center items-center mx-auto'>
                  {/* city */}
                  <div className=' relative  w-auto'>
                    <Field
                      type='text'
                      name='city'
                      placeholder='Your City'
                      className={`${
                        formik.errors.city && formik.touched.city
                          ? 'bg-softpurple border border-softRed px-2 text-center py-2 outline-none text-xs sm:h-12 md:h-14  h-10 md:text-sm xl:text-base text-babyblack placeholder:text-xs w-full '
                          : usebg
                          ? 'bg-white px-2 text-center  py-2 outline-none text-xs sm:h-12 md:h-14  placeholder:text-xs h-10 md:text-sm xl:text-base text-babyblack w-full xl:rounded-sm'
                          : 'bg-[#D9D9D9] px-2 text-center  py-2 outline-none text-xs sm:h-12 md:h-14  placeholder:text-xs h-10 md:text-sm xl:text-base text-babyblack w-full xl:rounded-sm'
                      }`}
                    />
                    <MdLocationPin className='absolute  top-1/2  right-1 -translate-x-1/2 -translate-y-1/2 text-babyblack  cursor-pointer font-bold sm:text-lg  lg:text-xl xl:text-2xl' />
                  </div>
                  {/* date */}
                  <div
                    className={`${
                      formik.errors.date && formik.touched.date
                        ? 'relative bg-softpurple border-softRed border  w-auto'
                        : usebg
                        ? 'relative bg-white  w-auto'
                        : 'relative bg-[#D9D9D9]  w-auto'
                    }`}
                  >
                    <Field name='date'>
                      {({ field, form }) => {
                        return (
                          <DatePicker
                            className={`${
                              formik.errors.date && formik.touched.date
                                ? 'bg-softpurple   px-2 text-center  py-2 outline-none text-xs sm:h-12 md:h-14  h-10 md:text-sm xl:text-base text-babyblack placeholder:text-xs w-full '
                                : usebg
                                ? 'bg-white px-2 text-center  py-2 outline-none text-xs sm:h-12 md:h-14  placeholder:text-xs h-10 md:text-sm xl:text-base text-babyblack w-full xl:rounded-sm'
                                : 'bg-[#D9D9D9] px-2 text-center  py-2 outline-none text-xs sm:h-12 md:h-14  placeholder:text-xs h-10 md:text-sm xl:text-base text-babyblack w-full xl:rounded-sm'
                            }`}
                            id='date'
                            {...field}
                            selected={field.value}
                            dateFormat={'dd/MM/yyyy'}
                            onChange={(date) =>
                              form.setFieldValue(field.name, date)
                            }
                          />
                        )
                      }}
                    </Field>
                    <BiCalendar className='absolute  top-1/2  right-1 -translate-x-1/2 -translate-y-1/2 text-babyblack  cursor-pointer font-bold sm:text-lg lg:text-xl xl:text-2xl' />
                  </div>

                  <button
                    type='submit'
                    className='bg-babypurple w-full  py-2 shadow-md font-bold sm:h-12 md:h-14  rounded lg:rounded-sm xl:rounded-md h-10 col-span-2 md:col-span-1'
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
