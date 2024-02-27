import React, { useState } from 'react'
import { Fragment } from 'react'
import Grid from '@mui/material/Grid'
import CustomInput from './PickersCustomInput'
import CustomSelect from './StyledInputs/CustomSelect'

import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableRow, { TableRowProps } from '@mui/material/TableRow'
import TableCell, { TableCellProps, tableCellClasses } from '@mui/material/TableCell'
import { styled } from '@mui/material/styles'
import { Checkbox } from '@mui/material'
import { ReactDatePickerProps } from 'react-datepicker'
import { DateType } from 'src/types/forms/reactDatepickerTypes'
import Paper from '@mui/material/Paper'
import StyledDatePicker from './StyledInputs/StyledDatePicker'
import CustomTextField from 'src/shared-components/StyledTextField/StyledTextField '

const StyledTableCell = styled(TableCell)<TableCellProps>(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}))

const StyledTableRow = styled(TableRow)<TableRowProps>(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },

  '&:last-of-type td, &:last-of-type th': {
    border: 0
  }
}))

const data = [
  {
    type: 'Facture',
    placeholders: [
      '% du FDG',
      'Commission de Factoring',
      'Montant Minimum Contrat de factoring',
      'Montant Minimum Document de factoring'
    ]
  },
  {
    type: 'Bon de Commande',
    placeholders: [
      '% du FDG',
      'Commission de Factoring',
      'Montant Minimum Contrat de factoring',
      'Montant Minimum Document de factoring'
    ]
  },
  {
    type: 'Marché',
    placeholders: [
      '% du FDG',
      'Commission de Factoring',
      'Montant Minimum Contrat de factoring',
      'Montant Minimum Document de factoring'
    ]
  },
  {
    type: 'Caution',
    placeholders: [
      '% du FDG',
      'Commission de Factoring',
      'Montant Minimum Contrat de factoring',
      'Montant Minimum Document de factoring'
    ]
  }
]

interface ComFactoringProps {
  popperPlacement: ReactDatePickerProps['popperPlacement']
  onFormChange: (values: any) => void
}

function ComFactoring({ popperPlacement, onFormChange }: ComFactoringProps) {
  const [date, setDate] = useState<DateType>(new Date())
  const [isChecked, setIsChecked] = useState(false)
  const [isCheckedR1, setIsCheckedR1] = useState(false)
  const [isCheckedR2, setIsCheckedR2] = useState(false)
  const [isCheckedR3, setIsCheckedR3] = useState(false)

  const handleInputChange = (name: string, value: any) => {
    onFormChange({ [name]: value })
  }

  return (
    <Fragment>
      <Grid item sm={3}></Grid>
      <TableContainer component={Paper}>
        <Table aria-label='customized table'>
          <TableHead>
            <TableRow>
              <StyledTableCell style={{ borderTopLeftRadius: '10%' }}>Type</StyledTableCell>
              {data[0].placeholders.map((placeholder, index) => (
                <StyledTableCell align='left' key={index}>
                  {placeholder}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, rowIndex) => (
              <StyledTableRow key={rowIndex}>
                <StyledTableCell component='th'>{row.type}</StyledTableCell>
                {row.placeholders.map((placeholder, cellIndex) => (
                  <StyledTableCell align='left' key={cellIndex}>
                    <CustomTextField
                      fullWidth
                      placeholder={placeholder}
                      name={`${row.type}${cellIndex}`}
                      label={''}
                      onChange={e => handleInputChange(`${row.type}${cellIndex}`, e.target.value)}
                    />
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer component={Paper}>
        <Table aria-label='customized table'>
          <TableHead>
            <TableRow>
              <StyledTableCell align='left'></StyledTableCell>
              <StyledTableCell> FDG </StyledTableCell>
              <StyledTableCell align='left'>Taux d'indexation </StyledTableCell>
              <StyledTableCell align='left'>Taux de Marge </StyledTableCell>
              <StyledTableCell align='left'> Délais Max Paiement </StyledTableCell>
              <StyledTableCell align='left'> Précompter</StyledTableCell>
              <StyledTableCell align='left'> Intéret Majoré </StyledTableCell>
              <StyledTableCell align='left'> Date début de validité </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell component='th'>Cheque/Virement </StyledTableCell>
              <StyledTableCell align='left'>
                <Checkbox
                  name='chequeFDG'
                  checked={isChecked} 
                  onChange={e => {
                    setIsChecked(e.target.checked)
                    handleInputChange('chequeFDG', e.target.checked.toString())
                  }}
                />
              </StyledTableCell>
              <StyledTableCell align='left'>
                <CustomSelect />
              </StyledTableCell>
              <StyledTableCell align='left'>
                <CustomTextField
                  fullWidth
                  placeholder={''}
                  name={'ChequeTauxMarge'}
                  label={''}
                  onChange={(e: any) => handleInputChange('ChequeTauxMarge', e.target.value)}
                />
              </StyledTableCell>
              <StyledTableCell align='left'>
                <CustomTextField
                  fullWidth
                  placeholder={''}
                  name={'ChequeDelaiMax'}
                  label={''}
                  onChange={(e: any) => handleInputChange('ChequeDelaiMax', e.target.value)}
                />
              </StyledTableCell>
              <StyledTableCell align='left'>
                <Checkbox
                  name='ChequePrecomter'
                  checked={isCheckedR1}
                  onChange={e => {
                    setIsCheckedR1(e.target.checked)
                    handleInputChange('ChequePrecomter', e.target.checked.toString())
                  }}
                />
              </StyledTableCell>
              <StyledTableCell align='left'>
                <CustomTextField
                  fullWidth
                  placeholder={''}
                  name={'ChequeInteretMajore'}
                  label={''}
                  onChange={(e: any) => handleInputChange('ChequeInteretMajore', e.target.value)}
                />
              </StyledTableCell>
              <StyledTableCell align='left'>
                <StyledDatePicker
                  selected={date}
                  id='basic-input'
                  popperPlacement={popperPlacement}
                  onChange={(date: Date) => setDate(date)}
                  customInput={<CustomInput label='' />}
                />
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component='th'>Billet à Ordre </StyledTableCell>
              <StyledTableCell align='left'>
                <Checkbox
                  name='BilletFDG'
                  checked={isCheckedR2}
                  onChange={e => {
                    setIsCheckedR2(e.target.checked)
                    handleInputChange('BilletFDG', e.target.checked.toString())
                  }}
                />
              </StyledTableCell>
              <StyledTableCell align='left'>
                <CustomSelect />
              </StyledTableCell>
              <StyledTableCell align='left'>
                <CustomTextField
                  fullWidth
                  placeholder={''}
                  name={'BilletTauxMarge'}
                  label={''}
                  onChange={(e: any) => handleInputChange('BilletTauxMarge', e.target.value)}
                />
              </StyledTableCell>
              <StyledTableCell align='left'>
                <CustomTextField
                  fullWidth
                  placeholder={''}
                  name={'BilletDelai'}
                  label={''}
                  onChange={(e: any) => handleInputChange('BilletDelai', e.target.value)}
                />
              </StyledTableCell>
              <StyledTableCell align='left'>
                <Checkbox
                  name='BilletPrecomter'
                  checked={isCheckedR3}
                  onChange={e => {
                    setIsCheckedR3(e.target.checked)
                    handleInputChange('BilletPrecomter', e.target.checked.toString())
                  }}
                />
              </StyledTableCell>
              <StyledTableCell align='left'>
                <CustomTextField
                  fullWidth
                  placeholder={''}
                  name={'BilletInteretMajore'}
                  label={''}
                  onChange={(e: any) => handleInputChange('BilletInteretMajore', e.target.value)}
                />
              </StyledTableCell>
              <StyledTableCell align='left'>
                <StyledDatePicker
                  selected={date}
                  id='basic-input'
                  popperPlacement={popperPlacement}
                  onChange={(date: Date) => setDate(date)}
                  customInput={<CustomInput label='' />}
                />
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  )
}

export default ComFactoring
