import mainAxiosAction from '@/components/axiosAction'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// getuserprofile
export const getuserprofile = createAsyncThunk(
  'profile/getprofile',
  async () => {
    try {
      const response = await mainAxiosAction.post(`/user/get-user`, {})
      localStorage.setItem('User_Profile', JSON.stringify(response?.data?.user))
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
      const response = await mainAxiosAction.post(
        `/notifications/get-notifications`,
        {}
      )
      localStorage.setItem(
        'User_Notifications',
        JSON.stringify(response?.data?.notifications)
      )
      return response?.data?.notifications
    } catch (error) {
      console.error(error)
    }
  }
)

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('User_Exist')
    if (serializedState === null) {
      return false
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

const userState = () => {
  try {
    const usersState = localStorage.getItem('User_State')
    if (usersState === null) {
      return false
    }
    return JSON.parse(usersState)
  } catch (err) {
    return undefined
  }
}
const initialState = {
  isUserLogedin: loadState(),
  dropDown: false,
  notifications: false,
  notificationsData: null,
  hosting: userState(),
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
      localStorage.clear('User_Token')
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
      localStorage.setItem('User_State', JSON.stringify(true))
    },
    returnToUser: (state) => {
      state.hosting = false
      localStorage.setItem('User_State', JSON.stringify(false))
    },
    withdrawmoney: (state) => {
      state.isWithdrawing = true
    },
    cancelwithdraw: (state) => {
      state.isWithdrawing = false
    },
    logIN: (state) => {
      state.isUserLogedin = true
      localStorage.setItem('User_Exist', JSON.stringify(true))
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
