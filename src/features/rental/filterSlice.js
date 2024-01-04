import mainAxiosAction from '@/components/axiosAction'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// getall favourite cars
export const getuserfavourites = createAsyncThunk(
  'profile/getfavourite',
  async () => {
    try {
      const response = await mainAxiosAction.post(`/cars/get-bookmark`, {})
      return response?.data.cars
    } catch (error) {
      console.error(error)
    }
  }
)

// seach all car data
export const getsearchedcars = createAsyncThunk(
  'user/getsearchedcars',

  async (values, thunkAPI) => {
    try {
      const response = await mainAxiosAction.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/cars/getAllCarsByState`,
        {
          state: values,
        }
      )
      console.log(values)
      return response?.data?.data
    } catch (error) {
      console.error(error)
      // You can also reject the promise with an error message
      return thunkAPI.rejectWithValue('Error fetching searched cars')
    }
  }
)

// get all cars
export const getallcars = createAsyncThunk('user/getallcars', async () => {
  try {
    const response = await mainAxiosAction.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/cars/getAllCars`,
      {}
    )
    return response?.data?.data
  } catch (error) {
    console.error(error)
  }
})

const initialState = {
  isFiltering: false,
  allsearchedcars: [],
  bookmarked: [],
  isBooking: false,
  successinfo: {},
  isUsersearching: false,
  returnedcars: [],
  searchdata: {
    city: '',
    state: '',
    date: '',
  },
  filterationdata: {
    price: '',
    door: '',
    gear: '',
    fuel: '',
  },
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    openFilter: (state) => {
      state.isFiltering = true
    },
    closeFilter: (state) => {
      state.isFiltering = false
    },
    setAllsearchedcars: (state, action) => {
      state.allsearchedcars = action.payload
    },
    setReturnedcars: (state, action) => {
      state.returnedcars = action.payload
    },
    setsuccessinfo: (state, action) => {
      state.successinfo = action.payload
    },
    bookCar: (state) => {
      state.isBooking = true
    },
    unbookCar: (state) => {
      state.isBooking = false
    },
    searchCar: (state) => {
      state.isUsersearching = true
    },
    unsearchCar: (state) => {
      state.isUsersearching = false
    },
    setsearcheddata: (state, action) => {
      state.searchdata = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getuserfavourites.pending, (state, action) => {
        state.isLoading = true
        state.hasError = false
      })
      .addCase(getuserfavourites.fulfilled, (state, action) => {
        state.bookmarked = action.payload
        state.isLoading = false
        state.hasError = false
      })
      .addCase(getuserfavourites.rejected, (state, action) => {
        state.hasError = true
        state.isLoading = false
      })

    builder
      .addCase(getsearchedcars.pending, (state, action) => {
        state.isLoading = true
        state.hasError = false
      })
      .addCase(getsearchedcars.fulfilled, (state, action) => {
        state.allsearchedcars = action.payload
        state.isLoading = false
        state.hasError = false
      })
      .addCase(getsearchedcars.rejected, (state, action) => {
        state.hasError = true
        state.isLoading = false
      })

    builder
      .addCase(getallcars.pending, (state, action) => {
        state.isLoading = true
        state.hasError = false
      })
      .addCase(getallcars.fulfilled, (state, action) => {
        state.allsearchedcars = action.payload
        state.isLoading = false
        state.hasError = false
      })
      .addCase(getallcars.rejected, (state, action) => {
        state.hasError = true
        state.isLoading = false
      })
  },
})
export const {
  openFilter,
  closeFilter,
  setAllsearchedcars,
  allsearchedcars,
  bookmarked,
  bookCar,
  unbookCar,
  setsuccessinfo,
  searchCar,
  unsearchCar,
  setReturnedcars,
  setsearcheddata,
} = filterSlice.actions
export default filterSlice.reducer
