// ** React Imports

// ** MUI Imports
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import InputLabel from '@mui/material/InputLabel'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import { GridToolbarExport } from '@mui/x-data-grid'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

interface ToolbarProps {
  value: string
  clearSearch: () => void
  onChange: (value: string) => void
  onNumberRowPageChange: (value: SelectChangeEvent<string>) => void
}

const Toolbar = (props: ToolbarProps) => {
  const { clearSearch, onChange, onNumberRowPageChange, value } = props

  return (
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
        <FormControl>
          <InputLabel htmlFor='outlined-age-native-simple'>Rows per page</InputLabel>
          <Select
            native
            label='Rows per page'
            onChange={onNumberRowPageChange}
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
            <option value={40}>fourty</option>
          </Select>
        </FormControl>
        <TextField
          size='small'
          value={value}
          onChange={(e: any) => {
            onChange(e?.target?.value)
          }}
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
    </Box>
  )
}

export default Toolbar
