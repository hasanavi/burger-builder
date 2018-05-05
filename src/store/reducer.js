import * as actionTypes from './actions';


const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    totalPrice: 2
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    // the following is ES6 way dynamically overrise a key of an object
                    [action.ingredientName] : state.ingredients[action.ingredientName] + 1
                }
            };
        case actionTypes.REMOVE_INGREDIENTS:
        return {
            ...state,
            ingredients: {
                ...state.ingredients,
                // the following is ES6 way dynamically overrise a key of an object
                [action.ingredientName] : state.ingredients[action.ingredientName] - 1
            }
        };
        default:
            return state;
    }
}

export default reducer;