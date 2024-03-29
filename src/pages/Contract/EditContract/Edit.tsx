import Tab from '@mui/material/Tab'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabContext from '@mui/lab/TabContext'

import FondsDeGarantie from './Tabs/FondsDeGarantie'
import IntervenantsDuContrat from './Tabs/IntervenantsDuContrat'
import FraisDePaiement from './Tabs/FraisDePaiement'
import FraisDivers from './Tabs/FraisDivers'
import CommissionsDeFactoring from './Tabs/commissionsDeFactoring'
import InteretDeFinancement from './Tabs/InteretDeFinancement'
import EditDetails from './Tabs/EditDetails'

import { Button, CardHeader, Typography, Grid } from '@mui/material'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import { useState } from 'react'

const Edit = () => {
  const [value, setValue] = useState('EditDetails')

  const handleTabsChange = (event: React.ChangeEvent<any>, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Grid>
      <DatePickerWrapper sx={{ '& .react-datepicker-wrapper': { width: 'auto' } }}>
        <Grid container alignItems='center' justifyContent='space-between'>
          <Typography variant='h2' component='div' sx={{ mb: 2 }}>
            Contrat
          </Typography>
          <Grid item>
            <Button variant='contained'>Exporter </Button>
            <Button variant='contained' sx={{ marginLeft: '8px' }}>
              Liste des contrat
            </Button>
          </Grid>
        </Grid>
        <Card>
          <CardHeader title={<span style={{ fontSize: '20px' }}>Détails des contrats</span>} />
          <TabContext value={value}>
            <TabList
              variant='scrollable'
              scrollButtons={false}
              onChange={handleTabsChange}
              sx={{
                borderBottom: theme => `1px solid ${theme.palette.divider}`,
                '& .MuiTab-root': { py: 1.5, width: '210px' }
              }}
            >
              <Tab
                value='EditDetails'
                label={<div style={{ display: 'flex', alignItems: 'center' }}>Modifier Contrat</div>}
              />
              <Tab
                value='FondsDeGarantie'
                label={<div style={{ display: 'flex', alignItems: 'center' }}>Fonds De Garantie</div>}
              />
              <Tab
                value='FraisDivers'
                label={<div style={{ display: 'flex', alignItems: 'center' }}>Frais Divers</div>}
              />
              <Tab
                value='FraisDePaiement'
                label={<div style={{ display: 'flex', alignItems: 'center' }}>Frais De Paiement</div>}
              />
              <Tab
                value='CommissionsDeFactoring'
                label={<div style={{ display: 'flex', alignItems: 'center' }}>Commissions de Factoring</div>}
              />
              <Tab
                value='InteretDeFinancement'
                label={<div style={{ display: 'flex', alignItems: 'center' }}>Intéret De Financement</div>}
              />
              <Tab
                value='IntervenantsDuContrat'
                label={<div style={{ display: 'flex', alignItems: 'center' }}>Intervenants Du Contrat</div>}
              />
            </TabList>
            {value === 'EditDetails' && <EditDetails />}
            {value === 'FondsDeGarantie' && <FondsDeGarantie />}
            {value === 'FraisDePaiement' && <FraisDePaiement />}
            {value === 'FraisDivers' && <FraisDivers />}
            {value === 'CommissionsDeFactoring' && <CommissionsDeFactoring />}
            {value === 'IntervenantsDuContrat' && <IntervenantsDuContrat />}
            {value === 'InteretDeFinancement' && <InteretDeFinancement />}
          </TabContext>
        </Card>
      </DatePickerWrapper>
    </Grid>
  )
}
export default Edit
