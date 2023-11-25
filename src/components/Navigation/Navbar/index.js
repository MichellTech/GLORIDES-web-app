import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import User from './usernav'
import Host from './hostnav'
import {
  getuserprofile,
  getusernotifications,
} from '@/features/userpersona/userSlice'

function index() {
  const { hosting } = useSelector((store) => store.userpersona)
  const dispatch = useDispatch()
  // get user
  useEffect(() => {
    dispatch(getuserprofile())
    dispatch(getusernotifications())
  }, [])

  return <>{hosting ? <Host /> : <User />}</>
}

export default index
