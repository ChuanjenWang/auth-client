import * as actionTypes from '../actions/type';

const INITIAL_STATE = {
    authenticated: localStorage.getItem('token'),
    errorMessage: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.AUTH_USER: 
            return {
                ...state, 
                authenticated: action.payload,
                errorMessage: ''
            }
        case actionTypes.AUTH_ERROR:
            return {
                ...state, errorMessage: action.payload
            }
        default: 
            return state;
    }
}