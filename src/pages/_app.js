import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import 'tippy.js/dist/tippy.css'
import { ToastContainer } from 'react-toastify'
import { store } from '../redux/store'
import { Provider } from 'react-redux'
import react, { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
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
