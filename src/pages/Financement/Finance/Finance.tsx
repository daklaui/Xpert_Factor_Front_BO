import { Fragment, useState } from 'react'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import SelectAdherent from 'src/shared-components/custom-select/SelectAdherentList'
import FirstTab from './FirstTab'
import CustomTextField from 'src/@core/components/mui/text-field'
import Statics from './Statics'
import { Button } from '@mui/material'
import FinancePopup from './PopUP/FinancePopup'
import SecondTab from './SecondTab'
import Total from './Total'

const Finance = () => {
  const [TotalDisponible] = useState('')

  const handleSearch = (value: any) => {
    console.log('Selected value:', value)
  }

  return (
    <Fragment>
      <Grid item xs={12}>
        <strong>Nom Adhérent</strong>
        <Grid xs={8}>
          <SelectAdherent labelText={'Nom adhérent'} onSearch={handleSearch} />
        </Grid>
      </Grid>

      <Grid item xs={12} style={{ marginTop: '20px', marginLeft: '20px ' }}>
        <strong>Total Disponible</strong>
        <CustomTextField sx={{ marginLeft: '20px' }} value={TotalDisponible} disabled />
      </Grid>

      <Grid item xs={12}>
        <FinancePopup
          value={''}
          handleFilter={function (val: string): void {
            throw new Error('Function not implemented.')
          }}
        />
        <Button variant='contained' onClick={handleSearch} style={{ marginTop: '20px', marginLeft: '20px ' }}>
          Contrat
        </Button>
        <Button variant='contained' onClick={handleSearch} style={{ marginTop: '20px', marginLeft: '20px ' }}>
          Conditions Part
        </Button>
        <Button variant='contained' onClick={handleSearch} style={{ marginTop: '20px', marginLeft: '20px ' }}>
          Visu RC
        </Button>
        <Button variant='contained' onClick={handleSearch} style={{ marginTop: '20px', marginLeft: '20px ' }}>
          Visu MF
        </Button>
        <Button variant='contained' onClick={handleSearch} style={{ marginTop: '20px', marginLeft: '20px ' }}>
          Extrait Compte
        </Button>
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
        <Grid style={{ marginTop: '20px' }} xs={12}>
          <Statics />
        </Grid>
      </Grid>
    </Fragment>
  )
}

export default Finance
