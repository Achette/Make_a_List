import { RootState } from 'redux/store'
import { UserApi } from 'services/auth-services'
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

interface AboutMe {
  name: string
  email: string
  error: unknown
}

const initialState: AboutMe = {
  name: '',
  email: '',
  error: null,
}

const aboutMeSlice = createSlice({
  name: 'About-Me',
  initialState,
  reducers: {
    resetUser: (state) => {
      state.email = ''
      state.name = ''
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchAboutMe.fulfilled,
        (state, action: PayloadAction<AboutMe>) => {
          const { name, email } = action.payload
          state.email = email
          state.name = name
        }
      )
      .addCase(fetchAboutMe.rejected, (state, action) => {
        state.error = action.error.message
      })
  },
})

export const fetchAboutMe = createAsyncThunk(
  'fetch/about-me',
  async (id: string) => {
    const response = await UserApi.findMe(id)
    return response.data.users[0]
  }
)

export default aboutMeSlice.reducer
export const { resetUser } = aboutMeSlice.actions

export const getAboutUser = (state: RootState) => state.user
