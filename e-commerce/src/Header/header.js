import React from 'react';
import styles from './header.module.scss';
const Header=(props)=>{
    return(
        <div className={styles.header}>
            <div className={styles.projectTitle}>
                <span>Shopify</span>
            </div>
            <div className={styles.navigation}>
                <a href="#">Orders</a>
                <a href="#">Whishlist</a>
                <a href="#">Cart</a>
            </div>
        </div>
    )
}

export default Header;