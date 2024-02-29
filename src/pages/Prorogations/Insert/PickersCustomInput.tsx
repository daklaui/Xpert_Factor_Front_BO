// ** React Imports
import { forwardRef } from 'react'

// ** MUI Imports
import TextField from '@mui/material/TextField'

import { PickerProps } from 'src/pages/individual/Flow/Form_Individual/interface/FormIndividual.interface'

const PickersComponent = forwardRef(({ ...props }: PickerProps, ref) => {
 // ** Props
  const { label, readOnly } = props

  return (
    <TextField inputRef={ref} {...props} label={label || ''} {...(readOnly && { inputProps: { readOnly: true } })}/>
  )
})

export default PickersComponent
