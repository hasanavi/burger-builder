import reducer from './reducer';
import * as actionTypes from '../actions/actions';


describe('reducer', () => {
    it('should return the initial staet', () => {
        expect(reducer(undefined, {})).toEqual({
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            totalPrice: 2
        });
    });

    it('should add ingredients and update price', () => {
        expect(reducer({
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            totalPrice: 2
        }, {
            type: actionTypes.ADD_INGREDIENTS,
            ingredientName: 'salad'
        })).toEqual({
            ingredients: {
                salad: 1,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            totalPrice: 2.5
        })
    })
});