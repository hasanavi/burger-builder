import React from 'react';
import styles from './NavigationItems.css';

const navigationItems = (props) => (
    <ul className={styles.NavigationItems}>
        <li className={styles.NavigationItem}>
            <a className="active" href="/">Burger Builder</a>
        </li>
        <li className={styles.NavigationItem}>
            <a href="/">Checkout</a>
        </li>
    </ul>
);

export default navigationItems;