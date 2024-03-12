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
import { Button, Card } from '@mui/material'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import CustomInput from '../Flow/PickersCustomInput'

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
  width: 68%;
  float: right;
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
const StyledInputGroupspecial = styled.div`
  /* Add some bottom margin for spacing */
  padding: 20px;
`

const SaisieDesInstruments = () => {
  const [date, setDate] = useState<DateType>(new Date())
  const [date1, setDate1] = useState<DateType>(new Date())
  const [selectedAdherent, setSelectedAdherent] = useState<{ value: string; label: string } | null>(null)
  const [selectedInstrument, setSelectedInstrument] = useState<string | null>(null) // Track selected instrument
  const [mockData, setMockData] = useState<{ rib: string; refSequentielle: string }>({ rib: '', refSequentielle: '' })

  const [selectedData, setSelectedData] = useState<(typeof instrumentMockData)[keyof typeof instrumentMockData] | null>(
    null
  )
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

  const handleInstrumentChange = (value: string) => {
    console.log('handleInstrumentChange called!')
    console.log('Selected instrument:', value)
    setSelectedInstrument(value)
    if (value) {
      setSelectedData(instrumentMockData[value as keyof typeof instrumentMockData])
    } else {
      setSelectedData(null) // Clear data if no instrument selected
    }
  }

  return (
    <div>
      <LeftContainer>
        <Card>
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
              <DatePickerWrapper>
                <StyledDatePicker
                  selected={date}
                  onChange={(date: Date) => setDate(date)}
                  customInput={<CustomInput />}
                />
              </DatePickerWrapper>
            </StyledInputGroup>
            <StyledInputGroup>
              <StyledLabel htmlFor='dateValeurInstrument'>Date Valeur instrument</StyledLabel>
              <DatePickerWrapper>
                <StyledDatePicker
                  selected={date1}
                  onChange={(date1: Date) => setDate1(date1)}
                  customInput={<CustomInput />}
                />
              </DatePickerWrapper>
            </StyledInputGroup>
            <Button>Valider</Button>
          </FormContainer>
        </Card>
      </LeftContainer>

      <RightContainer>
        <Card>
          <StyledInputGroupspecial>
            <div
              style={{
                marginBottom: '40px'
              }}
            >
              <StyledLabel htmlFor='NomAdherent'>Nom Adherent</StyledLabel>
              <SelectAdherent onAdherentSelect={handleAdherentSelect} />
            </div>
            <CustomTextField fullWidth={true} placeholder={'Recherche par nom'} /* props */ />
          </StyledInputGroupspecial>
          <TableContainer>
            <TableBasic selectedAdherent={selectedAdherent} />
          </TableContainer>
        </Card>
      </RightContainer>
    </div>
  )
}

export default SaisieDesInstruments
