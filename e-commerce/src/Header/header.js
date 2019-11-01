import React,{Component} from 'react';
import {connect} from 'react-redux';
import styles from './header.module.scss';
class Header extends Component{

    render(){
        const notificationWishListClasses=[styles.notificationHide];
        if(this.props.wishlist.length>0)
        {
            notificationWishListClasses.push(styles.notification);
            
        }
        return(
            <div className={styles.header}>
                <div className={styles.projectTitle}>
                    <span>Shopify</span>
                </div>
                <div className={styles.navigation}>
                    <a href="#">Orders</a>
                    <a href="#" className={styles.hasNotification}>Wishlist
                        <span className={notificationWishListClasses.join(' ')}>{this.props.wishlist.length}</span>
                    </a>
                    <a href="#" className={styles.hasNotification}>Cart
                        {/* <span className={styles.notification}>1</span> */}
                    </a>
                </div>
            </div>
        )
    }
   
}
const mapStateToProps=(state)=>{
    return{
        wishlist:state.wishlist
    }
}
export default connect(mapStateToProps,null)(Header);