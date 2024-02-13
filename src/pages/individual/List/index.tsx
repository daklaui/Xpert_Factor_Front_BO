import React from 'react'

const IndividualList = () => {
  return <></>
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
