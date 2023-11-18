import { configureStore } from '@reduxjs/toolkit'
import filterReducer from '../features/rental/filterSlice'
import userReducer from '../features/userpersona/userSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const reducer = combineReducers({
  rental: filterReducer,
  userpersona: userReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer,
})
