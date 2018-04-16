import React from 'react';
import styles from './NavigationItems.css';
import {NavLink} from 'react-router-dom';

const navigationItems = (props) => (
    <ul className={styles.NavigationItems}>
        <li className={styles.NavigationItem}>
            <NavLink to="/" exact
                    activeClassName={styles.active}>Burger Builder</NavLink>
        </li>
        <li className={styles.NavigationItem}>
            <NavLink to="/orders"
            activeClassName={styles.active}>Orders</NavLink>
        </li>
    </ul>
);

export default navigationItems;