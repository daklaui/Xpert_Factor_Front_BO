import { Button, Typography } from '@mui/material'
import { GridColumns } from 'src/shared-components/data-grid/interface/dataGrid.interface'
import VisibilityIcon from '@mui/icons-material/Visibility'
export const columns: GridColumns[] = [
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
    field: 'Montant_Encaissement',
    headerName: 'Montant Encaissement',
    renderCell: params => <Typography variant='body2'>{params.row.Montant_Encaissement}</Typography>
  },
  {
    flex: 0.2,
    minWidth: 200,
    field: 'Montant_Lettrage',
    headerName: 'Montant Lettrage',
    renderCell: params => <Typography variant='body2'>{params.row.Montant_Lettrage}</Typography>
  },
  {
    flex: 0.2,
    minWidth: 200,
    field: 'Date_Valeur',
    headerName: 'Date Valeur',
    renderCell: params => <Typography variant='body2'>{params.row.Date_Valeur}</Typography>
  },
  {
    flex: 0.2,
    minWidth: 200,
    field: 'Nombre_Factures',
    headerName: 'Nombre Factures',
    renderCell: params => <Typography variant='body2'>{params.row.Nombre_Factures}</Typography>
  },
  {
    flex: 0.2,
    minWidth: 200,
    field: 'Adherent',
    headerName: 'Adherent',
    renderCell: params => <Typography variant='body2'>{params.row.Adherent}</Typography>
  },
  {
    flex: 0.2,
    minWidth: 200,
    field: 'Acheteur',
    headerName: 'Acheteur',
    renderCell: params => <Typography variant='body2'>{params.row.Acheteur}</Typography>
  },
  {
    flex: 0.2,
    minWidth: 200,
    field: 'Contract',
    headerName: 'Contract',
    renderCell: params => <Typography variant='body2'>{params.row.Contract}</Typography>
  },
  {
    flex: 0.2,
    minWidth: 200,
    field: 'actions', // Updated field name
    headerName: 'Actions', // Updated header name
    renderCell: params => (
      <div>
        <Button variant='contained' color='primary' onClick={() => handleReconciliation(params.row)}>
          Reconciliation
        </Button>
        <Button variant='contained' color='primary' onClick={() => handlePreavis(params.row)}>
          Preavis
        </Button>
        <Button variant='contained' color='primary' onClick={() => handleImpaye(params.row)}>
          Impayé
        </Button>
        <Button variant='contained' color='primary' onClick={() => handleView(params.row)}>
          <VisibilityIcon />
        </Button>
      </div>
    )
  }
]

function handleReconciliation(row: any): void {
  // Implementation for reconciliation action
}

function handlePreavis(row: any): void {
  // Implementation for preavis action
}

function handleImpaye(row: any): void {
  // Implementation for impaye action
}

function handleView(row: any): void {
  // Implementation for view action
}
