import React from 'react';
import Category from './Category/category';
import styles from './categories.module.scss';
const Categories = (props)=>{
    return(
        <div className={styles.categories}>
            <span>Categories</span>
            <div className={styles.categoryList}>
                <Category categoryName="Clothing" categoryType="clothsCategory"/>
                <Category categoryName="Electronics" categoryType="electronicsCategory"/>
                <Category categoryName="Books" categoryType="bookCategory"/>
            </div>
            
        </div>
    )
}

export default Categories;