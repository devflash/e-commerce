import * as actionTypes from '../actions/actionTypes';
import axios from 'axios';

export const updateFavourite= (productId,favouriteType,wishListObject)=>{
    return{
        type:actionTypes.UPDATE_FAVOURITE,
        productId:productId,
        favouriteType:favouriteType,
        wishListObject:wishListObject
    }
}

export const addToCart=(productId,cartType,cartObject)=>{
    return{
        type:actionTypes.ADD_TO_CART,
        productId:productId,
        cartType:cartType,
        cartObject:cartObject

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
        })
    
    }
        
}
     
    