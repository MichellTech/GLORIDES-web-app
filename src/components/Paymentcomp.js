import React from 'react'
import Image from 'next/image'
function Paymentcomp() {
  return (
    <div className='bg-white py-4 px-4 flex justify-center items-center mx-auto rounded-md shadow-md'>
      <div className='  relative '>
        <Image
          src={'/images/pay.svg'}
          alt='logo'
          width={1000}
          height={1000}
          className='object-cover w-36  '
        />
      </div>
    </div>
  )
}

export default Paymentcomp
