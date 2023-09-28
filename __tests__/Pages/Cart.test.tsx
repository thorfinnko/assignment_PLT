import React from 'react';
import { render, screen, waitFor } from '@testing-library/react-native';
import Cart from '../../src/Pages/Cart';
import { Provider } from 'react-redux';
import createMockStore from '../../__mocks__/mockStore';

const initialState = {
    products: {
        loading: false,
        isError: false,
        products: [],
      },
    cart: {
        products: [],
    },
  };

const store = createMockStore(initialState);

describe('test the cart component', () => {
    it('when there are no products in cart', async () => {
        const {toJSON} = render(
            <Provider store={store}>
                <Cart />
            </Provider>
        );
        expect(screen).toBeTruthy();
        expect(toJSON()).toMatchSnapshot();
        await waitFor(() => {
          expect(screen.getByLabelText('No Product Added to cart')).toBeDefined();
        });
    })
})


