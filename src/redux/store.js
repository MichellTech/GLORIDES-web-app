import { configureStore } from '@reduxjs/toolkit'
import filterReducer from '../features/rental/filterSlice'

export const store = configureStore({
  reducer: {
    rental: filterReducer,
  },
})
