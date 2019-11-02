import React, {Component} from 'react';
import {connect} from'react-redux';
import Error from '../Hoc/Error';
import WishList from './WishList/wishList';
import styles from './wishLists.module.scss';
import List from '../UI/list';
class wishList extends Component{
   
    render(){
       let wishListDisplay=<Error errorMessage="You have no product in wishlist"/>
       if(this.props.wishListArray!==null && this.props.wishListArray.length>0)
       {
        wishListDisplay=this.props.wishListArray.map(cur=>{
               return <List productName={cur.productName} productPrice={cur.productPrice} listType="wishList"/>
           })
       }    
        
        return(
            <div className={styles.wishListContainer}>
                {wishListDisplay}
            </div>
        )
       
    }
}

const mapStateToProps=(state)=>{
    return{
        wishListArray:state.wishlist
    }
    
}
const mapDispatchToProps=(dispatch)=>{
    return{}
}
export default connect(mapStateToProps,mapDispatchToProps)(wishList);