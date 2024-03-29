import { Grid, Button } from '@mui/material'
import { Fragment, useState } from 'react'
import CustomTextField from 'src/@core/components/mui/text-field'
import CompanyData from 'src/pages/individual/Flow/Form_Individual/interface/FormIndividual.interface'

const Bank = () => {
  const [companyData, setCompanyData] = useState<CompanyData[]>([
    {
      RIB: '',
      Bank: '',
      Agency: ''
    }
  ])

  const handleChange = (index: number, field: keyof CompanyData, value: string): void => {
    setCompanyData(prevData => {
      const newData = [...prevData]
      newData[index][field] = value

      return newData
    })
  }

  const handleAddField = () => {
    setCompanyData(prevData => [...prevData, { RIB: '', Agency: '', Bank: '' }])
  }

  return (
    <Fragment>
      {companyData.map((data, index) => (
        <Grid key={index} container spacing={1} alignItems='center' style={{ padding: '2%' }}>
          <Grid sm={1}></Grid>
          <Grid item xs={12} sm={3}>
            <CustomTextField
              fullWidth
              label={`RIB ${index}`}
              name={`RIB_${index + 1}`}
              placeholder={'Tapez RIB '}
              value={data.RIB}
              onChange={e => handleChange(index, 'RIB', e.target.value)}
            />
          </Grid>
          <Grid sm={0.6}></Grid>
          <Grid item xs={12} sm={3}>
            <CustomTextField
              fullWidth
              label={`Banque ${index + 1}`}
              name={`Bank_${index}`}
              placeholder={'Tapez banque '}
              value={data.Bank}
              onChange={e => handleChange(index, 'Bank', e.target.value)}
            />
          </Grid>
          <Grid sm={0.6}></Grid>
          <Grid item xs={12} sm={3}>
            <CustomTextField
              fullWidth
              label={`Agence ${index + 1}`}
              name={`Agency_${index}`}
              placeholder={'Tapez Agence '}
              value={data.Agency}
              onChange={e => handleChange(index, 'Agency', e.target.value)}
            />
          </Grid>
        </Grid>
      ))}
      <Grid style={{ display: 'flex', justifyContent: 'center', padding: '2%' }} sm={12}>
        <Button variant='contained' color='primary' onClick={handleAddField}>
          Ajouter un champ
        </Button>
      </Grid>
    </Fragment>
  )
}

export default Bank
