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

const ListeRib = () => {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <CardContent>
        <TabPanel sx={{ p: 0 }} value='liste-RIB'>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TableContainer
                sx={{ borderRadius: '6px !important', border: theme => `1px solid ${theme.palette.divider}` }}
              >
                <Table sx={{ minWidth: 500 }}>
                  <TableHead>
                    <TableRow>
                      <TableCell>#</TableCell>
                      <TableCell>RIB </TableCell>
                      <TableCell>Banque</TableCell>
                      <TableCell>Agence</TableCell>
                      <TableCell align='center'>Etat</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody sx={{ '& .MuiTableRow-root:nth-of-type(odd)': { backgroundColor: 'action.hover' } }}>
                    <TableRow>
                      <TableCell sx={{ fontSize: '1rem' }}>1</TableCell>
                      <TableCell sx={{ fontSize: '1rem' }}>12345678922</TableCell>
                      <TableCell sx={{ fontSize: '1rem' }}>BH</TableCell>
                      <TableCell sx={{ fontSize: '1rem' }}>Agence BH Avenue de Carthage,Tunis </TableCell>
                      <TableCell align='center' sx={{ pt: '0 !important', pb: '0 !important' }}>
                        <Checkbox defaultChecked />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ fontSize: '1rem' }}>2</TableCell>
                      <TableCell sx={{ fontSize: '1rem' }}>33025452728</TableCell>
                      <TableCell sx={{ fontSize: '1rem' }}>BT</TableCell>
                      <TableCell sx={{ fontSize: '1rem' }}>Agence BT Avenue Habib Bourguiba,Tunis</TableCell>
                      <TableCell align='center' sx={{ pt: '0 !important', pb: '0 !important' }}>
                        <Checkbox defaultChecked />
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell sx={{ fontSize: '1rem' }}>3</TableCell>
                      <TableCell sx={{ fontSize: '1rem' }}>258957404555</TableCell>
                      <TableCell sx={{ fontSize: '1rem' }}>BNA</TableCell>
                      <TableCell sx={{ fontSize: '1rem' }}>Agence BNA Rue de la République,Sousse</TableCell>
                      <TableCell align='center' sx={{ pt: '0 !important', pb: '0 !important' }}>
                        <Checkbox />
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell sx={{ fontSize: '1rem' }}>4</TableCell>
                      <TableCell sx={{ fontSize: '1rem' }}>258957415245</TableCell>
                      <TableCell sx={{ fontSize: '1rem' }}>BIAT</TableCell>
                      <TableCell sx={{ fontSize: '1rem' }}>Banque Internationale Arabe de Tunisie (BIAT)</TableCell>
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
export default ListeRib
