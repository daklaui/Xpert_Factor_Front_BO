// ** React Imports
import { useState, ChangeEvent } from 'react'

// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'

interface Column {
  id: 'Référence' | 'Date_Saisie' | 'Adhérent' | 'Montant' | 'Date' | 'Instrument' | 'V'
  label: string
  minWidth?: number
  align?: 'right'
  format?: (value: number) => string
}

const columns: readonly Column[] = [
  { id: 'Adhérent', label: 'Adhérent', minWidth: 170 },
  { id: 'Instrument', label: 'Instrument', minWidth: 100 },
  {
    id: 'Montant',
    label: 'Montant',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US')
  },
  ,
  {
    id: 'V',
    label: 'V',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toFixed(2)
  }
]

interface Data {
  Référence: number
  Date_Saisie: string
  Adhérent: string
  Montant: number
  Date: string
  Instrument: string
  V: string
}

function createData(
  Référence: number,
  Date_Saisie: string,
  Adhérent: string,
  Montant: number,
  Date: string,
  Instrument: string,
  V: string
): Data {
  return { Référence, Date_Saisie, Adhérent, Montant, Date, Instrument, V }
}

const rows = [
  createData(2301, '01/23/2022', 'Moataz', 3287263, '02/11/2022', 'chéque', 'yes'),
  createData(2024, '03/10/2023', 'nermine', 9596961, '02/11/2022', 'chéque', ''),
  createData(3694, '09/10/2019', 'nour', 301340, '02/11/2022', 'chéque', ''),
  createData(78994, '03/02/2021', 'XD2', 9833520, '02/11/2022', 'chéque', ''),
  createData(7531, '25/07/2021', 'XD3', 9984670, '02/11/2022', 'Traite', '')
]

const TableStickyHeader = () => {
  // ** States
  const [page, setPage] = useState<number>(0)
  const [rowsPerPage, setRowsPerPage] = useState<number>(10)

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <>
      <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell key={column.id} align={column.align} sx={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
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
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  )
}

export default TableStickyHeader
