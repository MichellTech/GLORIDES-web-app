import React, { useState, useMemo } from 'react'
import Navbar from '@/components/Navigation/Navbar/index'
import Footer from '@/components/Navigation/Footer'

import { LuCalendarClock } from 'react-icons/lu'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { MdKeyboardBackspace } from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
function Index() {
  const { notificationsData } = useSelector((store) => store.userpersona)

  return (
    <>
      <Navbar />
      <main className='bg-[#F5F5F5]  w-full pt-10 xl:pt-16 '>
        <section className='font-sans   px-4 md:px-6  lg:px-8  space-y-4 lg:space-y-6  pb-10   '>
          {/* title */}
          <div className='flex items-center gap-2 cursor-pointer '>
            <h1 className='text-sm lg:text-base font-bold'>
              All Notifications
            </h1>
          </div>
          {/* body */}
          {notificationsData?.length < 1 ? (
            <div className='flex flex-col justify-center items-center bg-white shadow-lg h-[40vh] w-full mx-auto space-y-5 lg:space-y-7 py-6 px-2'>
              <div className='bg-babygrey px-2 py-2 rounded-full cursor-pointer animate-pulse duration-1000 '>
                <IoIosNotificationsOutline className='text-3xl  ' />
              </div>
              <div className='space-y-1 lg:space-y-2'>
                <h1 className='font-bold  text-center text-lg lg:text-xl px-4 md:px-8  lg:px-10'>
                  No Notifications to show yet
                </h1>
                <p className='text-xs lg:text-sm text-center px-6 md:px-8  lg:px-10 '>
                  Your list of notifications will appear hear when you have any
                </p>
              </div>
            </div>
          ) : (
            <div className='space-y-6 md:space-y-0  divide-y  bg-white px-6 py-4 lg:py-6 shadow-lg lg:px-8'>
              {notificationsData?.map((item) => {
                return (
                  <div key={item.id}>
                    <div className='w-full  space-y-2 lg:space-y-3   '>
                      {/* time */}
                      <div className='flex items-center gap-3'>
                        <LuCalendarClock className='text-xl' />
                        <h1 className='text-sm font-bold'>
                          {' '}
                          {moment(item?.date_created).format('Do MMMM YYYY')}
                        </h1>
                      </div>
                      <h1 className='font-bold text-sm sm:text-base lg:text-lg  text-babypurple'>
                        {' '}
                        {item?.title}
                      </h1>
                      <p className='text-sm lg:text-base xl:text-lg'>
                        {item?.message}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </section>
        <Footer />
      </main>
    </>
  )
}

export default Index
