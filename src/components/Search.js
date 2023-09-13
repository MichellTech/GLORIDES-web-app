import React, { useState } from 'react'
import Image from 'next/image'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { ImSpinner } from 'react-icons/im'
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
    city: 'Ikeja',
    state: 'Lagos',
    country: 'Nigeria',
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
      <section className=''>
        <div className=' flex flex-col justify-center items-center w-full px-4 h-full'>
          {/* form */}
          <div className='  py-3 md:py-4 md:px-6 bg-white  max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl    '>
            {/* form */}
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              {(formik) => {
                return (
                  <Form className='  text-babyblack space-y-4 font-sans px-6 py-2 md:px-0  sm:flex sm:items-cente  sm:space-y-0 sm:gap-2 xl:gap-4 w-full h-full'>
                    {/* city,state,country */}
                    <div className='flex items-start gap-2  sm:w-2/3 xl:gap-3'>
                      {/* city */}
                      <div>
                        <Field
                          type='text'
                          name='city'
                          placeholder='city'
                          className={`${
                            formik.errors.city
                              ? ' md:border-2  border w-full py-2 xl:py-3 px-1 border-softRed   text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base placeholder-[#D9D9D9] bg-white text-center focus:outline-none h-full'
                              : ' w-full py-2 xl:py-3 px-1  text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base placeholder-[#D9D9D9]  bg-[#D9D9D9] text-center focus:outline-none h-full'
                          }`}
                        />
                        {/* <div className='text-softRed text-xs mt-1 px-4'>
                          <ErrorMessage name='city' />
                        </div> */}
                      </div>
                      {/* state */}

                      <div>
                        <Field
                          type='text'
                          name='state'
                          placeholder='State'
                          className={`${
                            formik.errors.state
                              ? '  border md:border-2 w-full py-2 xl:py-3 px-1 border-softRed     text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base placeholder-[#D9D9D9] bg-white text-center focus:outline-none h-full'
                              : ' w-full py-2 xl:py-3 px-1  text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base placeholder-[#D9D9D9]  bg-[#D9D9D9] text-center focus:outline-none h-full'
                          }`}
                        />
                        {/* <div className='text-softRed text-xs mt-1 px-4'>
                          <ErrorMessage name='state' />
                        </div> */}
                      </div>
                      {/* country*/}
                      <div>
                        <Field
                          as='select'
                          type='selectOption'
                          name='country'
                          className={`${
                            formik.errors.country
                              ? ' bg-white  py-2 xl:py-3   px-1 border  md:border-2 border-softRed text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base text-center h-full '
                              : ' bg-[#D9D9D9]  py-2 xl:py-3   px-1 text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base text-center h-full outline-none '
                          }`}
                        >
                          <option value=''>select option</option>
                          {usergender?.map((item, index) => {
                            return (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            )
                          })}
                        </Field>
                        {/* <div className='text-softRed text-xs mt-1 px-4'>
                          <ErrorMessage name='country' />
                        </div> */}
                      </div>
                    </div>

                    <button
                      type='submit'
                      className='bg-babypurple text-white px-4 py-2 md:py-2 xl:py-3     w-full  text-base  sm:w-1/3  h-full'
                    >
                      search
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

export default Search
