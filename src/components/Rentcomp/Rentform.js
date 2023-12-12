import React, { useState } from 'react'
import { State, City } from 'country-state-city'
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
import {
  openFilter,
  closeFilter,
  searchCar,
  unsearchCar,
  setAllsearchedcars,
} from '@/features/rental/filterSlice'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
function Search() {
  const [loading, setLoading] = useState(false)
  const { bookmarked } = useSelector((store) => store.rental)
  const dispatch = useDispatch()
  const initialValues = {
    state: '',
    date: new Date(),
  }
  const onSubmit = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(false)

    setLoading(true)
    getsearchedcar(values, onSubmitProps.resetForm)
    // console.log(values)
  }
  // validation
  const validationSchema = Yup.object().shape({
    // state: Yup.string()
    //   .trim('The contact name cannot include leading and trailing spaces')
    //   .required('No value provided'),
    date: Yup.date().required('Required'),
  })

  const getsearchedcar = (values, callback) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/cars/getAllCarsByState`, {
        state: values.state,
      })
      .then(function (response) {
        dispatch(unsearchCar())
        setLoading(false)
        dispatch(setAllsearchedcars(response?.data?.data))
        console.log(response?.data?.data)
        callback()
      })
      .catch(function (error) {
        setLoading(false)
        console.log(error)
      })
  }

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
                <div className=' relative  w-auto'>
                  <Field
                    as='select'
                    type='selectOption'
                    name='state'
                    className='text-xs pl-4 placeholder:text-xs  lg:text-sm lg:placeholder:text-sm outline-none rounded-sm bg-white w-full'
                  >
                    <option value=''>All States</option>
                    {State.getStatesOfCountry('US')?.map((item, index) => {
                      return (
                        <option key={index} value={item.name}>
                          {item.name}
                        </option>
                      )
                    })}
                  </Field>
                </div>
                <MdLocationPin className='absolute  top-1/2  left-4 -translate-x-1/2 -translate-y-1/2 text-babyblack  cursor-pointer font-bold sm:text-lg  lg:text-xl xl:text-2xl' />
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
                {loading ? (
                  <div className='flex items-center justify-center gap-2'>
                    <div className='spinner'></div>
                    <h1>Searching...</h1>
                  </div>
                ) : (
                  <h1>Search</h1>
                )}
              </button>
              {/* saved */}
              <div className='xl:flex lg:items-center gap-3 border lg:py-3 lg:px-8 hidden  cursor-pointer bg-[#F5F5F5]'>
                <BsBookmark />
                <h1>Favorites ({bookmarked?.length})</h1>
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
