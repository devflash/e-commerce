import React from 'react';
import styles from './product.module.scss';
const Product = (props)=>{
    return(
        <div className={styles.product}>
            
            <div className={styles.productDescription}>
                <div className={styles.productTitle}>
                    <span>Coolpad Cool 3 Plus (Cherry Black, 3GB RAM, 32GB Storage)</span>
                </div>
                <div className={styles.productPrice}>
                    <span>6,499</span>
                </div>
            </div>
            <div className={styles.productOptions}>
                <span>wishlist</span>
                <span>Cart</span>
            </div>
        </div>
    )
}

export default Product;