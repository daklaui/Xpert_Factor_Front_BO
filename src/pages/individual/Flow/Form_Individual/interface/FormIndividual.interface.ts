export interface PickerProps {
    label?: string
    readOnly?: boolean
}

export interface State {
    password: string;
    showPassword: boolean;
}
export interface SelectInerface {
    value: string
    label: string
  }
  export interface CustomSelectProps {
    onSearch: (value: any) => void
    labelText?: string
  }
 export interface CompanyData {
    RIB: string
    Agency: string
    Bank: string
  }
  
  