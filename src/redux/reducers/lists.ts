import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { IconType } from 'react-icons'
import { ListsProps } from 'routes'
import { getAll } from 'services/list-services'

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

const initialState: Lists = [
  {
    id: '',
    color: '',
    icon: '',
    created_at: '',
    created_by: {
      id: '',
      name: '',
      email: '',
    },
    name: '',
    shared: [],
    total: 0,
    updated_at: '',
  },
]

const listSlice = createSlice({
  name: 'Lists',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchListas.fulfilled,
      (state, action: PayloadAction<Lists>) => {
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
