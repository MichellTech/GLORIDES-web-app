import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import index from '@/pages'

function SampleNextArrow(props) {
  const { style, onClick } = props
  return (
    <div
      className=' hidden w-10 h-10 absolute -right-10  md:-right-5 xl:-right-5 rounded-full  justify-center items-center'
      style={{
        ...style,
        display: 'flex',
        top: '50%',
        transform: 'translateY(-50%)',
      }}
      onClick={onClick}
    ></div>
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className=' hidden w-10 h-10 absolute -left-10 md:-left-5 xl:-left-5 rounded-fulljustify-center items-center'
      style={{
        ...style,
        display: 'flex',
        top: '50%',
        transform: 'translateY(-50%)',
      }}
      onClick={onClick}
    ></div>
  )
}

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 100000,
      autoplaySpeed: 9000,
      cssEase: 'linear',
      vertical: true,
      verticalSwiping: true,
      beforeChange: function (currentSlide, nextSlide) {
        // console.log('before changee', currentSlide, nextSlide)
      },
      afterChange: function (currentSlide) {
        // console.log('after changee', currentSlide)
      },
      responsive: [
        // {
        //   breakpoint: 1700,
        //   settings: {
        //     slidesToShow: 4,
        //     slidesToScroll: 2,
        //     infinite: true,
        //     dots: true,
        //   },
        // },
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: false,
          },
        },
        {
          breakpoint: 530,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: false,
          },
        },
      ],
    }
    return (
      <div
        key={index}
        className='w-full relative overflow-x-hidden overflow-y-hidden space-y-6 sm:space-y-4'
      >
        <Slider {...settings}>
          <div className='text-babyblack bg-white px-4 py-4 sm:py-5 sm:px-5 space-y-5 '>
            {/* header */}
            <div className='flex justify-between items-start'>
              <div>
                <h1 className='font-bold text-sm  lg:text-base'>
                  Graham Henderson
                </h1>
                <p className='text-xs  lg:text-sm'>Houston, Texas</p>
              </div>
              <h1 className='text-xs  lg:text-sm'> September 10, 2023</h1>
            </div>
            {/* content */}
            <div>
              <p className='text-xs  xl:text-sm'>
                "Glo Rides Car Rentals provided me with excellent service, a
                wide selection of vehicles, and made my trip stress-free. Highly
                recommend!"
              </p>
            </div>
          </div>
          <div className='text-babyblack bg-white px-4 py-4 sm:py-5 sm:px-5 space-y-5 '>
            {/* header */}
            <div className='flex justify-between items-start'>
              <div>
                <h1 className='font-bold text-sm  lg:text-base '>
                  Jordan Robertson
                </h1>
                <p className='text-xs  lg:text-sm'>Austin</p>
              </div>
              <h1 className='text-xs  lg:text-sm'> September 23, 2023</h1>
            </div>
            {/* content */}
            <div>
              <p className='text-xs  xl:text-sm'>
                "I had an amazing experience with Glo Rides! The wide vehicle
                selection allowed me to find the perfect car for my family trip.
                Booking was a breeze, and the customer service was top-notch."
              </p>
            </div>
          </div>
          <div className='text-babyblack bg-white px-4 py-4 sm:py-5 sm:px-5 space-y-5 '>
            {/* header */}
            <div className='flex justify-between items-start'>
              <div>
                <h1 className='font-bold text-sm lg:text-base '>
                  Miriam Hassan
                </h1>
                <p className='text-xs  lg:text-sm'>USA</p>
              </div>
              <h1 className='text-xs  lg:text-sm'> October 19, 2023</h1>
            </div>
            {/* content */}
            <div>
              <p className='text-xs  xl:text-sm'>
                "Glo Rides made my business trip stress-free. Their competitive
                pricing saved me money, and their insurance options provided
                peace of mind. Highly recommend!"
              </p>
            </div>
          </div>
          <div className='text-babyblack bg-white px-4 py-4 sm:py-5 sm:px-5 space-y-5'>
            {/* header */}
            <div className='flex justify-between items-start'>
              <div>
                <h1 className='font-bold text-sm  lg:text-base '>
                  Jessica Wayne
                </h1>
                <p className='text-xs  lg:text-sm '>USA</p>
              </div>
              <h1 className='text-xs lg:text-sm'> June 4, 2023</h1>
            </div>
            {/* content */}
            <div>
              <p className='text-xs  xl:text-sm'>
                "I couldn't believe how easy it was to book a car with Glo
                Rides. Their efficient and user-friendly booking process got me
                on the road in no time. Great service!"
              </p>
            </div>
          </div>
          <div className='text-babyblack bg-white px-4 py-4 sm:py-5 sm:px-5 space-y-5'>
            {/* header */}
            <div className='flex justify-between items-start'>
              <div>
                <h1 className='font-bold text-sm  lg:text-base '>
                  Samuel Jacobs
                </h1>
                <p className='text-xs  lg:text-sm'>USA</p>
              </div>
              <h1 className='text-xs  lg:text-sm'> July 16, 2023</h1>
            </div>
            {/* content */}
            <div>
              <p className='text-xs  xl:text-sm'>
                "I've been a loyal customer of Glo Rides. Their reliable
                customer service and vehicle guarantee have never let me down. I
                wouldn't rent from anyone else!"
              </p>
            </div>
          </div>
          <div className='text-babyblack bg-white px-4 py-4 sm:py-5 sm:px-5 space-y-5 '>
            {/* header */}
            <div className='flex justify-between items-start'>
              <div>
                <h1 className='font-bold text-sm  lg:text-base '>Jack Ryan</h1>
                <p className='text-xs  lg:text-sm'>USA</p>
              </div>
              <h1 className='text-xs  lg:text-sm'> April 1, 2023</h1>
            </div>
            {/* content */}
            <div>
              <p className='text-xs  xl:text-sm'>
                "Choosing Glo Rides was the best decision. The smooth booking
                process, well-maintained cars, and helpful team ensured a
                memorable travel experience."
              </p>
            </div>
          </div>
        </Slider>
      </div>
    )
  }
}
