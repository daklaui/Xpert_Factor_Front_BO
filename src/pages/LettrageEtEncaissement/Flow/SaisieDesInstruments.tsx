import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import StyledSelect from 'src/pages/Contract/Flow/StyledInputs/CustomSelect'

import SelectAdherent from 'src/shared-components/custom-select/SelectAdherentList'
import StyledDatePicker from 'src/pages/Contract/Flow/StyledInputs/StyledDatePicker'
import { ReactDatePickerProps } from 'react-datepicker'
import { DateType } from 'src/types/forms/reactDatepickerTypes'
import CustomTextField from 'src/shared-components/StyledTextField/StyledTextField '
import SelectListOfDevises from 'src/shared-components/custom-select/SelectListOfDevises'
import TableBasic from './TableBasic'
import { instrumentMockData } from '../mock/instrumentMockData'

interface InstrumentsProps {
  popperPlacement: ReactDatePickerProps['popperPlacement']
  onFormChange: (values: any) => void
  fullWidth?: boolean
}

const LeftContainer = styled.div`
  width: 30%;
  float: left;
`

const StyledLabel = styled('label')({
  display: 'block',
  marginBottom: '5px',
  fontWeight: 'bold',
  fontSize: '13px'
})

const RightContainer = styled.div`
  width: 70%;
  float: left;
`

const FormContainer = styled.div`
  padding: 20px;
`

const TableContainer = styled.div`
  padding: 20px;
`

const StyledInputGroup = styled.div`
  margin-bottom: 20px; /* Add some bottom margin for spacing */
`

const SaisieDesInstruments = ({ popperPlacement }: InstrumentsProps) => {
  const [date, setDate] = useState<DateType>(new Date())
  const [selectedAdherent, setSelectedAdherent] = useState<{ value: string; label: string } | null>(null)
  const [selectedInstrument, setSelectedInstrument] = useState<string | null>(null) // Track selected instrument
  const [mockData, setMockData] = useState<{ rib: string; refSequentielle: string }>({ rib: '', refSequentielle: '' })

  const instrumentOptions = [
    { value: 'Avoir', label: 'Avoir' },
    { value: 'Rétrocession', label: 'Rétrocession' },
    { value: 'Billet à ordre', label: 'Billet à ordre' },
    { value: 'Chèque', label: 'Chèque' },
    { value: 'Espèce', label: 'Espèce' },
    { value: 'Virement', label: 'Virement' },
    { value: 'Prélèvement', label: 'Prélèvement' },
    { value: 'TR', label: 'TR' },
    { value: 'TC', label: 'TC' }
  ]
  const handleAdherentSelect = async (selectedAdherent: { value: string; label: string } | null) => {
    if (selectedAdherent) {
      setSelectedAdherent(selectedAdherent)
    } else {
      setSelectedAdherent(null)
    }
  }

  useEffect(() => {
    if (selectedInstrument) {
      const selectedData = instrumentMockData[selectedInstrument as keyof typeof instrumentMockData] // Type assertion
      console.log('Selected data:', selectedData)
      setMockData(selectedData || { rib: '', refSequentielle: '' })
    } else {
      setMockData({ rib: '', refSequentielle: '' })
    }
  }, [selectedInstrument])

  const handleInstrumentChange = (selectedOption: { value: string; label: string }) => {
    console.log('Selected instrument:', selectedOption)
    setSelectedInstrument(selectedOption.value)
  }

  return (
    <div>
      <LeftContainer>
        <FormContainer>
          <StyledInputGroup>
            <StyledLabel htmlFor='typeInstrument'>Type Instrument</StyledLabel>
            <StyledSelect options={instrumentOptions} value={selectedInstrument} onChange={handleInstrumentChange} />
          </StyledInputGroup>
          <StyledInputGroup>
            <StyledLabel htmlFor='rib'>RIB</StyledLabel>
            <StyledSelect value={mockData.rib} />
          </StyledInputGroup>
          <StyledInputGroup>
            <StyledLabel htmlFor='refSequentielle'>Réf Séquentielle</StyledLabel>
            <CustomTextField fullWidth={true} value={mockData.refSequentielle} /* props */ />
          </StyledInputGroup>
          <StyledInputGroup>
            <StyledLabel htmlFor='refInstrument'>Réf Instrument</StyledLabel>
            <CustomTextField fullWidth={true} /* props */ />
          </StyledInputGroup>
          <StyledInputGroup>
            <StyledLabel htmlFor='montantInstrument'>Montant Instrument</StyledLabel>
            <CustomTextField fullWidth={true} /* props */ />
          </StyledInputGroup>
          <StyledInputGroup>
            <StyledLabel htmlFor='devise'>Devise</StyledLabel>
            <SelectListOfDevises /* props */ />
          </StyledInputGroup>
          <StyledInputGroup>
            <StyledLabel htmlFor='dateReceptionInstrument'>Date réception instrument</StyledLabel>
            <StyledDatePicker
              selected={date}
              id='basic-input'
              popperPlacement={popperPlacement}
              onChange={(date: Date) => setDate(date)}
            />
          </StyledInputGroup>
          <StyledInputGroup>
            <StyledLabel htmlFor='dateValeurInstrument'>Date Valeur instrument</StyledLabel>
            <StyledDatePicker /* props */ />
          </StyledInputGroup>
        </FormContainer>
      </LeftContainer>

      <RightContainer>
        <br></br>
        <StyledInputGroup>
          <StyledLabel htmlFor='NomAdherent'>Nom Adherent</StyledLabel>
          <div style={{ marginBottom: '40px' }}>
            <SelectAdherent onAdherentSelect={handleAdherentSelect} />
          </div>
          <CustomTextField fullWidth={true} placeholder={'Recherche par nom'} /* props */ />
        </StyledInputGroup>
        <TableContainer>
          <TableBasic selectedAdherent={selectedAdherent} />
        </TableContainer>
      </RightContainer>
    </div>
  )
}

export default SaisieDesInstruments
