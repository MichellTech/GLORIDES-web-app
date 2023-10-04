import React, { Component, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { cars } from '../../utilis/Cardata'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import Image from 'next/image'

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className='w-6 h-6 absolute -right-1   rounded-full flex justify-center items-center bg-white z-20 cursor-pointer  shadow-md'
      style={{
        ...style,
        display: 'flex',
        top: '50%',
        transform: 'translateY(-50%)',
      }}
      onClick={onClick}
    >
      <IoIosArrowForward className=' w-max text-babyblack text-bold ' />
    </div>
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className='w-6 h-6 absolute -left-1 rounded-full flex justify-center items-center bg-white z-20 cursor-pointer shadow-md'
      style={{
        ...style,
        display: 'flex',
        top: '50%',
        transform: 'translateY(-50%)',
      }}
      onClick={onClick}
    >
      <IoIosArrowBack className=' w-max text-babyblack text-bold ' />
    </div>
  )
}

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      autoplay: false,
      speed: 2000,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1700,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 3,
          },
        },
        {
          breakpoint: 790,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
          },
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          },
        },
      ],
    }

    return (
      <div className='w-full relative   '>
        <Slider {...settings}>
          {cars.map((item) => {
            return (
              <div key={item.id} className='py-6 md:py-7 '>
                <div className='  relative rounded-md  mx-2    '>
                  <Image
                    src={item.image}
                    alt={item.carname}
                    width={1000}
                    height={1000}
                    priority
                    className='object-cover rounded-md  w-full h-40 sm:h-44 '
                  />
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    )
  }
}
