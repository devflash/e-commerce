import React from 'react';
import styles from './category.module.scss';

const Category = (props)=>{
    let categoryClasses=[styles[props.categoryType]];
    if(props.categorySelected)
    {
        categoryClasses.push(styles.categorySelected);
    }
    return(
        <div className={styles.category} onClick={props.categoryChange}>
            <div className={categoryClasses.join(' ')}>
                <span>{props.categoryName}</span> 
            </div>
           
        </div>
    )
}

export default Category;