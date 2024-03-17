import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import {
  closeDropDown,
  closeNotifications,
  switchToHost,
  logOut,
} from '@/features/userpersona/userSlice'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { FiUser } from 'react-icons/fi'
import {
  BsBookmark,
  BsBookmarkHeart,
  BsBriefcase,
  BsChatSquareDots,
} from 'react-icons/bs'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { BiSupport } from 'react-icons/bi'
import { RiHome3Line, RiInformationLine } from 'react-icons/ri'
import { MdAdsClick, MdOutlineDataSaverOn } from 'react-icons/md'
import { GrTransaction } from 'react-icons/gr'
import Link from 'next/link'
import moment from 'moment'
import Tippy from '@tippyjs/react'
import 'tippy.js/themes/light.css'
import mainAxiosAction from '@/components/axiosAction'
import { toast } from 'react-toastify'

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
  const [visible, setVisible] = useState(false)
  const show = () => setVisible(true)
  const hide = () => setVisible(false)
  const [visiblem, setVisiblem] = useState(false)
  const showm = () => setVisiblem(true)
  const hidem = () => setVisiblem(false)
  const router = useRouter()
  const dispatch = useDispatch()
  // navigation

  // user ref
  //   let menuRef = useRef()
  //   useEffect(() => {
  //     let handler = (e) => {
  //       if (!menuRef.current.contains(e.target)) {
  //         dispatch(closeDropDown())
  //         dispatch(closeNotifications())
  //       }
  //     }
  //     document.addEventListener('mousedown', handler)
  //     return () => {
  //       document.removeEventListener('mousedown', handler)
  //     }
  //   })
  //  ref = { menuRef }
  const profile =
    localStorage?.getItem('User_Profile') === null ||
    localStorage?.getItem('User_Profile') === 'undefined' ||
    localStorage?.getItem('User_Profile') === undefined
      ? []
      : JSON?.parse(localStorage?.getItem('User_Profile'))

  const mynotifications =
    localStorage?.getItem('User_Notifications') === null ||
    localStorage?.getItem('User_Notifications') === 'undefined' ||
    localStorage?.getItem('User_Notifications') === undefined
      ? []
      : JSON?.parse(localStorage?.getItem('User_Notifications'))

 

  return (
    <nav
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
              router.pathname.includes('/rentacar')
                ? "text-xs md:text-sm cursor-pointer xl:text-base bg-[url('/images/started.png')] bg-no-repeat bg-bottom  py-4  "
                : 'text-xs md:text-sm cursor-pointer xl:text-base '
            }`}
          >
            <Link href='/rentacar'>Rent a Car</Link>
          </ul>
          <ul
            className={`${
              router.pathname.includes('/renthistory') && isUserLogedin
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
              router.pathname.includes('/support') && isUserLogedin
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
              {/* chat */}
              <Link href='/messages'>
                <div className='bg-babygrey px-2 py-2 lg:px-3 lg:py-3 rounded-full cursor-pointer'>
                  <BsChatSquareDots className='text-xs lg:text-base xl:text-xl ' />
                </div>
              </Link>
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

              {/* menu dropdown */}
              <Tippy
                content={
                  <div className='    bg-white  py-4 lg:py-6  space-y-4 md:space-y-5 lg:space-y-6 '>
                    {/* profil */}
                    <div className='flex flex-col justify-between items-center gap-4 px-4  '>
                      {/* image */}
                      <div className='flex flex-col justify-center items-center gap-2 flex-shrink-0 '>
                        <div className='  relative  flex-shrink-0 '>
                          {profile?.profile_picture ? (
                            <Image
                              src={profile?.profile_picture}
                              alt={'photo'}
                              width={1000}
                              height={1000}
                              className='object-cover w-10 md:w-12 lg:w-16  xl:w-20 h-10 md:h-12 lg:h-16  xl:h-20  rounded-full border-2 border-babypurple'
                            />
                          ) : (
                            <Image
                              src={'/images/avatar.png'}
                              alt='logo'
                              width={1000}
                              height={1000}
                              className='object-cover w-10 md:w-12 lg:w-16  xl:w-20  h-10 md:h-12 lg:h-16  xl:h-20 rounded-full border-2 border-babypurple'
                            />
                          )}
                        </div>
                        <h1 className='text-xs lg:text-sm font-bold truncate w-40  text-center'>
                          {profile?.lastname} {profile?.firstname}
                        </h1>
                      </div>
                      {/* link */}
                      <div className='flex items-center gap-2 w-max lg:gap-4 '>
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
                            if (profile?.type === 'user') {
                              return router.push({
                                pathname: '/partnerwithus',
                              })
                            } else {
                              dispatch(switchToHost()),
                                router.push({
                                  pathname: '/host/dashboard',
                                })
                            }
                          }}
                          className='border px-3 md:px-4  py-1  rounded-full w-max  hover:bg-babypurple hover:border-none hover:text-white hover:duration-500 hover:shadow-md'
                        >
                          <h1 className=' text-xs xl:text-sm text-center '>
                            Switch to business
                          </h1>
                        </button>
                      </div>
                    </div>
                    {/* underline */}
                    <div className='w-full border-b  border-babygrey'></div>
                    {/* options */}
                    <div className='px-4 space-y-4  lg:space-y-5 xl:space-y-6'>
                      {/* saved vehicles */}
                      <Link
                        href='/'
                        className='flex  items-center gap-4 md:hidden '
                      >
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
                      {profile?.type !== 'business' && (
                        <Link
                          href='/partnerwithus'
                          className='flex   items-center gap-4 '
                        >
                          <BsBriefcase className='lg:text-2xl ' />
                          <h1 className='text-xs lg:text-sm '>
                            Partner with Us
                          </h1>
                        </Link>
                      )}
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
                        <BsBookmarkHeart className='lg:text-2xl ' />
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
                  className='flex justify-center items-center gap-2 lg:gap-4 xl:gap-5 flex-shrink-0 '
                >
                  {/* image */}
                  <div className='  relative cursor-pointer flex-shrink-0  '>
                    {profile?.profile_picture ? (
                      <Image
                        src={profile?.profile_picture}
                        alt={'photo'}
                        width={1000}
                        height={1000}
                        className={`${
                          router.pathname === '/' ||
                          router.pathname === '/contactus'
                            ? 'object-cover w-10 lg:w-14  xl:w-16 h-10 lg:h-14  xl:h-16 rounded-full border-2 border-white'
                            : 'object-cover w-10 lg:w-14  xl:w-16 h-10 lg:h-14  xl:h-16 rounded-full border-2 border-babypurple'
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
