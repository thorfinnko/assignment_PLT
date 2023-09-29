import React from 'react';
import { render, screen, waitFor } from '@testing-library/react-native';
import Cart from '../../src/Pages/Cart';
import { Provider } from 'react-redux';
import createMockStore from '../../__mocks__/mockStore';
import General from '../../src/API/Controller/products';

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


jest.mock('../../src/API/Controller/products', () => {
    return {
        async fetch(){
            return [
                {
                    id: 1,
                    colour: "Black",
                    name: "Black Sheet Strappy Textured Glitter Bodycon Dress",
                    price: 10,
                    img: "http://cdn-img.prettylittlething.com/9/0/a/a/90aa90903a135ee59594f47c7685aa7ef3046e44_cly8063_1.jpg?imwidth=1024"
                },
                {
                    id: 2,
                    colour: "Stone",
                    name: "Stone Ribbed Strappy Cut Out Detail Bodycon Dress",
                    price: 4,
                    img: "https://cdn-img.prettylittlething.com/3/6/5/a/365a5d1dce6a2b77b564379b302c9d83afccf33b_cmd2051_1.jpg?imwidth=1024"
                },
            ]
        }
    }
})

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


