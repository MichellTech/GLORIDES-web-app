import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isUserLogedin: true,
  dropDown: false,
  notifications: false,
  notificationscontent: 0,
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
    openNotifications: (state) => {
      state.notifications = true
    },
    closeNotifications: (state) => {
      state.notifications = false
    },
  },
})
export const {
  logOut,
  openDropDown,
  closeDropDown,
  closeNotifications,
  openNotifications,
} = userSlice.actions
export default userSlice.reducer
