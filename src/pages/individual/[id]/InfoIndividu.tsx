import CardContent from '@mui/material/CardContent'
import TabPanel from '@mui/lab/TabPanel'
import Grid from '@mui/material/Grid'
import InfoCard from './components/InfoCard'
import InfoItem from './components/InfoItem '

const InfoCardInfoGenerale = ({ data }) => (
  <InfoCard title='Informations générales'>
    <InfoItem label='Forme juridique' value={data.Forme} />
    <InfoItem label='Dénomination' value={data.Dénomination} />
    <InfoItem label='Nom commercial' value={data.Nom} />
    <InfoItem label='Registre de commerce' value={data.Registre} />
    <InfoItem label='Lieu' value={data.lieu} />
    <InfoItem label='Date de création' value={data.Date} />
    <InfoItem label=' Langue' value={data.Langue} />
  </InfoCard>
)
const InfoCardInfoFiscales = ({ data }) => (
  <InfoCard title='Informations fiscales'>
    <InfoItem label='Code Acheteur' value={data.CodeAcheteur} />
    <InfoItem label='Activité' value={data.Activité} />
    <InfoItem label='Code TVA' value={data.CodeTVA} />
    <InfoItem label='Code Adhérent' value={data.CodeAdhérent} />
    <InfoItem label='Exonération TVA' value={data.Exonération} />
    <InfoItem label='Date Debut Exonération TVA' value={data.DateDebut} />
    <InfoItem label='Date Fin Exonération TVA' value={data.DateFin} />
  </InfoCard>
)

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
                <InfoCardInfoGenerale data={data} />
              </Grid>
              <Grid item xs={6}>
                <InfoCardInfoFiscales data={data} />
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
