import { Grid } from '@mui/material'
import React, { Fragment } from 'react'
import CustomTextField from 'src/shared-components/StyledTextField/StyledTextField '

interface OtherCommetsProps {
  onFormChange: (values: any) => void
}

function OtherCommets({ onFormChange }: OtherCommetsProps) {
  const handleInputChange = (name: string, value: string) => {
    if (onFormChange) {
      onFormChange({ [name]: value })
    }
  }

  return (
    <Fragment>
      <Grid item xs={12} sm={4}>
        <CustomTextField
          fullWidth
          placeholder={'OPINION '}
          label='OPINION'
          name='OPINION'
          onChange={(e: any) => handleInputChange('CHEQUE', e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <CustomTextField
          fullWidth
          placeholder={'CHEQUE'}
          label='CHEQUE'
          name='CHEQUE'
          onChange={(e: any) => handleInputChange('CHEQUE', e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <CustomTextField
          fullWidth
          placeholder={'TIMBRE'}
          label='TIMBRE'
          name='TIMBRE'
          onChange={(e: any) => handleInputChange('TIMBRE', e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <CustomTextField
          fullWidth
          placeholder={'RENOUVELLEMENT'}
          label='RENOUVELLEMENT'
          name='RENOUVELLEMENT'
          onChange={(e: any) => handleInputChange('RENOUVELLEMENT', e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <CustomTextField
          fullWidth
          placeholder={'TRAITE'}
          label='TRAITE'
          name='TRAITE'
          onChange={(e: any) => handleInputChange('TRAITE', e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <CustomTextField
          fullWidth
          placeholder={'PROROGATION ECHEANCE'}
          label='PROROGATION ECHEANCE'
          name='PROROGATIONECHEANCE'
          onChange={(e: any) => handleInputChange('PROROGATIONECHEANCE', e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={4}></Grid>
      <Grid item xs={12} sm={4}>
        <CustomTextField
          fullWidth
          placeholder={'VIREMENT'}
          label='VIREMENT'
          name='VIREMENT'
          onChange={(e: any) => handleInputChange('VIREMENT', e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        {' '}
        <CustomTextField
          fullWidth
          placeholder={'PROROGATION LITIGE'}
          label='PROROGATION LITIGE'
          name='PROROGATIONLITIGE'
          onChange={(e: any) => handleInputChange('PROROGATIONLITIGE', e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={4}></Grid>
      <Grid item xs={12} sm={4}></Grid>
      <Grid item xs={12} sm={4}>
        {' '}
        <CustomTextField
          fullWidth
          placeholder={'LITIGE'}
          label='LITIGE'
          name='LITIGE'
          onChange={(e: any) => handleInputChange('LITIGE', e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={4}></Grid>
      <Grid item xs={12} sm={4}></Grid>
      <Grid item xs={12} sm={4}>
        {' '}
        <CustomTextField
          fullWidth
          placeholder={'SUR CONTRAT'}
          label='SUR CONTRAT'
          name='SURCONTRAT'
          onChange={(e: any) => handleInputChange('SURCONTRAT', e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={4}></Grid>
      <Grid item xs={12} sm={4}></Grid>
      <Grid item xs={12} sm={4}>
        {' '}
        <CustomTextField
          fullWidth
          placeholder={'IMPAYE'}
          label='IMPAYE'
          name='IMPAYE'
          onChange={(e: any) => handleInputChange('IMPAYE', e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={4}></Grid>
      <Grid item xs={12} sm={4}></Grid>
      <Grid item xs={12} sm={4}>
        {' '}
        <CustomTextField
          fullWidth
          placeholder={'RETROCESSION'}
          label='RETROCESSION'
          name='RETROCESSION'
          onChange={(e: any) => handleInputChange('RETROCESSION', e.target.value)}
        />
      </Grid>
    </Fragment>
  )
}

export default OtherCommets
