import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import styles from './header.module.scss';
class Header extends Component{

    render(){
        const notificationWishListClasses=[styles.notificationHide];
        const notificationCartListClasses=[styles.notificationHide]
        if(this.props.wishListCount>0)
        {
            notificationWishListClasses.push(styles.notification);
            
        }
        if(this.props.cartCount>0)
        {
            notificationCartListClasses.push(styles.notification);
            
        }
        
        return(
            <div className={styles.header}>
                <div className={styles.projectTitle}>
                    <span>Shopify</span>
                </div>
                <div className={styles.navigation}>
                    <Link to="/wishList">Orders</Link>
                    <Link to="/wishList" className={styles.hasNotification}>Wishlist
                        <span className={notificationWishListClasses.join(' ')}>{this.props.wishListCount}</span>
                    </Link>
                    <Link to="/cartList" className={styles.hasNotification}>Cart
                        <span className={notificationCartListClasses.join(' ')}>{this.props.cartCount}</span>
                    </Link>
                </div>
            </div>
        )
    }
   
}
const mapStateToProps=(state)=>{
    return{
        wishListCount:state.favouriteCount,
        cartCount:state.cartCount
    }
}
export default connect(mapStateToProps,null)(Header);