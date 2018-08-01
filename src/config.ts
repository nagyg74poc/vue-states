export interface IAppConfig {
    sameDomain: boolean | void;
    apiBaseUrl: string | void;
}

export class AppConfig implements IAppConfig{
    private _sameDomain: boolean;
    private _apiBaseUrl: string;

    constructor() {
        this._sameDomain = false;
        this._apiBaseUrl = 'http://docker-1.dev1.knockout.local:8107';
    }

    public get sameDomain(): boolean {
        return this._sameDomain;
    }

    public set sameDomain(isSameDomain: boolean) {
        this._sameDomain = isSameDomain;
    }

    public get apiBaseUrl():string {
        return this._apiBaseUrl;
    }

    public set apiBaseUrl(apiUrl: string) {
        this._apiBaseUrl = apiUrl;
    }
}

export const configService = new AppConfig();
export default { configService };