import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import TabPanel from '@mui/lab/TabPanel'
import Grid from '@mui/material/Grid'

const InfoIndividu =()=>{

    return(
        <form onSubmit={e => e.preventDefault()}>
        <CardContent>
          <TabPanel sx={{ p: 0 }} value='personal-info'>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={6}>eyyayyyy</Grid>
              <Grid item xs={12} sm={6}></Grid>
              <Grid item xs={12} sm={6}></Grid>
              <Grid item xs={12} sm={6}></Grid>
              <Grid item xs={12} sm={6}></Grid>
              <Grid item xs={12} sm={6}></Grid>
            </Grid>
          </TabPanel>
          </CardContent>
         </form> 
    )
}

export default InfoIndividu;