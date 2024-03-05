import { ReactDatePickerProps } from 'react-datepicker'

export interface FormData {
  AdherentValue: { value: string; label: string }
  contractOption: string
  numeroBordereau: string
  anneeBordereau: string
  nombreDocuments: string
  montantTotal: string
  dateBordereau: Date
  additionalDates: Date[]
  nomAcheteurOptions: string[]
  typeDocumentOptions: string[]
  modeReglementOptions: string[]
  refDocuments: string[]
  montantDocument: number[]
  echeance: number[]
}
export interface OptionType {
  label: string
  value: string
}
export interface AddBordereauxProps {
  popperPlacement: ReactDatePickerProps['popperPlacement']

  fullWidth?: boolean
}
