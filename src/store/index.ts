// import 'es6-promise/auto';
import Vue from 'vue';
import Vuex from 'vuex';
import {user} from "./modules/user";

Vue.use(Vuex);

export const store = new Vuex.Store({
    // Making sure that we're doing
    // everything correctly by enabling
    // strict mode in the dev environment.
    strict: process.env.NODE_ENV !== 'production',
});

store.registerModule(`user`, user);