import { forwardRef, useState } from 'react'
import Tab from '@mui/material/Tab'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import TabContext from '@mui/lab/TabContext'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import PersonIcon from '@mui/icons-material/PersonAddAlt'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LoginIcon from '@mui/icons-material/Login';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import InfoIndividu from './InfoIndividu'
const DetailsIndividu = () => {
  // ** States
  const [value, setValue] = useState('personal-info')

  const handleTabsChange = (event: React.ChangeEvent<any>, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Card>
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
       <InfoIndividu/> 
      </TabContext>
    </Card>
  )
}
export default DetailsIndividu
