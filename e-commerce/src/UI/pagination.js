import React from 'react';
import styles from './pagination.module.scss';

import { FaChevronLeft,FaChevronRight } from 'react-icons/fa'
const Pagination = props =>{
    return(
        <div className={styles.pagination}>
            <div className={styles.directionIcon}>
                <FaChevronLeft/>
            </div>
            <div>
                <span>1</span>
            </div>
            <div className={styles.directionIcon}>
                <FaChevronRight/>
            </div>
        </div>
    )
}

export default Pagination;