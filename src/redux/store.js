import { configureStore } from '@reduxjs/toolkit'
import filterReducer from '../features/rental/filterSlice'
import userReducer from '../features/userpersona/userSlice'
export const store = configureStore({
  reducer: {
    rental: filterReducer,
    userpersona: userReducer,
  },
})
