import React, {Component} from 'react';
import EmptyWrap from '../../hoc/EmptyWrap/EmptyWrap';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';

import axios from '../../axios-order';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.35
}

class BurgerBuilder extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            totalPrice: 3,
            purchasable: false,
            purchasing: false,
            loading: false
        }
    }

    updatePurchase = (ingredients) => {

        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey];
        })
        .reduce((sum, el) => {
            return sum + el
        }, 0);

        this.setState({
            purchasable: sum > 0
        });        
    }

    addIngredient = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredient = {
            ...this.state.ingredients
        };
        updatedIngredient[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredient
        });
        this.updatePurchase(updatedIngredient);
    }

    removeIngredient = (type) => {
        const oldCount = this.state.ingredients[type];

        if(oldCount <= 0) {
            return;
        }

        const updatedCount = oldCount - 1;
        const updatedIngredient = {
            ...this.state.ingredients
        };
        updatedIngredient[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition;

        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredient
        });
        this.updatePurchase(updatedIngredient);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        this.setState({loading: true});
        
        const order = {
            ingredients : this.state.ingredients,
            price: this.state.totalPrice,
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
                this.setState({loading: false, purchasing: false });
            })
            .catch(error => {
                this.setState({loading: false, purchasing: false});
            });
    }

    render () {
        const disabledInfo = {
            ...this.state.ingredients
        }

        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = <OrderSummary 
                                ingredients={this.state.ingredients}
                                purchaseCanceled={this.purchaseCancelHandler}
                                purchaseContinue={this.purchaseContinueHandler}
                                totalPrice={this.state.totalPrice} />;

        if(this.state.loading) {
            orderSummary = <Spinner />;
        }

        return (
            <EmptyWrap>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    ingredientAdded={this.addIngredient}
                    ingredientRemvoed={this.removeIngredient}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    totalPrice={this.state.totalPrice}
                    orderClicked={this.purchaseHandler} />

                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                
            </EmptyWrap>
        )
    }
}

export default BurgerBuilder;