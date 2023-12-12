import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { BiCalendar } from 'react-icons/bi'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Link from 'next/link'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { MdLocationPin } from 'react-icons/md'
import { useRouter } from 'next/router'
import { State, City } from 'country-state-city'
import { useSelector, useDispatch } from 'react-redux'
import {
  searchCar,
  unsearchCar,
  setAllsearchedcars,
} from '@/features/rental/filterSlice'
import axios from 'axios'
import { FaAngleDown } from 'react-icons/fa'
function Search() {
  const [loading, setLoading] = useState(false)
  const { isUsersearching } = useSelector((store) => store.rental)
  const router = useRouter()
  const dispatch = useDispatch()

  const initialValues = {
    state: 'Texas',
    date: new Date(),
  }

  const onSubmit = (values, onSubmitProps) => {
    setLoading(true)
    onSubmitProps.setSubmitting(false)
    getsearchedcar(values, onSubmitProps.resetForm)
  }
  // validation
  const validationSchema = Yup.object().shape({
    state: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('No value provided'),
    date: Yup.date().required('Required'),
  })

  const getsearchedcar = (values, callback) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/cars/getAllCarsByState`, {
        state: values.state,
      })
      .then(function (response) {
        dispatch(searchCar())
        setLoading(false)
        dispatch(setAllsearchedcars(response?.data?.data))
        console.log(response?.data?.data)
        callback()
        router.push({
          pathname: `/rentacar`,
        })
      })
      .catch(function (error) {
        setLoading(false)
        console.log(error)
      })
  }
  return (
    <>
      <div className=' px-6  '>
        {/* form */}
        <div className='px-4 py-4 md:py-5 md:px-6 bg-white max-w-md sm:w-[34rem] sm:max-w-full md:w-[44rem] md:max-w-full  lg:w-[56rem] xl:w-[64rem]'>
          {/* form */}
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            enableReinitialize
          >
            {(formik) => {
              return (
                <Form className='grid grid-cols-2 gap-4  rounded md:grid-cols-3 lg:gap-8 w-full justify-center items-center mx-auto'>
                  {/* city */}
                  <div className=' relative  w-auto'>
                    <Field
                      as='select'
                      type='selectOption'
                      name='state'
                      className={`${
                        formik.errors.state && formik.touched.state
                          ? 'bg-softpurple border border-softRed px-2 text-center py-2 outline-none text-xs sm:h-12 md:h-14  h-10 md:text-sm xl:text-base text-babyblack placeholder:text-xs w-full appearance-none'
                          : 'bg-[#D9D9D9] px-2 text-center py-2 outline-none text-xs sm:h-12 md:h-14 placeholder:text-xs h-10 md:text-sm xl:text-base text-babyblack w-full xl:rounded-sm appearance-none'
                      }`}
                    >
                      <option value=''>select State</option>
                      {State.getStatesOfCountry('US')?.map((item, index) => {
                        return (
                          <option key={index} value={item.name}>
                            {item.name}
                          </option>
                        )
                      })}
                    </Field>

                    {/* <Field
                      type='text'
                      name='city'
                      placeholder='Your City'
                      className={`${
                        formik.errors.city && formik.touched.city
                          ? 'bg-softpurple border border-softRed px-2 text-center py-2 outline-none text-xs sm:h-12 md:h-14  h-10 md:text-sm xl:text-base text-babyblack placeholder:text-xs w-full '
                          : usebg
                          ? 'bg-[#D9D9D9] px-2 text-center  py-2 outline-none text-xs sm:h-12 md:h-14  placeholder:text-xs h-10 md:text-sm xl:text-base text-babyblack w-full rounded md:rounded-sm xl:rounded-md'
                          : 'bg-[#D9D9D9] px-2 text-center  py-2 outline-none text-xs sm:h-12 md:h-14  placeholder:text-xs h-10 md:text-sm xl:text-base text-babyblack w-full xl:rounded-sm'
                      }`}
                    /> */}
                    <MdLocationPin className='absolute  top-1/2  left-6 -translate-x-1/2 -translate-y-1/2 text-babyblack  cursor-pointer font-bold sm:text-lg  lg:text-xl xl:text-2xl pointer-events-none' />
                    <FaAngleDown className='absolute  top-1/2  right-1 -translate-x-1/2 -translate-y-1/2 text-babyblack  cursor-pointer font-bold sm:text-lg  lg:text-xl xl:text-2xl pointer-events-none' />
                  </div>
                  {/* date */}

                  {/* : usebg ? 'relative bg-[#D9D9D9] w-auto rounded
                  md:rounded-sm xl:rounded-md' */}
                  <div
                    className={`${
                      formik.errors.date && formik.touched.date
                        ? 'relative bg-softpurple border-softRed border flex justify-center items-center mx-auto  w-full'
                        : 'relative bg-[#D9D9D9]  w-full flex justify-center items-center mx-auto'
                    }`}
                  >
                    <Field name='date'>
                      {({ field, form }) => {
                        return (
                          <DatePicker
                            className={`${
                              formik.errors.date && formik.touched.date
                                ? 'bg-softpurple   px-2 text-center  py-2 outline-none text-xs sm:h-12 md:h-14  h-10 md:text-sm xl:text-base text-babyblack placeholder:text-xs w-full '
                                : 'bg-[#D9D9D9] px-2 text-center  py-2 outline-none text-xs sm:h-12 md:h-14  placeholder:text-xs h-10 md:text-sm xl:text-base text-babyblack w-full xl:rounded-sm '
                            }`}
                            id='date'
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
                    <BiCalendar className='absolute  top-1/2  left-6 -translate-x-1/2 -translate-y-1/2 text-babyblack  cursor-pointer font-bold sm:text-lg lg:text-xl xl:text-2xl pointer-events-none ' />
                  </div>
                  <button
                    type='submit'
                    className='bg-babypurple w-full  py-2 shadow-md font-bold sm:h-12 md:h-14  rounded lg:rounded-sm xl:rounded-md h-10 col-span-2 md:col-span-1'
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
                </Form>
              )
            }}
          </Formik>
        </div>
      </div>
    </>
  )
}

export default Search

//  className={`${
//                             formik.errors.city && formik.touched.city
//                               ? ' md:border-2  border  px-1 border-softRed   text-xs placeholder:text-xs md:text-sm  lg:text-base  placeholder-babyblack bg-white text-center focus:outline-none h-full'
//                               : '  text-xs placeholder:text-xs md:text-sm lg:text-base  placeholder-babyblack  bg-softpurple text-center focus:outline-none '
//                           }`}
