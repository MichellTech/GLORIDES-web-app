import React, { useState } from 'react'
import Header from '../components/Navigation/Navbar/usernav'
import Image from 'next/image'
import Footer from '../components/Navigation/Footer'
import { Link } from 'react-scroll'
import { useRouter } from 'next/router'
function Documentation() {
  const [pannel, setPannel] = useState('1')
  const router = useRouter()
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
                    Gloride car rental (“Upperlink”, the “Company”, or “we” or
                    “us”) values your Personal Data and we are committed to
                    protecting your privacy whenever you interact with us
                    through Gloride services which include all pages within the
                    Gloride website, mobile applications and other products and
                    services (collectively referred to as the “Gloride Service
                    Channels”, Gloride Services” or “Services”). Please read
                    this Privacy Policy (the “Policy”) to understand our
                    policies, processes, and procedures regarding the processing
                    of your personal data. By this Policy, we explain to you how
                    your Personal Data is collected, used, managed, transferred
                    and or deleted on the Gloride Service Channels and also
                    explain how you can update your Personal Data with us and
                    exercise your rights in respect of your Personal Data
                    provided to us.{' '}
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
                      support@glorideus.cpm
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
                    Gloride car rental (Upperlink, “we”, “our” or “us”) may use
                    cookies, web beacons, tracking pixels, and other tracking
                    technologies when you use Gloride services which include all
                    pages within the Gloride web services, mobile applications
                    and other products and services (collectively referred to as
                    “Gloride Service Channels”, “Gloride Services” or
                    “Services") to help customize the Gloride Services and
                    improve your experience. <br /> <br />
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
                      support@Gloride.ng
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
                    These Terms and Conditions (“Terms”) contained herein is a
                    legal agreement between you, as a prospective customer of
                    Gloride car rental including its agents, assigns and
                    successors in title (Upperlink, “we”, “our” or “us”) with
                    respect to its Gloride services and shall govern your access
                    to and use of all pages within the Gloride website, mobile
                    applications and other products and services (collectively
                    referred to as the “Gloride Services Channels”, “Gloride
                    Services” or “Services”).
                    <br /> These Terms apply in full force and effect to your
                    use of the Services and by using any of the Services, you
                    expressly accept and agree to be bound by all terms and
                    conditions contained herein in full and without limitation
                    or qualification, including our Privacy and Cookies Policy.
                    You must not use any of the Services, if you have any
                    objection to any of these Terms.
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
                    The services are directed to people from the ages of 18 and
                    above. You are only permitted to use the Services if you are
                    aged 18 or older. We do not knowingly engage people younger
                    than the age of 18.
                  </p>
                </div>

                <div className=' space-y-3  md:space-y-4 xl:space-y-5'>
                  <h1 className='font-bold text-xl md:text-2xl xl:text-3xl'>
                    {' '}
                    Intellectual Property{' '}
                  </h1>
                  <p className='text-xs text-justify leading-5 md:leading-6 xl:leading-7 md:text-sm xl:text-base'>
                    Unless otherwise stated, Gloride and/or its licensors own
                    the intellectual property rights and materials with respect
                    to the Gloride Service Channels subject to the license
                    below. All text, formatting (including without limitation
                    the arrangement of materials on the Gloride Service Channels
                    and the graphics, animation, tools, commercials, music,
                    video, articles, sound, copy, trade names, logos, and other
                    materials and information on the Gloride Service Channels
                    are subject to the intellectual property rights of Gloride
                    and its affiliates and their licensors and licensees
                    (collectively the “Content”). We do not grant you any right,
                    license, title, or interest to any of our intellectual
                    Property rights which you may or may not have access to.
                    This Content may not be copied, reverse-engineered,
                    decompiled, disassembles, modified, or reposted to other
                    websites. Nothing on the Gloride Service Channels should be
                    construed as granting by implication or otherwise, any
                    license or right to use any Trademark displayed on the
                    Gloride Service Channels without the written permission of
                    Gloride or such third party that may own the Trademark. You
                    agree to take such actions that may be needed to further
                    affirm our intellectual property rights.
                  </p>
                </div>
                <div className=' space-y-3  md:space-y-4 xl:space-y-5'>
                  <h1 className='font-bold text-xl md:text-2xl xl:text-3xl'>
                    License to Use the Gloride Service Channels
                  </h1>
                  <p className='text-xs text-justify leading-5 md:leading-6 xl:leading-7 md:text-sm xl:text-base'>
                    We grant you a non-assignable, non-exclusive, and revocable
                    license to use the software provided as part of our services
                    in the manner permitted by these Terms. This license grant
                    includes all updates, upgrades, new versions, and
                    replacement software for you to use in connection with our
                    services. The services are protected by copyright,
                    trademark, and other laws of both Nigeria and foreign
                    countries. Nothing in this Term gives you a right to use the
                    Gloride name or any of Gloride trademarks, logos, domain
                    names, and other distinctive brand features. All right,
                    titles, and interests in and to the services are and will
                    remain the exclusive property of Gloride and its licensors.
                    If you do not comply with all the provisions, then you will
                    be liable for all resulting damages suffered by you,
                    Upperlink, and all third parties. Unless otherwise provided
                    by applicable law, you agree not to alter, re-design,
                    reproduce, adapt, display, distribute, translate,
                    disassemble, reverse engineer, or otherwise attempt to
                    create any source code that is derived from the Gloride
                    software. Any feedback, comments, or suggestions you may
                    provide to us and our services is entirely voluntary and we
                    will be free to use such feedback, comments, or suggestion
                    as we see fit without any obligation to you.
                  </p>
                </div>
                <div className=' space-y-3  md:space-y-4 xl:space-y-5'>
                  <h1 className='font-bold text-xl md:text-2xl xl:text-3xl'>
                    Information Security and Warranty Disclaimer
                  </h1>
                  <p className='text-xs text-justify leading-5 md:leading-6 xl:leading-7 md:text-sm xl:text-base text-transform: lowercase first-letter:uppercase'>
                    {' '}
                    Gloride WILL ALWAYS ENSURE THAT THE Gloride SERVICE CHANNELS
                    ARE AVAILABLE AT ALL TIMES AND BUG-FREE. HOWEVER, THEY ARE
                    USED AT YOUR OWN RISK. WE PROVIDE ALL MATERIALS “AS IS” WITH
                    NO WARRANTY, EXPRESS OR IMPLIED, OF ANY KIND. WE EXPRESSLY
                    DISCLAIM ANY AND ALL WARRANTIES AND CONDITIONS, INCLUDING
                    ANY IMPLIED WARRANTY OR CONDITION OF MERCHANTABILITY,
                    FITNESS FOR A PARTICULAR PURPOSE, AVAILABILITY, SECURITY,
                    TITLE, AND NON-INFRINGEMENT OF INTELLECTUAL PROPERTY RIGHTS,
                    WITHOUT LIMITING THE GENERALITY OF THE FOREGOING. WE MAKE NO
                    WARRANTY THAT OUR SERVICES WILL MEET YOUR REQUIREMENTS OR
                    THAT THE Gloride SERVICE CHANNELS WILL REMAIN FREE FROM ANY
                    INTERRUPTION, BUGS, INACCURACIES, AND ERROR-FREE. YOUR USE
                    OF OUR SERVICES IS AT YOUR OWN RISK AND YOU ALONE WILL BE
                    RESPONSIBLE FOR ANY DAMAGE THAT RESULTS IN LOSS OF DATA OR
                    DAMAGE TO YOUR COMPUTER SYSTEM. NO ADVICE OR INFORMATION,
                    WHETHER ORAL OR WRITTEN OBTAINED BY YOU FROM Gloride SERVICE
                    CHANNELS WILL CREATE ANY WARRANTY OR CONDITION NOT EXPRESSLY
                    STATED.
                    <br />
                    You must not attempt to gain unauthorized access to our
                    Services, computers or databases. You must not misuse our
                    Services by introducing trojans, viruses or other materials
                    which are malicious or technologically harmful.
                  </p>
                </div>
                <div className=' space-y-3  md:space-y-4 xl:space-y-5'>
                  <h1 className='font-bold text-xl md:text-2xl xl:text-3xl'>
                    Fees, Charges and Payment Terms
                  </h1>
                  <p className='text-xs text-justify leading-5 md:leading-6 xl:leading-7 md:text-sm xl:text-base'>
                    When you initiate and confirm a transaction on Gloride
                    Service Channels, you agree to be bound by and pay for that
                    transaction. Do not commit to a transaction unless you are
                    ready to pay and have checked that all provided information
                    is accurate as all completed transactions are final.
                    <br />
                    Our Gloride service is designed to make payments convenient,
                    so we allow you to make payments using a number of different
                    funding sources like your linked bank accounts and/or bank
                    cards. When you provide us with a funding source, you also
                    authorize:
                    <br />
                    <br />
                    <li>
                      The collection and storing of source information along
                      with other related transaction information;
                    </li>
                    <li>
                      The crediting and debiting of your chosen source when you
                      perform transactions on Gloride;
                    </li>
                    <br />
                    When you make a payment, you authorize us (and our
                    designated payment processor) to charge the full amount and
                    any charges related to that transaction to the funding
                    source you designate for the transaction. If your payment
                    results in an overdraft or other fee from a related party,
                    liability for such fees or penalties will rest solely with
                    you.
                    <br />
                    <br />
                    To prevent financial loss or possible violations of the law,
                    we reserve the right to use our discretion in disclosing
                    details of any payments associated with you with funding
                    source issuers, law enforcement agencies, or impacted third
                    parties (including other users).
                  </p>
                </div>
                <div className=' space-y-3  md:space-y-4 xl:space-y-5'>
                  <h1 className='font-bold text-xl md:text-2xl xl:text-3xl'>
                    Transactions
                  </h1>
                  <p className='text-xs text-justify leading-5 md:leading-6 xl:leading-7 md:text-sm xl:text-base'>
                    When making a payment to a Biller on Gloride Service
                    Channels, you will be required to confirm the transaction.
                    At this time, you may also be requested to enter your
                    Personal Identification Number (PIN) being the secret code
                    you choose to secure your use of (and access to) Gloride
                    services.
                    <br />
                    <br />
                    By entering your PIN to confirm the transaction you agree
                    and confirm that you authorized the transaction. You cannot
                    directly reverse or cancel any payment once it has been
                    approved by you. <br />
                    <br />
                    As we are unable to reverse or charge back any payments
                    made, should you have a dispute with any Biller, you agree
                    to resolve such disputes with the Biller directly. Disputes
                    between you and a Biller will not affect our right to
                    recover payments from you.
                  </p>
                </div>
                <div className=' space-y-3  md:space-y-4 xl:space-y-5'>
                  <h1 className='font-bold text-xl md:text-2xl xl:text-3xl'>
                    Security and Unauthorized Use
                  </h1>
                  <p className='text-xs text-justify leading-5 md:leading-6 xl:leading-7 md:text-sm xl:text-base'>
                    When signing up for a Gloride account, you will be prompted
                    to create a unique PIN, username, and password and provide
                    answers to one or more security questions of your choosing.
                    <br />
                    <br />
                    You are responsible for the safekeeping and proper use of
                    these security data. You are responsible for all
                    transactions that take place on your account with your PIN
                    and you indemnify us against any claims made in respect of
                    such transactions.
                    <br />
                    <br />
                    If at any time you believe or discover that your PIN has
                    been stolen or compromised, you should contact our Customer
                    Services at{' '}
                    <span className='text-babypurple'>
                      support@glorideus.com{' '}
                    </span>{' '}
                    immediately. We will place your account on hold to prevent
                    any transactions from being carried out as soon as we
                    reasonably can. You will remain responsible for all
                    transactions that occur until your account is put on hold.
                    <br />
                    <br />
                    Should you dispute any purchase or withdrawal debited to
                    your account, you will be required to prove that it lacked
                    your authorization. Such transactions will be investigated
                    once we receive an affidavit clearly stating that you had
                    not authorized the transaction, supported by proof of this.
                    <br />
                    <br />
                    We use a PIN and a selection of questions to confirm your
                    identity when you call Customer Services. This method gives
                    us your authorization to service your account and execute
                    your instructions.
                  </p>
                </div>
                <div className=' space-y-3  md:space-y-4 xl:space-y-5'>
                  <h1 className='font-bold text-xl md:text-2xl xl:text-3xl'>
                    Disputes and Refunds
                  </h1>
                  <p className='text-xs text-justify leading-5 md:leading-6 xl:leading-7 md:text-sm xl:text-base'>
                    If you believe that an unauthorized or otherwise problematic
                    transaction has taken place under your account, you agree to
                    notify us immediately, to enable us to take action to help
                    prevent financial loss.
                    <br />
                    <br />
                    All claims against us related to payments should be made
                    within thirty (30) days after the date of such payment. It
                    will be taken that you waive all claims against us, to the
                    fullest extent of the law after the said period of time
                    <br />
                    <br />
                    You are responsible for and agree to indemnify us for all
                    Refunds, charge-backs, claims, fees, fines, penalties, and
                    other liability incurred by us (including costs and related
                    expenses) caused by or arising from payments that you
                    authorized or accepted.
                    <br />
                    <br />
                    If you enter into a transaction with a third party and have
                    a dispute over the goods or services you purchased, we have
                    no liability for such goods or services. Our only
                    involvement with regard to such transactions is as a payment
                    agent.
                    <br />
                    <br />
                    We may intervene in disputes between users concerning
                    payments but have no obligation to do so.
                    <br />
                    <br />
                    Your only remedy for a technical failure or interruption of
                    service is to request that your transaction be completed at
                    a later time.
                    <br />
                    <br />
                    It is your responsibility to remit any taxes that apply to
                    your transactions and are not normally included in the cost
                    of the Gloride transaction. You agree to indemnify and hold
                    us harmless from and against any claim arising out of your
                    failure to do so.
                    <br />
                    <br />
                    The transaction ID and transaction details will be required
                    to resolve all disputes.
                  </p>
                </div>
                <div className=' space-y-3  md:space-y-4 xl:space-y-5'>
                  <h1 className='font-bold text-xl md:text-2xl xl:text-3xl'>
                    Suspension and Closure of Accounts
                  </h1>
                  <p className='text-xs text-justify leading-5 md:leading-6 xl:leading-7 md:text-sm xl:text-base'>
                    We may suspend, restrict, or terminate the provision of our
                    services (in whole or in part) and or close your account
                    without any liability whatsoever under the following
                    circumstances:
                    <br />
                    <br />
                    <li>
                      Upon receiving a request from you at any time, we will
                      close your account;
                    </li>
                    <li>
                      If you notify us that your phone has been lost or stolen
                      or your PIN has been compromised, we will suspend or close
                      your account;
                    </li>
                    <li>
                      If in any way we know or suspect your account is being
                      used fraudulently, negligently, or for illegal activities,
                      or if we must do so to comply with the law, we may close
                      your account, restrict activity on your account or suspend
                      access to your account;
                    </li>
                    <li>
                      If we believe that you are in breach of these terms and
                      conditions, are trying to compromise our systems, are
                      unreasonably interfering with any services provided by us,
                      or for any other purpose in protection of our interests,
                      we may close your account;
                    </li>
                    <li>
                      Should you enter the incorrect PIN on three (3)
                      consecutive occasions, we will lock your access to Gloride
                      Services for (24 hours).
                    </li>
                  </p>
                </div>
                <div className=' space-y-3  md:space-y-4 xl:space-y-5'>
                  <h1 className='font-bold text-xl md:text-2xl xl:text-3xl'>
                    Account Deletion
                  </h1>
                  <p className='text-xs text-justify leading-5 md:leading-6 xl:leading-7 md:text-sm xl:text-base'>
                    You can delete your Account at any time by using the
                    following link{' '}
                    <span
                      // onClick={() =>
                      //   router.push({
                      //     pathname: '/Deleteaccount',
                      //   })
                      // }
                      className='text-babypurple font-bold cursor-pointer'
                    >
                      link
                    </span>
                    . Upon deleting your Account, your records and personal data
                    will be deleted. We will only keep such records and data as
                    may be required by applicable laws on data retention.
                  </p>
                </div>
                <div className=' space-y-3  md:space-y-4 xl:space-y-5'>
                  <h1 className='font-bold text-xl md:text-2xl xl:text-3xl'>
                    Limitation of Liability
                  </h1>
                  <p className='text-xs text-justify leading-5 md:leading-6 xl:leading-7 md:text-sm xl:text-base text-transform: lowercase first-letter:uppercase'>
                    YOUR USE OF THE Gloride SERVICE CHANNELS IS AT YOUR OWN
                    RISK. Gloride WILL IN NO WAY BE LIABLE FOR ANY DIRECT,
                    INDIRECT, INCIDENTAL PUNITIVE, CONSEQUENTIAL, SPECIAL, OR
                    EXEMPLARY DAMAGES OR ANY DAMAGES INCLUDING DAMAGES RESULTING
                    FROM REVENUE LOSS, PROFIT LOSS, USE, DATA, GOODWILL,
                    BUSINESS INTERRUPTION, OR ANY OTHER INTANGIBLE LOSSES
                    (WHETHER Gloride HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH
                    DAMAGES OR NOT) ARISING OUT OF YOUR USE OF THE Gloride
                    SERVICE CHANNELS OR SERVICES (INCLUDING, WITHOUT LIMITATION
                    TO YOUR INABILITY TO USE, OR ARISING FROM THE RESULT OF USE
                    OF Gloride SERVICE CHANNELS OR SERVICES) WHETHER SUCH
                    DAMAGES ARE BASED ON WARRANTY, TORT, CONTRACT, STATUTE OR
                    ANY OTHER LEGAL THEORY.
                  </p>
                </div>
                <div className=' space-y-3  md:space-y-4 xl:space-y-5'>
                  <h1 className='font-bold text-xl md:text-2xl xl:text-3xl'>
                    Indemnification
                  </h1>
                  <p className='text-xs text-justify leading-5 md:leading-6 xl:leading-7 md:text-sm xl:text-base'>
                    You hereby indemnify Gloride and undertake to keep
                    Upperlink, its staff, and affiliates indemnified against any
                    losses, damages, costs, liabilities, and expenses (including
                    without limitation reasonable legal fees and expenses)
                    arising out of any breach by you of any provision of these
                    Terms, or arising out of any claim that you have breached
                    any provision of these Terms. You will indemnify and hold
                    Gloride harmless from and against any claim, suit, or
                    proceedings brought against Gloride arising from or in
                    connection with violations of Intellectual Property or other
                    rights of third parties in relation to your use of the
                    Services.
                  </p>
                </div>
                <div className=' space-y-3  md:space-y-4 xl:space-y-5'>
                  <h1 className='font-bold text-xl md:text-2xl xl:text-3xl'>
                    Breaches of these Terms
                  </h1>
                  <p className='text-xs text-justify leading-5 md:leading-6 xl:leading-7 md:text-sm xl:text-base'>
                    Without prejudice to Upperlink’s other rights under these
                    Terms, if you breach these Terms in any way, Gloride may
                    take such action as Gloride deems appropriate to deal with
                    the breach, including suspending your access to the Gloride
                    service Channels, prohibiting you from accessing Gloride
                    service Channels, contacting your internet service provider
                    to request that they block your access to the services
                    and/or bringing court proceedings against you.
                  </p>
                </div>
                <div className=' space-y-3  md:space-y-4 xl:space-y-5'>
                  <h1 className='font-bold text-xl md:text-2xl xl:text-3xl'>
                    Data Protection
                  </h1>
                  <p className='text-xs text-justify leading-5 md:leading-6 xl:leading-7 md:text-sm xl:text-base'>
                    Gloride recognizes the importance of protecting the privacy
                    of those who visit the Gloride Service Channels and choose
                    to use the Gloride Services. With respect to all the
                    Personal Information belonging to, and/or processed in
                    connection with Gloride Services, such Personal Information
                    at all times are in compliance with all Data Protection Laws
                    in the territory, in all respect and in particular the
                    Nigeria Data Protection Regulation 2019 and all applicable
                    data protection regulation in force. Gloride maintains a
                    Privacy Policy which provides an overview of the Personal
                    Information we collect about you or that you provide to us
                    and how we store and use the information provided by you in
                    line with applicable Data protection legislation. By using
                    the Gloride Services you consent to such processing and you
                    commit to provide accurate information.
                  </p>
                </div>
                <div className=' space-y-3  md:space-y-4 xl:space-y-5'>
                  <h1 className='font-bold text-xl md:text-2xl xl:text-3xl'>
                    Governing Language
                  </h1>
                  <p className='text-xs text-justify leading-5 md:leading-6 xl:leading-7 md:text-sm xl:text-base'>
                    The governing language of these terms and all communication
                    between Gloride and you will be the English language.
                  </p>
                </div>
                <div className=' space-y-3  md:space-y-4 xl:space-y-5'>
                  <h1 className='font-bold text-xl md:text-2xl xl:text-3xl'>
                    Governing Law
                  </h1>
                  <p className='text-xs text-justify leading-5 md:leading-6 xl:leading-7 md:text-sm xl:text-base'>
                    These Terms shall be interpreted and governed in accordance
                    with the Laws of the Federal Republic of Nigeria and you
                    submit to the jurisdiction of the Courts located in Nigeria
                    for the resolution of any dispute.
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
                    These Terms supersede and extinguishes all previous
                    agreements between you and Gloride whether written or oral,
                    relating to its subject matter. In the event that any of
                    these Terms is held to be invalid or unenforceable, then
                    that provision will be limited or eliminated to the minimum
                    extent necessary, and the remaining provisions of these
                    Terms will remain in full effect. Gloride ’s failure to
                    enforce any right or provision of these Terms will not be
                    deemed a waiver of such right or provision.
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
                    address being: 354, Borno Way, Alagomeji, Yaba, Lagos,
                    Nigeria.
                    <br />
                    <br />
                    If you have any complaints about us and our Services, you
                    may reach out to us via{' '}
                    <span className='text-babyblue  text-decoration-line: underline'>
                      support@glorideus.com
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
