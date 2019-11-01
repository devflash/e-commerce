import React from 'react';
import styles from './wishList.module.scss';
import {FaRupeeSign} from 'react-icons/fa';
const wishList=(props)=>{
    return(
        <div className={styles.wishList}>
            <div className={styles.productDescription}>
                <span>boAt BassHeads 100 in-Ear Headphones with Mic (Black)</span>
                <span>
                    <FaRupeeSign/>
                    <span>3000</span>
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