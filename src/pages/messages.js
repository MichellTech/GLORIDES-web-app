import React, { useState, useEffect } from 'react'
import Userdata from '../utilis/Carfeedback'
import Image from 'next/image'
import { SlOptionsVertical } from 'react-icons/sl'
import { RiSendPlaneFill } from 'react-icons/ri'
import { MdArrowBackIos } from 'react-icons/md'
import Navbar from '@/components/Navigation/Navbar/usernav'
import mainAxiosAction from '../components/axiosAction/index'
import moment from 'moment'
import { useRouter } from 'next/router'
import MessagePanel from '@/components/MessagePanel'
function messages() {
  const [openchat, setOpenchat] = useState(false)
  const [message, setMessage] = useState('Chat will be displayed here')
  const [selectedChatId, setSelectedChatId] = useState(null)
  const [allChats, setAllChats] = useState([])
  const router = useRouter()
  const { ownerid } = router.query
  const handlechat = (id) => {
    setOpenchat(true)
  }

  const profile =
    localStorage?.getItem('User_Profile') === null ||
    localStorage?.getItem('User_Profile') === 'undefined' ||
    localStorage?.getItem('User_Profile') === undefined
      ? []
      : JSON?.parse(localStorage?.getItem('User_Profile'))

  const getallchat = () => {
    mainAxiosAction
      .post(`/chat/getAllChats`, {})
      .then(function (response) {
        setAllChats(response?.data?.chats)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  const createchat = (other_user_id) => {
    mainAxiosAction
      .post(`/chat/getChat`, {
        other_user: other_user_id,
      })
      .then(function (response) {
        const ownerChatId = response?.data?.chat?._id
        setSelectedChatId(ownerChatId)
        getallchat()
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  useEffect(() => {
    getallchat()
  }, [])
  useEffect(() => {
    if (ownerid) {
      createchat(ownerid)
    }
  }, [ownerid])
  return (
    <>
      <Navbar />
      <section className=' '>
        <div className='md:flex md:items-start relative '>
          {/*chat history display */}
          <div
            className={`${
              openchat
                ? 'md:max-w-[17rem] lg:max-w-sm hidden md:block w-full md:border-r md:border-babygrey border-t '
                : 'md:max-w-[17rem] lg:max-w-sm  w-full md:border-r md:border-babygrey border-t '
            }`}
          >
            {/* header */}
            <div className='bg-babygrey w-full px-6 py-4'>
              <h1 className='text-base font-mono  tracking-wide lg:text-lg text-babyblack font-bold'>
                All Chats
              </h1>
            </div>
            <div className=' divide-y     h-[90vh] overflow-y-auto '>
              {allChats?.map((i, index) => {
                const secondUser = i?.members?.filter(
                  (a) => a?._id !== profile?._id
                )?.[0]
                return (
                  <div key={index}>
                    <div
                      onClick={() => {
                        setSelectedChatId(i?._id), setOpenchat(true)
                      }}
                      className={`flex ${
                        i?._id === selectedChatId
                          ? 'bg-babygrey   bg-opacity-30 '
                          : 'hover:bg-babygrey   hover:bg-opacity-30'
                      } justify-between items-center gap-1 cursor-pointer px-6 py-3`}
                    >
                      {/* image and name and last message */}
                      <div className=' flex items-center gap-3'>
                        {secondUser?.profile_picture?.url ? (
                          <Image
                            src={secondUser?.profile_picture?.url}
                            alt={'user'}
                            width={1000}
                            height={1000}
                            className='object-cover w-12 h-12 lg:w-14  lg:h-14 rounded-full '
                          />
                        ) : (
                          <Image
                            src={'/images/avatar.png'}
                            alt='logo'
                            width={1000}
                            height={1000}
                            className='object-cover w-12 h-12 lg:w-14  lg:h-14 rounded-full '
                          />
                        )}
                        {/* name and last message */}
                        <div className='space-y-1'>
                          <h1 className='text-sm font-bold'>
                            {secondUser?.firstname}
                          </h1>
                          {/* <h1 className='text-xs'>{i?.location}</h1> */}
                        </div>
                      </div>
                      {/* time stamp */}
                      {/* <h1 className='text-xs'>{i?.time}</h1> */}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          {/* chats */}
          <MessagePanel
            openchat={openchat}
            setOpenchat={setOpenchat}
            setSelectedChatId={setSelectedChatId}
            selectedChatID={selectedChatId}
            allChats={allChats}
          />
        </div>
      </section>
    </>
  )
}

export default messages
