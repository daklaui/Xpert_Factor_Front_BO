import { useEffect, useState } from 'react'
import { DataGridRowType, DataGridRowTypeImpaye } from 'src/@fake-db/types'
import CustomDataGrid from 'src/shared-components/data-grid/dataGrid'

import { paginate } from 'src/@core/utils/paginate'
import { customSort } from 'src/@core/utils/customSort'

import { DataGridSortObject } from 'src/shared-components/data-grid/interface/dataGrid.interface'
import { columns } from './components/columns'
import generateFakeData from './mock/Data.mock'

const ImpayeList = ({ fakeData }: any) => {
  const defaultPageSize = 10
  const [pageSize, setPageSize] = useState<number>(defaultPageSize)
  const [page, setPage] = useState<number>(1)
  const [pages, setTotalPages] = useState<number>(0)
  const [Impayes, setImpaye] = useState<DataGridRowType[]>([])
  const [filteredData, setFilteredData] = useState<DataGridRowType[]>([])

  useEffect(() => {
    const filteredData = fakeData.map((row: DataGridRowTypeImpaye, index: number) => ({
      id: index + 1,
      Encaiss: row.Encaiss,
      Nom_Adherenet: row.Nom_Adherenet,
      Etab_payeur: row.Etab_payeur,
      Date_impaye: row.Date_Impaye,
      Date_saisie: row.Date_saisie,
      Montant: row.Montant,
      Type: row.Type
    }))

    setImpaye(filteredData)
  }, [fakeData])

  useEffect(() => {
    if (Impayes.length > 0) {
      const { currentPageItems, totalPages } = paginate<DataGridRowType>(Impayes, { currentPage: 1, pageSize })
      setTotalPages(totalPages)
      setFilteredData(currentPageItems)
    }
  }, [Impayes, pageSize])

  const onSearch = (text: string) => {
    const lowercaseQuery = text.toLowerCase()
    const searchData = Impayes.filter((item: DataGridRowType) => {
      return Object.values(item).some(
        value => typeof value === 'string' && value.toLowerCase().includes(lowercaseQuery)
      )
    })
    setFilteredData(searchData)
  }

  const onPageChange = (index: number) => {
    const { currentPageItems, totalPages } = paginate<DataGridRowType>(Impayes, { currentPage: index, pageSize })
    setPage(index)
    setTotalPages(totalPages)
    setFilteredData(currentPageItems)
  }

  const onNumberRowPageChange = (numberOfRows: string) => {
    const { currentPageItems, totalPages } = paginate<DataGridRowType>(Impayes, {
      currentPage: page,
      pageSize: parseInt(numberOfRows)
    })
    setPageSize(parseInt(numberOfRows))
    setTotalPages(totalPages)
    setFilteredData(currentPageItems)
  }

  const onSort = (value: DataGridSortObject) => {
    const sortedData = customSort(Impayes, { key: value.field, order: value.sort })
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
      title={'Liste des Impayes'}
    />
  )
}

export default ImpayeList

export async function getStaticProps() {
  const fakeData = generateFakeData(60)

  return {
    props: {
      fakeData
    }
  }
}
