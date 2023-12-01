import React, { useState, useMemo, useEffect } from 'react'
import Navbar from '@/components/Navigation/Navbar/index'
import Footer from '@/components/Navigation/Footer'
import { getusernotifications } from '@/features/userpersona/userSlice'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import mainAxiosAction from '@/components/axiosAction'
import { toast } from 'react-toastify'
function Index() {
  const [messageid, setMessageid] = useState(null)
  const { notificationsData } = useSelector((store) => store.userpersona)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getusernotifications())
  }, [])

  const showmessage = (notification_id) => {
    const message = notificationsData.filter((i) => i._id === notification_id)
    if (message?.[0]?.isRead === false) {
      mainAxiosAction
        .post(`/notifications/read-notifications`, {
          notification_id: notification_id,
        })
        .then(function (response) {
          console.log(response)
          dispatch(getusernotifications())
          console.log('done')
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
  const handleDelete = (id) => {
    console.log(id)
    mainAxiosAction
      .post(`/notifications/delete-notifications`, {
        notification_id: id,
      })
      .then(function (response) {
        console.log(response)
        dispatch(getusernotifications())
        toast.success('message successfully deleted')
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <>
      <Navbar />
      <main className='bg-[#F5F5F5]  w-full pt-10 xl:pt-16 '>
        <section className='font-sans   px-4 md:px-6  lg:px-8  space-y-4 lg:space-y-6  pb-10   '>
          {/* title */}
          <div className='flex items-center gap-2 cursor-pointer '>
            <h1 className='text-sm md:text-lg lg:text-xl xl:text-2xl font-bold'>
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
            <div className='space-y-6  lg:space-y-8    py-4 lg:py-6 '>
              {notificationsData?.map((item) => {
                return (
                  <div key={item?._id}>
                    <div
                      className={`${
                        item.isRead
                          ? 'w-full  space-y-6 lg:space-y-8  bg-white px-3 lg:px-5 xl:px-7  py-4 shadow-md  border-l-4 lg:border-l-[6px] border-green-500 '
                          : 'w-full  space-y-6 lg:space-y-8  bg-white px-3 lg:px-5 xl:px-7  py-4 shadow-md border-l-4 lg:border-l-[6px] border-babypurple '
                      }`}
                    >
                      {/* header */}
                      <header className='flex justify-between items-center gap-4 '>
                        <div className='flex items-center gap-2 lg:gap-4'>
                          <BiMessageSquareDetail className='text-xl lg:text-2xl' />
                          <h1 className=' text-xs sm:text-sm lg:text-base xl:text-lg font-semibold text-babyblack '>
                            {' '}
                            {item?.title}
                          </h1>
                        </div>
                        <div className='flex items-center gap-4 md:gap-6'>
                          <h1 className='text-xs md:text-sm xl:text-base '>
                            {' '}
                            {moment(item?.date_created).format('Do MMMM YYYY')}
                          </h1>

                          {messageid === item?._id ? (
                            <button
                              onClick={() => setMessageid(null)}
                              className='bg-softpurple rounded-full w-10 h-10 flex justify-center items-center lg:text-xl'
                            >
                              <AiOutlineMinus />
                            </button>
                          ) : (
                            <button
                              onClick={() => {
                                setMessageid(item?._id), showmessage(item?._id)
                              }}
                              className='bg-softpurple rounded-full w-10 h-10 flex justify-center items-center lg:text-xl'
                            >
                              <AiOutlinePlus />
                            </button>
                          )}
                        </div>
                      </header>

                      {messageid === item?._id && (
                        <div className='space-y-6 md:space-y-7 lg:space-y-9'>
                          <p className='text-sm lg:text-base xl:text-lg text-slate-500'>
                            {item?.message}
                          </p>
                          <button
                            onClick={() => handleDelete(item?._id)}
                            className='px-6 py-2  bg-softpurple text-xs lg:text-sm rounded-sm shadow-sm lg:shadow-md '
                          >
                            Delete Message
                          </button>
                        </div>
                      )}
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
