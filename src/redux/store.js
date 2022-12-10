import { configureStore } from '@reduxjs/toolkit'
import items from './Items/fetchItems'
import cart from './Cart/cart'
import favorite from './Favorite/favorite'

export const store = configureStore({
  reducer: {
    items,
    cart,
    favorite,
  },
})