import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import styles from './CheckoutSummary.css';

const checkoutSummary = (props) => (
    <div className={styles.CheckoutSummary}>
        <h1>Hope it tastes well</h1>
        <div style={{width: '100%', margin: 'auto'}}>
            { props.ingredients ? <Burger ingredients={props.ingredients} /> : null }
        </div>
        <Button type="Danger"
            clicked={props.checkoutCancelled}>Cancel</Button>
        <Button type="Success"
            clicked={props.checkoutContinued}>Continue</Button>
    </div>
);

export default checkoutSummary;