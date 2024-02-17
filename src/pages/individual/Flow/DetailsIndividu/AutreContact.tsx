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

const AutreContact = () => {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <CardContent>
        <TabPanel sx={{ p: 0 }} value='autre-contacts'>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TableContainer
                sx={{ borderRadius: '6px !important', border: theme => `1px solid ${theme.palette.divider}` }}
              >
                <Table sx={{ minWidth: 500 }}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Numero Contact</TableCell>
                      <TableCell>Nom et Prenom </TableCell>
                      <TableCell>Téléphones</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Fax</TableCell>
                      <TableCell align='center'>Etat</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody sx={{ '& .MuiTableRow-root:nth-of-type(odd)': { backgroundColor: 'action.hover' } }}>
                    <TableRow>
                      <TableCell sx={{ fontSize: '1rem' }}>123456789</TableCell>
                      <TableCell sx={{ fontSize: '1rem' }}>achmoataz</TableCell>
                      <TableCell sx={{ fontSize: '1rem' }}>50322452</TableCell>
                      <TableCell sx={{ fontSize: '1rem' }}> m.daklaui@yahoo.com</TableCell>
                      <TableCell sx={{ fontSize: '1rem' }}>+33 025 452 78</TableCell>
                      <TableCell align='center' sx={{ pt: '0 !important', pb: '0 !important' }}>
                        <Checkbox defaultChecked />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ fontSize: '1rem' }}>987456321</TableCell>
                      <TableCell sx={{ fontSize: '1rem' }}>achmoataz</TableCell>
                      <TableCell sx={{ fontSize: '1rem' }}>25895745</TableCell>
                      <TableCell sx={{ fontSize: '1rem' }}>m.daklaui@yahoo.com</TableCell>
                      <TableCell sx={{ fontSize: '1rem' }}>+33 025 452 78</TableCell>
                      <TableCell align='center' sx={{ pt: '0 !important', pb: '0 !important' }}>
                        <Checkbox defaultChecked />
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell sx={{ fontSize: '1rem' }}>987456321</TableCell>
                      <TableCell sx={{ fontSize: '1rem' }}>achmoataz</TableCell>
                      <TableCell sx={{ fontSize: '1rem' }}>25895745</TableCell>
                      <TableCell sx={{ fontSize: '1rem' }}>m.daklaui@yahoo.com</TableCell>
                      <TableCell sx={{ fontSize: '1rem' }}>+33 025 452 78</TableCell>
                      <TableCell align='center' sx={{ pt: '0 !important', pb: '0 !important' }}>
                        <Checkbox />
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell sx={{ fontSize: '1rem' }}>987456321</TableCell>
                      <TableCell sx={{ fontSize: '1rem' }}>achmoataz</TableCell>
                      <TableCell sx={{ fontSize: '1rem' }}>25895745</TableCell>
                      <TableCell sx={{ fontSize: '1rem' }}>m.daklaui@yahoo.com</TableCell>
                      <TableCell sx={{ fontSize: '1rem' }}>+33 025 452 78</TableCell>
                      <TableCell align='center' sx={{ pt: '0 !important', pb: '0 !important' }}>
                        <Checkbox />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </TabPanel>
      </CardContent>
    </form>
  )
}
export default AutreContact
