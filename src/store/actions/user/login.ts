import {AUTHENTICATED, UNAUTHENTICATED} from "../../mutation-types";
import {GET_USER} from "../../action-types";
import {axiosInstance} from "../../../axiosInstance";
import * as Cookies from 'js-cookie';

export const loginAction =  async ({commit, state, dispatch}: any, payload: any): Promise<void> => {
    try {
        const data = {
            username: payload.username,
            password: payload.password,
            businessUnitId: payload.businessUnitId || '116',
            ipAddress: ''
        };

        const url = `/login`;
        const method = 'POST';

        await axiosInstance({url, data, method})
            .then((response) => {
                Cookies.set('JWT', response.data.dataLayer.tokens.JWT, {
                    domain: response.data.dataLayer.domain
                });
                // axios.defaults.headers.common['X-Auth-Token'] = response.data.dataLayer.tokens.JWT;
                commit(AUTHENTICATED);
                dispatch(GET_USER, response.data.dataLayer);
            })
            .catch((error) => {
                throw new Error(error);
            });


    } catch (error) {
        commit(UNAUTHENTICATED, error.message);
    }
}