import React, { useMemo } from 'react'
import { useRouter } from 'next/router'
import { cars } from '../../utilis/Cardata'
import Navbar from '@/components/Navigation/Navbar'
import Footer from '@/components/Navigation/Footer'
import Image from 'next/image'
import Carousel from '../../components/Carousel/Image'
function Rentedcar() {
  const router = useRouter()

  const carId = router.query.id

  const singlecar = useMemo(
    () => cars.filter((item) => item.id === Number(carId))?.[0],
    [carId]
  )

  return (
    <>
      <Navbar />
      <section className='my-10 xl:my-16 max-w-xs sm:max-w-xl mx-auto font-sans md:max-w-4xl lg:max-w-5xl xl:max-w-7xl  px-4 md:px-6  lg:px-8'>
        {/* image */}
        <div className=''>
          <h1 className='font-bold text-sm sm:text-base md:text-lg lg:text-xl'>
            Car Photos
          </h1>
          {/* img */}
          <div className='w-full '>
            <Carousel />
          </div>
        </div>
      </section>
    </>
  )
}

export default Rentedcar
