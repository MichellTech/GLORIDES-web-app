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
import { RiDeleteBack2Fill } from 'react-icons/ri'
import { FaStar } from 'react-icons/fa'
import { LuImagePlus } from 'react-icons/lu'
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
  const [userimage, setUserimage] = useState([{ id: 1, file: null }])

  const [ratings, setRatings] = useState(0)
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)

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
                      pathname: `/renthistory/${carId}`,
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

                        <div className='flex justify-between items-start gap-4  '>
                          <div className='flex flex-wrap  gap-6  lg:gap-5  items-center'>
                            {userimage.map((item, index) => {
                              return (
                                <div key={index} className='col-span-full'>
                                  {!item.file ? (
                                    <div className='mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 relative'>
                                      <div className='text-center'>
                                        <LuImagePlus className='text-center text-5xl mx-auto text-slate-400' />
                                        <div className='mt-4 flex text-sm leading-6 text-gray-600'>
                                          <label
                                            htmlFor='file-upload'
                                            className='relative cursor-pointer rounded-md bg-white font-semibold mx-auto text-indigo-500 focus-within:outline-none  text-center  hover:text-indigo-500'
                                          >
                                            Click here to upload a file
                                            <input
                                              id='file-upload'
                                              name='file-upload'
                                              type='file'
                                              className='sr-only'
                                              accept='image/png, image/jpg, image/gif, image/jpeg'
                                              // value={item?.file?.name}
                                              onChange={(e) => {
                                                setUserimage((previous) =>
                                                  previous.map((i) => {
                                                    if (i.id === item.id) {
                                                      i.file = e.target.files[0]
                                                      // console.log(i.id, 'olamide')
                                                      // console.log(item)
                                                      // console.log(index)
                                                      return i
                                                    }
                                                    return i
                                                  })
                                                )
                                              }}
                                            />
                                          </label>
                                          {/* <p className='pl-1'>or drag and drop</p> */}
                                        </div>
                                        <p className='text-xs leading-5 mt-1 text-gray-600'>
                                          PNG, JPG, GIF up to 10MB
                                        </p>
                                      </div>
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
                                          className='absolute  -top-3 -right-3 p-2 rounded-full text-babyblack  cursor-pointer font-bold md:text-lg bg-softpurple  '
                                        >
                                          <RiDeleteBack2Fill />
                                        </div>
                                      )}
                                    </div>
                                  ) : (
                                    <div className='relative'>
                                      <img
                                        src={URL.createObjectURL(item?.file)}
                                        className='w-[13rem] h-[12.4rem]  rounded-md object-center object-cover'
                                        alt='photo'
                                      />
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
                                          className='absolute  -top-3 -right-3 p-2 rounded-full text-babyblack  cursor-pointer font-bold md:text-lg bg-softpurple '
                                        >
                                          <RiDeleteBack2Fill />
                                          <h1>hello</h1>
                                        </div>
                                      )}
                                      {index === 0 && item.file && (
                                        <div
                                          onClick={() =>
                                            setUserimage([
                                              {
                                                id: 1,
                                                file: null,
                                              },
                                            ])
                                          }
                                          className='absolute  -top-3 -right-3 p-2 rounded-full text-babyblack  cursor-pointer font-bold md:text-lg bg-softpurple '
                                        >
                                          <RiDeleteBack2Fill />
                                        </div>
                                      )}
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
                              className='px-4 py-2 md:py-3 bg-softpurple  shadow-md text-xs sm:px-6 font-bold lg:text-sm lg:px-8 cursor-pointer w-max '
                            >
                              Add{' '}
                              <span className='hidden lg:inline-block '>
                                More Photos
                              </span>
                            </div>
                          </div>
                        </div>
                        <h1 className='px-4 pt-4 sm:px-6 md:px-8 text-xs text-babypurple'>
                          Only Images are allowed
                        </h1>
                      </div>
                    </div>
                    {/* rate car */}
                    <div className='bg-white px-4 py-4 rounded-lg space-y-2 lg:space-y-4 lg:px-8 shadow-md lg:py-6'>
                      <h1 className='font-bold text-sm sm:text-base md:text-lg lg:text-xl border-b pb-2'>
                        Car Ratings
                      </h1>
                      {/* ratings */}
                      <h1 className='text-xs pb-2 lg:text-sm  xl:text-base r lg:pb-3'>
                        Rate your experience with this vehicle. This information
                        is important to us as it helps you and other user alike
                        make an informed decision on our platform.
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
