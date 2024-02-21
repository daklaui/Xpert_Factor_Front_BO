import React, { useState } from 'react'
import { Fragment } from 'react'
import Grid from '@mui/material/Grid'
import CustomTextField from 'src/SharedComponents/StyledTextField/StyledTextField '
import Select from 'react-select'
import CustomInput from './PickersCustomInput'

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

const StyledTableCell = styled(TableCell)<TableCellProps>(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.common.black
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}))

const StyledTableRow = styled(TableRow)<TableRowProps>(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },

  // hide last border
  '&:last-of-type td, &:last-of-type th': {
    border: 0
  }
}))

function ComFactoring({ popperPlacement }: { popperPlacement: ReactDatePickerProps['popperPlacement'] }) {
  const [date, setDate] = useState<DateType>(new Date())

  return (
    <Fragment>
      <Grid item sm={3}></Grid>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label='customized table'>
          <TableHead>
            <TableRow>
              <StyledTableCell> Type </StyledTableCell>
              <StyledTableCell align='left'> % du FDG</StyledTableCell>
              <StyledTableCell align='left'> % du Commission de Factoring</StyledTableCell>
              <StyledTableCell align='left'> Montant Minimum Contrat de factoring</StyledTableCell>
              <StyledTableCell align='left'> Montant Minimum Document de factoring</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell component='th'>Facture</StyledTableCell>
              <StyledTableCell align='left'>
                <CustomTextField fullWidth placeholder={''} name={''} label={''} />
              </StyledTableCell>
              <StyledTableCell align='left'>
                <CustomTextField fullWidth placeholder={''} name={''} label={''} />
              </StyledTableCell>
              <StyledTableCell align='left'>
                <CustomTextField fullWidth placeholder={''} name={''} label={''} />
              </StyledTableCell>
              <StyledTableCell align='left'>
                <CustomTextField fullWidth placeholder={''} name={''} label={''} />
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component='th'>Bon de Commande </StyledTableCell>
              <StyledTableCell align='left'>
                <CustomTextField fullWidth placeholder={''} name={''} label={''} />
              </StyledTableCell>
              <StyledTableCell align='left'>
                <CustomTextField fullWidth placeholder={''} name={''} label={''} />
              </StyledTableCell>
              <StyledTableCell align='left'>
                <CustomTextField fullWidth placeholder={''} name={''} label={''} />
              </StyledTableCell>
              <StyledTableCell align='left'>
                <CustomTextField fullWidth placeholder={''} name={''} label={''} />
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component='th'>Marché</StyledTableCell>
              <StyledTableCell align='left'>
                <CustomTextField fullWidth placeholder={''} name={''} label={''} />
              </StyledTableCell>
              <StyledTableCell align='left'>
                <CustomTextField fullWidth placeholder={''} name={''} label={''} />
              </StyledTableCell>
              <StyledTableCell align='left'>
                <CustomTextField fullWidth placeholder={''} name={''} label={''} />
              </StyledTableCell>
              <StyledTableCell align='left'>
                <CustomTextField fullWidth placeholder={''} name={''} label={''} />
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component='th'>Caution</StyledTableCell>
              <StyledTableCell align='left'>
                <CustomTextField fullWidth placeholder={''} name={''} label={''} />
              </StyledTableCell>
              <StyledTableCell align='left'>
                <CustomTextField fullWidth placeholder={''} name={''} label={''} />
              </StyledTableCell>
              <StyledTableCell align='left'>
                <CustomTextField fullWidth placeholder={''} name={''} label={''} />
              </StyledTableCell>
              <StyledTableCell align='left'>
                <CustomTextField fullWidth placeholder={''} name={''} label={''} />
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
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
          <StyledTableRow>
            <StyledTableCell component='th'>Cheque/Virement </StyledTableCell>
            <StyledTableCell align='left'>
              <Checkbox />
            </StyledTableCell>
            <StyledTableCell align='left'>
              <Select />
            </StyledTableCell>
            <StyledTableCell align='left'>
              <CustomTextField fullWidth placeholder={''} name={''} label={''} />
            </StyledTableCell>
            <StyledTableCell align='left'>
              <CustomTextField fullWidth placeholder={''} name={''} label={''} />
            </StyledTableCell>
            <StyledTableCell align='left'>
              <Checkbox />
            </StyledTableCell>
            <StyledTableCell align='left'>
              <CustomTextField fullWidth placeholder={''} name={''} label={''} />
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
              <Checkbox />
            </StyledTableCell>
            <StyledTableCell align='left'>
              <Select />
            </StyledTableCell>
            <StyledTableCell align='left'>
              <CustomTextField fullWidth placeholder={''} name={''} label={''} />
            </StyledTableCell>
            <StyledTableCell align='left'>
              <CustomTextField fullWidth placeholder={''} name={''} label={''} />
            </StyledTableCell>
            <StyledTableCell align='left'>
              <Checkbox />
            </StyledTableCell>
            <StyledTableCell align='left'>
              <CustomTextField fullWidth placeholder={''} name={''} label={''} />
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
        </Table>
      </TableContainer>
    </Fragment>
  )
}

export default ComFactoring
