// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Stepper from '@mui/material/Stepper'
import { styled } from '@mui/material/styles'
import StepLabel from '@mui/material/StepLabel'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import MuiStep, { StepProps } from '@mui/material/Step'

// ** Third Party Imports
import toast from 'react-hot-toast'
import { ReactDatePickerProps } from 'react-datepicker'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import StepperCustomDot from './StepperCustomDot'
import CustomAvatar from 'src/@core/components/mui/avatar'
import GeneralsInfo from './GeneralsInfo'
import OtherCommets from './OtherCommets'
import ComFactoring from './ComFactoring'
import { Avatar } from '@mui/material'
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

const steps = [
  {
    icon: 'tabler:home',
    title: 'INFOS GENERALES ',
    subtitle: 'Remplir les cases soigneusement '
  },
  {
    icon: 'tabler:user',
    title: 'AUTRES COMM ET FRAIS',
    subtitle: 'Information supplémentaires'
  },
  {
    icon: 'tabler:link',
    title: 'COMMISION FACTORING ET INTERET',
    subtitle: 'DE FINANCEMENT'
  }
]

const Step = styled(MuiStep)<StepProps>(({ theme }) => ({
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  '&:first-of-type': {
    paddingLeft: 0
  },
  '&:last-of-type': {
    paddingRight: 0
  },
  '& .MuiStepLabel-iconContainer': {
    display: ''
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

const Index = ({ popperPlacement }: { popperPlacement: ReactDatePickerProps['popperPlacement'] }) => {
  const [activeStep, setActiveStep] = useState<number>(0)
  const [formValues, setFormValues] = useState<any>({})
  const [, setActiveIcon] = useState<string>(steps[0].icon);

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
    if (activeStep === steps.length - 1) {
      toast.success('Form Submitted')
      console.log('Form Values:', formValues)
    }
  }

  const handleFormChange = (values: any) => {
    setFormValues({ ...formValues, ...values })
  }

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <GeneralsInfo popperPlacement={popperPlacement} onFormChange={handleFormChange} />
      case 1:
        return <OtherCommets onFormChange={handleFormChange} />
      case 2:
        return <ComFactoring popperPlacement={popperPlacement} onFormChange={handleFormChange} />
      default:
        return 'Unknown Step'
    }
  }

  const handleIconClick = (icon: string) => {
    const stepIndex = steps.findIndex(step => step.icon === icon);
    if (stepIndex !== -1) {
      setActiveStep(stepIndex);
      setActiveIcon(icon);
    }
  };

  const renderContent = () => {
    if (activeStep === steps.length) {
      return (
        <>
          <Typography>All steps are completed!</Typography>
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end' }}></Box>
        </>
      )
    } else {
      return (
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary' }}>
                {steps[activeStep].title}
              </Typography>
              <Typography variant='caption' component='p'>
                {steps[activeStep].subtitle}
              </Typography>
            </Grid>
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
        <Stepper activeStep={activeStep} connector={<Icon icon='tabler:chevron-right' />}>
          {steps.map((step, index) => {
            const RenderAvatar = activeStep >= index ? CustomAvatar : Avatar;

            return (
              <Step key={index} onClick={() => handleIconClick(step.icon)}> {}
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
                      <Typography className='step-subtitle'>{step.subtitle}</Typography>
                    </div>
                  </div>
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
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

export default Index
