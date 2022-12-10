import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  favoriteItems: [],
}

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavoriteItem: (state, action) => {
      state.favoriteItems.push(action.payload)
    },
    removeFavoriteItem: (state, action) => {
      state.favoriteItems = state.favoriteItems.filter((obj) => obj.id !== action.payload)
    },
  },
})

export const { addFavoriteItem, removeFavoriteItem } = favoriteSlice.actions

export default favoriteSlice.reducer