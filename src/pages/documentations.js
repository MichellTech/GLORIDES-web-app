import React, { useState } from 'react'
import Header from '../components/Navigation/Navbar/usernav'
import Image from 'next/image'
import Footer from '../components/Navigation/Footer'
import { Link } from 'react-scroll'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
function Documentation() {
  const [pannel, setPannel] = useState('1')
  const router = useRouter()
  const profile =
    localStorage?.getItem('User_Profile') === null ||
    localStorage?.getItem('User_Profile') === 'undefined' ||
    localStorage?.getItem('User_Profile') === undefined
      ? []
      : JSON?.parse(localStorage?.getItem('User_Profile'))
  return (
    <>
      {/* hero */}
      <div className='bg-babygreen overflow-x-hidden'>
        <Header />
        <div
          data-aos='fade-down'
          data-aos-duration='2000'
          data-aos-delay='100'
          className='  mt-10  md:my-0  max-w-xs sm:max-w-md mx-auto md:max-w-3xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl px-4 md:px-6  lg:px-8'
        >
          {/* container */}
          <div className=' space-y-6 sm:space-y-10 md:flex justify-between items-center'>
            {/* text */}
            <div className=' space-y-4 md:w-1/2'>
              <h1 className='font-black  font-mono text-center md:text-left text-3xl  max-w-sm mx-auto sm:text-4xl sm:max-w-full md:mx-0 text-babyblack leading-10 md:text-[2.1rem] md:w-full sm:leading-[2.8rem] lg:text-4xl lg:leading-[3rem] xl:text-5xl xl:max-w-full xl:leading-[3.5rem]'>
                Explore our well-organized and easy-to-navigate documentation
              </h1>
              <p className='text-center text-sm md:text-left max-w-xs mx-auto md:mx-0 text-babyblack leading-5 font-medium sm:text-sm sm:max-w-full md:text-base lg:max-w-sm lg:text-lg xl:max-w-full xl:text-lg'>
                Here you'll find detailed guidelines and policies,drafted to
                ensure that you have all the information you need to make the
                most of our services. We're committed to providing you with a
                seamless experience and empowering you with knowledge. Let's
                embark on this journey together!
              </p>
              {/* get in touch */}
              <button className='mx-auto md:mx-0 flex px-4 md:px-5 lg:px-6 py-2 lg:py-3 text-white bg-babypurple   rounded-md shadow-md cursor-pointer text-xs sm:text-sm font-bold md:text-sm lg:text-base tracking-wide'>
                <Link
                  activeClass='active'
                  to='started'
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={500}
                >
                  Get Started
                </Link>
              </button>
            </div>
            {/* photo */}
            <div className='  relative md:w-1/2'>
              <Image
                src={'/images/doc.png'}
                alt='logo'
                width={1000}
                height={1000}
                className='max-w-xs sm:max-w-sm xl:max-w-md mx-auto  '
              />
            </div>
          </div>
        </div>
      </div>
      {/* documentation */}
      <div className=' section-center mt-20 lg:mt-32 space-y-10 md:space-y-12 lg:space-y-16 xl:space-y-20  flex flex-col items-center justify-center mx-auto '>
        {/*  Headline*/}
        <div className='flex flex-col justify-center items-center space-y-4 '>
          <h1 className='text-babypurple font-extrabold relative w-max sm:text-2xl md:text-xl lg:text-2xl  xl:text-3xl'>
            Our Documentations{' '}
            <span>
              <div className='bg-softpurple w-full h-4  absolute -bottom-1  left-0 -z-20'></div>
            </span>
          </h1>
          {/* top */}
          <h2 className='text-center text-babyblack  font-bold sm:text-xl   xl:text-3xl md:max-w-xs xl:max-w-lg font-mono'>
            Here are the policies guiding our business operations
          </h2>
        </div>
        {/* cont */}
        {/* floating tab */}
        <div id='started' className='mt-4 md:mt-8'>
          {/* tab-headers */}
          <div className=' flex flex-col  md:flex-row justify-center items-center gap-6 md:gap-10   '>
            {/* tab-1 */}
            <div className='  cursor-pointer flex flex-col justify-start md:items-start relative  items-center w-max '>
              <h5
                className='text-darkGrayishBlue font-bold text-center font-alata text-xs md:text-base  xl:text-xl '
                onClick={() => setPannel('1')}
              >
                Privacy Policy
              </h5>
              {pannel === '1' ? (
                <div className='border absolute -bottom-2 md:-bottom-5  border-b md:border-b-2 border-babypurple mx-auto mt-1  md:mt-4   w-full  '>
                  <div></div>
                </div>
              ) : (
                ''
              )}
            </div>
            {/* tab-2 */}
            <div className='cursor-pointer flex flex-col justify-start md:items-start relative  items-center w-max  '>
              <h5
                className='text-darkGrayishBlue text-center font-bold font-alata text-xs md:text-base  xl:text-xl '
                onClick={() => setPannel('2')}
              >
                Terms and Conditions
              </h5>
              {pannel === '2' ? (
                <div className='border absolute -bottom-2 md:-bottom-5  border-b md:border-b-2 border-babypurple mx-auto mt-1  md:mt-4   w-full '></div>
              ) : (
                ''
              )}
            </div>
            {/* tab-3 */}
            <div className='cursor-pointer flex flex-col justify-start md:items-start relative  items-center w-max '>
              <h5
                className='text-darkGrayishBlue font-bold font-alata text-xs md:text-base text-center  xl:text-xl '
                onClick={() => setPannel('3')}
              >
                Cookies Policy
              </h5>
              {pannel === '3' ? (
                <div className='border absolute -bottom-2 md:-bottom-5  border-b md:border-b-2 border-babypurple mx-auto mt-1  md:mt-4    w-full '></div>
              ) : (
                ''
              )}
            </div>
          </div>
          <div className='border-b border mt-4 md:max-w-2xl xl:max-w-4xl mx-auto w-max'></div>
          {/* tab-containers */}
          <div className='mt-12  lg:mt-16 '>
            {/* benefits */}
            {pannel === '1' ? (
              <div className=' space-y-6  md:space-y-8 xl:space-y-10'>
                <div className=' space-y-3  md:space-y-4 xl:space-y-5'>
                  <h1 className='font-bold text-xl md:text-2xl xl:text-3xl'>
                    Introduction
                  </h1>
                  <p className='text-xs text-justify leading-5 md:leading-6 xl:leading-7 md:text-sm xl:text-base'>
                    Gloride car rental values your Personal Data and we are
                    committed to protecting your privacy whenever you interact
                    with us through Gloride services which include all pages
                    within the Gloride website, mobile applications and other
                    products and services (collectively referred to as the
                    “Gloride Service Channels”, Gloride Services” or
                    “Services”). Please read this Privacy Policy (the “Policy”)
                    to understand our policies, processes, and procedures
                    regarding the processing of your personal data. By this
                    Policy, we explain to you how your Personal Data is
                    collected, used, managed, transferred and or deleted on the
                    Gloride Service Channels and also explain how you can update
                    your Personal Data with us and exercise your rights in
                    respect of your Personal Data provided to us.{' '}
                  </p>
                </div>
                <div className=' space-y-3  md:space-y-4 xl:space-y-5'>
                  <h1 className='font-bold text-xl md:text-2xl xl:text-3xl'>
                    The Information We Collect{' '}
                  </h1>
                  <p className='text-xs text-justify leading-5 md:leading-6 xl:leading-7 md:text-sm xl:text-base'>
                    To access the Gloride Services and for optimal use of the
                    services, we collect personally identifiable Information
                    which you voluntarily provide to us. Personally identifiable
                    information refers to the personal information you submit,
                    when you sign up or any information that can be used to
                    identify or contact you (For example, email address,
                    password, name, address, telephone number, business name,
                    camera sensor data, bank details, and other unique
                    identifiers including but not limited to MAC address, IP
                    address, IMEI number, IMSI number, SIM and others). For ease
                    of transacting, we may also collect your contact details,
                    only if you permit us to do so. We also collect
                    non-personally identifiable information including but not
                    limited to dynamic IP address, geolocation data, screen size
                    and cookies data. We use technical methods to collect and
                    store personal information such as cookies, JWT, web beacons
                    etc. We will not share or disclose these information’s with
                    third parties except as a necessary part of providing our
                    users with access to the Gloride Services. By visiting the
                    Gloride Service Channels and using the Gloride Services, you
                    agree to our use of cookies in line with our policies.
                  </p>
                </div>
                <div className=' space-y-3  md:space-y-4 xl:space-y-5'>
                  <h1 className='font-bold text-xl md:text-2xl xl:text-3xl'>
                    Uses of Information
                  </h1>
                  <p className='text-xs text-justify leading-5 md:leading-6 xl:leading-7 md:text-sm xl:text-base'>
                    We use your personally identifiable information to:
                    <li>provide our services and provide customer support;</li>
                    <li>profile Gloride users;</li>
                    <li>
                      resolve disputes, collect fees and troubleshoot problems;
                    </li>
                    <li>
                      {' '}
                      prevent potentially prohibited or illegal activities;
                    </li>
                    <li>
                      enforce our Terms and Conditions of Use; customize,
                      measure and improve our services;{' '}
                    </li>
                    <li>
                      customize and improve the layout of the Gloride Service
                      Channels;
                    </li>
                    <li>
                      compare information for accuracy and verify with third
                      parties;
                    </li>
                    <li>update our databases and provide user support;</li>
                    <li>
                      provide you with information about other goods and
                      services we offer that are similar to those that you have
                      already purchased or enquired about.
                    </li>
                  </p>
                </div>
                <div className=' space-y-3  md:space-y-4 xl:space-y-5'>
                  <h1 className='font-bold text-xl md:text-2xl xl:text-3xl'>
                    What Constitutes your Consent?
                  </h1>
                  <p className='text-xs text-justify leading-5 md:leading-6 xl:leading-7 md:text-sm xl:text-base'>
                    Where processing of Personal Data is based on consent, we
                    shall obtain the requisite consent at the time of collection
                    of the Personal Data. In this regard, you consent to the
                    processing of your Personal Data when you access our Gloride
                    Service Channels, or use our services, content, features,
                    technologies, or functions offered on the Gloride Service
                    Channels. You can withdraw your consent at any time, but
                    such withdrawal will not affect the processing of your data
                    which we carried out lawfully based on consent given before
                    your withdrawal. We may retrieve Personal Information about
                    you from third parties and other identification/verification
                    services such as your financial Institution, payment
                    processor and verification services. With your consent, we
                    may also collect additional Personal Information in other
                    ways including emails, surveys, and other forms of
                    communication. Once you begin using our Gloride Services
                    Channels, we will keep records of your transactions and
                    collect information of your other activities related to our
                    Gloride services. We will not share or disclose your
                    Personal Information with a third party without your
                    consent. We will not use your information or seek your
                    consent to use your information for the propagation of
                    atrocities, hate, child rights violation, criminal acts and
                    anti-social conducts.
                  </p>
                </div>

                <div className=' space-y-3  md:space-y-4 xl:space-y-5'>
                  <h1 className='font-bold text-xl md:text-2xl xl:text-3xl'>
                    {' '}
                    Sharing of Information{' '}
                  </h1>
                  <p className='text-xs text-justify leading-5 md:leading-6 xl:leading-7 md:text-sm xl:text-base'>
                    We assure you that we shall only obtain your data with your
                    consent and that your data shall only be used for the
                    purpose for which it was obtained. However, we may share
                    your Personal Data with billers on the Gloride Service
                    Channels or service providers engaged by us to provide
                    services to Gloride, subject to appropriate data security
                    and protection. In addition, we may transfer your Personal
                    Data out of Nigeria in line with the requirements of the
                    Nigeria Data Protection Regulation, 2019. We shall also
                    share your Personal Data with third parties directly
                    authorized by you to receive Personal Information, such as
                    when you authorize a third-party service provider to access
                    your account. The use of your personal information by an
                    authorized third party shall be subject to the privacy
                    policy of the third-party and we shall not bear any
                    liability for any breach which might arise due to your
                    authorization. We shall also share your Personal Information
                    if it is believed that such sharing is required to satisfy
                    any applicable laws, regulation or government request.
                    Gloride may contain third-party links or links to other
                    websites. Please be advised that we are not responsible for
                    the privacy practices or contents of these sites and shall
                    not be responsible for your use of such websites. We
                    encourage you to be aware of when you leave Gloride Service
                    Channels and to read the privacy statements of these sites.
                    You should evaluate the security and trustworthiness of any
                    other site connected to Gloride Service Channels or accessed
                    through Gloride Service Channels, before disclosing any
                    personal information to them. We will not accept any
                    responsibility for any loss or damage in whatever manner
                    resulting from your disclosure of your personal information
                    to third parties. However, we shall also make all reasonable
                    efforts to ensure that adequate safeguards have been put in
                    place to prevent unauthorized access and to ensure
                    confidentiality of your personal information.
                  </p>
                </div>
                <div className=' space-y-3  md:space-y-4 xl:space-y-5'>
                  <h1 className='font-bold text-xl md:text-2xl xl:text-3xl'>
                    Privacy Policy Updates
                  </h1>
                  <p className='text-xs text-justify leading-5 md:leading-6 xl:leading-7 md:text-sm xl:text-base'>
                    We reserve the right to change, revise or modify this
                    Privacy Policy from time to time. The changes will not be
                    retroactive, and the most current version of the Policy
                    which will always be on this page will continue to govern
                    our relationship with you. We will also try to notify you of
                    any material changes which could be done via email
                    associated with your account or service notification. By
                    continuing to use our services after the changes become
                    effective, you agree to be bound by the revised Policy.
                  </p>
                </div>
                <div className=' space-y-3  md:space-y-4 xl:space-y-5'>
                  <h1 className='font-bold text-xl md:text-2xl xl:text-3xl'>
                    Security
                  </h1>
                  <p className='text-xs text-justify leading-5 md:leading-6 xl:leading-7 md:text-sm xl:text-base'>
                    {' '}
                    We are committed to managing customer information with the
                    highest standards of information security. We protect your
                    personal information using physical, technical and
                    administrative security measures to reduce the risks of
                    loss, misuse, unauthorized access, disclosure and
                    alteration. We use computer safeguards such as firewalls and
                    data encryption, enforce physical access to our buildings
                    and files and only authorise access to personal information
                    to only employees who require it to fulfil their job
                    responsibilities.
                  </p>
                </div>
                <div className=' space-y-3  md:space-y-4 xl:space-y-5'>
                  <h1 className='font-bold text-xl md:text-2xl xl:text-3xl'>
                    Inquires
                  </h1>
                  <p className='text-xs text-justify leading-5 md:leading-6 xl:leading-7 md:text-sm xl:text-base'>
                    We are responsible for ensuring that our day-to-day
                    procedures are aligned with this Privacy Policy. Should you
                    have any questions about this Privacy Policy, you can reach
                    out to us via{' '}
                    <span className='font-bold text-babypurple'>
                      support@gloridesus.com
                    </span>
                  </p>
                </div>
              </div>
            ) : pannel === '3' ? (
              <div className=' space-y-6  md:space-y-8 xl:space-y-10'>
                <div className=' space-y-3  md:space-y-4 xl:space-y-5'>
                  <h1 className='font-bold text-xl md:text-2xl xl:text-3xl'>
                    Introduction
                  </h1>
                  <p className='text-xs text-justify leading-5 md:leading-6 xl:leading-7 md:text-sm xl:text-base'>
                    Gloride car rental may use cookies, web beacons, tracking
                    pixels, and other tracking technologies when you use Gloride
                    services which include all pages within the Gloride web
                    services, mobile applications and other products and
                    services (collectively referred to as “Gloride Service
                    Channels”, “Gloride Services” or “Services") to help
                    customize the Gloride Services and improve your experience.{' '}
                    <br /> <br />
                    We reserve the right to make changes to this Cookies Policy
                    at any time and for any reason. We will alert you about any
                    changes by updating the “Last Updated” date of this Cookies
                    Policy. Any changes or modifications will be effective
                    immediately upon posting the updated Cookie Policy on
                    Gloride Service Channels, and you waive the right to receive
                    specific notice of each such change or modification. <br />{' '}
                    <br />
                    You are encouraged to periodically review this Cookies
                    Policy to stay informed of updates. You will be deemed to
                    have been made aware of, will be subject to, and will be
                    deemed to have accepted the changes in any revised Cookies
                    Policy by your continued use of Gloride after the date such
                    revised Cookies Policy is posted.
                  </p>
                </div>
                <div className=' space-y-3  md:space-y-4 xl:space-y-5'>
                  <h1 className='font-bold text-xl md:text-2xl xl:text-3xl'>
                    Use of Cookies{' '}
                  </h1>
                  <p className='text-xs text-justify leading-5 md:leading-6 xl:leading-7 md:text-sm xl:text-base'>
                    A “cookie” is a string of information which assigns you a
                    unique identifier that we store on your computer. Your
                    browser then provides that unique identifier to use each
                    time you submit a query on Gloride Service Channels. We use
                    cookies on the Gloride Service Channels to, among other
                    things, keep track of services you have used, record
                    registration information, record your user preferences, keep
                    you logged into the Gloride Service Channels, facilitate
                    purchase procedures, and track the pages you visit. Cookies
                    help us understand how the Gloride Service Channels are
                    being used and improve your user experience
                  </p>
                </div>
                <div className=' space-y-3  md:space-y-4 xl:space-y-5'>
                  <h1 className='font-bold text-xl md:text-2xl xl:text-3xl'>
                    Types of Cookies
                  </h1>
                  <p className='text-xs text-justify leading-5 md:leading-6 xl:leading-7 md:text-sm xl:text-base'>
                    The following types of cookies may be used when you use the
                    Gloride Service Channels.
                    <li>
                      <span className='font-bold'> Advertising Cookies: </span>
                      Advertising Cookies are placed on your browsers by
                      advertisers and ad servers in order to display
                      advertisements that are most likely to be of interest to
                      you. These cookies allow advertisers and ad servers to
                      gather information about your visits to the Gloride
                      Service Channels, alternate the ads sent to a specific
                      computer, and track how often an ad has been viewed and by
                      whom. These cookies are linked to a computer and do not
                      gather any personal information about you.
                    </li>
                    <li>
                      <span className='font-bold'> Analytics Cookies: </span>
                      Analytics Cookies monitors how users reached the Gloride
                      Service Channels, and how they interact with and move
                      around once on the Gloride Service Channels. These cookies
                      let us know what features on the Gloride Service Channels
                      are working the best and what features on the Gloride
                      Service Channels can be improved
                    </li>
                    <li>
                      <span className='font-bold'> Our Cookies: </span>
                      Our cookies are “first-party cookies”, and can be either
                      permanent or temporary. These are necessary cookies,
                      without which the Gloride Service Channels won't work
                      properly or be able to provide certain features and
                      functionalities. Some of these may be manually disabled in
                      your browser, but may affect the functionality of the
                      Gloride Service Channels.
                    </li>
                    <li>
                      {' '}
                      <span className='font-bold'>
                        {' '}
                        Personalization Cookies:
                      </span>
                      Personalization Cookies are used to recognize repeat
                      visitors to the Gloride Service Channels. We use these
                      cookies to record your browsing history, the pages you
                      have visited, and your settings and preferences each time
                      you visit the Gloride Service Channels.
                    </li>
                    <li>
                      <span className='font-bold'> Security Cookies:</span>
                      Security cookies help identify and prevent security risks.
                      We use these cookies to authenticate users and protect
                      user data from unauthorized parties.
                    </li>
                    <li>
                      <span className='font-bold'> Management Cookies:</span>
                      The management cookies are used to maintain your identity
                      or session on the Gloride Service Channels so that you are
                      not logged off unexpectedly, and any information you enter
                      is retained from page to page. These cookies cannot be
                      turned off individually, but you can disable all cookies
                      in your browser.
                    </li>
                    <li>
                      <span className='font-bold'> Third-Party Cookies:</span>
                      Third-party cookies may be placed on your computer when
                      you visit the Gloride Service Channels by billers and
                      service providers on Gloride Service Channels. These
                      cookies allow the third parties to gather and track
                      certain information about you. These cookies can be
                      manually disabled in your browser.
                    </li>
                  </p>
                </div>
                <div className=' space-y-3  md:space-y-4 xl:space-y-5'>
                  <h1 className='font-bold text-xl md:text-2xl xl:text-3xl'>
                    Cookies Control
                  </h1>
                  <p className='text-xs text-justify leading-5 md:leading-6 xl:leading-7 md:text-sm xl:text-base'>
                    Most browsers are set to accept cookies by default. However,
                    you can remove or reject cookies in your browser’s settings.
                    Please be aware that such action could affect the
                    availability and functionality of the Gloride Service
                    Channels.
                  </p>
                </div>

                <div className=' space-y-3  md:space-y-4 xl:space-y-5'>
                  <h1 className='font-bold text-xl md:text-2xl xl:text-3xl'>
                    {' '}
                    Other Tracking Technologies{' '}
                  </h1>
                  <p className='text-xs text-justify leading-5 md:leading-6 xl:leading-7 md:text-sm xl:text-base'>
                    In addition to cookies, we may use web beacons, pixel tags,
                    and other tracking technologies on the Gloride Service
                    Channels to help customize our services and improve your
                    experience. A “web beacon” or “pixel tag” is a tiny object
                    or image embedded in a web page or email. They are used to
                    track the number of users who have visited particular pages
                    and viewed emails, and acquire other statistical data. They
                    collect only a limited set of data, such as a cookie number,
                    time and date of page or email view, and a description of
                    the page or email on which they reside. Web beacons and
                    pixel tags cannot be declined. However, you can limit their
                    use by controlling the cookies that interact with them.
                  </p>
                </div>
                <div className=' space-y-3  md:space-y-4 xl:space-y-5'>
                  <h1 className='font-bold text-xl md:text-2xl xl:text-3xl'>
                    Privacy Policy
                  </h1>
                  <p className='text-xs text-justify leading-5 md:leading-6 xl:leading-7 md:text-sm xl:text-base'>
                    For more information about how we use information collected
                    by cookies and other tracking technologies, please refer to
                    our Privacy Policy. This Cookie Policy is part of and is
                    incorporated into our Privacy Policy. By using the Services,
                    you agree to be bound by this Cookies Policy and our Privacy
                    Policy.
                  </p>
                </div>
                <div className=' space-y-3  md:space-y-4 xl:space-y-5'>
                  <h1 className='font-bold text-xl md:text-2xl xl:text-3xl'>
                    Contact Us
                  </h1>
                  <p className='text-xs text-justify leading-5 md:leading-6 xl:leading-7 md:text-sm xl:text-base'>
                    {' '}
                    All access requests, questions, comments, complaints and
                    other requests regarding the cookies policy should be sent
                    to{' '}
                    <span className='text-babypurple text-decoration-line: underline'>
                      support@gloridesus.com
                    </span>
                  </p>
                </div>
              </div>
            ) : (
              <div className=' space-y-6  md:space-y-8 xl:space-y-10'>
                <div className=' space-y-3  md:space-y-4 xl:space-y-5'>
                  <h1 className='font-bold text-xl md:text-2xl xl:text-3xl'>
                    Introduction
                  </h1>
                  <p className='text-xs text-justify leading-5 md:leading-6 xl:leading-7 md:text-sm xl:text-base '>
                    These Terms and Conditions ("Terms") constitute a legal
                    agreement between you, as a prospective customer of Gloride
                    car rental, including its agents, assigns, and successors in
                    title, regarding the Gloride services. These Terms govern
                    your access to and use of all pages within the Gloride
                    website, mobile applications, and other products and
                    services (collectively referred to as the "Gloride Services
                    Channels", "Gloride Services" or "Services"). By accessing
                    or using any of the Services, you agree to be bound by these
                    Terms in full and without limitation or qualification,
                    including our Privacy and Cookies Policy. If you do not
                    agree to these Terms, you must not use any of the Services.
                    <br />
                    <br />
                    <span className=' font-bold'>
                      PLEASE READ AND UNDERSTAND THE TERMS OF THIS AGREEMENT
                      CAREFULLY BEFORE AGREEING TO BE BOUND BY ITS TERMS.
                    </span>
                  </p>
                </div>
                <div className=' space-y-3  md:space-y-4 xl:space-y-5'>
                  <h1 className='font-bold text-xl md:text-2xl xl:text-3xl'>
                    Use of the Services
                  </h1>
                  <p className='text-xs text-justify leading-5 md:leading-6 xl:leading-7 md:text-sm xl:text-base'>
                    You may use the Gloride Services only if you agree to form a
                    binding contract with Gloride and are not a person barred
                    from receiving the services under the laws of Nigeria. If
                    you are accepting these Terms and using the Services on
                    behalf of a company, business, or organization, you
                    represent and warrant that you are authorized to do so.
                  </p>
                </div>
                <div className=' space-y-3  md:space-y-4 xl:space-y-5'>
                  <h1 className='font-bold text-xl md:text-2xl xl:text-3xl'>
                    Age Restriction
                  </h1>
                  <p className='text-xs text-justify leading-5 md:leading-6 xl:leading-7 md:text-sm xl:text-base'>
                    The services are directed to individuals aged 18 and above.
                    You are only permitted to use the Services if you are aged
                    18 or older. We do not knowingly engage with individuals
                    younger than the age of 18.
                  </p>
                </div>

                <div className=' space-y-3  md:space-y-4 xl:space-y-5'>
                  <h1 className='font-bold text-xl md:text-2xl xl:text-3xl'>
                    {' '}
                    Intellectual Property{' '}
                  </h1>
                  <p className='text-xs text-justify leading-5 md:leading-6 xl:leading-7 md:text-sm xl:text-base'>
                    Unless otherwise stated, Gloride and/or its licensors own
                    the intellectual property rights and materials within the
                    Gloride Service Channels. All content, including text,
                    formatting, graphics, animation, tools, commercials, music,
                    video, articles, sound, copy, trade names, logos, and other
                    materials, are subject to the intellectual property rights
                    of Gloride and its affiliates and their licensors and
                    licensees (collectively the "Content"). You are not granted
                    any right, license, title, or interest to any of our
                    intellectual property rights. You agree not to copy,
                    reverse-engineer, decompile, disassemble, modify, or repost
                    any Content without prior written permission. You also agree
                    not to use any Trademark displayed on the Gloride Service
                    Channels without written permission.
                  </p>
                </div>
                <div className=' space-y-3  md:space-y-4 xl:space-y-5'>
                  <h1 className='font-bold text-xl md:text-2xl xl:text-3xl'>
                    License to Use the Gloride Service Channels
                  </h1>
                  <p className='text-xs text-justify leading-5 md:leading-6 xl:leading-7 md:text-sm xl:text-base'>
                    We grant you a non-assignable, non-exclusive, and revocable
                    license to use the software provided as part of our
                    services. This license includes all updates, upgrades, new
                    versions, and replacement software for use in connection
                    with our services. The services are protected by copyright,
                    trademark, and other laws. You agree not to alter,
                    reproduce, adapt, display, distribute, translate,
                    disassemble, reverse engineer, or attempt to create any
                    source code derived from the Gloride software.
                  </p>
                </div>
                <div className=' space-y-3  md:space-y-4 xl:space-y-5'>
                  <h1 className='font-bold text-xl md:text-2xl xl:text-3xl'>
                    Information Security and Warranty Disclaimer
                  </h1>
                  <p className='text-xs text-justify leading-5 md:leading-6 xl:leading-7 md:text-sm xl:text-base text-transform: lowercase first-letter:uppercase'>
                    {' '}
                    Gloride endeavors to ensure that the Gloride Service
                    Channels are available and bug-free, however, they are used
                    at your own risk. We provide all materials "as is" with no
                    warranty, express or implied, of any kind. We expressly
                    disclaim any and all warranties and conditions, including
                    any implied warranty or condition of merchantability,
                    fitness for a particular purpose, availability, security,
                    title, and non-infringement of intellectual property rights.
                    We make no warranty that our services will meet your
                    requirements or remain free from interruption, bugs,
                    inaccuracies, or errors. Your use of our services is at your
                    own risk, and you alone will be responsible for any
                    resulting damage.
                  </p>
                </div>
                <div className=' space-y-3  md:space-y-4 xl:space-y-5'>
                  <h1 className='font-bold text-xl md:text-2xl xl:text-3xl'>
                    Fees, Charges and Payment Terms
                  </h1>
                  <p className='text-xs text-justify leading-5 md:leading-6 xl:leading-7 md:text-sm xl:text-base'>
                    When you initiate and confirm a transaction on Gloride
                    Service Channels, you agree to be bound by and pay for that
                    transaction. All completed transactions are final, so do not
                    commit to a transaction unless you are ready to pay and have
                    ensured the accuracy of all provided information. You may
                    make payments using various funding sources like linked bank
                    accounts and/or bank cards. By providing a funding source,
                    you authorize the collection, storage, crediting, and
                    debiting of your chosen source for transactions on Gloride.
                    We reserve the right to disclose payment details to
                    designated parties for the prevention of financial loss or
                    law enforcement purposes.
                  </p>
                </div>
                <div className=' space-y-3  md:space-y-4 xl:space-y-5'>
                  <h1 className='font-bold text-xl md:text-2xl xl:text-3xl'>
                    Transactions
                  </h1>
                  <p className='text-xs text-justify leading-5 md:leading-6 xl:leading-7 md:text-sm xl:text-base'>
                    When making a payment to a Biller on Gloride Service
                    Channels, you will confirm the transaction and may be
                    required to enter your Personal Identification Number (PIN).
                    By entering your PIN, you confirm that you authorized the
                    transaction, which cannot be directly reversed or canceled
                    once approved.
                  </p>
                </div>
                <div className=' space-y-3  md:space-y-4 xl:space-y-5'>
                  <h1 className='font-bold text-xl md:text-2xl xl:text-3xl'>
                    Security and Unauthorized Use
                  </h1>
                  <p className='text-xs text-justify leading-5 md:leading-6 xl:leading-7 md:text-sm xl:text-base'>
                    You are responsible for the safekeeping and proper use of
                    your security data, including PIN, username, and password.
                    You are liable for all transactions on your account with
                    your PIN and indemnify us against any claims arising from
                    such transactions. If you suspect your security data has
                    been compromised, you must contact Customer Services
                    immediately @ support@gloridesus.com. We reserve the right
                    to suspend your account in case of suspected fraudulent,
                    negligent, or illegal activities.
                  </p>
                </div>
                <div className=' space-y-3  md:space-y-4 xl:space-y-5'>
                  <h1 className='font-bold text-xl md:text-2xl xl:text-3xl'>
                    Disputes and Refunds
                  </h1>
                  <p className='text-xs text-justify leading-5 md:leading-6 xl:leading-7 md:text-sm xl:text-base'>
                    Notify us immediately of any unauthorized or problematic
                    transaction to prevent financial loss. Claims related to
                    payments must be made within thirty (30) days, after which
                    you waive all claims against us. You are responsible for
                    indemnifying us for any liability arising from authorized
                    payments. Disputes over goods or services purchased from
                    third parties are not our liability.
                  </p>
                </div>
                <div className=' space-y-3  md:space-y-4 xl:space-y-5'>
                  <h1 className='font-bold text-xl md:text-2xl xl:text-3xl'>
                    Suspension and Closure of Accounts
                  </h1>
                  <p className='text-xs text-justify leading-5 md:leading-6 xl:leading-7 md:text-sm xl:text-base'>
                    We may suspend, restrict, or terminate our services or close
                    your account under certain circumstances, including at your
                    request, loss or theft of your phone or compromised PIN,
                    suspicion of fraudulent or illegal activities, or breach of
                    these Terms.
                  </p>
                </div>
                <div className=' space-y-3  md:space-y-4 xl:space-y-5'>
                  <h1 className='font-bold text-xl md:text-2xl xl:text-3xl'>
                    Account Deletion
                  </h1>
                  <p className='text-xs text-justify leading-5 md:leading-6 xl:leading-7 md:text-sm xl:text-base'>
                    You may delete your Account at any time, upon which your
                    records and personal data will be deleted, except as
                    required by applicable laws on data retention.click {''}
                    <span
                      onClick={() => {
                        if (profile?.firstname) {
                          router.push({
                            pathname: '/userprofile/delete',
                          })
                        } else {
                          toast.error('please login to get started')
                          router.push({
                            pathname: '/auth/login',
                          })
                        }
                      }}
                      className='text-babypurple font-bold cursor-pointer'
                    >
                      here
                    </span>{' '}
                    to delete your account
                  </p>
                </div>
                <div className=' space-y-3  md:space-y-4 xl:space-y-5'>
                  <h1 className='font-bold text-xl md:text-2xl xl:text-3xl'>
                    Limitation of Liability
                  </h1>
                  <p className='text-xs text-justify leading-5 md:leading-6 xl:leading-7 md:text-sm xl:text-base text-transform: lowercase first-letter:uppercase'>
                    Gloride will not be liable for any direct, indirect,
                    incidental, punitive, consequential, special, or exemplary
                    damages arising from your use of the Gloride Service
                    Channels or Services.
                  </p>
                </div>
                <div className=' space-y-3  md:space-y-4 xl:space-y-5'>
                  <h1 className='font-bold text-xl md:text-2xl xl:text-3xl'>
                    Indemnification
                  </h1>
                  <p className='text-xs text-justify leading-5 md:leading-6 xl:leading-7 md:text-sm xl:text-base'>
                    You indemnify Gloride against any losses, damages, costs,
                    liabilities, and expenses arising from your breach of these
                    Terms or any claim alleging such breach.
                  </p>
                </div>
                <div className=' space-y-3  md:space-y-4 xl:space-y-5'>
                  <h1 className='font-bold text-xl md:text-2xl xl:text-3xl'>
                    Breaches of these Terms
                  </h1>
                  <p className='text-xs text-justify leading-5 md:leading-6 xl:leading-7 md:text-sm xl:text-base'>
                    Gloride may take appropriate action, including suspending
                    your access to the Gloride Service Channels, in response to
                    any breach of these Terms.
                  </p>
                </div>
                <div className=' space-y-3  md:space-y-4 xl:space-y-5'>
                  <h1 className='font-bold text-xl md:text-2xl xl:text-3xl'>
                    Data Protection
                  </h1>
                  <p className='text-xs text-justify leading-5 md:leading-6 xl:leading-7 md:text-sm xl:text-base'>
                    Gloride processes Personal Information in compliance with
                    all applicable Data Protection Laws, including the Nigeria
                    Data Protection Regulation 2019. By using the Gloride
                    Services, you consent to such processing and agree to
                    provide accurate information.
                  </p>
                </div>

                <div className=' space-y-3  md:space-y-4 xl:space-y-5'>
                  <h1 className='font-bold text-xl md:text-2xl xl:text-3xl'>
                    Governing Law and Language
                  </h1>
                  <p className='text-xs text-justify leading-5 md:leading-6 xl:leading-7 md:text-sm xl:text-base'>
                    These Terms are governed by the laws of the Federal Republic
                    of Nigeria. Any disputes shall be resolved by the Courts
                    located in Nigeria.
                  </p>
                </div>
                <div className=' space-y-3  md:space-y-4 xl:space-y-5'>
                  <h1 className='font-bold text-xl md:text-2xl xl:text-3xl'>
                    Changes to the Terms of Use
                  </h1>
                  <p className='text-xs text-justify leading-5 md:leading-6 xl:leading-7 md:text-sm xl:text-base'>
                    Gloride reserves the right to change, revise or modify these
                    Terms from time to time. The changes will not be
                    retroactive, and the most current version of the Terms which
                    will always be on this page will continue to govern our
                    relationship with you. We will also try to notify you of any
                    material changes which could be done via email associated
                    with your account or service notification. By continuing to
                    use our services after the changes become effective, you
                    agree to be bound by the revised Terms.
                  </p>
                </div>
                <div className=' space-y-3  md:space-y-4 xl:space-y-5'>
                  <h1 className='font-bold text-xl md:text-2xl xl:text-3xl'>
                    General
                  </h1>
                  <p className='text-xs text-justify leading-5 md:leading-6 xl:leading-7 md:text-sm xl:text-base'>
                    Gloride reserves the right to change, revise, or modify
                    these Terms. The most current version of the Terms will
                    govern our relationship with you. By continuing to use our
                    services after the changes become effective, you agree to be
                    bound by the revised Terms.
                  </p>
                </div>
                <div className=' space-y-3  md:space-y-4 xl:space-y-5'>
                  <h1 className='font-bold text-xl md:text-2xl xl:text-3xl'>
                    Notices and Complaints
                  </h1>
                  <p className='text-xs text-justify leading-5 md:leading-6 xl:leading-7 md:text-sm xl:text-base'>
                    The physical address, email address or telephone number you
                    supply during sign-up are regarded as the preferred channels
                    via which notices may be given and documents in legal
                    proceedings may be served. You must notify us immediately
                    should your physical, postal, email address or mobile phone
                    number change. <br />
                    <br />
                    We are entitled to send information to you via SMS to the
                    registered phone number associated with your account and as
                    amended from time to time.
                    <br />
                    <br />
                    We are entitled to send any notice to an email address
                    specified on your account.
                    <br />
                    <br />
                    Any correspondence that we send to you by courier or post
                    will be considered to have arrived within seven (7) days of
                    sending and any correspondence that we send to you by email
                    or SMS will be considered to have arrived on the day that it
                    was sent to you, unless the contrary is proved.
                    <br />
                    <br />
                    You should send any legal notice to us by post to our
                    address being: 10205 N Lamar Blvd Austin TX 78753, ste 113.
                    <br />
                    <br />
                    If you have any complaints about us and our Services, you
                    may reach out to us via{' '}
                    <span className='text-babyblue  text-decoration-line: underline'>
                      support@gloridesus.com
                    </span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* footer */}
      <div className='mt-28 md:mt-32 xl:mt-40'>
        <Footer />
      </div>
    </>
  )
}

export default Documentation
