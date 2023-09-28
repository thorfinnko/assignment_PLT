import React from 'react';
import { render, screen, waitFor } from '@testing-library/react-native';
import Cart from '../../src/Pages/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import createMockStore from '../../__mocks__/mockStore';
import Products from '../../src/Pages/Products';
import General from '../../src/API/Controller/products';
import { Text, TouchableOpacity, View } from 'react-native';
import { ProductCard, ProductCardProps } from '../../src/Components/ProductCard';
import { addToCart } from '../../src/store/reducers/cart';
import { fetchProducts } from '../../src/store/reducers/products';

const initialState = {
    products: {
        loading: true,
        isError: false,
        products: [],
      },
    cart: {
        products: [],
    },
};

const storeWithData = {
    products: {
        loading: false,
        isError: false,
        products: [
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
            }],
    },
    cart: {
        products: [],
    },
}

const store = createMockStore(initialState);

const customStore = createMockStore(storeWithData)

// jest.mock('../../src/API/Controller/products')

// function MockProductCard(cardProps: ProductCardProps) {
//     const {item} = cardProps
//     return (
//       <View>
//         <Text accessibilityLabel="mock onSelect Input" >
//             {item.name}
//         </Text>
//         <TouchableOpacity
//             accessibilityLabel="mock add to cart"
//             onPress={() => {
//                 store.dispatch(addToCart)
//             }}
//         >
//         </TouchableOpacity>

//       </View>
//     );
// }

// jest.mock('../../src/Components/ProductCard', () => MockProductCard)

describe('test the Products Page', () => {
    it('when there are no products in cart', async () => {
        const {toJSON} = render(
            <Provider store={customStore}>
                <Products />
            </Provider>
        );
        expect(screen).toBeTruthy();
        expect(toJSON()).toMatchSnapshot();
        await waitFor(() => {
          expect(screen.getByText('Loading...')).toBeDefined();
        });
    })

    it('when the products are fetched in List', async () => {
        render(
            <Provider store={customStore}>
                <Products />
            </Provider>
        ) ;

        await waitFor(() => {
            expect(screen.getByText('Product 1')).toBeTruthy();
            expect(screen.getByText('Product 2')).toBeTruthy();
        });
    })
})

