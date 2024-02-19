import Edit from '../EditContract/Edit'

const ContractFlow = () => {
  return <Edit />
}

import React from 'react'
import GeneralInfo from './GeneralInfo'

function index() {
  const popperPlacement = 'bottom';

  return (
      <GeneralInfo popperPlacement={popperPlacement} />
  )
}

export default index
