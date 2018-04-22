import React from 'react';
import styles from './Input.css';

const Input = (props) => {
    let inputElement = null;
    const errorClass = props.invalid && props.shouldValidate && props.touched ? styles.Invalid : '';

    switch(props.elementType) {
        case ('input'):
            inputElement = <input {...props.elementConfig} 
                                className={errorClass}
                                value={props.value}
                                onChange={props.changed} />;
            break;
        case ('textarea'):
            inputElement = <textarea {...props.elementConfig}
                            className={errorClass}
                            value={props.value}
                            onChange={props.changed} />;
            break;
        case ('select'):
            inputElement = (
                            <select {...props.elementConfig} 
                                    className={errorClass}
                                    value={props.value} 
                                    onChange={props.changed} >
                                {
                                    props.elementConfig.options.map(option => (
                                        <option key={option.value} value={option.value}>
                                            {option.displayValue}
                                        </option>
                                    ))
                                }
                            </select>);
            break;
        default:
            inputElement = <input {...props.elementConfig} 
                                value={props.value}
                                onChange={props.changed} />

    }
    return (
        <div className={styles.Input}>
            <label>{props.label}</label>
            {inputElement}
        </div>
    )
};

export default Input;