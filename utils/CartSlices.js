import { createSlice } from '@reduxjs/toolkit';
import React from 'react';

const CartSlices = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    additem: (state, action) => {
      state.items.push(action.payload);
    },
    removeitem: (state, action) => {
      state.items.pop();
    },
    clearitem: (state, action) => {
      state.items.length = 0;
    },
  },
});

export const { additem, removeritem, clearitem } = CartSlices.actions;
export default CartSlices.reducer;
