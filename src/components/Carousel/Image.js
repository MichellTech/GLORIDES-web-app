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
      className='w-6 lg:w-8 h-6 lg:h-8 absolute right-4   rounded-full flex justify-center items-center bg-white z-10 cursor-pointer  shadow-md'
      style={{
        ...style,
        display: 'flex',
        top: '45%',
        transform: 'translateY(-45%)',
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
      className='w-6 lg:w-8 h-6 lg:h-8 absolute left-4 rounded-full flex justify-center items-center bg-white z-10 cursor-pointer shadow-md'
      style={{
        ...style,
        display: 'flex',
        top: '45%',
        transform: 'translateY(-45%)',
      }}
      onClick={onClick}
    >
      <IoIosArrowBack className=' w-max text-babyblack text-bold ' />
    </div>
  )
}

export default function SimpleSlider(props) {
  const settings = {
    customPaging: function (i) {
      return (
        <a className=' w-full'>
          <img
            src={props?.photos?.filter((_, index) => index === i)?.[0].url}
            alt={'thumbnail'}
            className='  w-full  md:h-20 h-14  object-cover rounded-md mb-4'
          />
        </a>
      )
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  return (
    <div className='w-full customslick  pb-6 lg:pb-10 md:pb-8 p-2 lg:p-4 rounded-lg '>
      <Slider {...settings}>
        {props?.photos?.map((item, index) => {
          const imageUrl = props?.photos?.filter((_, i) => index === i)?.[0]
            ?.url

          return (
            <div
              key={`slider-item-${index}`}
              className='py-4 lg:py-6 pb-14 md:pb-20 lg:pb-24'
            >
              {imageUrl && (
                <div className='relative rounded-md mx-2'>
                  <Image
                    src={imageUrl}
                    alt={item.name}
                    width={1000}
                    height={1000}
                    priority
                    className='object-cover object-center rounded-md w-full h-52 md:h-80'
                  />
                </div>
              )}
            </div>
          )
        })}
      </Slider>
    </div>
  )
}
