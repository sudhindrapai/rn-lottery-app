import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isSignedin: false,
    accessToken: "Test access token",
    refreshToken: ""
}

const authReducer = (state = initialState , action) => {
    switch(action.type){
        case actionTypes.SET_AUTH_DETAILS:
            return{
                ...state,
                accessToken: "action.isLoggedin"
            }
        default:
            return state
    }
}

export default authReducer