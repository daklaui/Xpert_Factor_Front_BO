<<<<<<< HEAD
import { forwardRef } from 'react'
import TextField from '@mui/material/TextField'
const CustomInput = forwardRef(({ ...props }, ref) => {
  const { label, readOnly } = props

=======

import { forwardRef } from 'react'
import TextField from '@mui/material/TextField'
interface PickerProps {
  label?: string
  readOnly?: boolean
}
const PickersComponent = forwardRef(({ ...props }: PickerProps, ref) => {
  
  const { label, readOnly } = props
>>>>>>> dbfb9e274c0325b31c34f36fce7a87353e15c5ef
  return (
    <TextField inputRef={ref} {...props} label={label || ''} {...(readOnly && { inputProps: { readOnly: true } })} />
  )
})
<<<<<<< HEAD

export default CustomInput
=======
export default PickersComponent
>>>>>>> dbfb9e274c0325b31c34f36fce7a87353e15c5ef
