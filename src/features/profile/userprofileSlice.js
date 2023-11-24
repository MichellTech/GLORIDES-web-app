import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userprofile: null,
}

const userprofileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setUserprofiledetails: (state, action) => {
      state.userprofile = action.payload
    },
  },
})
export const { setUserprofiledetails } = userprofileSlice.actions
export default userprofileSlice.reducer
