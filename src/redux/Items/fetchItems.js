import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchItems = createAsyncThunk(
  'items/fetchItems',
  async () => {
    try {
      const res = await axios.get('https://6363fbbe8a3337d9a2ee38e6.mockapi.io/sneakers-items')
      return res.data
    } catch (error) {
      alert(error)
    }
  }
)

const initialState = {
  items: [],
  status: 'success', // pending | success | error
} 

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload
    }
  },
  extraReducers: {
    [fetchItems.fulfilled]: (state, action) => {
      state.items = action.payload
      state.status = 'success'
    },
    [fetchItems.rejected]: (state) => {
      state.items = []
      state.status = 'error'
    }
  },
})

export const { setItems } = itemsSlice.actions

export default itemsSlice.reducer