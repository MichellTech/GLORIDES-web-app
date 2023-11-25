import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import {
  openDropDown,
  closeDropDown,
  closeNotifications,
  openNotifications,
  returnToUser,
  logOut,
} from '@/features/userpersona/userSlice'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'
import { FiUser } from 'react-icons/fi'
import { BsQuestionCircle, BsChatSquareDots } from 'react-icons/bs'
import { BiCar } from 'react-icons/bi'

import { TbActivity } from 'react-icons/tb'
import { GiReceiveMoney } from 'react-icons/gi'
import { MdAdsClick } from 'react-icons/md'
import { GrFormClose, GrTransaction } from 'react-icons/gr'
import Link from 'next/link'

function Navbar() {
  const {
    isUserLogedin,
    dropDown,
    notifications,
    notificationscontent,
    hosting,
    userData,
  } = useSelector((store) => store.userpersona)
  const [pannel, setPannel] = useState(false)
  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(closeDropDown())
    dispatch(closeNotifications())
  }, [router.pathname])

  let menuRef = useRef()
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        dispatch(closeDropDown())
        dispatch(closeNotifications())
      }
    }
    document.addEventListener('mousedown', handler)
    return () => {
      document.removeEventListener('mousedown', handler)
    }
  })

  return (
    <nav
      ref={menuRef}
      className=' relative mx-auto font-sans px-1 md:px-4 lg:px-10 py-2 md:py-2 '
    >
      {/* <!-- Flex Container For Nav Items --> */}
      <div className='flex items-center justify-between px-4 sm:px-6 md:px-0 my-6 relative '>
        {/* <!-- Logo --> */}
        <div className='z-30 '>
          {router.pathname === '/' || router.pathname === '/contactus' ? (
            <Link href='/host/dashboard'>
              {' '}
              <div className='flex items-center gap-2 cursor-pointer'>
                <div className='  relative '>
                  <Image
                    src={'/images/logo.png'}
                    alt='logo'
                    width={100}
                    height={100}
                    className='object-cover w-14 sm:w-20  md:w-24 lg:w-28 '
                  />
                </div>
                {/* <p className='font-black text-xl md:text-2xl lg:text-3xl text-babyblue'>
                  Glorides
                </p> */}
              </div>
            </Link>
          ) : (
            <Link href='/host/dashboard'>
              {' '}
              <div className='flex items-center gap-2 cursor-pointer'>
                <div className='  relative '>
                  <Image
                    src={'/images/logob.png'}
                    alt='logo'
                    width={100}
                    height={100}
                    className='object-cover w-14 sm:w-20  md:w-24 lg:w-28 '
                  />
                </div>
                {/* <p className='font-black text-xl md:text-2xl lg:text-3xl text-babyblue'>
                  Glorides
                </p> */}
              </div>
            </Link>
          )}
        </div>
        {/* <!-- links --> */}
        <div
          className={`${
            router.pathname === '/' || router.pathname === '/contactus'
              ? 'hidden items-center font-sans  font-bold  space-x-8 lg:space-x-12 xl:space-x-20  2xl:space-x-24 text-white md:flex justify-center normal-case'
              : 'hidden items-center font-sans  font-bold  space-x-8 lg:space-x-12 xl:space-x-20  2xl:space-x-24 text-babyblack md:flex justify-center normal-case'
          }`}
        >
          <ul
            className={`${
              router.pathname === '/host/dashboard'
                ? "text-xs md:text-sm cursor-pointer xl:text-base bg-[url('/images/started.png')] bg-no-repeat bg-bottom  py-4  "
                : 'text-xs md:text-sm cursor-pointer xl:text-base '
            }`}
          >
            <Link href='/host/dashboard'>Dashboard</Link>
          </ul>
          <ul
            className={`${
              router.pathname === '/Host/transactionhistory'
                ? "text-xs md:text-sm cursor-pointer xl:text-base bg-[url('/images/started.png')] bg-no-repeat bg-bottom  py-4  "
                : 'text-xs md:text-sm cursor-pointer xl:text-base '
            }`}
          >
            <Link href='/host/transactionhistory'>Transaction History</Link>
          </ul>
          <ul
            className={`${
              router.pathname === '/host/leasehistory'
                ? "text-xs md:text-sm cursor-pointer xl:text-base bg-[url('/images/started.png')] bg-no-repeat bg-bottom  py-4  "
                : 'text-xs md:text-sm cursor-pointer xl:text-base '
            }`}
          >
            <Link href='/host/leasehistory'>Lease History</Link>
          </ul>
          <ul
            className={`${
              router.pathname === '/host/fleet'
                ? "text-xs md:text-sm cursor-pointer xl:text-base bg-[url('/images/started.png')] bg-no-repeat bg-bottom  py-4  "
                : 'text-xs md:text-sm cursor-pointer xl:text-base '
            }`}
          >
            <Link href='/host/fleet'>Fleet</Link>
          </ul>
        </div>

        {/* cotrols and menu  */}
        <div className='flex justify-center items-center gap-6 relative'>
          {isUserLogedin && (
            <div className='flex justify-center items-center gap-4 lg:gap-6 xl:gap-8 relative'>
              {/* messages */}
              <Link href='/messages'>
                <div className='bg-babygrey px-2 py-2 lg:px-3 lg:py-3 rounded-full cursor-pointer'>
                  <BsChatSquareDots className='text-xs lg:text-base xl:text-xl ' />
                </div>
              </Link>
              {/* notification */}
              <div
                onClick={() => {
                  dispatch(openNotifications()), dispatch(closeDropDown())
                }}
                className='bg-babygrey px-2 py-2 rounded-full cursor-pointer lg:px-3 lg:py-3'
              >
                <IoIosNotificationsOutline className='text-xs lg:text-base xl:text-xl ' />
              </div>
              {/* userimage drop */}
              <div className='flex justify-center items-center gap-2 lg:gap-4 xl:gap-5'>
                {/* image */}
                <div className='  relative '>
                  <Image
                    src={'/images/avatar.png'}
                    alt='logo'
                    width={1000}
                    height={1000}
                    className={`${
                      router.pathname === '/' ||
                      router.pathname === '/contactus'
                        ? 'object-cover w-10 lg:w-14  xl:w-16 rounded-full border-2 border-white'
                        : 'object-cover w-10 lg:w-14  xl:w-16 rounded-full border-2 border-babypurple'
                    }`}
                  />
                </div>
                {/* name */}
                <h1
                  className={`${
                    router.pathname === '/' || router.pathname === '/contactus'
                      ? 'text-xs xl:text-base lg:text-sm font-bold text-white '
                      : 'text-xs text-babyblack lg:text-sm xl:text-base font-bold'
                  }`}
                >
                  Michell
                </h1>
                {/* dropdwon */}
                <div
                  className={`${
                    router.pathname === '/' || router.pathname === '/contactus'
                      ? 'text-white'
                      : 'text-babyblack'
                  }`}
                >
                  {dropDown ? (
                    <AiOutlineCaretUp
                      onClick={() => dispatch(closeDropDown())}
                      className='text-lg lg:text-2xl xl:text-3xl'
                    />
                  ) : (
                    <AiOutlineCaretDown
                      onClick={() => {
                        dispatch(closeNotifications()), dispatch(openDropDown())
                      }}
                      className='text-lg lg:text-2xl xl:text-3xl'
                    />
                  )}
                </div>
              </div>
            </div>
          )}

          {/* display control */}
          {dropDown && !notifications && (
            <div className='absolute top-12 sm:top-14 md:top-16 lg:top-20  right-0  w-60 md:w-64 lg:w-72 xl:w-[20rem]  bg-white shadow-md rounded-sm md:rounded-md  xl:rounded-lg  py-4 lg:py-6  space-y-4 md:space-y-5 lg:space-y-6  z-50'>
              {/* profil */}
              <div className='flex justify-between items-center gap-4 px-4 lg:px-6'>
                {/* image */}
                <div className='flex justify-center items-center gap-2'>
                  <div className='  relative '>
                    <Image
                      src={'/images/avatar.png'}
                      alt='logo'
                      width={1000}
                      height={1000}
                      className='object-cover w-10 lg:w-12  xl:w-14 rounded-full border-2 border-babypurple'
                    />
                  </div>
                  <h1 className='text-xs lg:text-sm font-bold'>Michell</h1>
                </div>
                {/* link */}
                <Link
                  href='/userprofile/view'
                  className='bg-babypurple px-2 md:px-3 xl:px-4  py-1 md:py-2 rounded'
                >
                  <h1 className='text-white text-xs xl:text-sm'>
                    View Profile
                  </h1>
                </Link>
              </div>
              {/* underline */}
              <div className='w-full border-b lg:border-b-2 border-babygrey'></div>
              {/* options */}
              <div className='px-4 lg:px-6 space-y-4 md:space-y-4 lg:space-y-5 xl:space-y-6'>
                {/* host/user */}
                <div className='flex justify-between items-center gap-4'>
                  {/* text */}
                  <div className='flex  items-center gap-4 '>
                    <FiUser className=' lg:text-2xl ' />
                    <h1 className='text-xs lg:text-sm '>
                      {hosting ? 'Switch to User' : 'Become a Host'}
                    </h1>
                  </div>
                  {/* button */}
                  {hosting && (
                    <button
                      type='button'
                      onClick={() => {
                        dispatch(returnToUser()),
                          router.push({
                            pathname: '/',
                          })
                      }}
                      className={`${
                        dropDown
                          ? 'bg-babypurple rounded-full relative h-4 w-8 lg:w-14 lg:h-6 '
                          : 'bg-babygrey rounded-full relative h-4 w-8 lg:w-14 lg:h-6 '
                      }`}
                    >
                      <div
                        className={`${
                          hosting
                            ? 'bg-white rounded-full w-3 h-3 lg:h-5 lg:w-5  absolute top-1/2  bottom-1/2 right-1 -translate-y-1/2 duration-1000  '
                            : 'bg-white rounded-full w-3 h-3 absolute top-1/2  bottom-1/2 left-1 -translate-y-1/2 duration-1000 lg:h-5 lg:w-5'
                        } `}
                      ></div>
                    </button>
                  )}
                </div>
                {/* dashboard */}
                <Link
                  href='/host/dashboard'
                  className='flex md:hidden items-center gap-4 '
                >
                  <TbActivity className=' lg:text-2xl ' />
                  <h1 className='text-xs lg:text-sm '>Dashboard</h1>
                </Link>
                <Link
                  href='/host/transactionhistory'
                  className='flex md:hidden items-center gap-4 '
                >
                  <GiReceiveMoney className=' lg:text-2xl ' />
                  <h1 className='text-xs lg:text-sm '>Transaction History</h1>
                </Link>
                <Link
                  href='/host/leasehistory'
                  className='flex md:hidden items-center gap-4 '
                >
                  <GrTransaction className=' lg:text-2xl ' />
                  <h1 className='text-xs lg:text-sm '>Lease History</h1>
                </Link>
                <Link
                  href='/host/fleet'
                  className='flex  md:hidden items-center gap-4 '
                >
                  <BiCar className=' lg:text-2xl ' />
                  <h1 className='text-xs lg:text-sm '>Fleet</h1>
                </Link>

                {/* suport */}
                <Link href='/support' className='flex  items-center gap-4 '>
                  <BsQuestionCircle className='lg:text-2xl ' />
                  <h1 className='text-xs lg:text-sm '>Support</h1>
                </Link>
                {/* logout */}
                <div
                  onClick={() => {
                    dispatch(logOut()),
                      router.push({
                        pathname: '/auth/login',
                      })
                  }}
                  className='flex  items-center gap-4 cursor-pointer '
                >
                  <MdAdsClick className=' lg:text-2xl ' />
                  <h1 className='text-xs lg:text-sm '>Logout</h1>
                </div>
              </div>
            </div>
          )}
          {/* notifications */}
          {notifications && !dropDown && (
            <div className='absolute top-12 sm:top-14 md:top-16 lg:top-20  right-0  w-60 md:w-72 lg:w-80 h-80  bg-white shadow-md rounded-sm md:rounded-md  xl:rounded-lg  pb-4 lg:pb-6  space-y-4 md:space-y-5 lg:space-y-6  z-50'>
              <div className='bg-babygrey flex justify-between items-center px-4 lg:px-6 py-2 md:py-3 '>
                <h1 className='text-sm lg:text-base'>Notifications</h1>
                <GrFormClose
                  onClick={() => dispatch(closeNotifications())}
                  className='text-2xl lg:text-3xl cursor-pointer'
                />
              </div>
              <div className='flex flex-col justify-center items-center mx-auto h-60 md:h-52  space-y-1 md:space-y-2 '>
                <div className='bg-babygrey px-2 py-2 rounded-full cursor-pointer '>
                  <IoIosNotificationsOutline className='text-xs lg:text-base xl:text-xl ' />
                </div>
                <h1 className='font-bold text-sm text-center lg:text-base px-4 md:px-8  lg:px-10'>
                  No Notifications to show yet
                </h1>
                <p className='text-xs text-center px-6 md:px-8  lg:px-10 '>
                  You will see useful notifications here soon. Please check back
                  regularly
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* <!-- Mobile Menu --> */}
      {pannel && (
        <div
          id='menu'
          className='fixed inset-0 z-20  flex-col items-center self-end w-full h-full m-h-screen px-6 py-1 pt-32 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 bg-opacity-95 bg-babyblack'
        >
          <div className='w-full py-3 text-center'>
            <ul className='text-sm md:text-sm cursor-pointer'>
              <Link href='/host/dashboard'>Dashboard</Link>
            </ul>
          </div>
          <div className='w-full py-3 text-center'>
            <ul className='text-sm md:text-sm cursor-pointer'>
              <Link href='/host/transactionhistory'>Transaction History</Link>
            </ul>
          </div>
          <div className='w-full py-3 text-center'>
            <ul className='text-sm md:text-sm cursor-pointer'>
              <Link href='/host/leasehistory'>Lease History</Link>
            </ul>
          </div>
          <div className='w-full py-3 text-center'>
            <ul className='text-sm md:text-sm cursor-pointer'>
              <Link href='/host/fleet'>Fleet</Link>
            </ul>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
