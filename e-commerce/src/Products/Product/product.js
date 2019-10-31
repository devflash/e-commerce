import React from 'react';
import styles from './product.module.scss';
import {TiHeartFullOutline} from 'react-icons/ti';
import {TiHeartOutline} from 'react-icons/ti';
import {FiShoppingCart} from 'react-icons/fi';
import {FaRupeeSign} from 'react-icons/fa';
const Product = (props)=>{
    return(
        <div className={styles.product}>
            
            <div className={styles.productDescription}>
                <div className={styles.productTitle}>
                    <span>{props.productName}</span>
                </div>
                <div className={styles.productPrice}>
                    <span><FaRupeeSign/></span>
                    <span>{props.productPrice}</span>
                </div>
            </div>
            <div className={styles.productOptions}>
                <span onClick={props.favouriteClick}>
                    {props.favourite ? <TiHeartFullOutline color='#e74c3c'/> : <TiHeartOutline/> }
                </span>
                <span><FiShoppingCart/></span>
            </div>
        </div>
    )
}

export default Product;