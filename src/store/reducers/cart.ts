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
      const newProduct = action.payload;
      const productIndex = state.products.findIndex((item) => item.id === newProduct.id);

      if (productIndex === -1) {
        state.products = [...state.products, newProduct];
      }
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter((item) => item.id != action.payload.id);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
