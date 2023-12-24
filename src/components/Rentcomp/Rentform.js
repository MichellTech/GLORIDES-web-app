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
import { MdLocationPin, MdOutlineClearAll } from 'react-icons/md'
import {
  openFilter,
  unsearchCar,
  setAllsearchedcars,
  setReturnedcars,
} from '@/features/rental/filterSlice'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { FaAngleDown } from 'react-icons/fa'
function Search({ setCarloader }) {
  const [loading, setLoading] = useState(false)
  const [viewing, setViewing] = useState(1)
  const { bookmarked, allsearchedcars, returnedcars } = useSelector(
    (store) => store.rental
  )

  const dispatch = useDispatch()
  const initialValues = {
    state: 'Texas',
    date: new Date(),
    city: '',
  }
  const onSubmit = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(false)

    setLoading(true)
    getsearchedcar(values)
    // console.log(values)
  }
  // validation
  const validationSchema = Yup.object().shape({
    // state: Yup.string()
    //   .trim('The contact name cannot include leading and trailing spaces')
    //   .required('No value provided'),
    date: Yup.date().required('Required'),
  })

  const getsearchedcar = (values) => {
    setCarloader(true)
    axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/cars/getAllCarsByState`, {
        state: values.state,
      })
      .then(function (response) {
        dispatch(unsearchCar())
        setLoading(false)
        setCarloader(false)
        dispatch(setAllsearchedcars(response?.data?.data))
        dispatch(setReturnedcars(response?.data?.data))
      })
      .catch(function (error) {
        setLoading(false)
        setCarloader(true)
        console.log(error)
      })
  }

  const handleviewing = () => {
    if (viewing === 1) {
      dispatch(setAllsearchedcars(bookmarked))
      return setViewing(2)
    }

    setViewing(1)
    dispatch(setAllsearchedcars(returnedcars))
  }
  // console.log(allsearchedcars)
  // console.log(returnedcars)
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => {
          return (
            <Form className='grid grid-cols-2 gap-4  rounded md:grid-cols-3  w-full justify-center items-end mx-auto lg:grid-cols-4 xl:grid-cols-6  '>
              {/* filter */}
              <div
                onClick={() => dispatch(openFilter())}
                className='xl:flex lg:items-center gap-3  md:h-14  border lg:py-3 lg:px-6 hidden  cursor-pointer bg-[#F5F5F5]  '
              >
                <LuFilter />
                <h1>Filter</h1>
              </div>
              {/* city */}
              <div className='space-y-1'>
                <label
                  className='text-babyblack  text-[0.6rem] lg:text-xs '
                  htmlFor='city'
                >
                  City
                </label>
                <div className=' relative w-auto  border py-2 flex justify-center items-center  h-10   sm:h-12 md:h-14 '>
                  <div className=' relative   '>
                    <Field
                      as='select'
                      type='selectOption'
                      name='city'
                      className='text-xs  px-2 placeholder:text-xs  lg:text-sm lg:placeholder:text-sm outline-none rounded-sm  w-full appearance-none h-max  text-center  flex justify-center placeholder:text-center items-center mx-auto  bg-white '
                    >
                      <option value=''>Select City</option>
                      {City.getCitiesOfState(
                        'US',
                        State.getStatesOfCountry('US')?.filter(
                          (i) => i?.name === formik?.values?.state
                        )?.[0]?.isoCode
                      )?.map((item, index) => {
                        return (
                          <option key={index} value={item.name}>
                            {item.name}
                          </option>
                        )
                      })}
                    </Field>
                  </div>

                  <FaAngleDown className='absolute  top-1/2  right-1 -translate-x-1/2 -translate-y-1/2 text-babyblack  cursor-pointer font-bold sm:text-lg  lg:text-xl xl:text-2xl pointer-events-none' />
                </div>
              </div>

              {/* state */}
              <div className='space-y-1'>
                <label
                  className='text-babyblack  text-[0.6rem] lg:text-xs '
                  htmlFor='city'
                >
                  State
                </label>
                <div className=' relative w-auto  border py-2  flex justify-center items-center  h-10    sm:h-12 md:h-14'>
                  <div className=' relative '>
                    <Field
                      as='select'
                      type='selectOption'
                      name='state'
                      className='text-xs px-2 placeholder:text-xs  lg:text-sm lg:placeholder:text-sm outline-none rounded-sm  w-full appearance-none h-max  text-center  flex justify-center placeholder:text-center items-center mx-auto  bg-white '
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
                  {/* <MdLocationPin className='absolute  top-1/2  left-6 -translate-x-1/2 -translate-y-1/2 text-babyblack  cursor-pointer font-bold sm:text-lg  lg:text-xl xl:text-2xl pointer-events-none' /> */}
                  <FaAngleDown className='absolute  top-1/2  right-1 -translate-x-1/2 -translate-y-1/2 text-babyblack  cursor-pointer font-bold sm:text-lg  lg:text-xl xl:text-2xl pointer-events-none' />
                </div>
              </div>

              {/* date */}
              <div className='space-y-1'>
                <label
                  className='text-babyblack  text-[0.6rem] lg:text-xs '
                  htmlFor='city'
                >
                  Start Date
                </label>
                <div className='  relative border flex justify-center items-center  w-full  py-2 sm:h-12 md:h-14'>
                  <Field name='date'>
                    {({ field, form }) => {
                      return (
                        <DatePicker
                          id='date'
                          className=' text-xs placeholder:text-xs outline-none rounded-sm  lg:text-sm lg:placeholder:text-sm appearance-none text-center h-full  px-4 lg:px-2   flex justify-center items-center  mx-auto '
                          {...field}
                          selected={field.value}
                          dateFormat={'MM/dd/yyyy'}
                          onChange={(date) =>
                            form.setFieldValue(field.name, date)
                          }
                        />
                      )
                    }}
                  </Field>
                  <BiCalendar className='absolute  top-1/2  left-6 -translate-x-1/2 -translate-y-1/2 text-babyblack  cursor-pointer font-bold sm:text-lg lg:text-xl xl:text-2xl pointer-events-none ' />
                </div>
              </div>

              <button
                type='submit'
                className='bg-babypurple shadow-lg w-full  py-2   sm:h-12 md:h-14  h-10 md:col-span-3 lg:col-span-1  xl:col-span-1 text-white'
              >
                {loading ? (
                  <div className='flex items-center justify-center gap-2'>
                    <div className='spinner'></div>
                  </div>
                ) : (
                  <h1>Search</h1>
                )}
              </button>
              {/* saved */}
              <div
                onClick={handleviewing}
                className='xl:flex lg:items-center mx-auto justify-center gap-3 border lg:py-3 lg:px-4 hidden cursor-pointer bg-[#F5F5F5] w-full h-10   sm:h-12 md:h-14 '
              >
                {viewing === 1 ? <BsBookmark /> : <MdOutlineClearAll />}
                <h1>
                  {viewing === 1
                    ? `Favorites (${bookmarked?.length})`
                    : 'View All Cars'}
                </h1>
              </div>
            </Form>
          )
        }}
      </Formik>
    </>
  )
}

export default Search
