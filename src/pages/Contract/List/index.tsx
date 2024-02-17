import React, { useEffect, useState } from 'react'
import { DataGridRowType, DataGridSortObject } from 'src/@fake-db/types'
import CustomDataGrid from 'src/shared-components/data-grid/dataGrid'
import { paginate } from 'src/@core/utils/paginate'
import { customSort } from 'src/@core/utils/customSort'
import { columns } from './components/columns'
import generateFakeData from '../mock/Data.mock'

const IndividualList = ({ fakeData }: any) => {
  const defaultPageSize = 10
  const [pageSize, setPageSize] = useState<number>(defaultPageSize)
  const [page, setPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(0)
  const [contract, setContract] = useState<DataGridRowType[]>([])
  const [filteredData, setFilteredData] = useState<DataGridRowType[]>([])

  useEffect(() => {
    const filteredContract = fakeData.map((row: DataGridRowType, index: number) => ({
      id: index + 1,
      Ref_contrat: row.Ref_contrat

      // Add other properties here
    }))
    setContract(filteredContract)
  }, [fakeData])

  useEffect(() => {
    if (contract.length > 0) {
      const { currentPageItems, totalPages } = paginate<DataGridRowType>(contract, { currentPage: 1, pageSize })
      setTotalPages(totalPages)
      setFilteredData(currentPageItems)
    }
  }, [contract, pageSize])

  const onSearch = (text: string) => {
    const lowercaseQuery = text.toLowerCase()
    const searchData = contract.filter((item: DataGridRowType) =>
      Object.values(item).some(value => typeof value === 'string' && value.toLowerCase().includes(lowercaseQuery))
    )
    setFilteredData(searchData)
  }

  const onPageChange = (index: number) => {
    const { currentPageItems, totalPages } = paginate<DataGridRowType>(contract, { currentPage: index, pageSize })
    setPage(index)
    setTotalPages(totalPages)
    setFilteredData(currentPageItems)
  }

  const onNumberRowPageChange = (numberOfRows: string) => {
    const { currentPageItems, totalPages } = paginate<DataGridRowType>(contract, {
      currentPage: page,
      pageSize: parseInt(numberOfRows)
    })
    setPageSize(parseInt(numberOfRows))
    setTotalPages(totalPages)
    setFilteredData(currentPageItems)
  }

  const onSort = (value: DataGridSortObject) => {
    const sortedData = customSort(contract, { key: value.field, order: value.sort })
    const { currentPageItems } = paginate<DataGridRowType>(sortedData, { currentPage: page, pageSize })
    setFilteredData(currentPageItems)
  }

  const handleRowClick = (row: DataGridRowType) => {
    alert('Selected Row:' + row.full_name)
    console.log('Selected Row:', row)
  }

  return (
    <CustomDataGrid
      data={filteredData}
      onCustomSearch={onSearch}
      onNumberRowPageChange={onNumberRowPageChange}
      showCheckboxSelection={false}
      pageSize={pageSize}
      totalPages={totalPages}
      currentPage={page}
      onRowClick={handleRowClick}
      onPageChange={onPageChange}
      columns={columns}
      onCustomSort={onSort}
      title={'Liste des contrats'}
    />
  )
}

export default IndividualList

export async function getStaticProps() {
  const fakeData = generateFakeData(60)

  return {
    props: {
      fakeData
    }
  }
}
