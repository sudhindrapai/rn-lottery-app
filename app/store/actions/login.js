import * as actionTypes from './actionTypes';

export const createLogin = () => {
    return{
        type: actionTypes.SET_AUTH_DETAILS,
        isLoggedIn: true
    }
}