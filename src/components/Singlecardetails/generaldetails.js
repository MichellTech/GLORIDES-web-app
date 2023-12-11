import React, { useEffect } from 'react'

import { IoMdCheckboxOutline } from 'react-icons/io'
function generaldetails({ cardata }) {
  const getFeatures = (arr) => {
    let values = []
    for (let value of arr) {
      // if (arr[value]) {
      //   values?.push(value)
      // }
      for (let key in value) {
        if (value[key] === 'true') {
          values?.push(key)
        }
      }
    }
    return values
  }

  return (
    <div className='bg-white rounded-md px-4 py-6 md:py-8 shadow-md '>
      {/* car description */}
      <div className='space-y-2 lg:space-y-4  '>
        <h1 className='font-bold text-sm sm:text-base  px-4  md:text-lg lg:text-xl border-b pb-2 sm:px-6 md:px-8 '>
          Car Description
        </h1>
        {/* group */}
        <div className='w-full pt-2 space-y-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 md:px-8  sm:space-y-0  sm:gap-8 md:gap-10'>
          {/* carname */}
          <div className='space-y-2 w-full'>
            <h1 htmlFor='' className='text-xs  text-slate-500 lg:text-sm'>
              Car Name
            </h1>
            <div className=' bg-white  border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'>
              {cardata?.car_name}
            </div>
          </div>
          {/* carmodel */}
          <div className='space-y-2 w-full '>
            <h1
              htmlFor=''
              className='text-xs text-slate-500lg:text-sm text-slate-500'
            >
              Car Model
            </h1>
            <div className=' bg-white  border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'>
              {cardata?.car_model}
            </div>
          </div>
          {/* plate no */}
          <div className='space-y-2 w-full'>
            <h1 htmlFor='' className='text-xs text-slate-500 lg:text-sm'>
              Plate Number
            </h1>
            <div className=' bg-white  border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'>
              {cardata?.plate_number}
            </div>
          </div>

          {/* miles */}
          <div className='space-y-2 w-full'>
            <h1 htmlFor='' className='text-xs text-slate-500 lg:text-sm'>
              Miles on car
            </h1>
            <div className=' bg-white   border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'>
              {cardata?.miles}
            </div>
          </div>

          {/* fuel*/}
          <div className='space-y-2 w-full'>
            <h1 htmlFor='' className='text-xs text-slate-500 lg:text-sm'>
              Fuel Type
            </h1>
            <div className=' bg-white   border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'>
              {cardata?.fuel_type}
            </div>
          </div>

          {/* door*/}
          <div className='space-y-2 w-full'>
            <h1 htmlFor='' className='text-xs text-slate-500 lg:text-sm'>
              Car Door
            </h1>
            <div className=' bg-white   border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'>
              {cardata?.car_doors}
            </div>
          </div>

          {/* seat */}
          <div className='space-y-2 w-full'>
            <h1 htmlFor='' className='text-xs text-slate-500 lg:text-sm'>
              Number of Seats
            </h1>
            <div className=' bg-white   border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'>
              {cardata?.seats_number}
            </div>
          </div>

          {/* pickup */}
          <div className='space-y-2 w-full'>
            <h1 htmlFor='' className='text-xs text-slate-500 lg:text-sm'>
              Preferred Pick Up location
            </h1>
            <div className=' bg-white   border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'>
              {cardata?.pickup_location}
            </div>
          </div>
          {/* drop off */}
          <div className='space-y-2 w-full'>
            <h1 htmlFor='' className='text-xs  text-slate-500 lg:text-sm'>
              Prefered Drop Off Location
            </h1>
            <div className=' bg-white  border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'>
              {cardata?.dropoff_location}
            </div>
          </div>
          {/* city */}
          <div className='space-y-2 w-full'>
            <h1 htmlFor='' className='text-xs text-slate-500 lg:text-sm'>
              City
            </h1>
            <div className=' bg-white  border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'>
              {cardata?.city}
            </div>
          </div>
          {/* state */}
          <div className='space-y-2 w-full'>
            <h1 htmlFor='' className='text-xs text-slate-500 lg:text-sm'>
              State
            </h1>
            <div className=' bg-white   border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'>
              {cardata?.state}
            </div>
          </div>
          {/*country */}
          <div className='space-y-2 w-full '>
            <h1 htmlFor='' className='text-xs  text-slate-500 lg:text-sm'>
              Country
            </h1>
            <div className=' bg-white  border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'>
              United States of America
            </div>
          </div>
          {/* message */}
          <div className='sm:col-span-2 lg:col-span-3 w-full space-y-2'>
            <h1 htmlFor='' className='text-xs text-slate-500 lg:text-sm'>
              Car Description
            </h1>
            <div className=' bg-white   border w-full py-3  px-4 outline-babypurple text-xs placeholder:text-xs md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base rounded-sm'>
              {cardata?.car_description}
            </div>
          </div>
          {/* car features*/}
          <div className='sm:col-span-2 lg:col-span-3 w-full space-y-2 md:space-y-4'>
            <h1 htmlFor='' className='text-xs text-slate-500  lg:text-sm'>
              Car Available Features
            </h1>
            <div className='flex   items-center gap-4 md:gap-6 flex-wrap md:mt-3 '>
              {getFeatures(cardata?.car_additional_features ?? [])?.map(
                (item, index) => (
                  <div
                    key={index}
                    className='flex items-center gap-2 border border-gray-400 px-2 py-2  w-max rounded-sm lg:rounded-md'
                  >
                    <IoMdCheckboxOutline className='text-xl' />
                    <p className='text-xs'>{item}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default generaldetails
