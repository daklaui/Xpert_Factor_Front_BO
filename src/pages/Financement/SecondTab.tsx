// ** React Imports

// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import { Card } from '@mui/material'

interface Column {
  id: 'name' | 'code'
  label: string
  minWidth?: number
  align?: 'right'
  format?: (value: number) => string
}

const columns: readonly Column[] = [
  { id: 'name', label: '', minWidth: 170 },
  { id: 'code', label: '', minWidth: 100 }
]

interface Data {
  name: string
  code: string
}

function createData(name: string, code: string): Data {
  return { name, code }
}

const rows = [
  createData('Instruments de Paiement Impayés', '20'),
  createData('Retards Paiement Selon Algorithme', ''),
  createData('Litiges Ouverts en Dépassement', ''),
  createData('Total Disponible 2', '')
]

const SecondTab = () => {
  // ** States

  return (
    <>
      <Card>
        <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label='sticky table'>
            <TableBody>
              {rows.map(row => {
                return (
                  <TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
                    {columns.map(column => {
                      const value = row[column.id]

                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </>
  )
}

export default SecondTab
