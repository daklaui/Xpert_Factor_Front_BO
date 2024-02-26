import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import SelectAdherent from 'src/shared-components/custom-select/SelectAdherentList'
import { getContractsForAdherent } from '../mock/Mock.Contract'
import { getBordereauxForContract } from '../mock/Mock.Bordereaux'
import 'react-datepicker/dist/react-datepicker.css'

interface FormData {
  numeroBordereau: string
  anneeBordereau: string
  nombreDocuments: string
  montantTotal: string
  dateBordereau: Date
  nomAcheteurOptions: string[]
}

const AddBordereaux: React.FC = () => {
  const [selectedAdherent, setSelectedAdherent] = useState<string>('')
  const [contractOptions, setContractOptions] = useState<any[]>([])
  const [formData, setFormData] = useState<FormData>({
    numeroBordereau: '',
    anneeBordereau: '',
    nombreDocuments: '',
    montantTotal: '',
    dateBordereau: new Date(),
    nomAcheteurOptions: []
  })
  const [additionalInputs, setAdditionalInputs] = useState<JSX.Element[]>([])
  const [showAdditionalInputs, setShowAdditionalInputs] = useState<boolean>(false)
  const [montantDocumentValues, setMontantDocumentValues] = useState<number[]>([])
  const [additionalInputFieldValue, setAdditionalInputFieldValue] = useState<number>(0)
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true)
  const [dateValues, setDateValues] = useState<Date[]>([])
  const handleAdherentSelect = async (selectedAdherent: any) => {
    if (selectedAdherent) {
      setSelectedAdherent(selectedAdherent.value)
      const contracts = await getContractsForAdherent(selectedAdherent.value)
      setContractOptions(contracts)
    } else {
      setSelectedAdherent('')
      setContractOptions([])

      setFormData({
        numeroBordereau: '',
        anneeBordereau: '',
        nombreDocuments: '',
        montantTotal: '',
        dateBordereau: new Date(),
        nomAcheteurOptions: []
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
    // const newDateValues = [...dateValues]
    // newDateValues[index] = date
    // console.log(newDateValues)
    setDateValues(prevState => {
      return [...prevState, date]
    })
  }
  useEffect(() => {
    console.log(dateValues)
  }, [dateValues])

  const handleSelectChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })

    const { numeroBordereau, anneeBordereau, nomAcheteurOptions } = await getBordereauxForContract(value)
    setFormData({ ...formData, numeroBordereau, anneeBordereau, nomAcheteurOptions })
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
            <select name={`nomAcheteur-${i}`} required>
              {formData.nomAcheteurOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </td>
          <td>
            <select name={`typeDocument-${i}`} required>
              {typeDocumentOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </td>
          <td>
            <input type='text' name={`refDocument-${i}`} required />
          </td>
          <td>
            <DatePicker
              //selected={dateValues[i] || null}
              value={new Date(dateValues[i])}
              onChange={(date: Date) => handleAdditionalDateChange(date, i)}
              required
            />
          </td>
          <td>
            <input
              type='number'
              name={`montantDocument-${i}`}
              onChange={e => handleMontantDocumentChange(i, parseInt(e.target.value))}
              required
            />
          </td>
          <td>
            <input type='text' name={`echeance-${i}`} required />
          </td>
          <td>
            <select name={`modeReglement-${i}`} required>
              {modeReglementOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </td>
        </tr>
      )
    }

    setAdditionalInputs(inputs)
  }

  const handleMontantDocumentChange = (index: number, value: number) => {
    montantDocumentValues[index] = value
    const sum = montantDocumentValues.reduce((acc, curr) => acc + (isNaN(curr) ? 0 : curr), 0)
    setAdditionalInputFieldValue(sum)
    console.log('additionalInputFieldValue updated:', sum)

    setIsButtonDisabled(sum !== parseInt(formData.montantTotal))
  }

  const handleAdditionalSave = () => {}

  const handleCancel = () => {
    setShowAdditionalInputs(false)
    setAdditionalInputs([])
  }

  return (
    <div>
      <SelectAdherent
        onSearch={(selectedOption: any) => {
          //   console.log('Search triggered with option:', selectedOption)
        }}
        onAdherentSelect={handleAdherentSelect}
      />
      <table>
        <tbody>
          <tr>
            <td>Ref Contract</td>
            <td>Numéro Bordereau</td>
            <td>Année Bordereau</td>
            <td>Nombre des documents</td>
            <td>Montant Total</td>
            <td>Date Bordereau</td>
          </tr>
          <tr>
            <td>
              <select id='refContract' name='refContract' onChange={handleSelectChange} required>
                <option value=''>Sélectionner un contrat</option>
                {contractOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </td>
            <td>
              <input
                type='text'
                name='numeroBordereau'
                value={formData.numeroBordereau}
                onChange={handleInputChange}
                required
              />
            </td>
            <td>
              <input
                type='text'
                name='anneeBordereau'
                value={formData.anneeBordereau}
                onChange={handleInputChange}
                required
              />
            </td>
            <td>
              <input
                type='text'
                name='nombreDocuments'
                value={formData.nombreDocuments}
                onChange={handleInputChange}
                required
              />
            </td>
            <td>
              <input
                type='text'
                name='montantTotal'
                value={formData.montantTotal}
                onChange={handleInputChange}
                required
              />
            </td>
            <td>
              <DatePicker selected={formData.dateBordereau} onChange={handleDateChange} required />
            </td>
          </tr>
          <tr>
            <td colSpan={6}>
              <button onClick={handleSave}>Enregistrer</button>
              <button onClick={handleCancel}>Annuler</button>
            </td>
          </tr>
        </tbody>
      </table>

      {showAdditionalInputs && (
        <table>
          <tbody>
            <tr>
              <td>Nom Acheteur</td>
              <td>Type de document</td>
              <td>Ref document</td>
              <td>Date document</td>
              <td>Montant document</td>
              <td>Echéance</td>
              <td>Mode de réglement</td>
            </tr>
            {additionalInputs}
            <tr key='additionalInputsFooter'>
              <td colSpan={8}>
                <input
                  type='text'
                  name='additionalInputField'
                  value={additionalInputFieldValue.toString()} // Convert number to string
                  //onChange={e => setAdditionalInputFieldValue(parseFloat(e.target.value))}
                />

                <button onClick={handleAdditionalSave} disabled={isButtonDisabled}>
                  Valider
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  )
}

export default AddBordereaux
