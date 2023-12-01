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
import Tippy from '@tippyjs/react'
import 'tippy.js/themes/light.css'

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
  const [visible, setVisible] = useState(false)
  const show = () => setVisible(true)
  const hide = () => setVisible(false)
  const [visiblem, setVisiblem] = useState(false)
  const showm = () => setVisiblem(true)
  const hidem = () => setVisiblem(false)

  const profile = JSON?.parse(localStorage?.getItem('User_Profile'))
  const mynotifications = JSON?.parse(
    localStorage?.getItem('User_Notifications')
  )

  return (
    <nav className=' relative mx-auto font-sans px-1 md:px-4 lg:px-10 py-2 md:py-2 '>
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
              router.pathname === '/host/transactionhistory'
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
              {/* tooltipnotifications */}
              <Tippy
                content={
                  !mynotifications ? (
                    <div className='flex flex-col justify-center items-center mx-auto h-52 md:h-56 w-64 md:w-72 lg:w-80 space-y-2 md:space-y-3 '>
                      <div className='bg-babygrey px-2 py-2 rounded-full cursor-pointer '>
                        <IoIosNotificationsOutline className='text-xs lg:text-base xl:text-xl ' />
                      </div>
                      <div className='space-y-1 px-4 md:px-8  '>
                        <h1 className='font-bold text-sm text-center lg:text-base '>
                          No new notifications to show yet
                        </h1>
                        <p className='text-xs text-center  lg:text-sm '>
                          You will see new notifications here soon. Please check
                          back regularly
                        </p>
                      </div>

                      <Link href='/allnotifications'>
                        <div
                          // onClick={() => dispatch(closeNotifications())}
                          className='  py-2 px-4 text-left text-babypurple text-xs lg:text-sm font-bold'
                        >
                          <h1>See all notifications</h1>
                        </div>
                      </Link>
                    </div>
                  ) : (
                    <div
                      className={`${
                        mynotifications?.filter((i) => i.isRead === false)
                          ?.length > 0
                          ? '  divide-y w-64 lg:w-80'
                          : 'w-max'
                      }`}
                    >
                      {mynotifications
                        .filter((i) => i.isRead === false)
                        .slice(0, 3)
                        .map((item, index) => {
                          return (
                            <div
                              key={index}
                              className=' space-y-1 py-3 lg:py-4 px-2  lg:px-3  '
                            >
                              {/* text */}
                              <div className='space-y-1  cursor-pointer '>
                                {/* Header */}

                                {/* desc */}
                                <p className='text-xs lg:text-sm  line-clamp-2   '>
                                  {item?.message}
                                </p>
                                {/* time */}
                                <p
                                  className='text-[0.65rem]
                                    text-slate-500  '
                                >
                                  {moment(item?.date_created).format('Do MMMM')}
                                </p>
                              </div>
                            </div>
                          )
                        })}

                      {/* viewall */}
                      <div
                        className={`${
                          mynotifications?.filter((i) => i.isRead === false)
                            ?.length > 0
                            ? ' border-t w-full'
                            : 'w-max'
                        }`}
                      >
                        <Link href='/allnotifications'>
                          <div
                            // onClick={() => dispatch(closeNotifications())}
                            className='  py-2 px-2 text-left text-babypurple text-xs lg:text-sm'
                          >
                            <h1>See all notifications</h1>
                          </div>
                        </Link>
                      </div>
                    </div>
                  )
                }
                interactive={true}
                interactiveBorder={20}
                delay={100}
                theme='light'
                visible={visible}
                onClickOutside={hide}
              >
                <div className='relative'>
                  <div
                    onClick={visible ? hide : show}
                    className='bg-babygrey px-2 py-2 rounded-full lg:px-3 lg:py-3 cursor-pointer relative'
                  >
                    <IoIosNotificationsOutline className='text-xs lg:text-base xl:text-xl ' />
                  </div>
                  {mynotifications?.filter((i) => i.isRead === false)?.length >
                    0 && (
                    <div className='absolute -top-3 lg:-top-4 -right-2 lg:-right-3 w-5 h-5 lg:w-7 lg:h-7 rounded-full bg-babypurple flex justify-center items-center'>
                      <h1 className='text-[0.6rem] text-white lg:text-xs font-bold'>
                        {
                          mynotifications?.filter((i) => i.isRead === false)
                            ?.length
                        }
                      </h1>
                    </div>
                  )}
                </div>
              </Tippy>

              {/* control */}
              <Tippy
                content={
                  <div className='    bg-white  py-4 lg:py-6  space-y-4 md:space-y-5 lg:space-y-6 '>
                    {/* profil */}
                    <div className='flex flex-col justify-between items-center gap-4 px-4 lg:px-6 '>
                      {/* image */}
                      <div className='flex flex-col justify-center items-center gap-2 '>
                        <div className='  relative '>
                          {profile ? (
                            <Image
                              src={profile?.profile_picture?.url}
                              alt={profile?.profile_picture?.name}
                              width={1000}
                              height={1000}
                              className='object-cover w-10 md:w-12 lg:w-16  xl:w-20 rounded-full border-2 border-babypurple'
                            />
                          ) : (
                            <Image
                              src={'/images/avatar.png'}
                              alt='logo'
                              width={1000}
                              height={1000}
                              className='object-cover w-10 md:w-12 lg:w-16  xl:w-20   rounded-full border-2 border-babypurple'
                            />
                          )}
                        </div>
                        <h1 className='text-xs lg:text-sm font-bold truncate w-40  text-center'>
                          {profile?.lastname} {profile?.firstname}
                        </h1>
                      </div>
                      {/* link */}
                      <div className='flex items-center gap-2 w-max lg:gap-4'>
                        <Link
                          href='/userprofile/view'
                          className='border px-3 md:px-4 lg:px-6 hover:bg-babypurple hover:border-none hover:text-white hover:duration-500 hover:shadow-md     py-1  rounded-full w-max '
                        >
                          <h1 className=' text-xs xl:text-sm text-center '>
                            View Profile
                          </h1>
                        </Link>
                        <button
                          onClick={() => {
                            dispatch(returnToUser()),
                              router.push({
                                pathname: '/',
                              })
                          }}
                          className='border px-3 md:px-4  py-1  rounded-full w-max  hover:bg-babypurple hover:border-none hover:text-white hover:duration-500 hover:shadow-md'
                        >
                          <h1 className=' text-xs xl:text-sm text-center '>
                            Rent a Car
                          </h1>
                        </button>
                      </div>
                    </div>
                    {/* underline */}
                    <div className='w-full border-b  border-babygrey'></div>
                    {/* options */}
                    <div className='px-4 lg:px-6 space-y-4 md:space-y-4 lg:space-y-5 xl:space-y-6'>
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
                        <h1 className='text-xs lg:text-sm '>
                          Transaction History
                        </h1>
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
                      <Link
                        href='/support'
                        className='flex  items-center gap-4 '
                      >
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
                }
                interactive={true}
                interactiveBorder={20}
                delay={100}
                theme='light'
                visible={visiblem}
                onClickOutside={hidem}
              >
                <div
                  onClick={visiblem ? hidem : showm}
                  className='flex justify-center items-center gap-2 lg:gap-4 xl:gap-5'
                >
                  {/* image */}
                  <div className='  relative cursor-pointer '>
                    {profile ? (
                      <Image
                        src={profile?.profile_picture?.url}
                        alt={profile?.profile_picture?.name}
                        width={1000}
                        height={1000}
                        className={`${
                          router.pathname === '/' ||
                          router.pathname === '/contactus'
                            ? 'object-cover w-10 lg:w-14  xl:w-16 rounded-full border-2 border-white'
                            : 'object-cover w-10 lg:w-14  xl:w-16 rounded-full border-2 border-babypurple'
                        }`}
                      />
                    ) : (
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
                    )}
                  </div>
                </div>
              </Tippy>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
