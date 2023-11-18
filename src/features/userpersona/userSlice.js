import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isUserLogedin: false,
  dropDown: false,
  notifications: false,
  notificationscontent: 0,
  hosting: false,
  isWithdrawing: false,
  userData: {},
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
    logIN: (state) => {
      state.isUserLogedin = true
    },
    setUserdata: (state, action) => {
      state.userData = action.payload
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
  logIN,
  userData,
  setUserdata,
} = userSlice.actions
export default userSlice.reducer
