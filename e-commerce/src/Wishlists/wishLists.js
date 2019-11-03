import React, {Component} from 'react';
import {connect} from'react-redux';
import Error from '../Hoc/Error';
import * as productActions from '../store/actions/productActions';
import styles from './wishLists.module.scss';
import List from '../UI/list';
import {IoMdArrowRoundBack} from 'react-icons/io';
class wishList extends Component{

     removeFavouriteClickHandler = (productId,event)=>{
         event.preventDefault();
         const confirmation=window.confirm('Remove product from the wishlist? Action can not be reverted.');
        if (confirmation)
            this.props.updateFavourite(productId,true);
    }

    addToCartClickHandler=(productId)=>{
        let productPrice=null;
        this.props.products.forEach(cur=>{
            if(cur.id===productId)
            {
                productPrice=parseInt(cur.productPrice.replace(/,/g, ''));
            }
        });
        this.props.updateCart(productId,false,productPrice);
    }
    backButtonClickContainer=()=>{
        this.props.history.push("/");
    }
    render(){

       let wishListDisplay=<Error errorMessage="You have no product in wishlist"/>
       let wishListArray=[]; 
       if(this.props.products!==null && this.props.products.length>0)
       {
            wishListArray=this.props.products.filter(cur=>{
                return cur.favourite;
            })
       }     
            
        if(wishListArray!==null && wishListArray.length>0)
        {
            // wishListDisplay=wishListArray.slice(0,wishListArray.length+1);
            wishListDisplay=wishListArray.map(cur=>{
                return <List productName={cur.productName}
                             productPrice={cur.productPrice} 
                             listType="wishList"
                             carted={cur.carted}
                             removeFavourite={(event)=>this.removeFavouriteClickHandler(cur.id,event)}
                             addCart={()=>this.addToCartClickHandler(cur.id)}/>
            })
        }    
        
        return(
            <div className={styles.wishListContainer}>
                <div className={styles.backButton}>
                    <IoMdArrowRoundBack value={{size:"1em"}} onClick={this.backButtonClickContainer}/>
                </div>
                {wishListDisplay}
            </div>
        )
       
    }
}

const mapStateToProps=(state)=>{
    return{
        products:state.products
    }
    
}
const mapDispatchToProps=(dispatch)=>{
    return{
        updateFavourite: (projectId,favouriteType)=>dispatch(productActions.updateFavourite(projectId,favouriteType)),
        updateCart: (productId,cartType,productPrice)=>dispatch(productActions.addToCart(productId,cartType,productPrice))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(wishList);