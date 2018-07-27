declare interface IApi {
    port?: number;
    host?: string;
    protocol?: string;
    url?: string;
}

export class Api implements IApi {
    port: number = 3000;
    host: string = 'localhost';
    protocol: string = 'http';
    url: string = '';

    constructor(params?: IApi) {
        if (params && typeof params.port === "number") {
            this.port = params.port;
        }
        if (params && typeof params.host === "string") {
            this.host = params.host;
        }
        if (params && typeof params.protocol === "string") {
            this.protocol = params.protocol;
        }
        if (params && typeof params.protocol === "string") {
            this.protocol = params.protocol;
        }
        this.concatUrl();
    }

    concatUrl() {
        this.url = `${this.protocol}://${this.host}:${this.port}`;
    }

}

// export const apiDefaults: IApi = {
//     port: 8107,
//     host: 'docker-1.dev1.knockout.local',
//     protocol: 'http',
// };
export const apiDefaults: IApi = {
    port: 3000,
    host: 'myexample.loc',
    protocol: 'http',
};