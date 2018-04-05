import React from 'react';
import Modal from '../../components/UI/Modal/Modal';
import EmptyWrap from '../EmptyWrap/EmptyWrap';

const withErrorHandler = (WrappedComponent) => {
    return (props) => {
        return (
            <EmptyWrap>
                <WrappedComponent {...props} />
                <Modal >
                    Something Didn't Work
                </Modal>
            </EmptyWrap>
        );
    }
}

export default withErrorHandler;