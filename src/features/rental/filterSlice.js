import mainAxiosAction from '@/components/axiosAction'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// getall favourite cars
export const getuserfavourites = createAsyncThunk(
  'profile/getfavourite',
  async () => {
    try {
      const response = await mainAxiosAction.post(`/cars/get-bookmark`, {})
      return response?.data.cars
    } catch (error) {
      console.error(error)
    }
  }
)
const initialState = {
  isFiltering: false,
  allsearchedcars: [],
  bookmarked: [],
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    openFilter: (state) => {
      state.isFiltering = true
    },
    closeFilter: (state) => {
      state.isFiltering = false
    },
    setAllsearchedcars: (state, action) => {
      state.allsearchedcars = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getuserfavourites.pending, (state, action) => {
        state.isLoading = true
        state.hasError = false
      })
      .addCase(getuserfavourites.fulfilled, (state, action) => {
        state.bookmarked = action.payload
        state.isLoading = false
        state.hasError = false
      })
      .addCase(getuserfavourites.rejected, (state, action) => {
        state.hasError = true
        state.isLoading = false
      })
  },
})
export const {
  openFilter,
  closeFilter,
  setAllsearchedcars,
  allsearchedcars,
  bookmarked,
} = filterSlice.actions
export default filterSlice.reducer
