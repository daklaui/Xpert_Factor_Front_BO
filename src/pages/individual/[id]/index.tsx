import { useRouter } from 'next/router'

const ConsulationIndividual = () => {
  const router = useRouter()

  return <p>Individual id: {router.query.id}</p>
}

export default ConsulationIndividual
