import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Error = () => {
  return (
    <>
      <div className=' px-6 flex flex-col justify-center items-center min-h-screen space-y-4 md:space-y-8'>
        {/* image */}
        <div className='max-w-sm md:max-w-md xl:max-w-xl h-full relative mx-auto'>
          <Image
            src={'/images/error.gif'}
            alt='logo'
            width={1000}
            height={100}
            priority={true}
            className='object-cover object-center h-[40vh] xl:h-[45vh] '
          />
        </div>
        <div className='space-y-8'>
          {/* text */}
          <div>
            <h3 className='text-sm max-w-xs sm:text-base mx-auto sm:max-w-md md:text-xl md:max-w-xl  lg:text-2xl lg:max-w-3xl text-center'>
              Opps ! you seem to have clicked or entered an old or expired link.
              Click on the button below to return to the home page
            </h3>
          </div>
          {/* button */}
          <Link href='/' className='flex justify-center items-center mx-auto'>
            <button className='mx-auto bg-babypurple text-white font-alata px-6 py-2 md:py-3 text-sm shadow-md rounded-md lg:text-base lg:px-8'>
              Return to Hompage
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
export default Error
