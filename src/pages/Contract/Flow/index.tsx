import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import CustomTextField from '../../../SharedComponents/StyledTextField/StyledTextField '

import GeneralInfo from './GeneralInfo'

function index() {
  const popperPlacement = 'bottom';
  
  return (
      <GeneralInfo popperPlacement={popperPlacement} />
  )
}

export default index
