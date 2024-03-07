import styled from '@mui/system/styled'
import DatePicker from 'react-datepicker'

const StyledDatePicker = styled(DatePicker)({
  '& .MuiInputBase-root': {
    backgroundColor: '#f5f5f5',
    height: '38px'
  },
  '& .MuiPickersDay-daySelected': {
    backgroundColor: '#5d5a68'
  }
})

export default StyledDatePicker
