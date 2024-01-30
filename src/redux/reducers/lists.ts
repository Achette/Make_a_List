import { IconType } from 'react-icons'
import { RootState } from 'redux/store'
import { getAll } from 'services/list-services'
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

interface CreatedBy {
  id: string
  name: string
  email: string
}

interface Shared {
  id: string
  name: string
  email: string
}

interface ListItem {
  id: string
  color: string
  icon: IconType | string
  created_at: string
  created_by: CreatedBy
  name: string
  shared: Shared[]
  total: number
  updated_at: string
}

interface Lists {
  userLists: ListItem[] | []
}

const initialState: Lists = {
  userLists: [],
}

const listSlice = createSlice({
  name: 'Lists',
  initialState,
  reducers: {
    resetLists: (state) => {
      state.userLists = []
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchListas.fulfilled,
      (state, action: PayloadAction<ListItem[] | []>) => {
        state.userLists = action.payload
      }
    )
  },
})

export const fetchListas = createAsyncThunk('fetch/lists', async () => {
  const response = await getAll()
  return response.data.list
})

export default listSlice.reducer
export const { resetLists } = listSlice.actions

export const getUserLists = (state: RootState) => state.lists.userLists
