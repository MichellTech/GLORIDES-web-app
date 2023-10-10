import React, { useState } from 'react'
import Navbar from '@/components/Navigation/Navbar'
import Footer from '@/components/Navigation/Footer'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { RiDeleteBack2Fill } from 'react-icons/ri'
import Link from 'next/link'
function Raiseaticket() {
  const [loading, setLoading] = useState(false)
  const [userservice, setUserservice] = useState(['User', 'Host'])
  const [userpriority, setUserpriority] = useState(['High', 'Medium', 'Low'])
  const [userimage, setUserimage] = useState([{ id: 1, file: null }])

  // const handleadd = () => {
  //   const imagelist = [...userimage, []]
  //   setUserimage(imagelist)
  // }

  // const handldelete = (i) => {
  //   const detVal = [...userimage]
  //   detVal.splice(i, 1)
  //   setUserimage(detVal)
  // }

  // const handleChange = (onchangevalue, i) => {
  //   const inputdata = [...userimage]
  //   inputdata[i] = onchangevalue.target.value
  //   setUserimage(inputdata)
  // }

  const initialValues = {
    subject: '',
    message: '',
    service: '',
    priority: '',
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
    service: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('No service type provided'),
    message: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('No message provided'),
    priority: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('No priority provided'),
  })
  console.log(userimage)
  return (
    <>
      <Navbar />
      <section className='bg-[#F5F5F5]'>
        <div className='py-16 xl:py-24 max-w-md sm:max-w-xl mx-auto font-sans md:max-w-3xl lg:max-w-4xl xl:max-w-6xl  px-4 md:px-6  lg:px-8'>
          {/* form */}
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {(formik) => {
              return (
                <Form className='  text-babyblack space-y-10 font-sans w-full px-6 py-4 md:px-0 '>
                  <div className=' space-y-6 sm:space-y-7 md:space-y-10 lg:space-y-14 xl:space-y-16 '>
                    {/* ticket INFORmation */}
                    <div className='space-y-6'>
                      <h1 className='sm:text-lg md:text-xl xl:text-2xl '>
                        Ticket Information
                      </h1>
                      <div className='w-full bg-white shadow-md rounded-lg px-6 py-6 lg:px-10 lg:py-10 space-y-6 lg:space-y-10'>
                        {/* name and emails */}
                        <div className='space-y-6  md:flex md:items-center md:justify-between md:gap-6 md:space-y-0'>
                          {/* name */}
                          <div className='space-y-3 w-full'>
                            <h1 className='text-xs lg:text-sm'> Name</h1>
                            <p className='bg-softpurple border-babyblack border w-full py-2  px-4 text-xs  md:text-sm   rounded-sm'>
                              Okwu Chiedozie Michell
                            </p>
                          </div>
                          {/* email */}
                          <div className='space-y-3  w-full'>
                            <h1 className='text-xs lg:text-sm'> Email</h1>
                            <p className='bg-softpurple border-babyblack border w-full py-2  px-4 text-xs  md:text-sm rounded-sm'>
                              OkwuChiedozie@gmail.com
                            </p>
                          </div>
                        </div>
                        {/* subject , service and priority */}
                        <div className='space-y-6  md:flex md:items-start md:justify-between md:gap-6 md:space-y-0 xl:gap-10'>
                          {/* subject */}
                          <div className=' space-y-3 w-full'>
                            <h1 className='text-xs lg:text-sm'>Subject</h1>
                            <Field
                              type='text'
                              name='subject'
                              placeholder='Input your Subject title here'
                              className=' bg-white border-babyblack border w-full py-2  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm rounded-sm '
                            />
                            <div className='text-softRed text-xs mt-1 px-4'>
                              <ErrorMessage name='subject' />
                            </div>
                          </div>
                          {/* service */}
                          <div className=' space-y-3 w-full'>
                            <h1 className='text-xs lg:text-sm'>Service Type</h1>
                            <div className='relative'>
                              <Field
                                as='select'
                                type='selectOption'
                                name='service'
                                className=' bg-white border-babyblack border w-full py-2 px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm rounded-sm cursor-pointer '
                              >
                                <option value=''>Select Service Type</option>
                                {userservice?.map((item, index) => {
                                  return (
                                    <option key={index} value={item}>
                                      {item}
                                    </option>
                                  )
                                })}
                              </Field>
                              {/* <div className='absolute  top-1/2  right-1 -translate-x-1/2 -translate-y-1/2 text-babyblack  cursor-pointer font-bold sm:text-lg lg:text-xl xl:text-2xl'>
                                <AiFillCaretDown />
                              </div> */}
                            </div>

                            <div className='text-softRed text-xs mt-1 px-4'>
                              <ErrorMessage name='service' />
                            </div>
                          </div>
                          {/* priority */}
                          <div className=' space-y-3 w-full'>
                            <h1 className='text-xs lg:text-sm'>Priority</h1>
                            <div className='relative '>
                              <Field
                                as='select'
                                type='selectOption'
                                name='priority'
                                className=' bg-white border-babyblack border w-full py-2 px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm  rounded-sm cursor-pointer   '
                              >
                                <option className=' ' value=''>
                                  select Priority
                                </option>
                                {userpriority?.map((item, index) => {
                                  return (
                                    <option
                                      className=''
                                      key={index}
                                      value={item}
                                    >
                                      {item}
                                    </option>
                                  )
                                })}
                              </Field>
                              {/* <div className='absolute  top-1/2  right-1 -translate-x-1/2 -translate-y-1/2 text-babyblack  cursor-pointer font-bold sm:text-lg lg:text-xl xl:text-2xl'>
                                <AiFillCaretDown />
                              </div> */}
                            </div>

                            <div className='text-softRed text-xs mt-1 px-4'>
                              <ErrorMessage name='priority' />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* message*/}
                    <div className='space-y-6'>
                      <h1 className='sm:text-lg md:text-xl xl:text-2xl '>
                        Message
                      </h1>
                      <div className='w-full bg-white shadow-md rounded-lg px-6 py-6 space-y-6 lg:px-10 lg:py-10  '>
                        {/* message */}
                        <div className='w-full space-y-4'>
                          <div className=' w-full '>
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
                    </div>

                    {/* photo */}

                    <div className='space-y-6'>
                      <h1 className='sm:text-lg md:text-xl xl:text-2xl'>
                        Atttachments
                      </h1>
                      <div className='w-full bg-white shadow-md rounded-lg px-6 py-6 lg:px-10 lg:py-10 space-y-3 lg:space-y-6 '>
                        {/* photos */}
                        <div className='flex justify-between items-start gap-4 '>
                          <div className='flex flex-col gap-2 lg:gap-4 items-center'>
                            {userimage.map((item, index) => {
                              return (
                                <div
                                  key={index}
                                  className='border border-babyblack   w-52 md:w-80 xl:w-96  relative'
                                >
                                  <label>
                                    <span className='sr-only text-xs '>
                                      Select File
                                    </span>
                                    <input
                                      name=''
                                      type='file'
                                      accept='image/png, image/jpg, image/gif, image/jpeg'
                                      // value={item?.file?.name}
                                      onChange={(e) => {
                                        setUserimage((previous) =>
                                          previous.map((i) => {
                                            if (i.id === item.id) {
                                              i.file = e.target.files[0]
                                              return i
                                            }
                                            return i
                                          })
                                        )
                                      }}
                                      className='block   w-48 lg:w-64 xl:w-80 text-xs text-babyblack file:mr-4 file:py-2 file:px-4 file:border-l-0 file:border-t-0 file:border-b-0 file:border-babygrey file:border-r file:border file:text-xs file:font-semibold file:text-babyblack cursor-pointer file:cursor-pointer file:bg-white md:file:text-sm md:file:py-3 xl:file:text-base lg:text-sm xl:text-base truncate 
      '
                                    />
                                  </label>
                                  {/* delete */}
                                  {index !== 0 && (
                                    <div
                                      onClick={() =>
                                        setUserimage((previous) =>
                                          previous.filter((i) => {
                                            return i.id !== item.id
                                          })
                                        )
                                      }
                                      className='absolute  top-1/2  right-1 -translate-x-1/2 -translate-y-1/2 text-babyblack  cursor-pointer font-bold sm:text-lg lg:text-xl xl:text-2xl'
                                    >
                                      <RiDeleteBack2Fill />
                                    </div>
                                  )}
                                </div>
                              )
                            })}
                          </div>
                          {/*add  */}
                          <div>
                            <div
                              onClick={() =>
                                setUserimage((previous, index) => [
                                  ...previous,
                                  { id: previous.length + 1, file: null },
                                ])
                              }
                              className='px-4 py-2 md:py-3 bg-softpurple  shadow-md text-xs sm:px-6 font-bold lg:text-sm lg:px-8 cursor-pointer '
                            >
                              Add{' '}
                              <span className='hidden md:inline-block '>
                                More Photos
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* more */}
                      </div>
                    </div>
                  </div>
                  {/* button */}
                  <div className='flex justify-between items-center gap-6 lg:gap-10 pt-6 max-w-sm mx-auto'>
                    <button
                      type='submit'
                      className='bg-babypurple text-white px-4 py-2 md:py-3   rounded-md w-full  text-base lg:text-lg shadow-md transition ease-in-out delay-150  hover:-translate-y-1  hover:bg-indigo-500 duration-300 hover:border-none hover:text-white '
                    >
                      {loading ? (
                        <div className='flex justify-center gap-2 items-center'>
                          <ImSpinner className='animate-spin' />
                          Sending...
                        </div>
                      ) : (
                        'Submit'
                      )}
                    </button>
                    <Link
                      href='/support'
                      className='border-babyblack text-babyblack border px-4 py-2 md:py-3   rounded-md w-full  text-base lg:text-lg shadow-md transition ease-in-out delay-150  hover:-translate-y-1  hover:bg-indigo-500 duration-300 hover:border-none hover:text-white text-center '
                    >
                      Cancel
                    </Link>
                  </div>
                </Form>
              )
            }}
          </Formik>
        </div>
      </section>
    </>
  )
}

export default Raiseaticket
