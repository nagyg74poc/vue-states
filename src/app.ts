import './components/index';
import Vue from 'vue';
import {store} from './store';
import {App} from './components';
import {httpService, http} from './services/httpService';
import axios, {AxiosRequestConfig} from "axios";
import {configService} from "./config";

// export const VueApp = new Vue(App);

// VueApp.$mount('#vueapp');

export function bootstrap(options: any) {

    const aOptions: AxiosRequestConfig = {
        baseURL: options.apiBaseUrl,
        timeout: 100000,
        withCredentials: true,
        xsrfCookieName: 'JWT',
        xsrfHeaderName: 'X-Auth-Token',
        // headers : {
        //     common: {
        //         'accept': 'application/json',
        //         'content-type': 'application/json',
        //         // 'Access-Control-Request-Headers': 'access-control-allow-origin, content-type',
        //     }
        // }
    };

    httpService.instance = axios.create(aOptions);

    const VueApp = new Vue({
        store,
        delimiters: ['[[', ']]'],
        render: h => h(App)
    });
    VueApp.$mount('#vueapp');
}