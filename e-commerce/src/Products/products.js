import React from 'react';
import Product from './Product/product';
import styles from './products.module.scss';
const Products = (props)=>{
    
    let productList=props.products.map(cur=>{
        return <Product key={cur.id}
                        productId={cur.id} 
                        productName={cur.productName}
                        productPrice={cur.productPrice}
                        productRating={cur.productRating}
                        favourite={cur.favourite}
                        carted={cur.carted}
                        favouriteClick={()=>props.favouriteClick(cur.id)} 
                        cartClick={()=>props.cartClick(cur.id)}/>
    })
    return(
        <div className={styles.productContainer}>
            <span>Products : {props.categoryName}</span>
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