import React from 'react';
import EmptyWrap from '../../hoc/EmptyWrap';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import styles from './Layout.css';

const layout = (props) => (
    <EmptyWrap>
        <Toolbar />
        <main className={styles.Content}>
            {props.children}
        </main>

    </EmptyWrap>
);

export default layout;