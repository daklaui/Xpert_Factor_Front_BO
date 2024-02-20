import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Button, Card, CardHeader, CircularProgress, Grid, Tab, Typography } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone'
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered'
import LoginIcon from '@mui/icons-material/Login'
import PersonIcon from '@mui/icons-material/PersonAddAlt'
import { Suspense, lazy } from 'react'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'

const LazyInfoIndividu = lazy(() => import('./Tabs/InfoIndividu'))
const LazyAutreInfo = lazy(() => import('./Tabs/AutreInfo'))
const LazyAutreContact = lazy(() => import('./Tables/TableContact'))
const LazyLoginWeb = lazy(() => import('./Tables/TableLogin'))
const LazyListeRib = lazy(() => import('./Tables/TableRib'))

const Index = () => {
  const router = useRouter()
  const [value, setValue] = useState('info-individu')

  const { id } = router.query
  const individuId = id

  useEffect(() => {
    setValue('info-individu')
  }, [individuId])

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
            {[
              { label: "Info d'individu", icon: <AccountCircleIcon />, value: 'info-individu' },
              { label: 'Autre informations', icon: <PersonIcon />, value: 'autre-informations' },
              { label: 'Autre contacts', icon: <ContactPhoneIcon />, value: 'autre-contacts' },
              { label: 'Login web', icon: <LoginIcon />, value: 'login-web' },
              { label: 'Liste RIB', icon: <FormatListNumberedIcon />, value: 'liste-RIB' }
            ].map(tab => (
              <Tab
                key={tab.value}
                value={tab.value}
                label={
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    {tab.icon} {tab.label}
                  </div>
                }
              />
            ))}
          </TabList>
          <Suspense fallback={<CircularProgress />}>
            {value === 'info-individu' && <LazyInfoIndividu />}
            {value === 'autre-informations' && <LazyAutreInfo />}
            {value === 'autre-contacts' && <LazyAutreContact />}
            {value === 'login-web' && <LazyLoginWeb />}
            {value === 'liste-RIB' && <LazyListeRib />}
          </Suspense>
        </TabContext>
      </Card>
    </>
  )
}

export default Index
