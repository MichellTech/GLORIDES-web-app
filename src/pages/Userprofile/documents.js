import React, { useState, useEffect } from 'react'
import Navbar from '@/components/Navigation/Navbar/index'
import Image from 'next/image'
import Profilenavsmall from '../../components/Profile/Profilenavsmall'
import Profilenavbig from '../../components/Profile/Profilenavbig'
import { MdOutlineAddAPhoto } from 'react-icons/md'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import 'react-datepicker/dist/react-datepicker.css'
import { FileUploader } from 'react-drag-drop-files'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { getuserprofile } from '@/features/userpersona/userSlice'
import Link from 'next/link'
import Loader from '../../components/Loaders/profileloader'

function EditDocs() {
  const [loading, setLoading] = useState(false)
  const [userimagetwo, setUserimagetwo] = useState(null)
  const [imagetouploadtwo, setImagetouploadtwo] = useState(null)
  const [userimagethree, setUserimagethree] = useState(null)
  const [imagetouploadthree, setImagetouploadthree] = useState(null)
  const { isLoading, userData } = useSelector((store) => store.userpersona)
  const dispatch = useDispatch()

  useEffect(() => {
    if (userData === null) {
      dispatch(getuserprofile())
    }
  }, [])

  const fileTypes = ['JPG', 'JPEG', 'PNG']
  const initialValues = {
    dln: userData?.license_number,
    iln: userData?.insurance_number,
  }

  const onSubmit = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(false)
    setLoading(true)
  }
  // validation
  const validationSchema = Yup.object().shape({
    dln: Yup.string().required('No Drivers License Number provided'),
    iln: Yup.string().required('No Insurance license Number provided'),
  })

  // drivers
  const handleuploadtwo = (uploadedcontent) => {
    if (uploadedcontent.size > 1000000) {
      toast.error('file size is too large')
    } else {
      setUserimagetwo(URL.createObjectURL(uploadedcontent))
      setImagetouploadtwo(uploadedcontent)
    }
  }
  // insurance
  const handleuploadthree = (uploadedcontent) => {
    if (uploadedcontent.size > 1000000) {
      toast.error('file size is too large')
    } else {
      setUserimagethree(URL.createObjectURL(uploadedcontent))
      setImagetouploadthree(uploadedcontent)
    }
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
        {isLoading ? (
          <div className='px-6   space-y-10  md:w-3/4  md:absolute md:top-32 md:right-0 pb-20  '>
            <Loader />
          </div>
        ) : (
          <div className=' px-6   space-y-10  md:w-3/4  md:absolute md:top-32 md:right-0 pb-20  '>
            {/* form */}
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
              enableReinitialize
            >
              {(formik) => {
                return (
                  <Form className='  space-y-10 lg:space-y-14 w-full overflow-x-hidden '>
                    {/* Driving information */}
                    <div className='bg-white space-y-4 lg:space-y-6 shadow-md rounded-md border py-4 px-6'>
                      {/* header */}
                      <div className='border-b   pb-4'>
                        <h1 className='text-lg font-bold lg:text-xl'>
                          Driving Information
                        </h1>
                      </div>
                      <div className=' md:flex md:justify-between md:items-start md:gap-4  lg:gap-10 xl:gap-14  md:space-y-0  space-y-4'>
                        {/* Driving license no*/}
                        <div className='space-y-3  pb-2 lg:pb-3 md:w-1/2 '>
                          <h1 className='text-xs text-slate-500  lg:text-sm '>
                            Driver's License Number
                          </h1>
                          {/* firstnmae */}
                          <div>
                            <Field
                              type='text'
                              name='dln'
                              placeholder='Drivers License Number'
                              className=' border w-full py-2  px-4  text-xs placeholder:text-xs bg-opacity-30 md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm bg-white      outline-babypurple'
                            />
                            <div className='text-softRed text-xs mt-1 px-4'>
                              <ErrorMessage name='dln' />
                            </div>
                          </div>
                        </div>
                        {/* card */}
                        <div className='space-y-3  pb-2 lg:pb-3 md:w-1/2 '>
                          <h1 className='text-xs text-slate-500  lg:text-sm '>
                            Driver's Liciense Card
                          </h1>
                          {/* image */}
                          <div className='  relative w-48 lg:w-60 xl:w-72 '>
                            {userimagetwo ? (
                              <Image
                                src={userimagetwo}
                                alt='logo'
                                width={1000}
                                height={1000}
                                className='object-cover  w-48 lg:w-60 xl:w-72'
                              />
                            ) : (
                              <Image
                                src={userData?.license?.url}
                                alt={userData?.license?.name}
                                width={1000}
                                height={1000}
                                className='object-cover  w-48 lg:w-60 xl:w-72'
                              />
                            )}
                            <div className='bg-babypurple rounded-full flex justify-center items-center w-7 h-7 lg:w-8 lg:h-8  absolute -top-1 lg:-top-2 right-0 '>
                              <FileUploader
                                classes=' '
                                handleChange={handleuploadtwo}
                                name='file'
                                types={fileTypes}
                                children={
                                  <MdOutlineAddAPhoto className=' lg:text-lg text-white cursor-pointer' />
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* insurance information */}
                    <div className='bg-white space-y-4 lg:space-y-6 shadow-md rounded-md border py-4 px-6'>
                      {/* header */}
                      <div className='border-b   pb-4'>
                        <h1 className='text-lg font-bold lg:text-xl '>
                          Insurance Information
                        </h1>
                      </div>
                      <div className=' md:flex md:justify-between md:items-start md:gap-4  lg:gap-10 xl:gap-14  md:space-y-0  space-y-4 w-full'>
                        {/* Driving license no*/}
                        <div className='space-y-3  pb-2 lg:pb-3 md:w-1/2  '>
                          <h1 className='text-xs text-slate-500  lg:text-sm'>
                            Insurance License Number
                          </h1>
                          {/* firstnmae */}
                          <div>
                            <Field
                              type='text'
                              name='iln'
                              placeholder='Insurance License Number'
                              className=' border w-full py-2  px-4  text-xs placeholder:text-xs bg-opacity-30 md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm bg-white      outline-babypurple'
                            />
                            <div className='text-softRed text-xs mt-1 px-4'>
                              <ErrorMessage name='iln' />
                            </div>
                          </div>
                        </div>
                        {/* card */}
                        <div className='space-y-3  pb-2 lg:pb-3 md:w-1/2 '>
                          <h1 className='text-xs text-slate-500  lg:text-sm'>
                            Insurance Liciense Card
                          </h1>
                          {/* image */}
                          <div className='  relative w-48 lg:w-60 xl:w-72 '>
                            {userimagethree ? (
                              <Image
                                src={userimagethree}
                                alt='logo'
                                width={1000}
                                height={1000}
                                className='object-cover  w-48  lg:w-60 xl:w-72'
                              />
                            ) : (
                              <Image
                                src={userData?.insurance.url}
                                alt={userData?.insurance.name}
                                width={1000}
                                height={1000}
                                className='object-cover  w-48  lg:w-60 xl:w-72'
                              />
                            )}
                            <div className='bg-babypurple rounded-full flex justify-center items-center w-7 h-7 lg:w-8 lg:h-8  absolute -top-1 lg:-top-2 right-0 '>
                              <FileUploader
                                classes=' '
                                handleChange={handleuploadthree}
                                name='file'
                                types={fileTypes}
                                children={
                                  <MdOutlineAddAPhoto className=' lg:text-lg text-white cursor-pointer' />
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-col sm:flex-row   justify-center items-center gap-4 lg:gap-8'>
                      <button
                        type='submit'
                        className='bg-babypurple text-white px-6 py-2 lg:py-3 xl:py-4    rounded-md flex justify-center items-center mx-auto text-sm xl:text-base  w-full shadow-md'
                      >
                        {loading ? (
                          <div className='flex justify-center gap-2 items-center  '>
                            <div className='spinner'></div>
                            Updating...
                          </div>
                        ) : (
                          'Update Documents'
                        )}
                      </button>
                      <Link
                        href='/userprofile/view'
                        className='bg-softpurple text-babyblack  px-6 py-2 lg:py-3 xl:py-4   rounded-md flex justify-center items-center xl:text-base text-sm w-full shadow-md'
                      >
                        Cancel
                      </Link>
                    </div>
                  </Form>
                )
              }}
            </Formik>
          </div>
        )}
      </div>
    </>
  )
}

export default EditDocs
