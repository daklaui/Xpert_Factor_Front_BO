// ** MUI Imports
import { Box } from '@mui/material'
import Pagination from '@mui/material/Pagination'
import CustomPaginationProps from './pagination.interface'
import { ChangeEvent } from 'react'

const CustomPagination = ({ onPageChange, totalPages }: CustomPaginationProps) => {
  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    onPageChange(value)
  }

  return (
    <Box sx={{ my: '0.7rem', mr: '2em', width: '100%' }} display='flex' justifyContent='flex-end'>
      <Pagination onChange={handleChange} count={totalPages} size='medium' shape='rounded' color='primary' />
    </Box>
  )
}

export default CustomPagination
