import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export default (ChildComponent) => {
    class ComposedComponent extends Component {

        componentDidMount() {
            this.shouldNavigateAway();
        }
    
        componentDidUpdate() {
            this.shouldNavigateAway();
        }
    
        shouldNavigateAway() {
            if(!this.props.auth) {
                this.props.history.push('/');
            }
        }

        render() {
            return (
                <ChildComponent {...this.props} />
            )
        }
    }  

    const mapStateToProps = (state) => {
        return {
            auth: state.auth.authenticated
        }
    }

    return connect(mapStateToProps)(withRouter(ComposedComponent));
};