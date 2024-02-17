import TabPanel from '@mui/lab/TabPanel'
import { Card, CardContent, CardHeader, Divider, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'

const cardStyle = {
  marginBottom: '10px',
  backgroundColor: '#f0f0f0' // couleur de fond
}
const data = {
  id: 1,
  Address: 'bir dressen bni khalled nabeul',
  Ville_code_postale: 'ETTADHAMEN II 2095',
  Telephone: '50322452',
  Fax: ' +33 1 23 45 67 89',
  Email: 'm.daklaui@yahoo.com'
}
const AutreInfo = () => {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <CardContent>
        <TabPanel sx={{ p: 0 }} value='autre-informations'></TabPanel>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Card style={cardStyle}>
              <CardContent>
                <CardHeader
                  title={
                    <Typography variant='h5' component='div'>
                      Adresse
                    </Typography>
                  }
                />
                <Divider sx={{ my: '0 !important', mx: 6 }} />
                <CardContent sx={{ pb: 4 }}>
                  <Box sx={{ pt: 4 }}>
                    <Box sx={{ display: 'flex', mb: 3 }}>
                      <Typography sx={{ mr: 2, fontWeight: 'bold' }}>Address:</Typography>
                      <Typography sx={{ color: 'text.secondary' }}>@{data.Address}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', mb: 3 }}>
                      <Typography sx={{ mr: 2, fontWeight: 'bold' }}>Ville et code posta:</Typography>
                      <Typography sx={{ color: 'text.secondary' }}>{data.Ville_code_postale}</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card style={cardStyle}>
              <CardContent>
                <CardHeader
                  title={
                    <Typography variant='h5' component='div'>
                      Contact
                    </Typography>
                  }
                />
                <Divider sx={{ my: '0 !important', mx: 6 }} />
                <CardContent sx={{ pb: 4 }}>
                  <Box sx={{ pt: 4 }}>
                    <Box sx={{ display: 'flex', mb: 3 }}>
                      <Typography sx={{ mr: 2, fontWeight: 'bold' }}>Téléphone:</Typography>
                      <Typography sx={{ color: 'text.secondary' }}>@{data.Telephone}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', mb: 3 }}>
                      <Typography sx={{ mr: 2, fontWeight: 'bold' }}>Fax:</Typography>
                      <Typography sx={{ color: 'text.secondary' }}>{data.Fax}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', mb: 3 }}>
                      <Typography sx={{ mr: 2, fontWeight: 'bold' }}>Email:</Typography>
                      <Typography sx={{ color: 'text.secondary' }}>{data.Email}</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </CardContent>
    </form>
  )
}

export default AutreInfo
