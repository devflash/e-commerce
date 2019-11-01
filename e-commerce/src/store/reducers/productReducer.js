import * as actionTypes from '../actions/actionTypes';
const initialState = {
    categories: null,
    products: null,
    loading: false,
    error: false,
    wishlist: [],
    cart:[]
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
                    wishlist:[
                        ...state.wishlist.slice(0,state.wishlist.lenght+1),
                        action.wishListObject.wishListObjectToAdd,
                        ...state.wishlist.slice(0,state.wishlist.length+1)
                        
                    ]



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
                            favourite: !cur.favourite
                        }

                    }),
                    wishlist:state.wishlist.filter(cur=>cur.id!==action.wishListObject.wishListObjectIdToRemove)



                }
            }


        }
        case actionTypes.ADD_TO_CART:{
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
                    cart:[
                        ...state.cart.slice(0,state.cart.lenght+1),
                        action.cartObject.cartObjectToAdd,
                        ...state.cart.slice(0,state.cart.length+1)
                        
                    ]



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
                    cart:state.cart.filter(cur=>cur.id!==action.cartObject.cartObjectIdToRemove)



                }
            }
        }
        default:
            return state;
    }


}

export default productReducer;