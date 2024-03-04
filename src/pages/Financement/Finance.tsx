import { Fragment, useState } from 'react'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import SelectAdherent from 'src/shared-components/custom-select/SelectAdherentList'
import FirstTab from './FirstTab'
import SecondTab from './SecondTab'
import Total from './Total'
import CustomTextField from 'src/@core/components/mui/text-field'

const Finance = () => {
  const [TotalDisponible] = useState('')
  const handleSearch = (value: any) => {
    console.log('Selected value:', value)
  }

  return (
    <Fragment>
      <Grid item xs={12}>
        <strong>Nom Adhérent</strong>
        <Grid xs={12}>
          <SelectAdherent labelText={'Nom adhérent'} onSearch={handleSearch} />
        </Grid>
      </Grid>

      <Grid item xs={12} style={{ marginTop: '20px' }}>
        <strong>Total Disponible</strong>
        <CustomTextField sx={{ marginLeft: '20px' }} value={TotalDisponible} disabled />
      </Grid>

      <Grid container spacing={2} style={{ marginTop: '20px' }}>
        <Grid item xs={12} sm={6}>
          <Card style={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent>
              <FirstTab />
            </CardContent>
          </Card>
          <Card style={{ marginTop: '20px' }}>
            <CardContent>
              <SecondTab />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Total />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  )
}

export default Finance
