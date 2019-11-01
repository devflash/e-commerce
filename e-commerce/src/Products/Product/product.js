import React from 'react';
import styles from './product.module.scss';
import {TiHeartFullOutline} from 'react-icons/ti';
import {TiHeartOutline} from 'react-icons/ti';
import {AiFillShopping} from 'react-icons/ai';
import {AiOutlineShopping} from 'react-icons/ai';
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
                <span onClick={props.cartClick}>
                    {props.carted ? <AiFillShopping color="#e74c3c"/> : <AiOutlineShopping /> }
                </span>
            </div>
        </div>
    )
}

export default Product;