'useClient'
import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import 'tippy.js/dist/tippy.css'
import { ToastContainer } from 'react-toastify'
import { store } from '../redux/store'
import { Provider } from 'react-redux'
import react, { useEffect, useState } from 'react'
import mainAxiosAction from '@/components/axiosAction'

export default function App({ Component, pageProps }) {
  const [isClient, setIsClient] = useState(false)
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
        } else {
          return
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  useEffect(() => {
    setIsClient(true)
    getuser()
  }, [])
  return (
    <>
      {isClient && (
        <Provider store={store}>
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
