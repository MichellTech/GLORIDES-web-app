import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isFiltering: false,
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
  },
})
export const { openFilter, closeFilter } = filterSlice.actions
export default filterSlice.reducer
