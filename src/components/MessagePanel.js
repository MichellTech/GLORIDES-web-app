import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { MdArrowBackIos } from 'react-icons/md'
import { RiSendPlaneFill } from 'react-icons/ri'
import { SlOptionsVertical } from 'react-icons/sl'
import mainAxiosAction from './axiosAction'

export default function MessagePanel({
  openchat,
  setOpenchat,
  selectedChatID,
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
  return (
    <div
      className={`${
        openchat
          ? 'w-full h-screen overflow-y-scroll absolute top-0 left-0 right-0 bottom-0  md:relative'
          : 'hidden md:block md:relative md:w-full'
      }`}
    >
      {/*header  */}
      <div className='bg-slate-400 bg-opacity-50 px-6 py-3 flex justify-between items-center gap-2'>
        <div className='flex items-center gap-3'>
          <MdArrowBackIos
            onClick={() => setOpenchat(false)}
            className='text-babypurple text-xl cursor-pointer md:hidden'
          />
          <Image
            src={'/images/avatar.png'}
            alt='logo'
            width={1000}
            height={1000}
            className='object-cover w-9 h-9   rounded-full '
          />
          <h1 className='text-xs'>Olamide</h1>
        </div>
        <SlOptionsVertical className='cursor-pointer' />
      </div>
      {/* displaychat */}
      <div className='space-y-6 h-[80vh] bg-white px-3 py-4'>
        {allMessages?.map((innerMessage, index) => {
          if (innerMessage?.sender?._id === profile?._id) {
            return (
              <div
                key={index}
                className='flex w-full flex py-3 justify-end items-center'
              >
                <h1 className='text-sm font-semibold'>
                  {innerMessage?.message}
                </h1>
              </div>
            )
          }
          return (
            <div
              key={index}
              className='flex w-full flex py-3 justify-start items-center'
            >
              <h1 className='text-sm font-semibold'>{innerMessage?.message}</h1>
            </div>
          )
        })}
      </div>

      {/* input */}
      <div className='w-full h-[10vh] border-t border-b flex  items-center py-2 gap-4 justify-between px-2 '>
        <input
          placeholder='input message here'
          type='text'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className='border px-2 py-2 w-full placeholder:text-slate-400 text-xs  placeholder:text-xs'
        />
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
          <RiSendPlaneFill />
          <h1 className='text-xs '>send </h1>
        </div>
      </div>
    </div>
  )
}
