import TabPanel from '@mui/lab/TabPanel'
import { CardContent, Grid } from '@mui/material'
import { Suspense, lazy } from 'react'
import TableLogin from './tables/TableLogin'

const TabLogin = lazy(() => import('./tables/TableLogin'))

const LoginWeb = () => {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <CardContent>
        <TabPanel sx={{ p: 0 }} value='login-web'>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Suspense fallback={<div>Loading...</div>}>
                <TableLogin />
              </Suspense>
            </Grid>
          </Grid>
        </TabPanel>
      </CardContent>
    </form>
  )
}
export default LoginWeb
