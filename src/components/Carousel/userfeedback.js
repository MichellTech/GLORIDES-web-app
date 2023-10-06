import React, { Component, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Feedback from '../../utilis/Carfeedback'
import Notificationdata from '../../utilis/Notifications'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className='w-6 h-6 absolute -right-1  rounded-full flex justify-center items-center bg-babygrey z-20 cursor-pointer '
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
      className='w-6 h-6 absolute -left-1  rounded-full flex justify-center items-center bg-babygrey z-20 cursor-pointer '
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
      dots: false,
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
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
            infinite: true,
          },
        },
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            infinite: true,
          },
        },
      ],
    }

    return (
      <div className='w-full relative   '>
        <Slider {...settings}>
          {Feedback?.map((item, index) => {
            return (
              <div key={index} className='pt-5 pb-4 '>
                <div
                  key={index}
                  className='w-full mx-auto h-40 flex justify-center items-center z-10  '
                >
                  <div className='relative bg-white rounded-md shadow-md px-4 py-4 w-72 h-44 flex flex-col justify-center items-center  mx-2  '>
                    {/* text */}
                    <div className=' space-y-3 '>
                      {/* header */}
                      <div className='space-y-2'>
                        {/* rating */}
                        <div className='flex items-center gap-2 text-xs text-babypurple'>
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiOutlineStar />
                          <AiOutlineStar />
                        </div>
                        {/* name */}
                        <div className='flex items-center gap-2'>
                          <h1 className='text-sm font-bold text-babyblack'>
                            {item.name}
                          </h1>
                          <h1 className='text-[0.6rem]  text-babyblack'>
                            Sept 26,2023
                          </h1>
                        </div>

                        <h2 className='text-xs font-medium text-babyblack'>
                          {' '}
                          {item.location}
                        </h2>
                      </div>
                      {/* boddy */}
                      <p className='text-xs text-left'>{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    )
  }
}
