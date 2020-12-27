import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, USER_LOGOUT, USER_STATS_SHOW, USER_WEEK } from './actionTypes'
import { saveData, loadData, clearData } from "../LocalStorage";

const initStore = {
    isUserAuth: loadData('isUserAuth') || false,
    userName: loadData('userName') || '',
    weekName: loadData('weekName') || 'Week 1',
    userStatsShow: true,
    isError: false,
};
const userReducer = (state = initStore, { type, payload }) => {
    switch (type) {
        case USER_LOGIN_REQUEST:
            return {
                ...state,
            };
        case USER_LOGIN_SUCCESS:
            saveData('isUserAuth', true);
            saveData('userName', payload);
            return {
                ...state,
                isUserAuth: true,
                userName: payload
            };
        case USER_LOGIN_FAILURE:
            return {
                ...state,
                isError: true,
            };
        case USER_LOGOUT:
            clearData();
            return {
                ...state,
                isUserAuth: false,
                userStatsShow: true,
            };
        case USER_STATS_SHOW:
            return {
                ...state,
                userStatsShow: false,
            };
        case USER_WEEK:
            saveData('weekName', payload);
            return {
                ...state,
                weekName: payload,
            };
        default:
            return { ...state };
    }
};
export default userReducer;