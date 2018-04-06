import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import EmptyWrap from '../EmptyWrap/EmptyWrap';

const withErrorHandler = ( WrappedComponent, axios ) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                error: null
            };
        }
        componentDidMount() {

            axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });

            axios.interceptors.response.use(res => res, error => {
                this.setState({error});
            });
        }
        errorConfirmHandler = () => {
            this.setState({error: null});
        }
        render() {
            return (
                <EmptyWrap>
                    <WrappedComponent {...this.props} />
                    <Modal show={this.state.error}
                        modalClosed={this.errorConfirmHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                </EmptyWrap>
            );
        }
    }
}

export default withErrorHandler;