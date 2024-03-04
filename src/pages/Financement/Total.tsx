// ** React Imports

// ** MUI Imports

import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'

import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'

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
  createData('Total Factures', '205.000'),
  createData('Total Financement', ''),
  createData('Total Avoir ', ''),
  createData('Total Com Factoring ', ''),
  createData('Total Frais Divers', ''),
  createData('Total Frias(C+T+V)', ''),
  createData('Total Credit', ''),
  createData('Total Débit', ''),
  createData('Financement par rapport Enc', ''),
  createData('Total Intérêt TTC', ''),
  createData('Total Intérêt de retard TTC', ''),
  createData('Financement du mois', ''),
  createData('Total Retenu', '')
]

const FirstTab = () => {
  // ** States

  return (
    <>
      <TableContainer>
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
    </>
  )
}

export default FirstTab
