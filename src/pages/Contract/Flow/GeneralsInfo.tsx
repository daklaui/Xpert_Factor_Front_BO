import React, { useState } from 'react'
import { Fragment } from 'react'
import Grid from '@mui/material/Grid'
import SelectAdherent from 'src/shared-components/custom-select/SelectAdherentList'
import { ReactDatePickerProps } from 'react-datepicker'
import CustomInput from './PickersCustomInput'
import SelectIndividus from 'src/shared-components/custom-select/SelectIndividuals'
import { DateType } from 'src/types/forms/reactDatepickerTypes'

import StyledDatePicker from '../../../shared-components/StyledInputs/StyledDatePicker'
import StyledLabel from '../../../shared-components/StyledInputs/StyledLabel'
import CustomTextField from 'src/shared-components/StyledTextField/StyledTextField '
import CustomSelect from '../../../shared-components/StyledInputs/CustomSelect'

interface GeneralsInfoProps {
  popperPlacement: ReactDatePickerProps['popperPlacement']
  onFormChange: (values: any) => void
  fullWidth?: boolean
}

function GeneralsInfo({ popperPlacement, onFormChange }: GeneralsInfoProps) {
  const [date, setDate] = useState<DateType>(new Date())
  const [dates, setDates] = useState({
    StartDate: new Date(),
    EndDate: new Date()
  })

  const handleSearch = (value: any) => {
    console.log('Selected value:', value)
  }

  const handleInputChange = (name: string, value: any) => {
    onFormChange({ [name]: value })

    let updatedDates = { ...dates, [name]: value }

    if (name === 'StartDate') {
      const newEndDate = new Date(value)
      newEndDate.setFullYear(newEndDate.getFullYear() + 1)
      updatedDates = { ...updatedDates, EndDate: newEndDate }
    }

    setDates(updatedDates)
    onFormChange(updatedDates)
  }

  return (
    <Fragment>
      <Grid item sm={3}>
        <CustomTextField
          fullWidth
          placeholder={'Numéro contract papier'}
          label='Numéro contract papier'
          name='NumContract'
          onChange={(e: any) => handleInputChange('NumContract', e.target.value)}
        />
      </Grid>
      <Grid item sm={3}>
        <>Type contrat </>
        <CustomSelect />
      </Grid>
      <Grid item sm={3}>
        <CustomTextField
          fullWidth
          placeholder={'Tapez le chiffres d affaires '}
          label='Chiffres d affaires'
          name='ChiffreDaffaire'
          onChange={(e: any) => handleInputChange('ChiffreDaffaire', e.target.value)}
        />
      </Grid>
      <Grid item sm={3}>
        <CustomTextField
          fullWidth
          placeholder={'Factures transmises avec '}
          label='Factures transmises avec'
          name='FacturesTransmises'
          onChange={(e: any) => handleInputChange('FacturesTransmises', e.target.value)}
        />
      </Grid>
      <Grid item sm={3}>
        <StyledLabel htmlFor='Status Contract'> Status Contract </StyledLabel>
        <CustomSelect />
      </Grid>
      <Grid item sm={3}>
        <StyledLabel htmlFor='Devise'>Devise</StyledLabel>
        <SelectAdherent onSearch={handleSearch} labelText='Select Adherent' />
      </Grid>
      <Grid item sm={3}>
        <CustomTextField
          fullWidth
          placeholder={'Tapez le Dont Export '}
          label='Dont Export'
          name='DontExport'
          onChange={(e: any) => handleInputChange('DontExport', e.target.value)}
        />
      </Grid>

      <Grid item sm={3}>
        <CustomTextField
          fullWidth
          placeholder={'Tapez le Nbr d acheteur prévus '}
          label='Nbr d acheteur prévus'
          name='NbrAchePrévus'
          onChange={(e: any) => handleInputChange('NbrAchePrévus', e.target.value)}
        />
      </Grid>

      <Grid item sm={3}>
        <StyledLabel htmlFor='Nom Adhérent'> Nom Adhérent </StyledLabel>
        <SelectIndividus onSearch={handleSearch} labelText='Select Adherent' />
      </Grid>

      <Grid item sm={3}>
        <StyledLabel htmlFor='Date de résiliation'> Date de résiliation </StyledLabel>
        <br />
        <StyledDatePicker
          selected={date}
          id='basic-input'
          popperPlacement={popperPlacement}
          onChange={(date: Date) => setDate(date)}
          customInput={<CustomInput label='' />}
        />
      </Grid>
      <Grid item sm={3}>
        <CustomTextField
          fullWidth
          placeholder={'Tapez le Dont dom '}
          label='Dont dom'
          name='DontDom'
          onChange={(e: any) => handleInputChange('DontDom', e.target.value)}
        />
      </Grid>
      <Grid item sm={3}>
        <CustomTextField
          fullWidth
          placeholder={'Nbr factures Prévues'}
          label='Nbr factures Prévues'
          name='NbFacturesPrévues'
          onChange={(e: any) => handleInputChange('NbFacturesPrévues', e.target.value)}
        />
      </Grid>
      <Grid item sm={3}>
        <StyledLabel htmlFor='Date Signature'> Date Signature </StyledLabel>
        <br />
        <StyledDatePicker
          selected={date}
          id='basic-input'
          popperPlacement={popperPlacement}
          onChange={(date: Date) => setDate(date)}
          customInput={<CustomInput label='' />}
        />
      </Grid>

      <Grid item sm={3}>
        <StyledLabel htmlFor='Date de prochaine révision'>Date de prochaine révision</StyledLabel>
        <br />
        <StyledDatePicker
          selected={dates.EndDate}
          id='endDatePicker'
          popperPlacement={popperPlacement}
          onChange={(date: Date) => handleInputChange('EndDate', date)}
          customInput={<CustomInput label='' />}
        />
      </Grid>
      <Grid item sm={3}>
        <CustomTextField
          fullWidth
          placeholder={'Limite de financement '}
          label='Limite de financement'
          name='LimiteDeFinancement'
          onChange={(e: any) => handleInputChange('LimiteDeFinancement', e.target.value)}
        />
      </Grid>
      <Grid item sm={3}>
        <CustomTextField
          fullWidth
          placeholder={"Nbr d'avoirs Prévus"}
          label="Nbr d'avoirs Prévus"
          name='NbrAvoirsPrévus'
          onChange={(e: any) => handleInputChange('NbrAvoirsPrévus', e.target.value)}
        />
      </Grid>

      <Grid item sm={3}>
        <StyledLabel htmlFor='Date Démarrage'>Date Démarrage</StyledLabel>
        <br />
        <StyledDatePicker
          selected={dates.StartDate}
          id='startDatePicker'
          popperPlacement={popperPlacement}
          onChange={(date: Date) => handleInputChange('StartDate', date)}
          customInput={<CustomInput label='' />}
        />
      </Grid>
      <Grid item sm={3}></Grid>
      <Grid item sm={3}>
        <CustomTextField
          fullWidth
          placeholder={'Délai moyen de réglement (jour) '}
          label='Délai moyen de réglement (jour)'
          name='DélaiMoyenRéglement'
          onChange={(e: any) => handleInputChange('DélaiMoyenRéglement', e.target.value)}
        />
      </Grid>
      <Grid item sm={3}>
        <CustomTextField
          fullWidth
          placeholder={' Délai Max de règlement '}
          label=' Délai Max de règlement'
          name=' DélaiMaxRèglement'
          onChange={(e: any) => handleInputChange('DélaiMaxRèglement', e.target.value)}
        />
      </Grid>
      <Grid item sm={3}></Grid>
      <Grid item sm={3}></Grid>
      <Grid item sm={3}>
        <CustomTextField
          fullWidth
          placeholder={' Comm.Min Factoring '}
          label=' Comm.Min Factoring'
          name='CommMinFactoring'
          onChange={(e: any) => handleInputChange('CommMinFactoring', e.target.value)}
        />
      </Grid>
      <Grid item sm={3}>
        <StyledLabel htmlFor='Nbr de remise Prévues'> Nbr de remise Prévues </StyledLabel>
        <CustomTextField
          fullWidth
          placeholder={'Nbr de remise Prévues '}
          label='Nbr de remise Prévues'
          name='NbrDeRemisePrévues'
          onChange={(e: any) => handleInputChange('NbrDeRemisePrévues', e.target.value)}
        />
      </Grid>
    </Fragment>
  )
}

export default GeneralsInfo
