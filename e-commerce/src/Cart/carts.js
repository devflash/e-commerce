import React, {Component} from 'react';
import {connect} from'react-redux';
import Error from '../Hoc/Error';
import styles from './carts.module.scss';
import List from '../UI/list';
import {IoMdArrowRoundBack} from 'react-icons/io';
import * as productActions from '../store/actions/productActions';
class cart extends Component{
    removeFromCartClickHandler = (productId,event)=>{
        event.preventDefault();
       this.props.updateCart(productId,true);
   }
    backButtonClickContainer=()=>{
        this.props.history.push("/");
    }

    quantityAddClickHandler=(productId)=>{
        let productPrice=null;
        this.props.products.forEach(cur=>{
            if(cur.id===productId)
            {
                productPrice=parseInt(cur.productPrice);
            }
        });
        this.props.quantityAdd(productId,productPrice);
    }
    quantitySubtractClickHandler=(productId)=>{
        let productPrice=null;
        this.props.products.forEach(cur=>{
            if(cur.id===productId)
            {
                productPrice=parseInt(cur.productPrice);
            }
        });
        this.props.quantitySubtract(productId,productPrice);
    }
   
    render(){
       let cartListDisplay=<Error errorMessage="You have no product in wishlist"/>
       let cartListArray=[]; 
       if(this.props.products!==null && this.props.products.length>0)
       {
            cartListArray=this.props.products.filter(cur=>{
                return cur.carted;
            })
       }     
            
        if(cartListArray!==null && cartListArray.length>0)
        {
            // wishListDisplay=wishListArray.slice(0,wishListArray.length+1);
            cartListDisplay=cartListArray.map(cur=>{
                return <List productName={cur.productName}
                             productPrice={cur.productPrice} 
                             listType="cartList"
                             quantity={cur.quantity}
                             quantityAdd={()=>this.quantityAddClickHandler(cur.id)}
                             quantitySubtract={()=>this.quantitySubtractClickHandler(cur.id)}
                             removeFromCart={(event)=>this.removeFromCartClickHandler(cur.id,event)}/>
            })
        }    
        
        return(
           
            <div className={styles.cartListContainer}>
                <div className={styles.backButton}>
                    <IoMdArrowRoundBack value={{size:"1em"}} onClick={this.backButtonClickContainer}/>
                </div>
                {cartListDisplay}
                {
                    cartListArray.length>0 ?
                                           <div className={styles.payAmount}>
                                                <span>Total Price:{this.props.totalPrice}</span>
                                                <button className={styles.payButton}>Pay</button>
                                            </div>
                                            :
                                             null
                }
                
            </div>
            
           
        )
       
    }
}

const mapStateToProps=(state)=>{
    return{
        products:state.products,
        totalPrice:state.totalPrice
    }
    
}
const mapDispatchToProps=(dispatch)=>{
    return{
        quantityAdd:(productId,productPrice)=>dispatch(productActions.quantityAdd(productId,productPrice)),
        quantitySubtract:(productId,productPrice)=>dispatch(productActions.quantitySubtract(productId,productPrice)),
        updateCart: (productId,cartType)=>dispatch(productActions.addToCart(productId,cartType))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(cart);