import React, { useEffect } from 'react'
import User from './usernav'
import Host from './hostnav'
import { useSelector, useDispatch } from 'react-redux'

function index() {
  const dispatch = useDispatch()

  const { hosting } = useSelector((store) => store.userpersona)
  return <>{hosting ? <Host /> : <User />}</>
}

export default index
