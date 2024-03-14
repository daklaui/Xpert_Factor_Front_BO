import { useEffect, useState } from 'react'
import CustomDataGrid from 'src/shared-components/data-grid/dataGrid'
import { paginate } from 'src/@core/utils/paginate'
import { customSort } from 'src/@core/utils/customSort'
import { DataGridSortObject } from 'src/shared-components/data-grid/interface/dataGrid.interface'
import { DataGridRowTypePercu } from 'src/@fake-db/types'
import { columns } from '../components/columns'
import generateFakeDataPercu from '../mock/TropPercuMock'

const TropPercu = ({ fakeDataPercu }: any) => {
  console.log('Received fakeData in TropPercu:', fakeDataPercu)
  const defaultPageSize = 10
  const [pageSize, setPageSize] = useState<number>(defaultPageSize)
  const [page, setPage] = useState<number>(1)
  const [pages, setTotalPages] = useState<number>(0)
  const [contracts, setContracts] = useState<DataGridRowTypePercu[]>([])
  const [filteredData, setFilteredData] = useState<DataGridRowTypePercu[]>([])
  useEffect(() => {
    if (fakeDataPercu) {
      const filteredData = fakeDataPercu.map((row: DataGridRowTypePercu, index: number) => ({
        id: index + 1,
        Contrat: row.Contrat,
        Nom_Adherent: row.Nom_Adherent,
        Nom_Acheteur: row.Nom_Acheteur,
        Ref_Encaissement: row.Ref_Encaissement,
        Mnt_du_lettrage: row.Mnt_du_lettrage,
        Trop_Percu: row.Trop_Percu
      }))
      console.log('filteredData:', filteredData)
      setContracts(filteredData)
    }
  }, [fakeDataPercu])

  useEffect(() => {
    console.log('contracts:', contracts)
    if (contracts.length > 0) {
      const { currentPageItems, totalPages } = paginate<DataGridRowTypePercu>(contracts, { currentPage: 1, pageSize })
      console.log('currentPageItems:', currentPageItems)
      setTotalPages(totalPages)
      setFilteredData(currentPageItems)
    }
  }, [contracts, pageSize])

  const onSearch = (text: string) => {
    const lowercaseQuery = text.toLowerCase()
    const searchData = contracts.filter((item: DataGridRowTypePercu) => {
      return Object.values(item).some(
        value => typeof value === 'string' && value.toLowerCase().includes(lowercaseQuery)
      )
    })
    setFilteredData(searchData)
  }

  const onPageChange = (index: number) => {
    const { currentPageItems, totalPages } = paginate<DataGridRowTypePercu>(contracts, { currentPage: index, pageSize })
    setPage(index)
    setTotalPages(totalPages)
    setFilteredData(currentPageItems)
  }

  const onNumberRowPageChange = (numberOfRows: string) => {
    const { currentPageItems, totalPages } = paginate<DataGridRowTypePercu>(contracts, {
      currentPage: page,
      pageSize: parseInt(numberOfRows)
    })
    setPageSize(parseInt(numberOfRows))
    setTotalPages(totalPages)
    setFilteredData(currentPageItems)
  }

  const onSort = (value: DataGridSortObject) => {
    const sortedData = customSort(contracts, { key: value.field, order: value.sort })
    const { currentPageItems } = paginate<DataGridRowTypePercu>(sortedData, { currentPage: page, pageSize })
    setFilteredData(currentPageItems)
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
      onPageChange={onPageChange}
      columns={columns}
      onCustomSort={onSort}
      title={'Trop Percu'}
    />
  )
}

export default TropPercu
export async function getStaticProps() {
  const fakeDataPercu = generateFakeDataPercu(60)

  console.log('Fetched fake data:', fakeDataPercu) // Add this line to log the fetched fake data

  return {
    props: {
      fakeDataPercu
    }
  }
}
