import axios from "axios";
import { ADMIN_LOGIN_REQUEST, ADMIN_LOGIN_SUCCESS, ADMIN_LOGIN_FAILURE, ADMIN_LOGOUT } from './actionTypes'

const adminLoginRequest = () => {
    return { type: ADMIN_LOGIN_REQUEST };
};

const adminLoginSuccess = payload => {
    return {
        type: ADMIN_LOGIN_SUCCESS,
        payload
    };
};

const adminLoginFailure = payload => {
    return {
        type: ADMIN_LOGIN_FAILURE,
        payload
    };
};

const adminLogout = payload => {
    return {
        type: ADMIN_LOGOUT,
        payload
    };
};

export {
    adminLoginRequest,
    adminLoginSuccess,
    adminLoginFailure,
    adminLogout
};

