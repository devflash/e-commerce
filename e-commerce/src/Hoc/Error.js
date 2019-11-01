import React from 'react';
import styles from './Error.module.scss';
const error=(props)=>{
    return(
        <div className={styles.errorContainer}>
            <p>{props.errorMessage}</p>
        </div>
    )
}

export default error;