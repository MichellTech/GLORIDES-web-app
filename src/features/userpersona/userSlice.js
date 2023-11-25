import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// getuserprofile
export const getuserprofile = createAsyncThunk(
  'profile/getprofile',
  async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/user/get-user`,
        {},
        {
          headers: {
            'x-glorious-access': JSON.parse(localStorage.getItem('User_Token')),
          },
        }
      )
      return response?.data?.user
    } catch (error) {
      console.error(error)
    }
  }
)

// getnotifications
export const getusernotifications = createAsyncThunk(
  'profile/getnotifications',
  async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/notifications/get-notifications`,
        {},
        {
          headers: {
            'x-glorious-access': JSON.parse(localStorage.getItem('User_Token')),
          },
        }
      )
      console.log(response)
      return response?.data?.notifications
    } catch (error) {
      console.error(error)
    }
  }
)

const initialState = {
  isUserLogedin: true,
  dropDown: false,
  notifications: false,
  notificationsData: null,
  hosting: false,
  isWithdrawing: false,
  userData: null,
  isLoading: false,
  hasError: false,
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
  extraReducers: (builder) => {
    builder
      .addCase(getuserprofile.pending, (state, action) => {
        state.isLoading = true
        state.hasError = false
      })
      .addCase(getuserprofile.fulfilled, (state, action) => {
        state.userData = action.payload
        state.isLoading = false
        state.hasError = false
      })
      .addCase(getuserprofile.rejected, (state, action) => {
        state.hasError = true
        state.isLoading = false
      }),
      builder
        .addCase(getusernotifications.pending, (state, action) => {
          state.isLoading = true
          state.hasError = false
        })
        .addCase(getusernotifications.fulfilled, (state, action) => {
          state.notificationsData = action.payload
          state.isLoading = false
          state.hasError = false
        })
        .addCase(getusernotifications.rejected, (state, action) => {
          state.hasError = true
          state.isLoading = false
        })
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
  hosting,
  isLoading,
  notificationsData,
} = userSlice.actions
export default userSlice.reducer

// Selectors
// export const selectCompanies = state => state.companyList.company;
// export const selectLoadingState = state => state.companyList.isLoading;
// export const selectErrorState = state => state.companyList.hasError;

// export default companySlice.reducer;
