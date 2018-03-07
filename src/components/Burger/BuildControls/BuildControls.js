import React from 'react';
import Styles from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';


const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
]

const buildControls = (props) => (
    <div className={Styles.BuildControls}>
        <p>current price: <strong>{props.totalPrice.toFixed(2)}</strong></p>

        {controls.map( ctrl => (
            <BuildControl 
                    key={ctrl.label}
                    label={ctrl.label}
                    added={() => props.ingredientAdded(ctrl.type)}
                    removed={() => props.ingredientRemvoed(ctrl.type)}
                    disabled={props.disabled[ctrl.type]} />
        ))}
    </div>
)

export default buildControls;