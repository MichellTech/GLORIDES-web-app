import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { RiDeleteBack2Fill } from 'react-icons/ri'
import Link from 'next/link'
import { useRouter } from 'next/router'
import mainAxiosAction from '@/components/axiosAction'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function Supportform(ticketId) {
  const [loading, setLoading] = useState(false)
  const [userimage, setUserimage] = useState([{ id: 1, file: null }])
  const router = useRouter()
  const initialValues = {
    message: '',
  }
  const onSubmit = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(false)
    setLoading(true)

    sendreply(values)
  }

  const validationSchema = Yup.object().shape({
    message: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('No message provided'),
  })
  console.log(ticketId)

  const sendreply = (values) => {
    const formData = new FormData()
    for (const image of userimage) {
      formData.append('ticket_files', image?.file)
    }
    // formData?.append('documents', JSON.stringify(values.userimage2))
    formData?.append('message', values.message)
    formData?.append('ticket_id', ticketId.ticketId)
    mainAxiosAction
      .post(`/ticket/reply-ticket`, formData)
      .then(function (response) {
        setLoading(false)
        setUserimage(null)
        router.push({
          pathname: '/support',
        })
        toast.success(response?.data?.message)
      })
      .catch(function (error) {
        toast.error(error?.response?.data?.message)
        setLoading(false)
        console.log(error)
      })
  }
  return (
    <>
      <section className=''>
        <div className=''>
          {/* form */}
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {(formik) => {
              return (
                <Form className='  text-babyblack space-y-10 font-sans w-full pb-6 md:px-0 '>
                  <div className=' space-y-8  md:space-y-10 lg:space-y-12 px-2 py-4'>
                    {/* message*/}
                    <div className='space-y-3'>
                      <h1 className='text-sm '>Message</h1>
                      <div className='w-full bg-white  rounded-lg    '>
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
                              className=' bg-white border-babygrey border w-full py-3 px-4 outline-babypurple  text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm '
                            />
                          </div>
                          <div className='text-softRed text-xs mt-1 px-4'>
                            <ErrorMessage name='message' />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* photo */}
                    <div className='space-y-3'>
                      <h1 className='text-sm'>Atttachments</h1>
                      <div className='w-full bg-white  rounded-lg  space-y-3 lg:space-y-6 '>
                        {/* photos */}
                        <div className='flex justify-between items-start gap-4 '>
                          <div className='flex flex-col gap-2 lg:gap-4 items-center'>
                            {userimage?.map((item, index) => {
                              return (
                                <div
                                  key={index}
                                  className='border border-babygrey   w-52 md:w-64  xl:w-96  relative'
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
                                      className='block   w-40 md:w-60 lg:w-64 xl:w-80 text-xs text-babyblack file:mr-4 file:py-2 file:px-4 file:border-l-0 file:border-t-0 file:border-b-0 file:border-babygrey file:border-r file:border file:text-xs file:font-semibold file:text-babyblack cursor-pointer file:cursor-pointer file:bg-white lg:file:text-sm md:file:py-3 xl:file:text-base lg:text-sm xl:text-base truncate 
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
                              <span className='hidden lg:inline-block '>
                                More Files
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* more */}
                        <h1 className='text-xs text-babypurple'>
                          Only Images and Pdf's are allowed
                        </h1>
                      </div>
                    </div>
                  </div>
                  {/* button */}
                  <div className=' px-2 flex justify-start items-center gap-6 lg:gap-10 max-w-xs '>
                    <button
                      type='submit'
                      // disable={loading}
                      className='bg-babypurple text-white px-2 py-2 lg:py-3    rounded-md w-full  text-xs md:text-sm  shadow-md transition ease-in-out delay-150   hover:bg-indigo-500 duration-1000 hover:border-none hover:text-white '
                    >
                      {loading ? (
                        <div className='flex justify-center gap-2 items-center'>
                          <div className='spinner'></div>
                          Sending...
                        </div>
                      ) : (
                        'Submit'
                      )}
                    </button>
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

export default Supportform
