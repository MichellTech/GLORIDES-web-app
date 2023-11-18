import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FiUserPlus, FiUser } from 'react-icons/fi'
import { BiLockOpenAlt } from 'react-icons/bi'
import { GrDocumentText } from 'react-icons/gr'
import { MdOutlinePayments, MdPassword, MdManageAccounts } from 'react-icons/md'
function Profilecompbig() {
  const router = useRouter()
  return (
    <div className='bg-white py-6 '>
      <div className='flex flex-col space-y-2 text-sm  '>
        <Link
          href='/Userprofile/view'
          className={`${
            router.pathname === '/Userprofile/view'
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
          href='/Userprofile/edit'
          className={`${
            router.pathname === '/Userprofile/edit'
              ? 'bg-softpurple border-r-4  border-babypurple py-3  text-babyblack px-4'
              : '  rounded-sm  py-3 px-4  '
          }`}
        >
          <div className='flex items-center gap-4 '>
            <FiUserPlus className='text-xl' />
            <h1 className='text-sm  xl:text-base'>Edit Profile</h1>
          </div>
        </Link>

        <Link
          href='/Userprofile/documents'
          className={`${
            router.pathname === '/Userprofile/documents'
              ? 'bg-softpurple border-r-4  border-babypurple py-3  text-babyblack px-4'
              : '  rounded-sm  py-3 px-4  '
          }`}
        >
          <div className='flex items-center gap-4 '>
            <GrDocumentText className='text-xl' />
            <h1 className='text-sm  xl:text-base'>Documents</h1>
          </div>
        </Link>
        <Link
          href='/Userprofile/payment'
          className={`${
            router.pathname === '/Userprofile/payment'
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
          href='/Userprofile/password'
          className={`${
            router.pathname === '/Userprofile/password'
              ? 'bg-softpurple border-r-4  border-babypurple py-3  text-babyblack px-4'
              : '  rounded-sm  py-3 px-4 '
          }`}
        >
          <div className='flex items-center gap-4 '>
            <BiLockOpenAlt className='text-xl' />
            <h1 className='text-sm  xl:text-base'>Passwords</h1>
          </div>
        </Link>
        <Link
          href='/Userprofile/pin'
          className={`${
            router.pathname === '/Userprofile/pin'
              ? 'bg-softpurple border-r-4  border-babypurple py-3  text-babyblack px-4'
              : '  rounded-sm  py-3 px-4 '
          }`}
        >
          <div className='flex items-center gap-4 '>
            <MdPassword className='text-xl' />
            <h1 className='text-sm  xl:text-base'>Pin</h1>
          </div>
        </Link>
        <Link
          href='/Userprofile/accounts'
          className={`${
            router.pathname === '/Userprofile/accounts'
              ? 'bg-softpurple border-r-4  border-babypurple py-3  text-babyblack px-4'
              : '  rounded-sm  py-3 px-4  '
          }`}
        >
          <div className='flex items-center gap-4 '>
            <MdManageAccounts className='text-xl' />
            <h1 className='text-sm  xl:text-base'>Accounts</h1>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Profilecompbig
