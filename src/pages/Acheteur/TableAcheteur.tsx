import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import TableHead from '@mui/material/TableHead'
import TableCell from '@mui/material/TableCell'
import CardHeader from '@mui/material/CardHeader'
import TableContainer from '@mui/material/TableContainer'

// ** Custom Components Imports
import OptionsMenu from 'src/@core/components/option-menu'

const data = [
  {
    trend: '+$1,678',
    status: 'verified',
    cardType: 'Credit',
    cardNumber: '*4230',
    imgName: 'visa-with-bg',
    date: `17 Mar ${new Date().getFullYear()}`
  },
  {
    trend: '-$839',
    status: 'rejected',
    cardType: 'Credit',
    cardNumber: '*5578',
    imgName: 'mastercard-with-bg',
    date: `12 Feb ${new Date().getFullYear()}`
  },
  {
    trend: '+$435',
    cardType: 'ATM',
    status: 'verified',
    cardNumber: '*4567',
    imgName: 'american-express-with-bg',
    date: `28 Feb ${new Date().getFullYear()}`
  },
  {
    trend: '+$2,345',
    status: 'pending',
    cardType: 'Credit',
    cardNumber: '*5699',
    imgName: 'visa-with-bg',
    date: `08 Jan ${new Date().getFullYear()}`
  },
  {
    trend: '+$1,758',
    status: 'rejected',
    cardType: 'Credit',
    cardNumber: '*2451',
    imgName: 'visa-with-bg',
    date: `19 Oct ${new Date().getFullYear()}`
  }
]

const statusObj = {
  rejected: { text: 'Rejected', color: 'error' },
  pending: { text: 'Pending', color: 'secondary' },
  'on-hold': { text: 'On hold', color: 'warning' },
  verified: { text: 'Verified', color: 'success' }
}

const TableAcheteur = () => {
  return (
    <Card>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow
              sx={{ '& .MuiTableCell-root': { py: 2, borderTop: theme => `1px solid ${theme.palette.divider}` } }}
            >
              <TableCell>Réf</TableCell>
              <TableCell>Nom</TableCell>
              <TableCell>Type Document Id</TableCell>
              <TableCell>Numero Document ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(row => {
              return (
                <TableRow
                  key={row.cardNumber}
                  sx={{
                    '&:last-child .MuiTableCell-root': { pb: theme => `${theme.spacing(6)} !important` },
                    '& .MuiTableCell-root': { border: 0, py: theme => `${theme.spacing(2.25)} !important` },
                    '&:first-of-type .MuiTableCell-root': { pt: theme => `${theme.spacing(4.5)} !important` }
                  }}
                ></TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default TableAcheteur
