import { IconType } from 'react-icons'
import { RootState } from 'redux/store'
import { getAll } from 'services/list-services'
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

type Lists = {
  id: string
  color: string
  icon: IconType | string
  created_at: string
  created_by: { id: string; name: string; email: string }
  name: string
  shared: { id: string; name: string; email: string }[]
  total: number
  updated_at: string
}[]

const initialState: Lists | [] = []

const listSlice = createSlice({
  name: 'Lists',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchListas.fulfilled,
      (state, action: PayloadAction<Lists | []>) => {
        return action.payload
      }
    )
  },
})

export const fetchListas = createAsyncThunk('fetch/lists', async () => {
  const response = await getAll()
  return response.data.list
})

export default listSlice.reducer

export const useLists = (state: RootState) => state.lists
