import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, USER_LOGOUT } from './actionTypes'
import { saveData, loadData, clearData } from "../LocalStorage";

const initStore = {
    isUserAuth: loadData('isUserAuth') || false,
    userName: "",
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
                isUserAuth: false,
            };
        default:
            return { ...state };
    }
};
export default userReducer;