import * as actionTypes from '../actions/actionTypes';
const initialState = {
    categories: null,
    products: null,
    loading: false,
    error: false,
    favouriteCount: 0,
    cartCount: 0
}
const productReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.FETCH_CATEGORIES_SUCCESS: {
            return {
                ...state,
                categories: action.categories
            }
        }
        case actionTypes.FETCH_CATEGORIES_FAIL: {
            return {
                ...state,
                error: true
            }
        }
        case actionTypes.FETCH_PRODUCTS_SUCCESS: {
            return {
                ...state,
                products: action.products
            }
        }
        case actionTypes.FETCH_PRODUCTS_FAIL: {
            return {
                ...state,
                error: true
            }
        }
        case actionTypes.UPDATE_FAVOURITE: {
            if (!action.favouriteType) {
                return {

                    ...state,
                    products: state.products.map(cur => {
                        if (cur.id != action.productId) {
                            return cur;
                        }
                        return {
                            ...cur,
                            favourite: !cur.favourite
                        }

                    }),
                    favouriteCount: state.favouriteCount + 1
                }


            } else {
                return {

                    ...state,
                    products: state.products.map(cur => {
                        if (cur.id != action.productId) {
                            return cur;
                        }
                        return {
                            ...cur,
                            favourite: !cur.favourite
                        }

                    }),
                    favouriteCount: state.favouriteCount - 1
                }
            }

        }
        case actionTypes.ADD_TO_CART: {
            if (!action.cartType) {
                return {
                    ...state,
                    products: state.products.map(cur => {
                        if (cur.id != action.productId) {
                            return cur;
                        }
                        return {
                            ...cur,
                            carted: !cur.carted
                        }

                    }),
                    cartCount: state.cartCount + 1

                }
            }
            else
            {
                return {
                    ...state,
                    products: state.products.map(cur => {
                        if (cur.id != action.productId) {
                            return cur;
                        }
                        return {
                            ...cur,
                            carted: !cur.carted
                        }

                    }),
                    cartCount: state.cartCount - 1

                } 
            }

        }
        default:
            return state;
    }


}

export default productReducer;