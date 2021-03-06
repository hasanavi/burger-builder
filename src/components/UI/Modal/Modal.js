import React, {Component} from 'react';
import styles from './Modal.css';
import EmptyWrap from '../../../hoc/EmptyWrap/EmptyWrap';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    componentWillUpdate() {
        // console.log('Modal component will update')
    }

    render () {
        return (
             <EmptyWrap>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div className={styles.Modal} style={{transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                                                opacity: this.props.show ? '1' : 0}}>
            {this.props.children}
        </div>
    </EmptyWrap>
        )
    }
}

export default Modal;