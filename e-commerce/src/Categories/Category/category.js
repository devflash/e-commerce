import React from 'react';
import styles from './category.module.scss';

const Category = (props)=>{
    return(
        <div className={styles.category}>
            <div className={styles[props.categoryType]}>
                <span>{props.categoryName}</span> 
            </div>
           
        </div>
    )
}

export default Category;