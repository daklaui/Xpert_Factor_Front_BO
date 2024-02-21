/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, Fragment } from 'react';
import { styled } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import MuiStep from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba';
import toast from 'react-hot-toast';
import Icon from 'src/@core/components/icon';
import StepperCustomDot from './Form_Individual/StepperCustomDot';
import StepperWrapper from 'src/@core/styles/mui/stepper';
import DatePicker from 'react-datepicker';
import CustomInput from './Form_Individual/PickersCustomInput';
import Company from './Form_Individual/Steps/Company';
import TVA from './Form_Individual/Steps/TVA';
import Bank from './Form_Individual/Steps/Bank';
import MoreInfo from './Form_Individual/Steps/MoreInfo';
import AddContact from './Form_Individual/Steps/AddContact';
import { Grid } from '@mui/material';
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker';

// ** MUI Imports
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
import OutlinedInput from '@mui/material/OutlinedInput'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MuiStep, { StepProps } from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Stepper from '@mui/material/Stepper'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { Checkbox, FormControl, FormHelperText, Grid, InputLabel, MenuItem } from '@mui/material'

// ** Third Party Imports
import toast from 'react-hot-toast'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

// ** Styled Component
import { FormControlLabel, IconButton, InputAdornment, Radio, RadioGroup } from '@mui/material'
import StepperWrapper from 'src/@core/styles/mui/stepper'

import DatePicker from 'react-datepicker'

// ** Custom Component Imports
import CustomInput from './Form_Individual/PickersCustomInput'

// ** Types
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import { DateType } from 'src/types/forms/reactDatepickerTypes'
import Login from '@mui/icons-material/Login'
import { date } from 'yup'
import TVA from './Form_Individual/Steps/TVA'
import AddContact from './Form_Individual/Steps/AddContact'
import Bank from './Form_Individual/Steps/Bank'
import MoreInfo from './Form_Individual/Steps/MoreInfo'
import Company from './Form_Individual/Steps/Company'

const steps = [
  {
    icon: 'tabler:home',
    title: 'Détails Société',
  },
  {
    icon: 'tabler:percentage',
    title: 'TVA ',
  },
  {
    icon: 'tabler:building-bank',
    title: 'Banque ',
  },
  {
    icon: 'tabler:user',
    title: "Plus d'information",
  },
  {
    icon: 'tabler:user-plus',
    title: "Ajouter contact",
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
}));

const FormIndividual = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNext = () => {
    const isStepValid = validateStep(activeStep);

    if (isStepValid) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);

      if (activeStep === steps.length - 1) {
        toast.success('Formulaire soumis');
      }
    }
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const getStepContent = (activeStep: number): JSX.Element | string => {
    switch (activeStep) {
      case 0:
        return (
          <Company
            onSearch={(value: any): void => {
              throw new Error('Function not implemented.');
            }}
          />
        );
      case 1:
        return <TVA />;
      case 2:
        return <Bank />;
      case 3:
        return (
          <MoreInfo
            onSearch={(value: any): void => {
              throw new Error('Function not implemented.');
            }}
          />
        );
      case 4:
        return (
          <Fragment key={step}>
            <Grid item xs={12} sm={6}>
      case 4:
        return (
          <AddContact
            onSearch={(value: any): void => {
              throw new Error('Function not implemented.');
            }}
          />
        );
      default:
        return 'Unknown Step';
    }
  };

  function validateStep(activeStep: number): boolean {
    return true; // Add your validation logic here if needed
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
                Retour
              </Button>
              <Button size='large' variant='contained' onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Envoyer' : 'Suivant'}
              </Button>
            </Grid>
          </Grid>
        </form>
      )
    }
  };

  return (
    <Card>
      <CardContent>
        <StepperWrapper>
          <Stepper activeStep={activeStep} connector={<Icon icon='tabler:chevron-right' />}>
            {steps.map((step, index) => {
              const RenderAvatar = activeStep >= index ? Avatar : Icon;

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
  );
};

export default FormIndividual;
