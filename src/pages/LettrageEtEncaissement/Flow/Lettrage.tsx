import { Button, Card } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SelectAdherent from 'src/shared-components/custom-select/SelectAdherentList'
import CustomTextField from 'src/shared-components/StyledTextField/StyledTextField '

import {
  LeftContainer,
  RightContainer,
  StyledInputGroup,
  StyledInputGroupSpecial,
  StyledLabel,
  FormContainer,
  TableContainer
} from '../components/Styles'
import TableLettrage from '../components/TableLettrage'

const Lettrage = () => {
  const [selectedAdherent, setSelectedAdherent] = useState<{ value: string; label: string } | null>(null)

  const handleAdherentSelect = async (selectedAdherent: { value: string; label: string } | null) => {
    if (selectedAdherent) {
      setSelectedAdherent(selectedAdherent)
    } else {
      setSelectedAdherent(null)
    }
  }

  function handleSave(): void {
    throw new Error('Function not implemented.')
  }

  return (
    <div>
      <LeftContainer>
        <Card>
          <FormContainer>
            <StyledInputGroup>
              <StyledLabel htmlFor='Montant_Ouvert_Facture'>Montant Ouvert Facture</StyledLabel>
              <CustomTextField fullWidth={true} readOnly /* props */ />
            </StyledInputGroup>
            <StyledInputGroup>
              <StyledLabel htmlFor='Montant Encaissement'>Montant Encaissement</StyledLabel>
              <CustomTextField fullWidth={true} /* props */ />
            </StyledInputGroup>
            <StyledInputGroup>
              <StyledLabel htmlFor='Retenue à la source'>Retenue à la source</StyledLabel>
              <CustomTextField fullWidth={true} /* props */ />
            </StyledInputGroup>
            <StyledInputGroup>
              <StyledLabel htmlFor='Lettré'>Lettré</StyledLabel>
              <CustomTextField fullWidth={true} readOnly /* props */ />
            </StyledInputGroup>
            <StyledInputGroup>
              <StyledLabel htmlFor='Rest'>Rest</StyledLabel>
              <CustomTextField fullWidth={true} readOnly /* props */ />
            </StyledInputGroup>

            <Button variant='contained' onClick={handleSave} style={{ width: '100%' }}>
              Valider
            </Button>
          </FormContainer>
        </Card>
      </LeftContainer>

      <RightContainer>
        <Card>
          <StyledInputGroupSpecial>
            <StyledLabel htmlFor='NomAdherent'>Nom Adherent</StyledLabel>
            <SelectAdherent onAdherentSelect={handleAdherentSelect} />
          </StyledInputGroupSpecial>
          <TableContainer>
            <TableLettrage selectedAdherent={selectedAdherent} />
          </TableContainer>
        </Card>
      </RightContainer>
    </div>
  )
}

export default Lettrage
