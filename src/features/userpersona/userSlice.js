import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isUserLogedin: true,
  dropDown: false,
  notifications: false,
  notificationscontent: 0,
  hosting: false,
  isWithdrawing: false,
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
    switchToHost: (state) => {
      state.hosting = true
    },
    returnToUser: (state) => {
      state.hosting = false
    },
    withdrawmoney: (state) => {
      state.isWithdrawing = true
    },
    cancelwithdraw: (state) => {
      state.isWithdrawing = false
    },
  },
})
export const {
  logOut,
  openDropDown,
  closeDropDown,
  closeNotifications,
  openNotifications,
  switchToHost,
  returnToUser,
  withdrawmoney,
  cancelwithdraw,
} = userSlice.actions
export default userSlice.reducer
