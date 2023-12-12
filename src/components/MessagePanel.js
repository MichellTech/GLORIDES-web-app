import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { MdArrowBackIos } from 'react-icons/md'
import { RiChatDeleteFill, RiSendPlaneFill } from 'react-icons/ri'
import { SlOptionsVertical } from 'react-icons/sl'
import mainAxiosAction from './axiosAction'
import ScrollToBottom from 'react-scroll-to-bottom'

export default function MessagePanel({
  openchat,
  setOpenchat,
  selectedChatID,
  allChats,
  setSelectedChatId,
}) {
  const [message, setMessage] = useState('')
  const [allMessages, setAllMessages] = useState([])

  const profile =
    localStorage?.getItem('User_Profile') === null ||
    localStorage?.getItem('User_Profile') === 'undefined' ||
    localStorage?.getItem('User_Profile') === undefined
      ? []
      : JSON?.parse(localStorage?.getItem('User_Profile'))

  const getallMessages = (values) => {
    mainAxiosAction
      .post(`/chat/getAllMessages`, values)
      .then(function (response) {
        setAllMessages(response?.data?.all_messages)
      })
      .catch(function (error) {
        console.log(error)
        setAllMessages([])
      })
  }

  const sendMessage = (values) => {
    mainAxiosAction
      .post(`/chat/sendMessages`, values)
      .then(function (response) {
        setMessage('')
        getallMessages({ chat_id: selectedChatID })
      })
      .catch(function (error) {
        console.log(error)
        setMessage('')
        getallMessages({ chat_id: selectedChatID })
      })
  }

  useEffect(() => {
    getallMessages({ chat_id: selectedChatID })
  }, [selectedChatID])

  function getTimeSince(timeStamp) {
    if (!timeStamp) {
      return ''
    }

    const msPerSecond = 1000
    const msPerMinute = msPerSecond * 60
    const msPerHour = msPerMinute * 60
    const msPerDay = msPerHour * 24
    const msPerMonth = msPerDay * 30
    const msPerYear = msPerDay * 365

    const now = new Date()
    const then = new Date(timeStamp)
    const secondsPast = (now.getTime() - then.getTime()) / msPerSecond

    const getTimeString = (value, unit) => {
      if (value === 1) {
        return value + ' ' + unit + ' ago'
      } else {
        return value + ' ' + unit + 's ago'
      }
    }

    if (secondsPast < 60) {
      return getTimeString(secondsPast.toFixed(0), 'second')
    }
    if (secondsPast < msPerHour / msPerSecond) {
      return getTimeString(Math.floor(secondsPast / 60), 'minute')
    }
    if (secondsPast < msPerDay / msPerSecond) {
      return getTimeString(Math.floor(secondsPast / 3600), 'hour')
    }
    if (secondsPast < msPerMonth / msPerSecond) {
      return getTimeString(Math.floor(secondsPast / 86400), 'day')
    }
    if (secondsPast < msPerYear / msPerSecond) {
      return getTimeString(Math.floor(secondsPast / 2628000), 'month')
    }
    return getTimeString(Math.floor(secondsPast / 31536000), 'year')
  }
  const secondUser = allChats
    ?.filter((i) => i?._id === selectedChatID)?.[0]
    ?.members?.filter((a) => a?._id !== profile?._id)?.[0]

  return (
    <>
      {selectedChatID ? (
        <div
          className={`${
            openchat
              ? 'w-full absolute top-0 left-0 right-0 bottom-0   md:relative'
              : 'hidden md:block md:relative  md:w-full'
          }`}
        >
          {/*header  */}
          <div className='bg-softpurple   px-6 py-3  flex justify-between items-center gap-2'>
            <div className='flex items-center gap-3'>
              <MdArrowBackIos
                onClick={() => {
                  setOpenchat(false), setSelectedChatId(null)
                }}
                className='text-babypurple text-xl cursor-pointer md:hidden'
              />

              <div>
                <div className=''>
                  {/* image and name and last message */}
                  <div className=' flex items-center gap-3'>
                    {secondUser?.profile_picture?.url ? (
                      <Image
                        src={secondUser?.profile_picture?.url}
                        alt={'user'}
                        width={1000}
                        height={1000}
                        className='object-cover w-9 h-9   rounded-full'
                      />
                    ) : (
                      <Image
                        src={'/images/avatar.png'}
                        alt='logo'
                        width={1000}
                        height={1000}
                        className='object-cover w-9 h-9   rounded-full '
                      />
                    )}
                    {/* name and last message */}
                    <div className='space-y-1'>
                      <h1 className='text-xsfont-bold'>
                        {secondUser?.firstname}
                      </h1>
                      {/* <h1 className='text-xs'>{i?.location}</h1> */}
                    </div>
                  </div>
                  {/* time stamp */}
                  {/* <h1 className='text-xs'>{i?.time}</h1> */}
                </div>
              </div>
            </div>
            <SlOptionsVertical className='cursor-pointer' />
          </div>
          {/* displaychat */}
          <ScrollToBottom className='space-y-6 h-[75vh] overflow-y-auto bg-white  py-4'>
            {allMessages?.map((innerMessage, index) => {
              console.log(innerMessage, 'text')
              if (innerMessage?.sender?._id === profile?._id) {
                return (
                  <div
                    key={index}
                    className='flex flex-col  w-full px-2 py-3 justify-end items-end space-y-1'
                  >
                    <h1 className='md:text-sm text-xs   max-w-xs lg:max-w-sm bg-gray-200 px-2 md:px-4  py-2 md:py-3 rounded-md'>
                      {innerMessage?.message}
                    </h1>
                    <h1 className=' text-[0.6rem] md:text-xs'>
                      {' '}
                      {getTimeSince(innerMessage?.updatedAt)}
                    </h1>
                  </div>
                )
              }
              return (
                <div
                  key={index}
                  className='flex w-full flex-col space-y-1 px-2  py-3 justify-start items-start '
                >
                  <h1 className='text-xs md:text-sm max-w-xs lg:max-w-sm bg-indigo-100 px-2 md:px-4  py-2 md:py-3 rounded-md '>
                    {innerMessage?.message}
                  </h1>
                  <h1 className=' text-[0.6rem] md:text-xs'>
                    {' '}
                    {getTimeSince(innerMessage?.updatedAt)}
                  </h1>
                </div>
              )
            })}
          </ScrollToBottom>

          {/* input */}
          <div className='w-full h-[15vh] border-t border-b flex  items-end py-2 gap-4 justify-between px-2 '>
            <textarea
              placeholder='input message here'
              type='text'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className='border px-2 py-2 w-full placeholder:text-slate-400 text-xs  placeholder:text-xs h-full outline-none rounded-md'
              name=''
              id=''
              cols='30'
              rows='10'
            ></textarea>

            <div
              onClick={() => {
                if (message?.trim() === '') return
                return sendMessage({
                  chat_id: selectedChatID,
                  message,
                })
              }}
              className='rounded-full px-4 py-2 text-white bg-babypurple flex items-center gap-2 shadow-lg w-max cursor-pointer'
            >
              <RiSendPlaneFill className='md:text-lg' />
              <h1 className='text-xs  lg:text-sm'>send </h1>
            </div>
          </div>
        </div>
      ) : (
        <div className='hidden md:flex justify-center min-h-screen w-full border-t items-center flex-col space-y-4 xl:space-y-5 '>
          {/* icon */}
          <div className='flex justify-center items-center p-3 lg:p-5 bg-opacity-50 bg-babygrey rounded-full'>
            <RiChatDeleteFill className='text-2xl md:text-3xl xl:text-5xl text-babyblack' />
          </div>
          <h1 className='text-sm md:text-base xl:text-2xl font-bold font-mono'>
            {' '}
            No Chat Selected
          </h1>
          <p className='text-xs md:text-sm xl:text-base xl:max-w-xl max-w-xs md:max-w-sm lg:max-w-md text-center'>
            Welcome to our car rental platform! It looks like you haven't
            selected a chat. Please select a chat to begin a conversation with
            another user. Please remeber to keep all conversations professional
            and maintain upmost respect for the other party. Let's get you on
            the road to a smooth car rental experience!
          </p>
        </div>
      )}
    </>
  )
}
