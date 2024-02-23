import { forwardRef } from 'react'
import TextField from '@mui/material/TextField'
<<<<<<< HEAD:src/pages/Acheteur/PickersComponent.tsx

interface PickerProps {
  label?: string
  readOnly?: boolean
}
const PickersComponent = forwardRef(({ ...props }: PickerProps, ref) => {

  const { label, readOnly } = props
 
=======
const CustomInput = forwardRef(({ ...props }, ref) => {
  const { label, readOnly } = props

>>>>>>> 7cb301f82f3c4fa0e31ed4d52ea7f23bcaa91ac0:src/pages/Buyer/PickersComponent.tsx
  return (
    <TextField inputRef={ref} {...props} label={label || ''} {...(readOnly && { inputProps: { readOnly: true } })} />
  )
})
<<<<<<< HEAD:src/pages/Acheteur/PickersComponent.tsx
export default PickersComponent
=======

export default CustomInput
>>>>>>> 7cb301f82f3c4fa0e31ed4d52ea7f23bcaa91ac0:src/pages/Buyer/PickersComponent.tsx
