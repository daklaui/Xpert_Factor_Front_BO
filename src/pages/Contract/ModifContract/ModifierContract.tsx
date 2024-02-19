/* eslint-disable @typescript-eslint/no-unused-vars */
// ** React Imports
import React, { ChangeEvent, Fragment, useState } from 'react'

// ** MUI Imports
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'

import MuiStep, { StepProps } from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Stepper from '@mui/material/Stepper'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { Grid } from '@mui/material'

// ** Third Party Imports
import toast from 'react-hot-toast'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'
import StepperCustomDot from './StepperCustomDot'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

// ** Styled Component
import { FormControlLabel, IconButton, InputAdornment, Radio, RadioGroup } from '@mui/material'
import StepperWrapper from 'src/@core/styles/mui/stepper'

import DatePicker from 'react-datepicker'

// ** Custom Component Imports
import CustomInput from './PickersCustomInput'

// ** Types
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import { DateType } from 'src/types/forms/reactDatepickerTypes'

interface State {
  password: string
  password2: string
  showPassword: boolean
  showPassword2: boolean
}

const steps = [
  {
    icon: 'tabler:home',
    title: ' détails '
  },
  {
    icon: 'tabler:activity',
    title: 'Activité de société'
  }
]

const Step = styled(MuiStep)<StepProps>(({ theme }) => ({
  paddingLeft: theme.spacing(5),
  paddingRight: theme.spacing(5),
  '&:first-of-type': {
    paddingLeft: 0
  },
  '&:last-of-type': {
    paddingRight: 0
  },
  '& .MuiStepLabel-iconContainer': {
    display: 'none'
  },
  '& .step-subtitle': {
    color: `${theme.palette.text.disabled} !important`
  },
  '& + svg': {
    color: theme.palette.text.disabled
  },
  '&.Mui-completed .step-title': {
    color: theme.palette.text.disabled
  },
  '&.Mui-completed + svg': {
    color: theme.palette.primary.main
  }
}))

const ModifierContract = () => {
  // ** States
  const [Reférence, setReférence] = useState<string>('')

  const [Statut, setStatut] = useState<string>('')
  const [Ref_contrat_papier, setRef_contrat_papier] = useState<string>('')
  const [CA_Export, setCA_Export] = useState<string>('')
  const [CA_Domicile, setCA_Domicile] = useState<string>('')
  const [Nbr_d_acheteurs_Prévus, setNbr_d_acheteurs_Prévus] = useState<string>('')
  const [Nbr_d_factures_Prévus, setNbr_d_factures_Prévus] = useState<string>('')
  const [grp_soc, setGroupeSocietes] = useState<string>('')
  const [banque, setBanque] = useState<string>('')
  const [agence, setAgence] = useState<string>('')
  const [chiffres_d_affaires, setchiffres_d_affaires] = useState<string>('')
  const [Nbr_d_avoirs_Prévus, setNbr_d_avoirs_Prévus] = useState<string>('')
  const [date, setDate] = useState<DateType>(new Date())
  const [Service, setService] = useState<string>('')
  const [Délai_Max_de_Réglement, setDélai_Max_de_Réglement] = useState<string>('')
  const [Nbr_de_remise_Prévus, setNbr_de_remise_Prévus] = useState<string>('')
  const [Délai_Moyen_de_Réglement, setDélai_Moyen_de_Réglement] = useState<string>('')
  const [Fonds_de_Reserve, setFonds_de_Reserve] = useState<string>('')
  const [FACT_REG_CTR, setFACT_REG_CTR] = useState<string>('')

  const [activeStep, setActiveStep] = useState<number>(0)
  const [validateStep, setvalidateStep] = useState<string>('')

  // Handle Stepper
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }
  const handleNext = () => {
    const isStepValid = activeStep

    if (isStepValid) {
      setActiveStep(prevActiveStep => prevActiveStep + 1)

      if (activeStep === steps.length - 1) {
        toast.success('Formulaire soumis')
      }
    }
  }

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

    setActiveStep(0)
  }

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Fragment>
            <Grid item xs={12} sm={6} color='black'>
              <p>Statut </p>
              <TextField fullWidth value={Statut} onChange={e => setStatut(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6} color='black'>
              <p>Réf Contrat Papier</p>
              <TextField fullWidth value={Ref_contrat_papier} onChange={e => setRef_contrat_papier(e.target.value)} />
            </Grid>

            <Grid item xs={12} sm={6} color='black'>
              <p>Date de Résiliation</p>
              <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <div>
                  <DatePicker selected={date} onChange={(date: Date) => setDate(date)} customInput={<CustomInput />} />
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} color='black'>
              <p>Date de Prochaine Révision</p>
              <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <div>
                  <DatePicker selected={date} onChange={(date: Date) => setDate(date)} customInput={<CustomInput />} />
                </div>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} color='black'>
              <p>chiffres d'affaires</p>
              <TextField fullWidth value={chiffres_d_affaires} onChange={e => setchiffres_d_affaires(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <p>Service </p>
              <RadioGroup row onChange={e => setService(e.target.value)}>
                <FormControlLabel value='Oui' control={<Radio />} label='Oui' />
                <FormControlLabel value='Non' control={<Radio />} label='Non' />
              </RadioGroup>
            </Grid>
            <Grid item xs={12} sm={6} color='black'>
              <p>CA Export </p>
              <TextField fullWidth value={CA_Export} onChange={e => setCA_Export(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6} color='black'>
              <p>CA Domicile </p>
              <TextField fullWidth value={CA_Domicile} onChange={e => setCA_Domicile(e.target.value)} />
            </Grid>

            <Grid item xs={12} sm={6} color='black'>
              <p>Nbr d'acheteurs Prévus </p>
              <TextField
                fullWidth
                value={Nbr_d_acheteurs_Prévus}
                onChange={e => setNbr_d_acheteurs_Prévus(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6} color='black'>
              <p>Nbr Factures Prévues</p>
              <TextField
                fullWidth
                value={Nbr_d_factures_Prévus}
                onChange={e => setNbr_d_factures_Prévus(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6} color='black'>
              <p>Nbr d'avoirs Prévus</p>
              <TextField fullWidth value={Nbr_d_avoirs_Prévus} onChange={e => setNbr_d_avoirs_Prévus(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6} color='black'>
              <p>Nbr de remise Prévus</p>
              <TextField
                fullWidth
                value={Nbr_de_remise_Prévus}
                onChange={e => setNbr_de_remise_Prévus(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6} color='black'>
              <p>Délai Moyen de Réglement</p>
              <TextField
                fullWidth
                value={Délai_Moyen_de_Réglement}
                onChange={e => setDélai_Moyen_de_Réglement(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6} color='black'>
              <p>Délai Max de Réglement</p>
              <TextField
                fullWidth
                value={Délai_Max_de_Réglement}
                onChange={e => setDélai_Max_de_Réglement(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6} color='black'>
              <p>Fonds de reserve</p>
              <TextField fullWidth value={Fonds_de_Reserve} onChange={e => setFonds_de_Reserve(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <p>FACT REG CTR </p>
              <RadioGroup row onChange={e => setFACT_REG_CTR(e.target.value)}>
                <FormControlLabel value='Oui' control={<Radio />} label='Oui' />
                <FormControlLabel value='Non' control={<Radio />} label='Non' />
              </RadioGroup>
            </Grid>
          </Fragment>
        )
      case 1:
        function handleRadioChange(_event: ChangeEvent<HTMLInputElement>, value: string): void {
          throw new Error('Function not implemented.')
        }

        return <Fragment key={step}></Fragment>

      default:
        return 'Unknown Step'
    }
  }
  const renderContent = () => {
    if (activeStep === steps.length) {
      return (
        <>
          <Typography>All steps are completed!</Typography>
          <Box sx={{ mt: 5, display: 'flex', justifyContent: 'flex-end' }}>
            <Button size='large' variant='contained' onClick={handleReset}>
              Reset
            </Button>
          </Box>
        </>
      )
    } else {
      return (
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            {getStepContent(activeStep)}
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button
                size='large'
                variant='outlined'
                color='secondary'
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                Back
              </Button>
              <Button size='large' variant='contained' onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
              </Button>
            </Grid>
          </Grid>
        </form>
      )
    }
  }

  return (
    <Card>
      <CardContent>
        <StepperWrapper>
          <Stepper activeStep={activeStep} connector={<Icon icon='tabler:chevron-right' />}>
            {steps.map((step, index) => {
              const RenderAvatar = activeStep >= index ? CustomAvatar : Avatar

              return (
                <Step key={index}>
                  <StepLabel StepIconComponent={StepperCustomDot}>
                    <div className='step-label'>
                      <RenderAvatar
                        variant='rounded'
                        {...(activeStep >= index && { skin: 'light' })}
                        {...(activeStep === index && { skin: 'filled' })}
                        {...(activeStep >= index && { color: 'primary' })}
                        sx={{
                          ...(activeStep === index && { boxShadow: theme => theme.shadows[3] }),
                          ...(activeStep > index && { color: theme => hexToRGBA(theme.palette.primary.main, 0.4) })
                        }}
                      >
                        <Icon icon={step.icon} />
                      </RenderAvatar>
                      <div>
                        <Typography className='step-title'>{step.title}</Typography>
                        {/* <Typography className='step-subtitle'>{step.subtitle}</Typography> */}
                      </div>
                    </div>
                  </StepLabel>
                </Step>
              )
            })}
          </Stepper>
        </StepperWrapper>
      </CardContent>
      <Divider sx={{ m: '0 !important' }} />
      <CardContent>
        <DatePickerWrapper sx={{ '& .react-datepicker-wrapper': { width: 'auto' } }}>
          {renderContent()}
        </DatePickerWrapper>
      </CardContent>
    </Card>
  )
}

export default ModifierContract
