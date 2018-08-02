export interface IAppConfig extends IAppConfigData {
    config: any;
}

export interface IAppConfigData {
    sameDomain: boolean | void;
    apiBaseUrl: string;
}

export class AppConfig implements IAppConfig {
    public config: IAppConfigData;
    private _sameDomain: boolean;
    private _apiBaseUrl: string;

    constructor() {
        this.config = {
            sameDomain: false,
            apiBaseUrl: ''
        };
        this._sameDomain = false;
        this._apiBaseUrl = 'http://docker-1.dev1.knockout.local:8107';
        this.setConfig();
    }

    public get sameDomain(): boolean {
        return this._sameDomain;
    }

    public set sameDomain(isSameDomain: boolean) {
        this._sameDomain = isSameDomain;
        this.setConfig();
    }

    public get apiBaseUrl(): string {
        return this._apiBaseUrl;
    }

    public set apiBaseUrl(apiUrl: string) {
        this._apiBaseUrl = apiUrl;
        this.setConfig();
    }

    private setConfig() {
        this.config.sameDomain = this._sameDomain;
        this.config.apiBaseUrl = this._apiBaseUrl;
    }
}

export const configService = new AppConfig();
export default {configService};