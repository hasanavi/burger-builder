import React, {Component} from 'react';
import EmptyWrap from '../../hoc/EmptyWrap';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    render () {
        return (
            <EmptyWrap>
                <Burger />
                <div>Build Controls</div>
            </EmptyWrap>
        )
    }
}

export default BurgerBuilder;