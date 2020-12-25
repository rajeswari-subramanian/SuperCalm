import axios from "axios";
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, USER_LOGOUT } from './actionTypes'

const userLoginRequest = () => {
    return { type: USER_LOGIN_REQUEST };
};

const userLoginSuccess = payload => {
    return {
        type: USER_LOGIN_SUCCESS,
        payload
    };
};

const userLoginFailure = payload => {
    return {
        type: USER_LOGIN_FAILURE,
        payload
    };
};

const userLogout = payload => {
    return {
        type: USER_LOGOUT,
        payload
    };
};

export {
    userLoginRequest,
    userLoginSuccess,
    userLoginFailure,
    userLogout
};

