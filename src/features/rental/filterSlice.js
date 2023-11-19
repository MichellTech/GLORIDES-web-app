import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isFiltering: false,
  allsearchedcars: [],
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
})
export const { openFilter, closeFilter, setAllsearchedcars, allsearchedcars } =
  filterSlice.actions
export default filterSlice.reducer
