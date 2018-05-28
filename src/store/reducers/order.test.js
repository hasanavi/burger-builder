import reducer from './order';
import * as actions from '../actions/index';

describe('reducer', () => {
    it('should return the initial state', () => {
        const expecetedState = {
            orders: [],
            loading: false,
            purchased: false
        };
        const mockTest = undefined;
        const mockAction = {};
        const result = reducer(mockTest, mockAction);
        expect(result).toEqual(expecetedState);
    });

    it('should return initial state for unknown action', () => {
        const expecetedState = {
            orders: [],
            loading: false,
            purchased: false
        };

        const mockState = undefined;
        const mockAction = { type: 'random-test-type' };

        const result = reducer(mockState, mockAction);
        expect(result).toEqual(expecetedState);
    });

    it('should set purchased flag to false on PURCHASE_INIT', () => {
        const mockState = {
            orders: [],
            loading: false,
            purchased: true
        };
        
        const mockAction = actions.purchaseInit();
        const result = reducer(mockState, mockAction);
 
        expect(result.purchased).toEqual(false);
        
    });
})