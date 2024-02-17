import React, { useEffect, useState } from 'react'
import { DataGridRowType, DataGridSortObject } from 'src/@fake-db/types'
import CustomDataGrid from 'src/shared-components/data-grid/dataGrid'
import { paginate } from 'src/@core/utils/paginate'
import { customSort } from 'src/@core/utils/customSort'
import { columns } from './components/columns'
import generateFakeData from '../mock/Data.mock'

<<<<<<< HEAD

const IndividualList = ({ fakeData }: any) => {
=======
const ContractList = ({ fakeData }: any) => {
>>>>>>> 3ee75c6 (Updating the contract list page)
  const defaultPageSize = 10
  const [pageSize, setPageSize] = useState<number>(defaultPageSize)
  const [page, setPage] = useState<number>(1)
  const [pages, setTotalPages] = useState<number>(0)
<<<<<<< HEAD



  const [contract, setContract] = useState<DataGridRowType[]>([])
    useEffect(() => {
    const filteredData = fakeData.map((row: DataGridRowTypeContract, index: number) => ({
      id: index + 1,
        id: index + 1, // Generate a unique identifier

        id: index + 1,}))
    })
    const [individus, setIndividus] = useState<DataGridRowType[]>([])
    const [filteredData, setFilteredData] = useState<DataGridRowType[]>([])

  useEffect(() => {
    const filteredData = fakeData.map((row: DataGridRowTypeContract, index: number) => ({
      id: index + 1, // Generate a unique identifier
=======
  const [contract, setContract] = useState<DataGridRowType[]>([])
  const [filteredData, setFilteredData] = useState<DataGridRowType[]>([])

  useEffect(() => {
    const filteredData = fakeData.map((row: DataGridRowTypeContract, index: number) => ({
      id: index + 1,
>>>>>>> 3ee75c6 (Updating the contract list page)
      Ref_contrat: row.Ref_contrat,
      Nom_Adherenet: row.Nom_Adherenet,
      Encours_des_factures: row.Encours_des_factures,
      Total_Factures: row.Total_Factures,
      Total_Financements: row.Total_Financements,
      Total_Encaissement: row.Total_Encaissement,
      Total_Avoirs: row.Total_Avoirs,
      Total_Intérets: row.Total_Intérets,
      Limite_De_Financement: row.Limite_De_Financement,
      Devise: row.Devise,
      Nombre_Dacheteurs_prévues: row.Nombre_Dacheteurs_prévues,
      Nombre_De_Factures_prévues: row.Nombre_De_Factures_prévues,
      Nombre_Davoirs_prévues: row.Nombre_Davoirs_prévues,
      Nombre_De_remise_prévues: row.Nombre_De_remise_prévues,
      Délai_moyen_de_réglement: row.Délai_moyen_de_réglement,
      Délai_max_de_réglement: row.Délai_max_de_réglement
    }))

    setContract(filteredData)
  }, [fakeData])

  useEffect(() => {
    if (contract.length > 0) {
      const { currentPageItems, totalPages } = paginate<DataGridRowType>(contract, { currentPage: 1, pageSize })
      setTotalPages(totalPages)
      setFilteredData(currentPageItems)
    }
  }, [contract, pageSize])
  useEffect(() => {
    if (contract.length > 0) {
      const { currentPageItems, totalPages } = paginate<DataGridRowType>(contract, { currentPage: 1, pageSize })
      setTotalPages(totalPages)
      setFilteredData(currentPageItems)
    }
  }, [contract, pageSize])

<<<<<<< HEAD
  const onSearch = (text: string) => {
    const lowercaseQuery = text.toLowerCase()

    const searchData = individus.filter((item: DataGridRowType) => {

      const searchData = contract.filter((item: DataGridRowType) => {


    setIndividus(filteredData)
=======
    setContract(filteredData)
>>>>>>> 3ee75c6 (Updating the contract list page)
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
    const searchData = contract.filter((item: DataGridRowType) => {
      return Object.values(item).some(
        value => typeof value === 'string' && value.toLowerCase().includes(lowercaseQuery)
      )
    })
    setFilteredData(searchData)
  }

  const onPageChange = (index: number) => {


  const onPageChange = (index: number) => {
    const { currentPageItems, totalPages } = paginate<DataGridRowType>(contract, { currentPage: index, pageSize })
    setPage(index)
    setTotalPages(totalPages)
    setFilteredData(currentPageItems)
  }

  const onNumberRowPageChange = (numberOfRows: string) => {
<<<<<<< HEAD
    const { currentPageItems, totalPages } = paginate<DataGridRowType>(individus, {

=======
    const { currentPageItems, totalPages } = paginate<DataGridRowType>(contract, {
>>>>>>> 3ee75c6 (Updating the contract list page)
      currentPage: page,
      pageSize: parseInt(numberOfRows)
    })
    setPageSize(parseInt(numberOfRows))
    setTotalPages(totalPages)
    setFilteredData(currentPageItems)
  }

    const sortedData = customSort(contract, { key: value.field, order: value.sort })
    const { currentPageItems } = paginate<DataGridRowType>(sortedData, { currentPage: page, pageSize })
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


      function onNumberRowPageChange(value: string): void {
        throw new Error('Function not implemented.')
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
        title={'Individu List'}

        title={'Liste des contrats'}

    />
  )
},

export default ContractList


export async function getStaticProps() {
  const fakeData = generateFakeData(60)
        title={'Individu List'}

      title={'Liste des contrats'}
    />
  )
}

export default ContractList

export async function getStaticProps() {
  const fakeData = generateFakeData(60)


  return {
    props: {
      fakeData
    }
  }

}
  }
