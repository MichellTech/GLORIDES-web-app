import React, { useState } from 'react'
import Navbar from '../components/Navigation/Navbar/index'
import Link from 'next/link'
import Image from 'next/image'
import Businessdata from '../utilis/Businessdata'
import Footer from '../components/Navigation/Footer'
import { RiEditFill } from 'react-icons/ri'
import { BsFillBriefcaseFill } from 'react-icons/bs'
import { BiUserPlus } from 'react-icons/bi'
import mainAxiosAction from '@/components/axiosAction'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { switchToHost } from '@/features/userpersona/userSlice'
import { useRouter } from 'next/router'
function partnerwithus() {
  const [info, setInfo] = useState(Businessdata)
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const router = useRouter()
  const handleswitch = () => {
    setLoading(true)
    mainAxiosAction
      .post(`/user/switchtobusiness`, {})
      .then(function (response) {
        dispatch(switchToHost()),
          router.push({
            pathname: '/host/dashboard',
          })
        toast.success(response?.data?.message)
        setLoading(false)
      })
      .catch(function (error) {
        toast.error(error?.response?.data?.message)
        setLoading(false)
        console.log(error)
      })
  }
  return (
    <>
      <Navbar />
      {/* hero */}
      <div className=' mt-8 mb-16 xl:my-10 max-w-md sm:max-w-md mx-auto font-sans md:max-w-4xl lg:max-w-5xl xl:max-w-7xl  px-4 md:px-6  lg:px-8 overflow-x-hidden'>
        {/* container */}
        <div className=' space-y-14 sm:space-y-16 md:flex justify-between items-center md:gap-4 '>
          {/* text */}
          <div className=' space-y-4 md:w-1/2 lg:space-y-6 xl:space-y-8'>
            <h1 className='font-black  font-mono text-center md:text-left text-3xl  max-w-sm mx-auto sm:text-4xl sm:max-w-full md:mx-0 text-babyblack leading-10 md:text-4xl md:w-full sm:leading-[2.8rem] md:leading-[3rem] lg:text-5xl lg:leading-[4rem] xl:text-6xl xl:max-w-full xl:leading-[5rem]'>
              Ready to embark on an exciting journey to success?
            </h1>
            <p className='text-center text-sm md:text-left max-w-xs mx-auto md:mx-0 text-babyblack leading-5 font-medium sm:text-sm sm:max-w-full md:text-base lg:max-w-md lg:text-lg xl:max-w-lg xl:text-xl'>
              We've got an incredible opportunity for you to partner with us!
              Expand your horizons and boost your revenue when you register your
              cars on our platform. Our trusted brand and exceptional service
              will open doors to new possibilities and drive your business to
              new heights.
            </p>
            <div className='flex gap-4 justify-center md:justify-start items-center'>
              <button
                onClick={() => handleswitch()}
                className=' tracking-wide transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-1000 mx-auto md:mx-0 flex px-4 md:px-5 lg:px-6 py-3 lg:py-3 text-white bg-babypurple   rounded-md shadow-md cursor-pointer text-xs sm:text-sm font-bold md:text-sm lg:text-base  md-w1/3'
              >
                {loading && <h1 className='spinner mr-2 my-2'></h1>}
                Get Started
              </button>
            </div>
          </div>
          {/* photo */}
          <div className='  relative md:w-1/2'>
            <Image
              src={'/images/phone.png'}
              alt='logo'
              width={1000}
              height={1000}
              priority
              className='max-w-xs sm:max-w-sm xl:max-w-lg mx-auto  '
            />
          </div>
        </div>
      </div>
      {/* why partner with us */}
      <section className='section-center'>
        {/* header */}
        <div className='flex justify-center items-center mx-auto'>
          <div className='  space-y-2 md:space-y-3 xl:space-y-4'>
            <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl py-4 text-center  text-babyblack   '>
              Why Partner{' '}
              <span className="bg-[url('/images/started.png')] bg-no-repeat bg-bottom  py-4   ">
                with Us
              </span>{' '}
            </h1>
            <p className='text-sm text-center sm:text-base max-w-xs sm:max-w-full md:text-lg md:max-w-md text-babyblack lg:text-xl lg:max-w-lg xl:text-2xl xl:max-w-full'>
              Here’s what you stand to gain by joining forces with us
            </p>
          </div>
        </div>
        {/* info */}
        <div className=' section-center mt-20 lg:mt-32 space-y-10 md:space-y-12 lg:space-y-16 xl:space-y-20  flex flex-col items-center justify-center mx-auto  overflow-x-hidden'>
          {/* component */}
          <div className=' flex flex-col justify-center   items-center max-w-sm'>
            {info.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`${
                    index % 2 === 1
                      ? 'flex gap-8 xl:gap-16  md:hover:bg-softpurple md:hover:px-6 md:hover:py-4 md:hover:cursor-pointer md:duration-1000'
                      : 'flex  gap-8 xl:gap-16 md:hover:bg-softpurple md:hover:px-6 md:hover:py-4 md:hover:cursor-pointer md:duration-1000 '
                  }`}
                >
                  {/* dummy */}
                  <div className='hidden md:flex md:w-60 lg:w-96  xl:w-[30rem]'>
                    {/* Header */}
                    <h1 className='text-sm sm:text-base md:text-lg font-bold lg:text-2xl xl:text-3xl'>
                      {item.title}
                    </h1>
                  </div>
                  {/* circle */}
                  <div className='w-max  relative   md:flex md:justify-center md:items-start '>
                    <div className='bg-gradient-to-r from-babypurple to-softRed w-8 h-8 sm:w-10 sm:h-10 rounded-full relative  '>
                      {/* circle */}
                      <div className='bg-white w-4 h-4 sm:w-5 sm:h-5 rounded-full absolute top-1/2 bottom-1/2  -translate-x-1/2 -translate-y-1/2 left-1/2 right-1/2 flex justify-center items-center '>
                        <h1 className='text-xs'>{item.id}</h1>
                      </div>
                    </div>
                    {/* line */}
                    {index === info.length - 1 ? null : (
                      <div className='absolute  w-1 h-full top-0 bottom-0 -translate-x-1/2   left-1/2 bg-gradient-to-r from-babypurple to-softRed -z-10 '></div>
                    )}
                  </div>
                  {/* text */}
                  <div
                    className={`${
                      index % 2 === 1
                        ? 'flex items-start  md:flex-row-reverse  gap-3 lg:gap-6 pb-8 md:pb-12 xl:pb-20 md:w-60 lg:w-96  '
                        : 'flex items-start  gap-3 pb-8 md:pb-12  md:w-60 lg:gap-6  xl:pb-20 lg:w-96 '
                    }`}
                  >
                    {/* icon */}
                    {/* <div className='bg-babygreen text-babyblue w-max rounded-md p-2   md:p-3  xl:p-4 text-xs sm:text-base md:text-lg lg:text-xl xl:text-3xl'>
                    {item.icon}
                  </div> */}
                    {/* text */}
                    <div
                      className={`${
                        index % 2 === 1
                          ? 'space-y-3 md:space-y-0 '
                          : 'space-y-3 md:space-y-0'
                      }`}
                    >
                      {/* Header */}
                      <h1 className='text-sm sm:text-base md:text-lg font-bold xl:text-xl md:hidden'>
                        {item.title}
                      </h1>
                      {/* desc */}
                      <p className='text-xs sm:text-sm  xl:text-base'>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      {/* how to get started */}
      <section className='section-center space-y-10 md:space-y-16'>
        <div
          data-aos='zoom-in-down'
          data-aos-duration='2000'
          data-aos-delay='100'
          className=' section-center my-20 space-y-10 md:flex md:justify-between md:items-center md:space-y-0 md:gap-6 overflow-x-hidden'
        >
          {/* image */}
          <div className='  relative md:w-1/2'>
            <Image
              src={'/images/howto.png'}
              alt='logo'
              width={1000}
              height={1000}
              className='w-60  sm:w-80 lg:w-full max-w-xs sm:max-w-sm xl:max-w-sm mx-auto '
            />
          </div>
          {/* text */}
          <div className='font-sans flex flex-col justify-center items-center mx-auto md:mx-0 md:items-start space-y-4 md:w-1/2 '>
            {/* headline */}
            <h1 className='text-babyblack font-extrabold relative w-max sm:text-2xl md:text-xl lg:text-2xl  xl:text-3xl'>
              How to{' '}
              <span className="bg-[url('/images/started.png')] bg-no-repeat bg-bottom  py-4   ">
                Get Started
              </span>{' '}
              <span>
                <div className='bg-babyorange w-full h-4  absolute -bottom-1  left-0 -z-20'></div>
              </span>
            </h1>
            {/* top */}
            <h2 className='text-center text-babyblack  font-bold sm:text-xl  md:text-left xl:text-3xl md:max-w-xs xl:max-w-md font-mono'>
              Become a host and start your car sharing business
            </h2>
            {/* paragraph */}
            <p className='text-babyblack text-xs text-center leading-6 sm:text-sm sm:leading-7 md:text-left md:leading-6 xl:text-base xl:max-w-md'>
              We've gone the extra mile to document these following onboarding
              steps to ensure you have a smooth experience while registering
              your vehicle on our platform
            </p>
            {/* details */}
            <div className='md:max-w-xs xl:max-w-sm space-y-4'>
              {/* one */}
              <div className='bg-white shadow-md  flex gap-4 items-start px-4 py-5 md:hover:translate-x-6 hover:shadow-xl duration-1000'>
                {/* icon */}
                <div className='p-2 bg-softpurple w-max rounded-sm '>
                  <BiUserPlus className='text-babypurple' />
                </div>
                {/* text */}
                <div className='space-y-1'>
                  <h1 className=' text-sm font-bold'>
                    Signup on our platform{' '}
                  </h1>
                  <p className='text-xs'>
                    Sign up on the GLORIDE website or on our mobile
                    application.The GLORIDE mobile application is available on
                    your favourite mobile application stores
                  </p>
                </div>
              </div>
              {/* two */}
              <div className='bg-white shadow-md shadow-babygreen flex gap-4 items-start px-4 py-5 md:hover:translate-x-6 hover:shadow-xl duration-1000 '>
                {/* icon */}
                <div className='p-2 bg-softpurple w-max rounded-sm '>
                  <RiEditFill className='text-babypurple' />
                </div>
                {/* text */}
                <div className='space-y-1'>
                  <h1 className=' text-sm font-bold'>Enlist your vehicle </h1>
                  <p className='text-xs'>
                    Switch to the hosting service on our platform,enlist your
                    fleet of vehicles whilist setting their prices and rules
                    their rules of engagement as your deem fit
                  </p>
                </div>
              </div>
              {/* three */}
              <div className='bg-white shadow-md  flex gap-4 items-start px-4 py-5 md:hover:translate-x-6 hover:shadow-xl duration-1000'>
                {/* icon */}
                <div className='p-2 bg-softpurple w-max rounded-sm '>
                  <BsFillBriefcaseFill className='text-babypurple' />
                </div>
                {/* text */}
                <div className='space-y-1'>
                  <h1 className=' text-sm font-bold'>Sit back and Earn </h1>
                  <p className='text-xs'>
                    We will handle the rest by promoting your vehicles to our
                    numerous customers who are constantly in demand for vehicles
                    , while you get paid directly to your account{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* partner with us */}
      <section className='section-center space-y-10 md:space-y-16'>
        {/* header */}
        <div className='flex justify-center items-center mx-auto'>
          <div className='  space-y-2 md:space-y-3 xl:space-y-4'>
            <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl py-4 text-center  text-babyblack   '>
              Partner with Us{' '}
              <span className="bg-[url('/images/started.png')] bg-no-repeat bg-bottom  py-4   ">
                Today
              </span>{' '}
            </h1>
            <p className='text-sm text-center sm:text-base max-w-sm sm:max-w-sm md:text-lg md:max-w-md text-babyblack lg:text-xl lg:max-w-lg xl:text-2xl xl:max-w-xl'>
              Start generating passive income on the go
            </p>
          </div>
        </div>
        <div className='md:flex  space-y-6 md:space-y-0  md:justify-between md:gap-6 lg:gap-12'>
          {/* image */}
          <div className='  relative md:w-1/2'>
            <Image
              src={'/images/partner.png'}
              alt='picture'
              width={1000}
              height={1000}
              className='w-full   object-cover '
            />
          </div>
          {/* blue back */}
          <div
            className=' w-full flex flex-col justify-center items-center space-y-6 md:w-1/2 md:items-start
        '
          >
            {/* text */}
            {/* top */}
            <h2 className='text-center text-babyblack  font-bold text-2xl  md:text-left lg:text-3xl  xl:text-4xl md:max-w-xs xl:max-w-md '>
              Ready to forge a partnership with us?
            </h2>
            {/* paragraph */}
            <p className='text-babyblack  text-sm text-center max-w-xs sm:text-base sm:max-w-sm   md:text-left xl:text-lg xl:max-w-md'>
              Then we welocme you join forces with us today, Whether you are
              registering your car amongst our fleet or you want to come onboard
              as one of the directors , there's enough milk to go round. Get in
              touch with us now
            </p>

            <button
              onClick={() => handleswitch()}
              className='mx-auto md:mx-0 flex px-6 md:px-5 lg:px-6 py-3 lg:py-3 text-white bg-babypurple   rounded-md shadow-md cursor-pointer text-xs sm:text-sm font-bold md:text-sm lg:text-base tracking-wide transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 '
            >
              {loading && <h1 className='spinner mr-2 my-2'></h1>}
              Get Started
            </button>
          </div>
        </div>
      </section>
      {/* footer */}
      <Footer />
    </>
  )
}

export default partnerwithus
