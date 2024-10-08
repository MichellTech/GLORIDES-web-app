import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navigation/Navbar/index'
import Search from '../../components/Rentcomp/Search'
import Allcars from '../../components/Rentcomp/Allcars'
import { MdOutlineClearAll, MdOutlineFilterAlt } from 'react-icons/md'
import Footer from '../../components/Navigation/Footer'
import Filterparams from '../../components/Rentcomp/Filterparams'
import { useSelector, useDispatch } from 'react-redux'
import {
  openFilter,
  closeFilter,
  setAllsearchedcars,
} from '@/features/rental/filterSlice'
import Rentform from '../../components/Rentcomp/Rentform'
import { LuFilter } from 'react-icons/lu'
import { BsBookmark } from 'react-icons/bs'

function allcars() {
  const [viewing, setViewing] = useState(1)
  const [commoncars, setCommoncars] = useState([])
  const { isFiltering, bookmarked, returnedcars, allsearchedcars } =
    useSelector((store) => store.rental)
  const [carloader, setCarloader] = useState(false)
  const dispatch = useDispatch()

  const handleviewing = () => {
    if (viewing === 1) {
      dispatch(setAllsearchedcars(commoncars))
      return setViewing(2)
    }

    setViewing(1)
    dispatch(setAllsearchedcars(returnedcars))
  }

  useEffect(() => {
    setCommoncars(
      allsearchedcars?.filter((value) =>
        bookmarked?.some((item) => item._id === value._id)
      )
    )
  }, [allsearchedcars, bookmarked])

  const profile =
    localStorage?.getItem('User_Profile') === null ||
    localStorage?.getItem('User_Profile') === 'undefined' ||
    localStorage?.getItem('User_Profile') === undefined
      ? []
      : JSON?.parse(localStorage?.getItem('User_Profile'))

  console.log(allsearchedcars)
  return (
    <>
      <main
        className={`${
          isFiltering ? 'relative h-[100vh] overflow-y-hidden ' : 'relative '
        }`}
      >
        <Navbar />

        {/* search */}
        <div className=' w-full px-6 lg:px-10  py-3 lg:py-5  sticky    top-0 left-0 right-0 bg-white  z-10  '>
          <Rentform setCarloader={setCarloader} />
        </div>

        {/* body */}
        {/* allcars and filter */}
        <div className='  px-6   pt-10 pb-28  w-full'>
          {/* all cars */}
          <div className='flex justify-center items-center w-full'>
            <Allcars carloader={carloader} />
          </div>
        </div>

        {/* filtering comp*/}
        {isFiltering && (
          <div className='absolute top-0 bottom-0 left-0 right-0 bg-black  bg-opacity-50 z-30  '>
            <Filterparams />
          </div>
        )}

        {/* mobile */}
        <div className='fixed bottom-8 left-0 right-0'>
          <div className='flex justify-center flex-wrap gap-4 z-30'>
            {/* fiter */}
            {/* <div
              onClick={() => dispatch(openFilter())}
              className='flex items-center gap-3 border py-3 px-8 xl:hidden shadow-2xl rounded-sm   cursor-pointer bg-white'
            >
              <LuFilter className='text-sm md:text-base' />
              <h1 className='text-xs md:text-sm'>Filter</h1>
            </div> */}
            {/* favorites */}
            {allsearchedcars?.length < 1 || profile ? (
              <div
                onClick={handleviewing}
                className='flex items-center gap-3 border py-3 px-8 xl:hidden shadow-2xl rounded-sm  cursor-pointer bg-white'
              >
                {viewing === 1 ? (
                  <BsBookmark className='text-sm md:text-base' />
                ) : (
                  <MdOutlineClearAll className='text-sm md:text-base' />
                )}
                <h1 className='text-xs md:text-sm'>
                  {viewing === 1
                    ? `Favorites (${commoncars?.length})`
                    : 'View All Cars'}
                </h1>
              </div>
            ) : (
              <div className='flex items-center gap-3 border py-3 px-8 xl:hidden shadow-2xl rounded-sm  cursor-pointer bg-white'>
                <MdOutlineClearAll className='text-sm md:text-base' />

                <h1 className='text-xs md:text-sm'>No Dataa </h1>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  )
}

export default allcars
