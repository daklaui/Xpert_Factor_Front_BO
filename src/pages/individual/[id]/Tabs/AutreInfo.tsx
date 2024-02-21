import React from 'react'
import { CardContent, Grid } from '@mui/material'
import TabPanel from '@mui/lab/TabPanel'
import InfoItem from '../components/InfoItem '
import InfoCard from '../components/InfoCard'

const InfoCardAdresse = ({ data }) => (
  <InfoCard title='Adresse'>
    <InfoItem label='Adresse' value={data.Address} />
    <InfoItem label='Ville et code postal' value={data.Ville_code_postale} />
  </InfoCard>
)

const InfoCardContact = ({ data }) => (
  <InfoCard title='Contact'>
    <InfoItem label='Téléphone' value={data.Telephone} />
    <InfoItem label='Fax' value={data.Fax} />
    <InfoItem label='Email' value={data.Email} />
  </InfoCard>
)

const AutreInfo = () => {
  const data = {
    id: 1,
    Address: 'bir dressen bni khalled nabeul',
    Ville_code_postale: 'ETTADHAMEN II 2095',
    Telephone: '50322452',
    Fax: ' +33 1 23 45 67 89',
    Email: 'm.daklaui@yahoo.com'
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <InfoCardAdresse data={data} />
      </Grid>
      <Grid item xs={6}>
        <InfoCardContact data={data} />
      </Grid>
    </Grid>
  )
}

export default AutreInfo
