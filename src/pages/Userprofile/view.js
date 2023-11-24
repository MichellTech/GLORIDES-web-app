import React, { useState, useEffect } from 'react'
import Navbar from '@/components/Navigation/Navbar'
import Profilecomp from '@/components/Profilecomp'
import Image from 'next/image'
import axios from 'axios'
import Profilecompbig from '@/components/Profilecompbig'
import Loadercomp from '@/components/Loadercomp'
import moment from 'moment'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { setUserprofiledetails } from '@/features/profile/userprofileSlice'
import Loader from '../../components/Loaders/profileloader'

function view() {
  const [loading, setLoading] = useState(false)
  const { userprofile } = useSelector((store) => store.profile)
  const dispatch = useDispatch()
  const getuserprofile = () => {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/user/get-user`,
        {},
        {
          headers: {
            'x-glorious-access': JSON.parse(localStorage.getItem('User_Token')),
          },
        }
      )
      .then(function (response) {
        console.log(response.data)
        setLoading(false)
        dispatch(setUserprofiledetails(response?.data?.user))
      })
      .catch(function (error) {
        setLoading(false)
        console.log(error)
      })
  }

  useEffect(() => {
    getuserprofile()
  }, [])

  return (
    <>
      {/* small nav */}
      <div className='sticky  md:fixed top-0 left-0 right-0 bg-white z-50  '>
        <Navbar />
        <div className='example md:hidden  overflow-y-auto w-full '>
          <Profilecomp />
        </div>
      </div>

      {/* body */}

      <div className='bg-[#F5F5F5] md:bg-white bg-opacity-50 pt-8  md:pt-0 md:px-6  md:flex md:justify-between md:items-start md:gap-4 w-full md:relative  '>
        {/* bg-nave links */}
        <div className='hidden md:block md:w-1/4 fixed top-32  md:pr-10       '>
          <Profilecompbig />
        </div>
        {/* information */}
        {!loading ? (
          <div className='px-6   space-y-10  md:w-3/4  md:absolute md:top-32 md:right-0 pb-20  '>
            <Loader />
          </div>
        ) : (
          <div className='px-6   space-y-10  md:w-3/4  md:absolute md:top-32 md:right-0 pb-20  '>
            {/* welcom picture */}
            <div className='bg-white w-full flex justify-center items-center flex-col border px-6 py-4 sm:px-8 sm:py-6 rounded-md space-y-4 shadow-md md:flex-row md:space-y-0 md:w-full md:gap-4 lg:gap-6'>
              <div className='  relative max-w-xs '>
                <Image
                  src={userprofile?.profile_picture?.url}
                  alt={userprofile?.profile_picture?.name}
                  width={1000}
                  height={1000}
                  className='object-cover w-28 lg:w-32 rounded-full '
                />
              </div>
              <div className='space-y-2 md:space-y-3 lg:space-y-4 md:w-full'>
                <h1 className='font-bold text-base text-center sm:text-lg md:text-base md:text-left lg:text-lg'>
                  {' '}
                  Hello {userprofile?.firstname}{' '}
                </h1>
                <h1 className='text-xs text-center sm:text-sm md:text-left md:text-xs  lg:text-sm'>
                  Welcome to your profile page! Here, you have the power to
                  customize your experience. Edit your profile, enhance your
                  security settings, and manage your payments effortlessly.Make
                  your experience truly yours.
                </h1>
                <div className='flex items-center justify-center md:justify-start gap-4  lg:gap-6 '>
                  <Link
                    href='/userprofile/edit'
                    className='px-6  py-2 border  rounded-md text-xs lg:text-sm tracking-wide transition ease-in-out delay-150   hover:scale-110 border-babyblack hover:bg-indigo-500 duration-300 hover:text-white hover:border-none'
                  >
                    {' '}
                    Edit Profile
                  </Link>
                  <Link
                    href='/userprofile/documents'
                    className='px-6  py-2 border  rounded-md text-xs lg:text-sm tracking-wide transition ease-in-out delay-150   hover:scale-110 border-babyblack hover:bg-indigo-500 duration-300 hover:text-white hover:border-none'
                  >
                    {' '}
                    Edit Documents
                  </Link>
                </div>
              </div>
            </div>
            {/* profile information */}
            <div className='bg-white space-y-4 lg:space-y-6 shadow-md rounded-md border py-4 px-6 '>
              {/* header */}
              <div className='border-b   pb-4 '>
                <h1 className='text-lg font-bold lg:text-xl'>
                  Personal Information
                </h1>
              </div>
              {/* fullname*/}
              <div className='space-y-2  pt-2 border-b pb-3 md:flex md:justify-between md:items-center md:gap-2 md:space-y-0'>
                <h1 className='text-xs text-slate-500  lg:text-sm '>
                  Full Name
                </h1>
                <p className='text-base lg:text-lg '>
                  {userprofile?.firstname} {''} {userprofile?.lastname}
                </p>
              </div>
              {/* email */}
              <div className='space-y-2 border-b pb-3 md:flex md:justify-between md:items-center md:gap-2 md:space-y-0'>
                <h1 className='text-xs text-slate-500 lg:text-sm    '>Email</h1>
                <p className='text-base lg:text-lg'>{userprofile?.email}</p>
              </div>
              {/* phnoe */}
              <div className='space-y-2 border-b pb-3 md:flex md:justify-between md:items-center md:gap-2 md:space-y-0'>
                <h1 className='text-xs text-slate-500  lg:text-sm  '>
                  Phone Number
                </h1>
                <p className='text-base  lg:text-lg'>
                  {userprofile?.phone_number}
                </p>
              </div>
              {/* Dob */}
              <div className='space-y-2 border-b pb-3 md:flex md:justify-between md:items-center md:gap-2 md:space-y-0'>
                <h1 className='text-xs text-slate-500   lg:text-sm '>
                  Date of Birth
                </h1>
                <p className='text-base lg:text-lg '>
                  {' '}
                  {moment(userprofile?.date_of_birth).format('MMMM Do YYYY')}
                </p>
              </div>
              {/* gender */}
              <div className='space-y-2 border-b pb-3 md:flex md:justify-between md:items-center md:gap-2 md:space-y-0'>
                <h1 className='text-xs text-slate-500   lg:text-sm '>Gender</h1>
                <p className='text-base  lg:text-lg'>{userprofile?.gender}</p>
              </div>
            </div>
            {/* ADDress */}
            <div className='bg-white space-y-4 lg:space-y-6 shadow-md rounded-md border py-4 px-6 '>
              {/* header */}
              <div className='border-b   pb-4 '>
                <h1 className='text-lg  font-bold lg:text-xl'>Location</h1>
              </div>
              {/* fullname*/}
              <div className='space-y-2  pt-2 border-b pb-3 md:flex md:justify-between md:items-center md:gap-2 md:space-y-0'>
                <h1 className='text-xs text-slate-500  lg:text-sm  '>
                  Address
                </h1>
                <p className='text-base lg:text-lg'>
                  {userprofile?.full_address}
                </p>
              </div>
              {/* email */}
              <div className='space-y-2 border-b pb-3 md:flex md:justify-between md:items-center md:gap-2 md:space-y-0'>
                <h1 className='text-xs text-slate-500    lg:text-sm '>city</h1>
                <p className='text-base lg:text-lg'>{userprofile?.city}</p>
              </div>
              {/* State*/}
              <div className='space-y-2 border-b pb-3 md:flex md:justify-between md:items-center md:gap-2 md:space-y-0'>
                <h1 className='text-xs text-slate-500   lg:text-sm '>State</h1>
                <p className='text-base  lg:text-lg'>{userprofile?.state}</p>
              </div>
            </div>

            {/* Driving information */}
            <div className='bg-white space-y-4 lg:space-y-6 shadow-md rounded-md border py-4 px-6'>
              {/* header */}
              <div className='border-b   pb-4 '>
                <h1 className='text-lg  font-bold lg:text-xl'>
                  Driving Information
                </h1>
              </div>
              {/* Driving license no*/}

              <div className='space-y-2  pt-2 border-b pb-3 md:flex md:justify-between md:items-center md:gap-2 md:space-y-0'>
                <h1 className='text-xs text-slate-500  lg:text-sm  '>
                  Driver's License Number
                </h1>
                <p className='text-base lg:text-lg'>
                  {userprofile?.license_number}
                </p>
              </div>
              {/* card */}
              <div className='space-y-2  pb-2  md:flex md:justify-between md:items-start md:gap-2 md:space-y-0'>
                <h1 className='text-xs text-slate-500  lg:text-sm '>
                  Driver's Liciense Card
                </h1>
                {/* image */}
                <div className='  relative '>
                  <Image
                    src={userprofile?.license?.url}
                    alt={userprofile?.license?.name}
                    width={1000}
                    height={1000}
                    className='object-cover  w-48 lg:w-60 xl:w-72'
                  />
                </div>
              </div>
            </div>
            {/* Insurance Information */}
            <div className='bg-white space-y-4 lg:space-y-6 shadow-md rounded-md border py-4 px-6'>
              {/* header */}
              <div className='border-b   pb-4 '>
                <h1 className='text-lg  font-bold lg:text-xl'>
                  Insurance Information
                </h1>
              </div>
              {/*  Insurance Information*/}

              <div className='space-y-2  pt-2 border-b pb-3 md:flex md:justify-between md:items-center md:gap-2 md:space-y-0'>
                <h1 className='text-xs text-slate-500  lg:text-sm '>
                  Insurance License Number
                </h1>
                <p className='text-base lg:text-lg'>
                  {userprofile?.insurance_number}
                </p>
              </div>
              {/* card */}
              <div className='space-y-2  pb-2  md:flex md:justify-between md:items-start md:gap-2 md:space-y-0'>
                <h1 className='text-xs text-slate-500  lg:text-sm '>
                  Insurance Liciense Card
                </h1>
                {/* image */}
                <div className='  relative '>
                  <Image
                    src={userprofile?.insurance?.url}
                    alt={userprofile?.insurance?.name}
                    width={1000}
                    height={1000}
                    className='object-cover  w-48 lg:w-60 xl:w-72'
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default view
