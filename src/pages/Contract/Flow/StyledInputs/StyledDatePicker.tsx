import styled from '@mui/system/styled'
import DatePicker from 'react-datepicker'
import styled from '@mui/system/styled'
import DatePicker from 'react-datepicker'

const StyledDatePicker = styled(DatePicker)({
  '& .MuiInputBase-root': {
    backgroundColor: '#f5f5f5',
    borderRadius: '4px',
    width: '100%',
    height: '40px',
    '& input': {
      padding: '8px',
      fontSize: '14px',
      width: '100%',
      marginTop: '8px'
    }
  },
  '& .MuiPickersDay-daySelected': {
    backgroundColor: '#5d5a68',
    color: '#fff'
  }
})
    color: '#fff'
  }
})

export default StyledDatePicker
export default StyledDatePicker
