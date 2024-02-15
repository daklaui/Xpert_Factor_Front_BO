import React, { useState } from 'react'
import { DataGridRowType } from 'src/@fake-db/types'
import TableServerSide from 'src/SharedComponents/DataGrid/DataGrid'

const IndividualList = () => {
  const [pageSize, setPageSize] = useState<string>('')

  const handleRowClick = (row: DataGridRowType) => {
    console.log('Selected Row:', row)
  }

  const onNumberOfRowsChange = (numberOfRows: string) => {
    console.log('the current number of Rows is:', numberOfRows)
    setPageSize(numberOfRows)
  }

  return (
    <TableServerSide
      onCustomSearch={(value: any) => {
        console.log(value)
      }}
      onNumberRowPageChange={onNumberOfRowsChange}
      showCheckboxSelection={false}
      pageSize={pageSize}
      onRowClick={handleRowClick}
    />
  )
}

export default IndividualList
