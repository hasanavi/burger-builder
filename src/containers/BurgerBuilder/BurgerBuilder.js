import React, {Component} from 'react';
import { connect } from 'react-redux';

import EmptyWrap from '../../hoc/EmptyWrap/EmptyWrap';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actionType from '../../store/actions';

import axios from '../../axios-order';

class BurgerBuilder extends Component {

    constructor(props) {
        super(props);

        this.state = {
            purchasing: false,
            loading: false,
            error: false
        }
    }

    componentDidMount () {
        // axios.get('/ingredients.json')
        //     .then(response => {
        //         this.setState({ingredients: response.data});
        //     })
        //     .catch(error => {
        //         this.setState({error: true});
        //     });
    }

    isPurchasable = (ingredients) => {

        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey];
        })
        .reduce((sum, el) => {
            return sum + el
        }, 0);

        return sum > 0;
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        this.props.history.push('/checkout');
    }

    render () {
        const disabledInfo = {
            ...this.props.ingredients
        }

        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = null;

        let burger = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner />;

        if(this.props.ingredients) {
            burger = (
                <EmptyWrap>
                    <Burger ingredients={this.props.ingredients} />
                    <BuildControls 
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemvoed={this.props.onIngredientRemoved}
                        disabled={disabledInfo}
                        purchasable={this.isPurchasable(this.props.ingredients)}
                        totalPrice={this.props.totalPrice}
                        orderClicked={this.purchaseHandler} />
                </EmptyWrap>
            )

            orderSummary = <OrderSummary 
                                ingredients={this.props.ingredients}
                                purchaseCanceled={this.purchaseCancelHandler}
                                purchaseContinue={this.purchaseContinueHandler}
                                totalPrice={this.props.totalPrice} />;
        }

        
        if(this.state.loading) {
            orderSummary = <Spinner />;
        }

        return (
            <EmptyWrap>
                {burger}
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                
            </EmptyWrap>
        )
    }
}

const mapStateToProps  = state => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice
    };
}
const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch({type: actionType.ADD_INGREDIENTS, ingredientName : ingName }),
        onIngredientRemoved: (ingName) => dispatch({type: actionType.REMOVE_INGREDIENTS, ingredientName : ingName })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));