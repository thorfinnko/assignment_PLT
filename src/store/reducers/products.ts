import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product } from '../../Typings/Products';

type productInitialState = {
  loading: boolean;
  isError: boolean;
  products: Array<Product>;
};

const initialState: productInitialState = {
  loading: false,
  isError: false,
  products: [],
};

type payload = Array<Product>;

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProducts: (state: productInitialState) => {
      state.loading = true;
    },
    fetchProductsSuccess: (state: productInitialState, action: PayloadAction<payload>) => {
      state.products = action.payload;
      state.loading = false;
      state.isError = false;
    },
    fetchProductsFailure: (state: productInitialState) => {
      state.loading = false;
      state.isError = true;
    },
    updateProducts: (state: productInitialState, action: PayloadAction<Product>) => {
      state.products = state.products.filter((item) => item.id != action.payload.id);
    },
    addToProducts: (state, action) => {
      const newProduct = action.payload;
      const productIndex = state.products.findIndex((item) => item.id === newProduct.id);

      if (productIndex === -1) {
        state.products = [...state.products, newProduct];
      }
    },
  },
});

export const {
  fetchProducts,
  fetchProductsSuccess,
  fetchProductsFailure,
  updateProducts,
  addToProducts,
} = productSlice.actions;

export default productSlice.reducer;
