<<<<<<< HEAD
import DetailsIndividu from '../Flow/DetailsIndividu/DetailsIndividu'

const IndividualList = () => {
  return (
    <>
      <DetailsIndividu />
    </>
=======
import { useEffect, useState } from 'react'
import { DataGridRowType } from 'src/@fake-db/types'
import CustomDataGrid from 'src/shared-components/data-grid/dataGrid'
import { columns } from './components/columns'
import { paginate } from 'src/@core/utils/paginate'
import { customSort } from 'src/@core/utils/customSort'
import generateFakeData from 'src/shared-components/data-grid/mock/data.mock'
import { DataGridSortObject } from 'src/shared-components/data-grid/interface/dataGrid.interface'

const IndividualList = ({ fakeData }: any) => {
  const defaultPageSize = 10
  const [pageSize, setPageSize] = useState<number>(defaultPageSize)
  const [page, setPage] = useState<number>(1)
  const [pages, setTotalPages] = useState<number>(0)
  const [individus, setIndividus] = useState<DataGridRowType[]>([])
  const [filteredData, setFilteredData] = useState<DataGridRowType[]>([])

  useEffect(() => {
    const filteredData = fakeData.map((row: DataGridRowType) => ({
      id: row.id,
      full_name: row.full_name,
      start_date: row.start_date,
      salary: row.salary,
      age: row.age
    }))
    setIndividus(filteredData)
  }, [fakeData])

  useEffect(() => {
    if (individus.length > 0) {
      const { currentPageItems, totalPages } = paginate<DataGridRowType>(individus, { currentPage: 1, pageSize })
      setTotalPages(totalPages)
      setFilteredData(currentPageItems)
    }
  }, [individus, pageSize])

  const onSearch = (text: string) => {
    const lowercaseQuery = text.toLowerCase()
    const searchData = individus.filter((item: DataGridRowType) => {
      return Object.values(item).some(
        value => typeof value === 'string' && value.toLowerCase().includes(lowercaseQuery)
      )
    })
    setFilteredData(searchData)
  }

  const onPageChange = (index: number) => {
    const { currentPageItems, totalPages } = paginate<DataGridRowType>(individus, { currentPage: index, pageSize })
    setPage(index)
    setTotalPages(totalPages)
    setFilteredData(currentPageItems)
  }

  const onNumberRowPageChange = (numberOfRows: string) => {
    const { currentPageItems, totalPages } = paginate<DataGridRowType>(individus, {
      currentPage: page,
      pageSize: parseInt(numberOfRows)
    })
    setPageSize(parseInt(numberOfRows))
    setTotalPages(totalPages)
    setFilteredData(currentPageItems)
  }

  const onSort = (value: DataGridSortObject) => {
    const sortedData = customSort(individus, { key: value.field, order: value.sort })
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
      totalPages={pages}
      currentPage={page}
      onRowClick={handleRowClick}
      onPageChange={onPageChange}
      columns={columns}
      onCustomSort={onSort}
      title={'Individu List'}
    />
>>>>>>> develop
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
