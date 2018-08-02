import './components/index';
import Vue, {ComponentOptions} from 'vue';
import {store} from './store';
import {App} from './components';
import {httpService, http} from './services/httpService';
import axios, {AxiosRequestConfig} from "axios";
import {configService, IAppConfigData} from "./config";

// export const VueApp = new Vue(App);

// VueApp.$mount('#vueapp');

Vue.mixin({
    beforeCreate: function () {
        const options = this.$options;
        if (options.$appConfig) {
            this.$appConfig = typeof options.$appConfig === 'function'
                ? options.$appConfig()
                : options.$appConfig;
        } else if (options.parent && options.parent.$appConfig) {
            this.$appConfig = options.parent.$appConfig;
        }
    }
});

Vue.mixin({
    beforeCreate: function () {
        const options = this.$options;
        if (options.$http) {
            this.$http = options.$http;
        } else if (options.parent && options.parent.$http) {
            this.$http = options.parent.$http;
        }
    }
});

export function bootstrap(options: any) {

    configService.apiBaseUrl = options.apiBaseUrl;

    const $appConfig:IAppConfigData = configService.config;

    const aOptions: AxiosRequestConfig = {
        baseURL: $appConfig.apiBaseUrl,
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
        $appConfig,
        $http: httpService.instance,
        render: h => h(App)
    });
    VueApp.$mount('#vueapp');
}