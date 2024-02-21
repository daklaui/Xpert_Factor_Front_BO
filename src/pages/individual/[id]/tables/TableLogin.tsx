import React from 'react'
import { Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

const tableRows = [
  {
    id: 1,
    login: 'm.daklaui@yahoo.com',
    password: '123456789',
    checked: true
  },
  {
    id: 2,
    login: 'daklaui@yahoo.com',
    password: '987456321',
    checked: true
  },
  {
    id: 3,
    login: 'm@yahoo.com',
    password: '987456321',
    checked: false
  },
  {
    id: 4,
    login: 'mdaklaui123@yahoo.com',
    password: '12774564',
    checked: false
  }
]

const TableLogin = () => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 500 }}>
        <TableHead>
          <TableRow>
            <TableCell>Login</TableCell>
            <TableCell>Mot de passe</TableCell>
            <TableCell align='center'>Etat</TableCell>
          </TableRow>
        </TableHead>

        <TableBody sx={{ '& .MuiTableRow-root:nth-of-type(odd)': { backgroundColor: 'action.hover' } }}>
          {tableRows.map(row => (
            <TableRow key={row.id}>
              <TableCell sx={{ fontSize: '1rem' }}>{row.login}</TableCell>
              <TableCell sx={{ fontSize: '1rem' }}>{row.password}</TableCell>
              <TableCell align='center' sx={{ pt: '0 !important', pb: '0 !important' }}>
                <Checkbox defaultChecked={row.checked} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableLogin
