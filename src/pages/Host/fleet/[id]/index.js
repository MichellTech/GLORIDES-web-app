import React, { useMemo } from 'react'
import { useRouter } from 'next/router'
import { cars } from '../../../../utilis/Cardata'
function index() {
  const router = useRouter()

  const carId = router.query.id
  const singlecar = useMemo(
    () => cars.filter((item) => item.id === Number(carId))?.[0],
    [carId]
  )
  return <div>{carId}</div>
}

export default index
