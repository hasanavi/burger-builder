import React from 'react';
import styles from './Logo.css';
import logoImg from '../../assets/images/burger-logo.png';

const logo = (props) => (
    <div className={styles.Logo}>
        <img src={logoImg} alt="burger logo" />
    </div>
);

export default logo;