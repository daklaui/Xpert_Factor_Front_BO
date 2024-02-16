// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import { DataGrid, GridSortModel } from '@mui/x-data-grid'

// ** ThirdParty Components

// ** Custom Components

// ** Types Imports
import { DataGridRowType, DataGridRowTypeCustomized } from 'src/@fake-db/types'

// ** Utils Import

import ServerSideToolbar from './ServerSideToolbar'
import statusObj from './mock/status.mock'
import ServerSideToolbar from './ServerSideToolbar'

import { SelectChangeEvent } from '@mui/material'
import { DataGridCustomProps, DataGridSortObject } from './DataGrid.interface'

const CustomDataGrid = ({
  onCustomSearch,
  onCustomSort,
  columns,
  data,
  showCheckboxSelection,
  onNumberRowPageChange
}: DataGridCustomProps) => {
  const [total, setTotal] = useState<number>(data.length)
  const [rows, setRows] = useState<DataGridRowTypeCustomized[]>(data)
  const [searchValue, setSearchValue] = useState<string>('')
  const [sort, setSort] = useState<GridSortModel>()
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 2,
    page: 0
  })

  const handleRowClick = (row: DataGridRowType) => {
    console.log('Selected Row:', row)
  }

  const handleSortModel = (direction: GridSortModel) => {
    const sortObject: DataGridSortObject = {
      ...(direction[0] as DataGridSortObject)
    }
    setSort(direction)
    onCustomSort && onCustomSort(sortObject)
  }

  return (
    <Card>
      <CardHeader title='Server Side' />
      <DataGrid
        autoHeight
        pagination
        rows={data}
        rowCount={total}
        columns={columns}
        checkboxSelection={showCheckboxSelection}
        paginationModel={paginationModel}
        sortModel={sort}
        onSortModelChange={handleSortModel}
        slots={{
          toolbar: ServerSideToolbar
        }}
        slotProps={{
          toolbar: {
            value: searchValue,
            baseButton: {
              variant: 'outlined'
            },
            onChange: (value: any) => {
              setSearchValue(value)
              onCustomSearch && onCustomSearch(value)
            },
            clearSearch: () => {
              setSearchValue('')
            },
            onNumberRowPageChange: (numberOfRows: SelectChangeEvent<string>) => {
              setPaginationModel(prevState => ({
                ...prevState,
                pageSize: parseInt(numberOfRows.target.value)
              }))
            }
          }
        }}
        hideFooterPagination
        onRowClick={params => handleRowClick(params.row as DataGridRowType)}
      />
    </Card>
  )
}

export default CustomDataGrid
