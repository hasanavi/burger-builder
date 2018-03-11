import React from 'react';
import EmptyWrap from '../../../hoc/EmptyWrap';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {

    const ingredientItems = Object.keys(props.ingredients).map((item) => {
        return <li key={item}>
                    <span style={{textTransform: 'capitalize'}}>{item}</span> : {props.ingredients[item]}
                </li>;
     });
    
    return (
        <EmptyWrap>
            <h3>Your order</h3>
            <p>Your burger with the following components</p>
            <ul>
                {ingredientItems}
            </ul>
            <p>Total price:<strong>{props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button type="Danger" clicked={props.purchaseCanceled}>Cancel</Button>
            <Button type="Success" clicked={props.purchaseContinue}>Continue</Button>
        </EmptyWrap>
    )
};

export default orderSummary;