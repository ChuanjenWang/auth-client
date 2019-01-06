import axios from 'axios';

import * as actionTypes from './type';

export const signup = ( formProps, callback ) => async dispatch => {
    try{
        const repsonse = await axios.post('http://localhost:3090/signup', formProps );
        
        dispatch({type: actionTypes.AUTH_USER, payload: repsonse.data.token });
        localStorage.setItem('token', repsonse.data.token);
        
        callback();
        
    } catch(e) {
        console.log('ex:' + e);
        dispatch({type: actionTypes.AUTH_ERROR, payload: 'Email in use' })
    }
}

export const signin = ( formProps, callback ) => async dispatch => {
    try{
        const repsonse = await axios.post('http://localhost:3090/signin', formProps );
        
        dispatch({type: actionTypes.AUTH_USER, payload: repsonse.data.token });
        localStorage.setItem('token', repsonse.data.token);
        
        callback();
        
    } catch(e) {
        console.log('ex:' + e);
        dispatch({type: actionTypes.AUTH_ERROR, payload: 'Invalid login credentials' })
    }
}

export const signout = () => {
    localStorage.removeItem('token');

    return {
        type: actionTypes.AUTH_USER,
        payload: ''
    }
}