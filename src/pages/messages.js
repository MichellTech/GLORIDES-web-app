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
  console.log(Userdata)
  const handlechat = (id) => {
    setOpenchat(true)
  }
  // 65756daa9174543a7435e95b
  // getallchat

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
      <section className=''>
        <div className='md:flex md:items-start relative '>
          {/*chat history display */}
          <div className='md:max-w-sm w-full md:border-r '>
            <div className='bg-slate-400 bg-opacity-50 w-full px-6 py-4'>
              <h1 className='text-base lg:text-lg font-mono font-bold'>
                All Chats
              </h1>
            </div>
            <div className='space-y-4 divide-y   px-6 py-6 h-[90vh] overflow-y-auto '>
              {allChats?.map((i, index) => {
                const secondUser = i?.members?.filter(
                  (a) => a?._id !== profile?._id
                )?.[0]
                return (
                  <div key={index}>
                    <div
                      onClick={() => setSelectedChatId(i?._id)}
                      className={`pt-4 flex ${
                        i?._id === selectedChatId
                          ? 'bg-gray-200'
                          : 'hover:bg-blue-100'
                      } justify-between items-center gap-1 cursor-pointer`}
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
                            {secondUser?.firstname} hello
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
            selectedChatID={selectedChatId}
          />
        </div>
      </section>
    </>
  )
}

export default messages
