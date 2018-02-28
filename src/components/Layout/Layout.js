import React from 'react';
import EmptyWrap from '../../hoc/EmptyWrap';
import styles from './Layout.css';

const layout = (props) => (
    <EmptyWrap>
        <div>Toolbar, SideDrawer and Backdrop</div>
        <main className={styles.Content}>
            {props.children}
        </main>
    </EmptyWrap>
);

export default layout;