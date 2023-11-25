import React from 'react'
import Navbar from '../components/Navigation/Navbar/index'
import Link from 'next/link'
import Image from 'next/image'
import Feedback from '../components/Feedback'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Navigation/Footer'
function aboutus() {
  return (
    <>
      <Navbar />
      {/* hero */}
      <section className='mb-16 mt-10 md:my-20 xl:my-24 max-w-xs sm:max-w-md mx-auto font-sans md:max-w-4xl lg:max-w-5xl xl:max-w-7xl  px-4 md:px-6  lg:px-8  space-y-10 sm:space-y-16 md:space-y-0 md:flex md:justify-between md:items-center md:gap-6 lg:gap-10'>
        {/* text */}
        <div
          className='
        flex flex-col justify-center items-center space-y-4 mx-auto md:w-1/2 md:justify-start md:items-start lg:space-y-5 xl:space-y-6 '
        >
          {/* mission */}
          <div className='bg-softpurple px-4 py-2 rounded-full lg:px-5 xl:px-6 xl:py-3 '>
            <h1 className='text-xs font-bold text-babypurple sm:text-sm xl:text-xl  lg:text-base '>
              Our Mission
            </h1>
          </div>
          {/* top */}
          <h1 className='font-bold text-center text-3xl sm:text-4xl font-mono md:text-left lg:text-5xl xl:text-6xl text-babyblack'>
            Our Promise to you !
          </h1>
          <p className='text-sm text-center sm:text-base md:text-left lg:text-lg xl:text-xl xl:max-w-lg'>
            Our mission at Glo Rides is to be more than just a provider of
            vehicles. We strive to be a trusted companion, enabling you to
            embrace life's adventures, connect with loved ones, and achieve your
            goals. Your journey is our purpose, and we are committed to
            delivering exceptional service, convenience, and a sense of
            possibility every step of the way.
          </p>
        </div>
        {/* image */}
        <div className='  mx-auto flex justify-center items-center md:w-1/2  relative '>
          <Image
            src={'/images/abt1.png'}
            alt='footer'
            width={1000}
            height={1000}
            className='object-cover w-full sm:max-w-xs lg:max-w-sm xl:max-w-md '
          />
        </div>
      </section>
      {/* what we do */}
      <section className='section-center space-y-10 sm:space-y-16 md:space-y-0 md:flex md:flex-row-reverse md:justify-between md:items-center md:gap-6 lg:gap-10'>
        {/* text */}
        <div
          className='
        flex flex-col justify-center items-center space-y-4 mx-auto md:w-1/2 md:justify-start md:items-start lg:space-y-5 xl:space-y-6 mt-20 '
        >
          {/* mission */}
          <div className='bg-softpurple px-4 py-2 rounded-full lg:px-5 xl:px-6 xl:py-3 '>
            <h1 className='text-xs font-bold text-babypurple sm:text-sm xl:text-xl  lg:text-base '>
              Our Story
            </h1>
          </div>
          {/* top */}
          <h1 className='font-bold text-center text-2xl sm:text-3xl font-mono md:text-left lg:text-4xl xl:text-5xl text-babyblack'>
            Why we do What we do !
          </h1>
          <p className='text-sm text-center sm:text-base md:text-left lg:text-lg xl:text-xl xl:max-w-lg'>
            We created Glo Ride car rental company with a simple yet powerful
            purpose: to empower people with the freedom to explore, succeed, and
            create unforgettable moments. We believe that reliable and
            accessible transportation should never be a barrier, but rather a
            catalyst for dreams and opportunities. Thank you for joining us on
            this incredible journey.
          </p>
        </div>
        {/* image */}
        <div className='  mx-auto flex justify-center items-center md:w-1/2  relative '>
          <Image
            src={'/images/abt2.png'}
            alt='footer'
            width={1000}
            height={1000}
            className='object-cover w-full sm:max-w-xs lg:max-w-sm xl:max-w-md '
          />
        </div>
      </section>
      {/* why choose us */}
      <section className='section-center space-y-10 md:space-y-16 lg:space-y-20 xl:space-y-24'>
        {/* header */}
        <div className='flex justify-center items-center mx-auto mt-20'>
          <div className='  space-y-2 md:space-y-3 xl:space-y-4'>
            <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl py-4 text-center  text-babyblack   '>
              Why{' '}
              <span className="bg-[url('/images/started.png')] bg-no-repeat bg-bottom  py-4   ">
                Choose Us
              </span>{' '}
            </h1>
            <p className='text-sm text-center sm:text-base max-w-sm sm:max-w-md md:text-lg md:max-w-lg text-babyblack lg:text-xl lg:max-w-xl xl:text-2xl xl:max-w-3xl'>
              We offer a wide range of spectacular services tailored to meet
              your needs & which can’t be matched by our competitors
            </p>
          </div>
        </div>
        {/* content */}
        {/* contents */}
        <div className=' flex flex-col justify-center items-center md:flex-row md:items-center  '>
          {/* first image */}
          <div className='mx-auto flex justify-center items-center md:hidden  '>
            <Image
              src={'/images/abt3.png'}
              alt='logo'
              width={1000}
              height={1000}
              className='max-w-xs  '
            />
          </div>
          {/* second part*/}
          <div className='md:space-y-10  xl:space-y-16 '>
            {/* one */}
            <div className='flex flex-col justify-center items-center md:items-end mx-auto  space-y-3 sm:space-y-5'>
              {/* icon */}
              <div className='bg-softpurple rounded-full inline-block px-2 py-2 animate-pulse '>
                <div className='bg-babypurple rounded-full w-4 h-4 sm:h-5 sm:w-5 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 '></div>
              </div>
              {/* text */}
              <div className='text-center space-y-1 sm:space-y-2 md:text-right'>
                <h1 className='font-bold text-babybluee sm:text-xl md:text-lg  lg:text-xl xl:text-2xl'>
                  Wide Range of Vehicles{' '}
                </h1>
                <p className='text-babyblack text-xs max-w-[17rem] sm:text-sm sm:max-w-xs md:text-xs lg:text-sm xl:text-base '>
                  Experience freedom of choice! We offer a broad range of
                  vehicle selection, therby ensuring that you have the perfect
                  match for every occasion.{' '}
                </p>
              </div>
            </div>
            {/* two*/}
            <div className='flex flex-col justify-center items-center md:items-end mx-auto space-y-3 sm:space-y-5 mt-6 md:mt-0 sm:mt-10'>
              {/* icon */}
              <div className='bg-softpurple rounded-full inline-block px-2 py-2 animate-pulse '>
                <div className='bg-babypurple  rounded-full w-4 h-4 sm:h-5 sm:w-5 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 '></div>
              </div>
              {/* text */}
              <div className='text-center space-y-1 sm:space-y-2 md:text-right'>
                <h1 className='font-bold text-babybluee sm:text-xl md:text-lg lg:text-xl xl:text-2xl '>
                  Reliable Customer Service{' '}
                </h1>
                <p className='text-babyblack text-xs max-w-[17rem] sm:text-sm sm:max-w-xs md:text-xs lg:text-sm xl:text-base'>
                  Our unwavering commitment to reliable customer service ensures
                  your peace of mind therby making your rental experience smooth
                  and stress-free.
                </p>
              </div>
            </div>
            {/* three */}
            <div className='flex flex-col justify-center items-center md:items-end mx-auto space-y-3 sm:space-y-5 mt-6 md:mt-0 sm:mt-10'>
              {/* icon */}
              <div className='bg-softpurple rounded-full inline-block px-2 py-2 animate-pulse '>
                <div className='bg-babypurple rounded-full w-4 h-4 sm:h-5 sm:w-5 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 '></div>
              </div>
              {/* text */}
              <div className='text-center space-y-1 sm:space-y-2 md:text-right'>
                <h1 className='font-bold text-babybluee sm:text-xl md:text-lg lg:text-xl xl:text-2xl '>
                  Wide Location Coverage{' '}
                </h1>
                <p className='text-babyblack text-xs max-w-[17rem] sm:text-sm sm:max-w-xs md:text-xs lg:text-sm xl:text-base'>
                  Our extensive location coverage means you'll always find a
                  rental option wherever your journey takes you.We've got you
                  covered{' '}
                </p>
              </div>
            </div>
          </div>

          {/* second image */}
          <div className='mx-auto md:flex justify-center items-center hidden   '>
            <Image
              src={'/images/abt3.png'}
              alt='logo'
              width={1000}
              height={1000}
              className='max-w-xs md:max-w-sm xl:max-w-lg  '
            />
          </div>
          {/* third part*/}
          <div className='md:space-y-10 xl:space-y-16 '>
            {/* one */}
            <div className='flex flex-col justify-center items-center mx-auto space-y-3 sm:space-y-5 md:items-start mt-6 md:mt-0 sm:mt-10'>
              {/* icon */}
              <div className='bg-softpurple rounded-full inline-block px-2 py-2 animate-pulse '>
                <div className='bg-babypurple  rounded-full w-4 h-4 sm:h-5 sm:w-5 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5'></div>
              </div>
              {/* text */}
              <div className='text-center space-y-1 sm:space-y-2 md:text-left'>
                <h1 className='font-bold text-babybluee sm:text-xl md:text-lg lg:text-xl xl:text-2xl'>
                  Competitive Pricing{' '}
                </h1>
                <p className='text-babyblack text-xs max-w-[17rem] sm:text-sm sm:max-w-xs md:text-xs lg:text-sm  xl:text-base'>
                  Our competitive pricing ensures you get the best value for
                  your money , so you never have to break the bank for all your
                  car rentals needs.
                </p>
              </div>
            </div>
            {/* two */}
            <div className='flex flex-col justify-center items-center mx-auto space-y-3 sm:space-y-5 md:items-start mt-6 md:mt-0 sm:mt-10'>
              {/* icon */}
              <div className='bg-softpurple rounded-full inline-block px-2 py-2 animate-pulse '>
                <div className='bg-babypurple rounded-full w-4 h-4 sm:h-5 sm:w-5 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5  '></div>
              </div>
              {/* text */}
              <div className='text-center space-y-1 sm:space-y-2 md:text-left'>
                <h1 className='font-bold text-babybluee sm:text-xl md:text-lg lg:text-xl xl:text-2xl'>
                  Insurance & Guarantee{' '}
                </h1>
                <p className='text-babyblack text-xs max-w-[17rem] sm:text-sm sm:max-w-xs md:text-xs xl:text-base lg:text-sm '>
                  Our comprehensive insurance and guarantee options provide
                  peace of mind, ensuring a worry-free car rental experience for
                  you. So you drive in and drive outwith confidence{' '}
                </p>
              </div>
            </div>
            {/* three */}
            <div className='flex flex-col justify-center items-center mx-auto space-y-3 sm:space-y-5 md:items-start mt-6 md:mt-0 sm:mt-10'>
              {/* icon */}
              <div className='bg-softpurple rounded-full inline-block px-2 py-2 animate-pulse '>
                <div className='bg-babypurple  rounded-full w-4 h-4 sm:h-5 sm:w-5 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 '></div>
              </div>
              {/* text */}
              <div className='text-center space-y-1 sm:space-y-2 md:text-left'>
                <h1 className='font-bold text-babybluee sm:text-xl md:text-lg lg:text-xl xl:text-2xl '>
                  Easy Booking{' '}
                </h1>
                <p className='text-babyblack text-xs max-w-[17rem] sm:text-sm sm:max-w-xs xl:text-base md:text-xs lg:text-sm '>
                  Simplicity at your fingertips. Our user-friendly Web and
                  Mobile Application booking process makes renting a car
                  hassle-free,so you can hit the road in no time.{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* feedback */}
      <section className='bg-[#FFF2FE] my-16 xl:my-24  px-8 md:px-6  lg:px-8 '>
        <div className='space-y-14 md:flex md:flex-row-reverse md:justify-center md:items-center md:space-y-0 md:gap-12  lg:gap-14 xl:gap-20 py-10 lg:py-12'>
          {/* customer */}
          <div className='flex flex-col justify-center items-center mx-auto space-y-6 xl:space-y-8 max-w-xs md:w-1/2  md:items-start md:mx-0 md:max-w-full'>
            <h1 className='font-mono font-bold text-babyblack text-2xl sm:text-2xl lg:text-3xl xl:text-4xl '>
              Customer Feedback
            </h1>
            <p className='text-xs text-center md:text-left sm:text-sm md:text-sm md:max-w-xs lg:text-base lg:max-w-sm xl:text-lg xl:max-w-md text-babyblack'>
              Since we launched the Glo Rides car rental Company in 2022, We
              have provided hundreds of customers with exceptional and
              convenient car rental services. Here’s a sneak peak of what they
              have to say about our service
            </p>
            <Link
              href='/contactus'
              className='tracking-wide transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-1000  text-white bg-babypurple px-6 py-2 rounded-md shadow-md font-bold cursor-pointer  xl:px-7 lg:py-3'
            >
              Add yours
            </Link>
          </div>
          {/* testimony */}
          <div className='max-w-xs flex justify-center items-center flex-col mx-auto md:mx-0 sm:max-w-sm  md:w-1/2 md:max-w-md lg:max-w-lg relative'>
            <Feedback />
            <div className=' absolute top-0 left-0 right-0 bg-gradient-to-b from-[#FFF2FE] to-white h-4 w-full'></div>
            <div className=' absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#FFF2FE] to-white h-4 w-full'></div>
          </div>
        </div>
      </section>
      {/* our App */}
      <section className='section-center space-y-10 md:space-y-16'>
        {/* header */}
        <div className='flex justify-center items-center mx-auto'>
          <div className='  space-y-2 md:space-y-3 xl:space-y-4'>
            <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl py-4 text-center  text-babyblack   '>
              Download{' '}
              <span className="bg-[url('/images/started.png')] bg-no-repeat bg-bottom  py-4   ">
                our Mobile App
              </span>{' '}
            </h1>
            <p className='text-sm text-center sm:text-base max-w-xs sm:max-w-sm md:text-lg md:max-w-md text-babyblack lg:text-xl lg:max-w-lg xl:text-2xl xl:max-w-xl'>
              Enjoy fast and seamless booking experience
            </p>
          </div>
        </div>
        {/* content */}

        <div className=' section-center  space-y-10 flex flex-col md:flex-row justify-center items-center md:items-center md:space-y-0    '>
          {/* image */}
          <div className='  relative  md:w-1/2'>
            <Image
              src={'/images/app.png'}
              alt='picture'
              width={1000}
              height={1000}
              className='w-64  lg:w-72 xl:w-80 object-fill  mx-auto '
            />
          </div>
          {/* text */}
          <div className='font-sans flex flex-col justify-center items-center mx-auto md:mx-0 md:items-start space-y-4 sm:space-y-6 md:w-1/2 '>
            {/* top */}
            <h2 className='text-center text-babyblack  font-bold text-2xl  md:text-left md:text-4xl md:max-w-xs lg:text-5xl lg:max-w-sm'>
              Book your rides with ease
            </h2>
            {/* paragraph */}
            <p className='text-babyblack text-sm text-center w-full  sm:text-base md:text-left lg:text-lg lg:max-w-sm  xl:max-w-md'>
              Start enjoying faster and seamless booking experience when you
              download and use the GLO RIDE mobile application. The GLORIDES app
              is available on all your favourite mobile app stores
            </p>
            <div className='flex xl:pt-4 gap-4 justify-center md:justify-start items-center'>
              <a
                // href='https://play.google.com/store/apps/details?id=com.upperlink.payguy'
                rel='noreferrer'
                target='_blank'
                className='block '
              >
                <div className='  relative md:hover:-translate-x-6 hover:shadow-xl duration-1000'>
                  <Image
                    src={'/images/appstore.png'}
                    alt='logo'
                    width={1000}
                    height={1000}
                    className='w-28 md:w-36 xl:w-40  '
                  />
                </div>
              </a>
              <a
                // href='https://play.google.com/store/apps/details?id=com.upperlink.payguy'
                rel='noreferrer'
                target='_blank'
                className='block '
              >
                <div className='  relative md:hover:translate-x-6 hover:shadow-xl duration-1000'>
                  <Image
                    src={'/images/playstore.png'}
                    alt='logo'
                    width={1000}
                    height={1000}
                    className='w-32 md:w-40 xl:w-44  '
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* updates */}
      <section className='section-center'>
        {/* cont */}
        <div className='md:flex  space-y-6 md:space-y-0  md:justify-between md:gap-6 lg:gap-12'>
          {/* image */}
          <div className='  relative md:w-1/2'>
            <Image
              src={'/images/abt4.png'}
              alt='picture'
              width={1000}
              height={1000}
              className='w-full lg:max-w-md   object-cover xl:max-w-lg  mx-auto'
            />
          </div>
          {/* blue back */}
          <div
            className=' w-full flex flex-col justify-center items-center space-y-6 md:w-1/2 md:items-start
        '
          >
            {/* text */}
            {/* top */}
            <h2 className='text-center text-babyblack  font-bold text-2xl  md:text-left lg:text-3xl  xl:text-4xl md:max-w-xs xl:max-w-md '>
              Never miss out on our Updates !
            </h2>
            {/* paragraph */}
            <p className='text-babyblack  text-sm text-center max-w-xs sm:text-base sm:max-w-sm md:max-w-xs  lg:max-w-sm   md:text-left lg:text-xl xl:text-2xl xl:max-w-md'>
              Sign up to for newsletters today and stay ahead of the crowd on
              our new release and special features
            </p>
            <Newsletter />
            {/* <Link
              href='/partnerwithus'
              className='mx-auto md:mx-0 flex px-6 md:px-5 lg:px-6 py-3 lg:py-3 text-white bg-babypurple   rounded-md shadow-md cursor-pointer text-xs sm:text-sm font-bold md:text-sm lg:text-base tracking-wide transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 '
            >
              Get Started
            </Link> */}
          </div>
        </div>
      </section>
      {/* Faq */}
      <section className='section-center space-y-10 md:space-y-16'>
        {/* header */}
        <div className='flex justify-center items-center mx-auto'>
          <div className='  space-y-2 md:space-y-3 xl:space-y-4'>
            <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl py-4 text-center  text-babyblack   '>
              Frequently Asked{' '}
              <span className="bg-[url('/images/started.png')] bg-no-repeat bg-bottom  py-4   ">
                Questions
              </span>{' '}
            </h1>
            <p className='text-sm text-center sm:text-base max-w-xs sm:max-w-sm md:text-lg md:max-w-md text-babyblack lg:text-xl lg:max-w-lg xl:text-2xl xl:max-w-xl'>
              we’ve taken the initiative to draft out some questions you might
              have about our product
            </p>
          </div>
        </div>
        {/* content */}
        <div className='space-y-4 md:space-y-8 xl:space-y-16 section-center'>
          {/* questions */}
          <section>
            {/* <!-- Main Container --> */}
            <div className=' mx-auto md:px-6 '>
              {/* <!-- Accordion Container --> */}
              <div className='max-w-4xl flex flex-col justify-center  m-8 mx-auto overflow-hidden'>
                {/* <!-- Tab 1 --> */}
                <div className='py-1 border-b outline-none group' tabIndex='1'>
                  <div className='flex items-center justify-between py-3 text-babyblack transition duration-500 cursor-pointer group ease'>
                    <div className='transition duration-500 ease text-sm md:text-base group-hover:text-babyblue'>
                      How old do I need to be to rent a car?
                    </div>

                    <div className='transition duration-500 ease group-focus:-rotate-180 group-focus:text-babyblue'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='18'
                        height='12'
                      >
                        <path
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='3'
                          d='M1 1l8 8 8-8'
                        />
                      </svg>
                    </div>
                  </div>

                  <div className='overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease'>
                    <p className='py-2 text-justify text-babyblack text-xs md:text-sm'>
                      The minimum age to rent a car varies by location and
                      rental company. In most cases, you must be at least 21
                      years old. However, some rental companies may require
                      drivers to be 25 or older. Additionally, drivers under the
                      age of 25 may be subject to a young driver surcharge.
                    </p>
                  </div>
                </div>

                {/* <!-- Tab 2 --> */}
                <div className='py-1 border-b outline-none group' tabIndex='2'>
                  <div className='flex items-center justify-between py-3 text-babyblack transition duration-500 cursor-pointer group ease'>
                    <div className='transition duration-500 ease text-sm md:text-base group-hover:text-babyblue'>
                      What documents do I need to rent a car?
                    </div>

                    <div className='transition duration-500 ease group-focus:-rotate-180 group-focus:text-babyblue'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='18'
                        height='12'
                      >
                        <path
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='3'
                          d='M1 1l8 8 8-8'
                        />
                      </svg>
                    </div>
                  </div>

                  <div className='overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease'>
                    <p className='py-2 text-justify text-babyblack text-xs md:text-sm'>
                      To rent a car, you typically need a valid driver's
                      license, a credit card in your name, and proof of
                      insurance. The driver's license must be valid and issued
                      by a recognized authority. Additionally, some rental
                      companies may require an international driving permit if
                      your license is not in English or uses a non-Roman
                      alphabet.
                    </p>
                  </div>
                </div>

                {/* <!-- Tab 3 --> */}
                <div className='py-1 border-b outline-none group' tabIndex='3'>
                  <div className='flex items-center justify-between py-3 text-babyblack transition duration-500 cursor-pointer group ease'>
                    <div className='transition duration-500 text-sm md:text-base ease group-hover:text-babyblue'>
                      Is insurance included in the rental price?
                    </div>

                    <div className='transition duration-500 ease group-focus:-rotate-180 group-focus:text-babyblue'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='18'
                        height='12'
                      >
                        <path
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='3'
                          d='M1 1l8 8 8-8'
                        />
                      </svg>
                    </div>
                  </div>

                  <div className='overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease'>
                    <p className='py-2 text-justify text-babyblack text-xs md:text-sm'>
                      Generally, basic insurance coverage, such as collision
                      damage waiver (CDW) and third-party liability, is included
                      in the rental price. However, the coverage may have a
                      deductible or exclusions. It's essential to review the
                      terms and conditions of our rental agreement or contact us
                      to understand the insurance coverage provided and consider
                      additional coverage if needed.
                    </p>
                  </div>
                </div>
                {/* <!-- Tab 4 --> */}
                <div className='py-1 border-b outline-none group' tabIndex='4'>
                  <div className='flex items-center justify-between py-3 text-babyblack transition duration-500 cursor-pointer group ease'>
                    <div className='transition duration-500 text-sm md:text-base ease group-hover:text-babyblue'>
                      What happens if I return the car late?
                    </div>

                    <div className='transition duration-500 ease group-focus:-rotate-180 group-focus:text-babyblue'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='18'
                        height='12'
                      >
                        <path
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='3'
                          d='M1 1l8 8 8-8'
                        />
                      </svg>
                    </div>
                  </div>

                  <div className='overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease'>
                    <p className='py-2 text-justify text-babyblack text-xs md:text-sm'>
                      Returning a car late will result in additional charges. We
                      have a grace period of a one hours before considering it a
                      late return. Beyond that, we charge an extra day's rental
                      fee or an hourly rate for each hour you exceed the
                      agreed-upon return time.
                    </p>
                  </div>
                </div>
                {/* <!-- Tab 5--> */}
                <div className='py-1 border-b outline-none group' tabIndex='5'>
                  <div className='flex items-center justify-between py-3 text-babyblack transition duration-500 cursor-pointer group ease'>
                    <div className='transition duration-500 ease text-sm md:text-base group-hover:text-babyblue'>
                      Can I cancel or modify my reservation?
                    </div>

                    <div className='transition duration-500 ease group-focus:-rotate-180 group-focus:text-babyblue'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='18'
                        height='12'
                      >
                        <path
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='3'
                          d='M1 1l8 8 8-8'
                        />
                      </svg>
                    </div>
                  </div>

                  <div className='overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease'>
                    <p className='py-2 text-justify text-babyblack text-xs md:text-sm'>
                      We allow car cancellations or modifications to
                      reservations, but it's subject to our policies. Typically,
                      there may be a fee for cancellations or changes made
                      within a certain time frame before the scheduled pickup.
                      It's advisable to review the our company's terms and
                      conditions regarding reservation changes or cancellations
                      or contact our customer service for assistance.
                    </p>
                  </div>
                </div>
                {/* <!-- Tab 6--> */}
                <div className='py-1 border-b outline-none group' tabIndex='6'>
                  <div className='flex items-center justify-between py-3 text-babyblack transition duration-500 cursor-pointer group ease'>
                    <div className='transition duration-500 ease text-sm md:text-base group-hover:text-babyblue'>
                      What should I do if the car breaks down during my rental?
                    </div>

                    <div className='transition duration-500 ease group-focus:-rotate-180 group-focus:text-babyblue'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='18'
                        height='12'
                      >
                        <path
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='3'
                          d='M1 1l8 8 8-8'
                        />
                      </svg>
                    </div>
                  </div>

                  <div className='overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease'>
                    <p className='py-2 text-justify text-babyblack text-xs md:text-sm'>
                      In the event of a breakdown or mechanical issue, contact
                      via our emergency hotline immediately. We will provide
                      instructions on what to do next.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* text */}
          <div className='font-sans flex flex-col justify-center items-center mx-auto md:items-center space-y-4 md:space-y-0 md:flex-row  md:justify-center md:gap-4 xl:gap-10 w-full  md:mt-8 xl:mt-20'>
            <div className='space-y-4  md:w-2/3'>
              {/* top */}
              <h2 className='text-center text-babyblack  font-bold sm:text-xl  md:text-left xl:text-3xl md:max-w-xs xl:max-w-md font-mono'>
                Can’t find the question on your mind?
              </h2>
              {/* paragraph */}
              <p className='text-babyblack text-xs text-center leading-6 sm:text-sm sm:leading-7 md:text-left md:leading-6 xl:text-base xl:max-w-md'>
                Then feel free to get in touch with one of our customer care
                representative who are readily available and eager to help you
                out
              </p>
            </div>
            <button className=' tracking-wide transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-1000 mx-auto md:mx-0 flex px-4 md:px-5 lg:px-6 py-2 lg:py-3 text-white bg-babypurple   rounded-md shadow-md cursor-pointer text-xs sm:text-sm font-bold md:text-sm lg:text-base  md-w1/3'>
              <Link href='/contactus'>Ask your Question</Link>
            </button>
          </div>
        </div>
      </section>
      {/* footer */}
      <Footer />
    </>
  )
}

export default aboutus
