import axios from "axios";
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, USER_LOGOUT, USER_STATS_SHOW, USER_WEEK } from './actionTypes'

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
const userStatsShow = () => {
    return {
        type: USER_STATS_SHOW,
    };
};
const userWeek = (payload) => {
    return {
        type: USER_WEEK,
        payload
    };
};
export {
    userLoginRequest,
    userLoginSuccess,
    userLoginFailure,
    userLogout,
    userStatsShow,
    userWeek
};

