import {loginAction, logoutAction, getUserAction, getCurrentUser, changeBalance} from './actions/user';
export const SUBMIT = `SUBMIT`;
export const LOGIN = loginAction.name;
export const LOGOUT = logoutAction.name;
export const GET_USER = getUserAction.name;
export const GET_CURRENT_STATE = getCurrentUser.name;
export const CHANGE_BALANCE = changeBalance.name;
