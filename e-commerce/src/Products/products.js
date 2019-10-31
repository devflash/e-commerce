import React from 'react';
import Product from './Product/product';
import styles from './products.module.scss';
const Products = (props)=>{
    console.log(props);
    let productList=props.products.map(cur=>{
        return <Product productId={cur.id} 
                        productName={cur.productName}
                        productPrice={cur.productPrice}
                        productRating={cur.productRating}
                        favourite={cur.favourite}
                        favouriteClick={()=>props.favouriteClick(cur.id)} />
    })
    return(
        <div className={styles.productContainer}>
            <span>Products : Category Name</span>
            <div className={styles.productList}>
                <ul>
                    <li>

                        {productList}
                        
                    </li>
                </ul>
            </div>
            
            
        </div>
    )
}

export default Products;