import { Grid, TextField } from '@mui/material'
import { useState } from 'react'
import CustomTextField from 'src/@core/components/mui/text-field'

interface CompanyData {
  RIB: string
  agence: string
  banque: string
}

const Bank = () => {
  const [companyData, setCompanyData] = useState<CompanyData>({
    RIB: '',
    Agency: '',
    Bank: ''
  })

  const handleChange = (field: keyof CompanyData, value: string): void => {
    setCompanyData(prevData => ({ ...prevData, [field]: value }))
  }

  return (
    <>
      <Grid item xs={12} sm={6}>
        <CustomTextField
          label={'RIB '}
          name={'RIB'}
          placeholder={'Tapez RIB '}
          value={companyData.RIB}
          onChange={e => handleChange('RIB', e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CustomTextField
          label={'Banque '}
          name={'Bank'}
          placeholder={'Tapez banque '}
          value={companyData.Bank}
          onChange={e => handleChange('Bank', e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CustomTextField
          label={'Agence '}
          name={'Agency'}
          placeholder={'Tapez agence '}
          value={companyData.Agency}
          onChange={e => handleChange('Agency', e.target.value)}
        />
      </Grid>
    </>
  )
}

export default Bank
