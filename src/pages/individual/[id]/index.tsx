import React from 'react'
import { useRouter } from 'next/router'
import DetailsIndividu from './DetailsIndividu'

const ConsulationIndividual = () => {
  const router = useRouter()
  const { id } = router.query

  return <DetailsIndividu individuId={id} />
}
export default ConsulationIndividual
