import React, { useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import Navbar from '@/components/Navigation/Navbar/index'
import Footer from '@/components/Navigation/Footer'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FileUploader } from 'react-drag-drop-files'
import { RiDeleteBack2Fill } from 'react-icons/ri'
import { FaStar } from 'react-icons/fa'
import { LuImagePlus } from 'react-icons/lu'
import { MdDelete, MdKeyboardBackspace } from 'react-icons/md'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import mainAxiosAction from '../../../../components/axiosAction/index'

function Returnvehicle() {
  const router = useRouter()
  const fileTypes = ['JPG', 'JPEG', 'PNG']
  const bookingId = router.query.id
  const { carId } = router.query
  const [loading, setLoading] = useState(false)
  const [userimage, setUserimage] = useState([])
  const [isuploading, setIsuploading] = useState(true)
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)

  const initialValues = {
    comment: '',
  }

  const onSubmit = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(false)
    setLoading(true)

    returnusercar(values, onSubmitProps.resetForm())
  }

  const returnusercar = (values, callback) => {
    if (userimage?.length < 6) {
      toast.error('Please upload atleast six photos of your vehicle')
      setLoading(false)
    } else {
      const formData = new FormData()
      userimage.forEach((file, index) => {
        // Append each file with a unique name (e.g., fileName_0, fileName_1, etc.)
        formData.append('car_images', file)
      })

      formData?.append('comment', values.comment)
      formData?.append('rating_value', rating)
      formData?.append('booking_id', bookingId)
      mainAxiosAction
        .post(`/cars/return-car`, formData)
        .then(function (response) {
          setLoading(false)
          setUserimage([])
          router.push({
            pathname: '/renthistory',
          })
          toast.success(response?.data?.message)
          callback()
        })
        .catch(function (error) {
          toast.error(error?.response?.data?.message)
          setLoading(false)
          console.log(error)
        })
    }
  }

  const handleDelete = (index) => {
    // Create a copy of the current uploadedcontent array
    if (userimage.length < 2) {
      setIsuploading(true)
      setUserimage([])
      return
    }

    const updatedContent = [...userimage]

    // Remove the file at the specified index
    updatedContent.splice(index, 1)

    // Update the state with the modified array
    setUserimage(updatedContent)
  }
  return (
    <>
      <Navbar />

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        // validationSchema={validationSchema}
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
                        {/* old */}

                        {/* new */}
                        {isuploading ? (
                          <div className='px-4 py-4 space-y-10'>
                            <FileUploader
                              classes='border border-babypurple lg:border-2  border-dashed rounded-md flex flex-col  w-full max-w-xs lg:max-w-sm justify-center items-center mx-auto px-6 py-6 h-40'
                              handleChange={async (files) => {
                                // Convert FileList to an array using Array.from
                                const filesArray = Array.from(files)

                                // Check for invalid files based on size
                                const invalidFiles = filesArray.filter(
                                  (file) => file.size > 20000000
                                )

                                if (invalidFiles.length > 0) {
                                  toast.error(
                                    'One or more files have size exceeding 20MB'
                                  )
                                  return
                                }
                                if (filesArray.length < 6) {
                                  toast.error(
                                    'You must upload at least 6 photos '
                                  )
                                  return
                                }

                                // Set the files array in the state
                                setUserimage(filesArray)
                                setIsuploading(false)
                              }}
                              name='file'
                              types={fileTypes}
                              label='Choose a file or Drag it here'
                              hoverTitle='Drop here'
                              multiple={true}
                              // fileOrFiles={fileAdded} // Include fileAdded if needed
                              children={
                                <label className='custom-file-upload space-y-4 md:space-y-6 flex flex-col justify-center items-center  text-center  max-w-lg  '>
                                  <LuImagePlus className='text-center text-5xl lg:text-7xl text-babypurple mx-auto text-slate-400' />
                                  <h1
                                    htmlFor=''
                                    className='text-center text-xs md:text-sm xl:text-base'
                                  >
                                    {' '}
                                    <span className='font-bold text-xs md:text-sm xl:text-base cursor-pointer'>
                                      Choose a file
                                    </span>{' '}
                                    or Drag it here
                                  </h1>
                                </label>
                              }
                            />

                            <h1 className='text-xs md:text-base text-center'>
                              * supported files are JPG, JPEG, PNG <br />
                              <span className='text-softRed font-bold'>
                                File size must not be more than 20MB
                              </span>
                            </h1>
                          </div>
                        ) : (
                          <div className=' flex flex-col  gap-4 w-full'>
                            <div className='bg-inherit  text-xs lg:text-sm max-w-md  outline-none w-full space-y-3 lg:space-y-4'>
                              {userimage?.map((file, index) => (
                                <div
                                  key={index}
                                  className='border-babygreen border rounded-md px-2 py-1 lg:py-2 lg:px-3 flex items-center justify-between gap-2 '
                                >
                                  <h1 className='text-xs lg:text-sm'>
                                    {file?.name}
                                  </h1>

                                  <MdDelete
                                    onClick={() => handleDelete(index)}
                                    className=' cursor-pointer flex-shrink-0 text-red-500 text-sm lg:text-base'
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
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
                        <div className='spinner'></div>
                        Uploading...
                      </div>
                    ) : (
                      'Return vehicle'
                    )}
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
