import React from 'react';
import styles from './product.module.scss';
import {MdFavoriteBorder} from 'react-icons/md';
import {FiShoppingCart} from 'react-icons/fi';
import {FaRupeeSign} from 'react-icons/fa';
const Product = (props)=>{
    return(
        <div className={styles.product}>
            
            <div className={styles.productDescription}>
                <div className={styles.productTitle}>
                    <span>Coolpad Cool 3 Plus (Cherry Black, 3GB RAM, 32GB Storage)</span>
                </div>
                <div className={styles.productPrice}>
                    <span><FaRupeeSign/></span>
                    <span>6,499</span>
                </div>
            </div>
            <div className={styles.productOptions}>
                <span><MdFavoriteBorder/></span>
                <span><FiShoppingCart/></span>
            </div>
        </div>
    )
}

export default Product;