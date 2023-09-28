import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import products from './reducers/products';
import cart from './reducers/cart';
import createSagaMiddleware from '@redux-saga/core';
import sagas from './sagas';

export const rootReducer = combineReducers({
  products: products,
  cart: cart,
});

let sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware];

export const store = configureStore({
  reducer: rootReducer,
  middleware: middleWares,
  devTools: process.env.NODE_ENV !== 'production',
});
sagaMiddleware.run(sagas);

export type RootState = ReturnType<typeof rootReducer>; // Define RootState after rootReducer
