import React, { useState } from 'react'
import { Fragment } from 'react'
import Grid from '@mui/material/Grid'
import CustomTextField from 'src/SharedComponents/StyledTextField/StyledTextField '
import Select from 'react-select'
import SelectAdherent from 'src/shared-components/custom-select/SelectAdherentList'
import { ReactDatePickerProps } from 'react-datepicker'
import CustomInput from './PickersCustomInput'
import SelectIndividus from 'src/shared-components/custom-select/SelectIndividuals'
import { DateType } from 'src/types/forms/reactDatepickerTypes'

import StyledDatePicker from './StyledInputs/StyledDatePicker'
import StyledLabel from './StyledInputs/StyledLabel'

function GeneralsInfo({ popperPlacement }: { popperPlacement: ReactDatePickerProps['popperPlacement'] }) {
  const [isClearable] = useState(true)
  const [date, setDate] = useState<DateType>(new Date())

  const handleSearch = (value: any) => {
    // Handle the selected value as needed
    console.log('Selected value:', value)
  }

  return (
    <Fragment>
      <Grid item sm={3}>
        <CustomTextField fullWidth placeholder={'anis'} label='anis' name='anis' correctValue='anis' />
      </Grid>
      <Grid item sm={3}>
        <StyledLabel>Type contrat </StyledLabel>
        <Select className='basic-single' classNamePrefix='select' isClearable={isClearable} name='color' />
      </Grid>
      <Grid item sm={3}>
        <CustomTextField
          fullWidth
          placeholder={'Tapez le chiffres d affaires '}
          label='Chiffres d affaires'
          name='ChiffreDaffaire'
          correctValue=''
        />
      </Grid>
      <Grid item sm={3}>
        <CustomTextField
          fullWidth
          placeholder={'Factures transmises avec '}
          label='Factures transmises avec'
          name='Factures transmises avec'
          correctValue=''
        />
      </Grid>
      <Grid item sm={3}>
        <StyledLabel> Status Contract </StyledLabel>
        <Select className='basic-single' classNamePrefix='select' isClearable={isClearable} name='color' />
      </Grid>
      <Grid item sm={3}>
        <StyledLabel>Devise</StyledLabel>
        <SelectAdherent onSearch={handleSearch} labelText='Select Adherent' />
      </Grid>
      <Grid item sm={3}>
        <CustomTextField
          fullWidth
          placeholder={'Tapez le Dont Export '}
          label='Dont Export'
          name='Dont Export'
          correctValue=''
        />
      </Grid>

      <Grid item sm={3}>
        <CustomTextField
          fullWidth
          placeholder={'Tapez le Nbr d acheteur prévus '}
          label='Nbr d acheteur prévus'
          name="Nbr d 'acheteur prévus"
          correctValue=''
        />
      </Grid>

      <Grid item sm={3}>
        <StyledLabel> Nom Adhérent </StyledLabel>
        <SelectIndividus onSearch={handleSearch} labelText='Select Adherent' />
      </Grid>

      <Grid item sm={3}>
        <StyledLabel> Date de résiliation </StyledLabel>
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
          name='Dont dom'
          correctValue=''
        />
      </Grid>
      <Grid item sm={3}>
        <CustomTextField
          fullWidth
          placeholder={'Dont dom '}
          label='Chiffres d affaires'
          name='Dont dom'
          correctValue=''
        />
      </Grid>
      <Grid item sm={3}>
        <StyledLabel> Date Signature </StyledLabel>
        <StyledDatePicker
          selected={date}
          id='basic-input'
          popperPlacement={popperPlacement}
          onChange={(date: Date) => setDate(date)}
          customInput={<CustomInput label='' />}
        />
      </Grid>

      <Grid item sm={3}>
        <StyledLabel>Date de prochaine révision</StyledLabel>
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
          placeholder={'Limite de financement '}
          label='Limite de financement'
          name='Limite de financement'
          correctValue=''
        />
      </Grid>
      <Grid item sm={3}>
        <CustomTextField
          fullWidth
          placeholder={"Nbr d'avoirs Prévus"}
          label="Nbr d'avoirs Prévus"
          name="Nbr d'avoirs Prévus"
          correctValue=''
        />
      </Grid>

      <Grid item sm={3}>
        <StyledDatePicker
          selected={date}
          id='basic-input'
          popperPlacement={popperPlacement}
          onChange={(date: Date) => setDate(date)}
          customInput={<CustomInput label='' />}
        />
      </Grid>
      <Grid item sm={3}></Grid>
      <Grid item sm={3}>
        <CustomTextField
          fullWidth
          placeholder={'Délai moyen de réglement (jour) '}
          label='Délai moyen de réglement (jour)'
          name='Délai moyen de réglement (jour)'
          correctValue=''
        />
      </Grid>
      <Grid item sm={3}>
        <CustomTextField
          fullWidth
          placeholder={' Délai Max de règlement '}
          label=' Délai Max de règlement'
          name=' Délai Max de règlement'
          correctValue=''
        />
      </Grid>
      <Grid item sm={3}></Grid>
      <Grid item sm={3}></Grid>
      <Grid item sm={3}>
        <CustomTextField
          fullWidth
          placeholder={' Délai Max de règlement '}
          label=' Délai Max de règlement'
          name=' Délai Max de règlement'
          correctValue=''
        />
      </Grid>
      <Grid item sm={3}>
        <StyledLabel> Nbr de remise Prévues </StyledLabel>
        <CustomTextField
          fullWidth
          placeholder={'Nbr de remise Prévues '}
          label='Nbr de remise Prévues'
          name='Nbr de remise Prévues'
          correctValue=''
        />
      </Grid>
    </Fragment>
  )
}

export default GeneralsInfo
