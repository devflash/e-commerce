import React from 'react';
import styles from './list.module.scss';
import {FaRupeeSign} from 'react-icons/fa';
import {FiPlusCircle,FiMinusCircle} from 'react-icons/fi'
const List=(props)=>{
    return(
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
                                                    <button className={styles.cartButton}>Add to cart</button>
                                                </div>
                                                <div>
                                                    <a href="#">Remove item</a>
                                                </div>
                                            </div>
                                            :
                                            <div className={styles.wishListOptions}> 
                                                <div className={styles.quanity}>
                                                    <span><FiMinusCircle/></span>
                                                    <span>1</span>
                                                    <span><FiPlusCircle/></span>
                                                </div>
                                                <div>
                                                    <a href="#">Remove item</a>
                                                </div>
                                            </div>
            
            }
            
       
    </div>
    )
}
export default List;