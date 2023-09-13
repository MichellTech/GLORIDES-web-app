import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
// import { Link } from 'react-scroll'

import Link from 'next/link'
function Navbar() {
  const [pannel, setPannel] = useState(false)
  const [menubutton, setMenubutton] = useState(false)
  const [bg, setBg] = useState(true)
  const router = useRouter()
  useEffect(() => {
    if (router.pathname === '/' || router.pathname === '/contactus') {
      setBg(true)
    } else {
      setBg(false)
    }
  }, [router.pathname])
  return (
    <nav className=' relative mx-auto font-sans px-1 md:px-4 lg:px-10 py-2 md:py-2 '>
      {/* <!-- Flex Container For Nav Items --> */}
      <div className='flex items-center justify-between px-4 sm:px-6 md:px-0 my-6 '>
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
                    className='object-cover w-20 sm:w-full  '
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
                    className='object-cover w-20 sm:w-full  '
                  />
                </div>
                {/* <p className='font-black text-xl md:text-2xl lg:text-3xl text-babyblue'>
                  Glorides
                </p> */}
              </div>
            </Link>
          )}
        </div>
        {/* <!-- Menu Items --> */}
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
            <Link href='/allcars'>All Cars</Link>
          </ul>
          <ul className='text-xs md:text-sm xl:text-base cursor-pointer'>
            <Link href='/partnerwithus'>Partner with Us</Link>
          </ul>
          <ul className='text-xs md:text-sm cursor-pointer xl:text-base '>
            <Link href='/contactus'>Contact Us</Link>
          </ul>
        </div>
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

        {/* <!-- Hamburger Button --> */}
        {pannel ? (
          <button
            id='menu-btn'
            className='z-30 open block md:hidden focus:outline-none hamburger'
            onClick={() => setPannel(!pannel)}
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
              <Link href='/allcars'>All Cars</Link>
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
        </div>
      ) : (
        ''
      )}
    </nav>
  )
}

export default Navbar
