// ** React Imports
import React, { Fragment, useState } from 'react'

// ** MUI Imports

import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import { Grid, Button } from '@mui/material'

// ** Styled Component
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'

import DatePicker from 'react-datepicker'

// ** Custom Component Imports
import CustomInput from '../PickersCustomInput'

// ** Types
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import { DateType } from 'src/types/forms/reactDatepickerTypes'
import CustomTextField from 'src/@core/components/mui/text-field'

const EditDetails = () => {
  // ** States

  const [Reférence, setReférence] = useState<string>('')
  const [Statut, setStatut] = useState<string>('')
  const [Ref_contrat_papier, setRef_contrat_papier] = useState<string>('')
  const [CA_Export, setCA_Export] = useState<string>('')
  const [CA_Domicile, setCA_Domicile] = useState<string>('')
  const [Nbr_d_acheteurs_Prévus, setNbr_d_acheteurs_Prévus] = useState<string>('')
  const [Nbr_d_factures_Prévus, setNbr_d_factures_Prévus] = useState<string>('')
  const [chiffres_d_affaires, setchiffres_d_affaires] = useState<string>('')
  const [Nbr_d_avoirs_Prévus, setNbr_d_avoirs_Prévus] = useState<string>('')
  const [date, setDate] = useState<DateType>(new Date())
  const [Service, setService] = useState<string>('')
  const [Délai_Max_de_Réglement, setDélai_Max_de_Réglement] = useState<string>('')
  const [Nbr_de_remise_Prévus, setNbr_de_remise_Prévus] = useState<string>('')
  const [Délai_Moyen_de_Réglement, setDélai_Moyen_de_Réglement] = useState<string>('')
  const [Fonds_de_Reserve, setFonds_de_Reserve] = useState<string>('')
  const [FACT_REG_CTR, setFACT_REG_CTR] = useState<string>('')

  const handleReset = () => {
    setNbr_d_factures_Prévus('')
    setReférence('')
    setStatut('')
    setRef_contrat_papier('')
    setCA_Domicile('')
    setCA_Export('')
    setchiffres_d_affaires('')
    setNbr_d_acheteurs_Prévus('')
    setNbr_d_avoirs_Prévus('')
    setchiffres_d_affaires('')
    setService('')
    setNbr_de_remise_Prévus('')
    setDélai_Max_de_Réglement('')
    setDélai_Moyen_de_Réglement('')
    setFonds_de_Reserve('')
    setFACT_REG_CTR('')
  }

  return (
    <Box sx={{ p: 5 }}>
      <Grid justifyContent='center' alignItems='center'>
        <Fragment>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <p>REF </p>
              <CustomTextField
                value={Reférence}
                defaultValue='Disabled'
                disabled
                inputProps={{ 'aria-label': 'description' }}
                onChange={e => setReférence(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <p>Statut </p>
              <CustomTextField value={Statut} onChange={e => setStatut(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <p>Réf Contrat Papier</p>
              <CustomTextField value={Ref_contrat_papier} onChange={e => setRef_contrat_papier(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <p>Date de Résiliation</p>
              <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <div>
                  <DatePickerWrapper xs={12} sm={3}></DatePickerWrapper>
                  <DatePicker selected={date} onChange={(date: Date) => setDate(date)} customInput={<CustomInput />} />
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <p>Date de Prochaine Révision</p>
              <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <div>
                  <DatePicker selected={date} onChange={(date: Date) => setDate(date)} customInput={<CustomInput />} />
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <p>Chiffres d'affaires</p>
              <CustomTextField value={chiffres_d_affaires} onChange={e => setchiffres_d_affaires(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <p>Service </p>
              <RadioGroup row onChange={e => setService(e.target.value)}>
                <FormControlLabel value='Oui' control={<Radio />} label='Oui' />
                <FormControlLabel value='Non' control={<Radio />} label='Non' />
              </RadioGroup>
            </Grid>
            <Grid item xs={12} sm={3}>
              <p>CA Export </p>
              <CustomTextField value={CA_Export} onChange={e => setCA_Export(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <p>CA Domicile </p>
              <CustomTextField value={CA_Domicile} onChange={e => setCA_Domicile(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <p>Nbr d'acheteurs Prévus </p>
              <CustomTextField
                value={Nbr_d_acheteurs_Prévus}
                onChange={e => setNbr_d_acheteurs_Prévus(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <p>Nbr Factures Prévues</p>
              <CustomTextField value={Nbr_d_factures_Prévus} onChange={e => setNbr_d_factures_Prévus(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <p>Nbr d'avoirs Prévus</p>
              <CustomTextField value={Nbr_d_avoirs_Prévus} onChange={e => setNbr_d_avoirs_Prévus(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <p>Nbr de remise Prévus</p>
              <CustomTextField value={Nbr_de_remise_Prévus} onChange={e => setNbr_de_remise_Prévus(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <p>Délai Moyen de Réglement</p>
              <CustomTextField
                value={Délai_Moyen_de_Réglement}
                onChange={e => setDélai_Moyen_de_Réglement(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <p>Délai Max de Réglement</p>
              <CustomTextField
                value={Délai_Max_de_Réglement}
                onChange={e => setDélai_Max_de_Réglement(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <p>Fonds de reserve</p>
              <CustomTextField value={Fonds_de_Reserve} onChange={e => setFonds_de_Reserve(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <p>FACT REG CTR </p>
              <RadioGroup row onChange={e => setFACT_REG_CTR(e.target.value)}>
                <FormControlLabel value='Oui' control={<Radio />} label='Oui' />
                <FormControlLabel value='Non' control={<Radio />} label='Non' />
              </RadioGroup>
            </Grid>
          </Grid>
          <Grid alignItems='center'>
            <Button variant='contained'> Modifier </Button>
          </Grid>
          <Divider sx={{ m: '0 !important' }} />
        </Fragment>
      </Grid>
    </Box>
  )
}

export default EditDetails
