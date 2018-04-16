import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import styles from './ContactData.css';
import axios from '../../../axios-order';
import Spinner from '../../../components/UI/Spinner/Spinner';


class ContactData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            address: {
                street: '',
                postCode: ''
            },
            loading: false
        }
    }

    orderHandler = (event) => {
        event.preventDefault();

        this.setState({loading: true});
        
        const order = {
            ingredients : this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: 'Handy',
                address: {
                    street: 'Rowling wood',
                    postCode: 'E12 6UF',
                    country: 'UK'
                },
                email: 'name@email.com'
            },
            deliveryMethod: 'fastest'
        };

        axios.post('/orders.json', order )
            .then(response => {
                this.setState({loading: false });
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({loading: false });
            });
    }

    render () {
        let form = <form>
                        <input type="text" name="name" placeholder="Your name" />
                        <input type="email" name="email" placeholder="Your email" />
                        <input type="text" name="street" placeholder="Street" />
                        <input type="text" name="postcode" placeholder="Post code" />
                        <Button type="Success" clicked={this.orderHandler}>Order</Button>
                    </form>;

        if(this.state.loading) {
            form = <Spinner />;
        }

        return (
            <div className={styles.ContactData}>
                <h2>Enter your contact data</h2>
                {form}
            </div>
        );
    }
}

export default ContactData;