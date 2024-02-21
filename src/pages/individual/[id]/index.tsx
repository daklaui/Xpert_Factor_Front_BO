import { useRouter } from 'next/router'

const ConsulationIndividual = () => {
  const router = useRouter()

  return router.query.id
}

export default ConsulationIndividual
