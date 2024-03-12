import { Typography } from '@mui/material'

//import { GridRenderCellParams } from '@mui/x-data-grid'
import { GridColumns } from 'src/shared-components/data-grid/interface/dataGrid.interface'

export const columns: GridColumns[] = [
  {
    flex: 0.1,
    minWidth: 200,
    field: 'Encaiss',
    headerName: 'Encaissement',
    renderCell: params => <Typography variant='body2'>{params.row.Encaiss}</Typography>
  },
  {
    flex: 0.2,
    minWidth: 200,
    field: 'Nom_Adherenet',
    headerName: 'Nom Adhérent',
    renderCell: params => <Typography variant='body2'>{params.row.Nom_Adherenet}</Typography>
  },
  {
    flex: 0.15,
    minWidth: 200,
    field: 'Etab_payeur',
    headerName: 'Etablissement payeur',
    renderCell: params => <Typography variant='body2'>{params.row.Etab_payeur}</Typography>
  },
  {
    flex: 0.15,
    minWidth: 200,
    field: 'Date_impaye',
    headerName: 'Date impayé',
    renderCell: params => <Typography variant='body2'>{params.row.Date_impaye}</Typography>
  },
  {
    flex: 0.15,
    minWidth: 200,
    field: 'Date_saisie',
    headerName: 'Date Saisie',
    renderCell: params => <Typography variant='body2'>{params.row.Date_saisie}</Typography>
  },
  {
    flex: 0.15,
    minWidth: 200,
    field: 'Montant',
    headerName: 'Montant',
    renderCell: params => <Typography variant='body2'>{params.row.Montant}</Typography>
  },
  {
    flex: 0.15,
    minWidth: 200,
    field: 'Type',
    headerName: 'Type',
    renderCell: params => <Typography variant='body2'>{params.row.Type}</Typography>
  }
]
