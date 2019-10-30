import React from 'react';
import styles from './pagination.module.scss';

import { FaChevronLeft,FaChevronRight } from 'react-icons/fa'
const Pagination = props =>{
      
    return(
        <div className={styles.pagination}>
            <button className={props.backwardEnable ? styles.enableButton : styles.disableButton}
                    onClick={props.backwardButtonClick}>
                <FaChevronLeft/>
            </button>
            <div>
                <span>{props.currentPage}</span>
            </div>
            <button className={props.forwardEnable ? styles.enableButton : styles.disableButton}
                    onClick={props.forwardButtonClick}>
                <FaChevronRight/>
            </button>
        </div>
    )
}

export default Pagination;