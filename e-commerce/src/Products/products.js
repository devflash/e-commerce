import React from 'react';
import Product from './Product/product';
import styles from './products.module.scss';
const Products = (props)=>{
    return(
        <div className={styles.productContainer}>
            <span>Products : Category Name</span>
            <div className={styles.productList}>
                <ul>
                    <li>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                    </li>
                </ul>
            </div>
            
            
        </div>
    )
}

export default Products;