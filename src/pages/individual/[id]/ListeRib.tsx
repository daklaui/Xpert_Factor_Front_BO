import TabPanel from '@mui/lab/TabPanel'
import {
  CardContent,
  Checkbox,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material'
import { Suspense, lazy } from 'react'
import TableRib from './tables/TableRIB'

const TabRib = lazy(() => import('./tables/TableRIB'))

const ListeRib = () => {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <CardContent>
        <TabPanel sx={{ p: 0 }} value='liste-RIB'>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Suspense fallback={<div>Loading...</div>}>
                <TableRib />
              </Suspense>
            </Grid>
          </Grid>
        </TabPanel>
      </CardContent>
    </form>
  )
}
export default ListeRib
