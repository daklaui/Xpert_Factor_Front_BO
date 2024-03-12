import { Typography } from '@mui/material'
import { GridColumns } from 'src/shared-components/data-grid/interface/dataGrid.interface'

export const columns: GridColumns[] = [
  {
    flex: 0.2,
    minWidth: 200,
    field: 'Contrat',
    headerName: 'Contrat',
    renderCell: params => <Typography variant='body2'>{params.row.Contrat}</Typography>
  },
  {
    flex: 0.2,
    minWidth: 200,
    field: 'Nom_Adherent',
    headerName: 'Nom Adherent',
    renderCell: params => <Typography variant='body2'>{params.row.Nom_Adherent}</Typography>
  },
  {
    flex: 0.2,
    minWidth: 200,
    field: 'Nom_Acheteur',
    headerName: 'Nom Acheteur',
    renderCell: params => <Typography variant='body2'>{params.row.Nom_Acheteur}</Typography>
  },
  {
    flex: 0.2,
    minWidth: 200,
    field: 'Ref_Encaissement',
    headerName: 'Ref Encaissement',
    renderCell: params => <Typography variant='body2'>{params.row.Ref_Encaissement}</Typography>
  },
  {
    flex: 0.2,
    minWidth: 200,
    field: 'Mnt_du_lettrage',
    headerName: 'Mnt du lettrage',
    renderCell: params => <Typography variant='body2'>{params.row.Mnt_du_lettrage}</Typography>
  },
  {
    flex: 0.2,
    minWidth: 200,
    field: 'Trop_Percu',
    headerName: 'Trop Percu',
    renderCell: params => <Typography variant='body2'>{params.row.Trop_Percu}</Typography>
  },
  {
    flex: 0.1,
    minWidth: 200,
    field: '#',
    headerName: '#',
    renderCell: params => <Typography variant='body2'>{params.row['#']}</Typography>
  }
]
