import TabPanel from '@mui/lab/TabPanel'
import { CardContent, Grid } from '@mui/material'
import { Suspense, lazy } from 'react'
import TableContact from './tables/TableContact'

const Tabcontact = lazy(() => import('./tables/TableContact'))

const AutreContact = () => {
  return (
      <CardContent>
        <TabPanel sx={{ p: 0 }} value='autre-contacts'>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Suspense fallback={<div>Loading...</div>}>
                <TableContact />
              </Suspense>
            </Grid>
          </Grid>
        </TabPanel>
      </CardContent>
  )
}
export default AutreContact
