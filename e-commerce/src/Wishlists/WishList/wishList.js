import React from 'react';
import styles from './wishList.module.scss';
import {FaRupeeSign} from 'react-icons/fa';
const wishList=(props)=>{
    return(
        <div className={styles.wishList}>
            <div className={styles.productDescription}>
                <span>{props.productName}</span>
                <span>
                    <FaRupeeSign/>
                    <span>{props.productPrice}</span>
                </span>
            </div>
            <div className={styles.wishListOptions}>
                <div>
                    <button className={styles.cartButton}>Add to cart</button>
                </div>
                <div>
                    <a href="#">Remove item</a>
                </div>
                
            </div>
        </div>
    )
}

export default wishList;