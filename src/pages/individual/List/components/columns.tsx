import { Typography } from '@mui/material'
import { GridRenderCellParams } from '@mui/x-data-grid'
import { GridColumns } from 'src/shared-components/data-grid/interface/dataGrid.interface'

export const columns: GridColumns[] = [
  {
    flex: 0.25,
    minWidth: 290,
    field: 'full_name',
    headerName: 'Name',
    renderCell: (params: GridRenderCellParams) => <Typography variant='body2'>{params.row.full_name}</Typography>
  },
  {
    flex: 0.175,
    minWidth: 120,
    field: 'start_date',
    headerName: 'Start Date',
    renderCell: params => <Typography variant='body2'>{params.row.start_date}</Typography>
  },
  {
    flex: 0.175,
    minWidth: 110,
    field: 'salary',
    headerName: 'Salary',
    renderCell: params => (
      <Typography variant='body2'>
        {params.row.salary.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
      </Typography>
    )
  },
  {
    flex: 0.125,
    minWidth: 110,
    field: 'age',
    headerName: 'Age',
    renderCell: params => <Typography variant='body2'>{params.row.age}</Typography>
  }
]
