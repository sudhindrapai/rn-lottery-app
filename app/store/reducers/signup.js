import * as actionTypes from '../actions/actionTypes';

const signupState = {
    isLoading: false,
    isSignup: false,
    errorMessage: ""
}

const signupReducer = (state = signupState, action) => {
    switch (action.type){
        case actionTypes.TOGGLE_SIGNUP_LOADER:
            return {
                ...state,
                isLoading: !state.isLoading
            }
        case actionTypes.SET_SIGNUP_DETAILS:
            return {
                ...state,
                isLoading: false,
                isSignup: true
            }
        case actionTypes.SET_SIGNUP_ERROR_MESSAGE:
            return{
                ...state,
                isLoading: false,
                isSignup: false,
                errorMessage: action.message
            }
        case actionTypes.RESET_SIGNUP_STATE:
            console.log(" I am here")
            return{
                ...state,
                isLoading: false,
                isSignup: false,
                errorMessage: ""
            }
        default:
            return state
    }
};

export default signupReducer