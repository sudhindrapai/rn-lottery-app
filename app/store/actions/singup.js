import * as actionType from './actionTypes';
import * as endpoint from '../../networkUtilities/endpoin';

export const createAnAccount = (payload) => {
    return dispatch => {
        dispatch(toggleLoader());
        fetch(endpoint.register, {
            method: "POST",
            body: JSON.stringify(payload)
        })
        .then((response) =>{
            response.json();
            dispatch(setSignupDetails(response));
        })
        .catch((error) => {
            console.log(error,"error")
        })
    }
}


const setSignupDetails = () => {
    return{
        type: actionType.SET_SIGNUP_DETAILS,
    }
}

const toggleLoader = () => {
    return{
        type: actionType.TOGGLE_SIGNUP_LOADER
    }
}

export const resetSignupState = () => {
    return{
        type: actionType.RESET_SIGNUP_STATE
    }
}