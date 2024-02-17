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

const LoginWeb = () => {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <CardContent>
        <TabPanel sx={{ p: 0 }} value='login-web'>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TableContainer
                sx={{ borderRadius: '6px !important', border: theme => `1px solid ${theme.palette.divider}` }}
              >
                <Table sx={{ minWidth: 500 }}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Login </TableCell>
                      <TableCell>Mot de passe</TableCell>
                      <TableCell align='center'>Etat</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody sx={{ '& .MuiTableRow-root:nth-of-type(odd)': { backgroundColor: 'action.hover' } }}>
                    <TableRow>
                      <TableCell sx={{ fontSize: '1rem' }}> m.daklaui@yahoo.com</TableCell>
                      <TableCell sx={{ fontSize: '1rem' }}>123456789</TableCell>
                      <TableCell align='center' sx={{ pt: '0 !important', pb: '0 !important' }}>
                        <Checkbox defaultChecked />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ fontSize: '1rem' }}>daklaui@yahoo.com</TableCell>

                      <TableCell sx={{ fontSize: '1rem' }}>987456321</TableCell>
                      <TableCell align='center' sx={{ pt: '0 !important', pb: '0 !important' }}>
                        <Checkbox defaultChecked />
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell sx={{ fontSize: '1rem' }}>m@yahoo.com</TableCell>
                      <TableCell sx={{ fontSize: '1rem' }}>987456321</TableCell>
                      <TableCell align='center' sx={{ pt: '0 !important', pb: '0 !important' }}>
                        <Checkbox />
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell sx={{ fontSize: '1rem' }}>mdaklaui123@yahoo.com</TableCell>
                      <TableCell sx={{ fontSize: '1rem' }}>12774564</TableCell>
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
export default LoginWeb
