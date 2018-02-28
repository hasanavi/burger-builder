import React, {Component} from 'react';
import EmptyWrap from '../../hoc/EmptyWrap';

class BurgerBuilder extends Component {
    render () {
        return (
            <EmptyWrap>
                <div>Burger</div>
                <div>Build Controls</div>
            </EmptyWrap>
        )
    }
}

export default BurgerBuilder;