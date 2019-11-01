import React, {Component} from 'react';
import {connect} from'react-redux';
import WishList from './WishList/wishList';
import styles from './wishLists.module.scss';
class wishList extends Component{
   
    render(){
       let wishListDisplay=<p>You have no product in wishlist</p>
       if(this.props.wishListArray!==null && this.props.wishListArray.length>0)
       {
        wishListDisplay=this.props.wishListArray.map(cur=>{
               return <WishList/>
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