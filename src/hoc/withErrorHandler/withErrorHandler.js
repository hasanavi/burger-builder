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
        componentWillMount() {

            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });

            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error});
            });
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
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