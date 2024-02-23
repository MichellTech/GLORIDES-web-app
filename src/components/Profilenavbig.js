import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FiUserPlus, FiUser } from 'react-icons/fi'
import { BiLockOpenAlt } from 'react-icons/bi'
import { GrDocumentText } from 'react-icons/gr'
import {
  MdOutlinePayments,
  MdPassword,
  MdManageAccounts,
  MdDeleteForever,
  MdOutlineDelete,
} from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux'
function Profilecompbig() {
  const router = useRouter()
  const { hosting } = useSelector((store) => store.userpersona)
  return (
    <div className='bg-white py-6 '>
      <div className='flex flex-col space-y-2 text-sm  '>
        <Link
          href='/userprofile/view'
          className={`${
            router.pathname?.toLowerCase() === '/userprofile/view' ||
            router.pathname?.toLowerCase() === '/userprofile/edit' ||
            router.pathname?.toLowerCase() === '/userprofile/documents'
              ? 'bg-softpurple border-r-4  border-babypurple py-3  text-babyblack px-4'
              : '  rounded-sm  py-3 px-4  '
          }`}
        >
          <div className='flex items-center gap-4 '>
            <FiUser className='text-xl' />
            <h1 className='text-sm  xl:text-base'>My Profile</h1>
          </div>
        </Link>

        <Link
          href='/userprofile/payment'
          className={`${
            router.pathname?.toLowerCase() === '/userprofile/payment'
              ? 'bg-softpurple border-r-4  border-babypurple py-3  text-babyblack px-4'
              : '  rounded-sm  py-3 px-4 '
          }`}
        >
          <div className='flex items-center gap-4 '>
            <MdOutlinePayments className='text-xl' />
            <h1 className='text-sm  xl:text-base '>Payment Cards</h1>
          </div>
        </Link>
        <Link
          href='/userprofile/password'
          className={`${
            router.pathname?.toLowerCase() === '/userprofile/password'
              ? 'bg-softpurple border-r-4  border-babypurple py-3  text-babyblack px-4'
              : '  rounded-sm  py-3 px-4 '
          }`}
        >
          <div className='flex items-center gap-4 '>
            <BiLockOpenAlt className='text-xl' />
            <h1 className='text-sm  xl:text-base'>Passwords</h1>
          </div>
        </Link>
        {hosting && (
          <Link
            href='/userprofile/pin'
            className={`${
              router.pathname?.toLowerCase() === '/userprofile/pin'
                ? 'bg-softpurple border-r-4  border-babypurple py-3  text-babyblack px-4'
                : '  rounded-sm  py-3 px-4 '
            }`}
          >
            <div className='flex items-center gap-4 '>
              <MdPassword className='text-xl' />
              <h1 className='text-sm  xl:text-base'>Pin</h1>
            </div>
          </Link>
        )}
        {hosting && (
          <Link
            href='/userprofile/accounts'
            className={`${
              router.pathname?.toLowerCase() === '/userprofile/accounts'
                ? 'bg-softpurple border-r-4  border-babypurple py-3  text-babyblack px-4'
                : '  rounded-sm  py-3 px-4  '
            }`}
          >
            <div className='flex items-center gap-4 '>
              <MdManageAccounts className='text-xl' />
              <h1 className='text-sm  xl:text-base'>Accounts</h1>
            </div>
          </Link>
        )}
        <Link
          href='/userprofile/delete'
          className={`${
            router.pathname?.toLowerCase() === '/userprofile/delete'
              ? 'bg-softpurple border-r-4  border-babypurple py-3  text-babyblack px-4'
              : '  rounded-sm  py-3 px-4 '
          }`}
        >
          <div className='flex items-center gap-4 '>
            <MdOutlineDelete className='text-xl' />
            <h1 className='text-sm  xl:text-base'>Delete Account</h1>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Profilecompbig
