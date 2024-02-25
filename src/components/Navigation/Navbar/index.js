import React, { useEffect, useState } from 'react'
import User from './usernav'
import Host from './hostnav'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'

function index() {
  const [display, setDisplay] = useState('user')
  const router = useRouter()
  useEffect(() => {
    if (router.pathname.includes('host')) {
      setDisplay('host')
    } else {
      setDisplay('user')
    }
  }, [router.pathname])

  return <>{display === 'host' ? <Host /> : <User />}</>
}

export default index
