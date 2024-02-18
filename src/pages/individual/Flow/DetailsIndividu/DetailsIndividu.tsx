import { useState } from 'react'
import Tab from '@mui/material/Tab'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabContext from '@mui/lab/TabContext'
import PersonIcon from '@mui/icons-material/PersonAddAlt'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LoginIcon from '@mui/icons-material/Login'
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone'
import InfoIndividu from './InfoIndividu'
import AutreInfo from './AutreInfo'
import AutreContact from './AutreContact'
import LoginWeb from './LoginWeb'
import ListeRib from './ListeRib'
import { Button, CardHeader, Typography, Grid } from '@mui/material'

const DetailsIndividu = () => {
  // ** States
  const [value, setValue] = useState('info-individu')

  const handleTabsChange = (event: React.ChangeEvent<any>, newValue: string) => {
    setValue(newValue)
  }

  return (
    <>
      <Grid container alignItems='center' justifyContent='space-between'>
        <Typography variant='h2' component='div' sx={{ mb: 2 }}>
          Individu
        </Typography>
        <Grid item>
          <Button variant='contained'>Modifier Individu</Button>
          <Button variant='contained' sx={{ marginLeft: '8px' }}>
            Liste des Individus
          </Button>
        </Grid>
      </Grid>
      <Card>
        <CardHeader title={<span style={{ fontSize: '20px' }}>Détails d'individu</span>} />
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
              value='info-individu'
              label={
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <AccountCircleIcon style={{ marginRight: 8 }} />
                  Info d'individu
                </div>
              }
            />
            <Tab
              value='autre-informations'
              label={
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <PersonIcon style={{ marginRight: 8 }} />
                  Autre informations
                </div>
              }
            />
            <Tab
              value='autre-contacts'
              label={
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <ContactPhoneIcon style={{ marginRight: 8 }} />
                  Autre contacts
                </div>
              }
            />
            <Tab
              value='login-web'
              label={
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <LoginIcon style={{ marginRight: 8 }} />
                  Login web
                </div>
              }
            />
            <Tab
              value='liste-RIB'
              label={
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <FormatListNumberedIcon style={{ marginRight: 8 }} />
                  Liste RIB
                </div>
              }
            />
          </TabList>
          {value === 'info-individu' && <InfoIndividu />}
          {value === 'autre-informations' && <AutreInfo />}
          {value === 'autre-contacts' && <AutreContact />}
          {value === 'login-web' && <LoginWeb />}
          {value === 'liste-RIB' && <ListeRib />}
        </TabContext>
      </Card>
    </>
  )
}
export default DetailsIndividu
