import DetailsIndividu from '../Flow/DetailsIndividu/DetailsIndividu'

const IndividualList = () => {
  return (
    <>
      <DetailsIndividu />
    </>
  )
}

export default IndividualList

export async function getStaticProps() {
  const fakeData = generateFakeData(60)

  return {
    props: {
      fakeData
    }
  }
}

export async function getStaticProps() {
  const fakeData = generateFakeData(60)

  return {
    props: {
      fakeData
    }
  }
}
