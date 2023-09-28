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
  },
});

export const { fetchProducts, fetchProductsSuccess, fetchProductsFailure } = productSlice.actions;

export default productSlice.reducer;
