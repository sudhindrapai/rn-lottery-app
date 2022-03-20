import * as actionTypes from './actionTypes';
import * as endpoint from '../../networkUtilities/endpoin';
const setLoginDetails = (valueObj) => {
    return{
        type: actionTypes.SET_AUTH_DETAILS,
        isLoggedIn: true
    }
}

export const createLogin = (payload) => {
    console.log(payload,"login payload")
    return dispatch => {
        // dispatch(toggleLoader());
        fetch(endpoint.login, {
            method: "POST",
            body: JSON.stringify(payload)
        })
        .then((response) =>{
            return response.json();
            // console.log(response,"response")
        })
        .then((data) => {
            let responseObj = data.result;
    //         "accessToken": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjQ1Nzk0NDg4LCJleHAiOjE2NDY2NTg0ODh9.y8myDX4XSYQxQi62jUwxHfouMZChkDq-CwMJa9jKVrozMaglK5wdaxPUN3ByMJg079Ygoyx5bpxI6i5y3yqvzg",
    // "expiry": 864000000,
    // "publicUserId": "210de89d-cebf-4cdd-8b20-6f4ee6854a05",
    // "refreshToken":

    let publicUserId = responseObj.publicUserId;
    let authObj = {
        accessToken: responseObj.accessToken,
        refreshToken: responseObj.refreshToken
    }
    console.log(authObj)
            dispatch(setLoginDetails(data))
        })
        .catch((error) => {
            console.log(error,"error")
        });
    }
}