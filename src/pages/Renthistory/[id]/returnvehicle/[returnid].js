import React, { useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import { cars } from '../../../../utilis/Cardata'
import Navbar from '@/components/Navigation/Navbar'
import Footer from '@/components/Navigation/Footer'
import Image from 'next/image'
import { FileUploader } from 'react-drag-drop-files'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { MdOutlineAddAPhoto } from 'react-icons/md'

import { FaStar } from 'react-icons/fa'

import { MdKeyboardBackspace } from 'react-icons/md'
import Link from 'next/link'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { ImSpinner } from 'react-icons/im'

function Returnvehicle() {
  const router = useRouter()

  const carId = router.query.id

  const singlecar = useMemo(
    () => cars.filter((item) => item.id === Number(carId))?.[0],
    [carId]
  )
  const [loading, setLoading] = useState(false)
  const [userimage, setUserimage] = useState(null)
  const [imagetoupload, setImagetoupload] = useState(null)
  const [ratings, setRatings] = useState(0)
  const [userimagetwo, setUserimagetwo] = useState(null)
  const [imagetouploadtwo, setImagetouploadtwo] = useState(null)
  const [imageerror, setImageerror] = useState('')
  const [imageerrortwo, setImageerrortwo] = useState('')
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)

  const fileTypes = ['JPG', 'JPEG', 'PNG']
  // drivers
  const handleupload = (uploadedcontent) => {
    if (uploadedcontent.size > 1000000) {
      toast.error('file size is too large')
    } else {
      setUserimage(URL.createObjectURL(uploadedcontent))
      setImagetoupload(uploadedcontent)
    }
  }

  // insurance
  const handleuploadtwo = (uploadedcontent) => {
    if (uploadedcontent.size > 1000000) {
      toast.error('file size is too large')
    } else {
      setUserimagetwo(URL.createObjectURL(uploadedcontent))
      setImagetouploadtwo(uploadedcontent)
    }
  }

  const initialValues = {
    comment: '',
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
    //  router.push({
    //    pathname: '/Auth/emailverification',
    //    //  query: response.data.data.user,
    //  })
    //  console.log(values)
  }

  const validationSchema = Yup.object().shape({
    comment: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('No Comment Provided'),
  })
  return (
    <>
      <Navbar />

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => {
          return (
            <Form className='bg-[#F5F5F5]  w-full pt-10 xl:pt-16  overflow-x-hidden'>
              {/* body */}
              <div className='max-w-md sm:max-w-lg mx-auto font-sans md:max-w-4xl lg:max-w-6xl xl:max-w-7xl  px-4 md:px-6  lg:px-8 space-y-6 lg:space-y-10   pb-10  '>
                {/* back */}

                <div
                  onClick={() => {
                    router.push({
                      pathname: `/Renthistory/${carId}`,
                    })
                  }}
                  className='flex items-center gap-2 cursor-pointer'
                >
                  <MdKeyboardBackspace className='lg:text-2xl' />
                  <h1 className='text-sm  lg:text-base font-bold'>
                    {' '}
                    Car Rent history
                  </h1>
                </div>

                {/* body */}
                <div className='space-y-5  w-full  '>
                  {/* first */}
                  <div className='space-y-5 md:space-y-6 lg:space-y-8'>
                    {/* car photos*/}
                    <div className='bg-white px-4 py-4 rounded-lg shadow-md lg:px-8 lg:py-6'>
                      <h1 className='font-bold text-sm sm:text-base md:text-lg lg:text-xl border-b pb-2'>
                        Car Photos
                      </h1>
                      {/* img */}
                      <div className='w-full bg-white pt-2  space-y-6'>
                        <h1 className='text-xs lg:text-sm'>
                          Please upload at least 6 photos of the vehicle on
                          return and these must be pictures of its front, back,
                          left side, right side, interior and booth. This is to
                          help owner access the state of the vehicle on return{' '}
                        </h1>
                        {/* upload images */}
                        <div className='space-y-6 md:grid md:grid-cols-2 md:space-y-0 md:gap-x-10 md:gap-y-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-y-8'>
                          {/* one */}
                          <div className='    '>
                            <div className='relative'>
                              {userimage && (
                                <Image
                                  src={userimage}
                                  alt='drivers license photo'
                                  width={500}
                                  height={500}
                                  priority={true}
                                  className='object-cover  border border-babygreen h-32 w-full md:h-40 xl:h-48 object-center '
                                />
                              )}
                              {userimage && (
                                <div className='absolute -top-2 -right-2'>
                                  <FileUploader
                                    classes='bg-babygreen  w-full   rounded-full cursor-pointer  '
                                    handleChange={handleupload}
                                    name='file'
                                    types={fileTypes}
                                    children={
                                      <div className=' bg-babypurple  px-2 py-2 rounded-full xl:px-3 xl:py-3 '>
                                        <MdOutlineAddAPhoto className=' text-xl xl:text-2xl  text-white' />
                                      </div>
                                    }
                                  />
                                </div>
                              )}
                            </div>

                            {!userimage && (
                              <FileUploader
                                classes='bg-babygreen  w-full   rounded-full cursor-pointer  '
                                handleChange={handleupload}
                                name='file'
                                types={fileTypes}
                                children={
                                  <div className='px-6 py-6 border-2 border-babypurple rounded-md  lg:rounded-lg border-dotted flex flex-col justify-center items-center space-y-2  mx-auto'>
                                    <MdOutlineAddAPhoto className=' text-3xl text-babypurple' />
                                    <p className='text-xs text-center'>
                                      Upload digital copy of your driver's
                                      license
                                    </p>
                                    <p className='text-xs text-softRed '>
                                      (Max size 5 MB)
                                    </p>
                                  </div>
                                }
                              />
                            )}
                            <div className='text-softRed text-xs mt-1 px-4'>
                              <h1>{imageerror}</h1>
                            </div>
                          </div>
                          {/* two */}
                          <div className='    '>
                            <div className='relative'>
                              {userimage && (
                                <Image
                                  src={userimage}
                                  alt='drivers license photo'
                                  width={500}
                                  height={500}
                                  priority={true}
                                  className='object-cover  border border-babygreen h-32 w-full md:h-40 xl:h-48 object-center '
                                />
                              )}
                              {userimage && (
                                <div className='absolute -top-2 -right-2'>
                                  <FileUploader
                                    classes='bg-babygreen  w-full   rounded-full cursor-pointer  '
                                    handleChange={handleupload}
                                    name='file'
                                    types={fileTypes}
                                    children={
                                      <div className=' bg-babypurple  px-2 py-2 rounded-full xl:px-3 xl:py-3 '>
                                        <MdOutlineAddAPhoto className=' text-xl xl:text-2xl  text-white' />
                                      </div>
                                    }
                                  />
                                </div>
                              )}
                            </div>

                            {!userimage && (
                              <FileUploader
                                classes='bg-babygreen  w-full   rounded-full cursor-pointer  '
                                handleChange={handleupload}
                                name='file'
                                types={fileTypes}
                                children={
                                  <div className='px-6 py-6 border-2 border-babypurple border-dotted flex flex-col justify-center rounded-md  lg:rounded-lg items-center space-y-2  mx-auto'>
                                    <MdOutlineAddAPhoto className=' text-3xl text-babypurple' />
                                    <p className='text-xs text-center'>
                                      Upload digital copy of your driver's
                                      license
                                    </p>
                                    <p className='text-xs text-softRed '>
                                      (Max size 5 MB)
                                    </p>
                                  </div>
                                }
                              />
                            )}
                            <div className='text-softRed text-xs mt-1 px-4'>
                              <h1>{imageerror}</h1>
                            </div>
                          </div>
                          {/* three */}
                          <div className='    '>
                            <div className='relative'>
                              {userimage && (
                                <Image
                                  src={userimage}
                                  alt='drivers license photo'
                                  width={500}
                                  height={500}
                                  priority={true}
                                  className='object-cover  border border-babygreen h-32 w-full md:h-40 xl:h-48 object-center '
                                />
                              )}
                              {userimage && (
                                <div className='absolute -top-2 -right-2'>
                                  <FileUploader
                                    classes='bg-babygreen  w-full   rounded-full cursor-pointer  '
                                    handleChange={handleupload}
                                    name='file'
                                    types={fileTypes}
                                    children={
                                      <div className=' bg-babypurple  px-2 py-2 rounded-full xl:px-3 xl:py-3 '>
                                        <MdOutlineAddAPhoto className=' text-xl xl:text-2xl  text-white' />
                                      </div>
                                    }
                                  />
                                </div>
                              )}
                            </div>

                            {!userimage && (
                              <FileUploader
                                classes='bg-babygreen  w-full   rounded-full cursor-pointer  '
                                handleChange={handleupload}
                                name='file'
                                types={fileTypes}
                                children={
                                  <div className='px-6 py-6 border-2 border-babypurple border-dotted flex flex-col justify-center items-center space-y-2  rounded-md  lg:rounded-lg mx-auto'>
                                    <MdOutlineAddAPhoto className=' text-3xl text-babypurple' />
                                    <p className='text-xs text-center'>
                                      Upload digital copy of your driver's
                                      license
                                    </p>
                                    <p className='text-xs text-softRed '>
                                      (Max size 5 MB)
                                    </p>
                                  </div>
                                }
                              />
                            )}
                            <div className='text-softRed text-xs mt-1 px-4'>
                              <h1>{imageerror}</h1>
                            </div>
                          </div>
                          {/* four */}
                          <div className='    '>
                            <div className='relative'>
                              {userimage && (
                                <Image
                                  src={userimage}
                                  alt='drivers license photo'
                                  width={500}
                                  height={500}
                                  priority={true}
                                  className='object-cover  border border-babygreen h-32 w-full md:h-40 xl:h-48 object-center '
                                />
                              )}
                              {userimage && (
                                <div className='absolute -top-2 -right-2'>
                                  <FileUploader
                                    classes='bg-babygreen  w-full   rounded-full cursor-pointer  '
                                    handleChange={handleupload}
                                    name='file'
                                    types={fileTypes}
                                    children={
                                      <div className=' bg-babypurple  px-2 py-2 rounded-full xl:px-3 xl:py-3 '>
                                        <MdOutlineAddAPhoto className=' text-xl xl:text-2xl  text-white' />
                                      </div>
                                    }
                                  />
                                </div>
                              )}
                            </div>

                            {!userimage && (
                              <FileUploader
                                classes='bg-babygreen  w-full   rounded-full cursor-pointer  '
                                handleChange={handleupload}
                                name='file'
                                types={fileTypes}
                                children={
                                  <div className='px-6 py-6 border-2 border-babypurple border-dotted flex flex-col rounded-md  lg:rounded-lg justify-center items-center space-y-2  mx-auto'>
                                    <MdOutlineAddAPhoto className=' text-3xl text-babypurple' />
                                    <p className='text-xs text-center'>
                                      Upload digital copy of your driver's
                                      license
                                    </p>
                                    <p className='text-xs text-softRed '>
                                      (Max size 5 MB)
                                    </p>
                                  </div>
                                }
                              />
                            )}
                            <div className='text-softRed text-xs mt-1 px-4'>
                              <h1>{imageerror}</h1>
                            </div>
                          </div>
                          {/* five */}
                          <div className='    '>
                            <div className='relative'>
                              {userimage && (
                                <Image
                                  src={userimage}
                                  alt='drivers license photo'
                                  width={500}
                                  height={500}
                                  priority={true}
                                  className='object-cover  border border-babygreen h-32 w-full md:h-40 xl:h-48 object-center '
                                />
                              )}
                              {userimage && (
                                <div className='absolute -top-2 -right-2'>
                                  <FileUploader
                                    classes='bg-babygreen  w-full   rounded-full cursor-pointer  '
                                    handleChange={handleupload}
                                    name='file'
                                    types={fileTypes}
                                    children={
                                      <div className=' bg-babypurple  px-2 py-2 rounded-full xl:px-3 xl:py-3 '>
                                        <MdOutlineAddAPhoto className=' text-xl xl:text-2xl  text-white' />
                                      </div>
                                    }
                                  />
                                </div>
                              )}
                            </div>

                            {!userimage && (
                              <FileUploader
                                classes='bg-babygreen  w-full   rounded-full cursor-pointer  '
                                handleChange={handleupload}
                                name='file'
                                types={fileTypes}
                                children={
                                  <div className='px-6 py-6 border-2 border-babypurple border-dotted flex flex-col justify-center items-center space-y-2 rounded-md  lg:rounded-lg mx-auto'>
                                    <MdOutlineAddAPhoto className=' text-3xl text-babypurple' />
                                    <p className='text-xs text-center'>
                                      Upload digital copy of your driver's
                                      license
                                    </p>
                                    <p className='text-xs text-softRed '>
                                      (Max size 5 MB)
                                    </p>
                                  </div>
                                }
                              />
                            )}
                            <div className='text-softRed text-xs mt-1 px-4'>
                              <h1>{imageerror}</h1>
                            </div>
                          </div>
                          {/* six */}
                          <div className='    '>
                            <div className='relative'>
                              {userimage && (
                                <Image
                                  src={userimage}
                                  alt='drivers license photo'
                                  width={500}
                                  height={500}
                                  priority={true}
                                  className='object-cover  border border-babygreen h-32 w-full md:h-40 xl:h-48 object-center '
                                />
                              )}
                              {userimage && (
                                <div className='absolute -top-2 -right-2'>
                                  <FileUploader
                                    classes='bg-babygreen  w-full   rounded-full cursor-pointer  '
                                    handleChange={handleupload}
                                    name='file'
                                    types={fileTypes}
                                    children={
                                      <div className=' bg-babypurple  px-2 py-2 rounded-full xl:px-3 xl:py-3 '>
                                        <MdOutlineAddAPhoto className=' text-xl xl:text-2xl  text-white' />
                                      </div>
                                    }
                                  />
                                </div>
                              )}
                            </div>

                            {!userimage && (
                              <FileUploader
                                classes='bg-babygreen  w-full   rounded-full cursor-pointer  '
                                handleChange={handleupload}
                                name='file'
                                types={fileTypes}
                                children={
                                  <div className='px-6 py-6 border-2 border-babypurple border-dotted flex flex-col justify-center items-center space-y-2 rounded-md  lg:rounded-lg mx-auto'>
                                    <MdOutlineAddAPhoto className=' text-3xl text-babypurple' />
                                    <p className='text-xs text-center'>
                                      Upload digital copy of your driver's
                                      license
                                    </p>
                                    <p className='text-xs text-softRed '>
                                      (Max size 5 MB)
                                    </p>
                                  </div>
                                }
                              />
                            )}
                            <div className='text-softRed text-xs mt-1 px-4'>
                              <h1>{imageerror}</h1>
                            </div>
                          </div>
                          {/* seven */}
                          <div className='    '>
                            <div className='relative'>
                              {userimage && (
                                <Image
                                  src={userimage}
                                  alt='drivers license photo'
                                  width={500}
                                  height={500}
                                  priority={true}
                                  className='object-cover  border border-babygreen h-32 w-full md:h-40 xl:h-48 object-center '
                                />
                              )}
                              {userimage && (
                                <div className='absolute -top-2 -right-2'>
                                  <FileUploader
                                    classes='bg-babygreen  w-full   rounded-full cursor-pointer  '
                                    handleChange={handleupload}
                                    name='file'
                                    types={fileTypes}
                                    children={
                                      <div className=' bg-babypurple  px-2 py-2 rounded-full xl:px-3 xl:py-3 '>
                                        <MdOutlineAddAPhoto className=' text-xl xl:text-2xl  text-white' />
                                      </div>
                                    }
                                  />
                                </div>
                              )}
                            </div>

                            {!userimage && (
                              <FileUploader
                                classes='bg-babygreen  w-full   rounded-full cursor-pointer  '
                                handleChange={handleupload}
                                name='file'
                                types={fileTypes}
                                children={
                                  <div className='px-6 py-6 border-2 border-babypurple border-dotted flex flex-col justify-center items-center space-y-2 rounded-md  lg:rounded-lg  mx-auto'>
                                    <MdOutlineAddAPhoto className=' text-3xl text-babypurple' />
                                    <p className='text-xs text-center'>
                                      Upload digital copy of your driver's
                                      license
                                    </p>
                                    <p className='text-xs text-softRed '>
                                      (Max size 5 MB)
                                    </p>
                                  </div>
                                }
                              />
                            )}
                            <div className='text-softRed text-xs mt-1 px-4'>
                              <h1>{imageerror}</h1>
                            </div>
                          </div>
                          {/* eight */}
                          <div className='    '>
                            <div className='relative'>
                              {userimage && (
                                <Image
                                  src={userimage}
                                  alt='drivers license photo'
                                  width={500}
                                  height={500}
                                  priority={true}
                                  className='object-cover  border border-babygreen h-32 w-full md:h-40 xl:h-48 object-center '
                                />
                              )}
                              {userimage && (
                                <div className='absolute -top-2 -right-2'>
                                  <FileUploader
                                    classes='bg-babygreen  w-full   rounded-full cursor-pointer  '
                                    handleChange={handleupload}
                                    name='file'
                                    types={fileTypes}
                                    children={
                                      <div className=' bg-babypurple  px-2 py-2 rounded-full xl:px-3 xl:py-3 '>
                                        <MdOutlineAddAPhoto className=' text-xl xl:text-2xl  text-white' />
                                      </div>
                                    }
                                  />
                                </div>
                              )}
                            </div>

                            {!userimage && (
                              <FileUploader
                                classes='bg-babygreen  w-full   rounded-full cursor-pointer  '
                                handleChange={handleupload}
                                name='file'
                                types={fileTypes}
                                children={
                                  <div className='px-6 py-6 border-2 border-babypurple border-dotted flex flex-col justify-center items-center space-y-2 rounded-md  lg:rounded-lg  mx-auto'>
                                    <MdOutlineAddAPhoto className=' text-3xl text-babypurple' />
                                    <p className='text-xs text-center'>
                                      Upload digital copy of your driver's
                                      license
                                    </p>
                                    <p className='text-xs text-softRed '>
                                      (Max size 5 MB)
                                    </p>
                                  </div>
                                }
                              />
                            )}
                            <div className='text-softRed text-xs mt-1 px-4'>
                              <h1>{imageerror}</h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* rate car */}
                    <div className='bg-white px-4 py-4 rounded-lg space-y-2 lg:space-y-4 lg:px-8 shadow-md lg:py-6'>
                      <h1 className='font-bold text-sm sm:text-base md:text-lg lg:text-xl border-b pb-2'>
                        Car Ratings
                      </h1>
                      {/* ratings */}
                      <h1 className='text-xs pb-2 lg:text-sm  xl:text-base md:text-center lg:pb-3'>
                        Don’t Forget to rate your experience with this vehicle
                        as it helps you and other user alike make an informed
                        decision on our platform.
                      </h1>
                      <div className=' justify-center flex items-center gap-4 lg:gap-8'>
                        <h1 className='text-xs font-bold lg:text-sm xl:text-base '>
                          Very bad
                        </h1>
                        <div className='flex items-center gap-2 justify-center'>
                          {[...Array(5)].map((star, index) => {
                            const currentRating = index + 1
                            return (
                              <label key={index} className=''>
                                <input
                                  type='radio'
                                  name='rating'
                                  value={currentRating}
                                  className='hidden'
                                  onClick={() => setRating(currentRating)}
                                />

                                <FaStar
                                  className='flex items-center cursor-pointer text-xl md:text-2xl lg:text-3xl xl:text-5xl'
                                  color={
                                    currentRating <= (hover || rating)
                                      ? '#A303A0'
                                      : '#e4e5e9'
                                  }
                                  onMouseEnter={() => setHover(currentRating)}
                                  onMouseLeave={() => setHover(null)}
                                />
                              </label>
                            )
                          })}
                        </div>
                        <h1 className='text-xs font-bold lg:text-sm xl:text-base '>
                          Excellent
                        </h1>
                      </div>
                      {rating && (
                        <h1 className='text-xs text-center lg:text-sm  pt-2 lg:pt-3 text-babyblack'>
                          {' '}
                          You have rated your experience with this vehicle as{' '}
                          {rating > 4 ? 'an' : 'a'}{' '}
                          <span className='font-bold'>
                            {' '}
                            {rating === 1
                              ? 'very bad'
                              : rating === 2
                              ? 'bad'
                              : rating === 3
                              ? 'good'
                              : rating === 4
                              ? 'very good'
                              : 'Excellent'}{' '}
                          </span>
                          one !
                        </h1>
                      )}
                    </div>
                    {/* comment */}
                    <div className='bg-white px-4 py-4 rounded-lg space-y-4 lg:space-y-4 lg:px-8 shadow-md lg:py-6'>
                      <h1 className='font-bold text-sm sm:text-base md:text-lg lg:text-xl border-b pb-2'>
                        Comment
                      </h1>
                      {/* comment */}
                      <div className='space-y-4'>
                        <h1 className='text-xs lg:text-sm'>
                          Share your exprience while using this vehicle
                        </h1>
                        <div className='flex  relative justify-between items-center w-full md:col-span-2 '>
                          <Field
                            as='textarea'
                            type='text'
                            id='comment'
                            name='comment'
                            cols={20}
                            rows={10}
                            placeholder='Input your comment here'
                            className=' rounded-md bg-white border-babygrey border w-full py-3 px-4 outline-babypurple  text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base lg:rounded-lg '
                          />
                        </div>
                        <div className='text-softRed text-xs mt-1 px-4'>
                          <ErrorMessage name='comment' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* button */}
                <div className='flex items-center gap-4 pt-6 lg:pt-10 lg:gap-10  max-w-sm mx-auto'>
                  <button
                    type='submit'
                    className='bg-babypurple text-white px-4 py-3   rounded-md w-full md:py-4   text-sm lg:text-base transition ease-in-out delay-150  hover:-translate-y-1  hover:bg-indigo-500 duration-300 hover:border-none hover:text-white '
                  >
                    {loading ? (
                      <div className='flex justify-center gap-2 items-center'>
                        <ImSpinner className='animate animate-spin' />
                        Updating...
                      </div>
                    ) : (
                      'Return vehicle'
                    )}
                  </button>
                  <button
                    onClick={() => {
                      router.push({
                        pathname: `/support`,
                      })
                    }}
                    className=' text-babyblack border border-babyblack px-4 py-3 md:py-4   rounded-md w-full  text-sm lg:text-base transition ease-in-out delay-150  hover:-translate-y-1   hover:bg-indigo-500 duration-300 hover:border-none hover:text-white '
                  >
                    Report Issue
                  </button>
                </div>
              </div>

              <Footer />
            </Form>
          )
        }}
      </Formik>
    </>
  )
}

export default Returnvehicle
