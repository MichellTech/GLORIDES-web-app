import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Navbar from '@/components/Navigation/Navbar/index'
import Footer from '@/components/Navigation/Footer'
import 'react-datepicker/dist/react-datepicker.css'
import mainAxiosAction from './axiosAction'
import { MdCancel, MdMyLocation } from 'react-icons/md'
import { TbBuildingBank, TbClockHour9, TbStatusChange } from 'react-icons/tb'
import moment from 'moment'
import { GoCheckCircleFill } from 'react-icons/go'
import { toast } from 'react-toastify'
import { FaPerson, FaTicketSimple } from 'react-icons/fa6'
import { FaMoneyBill } from 'react-icons/fa'
import { BsBank2 } from 'react-icons/bs'
import { IoMdBarcode } from 'react-icons/io'
function Cancelrental({ carId, ownerid, setIsDetails }) {
  const [loading, setLoading] = useState(false)
  const [cardata, setCardata] = useState({})
  const [eligibile, setEligibile] = useState(false)
  const [bank, setBank] = useState('')
  const [account, setAccount] = useState('')
  const [sort, setSort] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [isCreating, setIsCreating] = useState(false)
  const router = useRouter()

  useEffect(() => {
    getcanceldetails()
  }, [carId])

  const getcanceldetails = () => {
    mainAxiosAction
      .post(`/cars/getsinglerefund`, { booking_id: carId })
      .then(function (response) {
        setLoading(false)
        setCardata(response?.data?.refund)
        setBank(response?.data?.refund?.account_details?.bank)
        setAccount(response?.data?.refund?.account_details?.account_number)
        setSort(response?.data?.refund?.account_details?.sortcode)
        console.log(response?.data.refund)
      })
      .catch(function (error) {
        setLoading(false)
        console.log(error)
      })
  }

  const sendrequest = () => {
    if (bank === '' || account === '' || sort === '') {
      return toast.error('Please provide payment details')
    } else {
      setLoading(true)
      const payload = {
        booking_id: cardata?.booking_id,
        account_number: account,
        bank: bank,
        sortcode: sort,
      }
      mainAxiosAction
        .post(`/cars/updaterefundaccount`, payload)
        .then(function (response) {
          setLoading(false)
          toast.success(response?.data?.message)
          router.push({
            pathname: `/renthistory/${carId}`,
          })
          setIsEditing(false)
          getcanceldetails()
        })
        .catch(function (error) {
          toast.error(error?.response?.data?.message)
          setLoading(false)
          console.log(error)
        })
    }
  }
  const profile =
    localStorage?.getItem('User_Profile') === null ||
    localStorage?.getItem('User_Profile') === 'undefined' ||
    localStorage?.getItem('User_Profile') === undefined
      ? []
      : JSON?.parse(localStorage?.getItem('User_Profile'))

  console.log('edit', isEditing)
  console.log('creat', isCreating)
  return (
    <section className='w-full max-w-sm mx-auto  flex flex-col justify-center items-center min-h-screen sm:max-w-lg md:max-w-xl lg:max-w-4xl   xl:max-w-2xl bg-white rounded-md px-6 lg:px-10 py-10'>
      <div className='flex justify-end w-full'>
        <button
          onClick={() => setIsDetails(false)}
          className='px-4 md:px-6 py-2 bg-babypurple text-white rounded-full  text-xs lg:text-sm'
        >
          Close
        </button>
      </div>
      {/* pickup */}
      <div className='w-full bg-white rounded-md lg:rounded-lg px-3 py-4 lg:px-5 lg:py-6 space-y-4'>
        {/* header */}
        <div className='relative'>
          <h1 className='font-bold text-sm md:text-base xl:text-lg border-b pb-2 lg:pb-4'>
            {' '}
            Booking Reference
          </h1>
          <div className='w-10 h-1 bg-babypurple absolute bottom-0 left-0'></div>
        </div>
        {/* content */}
        <div className=' space-y-2 lg:space-y-3'>
          <div className='flex items-center gap-2'>
            <FaTicketSimple />
            <h1 className='text-sm lg:text-base '>{cardata?.booking_id}</h1>
          </div>
        </div>
      </div>
      {/* cancelled by*/}

      <div className='w-full bg-white rounded-md lg:rounded-lg px-3 py-4 lg:px-5 lg:py-6 space-y-4'>
        {/* header */}
        <div className='relative'>
          <h1 className='font-bold text-sm md:text-base xl:text-lg border-b pb-2 lg:pb-4'>
            {' '}
            Cancelled By
          </h1>
          <div className='w-10 h-1 bg-babypurple absolute bottom-0 left-0'></div>
        </div>
        {/* content */}
        <div className=' space-y-2 lg:space-y-3'>
          <div className='flex items-center gap-2'>
            <FaPerson />
            {cardata?.cancelled_by === ownerid ? (
              <h1 className='text-sm lg:text-base '>Car Owner</h1>
            ) : (
              <h1 className='text-sm lg:text-base '>
                {profile?.lastname} {profile?.firstname}
              </h1>
            )}
          </div>
        </div>
      </div>
      {/* Amount */}
      <div className='w-full bg-white rounded-md lg:rounded-lg px-3 py-4 lg:px-5 lg:py-6 space-y-4'>
        {/* header */}
        <div className='relative'>
          <h1 className='font-bold text-sm md:text-base xl:text-lg border-b pb-2 lg:pb-4'>
            {' '}
            Amount
          </h1>
          <div className='w-10 h-1 bg-babypurple absolute bottom-0 left-0'></div>
        </div>
        {/* content */}
        <div className=' space-y-2 lg:space-y-3'>
          <div className='flex items-center gap-2'>
            <FaMoneyBill />
            <h1 className='text-sm lg:text-base '> $ {cardata?.amount}</h1>
          </div>
        </div>
      </div>
      {/* eligibility */}
      <div className='w-full bg-white rounded-md lg:rounded-lg px-3 py-4 lg:px-5 lg:py-6 space-y-4'>
        {/* header */}
        <div className='relative'>
          <h1 className='font-bold text-sm md:text-base xl:text-lg border-b pb-2 lg:pb-4'>
            {' '}
            Refund Eligibity
          </h1>
          <div className='w-10 h-1 bg-babypurple absolute bottom-0 left-0'></div>
        </div>
        {/* content */}
        <div className=' space-y-2 lg:space-y-3'>
          <div className='flex items-center gap-2'>
            {cardata?.is_eligible ? <GoCheckCircleFill /> : <MdCancel />}
            <h1 className='text-sm lg:text-base '>
              {cardata?.is_eligible
                ? 'You are eligible for a refund'
                : "Sorry you aren't eligible for a refund"}
            </h1>
          </div>
        </div>
      </div>
      {/* payment details*/}
      {cardata?.is_eligible && (
        <div className='w-full bg-white rounded-md lg:rounded-lg px-3 py-4 lg:px-5 lg:py-6 space-y-4'>
          {/* header */}
          <div className='relative'>
            <h1 className='font-bold text-sm md:text-base xl:text-lg border-b pb-2 lg:pb-4'>
              {' '}
              Payment Details
            </h1>
            <div className='w-10 h-1 bg-babypurple absolute bottom-0 left-0'></div>
          </div>
          {/* content */}
          <div className=' space-y-2 lg:space-y-3'>
            <div className='flex items-center gap-2'>
              <BsBank2 />
              <h1 className='text-sm lg:text-base '>
                {cardata?.account_details?.bank}
              </h1>
            </div>
            <div className='flex items-center gap-2'>
              <IoMdBarcode />
              <h1 className='text-sm lg:text-base '>
                {cardata?.account_details?.sortcode}
              </h1>
            </div>
            <div className='flex items-center gap-2'>
              <TbBuildingBank />
              <h1 className='text-sm lg:text-base '>
                {cardata?.account_details?.account_number}
              </h1>
            </div>
          </div>
        </div>
      )}

      {/* status */}
      <div className='w-full bg-white rounded-md lg:rounded-lg px-3 py-4 lg:px-5 lg:py-6 space-y-4'>
        {/* header */}
        <div className='relative'>
          <h1 className='font-bold text-sm md:text-base xl:text-lg border-b pb-2 lg:pb-4'>
            {' '}
            Status
          </h1>
          <div className='w-10 h-1 bg-babypurple absolute bottom-0 left-0'></div>
        </div>
        {/* content */}
        <div className=' space-y-2 lg:space-y-3'>
          <div className='flex items-center gap-2'>
            <TbStatusChange />
            <h1 className='text-sm lg:text-base '>{cardata?.status}</h1>
          </div>
        </div>
      </div>
      {/* date */}
      <div className='w-full bg-white rounded-md lg:rounded-lg px-3 py-4 lg:px-5 lg:py-6 space-y-4'>
        {/* header */}
        <div className='relative'>
          <h1 className='font-bold text-sm md:text-base xl:text-lg border-b pb-2 lg:pb-4'>
            {' '}
            Date created
          </h1>
          <div className='w-10 h-1 bg-babypurple absolute bottom-0 left-0'></div>
        </div>
        {/* content */}
        <div className=' space-y-2 lg:space-y-3'>
          <div className='flex items-center gap-2'>
            <TbClockHour9 />
            <h1 className='text-sm lg:text-base '>
              {moment(cardata?.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
            </h1>
          </div>
        </div>
      </div>

      {!isEditing && (
        <div className='py-10 space-y-2 sm:flex sm:space-y-0 sm:items-center w-full sm:gap-2 lg:gap-4'>
          {cardata?.is_eligible &&
          cardata?.status === 'pending' &&
          cardata?.account_details?.account_number !== '' ? (
            <button
              onClick={() => setIsEditing(true)}
              className=' px-4 py-2 lg:py-3 hover:shadow-lg w-full bg-babypurple text-white text-sm lg:text-base rounded-md '
            >
              {/* {loading && <h1 className='spinner mr-2'></h1>} */}
              Edit Account detials
            </button>
          ) : cardata?.is_eligible &&
            cardata?.status === 'pending' &&
            cardata?.account_details?.account_number === '' ? (
            <button
              onClick={() => setIsEditing(true)}
              className=' px-4 py-2 lg:py-3 hover:shadow-lg w-full bg-babypurple text-white text-sm lg:text-base rounded-md '
            >
              {/* {loading && <h1 className='spinner mr-2'></h1>} */}
              Add Account detials
            </button>
          ) : (
            ''
          )}
        </div>
      )}
      {/* edit */}
      {isEditing && (
        <div className=' space-y-2 lg:space-y-3 w-full mt-5'>
          <div className='flex items-center gap-2'>
            <h1 className='text-sm lg:text-base '>
              Please input your bank details asssociated with your profile
            </h1>
          </div>
          <div className='w-full space-y-1 lg:space-y-2 '>
            <label htmlFor='fullname' className='text-xs lg:text-sm  '>
              Full name
            </label>

            <div className='px-4 py-3 lg:py-4 rounded-md  bg-softpurple w-full text-sm lg:text-base'>
              <h1>
                {' '}
                {profile?.lastname} {profile?.firstname}
              </h1>
            </div>
          </div>
          <div className='w-full space-y-1 lg:space-y-2 '>
            <label htmlFor='fullname' className='text-xs lg:text-sm  '>
              Account Number
            </label>
            <input
              type='number'
              value={account}
              onChange={(e) => setAccount(e.target.value)}
              placeholder='input your account number here'
              className='px-4 py-3 lg:py-4 rounded-md  bg-white border  w-full text-sm lg:text-base border-babyblack'
            />
          </div>
          <div className='w-full space-y-1 lg:space-y-2 '>
            <label htmlFor='fullname' className='text-xs lg:text-sm  '>
              Bank
            </label>
            <input
              type='text'
              value={bank}
              onChange={(e) => setBank(e.target.value)}
              placeholder='input your bank here'
              className='px-4 py-3 lg:py-4 rounded-md  bg-white border  w-full text-sm lg:text-base border-babyblack'
            />
          </div>
          <div className='w-full space-y-1 lg:space-y-2 '>
            <label htmlFor='fullname' className='text-xs lg:text-sm  '>
              Sort Code
            </label>
            <input
              type='number'
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              placeholder='input your sort code here'
              className='px-4 py-3 lg:py-4 rounded-md  bg-white border  w-full text-sm lg:text-base border-babyblack'
            />
          </div>
          <div className='py-10 space-y-2 sm:flex sm:space-y-0 sm:items-center w-full sm:gap-2 lg:gap-4'>
            <button
              onClick={() => sendrequest()}
              className=' px-4 py-2 lg:py-3 hover:shadow-lg w-full bg-babypurple text-white text-sm lg:text-base rounded-md '
            >
              {loading && <h1 className='spinner mr-2'></h1>}
              Send
            </button>
            <button
              onClick={() => {
                setIsCreating(false), setIsEditing(false)
              }}
              className=' px-4 py-2 lg:py-3 hover:shadow-lg w-full bg-indigo-500 text-white text-sm lg:text-base rounded-md'
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Cancelrental
