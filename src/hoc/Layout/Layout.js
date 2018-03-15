import React, {Component} from 'react';
import EmptyWrap from '../EmptyWrap/EmptyWrap';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import styles from './Layout.css';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSideDrawer: false
        }
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    drawerToogleClickHandler = () => {
        this.setState( (prevState ) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    }

    render() {
        return (
            <EmptyWrap>
                <Toolbar drawerToogleClicked={this.drawerToogleClickHandler} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </EmptyWrap>
        );
    }
}

export default Layout;