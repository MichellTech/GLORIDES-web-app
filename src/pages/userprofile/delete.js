import React, { useState, useEffect } from 'react'
import Navbar from '@/components/Navigation/Navbar/index'
import Image from 'next/image'
import Profilenavsmall from '../../components/Profilenavsmall'
import Profilenavbig from '../../components/Profilenavbig'
import Link from 'next/link'
import Loader from '../../components/Loaders/profileloader'
import { getuserprofile } from '@/features/userpersona/userSlice'
import { Player, Controls } from '@lottiefiles/react-lottie-player'
import { useRouter } from 'next/router'
import mainAxiosAction from '@/components/axiosAction'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { logOut } from '@/features/userpersona/userSlice'

function Delete() {
  const [page, setPage] = useState(1)
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const dispatch = useDispatch()
  const deleteapi = () => {
    setLoading(true)
    mainAxiosAction
      .post(`/user/deleteuseraccount`, {
        password: password,
      })
      .then(function (response) {
        setLoading(false)
        dispatch(logOut())
        router.push({
          pathname: '/auth/login',
        })
        toast.success(response.data.message)
        setPassword('')
      })
      .catch(function (error) {
        toast.error(error.response.data.message)
        setLoading(false)
        console.log(error)
      })
  }

  return (
    <>
      {/* small nav */}
      <div className='sticky  md:fixed top-0 left-0 right-0 bg-white z-50  '>
        <Navbar />
        <div className='example md:hidden  overflow-y-auto w-full '>
          <Profilenavsmall />
        </div>
      </div>

      {/* body */}

      <div className='bg-[#F5F5F5] md:bg-white bg-opacity-50 pt-8  md:pt-0 md:px-6  md:flex md:justify-between md:items-start md:gap-4 w-full md:relative  '>
        {/* bg-nave links */}
        <div className='hidden md:block md:w-1/4 fixed top-32  md:pr-10       '>
          <Profilenavbig />
        </div>
        {/* information */}
        <div className='px-6   space-y-10  md:w-3/4  md:absolute md:top-32 md:right-0 pb-20  '>
          {/* delt test */}
          <div className='bg-white w-full flex justify-center items-center flex-col border px-6 py-4 sm:px-8 sm:py-6 rounded-md spmin-h-screen'>
            {page === 1 ? (
              <section className=' px-6 lg:px-10  pb-6 lg:pb-10 '>
                <Player
                  autoplay
                  loop
                  src={'/images/cancel.json'}
                  className='w-40 h-40 md:w-60 md:h-60 '
                  speed={1}
                >
                  <Controls
                    visible={false}
                    buttons={['play', 'repeat', 'frame', 'debug']}
                  />
                </Player>

                <h1 className='font-mono text-2xl md:text-3xl xl:text-4xl text-center text-babyblack'>
                  Delete My Account
                </h1>
                <p className='text-center text-xs md:text-sm lg:text-base mt-2 md:mt-4 xl:mt-6'>
                  Before deleting your Gloride Car Rental account, it's
                  essential to understand that this action is irreversible and
                  will result in the permanent loss of access to all services,
                  including rental history, preferences, and account-related
                  information. Additionally, any ongoing transactions or
                  bookings may be affected. If you proceed with the deletion,
                  you'll need to create a new account in the future, potentially
                  causing inconvenience. If you have any concerns or require
                  assistance, please contact our support team at
                  support@glorideus.com before proceeding with the deletion.
                </p>
                <div className='flex items-center gap-4 md:gap-6 xl:gap-8 justify-center mt-4  md:mt-6 xl:mt-8 w-full'>
                  <button
                    onClick={() => {
                      setPage(2)
                    }}
                    className='px-4 w-full py-2 lg:py-3 bg-red-500 text-white text-sm lg:text-base rounded-md hover:shadow-lg'
                  >
                    Delete my acount
                  </button>
                  <button
                    onClick={() =>
                      router.push({
                        pathname: '/',
                      })
                    }
                    className='px-4 py-2 lg:py-3 hover:shadow-lg w-full bg-indigo-500 text-white text-sm lg:text-base rounded-md
              '
                  >
                    {' '}
                    Dont Delete
                  </button>
                </div>
              </section>
            ) : (
              <section className='min-h-[50vh] flex flex-col justify-center items-center pt-10'>
                <h1 className='font-mono text-2xl md:text-3xl xl:text-4xl text-center text-babyblack'>
                  Authenticate this Request
                </h1>
                <p className='text-center text-xs md:text-sm lg:text-base mt-2'>
                  Please input your password to continue with this process
                </p>
                <div className='w-full space-y-1 lg:space-y-2   mt-10 md:mt-16'>
                  <input
                    type='text'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='input your password here'
                    className='px-4 py-2 lg:py-3 rounded-md  bg-white border  w-full text-sm lg:text-base border-babyblack'
                  />
                </div>
                <div className='py-10 space-y-2 sm:flex sm:space-y-0 sm:items-center w-full sm:gap-2 lg:gap-4 '>
                  <button
                    onClick={() => {
                      if (password === '') {
                        return toast.warning('please provide your oassword')
                      } else {
                        deleteapi()
                      }
                    }}
                    className=' px-4 py-2 lg:py-3 hover:shadow-lg w-full bg-babypurple text-white text-sm lg:text-base rounded-md '
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => setPage(1)}
                    className=' px-4 py-2 lg:py-3 hover:shadow-lg w-full bg-indigo-500 text-white text-sm lg:text-base rounded-md'
                  >
                    Cancel
                  </button>
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Delete
