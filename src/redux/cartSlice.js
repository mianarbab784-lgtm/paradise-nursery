import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: {}
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const product = action.payload
      const id = product.id
      if (!state.items[id]) state.items[id] = { product, quantity: 1 }
    },
    increase(state, action) {
      const id = action.payload
      if (state.items[id]) state.items[id].quantity += 1
    },
    decrease(state, action) {
      const id = action.payload
      if (state.items[id]) {
        state.items[id].quantity -= 1
        if (state.items[id].quantity <= 0) delete state.items[id]
      }
    },
    removeItem(state, action) {
      const id = action.payload
      if (state.items[id]) delete state.items[id]
    },
    clearCart(state) {
      state.items = {}
    }
  }
})

export const { addItem, increase, decrease, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer

