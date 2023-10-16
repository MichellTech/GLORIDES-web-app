import React from 'react'
import Navbar from '@/components/Navigation/Navbar'
import Profilecomp from '@/components/Profilecomp'
function view() {
  return (
    <>
      <Navbar />
      <div className='example overflow-y-auto '>
        <Profilecomp />
      </div>
      {/* body */}
      <div>{/*  */}</div>
    </>
  )
}

export default view
