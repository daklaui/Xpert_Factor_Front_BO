// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import { DataGrid, GridSortModel } from '@mui/x-data-grid'

import * as types from 'src/@fake-db/types'

import Toolbar from './Toolbar'

import { SelectChangeEvent } from '@mui/material'
import CustomPagination from '../pagination'
import { DataGridCustomProps, DataGridSortObject } from './interface/dataGrid.interface'

const CustomDataGrid = ({
  onCustomSearch,
  onCustomSort,
  onPageChange,
  columns,
  data,
  title,
  showCheckboxSelection,
  onRowClick,
  totalPages,
  onNumberRowPageChange
}: DataGridCustomProps) => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [sort, setSort] = useState<GridSortModel>()

  const handleRowClick = (row: types.DataGridRowType) => {
    onRowClick ? onRowClick(row) : console.log('Selected Row:', row)
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
      <CardHeader title={title} />
      <DataGrid
        autoHeight
        rows={data}
        columns={columns}
        checkboxSelection={showCheckboxSelection}
        sortModel={sort}
        onSortModelChange={handleSortModel}
        slots={{
          toolbar: Toolbar,
          footer: CustomPagination
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
              onNumberRowPageChange && onNumberRowPageChange(numberOfRows.target.value)
            }
          },
          footer: {
            //@ts-ignore
            totalPages: totalPages,
            onPageChange: (value: any) => {
              onPageChange && onPageChange(value)
            }
          }
        }}
        hideFooterPagination
        onRowClick={params => handleRowClick(params.row as types.DataGridRowType)}
      />
    </Card>
  )
}

export default CustomDataGrid
