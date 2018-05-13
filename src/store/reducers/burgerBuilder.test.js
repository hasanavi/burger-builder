import reducer from './burgerBuilder';
import * as burgerBuilderActions from '../actions/index';


describe('reducer', () => {
    it('should return the initial state', () => {
        const expecetedState = {
            ingredients: null,
            totalPrice: 2,
            error: false
        };
        const mockTest = undefined;
        const mockAction = {};
        const result = reducer(mockTest, mockAction);
        expect(result).toEqual(expecetedState);
    });

    it('should return initial state for unknown action', () => {
        const expecetedState = {
            ingredients: null,
            totalPrice: 2,
            error: false
        };

        const mockState = undefined;
        const mockAction = { type: 'random-test-type' };

        const result = reducer(mockState, mockAction);
        expect(result).toEqual(expecetedState);
    });

    it('should add ingredients and price on ADD_INGREDIENTS', () => {
        const mockState = {
            ingredients: {
                bacon: 0,
                cheese: 0,
                salad: 0,
                meat: 0
            },
            totalPrice: 2,
            error: false
        };
        
        const mockAction = burgerBuilderActions.addIngredient('salad');
        const result = reducer(mockState, mockAction);
        
        expect(result.ingredients.salad).toEqual(1);
        expect(result.totalPrice).toEqual(2.5);
        expect(result.error).toEqual(false);
        
    });
});