import React, { useEffect, useState } from 'react'
import SelectAdherent from 'src/shared-components/custom-select/SelectAdherentList'
import { getContractsForAdherent } from '../mock/Mock.Contract'
import { getBordereauxForContract } from '../mock/Mock.Bordereaux'
import 'react-datepicker/dist/react-datepicker.css'
import StyledLabel from 'src/pages/Contract/Flow/StyledInputs/StyledLabel'
import CustomTextField from 'src/shared-components/StyledTextField/StyledTextField '
import StyledDatePicker from 'src/pages/Contract/Flow/StyledInputs/StyledDatePicker'
import CustomInput from 'src/pages/Buyer/PickersComponent'
import StyledSelect from '../StyledInputs/StyledSelect'
import { SingleValue } from 'react-select'
import Option from '../StyledInputs/SelectInterface'
import CustomSelect from '../StyledInputs/CustomSelectBorderaux'
import Button from '@mui/material/Button'
import { AddBordereauxProps, FormData, OptionType } from '../Interface/InterfaceBordereaux'

const AddBordereaux: React.FC = ({ popperPlacement }: AddBordereauxProps) => {
  // const [selectedAdherent, setSelectedAdherent] = useState<string>('')
  const [selectedAdherent, setSelectedAdherent] = useState<{ value: string; label: string }>({ value: '', label: '' })
  const [contractOptions, setContractOptions] = useState<any[]>([])
  const [formData, setFormData] = useState<FormData>({
    AdherentValue: { value: '', label: '' },
    contractOption: '',
    numeroBordereau: '',
    anneeBordereau: '',
    nombreDocuments: '',
    montantTotal: '',
    dateBordereau: new Date(),
    additionalDates: [],
    nomAcheteurOptions: [],
    typeDocumentOptions: [],
    modeReglementOptions: [],
    refDocuments: [],
    montantDocument: [],
    echeance: []
  })
  const [additionalInputs, setAdditionalInputs] = useState<JSX.Element[]>([])
  const [showAdditionalInputs, setShowAdditionalInputs] = useState<boolean>(false)
  const [montantDocumentValues, setMontantDocumentValues] = useState<number[]>([])
  const [additionalInputFieldValue, setAdditionalInputFieldValue] = useState<number>(0)
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true)
  const [dateValues, setDateValues] = useState<Date[]>([])
  const [selectedOption, setSelectedOption] = useState<any>(null)

  const saveFormDataToLocal = (formData: FormData) => {
    localStorage.setItem('formData', JSON.stringify(formData))
  }

  const loadFormDataFromLocal = async () => {
    const storedFormData = localStorage.getItem('formData')
    console.log('Stored Form Data:', storedFormData)

    if (storedFormData) {
      const parsedFormData = JSON.parse(storedFormData)
      parsedFormData.dateBordereau = new Date(parsedFormData.dateBordereau)
      console.log('Parsed Form Data:', parsedFormData)

      setFormData(parsedFormData)

      if (parsedFormData.AdherentValue) {
        setSelectedAdherent(parsedFormData.AdherentValue)
        console.log('Selected Adherent:', parsedFormData.AdherentValue)
        handleAdherentSelect(parsedFormData.AdherentValue)
      }
      const selectedOption = contractOptions.find(option => option.value === parsedFormData.contractOption)
      setSelectedOption(selectedOption)
    }
  }

  const handleAdherentSelect = async (selectedAdherent: any) => {
    if (selectedAdherent) {
      setSelectedAdherent(selectedAdherent)
      const contracts = await getContractsForAdherent(selectedAdherent.value)
      setContractOptions(contracts)
      setFormData(prevFormData => ({
        ...prevFormData,
        AdherentValue: { value: selectedAdherent.value, label: selectedAdherent.label }
      }))
    } else {
      setSelectedAdherent({ value: '', label: '' })
      setContractOptions([])

      setFormData({
        AdherentValue: { value: '', label: '' },
        contractOption: '',
        numeroBordereau: '',
        anneeBordereau: '',
        nombreDocuments: '',
        montantTotal: '',
        dateBordereau: new Date(),
        additionalDates: [],
        nomAcheteurOptions: [],
        typeDocumentOptions: [],
        modeReglementOptions: [],
        refDocuments: [],
        montantDocument: [],
        echeance: []
      })
      setShowAdditionalInputs(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleDateChange = (date: Date) => {
    setFormData({ ...formData, dateBordereau: date })
  }
  const handleAdditionalDateChange = (date: Date, index: number) => {
    setFormData(prevFormData => {
      const updatedDates = [...prevFormData.additionalDates]
      updatedDates[index] = date
      return { ...prevFormData, additionalDates: updatedDates }
    })
  }

  useEffect(() => {
    console.log(dateValues)
  }, [dateValues])

  const handleSelectChange = async (newValue: SingleValue<Option>) => {
    const selectedOption = newValue?.value

    if (selectedOption) {
      try {
        const { numeroBordereau, anneeBordereau, nomAcheteurOptions } = await getBordereauxForContract(selectedOption)

        setFormData(prevFormData => ({
          ...prevFormData,
          contractOption: selectedOption,
          numeroBordereau,
          anneeBordereau,
          nomAcheteurOptions
        }))
      } catch (error) {
        console.error('Error fetching bordereaux:', error)
      }
    } else {
      console.log('No option selected.')
    }
  }

  const handleNomAcheteurChange = (selectedOption: OptionType | null, rowIndex: number) => {
    setFormData(prevFormData => {
      const updatedNomAcheteurOptions = [...prevFormData.nomAcheteurOptions]
      updatedNomAcheteurOptions[rowIndex] = selectedOption ? selectedOption.value : ''
      return {
        ...prevFormData,
        nomAcheteurOptions: updatedNomAcheteurOptions
      }
    })
  }
  const handleTypeDocumentChange = (selectedOption: OptionType | null, rowIndex: number) => {
    const updatedFormData = { ...formData }

    updatedFormData.typeDocumentOptions[rowIndex] = selectedOption ? selectedOption.value : ''

    setFormData(updatedFormData)
  }
  const handleModeReglementChange = (selectedOption: OptionType | null, rowIndex: number) => {
    const updatedFormData = { ...formData }

    updatedFormData.modeReglementOptions[rowIndex] = selectedOption ? selectedOption.value : ''

    setFormData(updatedFormData)
  }

  const handleRefDocumentChange = (value: string, index: number) => {
    const isDuplicate = formData.refDocuments.some((ref, i) => i !== index && ref === value)

    if (isDuplicate) {
      window.alert('Duplicate reference document found')
      return
    }

    setFormData(prevFormData => {
      prevFormData.refDocuments[index] = value
      return { ...prevFormData }
    })
  }

  const handleEcheanceChange = (value: number, index: number) => {
    formData.echeance[index] = value
  }
  const handleSave = () => {
    setShowAdditionalInputs(true)
    const numDocuments = parseInt(formData.nombreDocuments)
    const inputs = []
    const typeDocumentOptions = ['MIN_CREDIT', 'FACTURE', 'CAUTION', 'BON DE COMMANDE', 'MARCHE']
    const modeReglementOptions = ['Traite', 'Virement', 'Cheque', 'Espece']
    const initialMontantDocumentValues = Array(numDocuments).fill(0)
    setMontantDocumentValues(initialMontantDocumentValues)
    for (let i = 0; i < numDocuments; i++) {
      inputs.push(
        <tr key={`additionalInput-${i}`}>
          <td>
            <CustomSelect
              options={formData.nomAcheteurOptions.map(option => ({ label: option, value: option }))}
              handleSelectChange={selectedOption => handleNomAcheteurChange(selectedOption, i)}
            />
          </td>
          <td>
            <CustomSelect
              options={typeDocumentOptions.map(option => ({ label: option, value: option }))}
              handleSelectChange={selectedOption => handleTypeDocumentChange(selectedOption, i)}
            />
          </td>
          <td>
            <CustomTextField
              fullWidth
              placeholder={'Ref document'}
              name={`refDocument-${i}`}
              onChangeWithValueAndIndex={handleRefDocumentChange}
              value={formData.refDocuments[i]}
              index={i}
            />
          </td>
          <td>
            <StyledDatePicker
              selected={dateValues[i] || null}
              value={new Date(dateValues[i])}
              id='basic-input'
              popperPlacement={popperPlacement}
              onChange={(date: Date) => handleAdditionalDateChange(date, i)}
              customInput={<CustomInput label='' />}
            />
          </td>
          <td>
            <CustomTextField
              fullWidth
              placeholder={'montant document'}
              name={`montantDocument-${i}`}
              onChange={e => handleMontantDocumentChange(i, parseInt(e.target.value))}
              value={formData.montantDocument[i]}
              index={i}
            />
          </td>
          <td>
            <CustomTextField
              fullWidth
              placeholder={'Echéance '}
              name={`echeance-${i}`}
              onChangeWithValueAndIndex={handleEcheanceChange}
              value={formData.echeance[i]}
              index={i}
            />
          </td>
          <td>
            <CustomSelect
              options={modeReglementOptions.map(option => ({ label: option, value: option }))}
              handleSelectChange={selectedOption => handleModeReglementChange(selectedOption, i)}
            />
          </td>
        </tr>
      )
    }

    setAdditionalInputs(inputs)
  }

  const handleMontantDocumentChange = (index: number, value: number) => {
    formData.montantDocument[index] = value
    const sum = formData.montantDocument.reduce((acc, curr) => acc + curr, 0)
    setAdditionalInputFieldValue(sum)
    setIsButtonDisabled(sum !== parseInt(formData.montantTotal))
  }

  const handleAdditionalSave = () => {}

  const handleCancel = () => {
    setShowAdditionalInputs(false)
    setAdditionalInputs([])
  }

  function handleRestaurerBorderaux(): void {
    loadFormDataFromLocal()
  }

  const handleSauvegarder = () => {
    saveFormDataToLocal(formData)
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <Button variant='contained' onClick={handleRestaurerBorderaux}>
          Restaurer Bordereaux
        </Button>
        <Button variant='contained' onClick={handleSauvegarder}>
          Sauvegarder temporairement
        </Button>
      </div>
      <SelectAdherent onSearch={(selectedOption: any) => {}} onAdherentSelect={handleAdherentSelect} />
      <table>
        <tbody>
          <tr>
            <td>
              <StyledLabel htmlFor='Ref Contract'> Ref Contract </StyledLabel>
            </td>
            <td>
              <StyledLabel htmlFor='Numéro Bordereau'> Numéro Bordereau </StyledLabel>
            </td>
            <td>
              <StyledLabel htmlFor='Année Bordereau'> Année Bordereau </StyledLabel>
            </td>
            <td>
              <StyledLabel htmlFor='Nombre des documents'> Nombre des documents </StyledLabel>
            </td>
            <td>
              <StyledLabel htmlFor='Montant Total'> Montant Total </StyledLabel>
            </td>
            <td>
              <StyledLabel htmlFor='Date Bordereau'> Date Bordereau </StyledLabel>
            </td>
            <td>
              <StyledLabel htmlFor='Actions'> Actions </StyledLabel>
            </td>
          </tr>
          <tr>
            <td>
              <StyledSelect Options={contractOptions} handleSelectChange={handleSelectChange} />
            </td>
            <td>
              <CustomTextField
                fullWidth
                placeholder={'numeroBordereau '}
                name='numeroBordereau'
                onChange={handleInputChange}
                value={formData.numeroBordereau}
              />
            </td>
            <td>
              <CustomTextField
                fullWidth
                placeholder={'Année Bordereau'}
                name='anneeBordereau'
                onChange={handleInputChange}
                value={formData.anneeBordereau}
              />
            </td>
            <td>
              <CustomTextField
                fullWidth
                placeholder={'Nombre des documents'}
                name='nombreDocuments'
                onChange={handleInputChange}
                value={formData.nombreDocuments}
              />
            </td>
            <td>
              <CustomTextField
                fullWidth
                placeholder={'Montant Total'}
                name='montantTotal'
                onChange={handleInputChange}
                value={formData.montantTotal}
              />
            </td>
            <td>
              <StyledDatePicker
                selected={formData.dateBordereau}
                id='basic-input'
                popperPlacement={popperPlacement}
                onChange={handleDateChange}
                customInput={<CustomInput label='' />}
              />
            </td>
            <td colSpan={6}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button variant='contained' onClick={handleSave}>
                  Enregistrer
                </Button>
                <Button variant='contained' onClick={handleCancel}>
                  Annuler
                </Button>
              </div>
            </td>
          </tr>
          <tr></tr>
        </tbody>
      </table>

      {showAdditionalInputs && (
        <table>
          <tbody>
            <tr>
              <td>
                <StyledLabel htmlFor='Nom Acheteur'> Nom Acheteur </StyledLabel>
              </td>
              <td>
                <StyledLabel htmlFor='Type de document'>Type de document</StyledLabel>
              </td>
              <td>
                <StyledLabel htmlFor='Ref document'>Ref document</StyledLabel>
              </td>
              <td>
                <StyledLabel htmlFor='Date document'>Date document</StyledLabel>
              </td>
              <td>
                <StyledLabel htmlFor='Montant document'>Montant document</StyledLabel>
              </td>
              <td>
                <StyledLabel htmlFor='Echéance'>Echéance</StyledLabel>
              </td>
              <td>
                <StyledLabel htmlFor='Mode de réglement'>Mode de réglement</StyledLabel>
              </td>
            </tr>
            {additionalInputs}
            <tr key='additionalInputsFooter'>
              <td colSpan={8}>
                <CustomTextField name='additionalInputField' value={additionalInputFieldValue.toString()} />

                <Button variant='contained' onClick={handleAdditionalSave} disabled={isButtonDisabled}>
                  Valider
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  )
}

export default AddBordereaux
