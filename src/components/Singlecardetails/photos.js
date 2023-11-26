import React from 'react'
import { cars } from '../../utilis/Cardata'
import Image from 'next/image'
function photos() {
  // console.log(cars)
  return (
    <div className='bg-white rounded-md px-4 py-6 md:py-8 shadow-md'>
      {/* car photos */}
      <div className='space-y-6 '>
        <h1 className='font-bold text-sm sm:text-base  px-4  md:text-lg lg:text-xl border-b pb-2 sm:px-6 md:px-8 '>
          Car Photos
        </h1>
        {/* group */}
        <div className='w-full flex flex-col sm:flex-row sm:flex-wrap  gap-5 sm:justify-center  lg:gap-7'>
          {cars?.map((item) => {
            return (
              <div key={item.id}>
                <div className=''>
                  <Image
                    src={item?.image}
                    alt='image'
                    width={1000}
                    height={1000}
                    className='object-cover w-full  sm:w-44 xl:w-52 h-32'
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default photos
