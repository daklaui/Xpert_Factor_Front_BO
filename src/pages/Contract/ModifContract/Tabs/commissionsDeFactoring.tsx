import React from 'react'
import { Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import CustomTextField from 'src/@core/components/mui/text-field'

const tableRows = [
  {
    id: 1,
    TypeCommission: '',
    TauxCommission: '',
    MontantMinDocument: '',
    MontantMinContart: '',

    checked: true
  }
]

const CommissionDeFactoring = () => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 500 }}>
        <TableHead>
          <TableRow>
            <TableCell>Type Commission</TableCell>
            <TableCell>Taux Commission</TableCell>
            <TableCell>Montant Min Document</TableCell>
            <TableCell> Montant Min Contart</TableCell>

            <TableCell align='center'></TableCell>
          </TableRow>
        </TableHead>

        <TableBody sx={{ '& .MuiTableRow-root:nth-of-type(odd)': { backgroundColor: 'action.hover' } }}>
          {tableRows.map(row => (
            <TableRow key={row.id}>
              <TableCell>BC </TableCell>
              <CustomTextField sx={{ fontSize: '1rem' }}>{row.TauxCommission}</CustomTextField>
              <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantMinDocument}</CustomTextField>
              <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantMinContart}</CustomTextField>

              <TableCell align='center' sx={{ pt: '0 !important', pb: '0 !important' }}>
                <Checkbox defaultChecked={row.checked} />
              </TableCell>
            </TableRow>
          ))}
          {tableRows.map(row => (
            <TableRow key={row.id}>
              <TableCell>C </TableCell>
              <CustomTextField sx={{ fontSize: '1rem' }}>{row.TauxCommission}</CustomTextField>
              <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantMinDocument}</CustomTextField>
              <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantMinContart}</CustomTextField>

              <TableCell align='center' sx={{ pt: '0 !important', pb: '0 !important' }}>
                <Checkbox defaultChecked={row.checked} />
              </TableCell>
            </TableRow>
          ))}
          {tableRows.map(row => (
            <TableRow key={row.id}>
              <TableCell>F </TableCell>
              <CustomTextField sx={{ fontSize: '1rem' }}>{row.TauxCommission}</CustomTextField>
              <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantMinDocument}</CustomTextField>
              <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantMinContart}</CustomTextField>

              <TableCell align='center' sx={{ pt: '0 !important', pb: '0 !important' }}>
                <Checkbox defaultChecked={row.checked} />
              </TableCell>
            </TableRow>
          ))}
          {tableRows.map(row => (
            <TableRow key={row.id}>
              <TableCell>M </TableCell>
              <CustomTextField sx={{ fontSize: '1rem' }}>{row.TauxCommission}</CustomTextField>
              <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantMinDocument}</CustomTextField>
              <CustomTextField sx={{ fontSize: '1rem' }}>{row.MontantMinContart}</CustomTextField>

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

export default CommissionDeFactoring
