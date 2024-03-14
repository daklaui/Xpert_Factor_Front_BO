// styles.ts

import styled from '@emotion/styled'

export const LeftContainer = styled.div`
  width: 30%;
  float: left;
`

export const RightContainer = styled.div`
  width: 68%;
  float: right;
`

export const FormContainer = styled.div`
  padding: 20px;
`

export const TableContainer = styled.div`
  padding: 20px;
`

export const StyledInputGroup = styled.div`
  margin-bottom: 20px; /* Add some bottom margin for spacing */
`

export const StyledInputGroupSpecial = styled.div`
  /* Add some bottom margin for spacing */
  padding: 20px;
`

export const StyledLabel = styled('label')({
  display: 'block',
  marginBottom: '5px',
  fontWeight: 'bold',
  fontSize: '13px'
})
