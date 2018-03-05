import React from 'react';
import Styles from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';


const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'mean'}
]

const buildControls = (props) => (
    <div className={Styles.BuildControls}>
        {controls.map( ctrl => (
            <BuildControl key={ctrl.label} label={ctrl.label} />
        ))}
    </div>
)

export default buildControls;