import * as actionTypes from '../actions/actionTypes';
import axios from 'axios';

export const quantityAdd=(productId,productPrice)=>{
    return{
        type:actionTypes.QUANTITY_ADD,
        productId:productId,
        productPrice:productPrice
    }
}
export const quantitySubtract=(productId,productPrice)=>{
    return{
        type:actionTypes.QUANTITY_SUBTRACT,
        productId:productId,
        productPrice:productPrice
    }
}
export const updateFavourite= (productId,favouriteType)=>{
    return{
        type:actionTypes.UPDATE_FAVOURITE,
        productId:productId,
        favouriteType:favouriteType
    }
}

export const addToCart=(productId,cartType,productPrice)=>{
    return{
        type:actionTypes.ADD_TO_CART,
        productId:productId,
        cartType:cartType,
        productPrice:productPrice

    }
}

const fetchCategoriesSuccess=(categories,selectedCategory)=>{
    return{
        type:actionTypes.FETCH_CATEGORIES_SUCCESS,
        categories:categories,
        selectedCategory:selectedCategory
    }
}

const fetchCategoriesFail=()=>{
    return{
        type:actionTypes.FETCH_CATEGORIES_FAIL
    }
}

const fetchProductSuccess=(products)=>{
    return{
        type:actionTypes.FETCH_PRODUCTS_SUCCESS,
        products:products
    }
}
const fetchProductsFail=()=>{
    return{
        type:actionTypes.FETCH_PRODUCTS_FAIL
    }
}
export const fetchCategories=(dispatch)=>{
    return dispatch =>{
        return new Promise((resolve,reject)=>{
            dispatch(setLoading(true));
            setTimeout(()=>{
                axios.get('./services/categories.json').then(response=>{
                    let categories=response.data;
                    let selectedCategory=categories.filter(cur=>{
                       return cur.selected;
                    });
                    dispatch(fetchCategoriesSuccess(response.data,selectedCategory));
                    axios.get(`./services/${selectedCategory[0].id}.json`).then(response=>{
                        dispatch(fetchProductSuccess(response.data));
                      
                        resolve()
                    }).catch(error=>{
                        dispatch(fetchProductsFail(response.data));
                       
                        reject();
                    });
                }).catch(error=>{
                    dispatch(fetchCategoriesFail());
                    
                    reject();
                });
            },2000)
            
        })
    
    }
        
}
const setLoading = (loading)=>{
    return{
        type:actionTypes.SET_LOADING,
        loading:loading
    }
}



    