import React, { useState } from 'react'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { BiCalendar } from 'react-icons/bi'
import { LuFilter } from 'react-icons/lu'
import { BsBookmark } from 'react-icons/bs'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { MdLocationPin } from 'react-icons/md'
import { openFilter, closeFilter } from '@/features/rental/filterSlice'
import { useSelector, useDispatch } from 'react-redux'
function Search() {
  const [loading, setLoading] = useState(false)
  const { bookmarked } = useSelector((store) => store.rental)
  const initialValues = {
    city: '',
    date: new Date(),
  }
  const onSubmit = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(false)

    setLoading(true)

    // console.log(values)
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
  const dispatch = useDispatch()
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => {
          return (
            <Form className='flex flex-wrap gap-4'>
              {/* filter */}
              <div
                onClick={() => dispatch(openFilter())}
                className='xl:flex lg:items-center gap-3 border lg:py-3 lg:px-8 hidden  cursor-pointer bg-[#F5F5F5]'
              >
                <LuFilter />
                <h1>Filter</h1>
              </div>
              {/* city */}
              <div className=' relative  w-max border flex-grow  px-4 py-2 lg:py-3 lg:px-8'>
                <Field
                  type='text'
                  name='city'
                  placeholder='Your City'
                  className='  text-xs placeholder:text-xs  lg:text-sm lg:placeholder:text-sm outline-none rounded-sm bg-white'
                />
                <MdLocationPin className='absolute  top-1/2  right-1 -translate-x-1/2 -translate-y-1/2 text-babyblack  cursor-pointer font-bold sm:text-lg  lg:text-xl xl:text-2xl' />
              </div>
              {/* date */}
              <div className=' w-max relative border flex-grow  px-4 py-2 lg:py-3 lg:px-8'>
                <Field name='date'>
                  {({ field, form }) => {
                    return (
                      <DatePicker
                        id='date'
                        className=' text-xs placeholder:text-xs outline-none rounded-sm bg-white lg:text-sm lg:placeholder:text-sm'
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
                className='bg-babypurple w-max px-6 py-2 lg:py-3 lg:px-20 flex-grow text-white rounded-sm  shadow-lg'
              >
                Search
              </button>
              {/* saved */}
              <div className='xl:flex lg:items-center gap-3 border lg:py-3 lg:px-8 hidden  cursor-pointer bg-[#F5F5F5]'>
                <BsBookmark />
                <h1>Favorites ({bookmarked.length})</h1>
              </div>
            </Form>
          )
        }}
      </Formik>
    </>
  )
}

export default Search

//  className={`${
//                             formik.errors.city && formik.touched.city
//                               ? ' md:border-2  border  px-1 border-softRed   text-xs placeholder:text-xs md:text-sm  lg:text-base  placeholder-babyblack bg-white text-center focus:outline-none h-full'
//                               : '  text-xs placeholder:text-xs md:text-sm lg:text-base  placeholder-babyblack  bg-softpurple text-center focus:outline-none '
//                           }`}
