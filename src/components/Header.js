import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './HeaderStyle.css';

class Header extends Component {

    renderLinks() {
        if(this.props.authenticated) {
            return (
                <div>
                    <Link to="/feature">Feature</Link>
                    <Link to="/signout">Sign Out</Link>
                </div>
            )
        } else {
            return (
                <div>
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/signin">Sign In</Link>
                </div>
            )
        }
    }
    render() {
        return (
            <div className='header'>
                <Link to="/">Redux Auth</Link>
                {this.renderLinks()}
            </div>
        )
    }
} 

const mapStateToProps = state => {
    return {
        authenticated: state.auth.authenticated
    }
}

export default connect(mapStateToProps)(Header);