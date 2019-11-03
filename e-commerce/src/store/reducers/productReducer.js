import * as actionTypes from '../actions/actionTypes';
const initialState = {
    categories: null,
    products: null,
    loading: false,
    error: false,
    favouriteCount: 0,
    cartCount: 0,
    totalPrice: 0
}
const productReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.FETCH_CATEGORIES_SUCCESS: {
            return {
                ...state,
                categories: action.categories,

            }
        }
        case actionTypes.FETCH_CATEGORIES_FAIL: {
            return {
                ...state,
                error: true,
                loading:false
            }
        }
        case actionTypes.FETCH_PRODUCTS_SUCCESS: {
            return {
                ...state,
                products: action.products,
                categories:state.categories.map(cur=>{
                    if(cur.id!==action.categoryId)
                    {
                        return{
                            ...cur,
                            selected:false
                        }
                    }
                    return{
                        ...cur,
                        selected:true
                    }

                }),
                loading: false
            }
        }
        case actionTypes.FETCH_PRODUCTS_FAIL: {
            return {
                ...state,
                error: true,
                loading:false
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
                    cartCount: state.cartCount + 1,
                    totalPrice: state.totalPrice + action.productPrice

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
                            carted: !cur.carted
                        }

                    }),
                    cartCount: state.cartCount - 1,
                    totalPrice: state.totalPrice - action.productPrice

                }
            }

        }
        case actionTypes.QUANTITY_ADD: {
            return {
                ...state,
                products: state.products.map(cur => {
                    if (cur.id !== action.productId) {
                        return cur;
                    }

                    return {
                        ...cur,
                        quantity: cur.quantity + 1
                    }
                }),
                totalPrice: state.totalPrice + action.productPrice


            }
        }
        case actionTypes.QUANTITY_SUBTRACT: {
            return {
                ...state,
                products: state.products.map(cur => {
                    if (cur.id !== action.productId) {
                        return cur;
                    }

                    return {
                        ...cur,
                        quantity: cur.quantity - 1
                    }


                }),
                totalPrice: state.totalPrice - action.productPrice


            }
        }
        case actionTypes.SET_LOADING: {
            return {
                ...state,
                loading: action.loading
            }
        }
        default:
            return state;
    }


}

export default productReducer;