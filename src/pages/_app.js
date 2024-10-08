'useClient'
import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import 'tippy.js/dist/tippy.css'
import { ToastContainer } from 'react-toastify'
import { store } from '../redux/store'
import { Provider } from 'react-redux'
import react, { useEffect, useState } from 'react'
import mainAxiosAction from '@/components/axiosAction'
import {
  IoIosClose,
  IoMdInformationCircle,
  IoMdInformationCircleOutline,
} from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import { useRouter } from 'next/router'
import { returnToUser, switchToHost } from '@/features/userpersona/userSlice'

export default function App({ Component, pageProps }) {
  const [isClient, setIsClient] = useState(false)
  const [verified, setVerified] = useState(false)
  const [message, setMessage] = useState('')
  const [update, setUpdate] = useState(false)
  const router = useRouter()

  const getuser = () => {
    mainAxiosAction
      .post(`/user/get-user`, {})
      .then(function (response) {
     

        if (response?.data?.user?.isVerified === false) {
          router.push({
            pathname: '/auth/emailverification',
            query: { userEmail: response?.data?.user?.email },
          })
        } else if (response?.data?.user?.isCompleted === false) {
          router.push({
            pathname: '/auth/completeregistration',
          })
        } else if (
          response?.data?.user?.isAdminVerified?.value === 'unverified'
        ) {
          setVerified(true)
          setMessage('Your registration is awaiting approval')
        } else if (
          response?.data?.user?.isAdminVerified?.value === 'rejected'
        ) {
          setVerified(true)
          setMessage(response?.data?.user?.isAdminVerified?.message)
          setUpdate(true)
        } else {
          // if (response?.data?.user?.type === 'user') {
          //   store.dispatch(returnToUser())
          // } else {
          //   store.dispatch(switchToHost())
          //   if (router?.pathname?.split?.('/')?.length > 1) return
          //   return router.push({
          //     pathname: '/host/dashboard',
          //   })
          // }
          return
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  useEffect(() => {
    setIsClient(true)
    if (localStorage.getItem('User_Token')) {
      getuser()
    }
  }, [])
  return (
    <>
      {isClient && (
        <Provider store={store}>
          {verified && (
            <div className='flex items-center justify-between px-6 lg:px-8 w-full bg-indigo-500 text-white py-2'>
              <div className='flex items-center gap-2 lg:gap-3 w-full'>
                <IoMdInformationCircle className='text-xl lg:text-2xl' />
                <h1 className='text-xs lg:text-sm font-sans w-full'>
                  {message}{' '}
                  {update && (
                    <span
                      onClick={() => {
                        setUpdate(false),
                          router.push({
                            pathname: '/userprofile/documents',
                          })
                      }}
                      className='w-full font-bold cursor-pointer'
                    >
                      {' '}
                      Click here to update
                    </span>
                  )}
                </h1>
              </div>
              <div
                onClick={() => setVerified(false)}
                className='flex justify-end w-full cursor-pointer'
              >
                <MdClose className='text-xl lg:text-2xl' />
              </div>
            </div>
          )}
          <Component {...pageProps} />
          <ToastContainer />
        </Provider>
      )}
    </>
  )
}

// import '@/styles/globals.css'
// import 'react-toastify/dist/ReactToastify.css'
// import { ToastContainer } from 'react-toastify'
// import { store } from '../redux/store'
// import { Provider } from 'react-redux'
// import { PersistGate } from 'redux-persist/integration/react'
// import { persistStore } from 'redux-persist'
// export default function App({ Component, pageProps }) {
//   let persistor = persistStore(store)
//   return (
//     <>
//       <Provider store={store}>
//         <PersistGate persistor={persistor}>
//           <Component {...pageProps} />
//           <ToastContainer />
//         </PersistGate>
//       </Provider>
//     </>
//   )
// }
