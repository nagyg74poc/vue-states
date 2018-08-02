import {User} from '../../@types/User';
import {loginAction, logoutAction, getUserAction, getCurrentUser, changeBalance} from '../actions/user';
import {AUTHENTICATED, UNAUTHENTICATED, SET_USER, SET_BALANCE, GET_USER_ERROR} from '../mutation-types';

const actions = {
    loginAction,
    logoutAction,
    getUserAction,
    getCurrentUser,
    changeBalance
};

const mutations = {
    [AUTHENTICATED](state: any, payload: any) {
        state.properties.isAuthenticated = true;
    },
    [UNAUTHENTICATED](state: any, payload: any) {
        state.properties.isAuthenticated = false;
    },
    [SET_USER](state: any, payload: any) {
        state.data = payload;
    },
    [SET_BALANCE](state: any, payload: any) {
        state.data.balance = payload;
    },
    [GET_USER_ERROR](state: any, payload: any) {
        state.data = {
            username: '',
            balance: {
                withdrawable: 0,
                locked: 0,
                bonus: 0,
            }
        };
    },
};

const state = (): User => ({
    data: {
        username: '',
        balance: {
            withdrawable: 0,
            locked: 0,
            bonus: 0,
        }
    },
    properties: {
        isAuthenticated: false,
    }
});

export const user = {
    namespaced: true,
    actions,
    mutations,
    state,
};