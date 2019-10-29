import React from 'react';
import Category from './Category/category';
import styles from './categories.module.scss';
const Categories = (props)=>{
    let categoryList=props.categories.map(cur=>{
        return  <Category categoryName={cur.name} categoryType={cur.type}/>
    })
    return(
        <div className={styles.categories}>
            <span>Categories</span>
            <div className={styles.categoryList}>
               {
                   categoryList
               }
            </div>
            
        </div>
    )
}

export default Categories;