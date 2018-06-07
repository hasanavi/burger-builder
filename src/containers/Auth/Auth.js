import React, {Component} from 'react';
import { connect } from 'react-redux';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

import * as actions from '../../store/actions/index';

import styles from './Auth.css';

class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            controls: {
                email: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'email',
                        placeholder: 'Email'
                    },
                    value: '',
                    validation: {
                        required: true,
                        isEmail: true
                    },
                    valid: false,
                    touched: false
                },
                password: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'password',
                        placeholder: 'Password'
                    },
                    value: '',
                    validation: {
                        required: true,
                        minLength: 6,
                    },
                    valid: false,
                    touched: false
                },
            },
            formIsValid: false
        }
    }

    checkValidity(value, rules) {

        let isValid = true;
        const trimmedValue = value.trim();

        if(!rules) {
            return isValid;
        }

        if(rules.required) {
            isValid = trimmedValue !== '';
        }

        if(rules.minLength) {
            isValid = trimmedValue.length >= rules.minLength && isValid;
        }

        if(rules.maxLength) {
            isValid = trimmedValue.length <= rules.maxLength && isValid;
        }

        return isValid;
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value)
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderControl = {
            ...this.state.controls
        };
        const updatedFormElement = {
            ...updatedOrderControl[inputIdentifier]
        }

        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderControl[inputIdentifier] = updatedFormElement;

        let formIsValid = true;

        for(let inputIdentifier in updatedOrderControl ) {
            formIsValid = updatedOrderControl[inputIdentifier].valid && formIsValid;
        }

        this.setState({controls: updatedOrderControl, formIsValid: formIsValid});
    };

    render () {
        const formElementsArray = [];
        
        for(let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        const form = <form onSubmit={this.submitHandler}>
                    {formElementsArray.map(formElement => (
                        <Input 
                            key={formElement.id}
                            elementType={formElement.config.elementType} 
                            elementConfig={formElement.config.elementConfig} 
                            value={formElement.config.value}
                            invalid={!formElement.config.valid}
                            shouldValidate={formElement.config.validation}
                            touched={formElement.config.touched}
                            changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                    ))}
                        
                    <Button type="Success" disabled={!this.state.formIsValid} >Submit</Button>
                    </form>;

        return (
            <div className={styles.Auth}>
               {form}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.auth(email,password))
    }
}

export default connect(null, mapDispatchToProps)(Auth);