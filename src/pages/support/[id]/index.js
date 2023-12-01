import React, { useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import Ticketdata from '../../../utilis/tickets'
import Navbar from '@/components/Navigation/Navbar/index'
import Footer from '@/components/Navigation/Footer'
import { RiFileEditFill } from 'react-icons/ri'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import { FiUser } from 'react-icons/fi'
import { BiArrowBack } from 'react-icons/bi'
import mainAxiosAction from '@/components/axiosAction'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import moment from 'moment'
import Supportform from '../../../components/Supportform'
function Viewticket() {
  const [isReplying, setIsReplying] = useState(false)
  const router = useRouter()
  const ticketId = router.query.id
  const singleticket = useMemo(
    () =>
      mainAxiosAction
        .post(`/ticket/get-ticket-conversation`, { ticket_id: ticketId })
        .then(function (response) {
          console.log(response?.data)
        })
        .catch(function (error) {
          toast.error(error?.response?.data?.message)
          console.log(error)
        })[ticketId]
  )

  console.log(singleticket)
  return (
    <>
      <Navbar />
      {/* bodey */}
      <section className='bg-[#F5F5F5]'>
        {/* file */}
        <div className='pt-10 lg:pt-14 xl:pt-16 max-w-lg mx-auto font-sans sm:max-w-xl md:max-w-4xl  lg:max-w-5xl xl:max-w-7xl  px-6 md:px-6  lg:px-8 s '>
          <div
            onClick={() => {
              router.push({
                pathname: `/support`,
              })
            }}
            className='flex pb-10 lg:pb-14 items-center gap-3 cursor-pointer w-max'
          >
            <BiArrowBack className='text-xl lg:text-2xl' />
            <h1 className='text-sm lg:text-base'>View All Tickets</h1>
          </div>

          <div className='space-y-10 md:space-y-0 md:flex md:justify-between md:items-start md:gap-6 w-full md:flex-row-reverse'>
            {/* reply and data */}
            <div className='md:w-3/4 space-y-6'>
              {/* check for staust */}
              {singleticket?.status === 'closed' && (
                <div className='bg-softpurple border border-babypurple px-4 py-3 rounded-md sm:text-center'>
                  <h1 className='text-xs lg:text-sm text-babypurple'>
                    This ticket is closed. You may reply to this ticket to
                    reopen it.
                  </h1>
                </div>
              )}
              {/* reply and form */}
              <div className='bg-white shadow-lg py-3 rounded-md space-y-4 md:py-4 '>
                {/* reply */}
                <div
                  onClick={() => setIsReplying(!isReplying)}
                  className='  cursor-pointer'
                >
                  <div className='flex justify-between items-center gap-2   px-6'>
                    <div className='flex justify-center items-center gap-2 md:gap-3  lg:gap-4 text-babyblack'>
                      <RiFileEditFill className='text-lg' />
                      <h1 className=' lg:text-lg'>Reply</h1>
                    </div>
                    {isReplying ? (
                      <AiFillCaretUp className='lg:text-lg' />
                    ) : (
                      <AiFillCaretDown className='lg:text-lg' />
                    )}
                  </div>
                </div>

                {/* fom */}
                {isReplying && (
                  <div className=' border-t '>
                    <div className='px-4'>
                      <Supportform />
                    </div>
                  </div>
                )}
              </div>
              {/* reply from operator */}
              <div className='bg-white shadow-lg py-3 rounded-md space-y-4 md:py-4 border-l-4  lg:border-l-[6px] border-babypurple w-full'>
                {/* title */}
                <div className='flex justify-between items-center gap-2 px-6'>
                  <div className='flex items-center gap-2 sm:gap-3 justify-center '>
                    <FiUser className=' lg:text-xl' />
                    <h1 className='text-sm lg:text-base'>Miriam</h1>
                    <h1 className='px-4 py-2 text-xs rounded-md border-babygrey bg-softpurple lg:text-sm lg:px-6'>
                      Operator
                    </h1>
                  </div>
                  <h1 className='text-xs lg:text-sm'>
                    {singleticket?.lastupdated}
                  </h1>
                </div>
                {/* text */}
                <div className='border-t'>
                  <div className='px-6 py-4'>
                    <h1 className='text-xs lg:text-sm'>
                      {singleticket?.response}
                    </h1>
                  </div>
                </div>
              </div>
              {/* message */}
              <div className='bg-white shadow-lg py-3 rounded-md space-y-4 md:py-4'>
                {/* title */}
                <div className='flex justify-between items-center gap-2 px-6'>
                  <div className='flex items-center gap-3'>
                    <FiUser className=' lg:text-xl' />
                    <h1 className='text-sm lg:text-base'>Okwu Chiedozie</h1>
                  </div>
                  <h1 className='text-xs lg:text-sm'>
                    {singleticket?.lastupdated}
                  </h1>
                </div>
                {/* text */}
                <div className='border-t'>
                  <div className='px-6 py-4'>
                    <h1 className='text-xs lg:text-sm'>
                      {singleticket?.message}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            {/* ticket information */}
            <div className='space-y-4 md:space-y-0 md:w-1/4'>
              <h1 className='md:hidden'>Ticket Information</h1>
              {/* datat */}
              <div className='bg-white shadow-lg rounded-md divide-y divide-gray-200 py-5 '>
                {/* requestor */}
                <div className='space-y-2 pb-4 px-6 md:px-4 lg:px-6 '>
                  <h1 className='text-xs lg:text-sm text-gray-500'>
                    Requestor
                  </h1>
                  <h1 className='text-sm lg:text-base'>Okwu Chiedozie</h1>
                </div>
                {/* issue */}
                <div className='space-y-2 py-4 px-6 md:px-4 lg:px-6   '>
                  <h1 className='text-xs  lg:text-sm  text-gray-500'>Issue</h1>
                  <h1 className='text-sm lg:text-base'>
                    {singleticket?.title}
                  </h1>
                </div>
                {/* Date submitted */}
                <div className='space-y-2 py-4 px-6 md:px-4 lg:px-6  '>
                  <h1 className=' text-xs   lg:text-sm  text-gray-500'>
                    Date Submitted
                  </h1>
                  <h1 className='text-sm lg:text-base '>10/2/2023 (10:30)</h1>
                </div>
                {/* last date of update */}
                <div className='space-y-2 py-4 px-6  md:px-4 lg:px-6 '>
                  <h1 className='text-xs  lg:text-sm  text-gray-500'>
                    Last Updated
                  </h1>
                  <h1 className='text-sm lg:text-base'>
                    {singleticket?.lastupdated}
                  </h1>
                </div>
                {/* status*/}
                <div className='space-y-2 py-4 px-6  md:px-4 lg:px-6 '>
                  <h1 className='text-xs  lg:text-sm   text-gray-500'>
                    Status
                  </h1>
                  <h1
                    className={`${
                      singleticket?.status === 'open'
                        ? 'text-sm lg:text-base text-babypurple '
                        : 'text-sm lg:text-base text-green-500'
                    }`}
                  >
                    {singleticket?.status}
                  </h1>
                </div>
                {/* priopriy */}
                <div className='space-y-2 py-4 px-6  md:px-4 lg:px-6 '>
                  <h1 className='text-xs  lg:text-sm  text-gray-500'>
                    Priority
                  </h1>
                  <h1 className='text-sm lg:text-base '>
                    {singleticket?.priority}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  )
}

export default Viewticket
