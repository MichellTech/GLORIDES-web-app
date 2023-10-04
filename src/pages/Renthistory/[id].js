import React from 'react'
import { useRouter } from 'next/router'

function Singlecar() {
  const router = useRouter()

  const carId = router.query.id
  return <div>{carId}</div>
}

export default Singlecar
