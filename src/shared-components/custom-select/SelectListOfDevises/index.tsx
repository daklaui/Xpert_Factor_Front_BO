import { useEffect, useState } from 'react'
import Select from 'react-select'

import { CustomSelectProps, SelectInerface } from '../interface/customSelect.interface'
import { getDeviseList } from '../mock'

<<<<<<< HEAD:src/shared-components/custom-select/SelectListOfDevises/index.tsx
const SelectListOfDevises = ({ onSearch }: CustomSelectProps) => {
=======
const SelectDevise = ({ onSearch, }: CustomSelectProps) => {
>>>>>>> 9d89388 (AddContractForm + Styled TextField (shared Component) Anis_First_Push):src/SharedComponents/CustomSelect/SelectDeviseComponent/index.tsx
  const [options, setOptions] = useState<SelectInerface[]>([])
  const [statusValue, setStatusValue] = useState('')
  const [isClearable, ] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDeviseList()
        setOptions(response.options)
      } catch (error) {
        console.error('Erreur lors de la récupération des options :', error)
      }
    }

    fetchData()
  }, [])

  return (
    <Select
      placeholder={'---Sélectionnez une devise---'}
      defaultValue={statusValue}
      onChange={(value: any) => {
        onSearch ? onSearch(value) : setStatusValue(value)
      }}
      options={options}
      isClearable={isClearable}
    />
  )
}

export default SelectListOfDevises
