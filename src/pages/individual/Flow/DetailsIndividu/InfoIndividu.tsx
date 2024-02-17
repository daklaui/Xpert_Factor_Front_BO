import CardContent from '@mui/material/CardContent'
import TabPanel from '@mui/lab/TabPanel'
import Grid from '@mui/material/Grid'
import { Card, CardHeader, Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'

const cardStyle = {
  marginBottom: '10px',
  backgroundColor: '#f0f0f0' // couleur de fond
}
const data = {
  id: 1,
  Forme: 'Société à responsabilité limitée',
  Dénomination: 'achmoataz',
  Registre: 'rc8547',
  Date: '01/08/2024 00:00:00',
  Activité: '0000000',
  Exonération: 'false',
  Nom: 'achmoataz',
  lieu: 'tunise',
  Langue: 'Francais',
  CodeTVA: '0000000A',
  DateDebut: '01/01/2024',
  DateFin: '01/03/2024',
  CodeAcheteur: '85214785',
  CodeAdhérent: '11111111'
}
const InfoIndividu = () => {
  if (data) {
    return (
      <form onSubmit={e => e.preventDefault()}>
        <CardContent>
          <TabPanel sx={{ p: 0 }} value='info-individu'>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Card style={cardStyle}>
                  <CardContent>
                    <CardHeader
                      title={
                        <Typography variant='h5' component='div'>
                          Informations générales
                        </Typography>
                      }
                    />
                    <Divider sx={{ my: '0 !important', mx: 6 }} />
                    <CardContent sx={{ pb: 4 }}>
                      <Box sx={{ pt: 4 }}>
                        <Box sx={{ display: 'flex', mb: 3 }}>
                          <Typography sx={{ mr: 2, fontWeight: 'bold' }}>Forme juridique:</Typography>
                          <Typography sx={{ color: 'text.secondary' }}>@{data.Forme}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', mb: 3 }}>
                          <Typography sx={{ mr: 2, fontWeight: 'bold' }}>Dénomination:</Typography>
                          <Typography sx={{ color: 'text.secondary' }}>{data.Dénomination}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', mb: 3 }}>
                          <Typography sx={{ mr: 2, fontWeight: 'bold' }}>Nom commercial:</Typography>
                          <Typography sx={{ color: 'text.secondary' }}>{data.Nom}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', mb: 3 }}>
                          <Typography sx={{ mr: 2, fontWeight: 'bold' }}>Registre de commerce:</Typography>
                          <Typography sx={{ color: 'text.secondary' }}>{data.Registre}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', mb: 3 }}>
                          <Typography sx={{ mr: 2, fontWeight: 'bold' }}>Lieu:</Typography>
                          <Typography sx={{ color: 'text.secondary' }}>{data.lieu}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', mb: 3 }}>
                          <Typography sx={{ mr: 2, fontWeight: 'bold' }}>Date de création:</Typography>
                          <Typography sx={{ color: 'text.secondary' }}>{data.Date}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', mb: 3 }}>
                          <Typography sx={{ mr: 2, fontWeight: 'bold' }}>Langue:</Typography>
                          <Typography sx={{ color: 'text.secondary' }}>{data.Langue}</Typography>
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
                          Informations fiscales
                        </Typography>
                      }
                    />
                    <Divider sx={{ my: '0 !important', mx: 6 }} />
                    <CardContent sx={{ pb: 4 }}>
                      <Box sx={{ pt: 4 }}>
                        <Box sx={{ display: 'flex', mb: 3 }}>
                          <Typography sx={{ mr: 2, fontWeight: 'bold' }}>Code Acheteur:</Typography>
                          <Typography sx={{ color: 'text.secondary' }}>@{data.CodeAcheteur}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', mb: 3 }}>
                          <Typography sx={{ mr: 2, fontWeight: 'bold' }}>Activité:</Typography>
                          <Typography sx={{ color: 'text.secondary' }}>{data.Activité}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', mb: 3 }}>
                          <Typography sx={{ mr: 2, fontWeight: 'bold' }}>Code TVA:</Typography>
                          <Typography sx={{ color: 'text.secondary' }}>{data.CodeTVA}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', mb: 3 }}>
                          <Typography sx={{ mr: 2, fontWeight: 'bold' }}>Code Adhérent:</Typography>
                          <Typography sx={{ color: 'text.secondary' }}>{data.CodeAdhérent}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', mb: 3 }}>
                          <Typography sx={{ mr: 2, fontWeight: 'bold' }}>Exonération TVA:</Typography>
                          <Typography sx={{ color: 'text.secondary' }}>{data.Exonération}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', mb: 3 }}>
                          <Typography sx={{ mr: 2, fontWeight: 'bold' }}>Date Debut Exonération TVA:</Typography>
                          <Typography sx={{ color: 'text.secondary' }}>{data.DateDebut}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', mb: 3 }}>
                          <Typography sx={{ mr: 2, fontWeight: 'bold' }}>Date Fin Exonération TVA:</Typography>
                          <Typography sx={{ color: 'text.secondary' }}>{data.DateFin}</Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </TabPanel>
        </CardContent>
      </form>
    )
  } else {
    return null
  }
}
export default InfoIndividu
