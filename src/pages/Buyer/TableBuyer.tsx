import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import TableHead from '@mui/material/TableHead'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import { getAdherentsData } from './mockBuyer'

const TableBuyer = ({ adherent }) => {
  const adherentsData = getAdherentsData()
  if (!adherent) {
    return (
      <Card>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Réf</TableCell>
                <TableCell>Nom</TableCell>
                <TableCell>Type Document </TableCell>
                <TableCell>Numero Document </TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </Card>
    )
  }
  const adherentData = adherentsData[adherent.label] || []

  return (
    <Card>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Réf</TableCell>
              <TableCell>Nom</TableCell>
              <TableCell>Type Document </TableCell>
              <TableCell>Numero Document </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {adherentData.map(item => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.nom}</TableCell>
                <TableCell>{item.type}</TableCell>
                <TableCell>{item.numero}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default TableBuyer
