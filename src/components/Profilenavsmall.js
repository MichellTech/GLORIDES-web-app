import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
function Profilecomp() {
  const router = useRouter()
  const { hosting } = useSelector((store) => store.userpersona)
  console.log(router?.pathname)
  return (
    <>
      {/* small screen */}
      <div className='relative example  overflow-y-auto w-max sm:w-full px-6 '>
        <div className='flex space-x-10 text-sm '>
          <Link
            href='/userprofile/view'
            className={`${
              router.pathname?.toLowerCase() === '/userprofile/view' ||
              router.pathname?.toLowerCase() === '/userprofile/edit' ||
              router.pathname?.toLowerCase() === '/userprofile/documents'
                ? 'border-b-4  rounded-sm border-babypurple  pb-3 font-bold text-babypurple '
                : '  rounded-sm  pb-3 '
            }`}
          >
            My Profile
          </Link>

          <Link
            href='/userprofile/payment'
            className={`${
              router.pathname?.toLowerCase() === '/userprofile/payment'
                ? 'border-b-4 font-bold   rounded-sm border-babypurple pb-3 text-babypurple '
                : '  rounded-sm  pb-3 '
            }`}
          >
            Payment Cards
          </Link>
          <Link
            href='/userprofile/password'
            className={`${
              router.pathname?.toLowerCase() === '/userprofile/password'
                ? 'border-b-4 font-bold   rounded-sm border-babypurple pb-3 text-babypurple '
                : '  rounded-sm  pb-3 '
            }`}
          >
            Password
          </Link>
          {hosting && (
            <Link
              href='/userprofile/pin'
              className={`${
                router.pathname?.toLowerCase() === '/userprofile/pin'
                  ? 'border-b-4  font-bold  rounded-sm border-babypurple pb-3 text-babypurple '
                  : '  rounded-sm  pb-3 '
              }`}
            >
              Pin
            </Link>
          )}
          {hosting && (
            <Link
              href='/userprofile/accounts'
              className={`${
                router.pathname?.toLowerCase() === '/userprofile/accounts'
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
