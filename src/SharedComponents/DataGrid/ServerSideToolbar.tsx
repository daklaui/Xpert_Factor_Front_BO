// ** React Imports
import { ChangeEvent } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import { GridToolbarExport } from '@mui/x-data-grid'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

interface ServerSideToolbarProps {
interface ServerSideToolbarProps {
  value: string
  clearSearch: () => void
  onChange: (e: ChangeEvent) => void
  onNumberRowPageChange: (value: string) => void
  onNumberRowPageChange: (value: string) => void
}

const ServerSideToolbar = (props: ServerSideToolbarProps) => {
  const { clearSearch, onChange, onNumberRowPageChange, value } = props
  return (
    <>
      <FormControl>
        <InputLabel htmlFor='outlined-age-native-simple'>Rows per page</InputLabel>
        <Select
          native
          label='Rows per page'
          onChange={event => {
            onNumberRowPageChange && onNumberRowPageChange(event.target.value)
          }}
          defaultValue=''
          sx={{
            height: '5vh',
            alignContent: 'center'
          }}
          inputProps={{
            name: 'Rows per page',
            id: 'outlined-age-native-simple'
          }}
        >
          <option aria-label='None' value='' />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>

      <Box
        sx={{
          gap: 2,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: theme => theme.spacing(2, 5, 4, 5)
        }}
      >
        <GridToolbarExport printOptions={{ disableToolbarButton: true }} />
        <TextField
          size='small'
          value={value}
          onChange={onChange}
          placeholder='Search…'
          InputProps={{
            startAdornment: (
              <Box sx={{ mr: 2, display: 'flex' }}>
                <Icon icon='tabler:search' fontSize={20} />
              </Box>
            ),
            endAdornment: (
              <IconButton size='small' title='Clear' aria-label='Clear' onClick={clearSearch}>
                <Icon icon='tabler:x' fontSize={20} />
              </IconButton>
            )
          }}
          sx={{
            width: {
              xs: 1,
              sm: 'auto'
            },
            '& .MuiInputBase-root > svg': {
              mr: 2
            }
          }}
        />
      </Box>
    </>
  )
}

export default ServerSideToolbar
