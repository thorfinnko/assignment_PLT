import { call, put, all, takeEvery } from 'redux-saga/effects';

import { fetchProductsSuccess, fetchProductsFailure } from '../reducers/products';
import General from '../../API/Controller/products';

function fetchProducts() {
  return General.fetch(`/products`);
}

function* watchFetchProducts() {
  try {
    const { data } = yield call(fetchProducts);
    yield put(fetchProductsSuccess(data));
  } catch (e) {
    console.log(e);
    yield put(fetchProductsFailure());
  }
}

export default function* productsSaga() {
  yield all([takeEvery('products/fetchProducts', watchFetchProducts)]);
}
