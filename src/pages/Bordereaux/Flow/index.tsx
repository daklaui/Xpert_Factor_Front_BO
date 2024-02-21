import React, { useState } from 'react'
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
}

const AddBordereaux: React.FC = () => {
  const [selectedAdherent, setSelectedAdherent] = useState<string>('')
  const [contractOptions, setContractOptions] = useState<any[]>([])
  const [formData, setFormData] = useState<FormData>({
    numeroBordereau: '',
    anneeBordereau: '',
    nombreDocuments: '',
    montantTotal: '',
    dateBordereau: new Date()
  })
  const handleAdherentSelect = async (selectedAdherent: any) => {
    if (selectedAdherent) {
      setSelectedAdherent(selectedAdherent.value)
      const contracts = await getContractsForAdherent(selectedAdherent.value)
      setContractOptions(contracts)
    } else {
      // Clear selected adherent and contract options
      setSelectedAdherent('')
      setContractOptions([])

      // Clear other form data
      setFormData({
        numeroBordereau: '',
        anneeBordereau: '',
        nombreDocuments: '',
        montantTotal: '',
        dateBordereau: new Date()
      })
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleDateChange = (date: Date) => {
    setFormData({ ...formData, dateBordereau: date })
  }

  const handleSelectChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })

    // Fetch numeroBordereau and anneeBordereau based on the selected contract
    const bordereaux = await getBordereauxForContract(value)
    setFormData({ ...formData, ...bordereaux })
  }

  const handleSave = () => {}

  const handleCancel = () => {}

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
              <select id='refContract' name='refContract' onChange={handleSelectChange}>
                <option value=''>Sélectionner un contrat</option>
                {contractOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </td>
            <td>
              <input type='text' name='numeroBordereau' value={formData.numeroBordereau} onChange={handleInputChange} />
            </td>
            <td>
              <input type='text' name='anneeBordereau' value={formData.anneeBordereau} onChange={handleInputChange} />
            </td>
            <td>
              <input type='text' name='nombreDocuments' value={formData.nombreDocuments} onChange={handleInputChange} />
            </td>
            <td>
              <input type='text' name='montantTotal' value={formData.montantTotal} onChange={handleInputChange} />
            </td>
            <td>
              <DatePicker selected={formData.dateBordereau} onChange={handleDateChange} />
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
    </div>
  )
}

export default AddBordereaux
