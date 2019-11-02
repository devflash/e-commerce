import React from 'react';
import styles from './list.module.scss';
import {FaRupeeSign} from 'react-icons/fa';
import {FiPlusCircle,FiMinusCircle} from 'react-icons/fi'
const List=(props)=>{
    return(
        <div className={styles.listContainer}>
            <div className={styles.wishList}>
                <div className={styles.productDescription}>
                    <span>{props.productName}</span>
                <span>
                    <FaRupeeSign/>
                    <span>{props.productPrice}</span>
                </span>
            </div>
        
            {
                props.listType==='wishList' ?
                                            <div className={styles.wishListOptions}> 
                                                <div>
                                                    <button className={props.carted ? styles.disabledCartButton : styles.enabledCartButton}
                                                            disabled={props.carted}
                                                            onClick={props.addCart} >
                                                                Add to cart
                                                    </button>
                                                </div>
                                                <div>
                                                    <a href="#" onClick={props.removeFavourite}>Remove item</a>
                                                </div>
                                            </div>
                                            :
                                            <div className={styles.wishListOptions}> 
                                                <div className={styles.quanity}>
                                                    <span><FiMinusCircle onClick={props.quantitySubtract}/></span>
                                                    <span>{props.quantity}</span>
                                                    <span><FiPlusCircle onClick={props.quantityAdd}/></span>
                                                </div>
                                                <div>
                                                    <a href="#" onClick={props.removeFromCart}>Remove item</a>
                                                </div>
                                            </div>
            
            }
            
       
            </div>
            {
                props.carted ?
                                <div className={styles.cartConfirmation}>
                                    <span>Product have been added to the cart</span>
                                </div>
                            :
                                null
            }
            
        </div>
        
    )
}
export default List;