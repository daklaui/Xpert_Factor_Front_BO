import { Typography } from '@mui/material'
import { useState } from 'react'
import { DataGridRowType } from 'src/@fake-db/types'
import TableServerSide from 'src/SharedComponents/DataGrid/DataGrid'
import { GridColumns } from 'src/SharedComponents/DataGrid/DataGrid.interface'
import generateFakeData from 'src/SharedComponents/DataGrid/mock/data.mock'

const columns: GridColumns[] = [
  {
    flex: 0.25,
    minWidth: 290,
    field: 'full_name',
    headerName: 'Name',
    renderCell: params => <Typography variant='body2'>{params.row.full_name}</Typography>
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

const IndividualList = () => {
  const [pageSize, setPageSize] = useState<string>('')

  const handleRowClick = (row: DataGridRowType) => {
    console.log('Selected Row:', row)
  }

  const onNumberRowPageChange = (numberOfRows: string) => {
    console.log('The current number of Rows is:', numberOfRows)
  }

  const fakeData = generateFakeData(20)
  //console.log(fakeData)
  const filteredData = fakeData.map(row => ({
    id: row.id,
    full_name: row.full_name,
    start_date: row.start_date,
    salary: row.salary,
    age: row.age
  }))
  // console.log(filteredData.map(row => ({ start_date: row.start_date })))
  return (
    <TableServerSide
      customrows={filteredData}
      onCustomSearch={(value: any) => {
        console.log(value)
      }}
      onNumberRowPageChange={onNumberRowPageChange}
      showCheckboxSelection={false}
      pageSize={pageSize}
      onRowClick={handleRowClick}
      columns={columns}
    />
  )
}

export default IndividualList
