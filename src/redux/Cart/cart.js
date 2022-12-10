import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  totalPrice: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cartItems.push(action.payload)

      state.totalPrice = state.cartItems.reduce((sum, obj) => {
        return obj.price + sum
      }, 0)
    }, 
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter((obj) => obj.id !== action.payload)
      
      state.totalPrice = state.cartItems.reduce((sum, obj) => {
        return obj.price + sum
      }, 0)
    },
  },
})

export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer