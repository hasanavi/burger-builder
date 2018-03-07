import React, {Component} from 'react';
import EmptyWrap from '../../hoc/EmptyWrap';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

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
            totalPrice: 3
        }
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
    }

    render () {
        const disabledInfo = {
            ...this.state.ingredients
        }

        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return (
            <EmptyWrap>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    ingredientAdded={this.addIngredient}
                    ingredientRemvoed={this.removeIngredient}
                    disabled={disabledInfo} />
            </EmptyWrap>
        )
    }
}

export default BurgerBuilder;