import React, { useEffect } from 'react'
import User from './usernav'
import Host from './hostnav'
import { useSelector, useDispatch } from 'react-redux'
import {
  getuserprofile,
  getusernotifications,
} from '@/features/userpersona/userSlice'

function index() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getuserprofile())
    dispatch(getusernotifications())
  }, [])
  const { hosting } = useSelector((store) => store.userpersona)
  return <>{hosting ? <Host /> : <User />}</>
}

export default index
