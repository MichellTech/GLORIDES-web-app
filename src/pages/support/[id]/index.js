import React, { useEffect, useState } from 'react'
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
import { MdCancel } from 'react-icons/md'
import Iframe from 'react-iframe'
function Viewticket() {
  const [isReplying, setIsReplying] = useState(false)
  const [ticketdata, setTicketdata] = useState(null)
  const [viewing, setViewing] = useState(false)
  const [fileurl, setFileurl] = useState(null)
  const router = useRouter()
  const ticketId = router.query.id
  const { status, priority, lastupdated, reference_code, subject } =
    router.query

  useEffect(() => {
    mainAxiosAction
      .post(`/ticket/get-ticket-conversation`, { ticket_id: ticketId })
      .then(function (response) {
        setTicketdata(response?.data?.conversations)
      })
      .catch(function (error) {
        toast.error(error?.response?.data?.message)
        console.log(error)
      })
  }, [ticketId])

  console.log(ticketdata)
  const handleview = (url) => {
    setViewing(true)
    setFileurl(url)
  }
  return (
    <>
      <Navbar />
      {/* bodey */}
      <section className='bg-[#F5F5F5] w-full h-full'>
        <div className='pt-10 lg:pt-14 xl:pt-16 mx-auto font-sans   px-6 md:px-6  lg:px-8 relative '>
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
              {ticketdata?.status === 'closed' && (
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
                      <Supportform ticketId={ticketId} />
                    </div>
                  </div>
                )}
              </div>
              {/* conversations */}
              <div className='space-y-6'>
                {ticketdata
                  ?.sort((a, b) => {
                    return new Date(b.date_created) - new Date(a.date_created)
                  })
                  .map((i, index) => {
                    return (
                      <div key={index}>
                        {/* message */}
                        <div
                          className={`${
                            i?.created_by?.user_type === 'operator'
                              ? 'bg-white shadow-lg py-3 rounded-md space-y-4 md:py-4 border-l-4  lg:border-l-[6px] border-babypurple'
                              : 'bg-white shadow-lg py-3 rounded-md space-y-4 md:py-4'
                          }`}
                        >
                          {/* title */}
                          <div className='flex justify-between items-center gap-2 px-6'>
                            <div className='flex items-center gap-3'>
                              <FiUser className=' lg:text-xl' />
                              <h1 className='text-sm lg:text-base'>
                                {' '}
                                {i?.created_by?.user?.firstname}
                              </h1>
                              {i?.created_by?.user_type === 'operator' && (
                                <h1 className='px-4 py-2 text-xs rounded-md border-babygrey bg-softpurple lg:text-sm lg:px-6'>
                                  Admin
                                </h1>
                              )}
                            </div>
                            <h1 className='text-xs lg:text-sm'>
                              {moment(i?.date_created).format('Do MMMM YYYY')}
                            </h1>
                          </div>
                          {/* text */}
                          <div className='border-t'>
                            <div className='px-6 py-4'>
                              <h1 className='text-xs lg:text-sm'>
                                {i?.message}
                              </h1>
                            </div>
                          </div>
                          {/* FILES */}
                          <div className=''>
                            <div className='px-6 py-4 space-y-3 lg:space-y-4'>
                              {i?.files?.map((f, index) => (
                                <h1
                                  key={index}
                                  onClick={() => handleview(f?.url)}
                                  className='text-xs lg:text-sm max-w-xs  md:max-w-lg xl:max-w-3xl px-4 bg-softpurple text-babyblack py-2 w-max  shadow-md cursor-pointer '
                                >
                                  {f?.name}
                                </h1>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
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
                  <h1 className='text-sm lg:text-base'>
                    {ticketdata?.[0]?.created_by?.user?.firstname}
                  </h1>
                </div>
                {/* issue */}
                <div className='space-y-2 py-4 px-6 md:px-4 lg:px-6   '>
                  <h1 className='text-xs  lg:text-sm  text-gray-500'>Issue</h1>
                  <h1 className='text-sm lg:text-base'> {subject}</h1>
                </div>
                {/* reference */}
                <div className='space-y-2 py-4 px-6 md:px-4 lg:px-6   '>
                  <h1 className='text-xs  lg:text-sm  text-gray-500'>
                    Reference Code
                  </h1>
                  <h1 className='text-sm lg:text-base'> {reference_code}</h1>
                </div>
                {/* Date submitted */}
                <div className='space-y-2 py-4 px-6 md:px-4 lg:px-6  '>
                  <h1 className=' text-xs   lg:text-sm  text-gray-500'>
                    Date Submitted
                  </h1>
                  <h1 className='text-sm lg:text-base '>
                    {' '}
                    {moment(ticketdata?.[0]?.created_by?.date_created).format(
                      'Do MMMM YYYY'
                    )}
                  </h1>
                </div>
                {/* last date of update */}
                <div className='space-y-2 py-4 px-6  md:px-4 lg:px-6 '>
                  <h1 className='text-xs  lg:text-sm  text-gray-500'>
                    Last Updated
                  </h1>
                  <h1 className='text-sm lg:text-base'>
                    {moment(lastupdated).format('Do MMMM YYYY')}
                  </h1>
                </div>
                {/* status*/}
                <div className='space-y-2 py-4 px-6  md:px-4 lg:px-6 '>
                  <h1 className='text-xs  lg:text-sm   text-gray-500'>
                    status
                  </h1>
                  <h1
                    className={`${
                      status === 'open'
                        ? 'text-sm lg:text-base text-babypurple '
                        : 'text-sm lg:text-base text-green-500'
                    }`}
                  >
                    {status}
                  </h1>
                </div>
                {/* priopriy */}
                <div className='space-y-2 py-4 px-6  md:px-4 lg:px-6 '>
                  <h1 className='text-xs  lg:text-sm  text-gray-500'>
                    Priority
                  </h1>
                  <h1 className='text-sm lg:text-base '>{priority}</h1>
                </div>
              </div>
            </div>
          </div>
          {viewing && (
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50'>
              <div className='flex justify-center items-center mx-auto h-full '>
                <div className='bg-white rounded-md px-6 py-2 md:py-2 shadow-md min-h-[100vh] space-y-4  '>
                  <div className='flex justify-end '>
                    <MdCancel
                      onClick={() => {
                        setViewing(false)
                        setFileurl(null)
                      }}
                      className='text-xl lg:text-4xl cursor-pointer'
                    />
                  </div>

                  <div>
                    <Iframe
                      url={fileurl}
                      width='100%'
                      height='100%'
                      id=''
                      className='h-[100vh] w-[70vw] '
                      display='block'
                      position='relative'
                      allowFullScreen={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {!viewing && <Footer />}
      </section>
    </>
  )
}

export default Viewticket
