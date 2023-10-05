import React, { useState, useMemo } from 'react'
import Navbar from '@/components/Navigation/Navbar'
import Footer from '@/components/Navigation/Footer'
import Notificationdata from '../../utilis/Notifications'
import { LuCalendarClock } from 'react-icons/lu'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { useRouter } from 'next/router'
import { MdKeyboardBackspace, MdOutlineLocationSearching } from 'react-icons/md'
function Index() {
  const [textid, setTextid] = useState(null)
  const [mobileview, setMobileview] = useState(false)
  const router = useRouter()
  const Readnote = useMemo(
    () => Notificationdata.filter((item) => item.id === textid),
    [textid]
  )
  console.log(textid)
  console.log(Readnote)
  return (
    <>
      <Navbar />
      <main className='bg-[#F5F5F5]  w-full pt-10 xl:pt-16 '>
        <section className='max-w-sm sm:max-w-lg mx-auto font-sans md:max-w-4xl lg:max-w-6xl xl:max-w-7xl  px-4 md:px-6  lg:px-8 space-y-6   pb-10   '>
          {mobileview ? (
            <div
              onClick={() => setMobileview(false)}
              className='flex items-center gap-2 cursor-pointer md:hidden'
            >
              <MdKeyboardBackspace className='lg:text-2xl' />
              <h1 className='text-sm font-bold'>All Notifications</h1>
            </div>
          ) : (
            <h1 className='font-bold lg:text-lg xl:text-xl'>
              All Notifications
            </h1>
          )}

          <div
            className={`${
              mobileview
                ? 'md:flex md:items-start md:justify-center md:gap-4 relative  h-[100vh] overflow-y-hidden'
                : 'md:flex md:items-start md:justify-center md:gap-4 relative  '
            }`}
          >
            <div className='space-y-6 md:space-y-0 md:w-1/3 xl:w-1/4 md:h-[100vh] md:overflow-y-auto   '>
              {Notificationdata.map((item) => {
                return (
                  <div key={item.id}>
                    <div className='w-full bg-white px-6 py-4 shadow-lg space-y-6 md:border-b  '>
                      {/* time */}
                      <div className='flex items-center gap-3'>
                        <LuCalendarClock className='text-xl' />
                        <h1 className='text-sm font-bold'>{item.time}</h1>
                      </div>
                      <h1 className='font-bold text-sm sm:text-base  text-babypurple'>
                        {' '}
                        {item.title}
                      </h1>
                      <p className='text-xs sm:text-sm line-clamp-3'>
                        {item.description}
                      </p>
                      <div
                        onClick={() => {
                          setTextid(item.id), setMobileview(true)
                        }}
                        className='bg-babypurple rounded-sm px-6 py-2 lg:px-8 text-center text-white text-xs cursor-pointer md:hidden  '
                      >
                        <h1>Read</h1>
                      </div>
                      <div
                        onClick={() => {
                          setTextid(item.id), setMobileview(false)
                        }}
                        className='bg-babypurple rounded-sm px-6 py-2 lg:px-8 text-center text-white hidden md:block text-xs cursor-pointer '
                      >
                        <h1>Read</h1>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className='bg-white hidden md:block w-2/3 xl:w-3/4  md:h-[100vh] md:overflow-y-auto shadow-lg'>
              {textid === null ? (
                <div className='flex flex-col justify-center items-center h-[90vh] max-w-xs lg:max-w-sm mx-auto space-y-5 lg:space-y-7 py-6 px-2'>
                  <div className='bg-babygrey px-2 py-2 rounded-full cursor-pointer '>
                    <IoIosNotificationsOutline className='text-3xl ' />
                  </div>
                  <div className='space-y-1 lg:space-y-2'>
                    <h1 className='font-bold  text-center text-lg lg:text-xl px-4 md:px-8  lg:px-10'>
                      No Notifications to show yet
                    </h1>
                    <p className='text-xs lg:text-sm text-center px-6 md:px-8  lg:px-10 '>
                      You will see useful notifications here soon. Please check
                      back regularly
                    </p>
                  </div>
                </div>
              ) : (
                <div className=''>
                  {/* header */}
                  <div className='flex justify-between items-center gap-4 bg-softpurple text-babyblack px-6 xl:px-10 py-3 lg:py-4 font-bold'>
                    <h1 className='text-base lg:text-lg xl:text-xl'>
                      {Readnote[0]?.title}
                    </h1>
                    <h1 className='text-xs'>{Readnote[0]?.time}</h1>
                  </div>
                  {/* text */}
                  <h1 className='px-6 py-6 xl:px-10 lg:pt-10 text-xs xl:text-sm xl:leading-8 leading-6'>
                    {Readnote[0]?.description}
                  </h1>
                </div>
              )}
            </div>
            {/* mobike */}
            {mobileview && (
              <div className=' absolute top-0 left-0 right-0 bottom-0 bg-white overflow-y-auto  md:hidden'>
                {/* header */}
                <div className='flex justify-between items-center gap-4 bg-softpurple text-babyblack px-6 xl:px-10 py-3 lg:py-4 font-bold'>
                  <h1 className='text-base lg:text-lg xl:text-xl'>
                    {Readnote[0]?.title}
                  </h1>
                  <h1 className='text-xs'>{Readnote[0]?.time}</h1>
                </div>
                {/* text */}
                <h1 className='px-6 py-6 xl:px-10 lg:pt-10 text-xs xl:text-sm xl:leading-8 leading-6'>
                  {Readnote[0]?.description}
                </h1>
              </div>
            )}
          </div>
        </section>
        <Footer />
      </main>
    </>
  )
}

export default Index
