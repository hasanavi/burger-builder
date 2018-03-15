import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import EmptyWrap from '../../../hoc/EmptyWrap/EmptyWrap';
import styles from './SideDrawer.css';

const sideDrawer = (props) => {
    let attachedClasses = [styles.SideDrawer, styles.Close];
    if(props.open) {
        attachedClasses = [styles.SideDrawer, styles.Open];
    }
    return (
        <EmptyWrap>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={styles.Logo}>
                    <Logo />
                </div>
                <NavigationItems />
            </div>
        </EmptyWrap>
    );
};

export default sideDrawer;