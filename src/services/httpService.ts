import axios, {AxiosInstance, AxiosRequestConfig} from "axios";
import {AppConfig, configService} from '../config';

interface IhttpService {
    instance: AxiosInstance;
}

export class HttpService implements IhttpService {
    private _instance: AxiosInstance;

    constructor(httpConfig?: AxiosRequestConfig) {
        if (httpConfig) {
            this._instance = axios.create(httpConfig);
        } else {
            this._instance = axios;
        }
    }

    public get instance(): AxiosInstance {
        return this._instance;
    }

    public set instance(newInstance: AxiosInstance) {
        this._instance = newInstance;
    }
}

// let http = httpService({
//     baseURL: configService.apiBaseUrl,
//     timeout: 100000,
//     withCredentials: true,
//     xsrfCookieName: 'JWT',
//     xsrfHeaderName: 'X-Auth-Token',
//     // headers : {
//     //     common: {
//     //         'accept': 'application/json',
//     //         'content-type': 'application/json',
//     //         // 'Access-Control-Request-Headers': 'access-control-allow-origin, content-type',
//     //     }
//     // }
// });
// export default http;

export const httpService = new HttpService();
let http = httpService.instance;
export {http};