import productReducer, { fetchProducts, fetchProductsFailure, fetchProductsSuccess } from "../../src/store/reducers/products";

describe('products Reducer', () => {
    it('should return an empty array when passed an empty action', () => {
        const initialState = undefined;
        const action = {type:''}
        const result = productReducer(initialState, action)
        expect(result).toEqual({
            loading: false,
            isError: false,
            products: [],
        })
    })
    it('should return the error state as true when fetchProductsFailure action is passed', () => {
        const initialState = undefined;
        const action = fetchProductsFailure()
        const result = productReducer(initialState, action)
        expect(result).toEqual({
            loading: false,
            isError: true,
            products: [],
        })
    })
    it('should return the product state when fetchProductsSuccess action is passed', () => {
        const initialState = undefined;
        const action = fetchProductsSuccess([
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
            }
        ])
        const result = productReducer(initialState, action)
        expect(result).toEqual({
            loading: false,
            isError: false,
            products: [{
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
        })
    })
})