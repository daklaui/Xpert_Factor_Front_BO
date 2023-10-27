import { createSlice } from '@reduxjs/toolkit'
import { IReduxIndividual } from '../interface/individual'

const reducerName = 'individual'
export const initialState: IReduxIndividual.IInitialState = {
  data: []
}

export const individualSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {}
})

export default individualSlice.reducer
