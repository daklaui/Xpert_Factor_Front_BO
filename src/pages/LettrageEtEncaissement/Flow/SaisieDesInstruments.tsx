import React, { useState } from 'react'
import styled from '@emotion/styled'
import StyledSelect from 'src/pages/Contract/Flow/StyledInputs/CustomSelect'

import SelectAdherent from 'src/shared-components/custom-select/SelectAdherentList'
import StyledDatePicker from 'src/pages/Contract/Flow/StyledInputs/StyledDatePicker'
import { ReactDatePickerProps } from 'react-datepicker'
import { DateType } from 'src/types/forms/reactDatepickerTypes'
import CustomTextField from 'src/shared-components/StyledTextField/StyledTextField '
import SelectListOfDevises from 'src/shared-components/custom-select/SelectListOfDevises'
import TableBasic from './TableBasic'

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
  const [selectedAdherent, setSelectedAdherent] = useState(null)

  const handleAdherentChange = value => {
    setSelectedAdherent(value)
  }

  return (
    <div>
      <LeftContainer>
        <FormContainer>
          <StyledInputGroup>
            <StyledLabel htmlFor='typeInstrument'>Type Instrument</StyledLabel>
            <StyledSelect /* props */ />
          </StyledInputGroup>
          <StyledInputGroup>
            <StyledLabel htmlFor='rib'>RIB</StyledLabel>
            <StyledSelect /* props */ />
          </StyledInputGroup>
          <StyledInputGroup>
            <StyledLabel htmlFor='refSequentielle'>Réf Séquentielle</StyledLabel>
            <CustomTextField fullWidth={true} /* props */ />
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
        <StyledInputGroup>
          <StyledLabel htmlFor='NomAdherent'>Nom Adherent</StyledLabel>
          <SelectAdherent onSearch={handleAdherentChange} />
          <CustomTextField fullWidth={true} /* props */ />
        </StyledInputGroup>
        <TableContainer>
          {' '}
          <TableBasic selectedAdherent={selectedAdherent} />
        </TableContainer>
      </RightContainer>
    </div>
  )
}

export default SaisieDesInstruments
