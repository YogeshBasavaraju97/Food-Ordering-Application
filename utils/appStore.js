import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlices';

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
