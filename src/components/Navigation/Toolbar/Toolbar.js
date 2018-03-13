import React from 'react';
import styles from './Toolbar.css';
import Logo from '../../Logo/Logo';
import Navigation from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
    <header className={styles.Toolbar}>
        <div>Menu</div>
        <Logo />
        <nav>
            <Navigation />
        </nav>
    </header>
);

export default toolbar;