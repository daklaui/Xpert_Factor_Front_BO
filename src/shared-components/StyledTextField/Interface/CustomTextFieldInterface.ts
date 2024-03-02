import { number } from 'yup'

interface CustomTextFieldProps {
  label?: string
  name: string
  placeholder?: string
  fullWidth?: boolean
  onChange?: (event: any) => void
  onChangeWithValueAndIndex?: (value: string | number, index: number) => void
  value?: string | number
  index?: number
}

export default CustomTextFieldProps
