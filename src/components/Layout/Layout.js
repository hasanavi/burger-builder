import React, {Component} from 'react';
import EmptyWrap from '../../hoc/EmptyWrap';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import styles from './Layout.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSideDrawer: true
        }
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    render() {
        return (
            <EmptyWrap>
                <Toolbar />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </EmptyWrap>
        );
    }
}

export default Layout;