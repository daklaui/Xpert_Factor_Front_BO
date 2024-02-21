// ** React Imports
import { SyntheticEvent, useState } from 'react'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import Card from '@mui/material/Card'

import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import TabContext from '@mui/lab/TabContext'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'

const FormLayoutsTabs = () => {
  // ** States
  const [value, setValue] = useState<string>('personal-info')

  const handleTabsChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Card>
      <TabContext value={value}>
        <TabList
          variant='scrollable'
          scrollButtons={false}
          onChange={handleTabsChange}
          sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}`, '& .MuiTab-root': { py: 3.5 } }}
        >
          <Tab value='FondsDeGarantie' label='Fonds de Garantie' />
          <Tab value='FraisDivers' label='Frais Divers' />
          <Tab value='FraisDePaiement' label='Frais de Paiement' />
          <Tab value='CommissionsDeFactoring' label='Commissions de Factoring' />
          <Tab value='IntéretDeFinancement' label='Intéret de Financement' />
          <Tab value='IntervenantsDuContrat' label='Intervenants du Contrat' />
        </TabList>
        <form onSubmit={e => e.preventDefault()}>
          <CardContent>
            <TabPanel sx={{ p: 0 }} value='FondsDeGarantie'></TabPanel>

            <TabPanel sx={{ p: 0 }} value='FraisDivers'></TabPanel>

            <TabPanel sx={{ p: 0 }} value='FraisDePaiement'></TabPanel>
            <TabPanel sx={{ p: 0 }} value='CommissionsDeFactoring'></TabPanel>
            <TabPanel sx={{ p: 0 }} value='IntéretDeFinancement'></TabPanel>
            <TabPanel sx={{ p: 0 }} value='IntervenantsDuContrat'></TabPanel>
          </CardContent>
          <Divider sx={{ m: '0 !important' }} />
          <CardActions>
            <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
              Submit
            </Button>
            <Button type='reset' size='large' variant='outlined' color='secondary'>
              Reset
            </Button>
          </CardActions>
        </form>
      </TabContext>
    </Card>
  )
}

export default FormLayoutsTabs
