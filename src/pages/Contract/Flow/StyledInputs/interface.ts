interface Option {
  value: string
  label: string
}

// Define the props for StyledSelect
interface StyledSelectProps {
  options: Option[]
  value?: string | null // Make value optional
  //  onChange?: (selectedOption: { value: string; label: string }) => void
  onChange?: (value: string) => void
}
