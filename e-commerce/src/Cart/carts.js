import React, {Component} from 'react';
import {connect} from'react-redux';
import Error from '../Hoc/Error';
import styles from './carts.module.scss';
import List from '../UI/list';
class cart extends Component{
   
    render(){
       let cartListDisplay=<Error errorMessage="You have no product in wishlist"/>
       if(this.props.cartListArray!==null && this.props.cartListArray.length>0)
       {
        cartListDisplay=this.props.cartListArray.map(cur=>{
               return <List productName={cur.productName} productPrice={cur.productPrice} listType="cartList"/>
           })
       }    
        
        return(
           
            <div className={styles.cartListContainer}>
                {cartListDisplay}
                <div className={styles.payAmount}>
                    <span>Total Price:2000</span>
                    <button className={styles.payButton}>Pay</button>
                </div>
            </div>
            
           
        )
       
    }
}

const mapStateToProps=(state)=>{
    return{
        cartListArray:state.cart
    }
    
}
const mapDispatchToProps=(dispatch)=>{
    return{}
}
export default connect(mapStateToProps,mapDispatchToProps)(cart);