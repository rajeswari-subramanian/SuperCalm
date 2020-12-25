import {
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_FAILURE,
  ADMIN_LOGOUT,
} from "./actionTypes";
import { saveData, loadData, clearData } from "../LocalStorage";

const initStore = {
  isAdminAuth: loadData('isAdminAuth') || false,
  isError: false,
};
const adminReducer = (state = initStore, { type, payload }) => {
  switch (type) {
    case ADMIN_LOGIN_REQUEST:
      return {
        ...state,
      };
    case ADMIN_LOGIN_SUCCESS:
      saveData('isAdminAuth', true);
      return {
        ...state,
        isAdminAuth: true,
      };
    case ADMIN_LOGIN_FAILURE:
      return {
        ...state,
        isError: true,
      };
    case ADMIN_LOGOUT:
      clearData();
      return {
        isAdminAuth: false,
      };
    default:
      return { ...state };
  }
};
export default adminReducer;