import React from 'react';
import styles from './Modal.css';
import EmptyWrap from '../../../hoc/EmptyWrap';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <EmptyWrap>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div className={styles.Modal} style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                                                opacity: props.show ? '1' : 0}}>
            {props.children}
        </div>
    </EmptyWrap>
);

export default modal;