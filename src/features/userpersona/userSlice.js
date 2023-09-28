import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isUserLogedin: true,
  dropDown: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOut: (state) => {
      state.isUserLogedin = false
    },
    openDropDown: (state) => {
      state.dropDown = true
    },
    closeDropDown: (state) => {
      state.dropDown = false
    },
  },
})
export const { logOut, openDropDown, closeDropDown } = userSlice.actions
export default userSlice.reducer
