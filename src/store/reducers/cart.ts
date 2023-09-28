import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../Typings/Products';

type cartReducerInitialState = {
  products: Array<Product>;
};

const initialState: cartReducerInitialState = {
  products: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.products = [...state.products, action.payload];
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter((item) => item.id != action.payload.id);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
