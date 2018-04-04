import React from 'react';
import styles from './Spinner.css';

const spinner = (props) => (
    <div className={styles.Spinner}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div>Loading</div>
    </div>
);

export default spinner;