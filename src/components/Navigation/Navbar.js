import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import {
  openDropDown,
  closeDropDown,
  closeNotifications,
  openNotifications,
} from '@/features/userpersona/userSlice'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'
import { FiUser } from 'react-icons/fi'
import { BsBookmark, BsQuestionCircle } from 'react-icons/bs'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { BiMessageSquareEdit } from 'react-icons/bi'
import { TfiSettings } from 'react-icons/tfi'
import { MdAdsClick } from 'react-icons/md'
import { GrFormClose } from 'react-icons/gr'

import Link from 'next/link'
function Navbar() {
  const { isUserLogedin, dropDown, notifications, notificationscontent } =
    useSelector((store) => store.userpersona)
  const [pannel, setPannel] = useState(false)
  const [menubutton, setMenubutton] = useState(false)
  const [bg, setBg] = useState(true)
  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    if (router.pathname === '/' || router.pathname === '/contactus') {
      setBg(true)
    } else {
      setBg(false)
    }

    dispatch(closeDropDown())
  }, [router.pathname])
  return (
    <nav className=' relative mx-auto font-sans px-1 md:px-4 lg:px-10 py-2 md:py-2 '>
      {/* <!-- Flex Container For Nav Items --> */}
      <div className='flex items-center justify-between px-4 sm:px-6 md:px-0 my-6 relative '>
        {/* <!-- Logo --> */}
        <div className='z-30 '>
          {bg ? (
            <Link href='/'>
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
            <Link href='/'>
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
            bg
              ? 'hidden items-center font-sans  font-bold  space-x-8 lg:space-x-12 xl:space-x-20  2xl:space-x-24 text-white md:flex justify-center normal-case'
              : 'hidden items-center font-sans  font-bold  space-x-8 lg:space-x-12 xl:space-x-20  2xl:space-x-24 text-babyblack md:flex justify-center normal-case'
          }`}
        >
          <ul className='text-xs md:text-sm cursor-pointer xl:text-base '>
            <Link href='/aboutus'>About us</Link>
          </ul>
          <ul className='text-xs md:text-sm cursor-pointer xl:text-base '>
            <Link href='/rentacar'>Rent a Car</Link>
          </ul>
          <ul className='text-xs md:text-sm xl:text-base cursor-pointer'>
            <Link href='/partnerwithus'>Partner with Us</Link>
          </ul>
          <ul className='text-xs md:text-sm cursor-pointer xl:text-base '>
            <Link href='/contactus'>Contact Us</Link>
          </ul>
        </div>
        {/* signup button web */}
        {!isUserLogedin && (
          <div className='flex items-center gap-4'>
            <div
              className={`${
                bg
                  ? 'sm:px-2 md:px-4 lg:px-6 py-2 lg:py-3 text-white    rounded-md border border-white cursor-pointer hidden md:flex md:justify-center md:items-center md:gap-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 hover:border-none hover:text-white'
                  : 'sm:px-2 md:px-4 lg:px-6 py-2 lg:py-3 text-babypurple    rounded-md border border-babypurple cursor-pointer hidden md:flex md:justify-center md:items-center md:gap-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 hover:border-none hover:text-white'
              }`}
            >
              <Link href='/Auth/signup'>
                <p className='text-xs md:text-sm'>Sign Up</p>
              </Link>
            </div>
            <div
              className={`${
                bg
                  ? 'sm:px-2 md:px-4 lg:px-8 py-2 lg:py-3 text-babypurple    rounded-md bg-white cursor-pointer hidden md:flex md:justify-center md:items-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 hover:text-white  '
                  : 'sm:px-2 md:px-4 lg:px-8 py-2 lg:py-3 text-white    rounded-md bg-babypurple cursor-pointer hidden md:flex md:justify-center md:items-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300  '
              }`}
            >
              <Link href='/Auth/login'>
                <p className='text-xs md:text-sm'>Login</p>
              </Link>
            </div>
          </div>
        )}
        {/* cotrols and menu  */}
        <div className='flex justify-center items-center gap-6 relative'>
          {isUserLogedin && (
            <div className='flex justify-center items-center gap-4 lg:gap-6 xl:gap-8 relative'>
              {/* notification */}
              <div
                onClick={() => {
                  dispatch(openNotifications()), dispatch(closeDropDown())
                }}
                className='bg-babygrey px-2 py-2 rounded-full cursor-pointer'
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
                      bg
                        ? 'object-cover w-10 lg:w-14  xl:w-16 rounded-full border-2 border-white'
                        : 'object-cover w-10 lg:w-14  xl:w-16 rounded-full border-2 border-babypurple'
                    }`}
                  />
                </div>
                {/* dropdwon */}
                <div className={`${bg ? 'text-white' : 'text-babyblack'}`}>
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
          {/* <!-- Hamburger Button --> */}
          {pannel ? (
            <button
              id='menu-btn'
              className='z-30 open block md:hidden focus:outline-none hamburger'
              onClick={() => {
                setPannel(!pannel),
                  dispatch(closeDropDown()),
                  dispatch(closeNotifications())
              }}
            >
              <span className='hamburger-top'></span>
              <span className='hamburger-middle'></span>
              <span className='hamburger-bottom'></span>
            </button>
          ) : (
            <button
              id='menu-btn'
              className='z-30 block md:hidden focus:outline-none hamburger'
              onClick={() => setPannel(!pannel)}
            >
              <span
                className={`${bg ? 'phamburger-top' : 'hamburger-top'}`}
              ></span>

              <span
                className={`${bg ? 'phamburger-middle' : 'hamburger-middle'}`}
              ></span>
              <span
                className={`${bg ? 'phamburger-bottom' : 'hamburger-bottom'}`}
              ></span>
            </button>
          )}
          {/* display control */}
          {dropDown && !notifications && (
            <div className='absolute top-12 sm:top-14 md:top-16 lg:top-20  right-0  w-60 md:w-64 lg:w-72 xl:w-[20rem]  bg-white shadow-md rounded-sm md:rounded-md  xl:rounded-lg  py-4 lg:py-6  space-y-4 md:space-y-5 lg:space-y-6  z-10'>
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
                  href='/Userprofile/view'
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
              <div className='px-4 lg:px-6 space-y-3 md:space-y-4 lg:space-y-5 xl:space-y-6'>
                {/* host/user */}
                <div className='flex justify-between items-center gap-4'>
                  {/* text */}
                  <div className='flex  items-center gap-4 '>
                    <FiUser className='text-xl lg:text-2xl ' />
                    <h1 className='text-xs lg:text-sm '>Become a Host</h1>
                  </div>
                  {/* button */}
                  <button
                    type='button'
                    // onClick={() => setClicked(!clicked)}
                    className={`${
                      dropDown
                        ? 'bg-babypurple rounded-full relative h-4 w-8 lg:w-14 lg:h-6 '
                        : 'bg-babygrey rounded-full relative h-4 w-8 lg:w-14 lg:h-6 '
                    }`}
                  >
                    <div
                      className={`${
                        dropDown
                          ? 'bg-white rounded-full w-3 h-3 lg:h-5 lg:w-5  absolute top-1/2  bottom-1/2 right-1 -translate-y-1/2 duration-1000  '
                          : 'bg-white rounded-full w-3 h-3 absolute top-1/2  bottom-1/2 left-1 -translate-y-1/2 duration-1000 lg:h-5 lg:w-5'
                      } `}
                    ></div>
                  </button>
                </div>
                {/* saved vehicles */}
                <Link
                  href='/savedvehicles'
                  className='flex  items-center gap-4 '
                >
                  <BsBookmark className='text-xl lg:text-2xl ' />
                  <h1 className='text-xs lg:text-sm '>Saved Vehicles</h1>
                </Link>
                {/* rent history */}
                <Link href='/renthistory' className='flex  items-center gap-4 '>
                  <HiOutlineDocumentText className='text-xl lg:text-2xl ' />
                  <h1 className='text-xs lg:text-sm '>Rent History</h1>
                </Link>
                {/* Messages */}
                <Link href='/messages' className='flex  items-center gap-4 '>
                  <BiMessageSquareEdit className='text-xl lg:text-2xl ' />
                  <h1 className='text-xs lg:text-sm '>Messages</h1>
                </Link>
                {/* settings */}
                <Link href='/settings' className='flex  items-center gap-4 '>
                  <TfiSettings className='text-xl lg:text-2xl ' />
                  <h1 className='text-xs lg:text-sm '>Settings</h1>
                </Link>
                {/* suport */}
                <Link href='/support' className='flex  items-center gap-4 '>
                  <BsQuestionCircle className='text-xl lg:text-2xl ' />
                  <h1 className='text-xs lg:text-sm '>Support</h1>
                </Link>
                {/* logout */}
                <Link href='/Auth/login' className='flex  items-center gap-4 '>
                  <MdAdsClick className='text-xl lg:text-2xl ' />
                  <h1 className='text-xs lg:text-sm '>Logout</h1>
                </Link>
              </div>
            </div>
          )}
          {/* notifications */}
          {notifications && !dropDown && (
            <div className='absolute top-12 sm:top-14 md:top-16 lg:top-20  right-0  w-60 md:w-72 lg:w-80 h-80  bg-white shadow-md rounded-sm md:rounded-md  xl:rounded-lg  pb-4 lg:pb-6  space-y-4 md:space-y-5 lg:space-y-6  z-10'>
              <div className='bg-babygrey flex justify-between items-center px-4 lg:px-6 py-2 md:py-3 '>
                <h1 className='text-sm lg:text-base'>Notifications</h1>
                <GrFormClose
                  onClick={() => dispatch(closeNotifications())}
                  className='text-2xl lg:text-3xl cursor-pointer'
                />
              </div>
              <div className='flex flex-col justify-center items-center mx-auto h-60 md:h-52 px-6 md:px-8  lg:px-10 space-y-2 '>
                <div className='bg-babygrey px-2 py-2 rounded-full cursor-pointer '>
                  <IoIosNotificationsOutline className='text-xs lg:text-base xl:text-xl ' />
                </div>
                <h1 className='font-bold text-sm lg:text-base'>
                  No Notifications to show yet
                </h1>
                <p className='text-xs text-center '>
                  You will see useful notifications here soon. Please check back
                  regularly
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* <!-- Mobile Menu --> */}
      {pannel ? (
        <div
          id='menu'
          className='fixed inset-0 z-20  flex-col items-center self-end w-full h-full m-h-screen px-6 py-1 pt-32 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 bg-opacity-95 bg-babyblack'
        >
          <div className='w-full py-3 text-center'>
            <ul className='text-sm md:text-sm cursor-pointer'>
              <Link href='/'>Home</Link>
            </ul>
          </div>
          <div className='w-full py-3 text-center'>
            <ul className='text-sm md:text-sm cursor-pointer'>
              <Link href='/aboutus'>About Us</Link>
            </ul>
          </div>
          <div className='w-full py-3 text-center'>
            <ul className='text-sm md:text-sm cursor-pointer'>
              <Link href='/rentacar'>Rent a Car</Link>
            </ul>
          </div>
          <div className='w-full py-3 text-center'>
            <ul className='text-sm md:text-sm cursor-pointer'>
              <Link href='/partnerwithus'>Partner with us</Link>
            </ul>
          </div>
          <div className='w-full py-3 text-center'>
            <ul className='text-sm md:text-sm cursor-pointer'>
              <Link href='/contactus'>Contact us</Link>
            </ul>
          </div>
          {isUserLogedin ? (
            <div className='px-6 py-3 text-babyblack   rounded-md  bg-white cursor-pointer md:hidden flex justify-center items-center mx-auto w-40 mt-10'>
              <Link href='/Auth/login'>
                <p className='text-xs md:text-sm'>Log Out</p>
              </Link>
            </div>
          ) : (
            <div className='flex  justify-center pt-10 items-center gap-4'>
              <div className=' px-6 py-3 text-white   rounded-md  border boreder-white cursor-pointer md:hidden flex justify-center items-center gap-4 '>
                <Link href='/Auth/signup'>
                  <p className='text-xs md:text-sm'>Sign Up</p>
                </Link>
              </div>
              <div className='px-6 py-3 text-babyblack   rounded-md  bg-white cursor-pointer md:hidden flex justify-center items-center gap-4 '>
                <Link href='/Auth/login'>
                  <p className='text-xs md:text-sm'>Login</p>
                </Link>
              </div>
            </div>
          )}
        </div>
      ) : (
        ''
      )}
    </nav>
  )
}

export default Navbar
