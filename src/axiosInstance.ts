import axios from "axios";
import {Api, apiDefaults} from './apiConfig';
import * as Cookies from 'js-cookie';

const api = new Api(apiDefaults);

export const axiosInstance = axios.create({
    baseURL: api.url,
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
});