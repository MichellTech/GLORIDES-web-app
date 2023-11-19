import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
function Profilecomp() {
  const router = useRouter()
  const { hosting } = useSelector((store) => store.userpersona)
  return (
    <>
      {/* small screen */}
      <div className='relative example  overflow-y-auto w-max sm:w-full px-6 '>
        <div className='flex space-x-10 text-sm '>
          <Link
            href='/Userprofile/view'
            className={`${
              router.pathname === '/Userprofile/view'
                ? 'border-b-4  rounded-sm border-babypurple pb-3 font-bold text-babypurple '
                : '  rounded-sm  pb-3 '
            }`}
          >
            My Profile
          </Link>
          {/* <Link
            href='/Userprofile/edit'
            className={`${
              router.pathname === '/Userprofile/edit'
                ? 'border-b-4  rounded-sm border-babypurple pb-3 font-bold  text-babypurple '
                : '  rounded-sm  pb-3 '
            }`}
          >
            Edit Profile
          </Link>
          <Link
            href='/Userprofile/documents'
            className={`${
              router.pathname === '/Userprofile/documents'
                ? 'border-b-4  rounded-sm border-babypurple pb-3 font-bold  text-babypurple '
                : '  rounded-sm  pb-3 '
            }`}
          >
            Documents
          </Link> */}
          <Link
            href='/Userprofile/payment'
            className={`${
              router.pathname === '/Userprofile/payment'
                ? 'border-b-4 font-bold   rounded-sm border-babypurple pb-3 text-babypurple '
                : '  rounded-sm  pb-3 '
            }`}
          >
            Payment Cards
          </Link>
          <Link
            href='/Userprofile/password'
            className={`${
              router.pathname === '/Userprofile/password'
                ? 'border-b-4 font-bold   rounded-sm border-babypurple pb-3 text-babypurple '
                : '  rounded-sm  pb-3 '
            }`}
          >
            Password
          </Link>
          {hosting && (
            <Link
              href='/Userprofile/pin'
              className={`${
                router.pathname === '/Userprofile/pin'
                  ? 'border-b-4  font-bold  rounded-sm border-babypurple pb-3 text-babypurple '
                  : '  rounded-sm  pb-3 '
              }`}
            >
              Pin
            </Link>
          )}
          {hosting && (
            <Link
              href='/Userprofile/accounts'
              className={`${
                router.pathname === '/Userprofile/accounts'
                  ? 'border-b-4 font-bold  rounded-sm border-babypurple pb-3 text-babypurple '
                  : '  rounded-sm  pb-3 '
              }`}
            >
              Accounts
            </Link>
          )}
        </div>
        <div className='absolute left-0 w-full right-0 bottom-0 border-b  '></div>
      </div>
    </>
  )
}

export default Profilecomp
