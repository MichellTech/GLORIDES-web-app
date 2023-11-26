import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import {
  openDropDown,
  closeDropDown,
  closeNotifications,
  openNotifications,
  switchToHost,
  logOut,
} from '@/features/userpersona/userSlice'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'
import { FiUser } from 'react-icons/fi'
import { BsBookmark, BsBriefcase, BsChatSquareDots } from 'react-icons/bs'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { BiSupport } from 'react-icons/bi'
import { RiHome3Line, RiInformationLine } from 'react-icons/ri'
import { MdAdsClick } from 'react-icons/md'
import { GrFormClose, GrTransaction } from 'react-icons/gr'
import Link from 'next/link'
import moment from 'moment'
function Navbar() {
  const {
    isUserLogedin,
    dropDown,
    notifications,
    hosting,
    userData,
    notificationsData,
  } = useSelector((store) => store.userpersona)
  const [pannel, setPannel] = useState(false)
  const [read, setRead] = useState(null)
  const router = useRouter()
  const dispatch = useDispatch()
  // navigation

  useEffect(() => {
    dispatch(closeDropDown())
    dispatch(closeNotifications())
    getunreadnotifications()
  }, [router.pathname])

  // user ref
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
  // console.log(userData)

  // notification data count
  const getunreadnotifications = () => {
    setRead(
      notificationsData?.map((item) => {
        return item?.isRead
      })
    )
  }

  // console.log(read?.length)

  return (
    <nav
      ref={menuRef}
      className={`${
        router.pathname === '/rentacar'
          ? ' relative mx-auto font-sans px-1 md:px-4 lg:px-10 pt-2 '
          : ' relative mx-auto font-sans px-1 md:px-4 lg:px-10 py-2 md:py-2 '
      }`}
    >
      {/* <!-- Flex Container For Nav Items --> */}
      <div className='flex items-center justify-between px-4 sm:px-6 md:px-0 my-6 relative '>
        {/* <!-- Logo --> */}
        <div className='z-30 '>
          {router.pathname === '/' || router.pathname === '/contactus' ? (
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
            router.pathname === '/' || router.pathname === '/contactus'
              ? 'hidden items-center font-sans  font-bold  space-x-8 lg:space-x-12 xl:space-x-20  2xl:space-x-24 text-white md:flex justify-center normal-case'
              : 'hidden items-center font-sans  font-bold  space-x-8 lg:space-x-12 xl:space-x-20  2xl:space-x-24 text-babyblack md:flex justify-center normal-case'
          }`}
        >
          <ul
            className={`${
              router.pathname === '/aboutus'
                ? "text-xs md:text-sm cursor-pointer xl:text-base bg-[url('/images/started.png')] bg-no-repeat bg-bottom  py-4  "
                : 'text-xs md:text-sm cursor-pointer xl:text-base '
            }`}
          >
            <Link href='/aboutus'>About us</Link>
          </ul>
          <ul
            className={`${
              router.pathname === '/rentacar'
                ? "text-xs md:text-sm cursor-pointer xl:text-base bg-[url('/images/started.png')] bg-no-repeat bg-bottom  py-4  "
                : 'text-xs md:text-sm cursor-pointer xl:text-base '
            }`}
          >
            <Link href='/rentacar'>Rent a Car</Link>
          </ul>
          <ul
            className={`${
              router.pathname === '/renthistory' && isUserLogedin
                ? "text-xs md:text-sm cursor-pointer xl:text-base bg-[url('/images/started.png')] bg-no-repeat bg-bottom  py-4  "
                : router.pathname === '/partnerwithus' && !isUserLogedin
                ? "text-xs md:text-sm cursor-pointer xl:text-base bg-[url('/images/started.png')] bg-no-repeat bg-bottom  py-4  "
                : 'text-xs md:text-sm cursor-pointer xl:text-base '
            }`}
          >
            {isUserLogedin ? (
              <Link href='/renthistory'>Rent History</Link>
            ) : (
              <Link href='/partnerwithus'>Partner with Us</Link>
            )}
          </ul>
          <ul
            className={`${
              router.pathname === '/support' && isUserLogedin
                ? "text-xs md:text-sm cursor-pointer xl:text-base bg-[url('/images/started.png')] bg-no-repeat bg-bottom  py-4  "
                : router.pathname === '/contactus' && !isUserLogedin
                ? "text-xs md:text-sm cursor-pointer xl:text-base bg-[url('/images/started2.png')] bg-no-repeat bg-bottom  py-4  "
                : 'text-xs md:text-sm cursor-pointer xl:text-base '
            }`}
          >
            {isUserLogedin ? (
              <Link href='/support'>Support</Link>
            ) : (
              <Link href='/contactus'>Contact Us</Link>
            )}
          </ul>
        </div>
        {/* signup button web */}
        {!isUserLogedin && (
          <div className='flex items-center gap-4'>
            <div
              className={`${
                router.pathname === '/' || router.pathname === '/contactus'
                  ? 'sm:px-2 md:px-4 lg:px-6 py-2 lg:py-3 text-white    rounded-md border border-white cursor-pointer hidden md:flex md:justify-center md:items-center md:gap-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 hover:border-none hover:text-white'
                  : 'sm:px-2 md:px-4 lg:px-6 py-2 lg:py-3 text-babypurple    rounded-md border border-babypurple cursor-pointer hidden md:flex md:justify-center md:items-center md:gap-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 hover:border-none hover:text-white'
              }`}
            >
              <Link href='/auth/signup'>
                <p className='text-xs md:text-sm'>Sign Up</p>
              </Link>
            </div>
            <div
              className={`${
                router.pathname === '/' || router.pathname === '/contactus'
                  ? 'sm:px-2 md:px-4 lg:px-8 py-2 lg:py-3 text-babypurple    rounded-md bg-white cursor-pointer hidden md:flex md:justify-center md:items-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 hover:text-white  '
                  : 'sm:px-2 md:px-4 lg:px-8 py-2 lg:py-3 text-white    rounded-md bg-babypurple cursor-pointer hidden md:flex md:justify-center md:items-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300  '
              }`}
            >
              <Link href='/auth/login'>
                <p className='text-xs md:text-sm'>Login</p>
              </Link>
            </div>
          </div>
        )}
        {/* cotrols and menu  */}
        <div
          className={`${
            isUserLogedin
              ? 'flex justify-center items-center gap-6 relative '
              : 'flex justify-center items-center gap-6 relative md:hidden'
          }`}
        >
          {isUserLogedin && (
            <div className='flex justify-center items-center gap-4 lg:gap-6 xl:gap-8 relative'>
              {/* notification */}
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
                className='bg-babygrey px-2 py-2 rounded-full lg:px-3 lg:py-3 cursor-pointer relative'
              >
                <IoIosNotificationsOutline className='text-xs lg:text-base xl:text-xl ' />
                <div className='absolute -top-2 -right-3 lg:-top-3 '>
                  {read?.length > 0 && (
                    <div className='bg-babypurple rounded-full  text-white w-5 h-5 lg:w-7 lg:h-7 flex justify-center items-center'>
                      <h1 className='text-[0.6rem] lg:text-xs'>
                        {read?.length}
                      </h1>
                    </div>
                  )}
                </div>
              </div>

              {/* userimage drop */}
              <div className='flex justify-center items-center gap-2 lg:gap-4 xl:gap-5'>
                {/* image */}
                <div
                  onClick={() => dispatch(openDropDown())}
                  className='  relative '
                >
                  {userData ? (
                    <Image
                      src={userData?.profile_picture?.url}
                      alt={userData?.profile_picture?.name}
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
            !isUserLogedin &&
            !pannel && (
              <button
                id='menu-btn'
                className='z-30 block md:hidden focus:outline-none hamburger'
                onClick={() => setPannel(!pannel)}
              >
                <span
                  className={`${
                    router.pathname === '/' || router.pathname === '/contactus'
                      ? 'phamburger-top'
                      : 'hamburger-top'
                  }`}
                ></span>

                <span
                  className={`${
                    router.pathname === '/' || router.pathname === '/contactus'
                      ? 'phamburger-middle'
                      : 'hamburger-middle'
                  }`}
                ></span>
                <span
                  className={`${
                    router.pathname === '/' || router.pathname === '/contactus'
                      ? 'phamburger-bottom'
                      : 'hamburger-bottom'
                  }`}
                ></span>
              </button>
            )
          )}
          {/* display control */}
          {dropDown && !notifications && (
            <div className='absolute top-12 sm:top-14 md:top-16 lg:top-20  right-0  w-60 md:w-64 lg:w-72 xl:w-[19rem]  bg-white shadow-xl rounded-sm md:rounded-md  xl:rounded-lg  py-4 lg:py-6  space-y-4 md:space-y-5 lg:space-y-6  z-50'>
              {/* profil */}
              <div className='flex justify-between items-center gap-4 px-4 lg:px-6 '>
                {/* image */}
                <div className='flex justify-center items-center gap-2 '>
                  <div className='  relative '>
                    {userData ? (
                      <Image
                        src={userData?.profile_picture?.url}
                        alt={userData?.profile_picture?.name}
                        width={1000}
                        height={1000}
                        className='object-cover w-10 lg:w-12  xl:w-14 rounded-full border-2 border-babypurple'
                      />
                    ) : (
                      <Image
                        src={'/images/avatar.png'}
                        alt='logo'
                        width={1000}
                        height={1000}
                        className='object-cover w-10 lg:w-12  xl:w-14 rounded-full border-2 border-babypurple'
                      />
                    )}
                  </div>
                  <h1 className='text-xs lg:text-sm font-bold truncate w-14 lg:w-16 xl:w-20'>
                    {' '}
                    {userData?.firstname}
                  </h1>
                </div>
                {/* link */}
                <Link
                  href='/userprofile/view'
                  className='bg-babypurple px-2 md:px-3   py-1 md:py-2 rounded'
                >
                  <h1 className='text-white text-xs xl:text-sm text-center w-max'>
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
                  {!hosting && (
                    <button
                      type='button'
                      onClick={() => {
                        dispatch(switchToHost()),
                          router.push({
                            pathname: '/host/dashboard',
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
                {/* saved vehicles */}
                <Link href='/' className='flex  items-center gap-4 md:hidden '>
                  <RiHome3Line className='lg:text-2xl ' />
                  <h1 className='text-xs lg:text-sm '>Home</h1>
                </Link>
                {/* saved vehicles */}
                <Link
                  href='/aboutus'
                  className='flex  items-center gap-4  md:hidden'
                >
                  <RiInformationLine className='lg:text-2xl ' />
                  <h1 className='text-xs lg:text-sm '>About Us</h1>
                </Link>
                {/* saved vehicles */}
                <Link
                  href='/rentacar'
                  className=' md:hidden flex  items-center gap-4  '
                >
                  <GrTransaction className='lg:text-2xl ' />
                  <h1 className='text-xs lg:text-sm '>Rent a Car</h1>
                </Link>
                {/* saved vehicles */}
                <Link
                  href='/partnerwithus'
                  className='flex   items-center gap-4 '
                >
                  <BsBriefcase className='lg:text-2xl ' />
                  <h1 className='text-xs lg:text-sm '>Partner with Us</h1>
                </Link>
                {/* saved vehicles */}
                <Link
                  href='/support'
                  className='flex  items-center gap-4  md:hidden'
                >
                  <BiSupport className='lg:text-2xl ' />
                  <h1 className='text-xs lg:text-sm '>Support</h1>
                </Link>
                {/* saved vehicles */}
                <Link
                  href='/savedvehicles'
                  className='flex  items-center gap-4 '
                >
                  <BsBookmark className='lg:text-2xl ' />
                  <h1 className='text-xs lg:text-sm '>Saved Vehicles</h1>
                </Link>
                {/* rent history */}
                <Link
                  href='/renthistory'
                  className='flex md:hidden  items-center gap-4 '
                >
                  <HiOutlineDocumentText className='lg:text-2xl ' />
                  <h1 className='text-xs lg:text-sm '>Rent History</h1>
                </Link>
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
          {/* display notifications */}
          {notifications && !dropDown && (
            <div className='absolute top-12 sm:top-14 md:top-16 lg:top-20  right-0  w-64 md:w-72 lg:w-80    bg-white shadow-lg rounded-sm md:rounded-md  xl:rounded-lg  pb-2 lg:pb-4  space-y-2 md:space-y-3 lg:space-y-4  z-50'>
              <div className='bg-babygrey flex justify-between items-center px-4 lg:px-6 py-2 md:py-3 '>
                <h1 className='text-sm lg:text-base'>Notifications</h1>
                <GrFormClose
                  onClick={() => dispatch(closeNotifications())}
                  className='text-2xl lg:text-3xl cursor-pointer'
                />
              </div>
              {!notificationsData ? (
                <div className='flex flex-col justify-center items-center mx-auto h-64 md:h-56  space-y-1 md:space-y-2 '>
                  <div className='bg-babygrey px-2 py-2 rounded-full cursor-pointer '>
                    <IoIosNotificationsOutline className='text-xs lg:text-base xl:text-xl ' />
                  </div>
                  <h1 className='font-bold text-sm text-center lg:text-base px-4 md:px-8  lg:px-10'>
                    No Notifications to show yet
                  </h1>
                  <p className='text-xs text-center px-6 md:px-8  lg:px-10 '>
                    You will see useful notifications here soon. Please check
                    back regularly
                  </p>
                </div>
              ) : (
                <div className=' px-2 lg:px-4  '>
                  {notificationsData.slice(0, 3).map((item, index) => {
                    return (
                      <div key={index} className=' space-y-2 '>
                        {/* text */}
                        <div className='space-y-1 mb-6 cursor-pointer '>
                          {/* Header */}
                          <h1 className='text-xs lg:text-sm truncate w-32 xl:w-40  font-bold '>
                            {item?.title}
                          </h1>

                          {/* desc */}
                          <p className='text-[0.6rem] lg:text-xs  line-clamp-1   '>
                            {item?.message}
                          </p>
                          {/* time */}
                          <p
                            className='text-[0.5rem] text-babypurple font-bold lg:text-[0.65rem]
                                     '
                          >
                            {moment(item?.date_created).format('Do MMMM')}
                          </p>
                        </div>
                      </div>
                    )
                  })}

                  {/* viewall */}
                  <div className=' border-t w-full'>
                    <Link href='/allnotifications'>
                      <div
                        // onClick={() => dispatch(closeNotifications())}
                        className='  pt-2 px-2 text-left text-babyblack text-xs'
                      >
                        <h1>See all notifications</h1>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
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
              {isUserLogedin ? (
                <Link href='/support'>Support</Link>
              ) : (
                <Link href='/contactus'>Contact us</Link>
              )}
            </ul>
          </div>
          {!isUserLogedin && (
            <div className='flex  justify-center pt-10 items-center gap-4'>
              <div className=' px-6 py-3 text-white   rounded-md  border boreder-white cursor-pointer md:hidden flex justify-center items-center gap-4 '>
                <Link href='/auth/signup'>
                  <p className='text-xs md:text-sm'>Sign Up</p>
                </Link>
              </div>
              <div className='px-6 py-3 text-babyblack   rounded-md  bg-white cursor-pointer md:hidden flex justify-center items-center gap-4 '>
                <Link href='/auth/login'>
                  <p className='text-xs md:text-sm'>Login</p>
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </nav>
  )
}

export default Navbar
